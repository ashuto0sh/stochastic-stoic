# Phase 3 Spec — Stochastic Stoic (stochastic-stoic.in)

*(Implementation spec for Claude Code. Read fully before writing code. Assumes Phase 1 + Phase 2 are complete: Astro v7.x on GitHub Pages via `withastro/action`, custom domain set as `site`, `posts` + `notes` collections, About page, RSS at `/rss.xml`, build-time OG images.)*

## Scope — three features, nothing else

1. Full-text search (Pagefind)
2. GoatCounter analytics
3. Reading time on posts

**Global constraints (apply to all three):**
- Preserve the minimal aesthetic: match existing fonts, colors (CSS custom properties), spacing tokens, and both themes. No new fonts or colors.
- Client-side JavaScript only where unavoidable: Pagefind's lazy-loaded UI and GoatCounter's counter script are the only permitted additions. Reading time must add zero client JS.
- No cookies, no consent banner requirements, no third-party trackers beyond GoatCounter.
- All existing pages, URLs, feeds, OG images, and the deploy workflow must continue to work unchanged.

---

## Feature 1 — Search (Pagefind)

**Dependencies:** `pagefind` and `@pagefind/default-ui` as dev dependencies (or the `astro-pagefind` integration if it supports the pinned Astro version — try the integration first; fall back to the manual postbuild approach and report which was used).

**Indexing (build step):**
- Pagefind indexes the **built HTML**, so it must run after `astro build`. If using the manual approach, change the build script to `astro build && pagefind --site dist` and confirm this works identically in the GitHub Actions workflow (the `withastro/action` runs the package.json build script — verify, and if it does not, add an explicit workflow step after the build action's output is produced but before upload; prefer the solution that keeps the workflow unchanged).
- Index **both posts and notes**, but nothing else: add `data-pagefind-body` to the article/prose container in the post and note layouts only. Headers, navs, footers, and index/archive pages must not pollute the index.
- Tag each result with its type and category for filtering: `data-pagefind-filter="type:post"` / `type:note`, and `data-pagefind-filter="category"` on posts (use the existing category value). Add `data-pagefind-meta="date"` for the pub/updated date.
- Exclude the comments container (Giscus) and any code-copy button labels from indexing with `data-pagefind-ignore`.

**UI:**
- New page at `/search` (`src/pages/search.astro`) using BaseLayout: a heading, the Pagefind default UI mounted in a container, and nothing else. Load the Pagefind JS/CSS **only on this page** — no global bundle impact.
- Restyle the default UI with CSS overrides (Pagefind exposes `--pagefind-ui-*` custom properties) to match the site: map them to the existing theme tokens so search follows light/dark automatically. Set the UI font to the site's Inter stack, result titles to Newsreader.
- Add a "Search" link to the header nav (Posts · Notes · About · Search) — text link only, no magnifying-glass icon, consistent with the minimal aesthetic. Optional keyboard shortcut `/` to focus the search input **only on the /search page** (tiny inline script scoped to that page is acceptable).
- Show the type/category filters that Pagefind derives from the `data-pagefind-filter` attributes.

**Acceptance criteria:**
- `npm run build && npm run preview` → `/search` returns relevant results for a term that appears only in a note, and for a term that appears only in a post; filters narrow correctly.
- A term appearing only in the footer or nav returns zero results.
- Search page works with JS enabled; with JS disabled it shows a graceful "Search requires JavaScript" message (noscript).
- No Pagefind assets load on any page other than `/search` (verify via network panel).
- The deployed production site's search works on the live domain (Pagefind bundle present in the published artifact).

---

## Feature 2 — GoatCounter analytics

**Setup (manual step for me, document it):** create a GoatCounter account at goatcounter.com with site code `stochastic-stoic` → the count endpoint becomes `https://stochastic-stoic.goatcounter.com/count`. Put the site code in one obvious place (a constant in `src/consts.ts` or equivalent) so it is not scattered.

**Integration:**
- Add the standard GoatCounter script to BaseHead, loaded on **production builds only** (`import.meta.env.PROD`) so local dev and previews don't pollute the stats:
  ```html
  <script data-goatcounter="https://stochastic-stoic.goatcounter.com/count"
          async src="//gc.zgo.at/count.js"></script>
  ```
- No custom event tracking, no click tracking, no scroll depth — pageviews only.
- Respect readers who block it: the script failing to load must have zero effect on the page (it already behaves this way; just do not wrap it in anything that could throw).
- Add one sentence to the About page placeholder area noting the site uses privacy-friendly, cookieless analytics (GoatCounter) — keep it to a single unobtrusive line.

**Acceptance criteria:**
- Production build includes the script exactly once per page; dev build includes it nowhere.
- No cookies are set by the site before or after the script loads.
- Lighthouse performance score on a post page does not drop (script is async and ~3KB).
- After deploy, visiting the live site registers a pageview in the GoatCounter dashboard (I will verify this half manually).

---

## Feature 3 — Reading time

**Dependencies:** `reading-time` and `mdast-util-to-string` (build-time only).

**Implementation:** the canonical Astro pattern — a small remark plugin that computes reading time from the markdown text and injects it into frontmatter:
- Create `src/plugins/remark-reading-time.mjs`: use `mdast-util-to-string` on the tree, pass to `reading-time`, write `data.astro.frontmatter.minutesRead` (store the rounded integer minutes, not the prose string, so display formatting stays in the components).
- Register in `astro.config.mjs` markdown config. Confirm it applies to both `.md` and `.mdx` content.
- Do **not** add reading time to the content collection schema (it is derived, not authored). Access it via `remarkPluginFrontmatter` from the rendered entry.

**Display — posts only, not notes** (notes are atomic reference pages; a read-time label is noise there):
- Post page header: append to the existing date/category metadata line as "· 7 min read" in the same muted style.
- Post listings (homepage, category archives, tag archives): same treatment on each item's meta line.
- RSS: leave the feed untouched.
- Edge cases: minimum display "1 min read"; math-heavy posts will undercount (KaTeX source compresses to few "words") — acceptable, do not attempt to correct for it.

**Acceptance criteria:**
- Every post page and listing shows a plausible reading time; a long post shows a larger number than a short one.
- Notes pages and the notes index show no reading time anywhere.
- Zero client-side JS added; values are identical between dev and production builds.
- Build succeeds with no schema changes to `posts` or `notes`.

---

## Implementation order & workflow

Order: **reading time → GoatCounter → search** (smallest to largest; search touches the build pipeline so it goes last, isolated). One commit per feature. After each: `npm run build && npm run preview`, verify that feature's acceptance criteria, stop for my review. Do not push until all three are approved. For search, additionally confirm the GitHub Actions workflow produces the Pagefind bundle before marking it done.

## Out of scope (do not add)

Newsletter, related posts, share buttons, comment changes, tag clouds, "popular posts" widgets driven by analytics, search on any page other than /search, redesigns of existing pages.