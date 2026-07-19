# Product Requirements Document — Personal Blog on Astro + GitHub Pages

*(Paste this entire document into Claude Code as the implementation spec.)*

## TL;DR
- **Build it with Astro** (latest release **v7.1.0**; the v7.0 major shipped June 22, 2026, raising the minimum to Node.js v22) deployed to **GitHub Pages via `withastro/action@v6`** on a **Hostinger** custom domain — Astro's zero-JS-by-default output, type-safe Content Collections, and built-in build-time KaTeX + Shiki make it the decisive winner over Hugo/Jekyll/Eleventy/Next.js for a math-and-code reading site.
- **v1 (Phase 1)** ships: Newsreader/Inter/JetBrains Mono self-hosted typography, no-flash system-aware dark mode, KaTeX math (build-time), Shiki code blocks with a copy button, **Giscus** comments + reactions (GitHub Discussions), a four-pillar category/tag system, and full SEO basics.
- **Deferred but architected-for:** RSS, reading time, related posts, privacy analytics (**GoatCounter** recommended), full-text search (**Pagefind**), and newsletter — none of these require rework because content lives in typed collections with a rich frontmatter schema.

## Key Findings
1. **Astro is the correct SSG.** Across every 2026 SSG comparison it is described as "the modern default for content sites": zero JavaScript by default, islands architecture, Markdown/MDX-first Content Collections with Zod-validated frontmatter, and **built-in** build-time math (remark-math + rehype-katex) and syntax highlighting (Shiki). It has an official GitHub Pages deploy action. The alternatives each lose on a dimension that matters here (Hugo: less ergonomic Go templates; Jekyll: Ruby, slow, ecosystem declining; Eleventy: more assembly-required; Next.js static export: ships an SPA framework overkill for a blog).
2. **Giscus beats Utterances** for a GitHub-based blog: it uses the richer Discussions API (threaded replies + post reactions), has proper dark-mode theming, and is actively maintained, whereas Utterances (Issues-based) has stalled.
3. **KaTeX (not MathJax)** is the right math engine because rehype-katex renders at build time (zero client JS, fast, SEO-friendly) and leaves the LaTeX source selectable/copyable; rehype-mathjax emits non-selectable SVG.
4. **The FOUC problem is solvable** with a single `<script is:inline>` in `<head>` that sets the theme before first paint, re-applied on `astro:after-swap` for View Transitions.
5. **DNS is well-documented:** GitHub's four apex A records plus four AAAA records, and a `www` CNAME, entered in Hostinger's hPanel DNS Zone Editor; HTTPS auto-provisions once DNS resolves.

## Details

### Tech Stack Decision — RECOMMEND ASTRO (decisive)
Use **Astro v7.x** (pin the exact version; v7.0 requires Node.js ≥ 22). Justification for a DX-focused engineer:
- **Runtime performance:** zero JS by default → best Core Web Vitals for a reading site; interactivity added only as islands (theme toggle, copy button, lazy Giscus).
- **Authoring:** Content Collections + Zod give type-safe frontmatter, editor autocompletion, and build-time errors on bad frontmatter.
- **Math + code built in:** remark-math/rehype-katex and Shiki are first-class.
- **Ecosystem + longevity:** official `@astrojs/*` integrations (sitemap, mdx, rss), official GitHub Pages action, plain static HTML output (no lock-in).
- **Runner-up:** **Hugo** — only if build speed across thousands of posts ever becomes the dominant constraint. Otherwise Astro's DX wins.

### Functional Requirements (v1 / Phase 1)

**Comments — Giscus.** GitHub Discussions-based. Configure `data-mapping="pathname"`, `data-reactions-enabled="1"`, `data-theme="preferred_color_scheme"` initially. Enable Discussions on the repo (site repo or a dedicated comments repo), install the Giscus app, and set the discussion category to something other than "Announcements" (e.g., "Comments" or "General"). Wire the site theme toggle to `postMessage` the Giscus iframe (`{type:'set-theme', theme}`) so comment theme follows site theme without a reload or flash. Lazy-load the widget (optionally behind a "Load comments" click) so it never blocks the reading experience.

**Reactions — Giscus reactions** (post-level, stored on the linked Discussion). No separate service in v1.

**Dark mode — system-aware, manual toggle, no flash.** Inline `<script is:inline>` in a `BaseHead` component reads `localStorage.theme`, falls back to `window.matchMedia('(prefers-color-scheme: dark)')`, and sets `data-theme` / `.dark` on `<html>` before the body paints. Re-apply on `document.addEventListener('astro:after-swap', ...)`. Provide three explicit states: **System / Light / Dark** (System removes the localStorage key and tracks OS preference live).

