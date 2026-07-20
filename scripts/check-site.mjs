/**
 * Post-build assertions over dist/. Run after `npm run build`:
 *   node scripts/check-site.mjs
 * Exits non-zero on any failure.
 */
import fs from "node:fs";
import path from "node:path";

const DIST = "dist";
const failures = [];

function walk(dir, ext) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(p, ext));
    else if (p.endsWith(ext)) out.push(p);
  }
  return out;
}

const allPages = walk(DIST, ".html");
// concept notes live at dist/notes/<topic>/<slug>/index.html (5 path
// segments); the section index and per-topic hubs sit one level up
const notePages = allPages.filter(
  (p) =>
    p.startsWith(path.join(DIST, "notes") + path.sep) &&
    p.split(path.sep).length === 5,
);

// 1. no wikilink residue
for (const p of allPages) {
  if (fs.readFileSync(p, "utf8").includes("[[")) {
    failures.push(`wikilink residue "[[" in ${p}`);
  }
}

// 2. notes index + concept page count
if (!fs.existsSync(path.join(DIST, "notes", "index.html"))) {
  failures.push("dist/notes/index.html missing");
}
const EXPECTED_CONCEPTS = 55;
if (notePages.length !== EXPECTED_CONCEPTS) {
  failures.push(`expected ${EXPECTED_CONCEPTS} concept note pages, found ${notePages.length}`);
}

// 3. internal link + fragment integrity
const htmlCache = new Map();
const readPage = (p) => {
  if (!htmlCache.has(p)) htmlCache.set(p, fs.readFileSync(p, "utf8"));
  return htmlCache.get(p);
};
let linksChecked = 0;
for (const page of allPages) {
  const html = readPage(page);
  for (const m of html.matchAll(/href="(\/[^"]*)"/g)) {
    const url = m[1];
    if (url.startsWith("//")) continue;
    const [pathname, fragment] = url.split("#");
    const clean = pathname.replace(/\/$/, "");
    const target = clean === "" ? path.join(DIST, "index.html") : path.join(DIST, clean);
    const targetFile = fs.existsSync(target) && fs.statSync(target).isFile()
      ? target
      : path.join(target, "index.html");
    if (!fs.existsSync(targetFile)) {
      failures.push(`${page}: broken internal link ${url}`);
      continue;
    }
    if (fragment && !readPage(targetFile).includes(`id="${fragment}"`)) {
      failures.push(`${page}: fragment #${fragment} not found in ${targetFile}`);
    }
    linksChecked += 1;
  }
}

// 4. KaTeX rendering
const katexPages = notePages.filter((p) => readPage(p).includes('class="katex'));
if (katexPages.length < 45) {
  failures.push(`only ${katexPages.length} note pages contain KaTeX output (expected >= 45)`);
}
for (const p of allPages) {
  if (readPage(p).includes("katex-error")) failures.push(`katex-error in ${p}`);
}

// 5. callouts
const calloutCount = notePages
  .map((p) => (readPage(p).match(/class="callout[ "]/g) ?? []).length)
  .reduce((a, b) => a + b, 0);
if (calloutCount < 15) failures.push(`only ${calloutCount} callouts rendered (expected >= 15)`);
if (!notePages.some((p) => readPage(p).includes('data-callout="ml-context"'))) {
  failures.push('no data-callout="ml-context" found');
}
if (!notePages.some((p) => readPage(p).includes("<details class=\"callout"))) {
  failures.push("no foldable <details class=\"callout\"> found");
}

// ------------------------------------------------------------------- report
console.log(`pages: ${allPages.length} (${notePages.length} concept notes)`);
console.log(`internal links checked: ${linksChecked}`);
console.log(`note pages with KaTeX: ${katexPages.length}`);
console.log(`callouts rendered: ${calloutCount}`);
if (failures.length) {
  console.error(`\nFAILURES (${failures.length}):`);
  for (const f of failures) console.error(`  ✗ ${f}`);
  process.exit(1);
}
console.log("\nAll checks passed ✓");
