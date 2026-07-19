/**
 * One-time importer: Obsidian Zettelkasten -> src/content/notes.
 *
 * - Renames notes to kebab-case slugs (github-slugger, matching Astro's
 *   glob-loader id generation).
 * - Normalizes frontmatter (title injected from filename, tags cleaned,
 *   Templater/empty `created` dropped).
 * - Bakes wikilinks/embeds into standard markdown. Heading anchors are
 *   computed with a per-file Slugger to replicate Astro's rehypeHeadingIds.
 * - Copies referenced images into src/content/notes/images.
 *
 * Run from the repo root: node scripts/import-notes.mjs
 */
import fs from "node:fs";
import path from "node:path";
import yaml from "js-yaml";
import GithubSlugger, { slug as githubSlug } from "github-slugger";

const VAULT = "/home/ashutosh-tripathi/obsidian/ml/📂 01_Zettelkasten";
const VAULT_ROOT = "/home/ashutosh-tripathi/obsidian/ml";
const OUT = "src/content/notes";
const IMG_OUT = path.join(OUT, "images");

const IMAGE_EXTS = new Set([".png", ".jpg", ".jpeg", ".svg", ".gif", ".webp"]);
const FRONTMATTER_RE = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/;

const report = {
  files: 0,
  linksRewritten: 0,
  anchorsRewritten: 0,
  unresolved: [],
  imagesCopied: [],
  warnings: [],
};

// ---------------------------------------------------------------- phase 1: read
const sources = fs
  .readdirSync(VAULT)
  .filter((f) => f.endsWith(".md"))
  .map((filename) => {
    const raw = fs.readFileSync(path.join(VAULT, filename), "utf8");
    const title = filename.slice(0, -3);
    const fmMatch = raw.match(FRONTMATTER_RE);
    let data = {};
    if (fmMatch) {
      try {
        data = yaml.load(fmMatch[1]) ?? {};
      } catch (err) {
        report.warnings.push(`${filename}: unparseable frontmatter (${err.message}); ignored`);
      }
    }
    const body = fmMatch ? raw.slice(fmMatch[0].length) : raw;
    return { filename, title, data, body };
  });

// ------------------------------------------------------- phase 2: link indexes
const slugByTitle = new Map(); // lowercased title -> slug
const slugByAlias = new Map(); // lowercased alias -> slug
const titleBySlug = new Map(); // collision detection
const headingAnchors = new Map(); // slug -> Map(lowercased heading text -> anchor)

function toArray(value) {
  if (value == null) return [];
  return Array.isArray(value) ? value : [value];
}