**LaTeX — KaTeX at build time.** Install `remark-math` + `rehype-katex`; register in `astro.config.mjs` markdown config. **Self-host the KaTeX CSS** (import it locally; do not rely on a CDN). Inline `$...$`, display `$$...$$`. Gate the KaTeX CSS import to math posts via a `math: true` frontmatter flag to keep non-math pages lean.

**Syntax highlighting — Shiki + copy button + language label.** Shiki is Astro's built-in default; configure **dual themes** (`github-light` for light, `github-dark-dimmed` for dark) and apply via the `.astro-code` CSS variables so code follows the site theme. For the copy button and language label choose one of:
- **Expressive Code** (`astro-expressive-code`) — recommended for least custom code: bundles dual themes, copy button, language labels, editor/terminal frames, and line/word markers driven by code-fence attributes, no custom CSS/JS; **or**
- a **~60-line custom Astro component** that wraps each `pre.astro-code`, reads the `data-language` attribute, and injects a clipboard button (maximal control, no dependency); **or**
- `rehype-pretty-code` + `@rehype-pretty/transformers` `transformerCopyButton` (`visibility: 'hover'`).

**Categories/tags.** Four fixed categories as a Zod `enum` (`philosophy | mathematics | software-engineering | rants`) plus a free-form `tags` array. Generate category and tag archive pages via dynamic routes (`getStaticPaths`).

**Responsive & fast.** Mobile-first, fluid type, target **Lighthouse ≥ 95** in all four categories. Near-zero client JS (theme toggle, copy button, lazy Giscus only).

**SEO basics.** Shared `<SEO>`/BaseHead component: `<title>`, meta description, **canonical** via `new URL(Astro.url.pathname, Astro.site)`, Open Graph + Twitter Card tags with **absolute** OG image URLs, and JSON-LD `Article` schema on posts. Add `@astrojs/sitemap` (requires `site` set in config) and a `robots.txt`. Optionally the `astro-seo` component to centralize head tags.

### Non-Functional Requirements
- **Performance:** Lighthouse ≥ 95 (Perf/SEO/Best Practices/Accessibility); LCP < 2.0s; CLS < 0.1. Self-host fonts, preload the primary body font, `font-display: swap`.
- **Accessibility (WCAG 2.1 AA basics):** semantic HTML, AA contrast in both themes, visible focus states, `aria-label` on theme toggle and copy button, `sr-only` labels, full keyboard navigation, `prefers-reduced-motion` respected.
- **Maintainability:** typed content schema, componentized layouts, plain static output (no lock-in). Pin dependency versions.
- **Privacy:** no third-party trackers in v1; Giscus is the only third-party embed (lazy-loaded).

### Design Spec

**Typography — recommended pairing (all free, SIL OFL / open):**
- **Body (reading): Newsreader** — an open-source serif commissioned by Google Fonts and designed by Production Type (designer Hugues Gentile, art direction with founder Jean-Baptiste Levée); Production Type describes it as "a text family that could be elegant, sturdy, contemporary and bookish" — 42 styles across three optical sizes, shipped as a variable font under SIL OFL v1.1. Purpose-built for on-screen long-form reading with beautiful italics; ideal for philosophy/math essays.
- **Headings/UI: Inter** — the most reliable neutral sans for headings/UI, high x-height, huge language coverage. Inter + Newsreader is a well-established editorial pairing ("neutral sans headlines with a serif body literally designed for long news reading").
- **Code: JetBrains Mono** — designed by Philipp Nurullin with team lead Konstantin Bulenkov at JetBrains, under SIL Open Font License 1.1; 8 weights (100–800) plus a variable font, 139 programming ligatures, and a "JetBrains Mono NL" no-ligature build. Tall x-height and clear glyph disambiguation (1/l/I, 0/O). Alternative: **IBM Plex Mono** if you prefer the unified Plex system aesthetic for public-facing code.
- **Self-hosting:** Use Astro's **built-in Fonts API** — stable since **Astro 6.0** (`Added in: astro@6.0.0`; graduated from the experimental `experimental.fonts` flag to the top-level `fonts` config key). Configure the Fontsource provider and add the `<Font />` component in the head. It downloads/caches fonts to serve them first-party (privacy), auto-generates optimized fallbacks (reduces CLS), and emits preload links. Prefer variable fonts (single file). Preloading the primary body font is the single most effective CLS fix in Astro because Astro does not inline CSS.

