# Phase 2 Spec — Stochastic Stoic (stochastic-stoic.in)

*(Implementation spec for Claude Code. Read fully before writing code.)*

## Context

Existing site: personal blog built per the Phase 1 PRD. Astro v7.x, deployed to GitHub Pages via `withastro/action`, custom domain `https://stochastic-stoic.in` (already set as `site` in `astro.config.mjs`). Content lives in two collections: `posts` (categories: philosophy, mathematics, software-engineering, rants) and `notes`. Typography: Newsreader (body), Inter (headings/UI), JetBrains Mono (code), self-hosted via Astro Fonts API. Light/dark themes via `data-theme` on `<html>` with CSS custom properties. Nav currently: Posts, Notes.

## Scope — three features, nothing else

1. About page
2. RSS feed
3. Open Graph images (per-post, build-time, plus site-wide default)

**Global constraints (apply to all three):**
- Zero new client-side JavaScript.
- No new runtime dependencies in the shipped site; build-time dependencies are fine.
- Match the existing design system exactly (fonts, colors, spacing tokens, 65–72ch measure). No new colors or fonts.
- Do not modify the posts/notes schemas except where explicitly stated below.
- All existing pages, URLs, and the deploy workflow must continue to work unchanged.

---

## Feature 1 — About page

**Route:** `/about` → `src/pages/about.astro`, using the existing `BaseLayout`.

**Nav:** add "About" as the last item in the header nav (Posts · Notes · About), same styling and active-state treatment as existing items. Update mobile nav if it is a separate component.

**Content:** render from a Markdown file (`src/content/about.md` or inline in the page — prefer whichever matches existing site conventions) so future edits don't require touching component code. Insert placeholder copy for me to replace, structured as:
- One-paragraph intro (who I am, what I do)
- One paragraph on what the blog covers and why "Stochastic Stoic"
- Links: GitHub, LinkedIn, email (use `TODO` placeholder URLs)

**SEO:** proper `<title>` ("About — Stochastic Stoic"), meta description, canonical, and the default OG image from Feature 3.

**Acceptance criteria:**
- `/about` renders in both themes at the prose measure with correct typography.
- Nav shows About on all pages, desktop and mobile.
- Page appears in the sitemap.

---

## Feature 2 — RSS feed

**Dependency:** `@astrojs/rss` (official integration).

**Route:** `/rss.xml` via `src/pages/rss.xml.js` (or `.ts`, matching repo conventions).

**Requirements:**
- Include **posts only** (not notes). Exclude drafts using the same filter as production pages.
- Sort newest first. Include all posts (no cap; archive is small).
- Per item: `title`, `link` (absolute URL), `pubDate`, `description` (frontmatter description — do **not** include full post HTML; math/code render poorly in readers, and the description drives click-through).
- Channel: title "Stochastic Stoic", description "Essays on philosophy, mathematics, and software engineering.", site URL from `Astro.site`, `language: en`.
- Add `customData` for `<lastBuildDate>`.

**Autodiscovery:** add to the shared head component (BaseHead):
```html
<link rel="alternate" type="application/rss+xml" title="Stochastic Stoic" href="/rss.xml" />
```

**Footer:** add a plain-text "RSS" link alongside the copyright line, styled like existing footer text.

**Acceptance criteria:**
- `/rss.xml` validates (well-formed XML; passes the W3C feed validator).
- Feed omits drafts and notes; item links resolve to live post URLs with the custom domain (not github.io).
- Autodiscovery tag present on every page; adding the URL to an RSS reader (e.g., Miniflux/Feedly) shows all published posts.

---

## Feature 3 — Open Graph images

**Approach:** build-time generation with `astro-og-canvas` (no headless browser, works in the GitHub Actions runner). If `astro-og-canvas` proves incompatible with the pinned Astro version, fall back to `satori` + `@resvg/resvg-js` with an endpoint per image — but try `astro-og-canvas` first and report which was used.

**Per-post images:** dynamic endpoint at `/og/posts/[slug].png` generating a 1200×630 PNG for every published post:
- Background: the site's light-theme background color.
- Post title in Newsreader (large, max ~3 lines, ellipsize beyond).
- Category label + "stochastic-stoic.in" in Inter, small, muted color.
- Use the same self-hosted font files already in the repo (point the generator at the local TTF/OTF; download official static instances to `src/assets/og-fonts/` if the Fonts API cache location is awkward to reference).
- Keep it typographic — no logos, gradients, or decoration.

**Default site image:** one static `/og/default.png` (same template, site title + tagline instead of a post title) used by the homepage, About, Notes index, category/tag archives, and any page without its own image.

**Head wiring (BaseHead / SEO component):**
- `og:image` with the **absolute** URL (`new URL(imagePath, Astro.site)`), plus `og:image:width` 1200, `og:image:height` 630, and `og:image:alt`.
- Upgrade `twitter:card` from `summary` to `summary_large_image` on pages that have an image.
- Post pages use their generated image; everything else uses the default. Respect the existing optional `ogImage` frontmatter field as a manual override if present.

**Acceptance criteria:**
- Build output contains one PNG per published post plus the default; build time increase is acceptable (<30s for current content volume).
- Fetching a post URL shows `og:image` resolving to a live 1200×630 PNG on the custom domain.
- Cards render correctly in social debuggers (opengraph.xyz or the LinkedIn Post Inspector).
- Titles with math notation in them (e.g., containing `$`, backslashes, or Unicode) render as plain text without crashing the generator.

---

## Implementation order & workflow

Work in three commits, one per feature, in the order above (About → RSS → OG). After each feature: run `npm run build`, verify its acceptance criteria locally (`npm run preview`), then stop for my review before the next. Do not push until all three are approved.

## Out of scope (do not add)

Search, analytics, reading time, related posts, newsletter, share buttons, comments changes, redesigns of any existing page.