/** Approximate the rendered text content of a heading for slugging. */
function headingPlainText(text) {
  return text
    .replace(/!?\[\[([^\]|#]+)(?:#[^\]|]+)?(?:\|([^\]]+))?\]\]/g, (_, t, alias) => alias ?? t)
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[*_`~]/g, "")
    .trim();
}

for (const note of sources) {
  const slug = githubSlug(note.title);
  if (titleBySlug.has(slug)) {
    console.error(`FATAL: slug collision "${slug}" (${titleBySlug.get(slug)} vs ${note.title})`);
    process.exit(1);
  }
  titleBySlug.set(slug, note.title);
  note.slug = slug;
  slugByTitle.set(note.title.toLowerCase(), slug);
  for (const alias of toArray(note.data.aliases)) {
    const key = String(alias).toLowerCase();
    if (slugByTitle.has(key)) continue;
    if (slugByAlias.has(key) && slugByAlias.get(key) !== slug) {
      report.warnings.push(`ambiguous alias "${alias}" (${slugByAlias.get(key)} vs ${slug})`);
      continue;
    }
    slugByAlias.set(key, slug);
  }

  // heading anchor index (per-file slugger, document order, skip code fences)
  const slugger = new GithubSlugger();
  const anchors = new Map();
  let inFence = false;
  for (const line of note.body.split("\n")) {
    if (/^\s*(```|~~~)/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    const m = line.match(/^#{1,6}\s+(.+?)\s*#*\s*$/);
    if (!m) continue;
    const text = headingPlainText(m[1]);
    if (/\$/.test(m[1])) {
      report.warnings.push(
        `${note.title}: heading "${m[1]}" contains math — anchor slug may not match Astro's`,
      );
    }
    anchors.set(m[1].trim().toLowerCase(), slugger.slug(text));
    anchors.set(text.toLowerCase(), anchors.get(m[1].trim().toLowerCase()));
  }
  headingAnchors.set(slug, anchors);
}

function resolveTarget(target) {
  const key = target.trim().toLowerCase();
  return slugByTitle.get(key) ?? slugByAlias.get(key);
}

// ------------------------------------------------------ phase 3+4: transform
fs.mkdirSync(IMG_OUT, { recursive: true });

function copyImage(name, noteTitle) {
  const candidates = [path.join(VAULT_ROOT, name), path.join(VAULT, name)];
  const src = candidates.find((p) => fs.existsSync(p));
  if (!src) {
    report.warnings.push(`${noteTitle}: image "${name}" not found in vault`);
    return null;
  }
  const clean = path.basename(name).replace(/\s+/g, "-");
  fs.copyFileSync(src, path.join(IMG_OUT, clean));
  if (!report.imagesCopied.includes(clean)) report.imagesCopied.push(clean);
  report.warnings.push(`${noteTitle}: image "${clean}" imported — improve its alt text manually`);
  return clean;
}

function transformBody(note) {
  let body = note.body.replace(/[​﻿]/g, "");

  // Obsidian renders $$...$$ as display math anywhere; remark-math only does
  // when the fences sit on their own lines. Normalize every $$ block to
  // standalone fences (skipping any inside blockquotes, to be safe).
  body = body.replace(/\$\$([\s\S]+?)\$\$/g, (whole, inner, offset, str) => {
    const lineStart = str.lastIndexOf("\n", offset) + 1;
    if (str.slice(lineStart, offset).trimStart().startsWith(">")) return whole;
    return `\n\n$$\n${inner.trim()}\n$$\n\n`;
  });
  body = body.replace(/\n{3,}/g, "\n\n");

  // image / file embeds: ![[file]] or ![[file|size]]
  body = body.replace(/!\[\[([^\]|]+?)(?:\|[^\]]*)?\]\]/g, (whole, target) => {
    const ext = path.extname(target.trim()).toLowerCase();
    if (!IMAGE_EXTS.has(ext)) {
      report.warnings.push(`${note.title}: non-image embed ${whole} degraded to text`);
      return target.trim();
    }
    const copied = copyImage(target.trim(), note.title);
    if (!copied) return "";
    const alt = path.basename(copied, ext).replace(/[-_]+/g, " ");
    return `![${alt}](./images/${copied})`;
  });

  // wikilinks: [[Target]] / [[Target#Heading]] / [[Target|shown]] / combos
  body = body.replace(
    /\[\[([^\]|#]+?)(?:#([^\]|]+?))?(?:\|([^\]]+?))?\]\]/g,
    (whole, target, heading, alias) => {
      const slug = resolveTarget(target);
      const display = (alias ?? target).trim();
      if (!slug) {
        report.unresolved.push(`${note.title}: ${whole}`);
        return display;
      }
      let anchor = "";
      if (heading) {
        const found = headingAnchors.get(slug)?.get(heading.trim().toLowerCase());
        if (found) {
          anchor = `#${found}`;
          report.anchorsRewritten += 1;
        } else {
          report.warnings.push(`${note.title}: anchor "#${heading}" not found in "${target}" — linked without fragment`);
        }
      }
      report.linksRewritten += 1;
      return `[${display}](/notes/${slug}/${anchor})`;
    },
  );

  // TOC: its h1 is supplied by the /notes/ index page
  if (note.slug === "toc") {
    body = body.replace(/^#\s+.*\r?\n/m, "");
  }

  return body.trim() + "\n";
}

function normalizeFrontmatter(note) {
  const lines = ["---", `title: ${JSON.stringify(note.title)}`];

  const tags = [
    ...new Set(
      toArray(note.data.tags)
        .map((t) => String(t).replace(/^#/, "").trim())
        .filter(Boolean),
    ),
  ];
  if (tags.length) {
    lines.push("tags:");
    for (const t of tags) lines.push(`  - ${JSON.stringify(t)}`);
  }

  const aliases = toArray(note.data.aliases).map(String).filter(Boolean);
  if (aliases.length) {
    lines.push("aliases:");
    for (const a of aliases) lines.push(`  - ${JSON.stringify(a)}`);
  }

  const created = note.data.created;
  if (created instanceof Date) {
    lines.push(`created: ${created.toISOString().slice(0, 10)}`);
  } else if (typeof created === "string" && !created.includes("<%") && !Number.isNaN(Date.parse(created))) {
    lines.push(`created: ${new Date(created).toISOString().slice(0, 10)}`);
  } else if (created) {
    report.warnings.push(`${note.title}: dropped unusable created value ${JSON.stringify(created)}`);
  }

  lines.push("---");
  return lines.join("\n");
}

// --------------------------------------------------------------- phase 5: write
fs.mkdirSync(OUT, { recursive: true });
for (const note of sources) {
  const content = `${normalizeFrontmatter(note)}\n\n${transformBody(note)}`;
  fs.writeFileSync(path.join(OUT, `${note.slug}.md`), content);
  report.files += 1;
}

// --------------------------------------------------------------------- report
console.log(`\nImported ${report.files} notes -> ${OUT}`);
console.log(`Wikilinks rewritten: ${report.linksRewritten} (${report.anchorsRewritten} with heading anchors)`);
console.log(`Images copied: ${report.imagesCopied.length} (${report.imagesCopied.join(", ")})`);
console.log(`Unresolved links: ${report.unresolved.length}`);
for (const u of report.unresolved) console.log(`  ! ${u}`);
if (report.warnings.length) {
  console.log(`Warnings: ${report.warnings.length}`);
  for (const w of report.warnings) console.log(`  - ${w}`);
}
if (report.unresolved.length) process.exitCode = 1;