**Type scale:** body 18px desktop / 16–17px mobile; line-height 1.6–1.7; modular scale ratio ~1.25 (major third): H1 ≈ 2.4–2.6rem, H2 ≈ 1.75rem, H3 ≈ 1.375rem. Never below 15px on desktop.

**Layout / measure:** prose column max-width **65–72ch**; allow code blocks/figures to run wider (full-bleed) than the prose measure. Generous vertical rhythm.

**Color palette (CSS custom properties keyed off `data-theme`):**
- *Light:* background near-white `#fdfdfc`, text `#1a1a1a`, muted `#5c5c5c`, restrained ink-blue/teal link accent, border `#e5e5e5`.
- *Dark:* background `#111111`/`#1a1a1a`, text `#e8e6e3`, muted `#a0a0a0`, slightly lightened link accent, border `#2a2a2a`.
- Verify all foreground/background pairings pass WCAG AA with a contrast checker.

**Spacing:** 8px base scale (4/8/12/16/24/32/48/64) for consistent section rhythm.

### Content Model / Frontmatter Schema
`src/content.config.ts` using the `glob` loader + Zod:
```ts
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum(["philosophy","mathematics","software-engineering","rants"]),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    math: z.boolean().default(false),   // opt-in KaTeX CSS per post
    heroImage: z.string().optional(),
    ogImage: z.string().optional(),
  }),
});
export const collections = { posts };
```
**Draft workflow:** filter drafts out of production but keep them visible in dev:
`getCollection('posts', ({ data }) => import.meta.env.PROD ? !data.draft : true)`.

### Repository Structure
```
/
├─ .github/workflows/deploy.yml
├─ public/
│  ├─ CNAME                 # single line: yourdomain.com
│  ├─ robots.txt
│  └─ favicon.svg
├─ src/
│  ├─ components/  (BaseHead, ThemeToggle, Giscus, CodeCopy, SEO…)
│  ├─ layouts/     (BaseLayout, PostLayout)
│  ├─ content/posts/*.md(x)
│  ├─ content.config.ts
│  ├─ pages/
│  │  ├─ index.astro              # home / recent posts
│  │  ├─ posts/[...slug].astro    # post pages
│  │  ├─ categories/[category].astro
│  │  ├─ tags/[tag].astro
│  │  ├─ about.astro
│  │  └─ 404.astro
│  └─ styles/global.css
├─ astro.config.mjs
└─ package.json
```

**Local dev workflow (VS Code):** `npm create astro@latest` → install → `npm run dev` (http://localhost:4321). Author posts as Markdown/MDX in `src/content/posts/`. Recommended extensions: Astro, ESLint, Prettier + `prettier-plugin-astro`, MDX. Draft on a branch → PR → merge to `main` triggers deploy.

### Deployment & DNS (GitHub Pages + Hostinger)

**`astro.config.mjs`:** set `site: 'https://yourdomain.com'`; **do not** set `base` (custom apex domain). Add `@astrojs/sitemap`, `@astrojs/mdx`, and the markdown remark/rehype math plugins.

**GitHub Actions — `.github/workflows/deploy.yml`:**
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
  workflow_dispatch:
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v7
      - uses: withastro/action@v6   # defaults to Node 24; package manager auto-detected from lockfile
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v5
```
Per the official `withastro/action` README/`action.yml`: `node-version … Defaults to 24` and `package-manager … Automatically detected based on your lockfile` (accepts npm, yarn, pnpm, bun, deno). Commit your lockfile.

**GitHub setup:** Settings → Pages → Source = **GitHub Actions**. Add the custom domain in Settings → Pages → Custom domain (this manages the `public/CNAME`). Verify the domain under your GitHub **account** Settings → Pages by adding the TXT record GitHub provides. After the DNS check passes, tick **Enforce HTTPS** (GitHub auto-provisions a Let's Encrypt certificate).

**Hostinger DNS (hPanel → Domains → DNS / Nameservers → DNS Zone Editor).** Confirm the domain uses Hostinger nameservers first. Delete any default parking A record and default `www` CNAME that would conflict. Then add (per GitHub Docs, "Managing a custom domain for your GitHub Pages site"):

*Apex host `@` — four A records (IPv4):*
```
185.199.108.153
185.199.109.153 
185.199.110.153
185.199.111.153
```
*Apex host `@` — four AAAA records (IPv6, recommended):*
```
2606:50c0:8000::153
2606:50c0:8001::153
2606:50c0:8002::153
2606:50c0:8003::153
```
*`www` — CNAME → `<username>.github.io`* (the github.io host only, **no** repo name). GitHub auto-redirects apex ↔ www once both are configured.

Notes: use `@` for the root host and `www` for the subdomain (Hostinger appends the domain automatically). GitHub **strongly recommends you do not use wildcard DNS records** (`*.example.com`) due to takeover risk. Propagation is usually minutes, up to 24h. Verify: `dig yourdomain.com +noall +answer -t A`.

### Site Structure / Pages
- **Home:** recent posts (title, date, category, description) + short intro.
- **Post page:** typographic prose, KaTeX math, Shiki code with copy button, tag/category links, lazy Giscus comments + reactions.
- **Category archives:** one page per pillar.
- **Tag archives:** one page per tag.
- **About:** bio.
- **404:** custom friendly page.

## Recommendations
**Stage 1 — Scaffold & design system (do first).** `npm create astro@latest` (blog template), pin Astro v7.x, configure `site`, add `@astrojs/mdx` + `@astrojs/sitemap`, wire the Fonts API for Newsreader/Inter/JetBrains Mono (variable, preload body font), and build `BaseLayout` + `PostLayout` + global CSS tokens (light/dark). *Benchmark to advance:* dev site renders a sample post at 65–72ch with both themes and no flash.

**Stage 2 — Content pipeline.** Add `content.config.ts` with the schema above, the draft filter, and category/tag dynamic routes; author 2–3 real posts (one math-heavy, one code-heavy). *Benchmark:* bad frontmatter fails the build; drafts hidden in prod, shown in dev.

**Stage 3 — Reading features.** Enable remark-math/rehype-katex (self-hosted CSS, gated by `math` flag), Shiki dual themes + Expressive Code (or custom copy button), and the three-state theme toggle with `astro:after-swap` re-apply. *Benchmark:* math is build-time HTML (selectable), code has a working copy button, theme never flashes on load or navigation.

**Stage 4 — Comments & SEO.** Add Giscus (Discussions enabled, app installed, theme synced via postMessage, lazy-loaded) and the `<SEO>` component (canonical, OG/Twitter, JSON-LD) + sitemap + robots.txt. *Benchmark:* a comment/reaction persists to Discussions; social debuggers render the OG card.

**Stage 5 — Ship.** Add the deploy workflow, set Pages source to GitHub Actions, configure Hostinger DNS + domain verification, enforce HTTPS. *Benchmark:* push to `main` deploys; `https://yourdomain.com` loads with www→apex redirect and a valid cert; Lighthouse ≥ 95 mobile on a post.

**Then Phase 2+ (in order, only when wanted):** RSS via `@astrojs/rss` → reading time (remark plugin) → related posts (shared tags/category) → **GoatCounter** analytics → **Pagefind** search → newsletter. *Thresholds that would change priorities:* if organic traffic matters early, pull analytics + RSS forward; if the archive exceeds ~50 posts, pull Pagefind search forward; if build times ever exceed a few seconds at hundreds of posts, reconsider Hugo.

**Analytics candidates (Phase 3):** **GoatCounter** is recommended for a personal blog — its `count.js` is ~3.2K (unminified per the official GoatCounter docs), it is created by Martin Tournoij under EUPL-1.2, hashes IPs with a salt that rotates every 8 hours, and its homepage states it is "currently offered for free for reasonable public usage." **Umami** (MIT, self-host, ~2KB) and **Plausible** (polished; paid cloud or self-host) are the alternatives. All are cookieless and generally need no consent banner.

## Caveats
- **Astro moves fast.** v7.1.0 is current and the Fonts API/Content Layer are stable, but pin exact versions and re-verify the `withastro/action` major tag and default Node version at build time.
- **Giscus requires GitHub accounts** to comment (fine for a technical audience; no anonymous comments). Giscus is under active development and its API can change.
- **DNS/version specifics:** GitHub's Pages IPs and the action version here are from official GitHub/Astro docs; some "2026 setup" walkthroughs consulted are lower-authority — treat the official docs as canonical and re-check before launch.
- **Optical/variable fonts:** confirm the Fontsource variable builds of Newsreader and JetBrains Mono are imported (single file per family) to keep payload small; verify no CLS after preloading.