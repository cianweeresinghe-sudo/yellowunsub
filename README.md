# YellowUnsub

A programmatic SEO site: **one page per brand**, showing how to unsubscribe from their emails (UK-first).

## Tech
- Astro (static)
- GitHub Pages (via Actions)

## Local dev
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Content
Brand data lives in:
- `src/data/brands.ts`

Pages:
- Home: `src/pages/index.astro`
- Brand pages: `src/pages/unsubscribe/[slug].astro`
- Directory: `src/pages/unsubscribe/index.astro`
- Category: `src/pages/unsubscribe/category/[category].astro`
- Gmail guide: `src/pages/unsubscribe/guides/gmail/index.astro`

## Affiliate links / disclosure
- Skimlinks can be enabled by setting `skimlinksPublisherCode` in `src/config.ts`.
- Always keep official unsubscribe links separate from alternatives.

## Deploy
Push to `main` → GitHub Actions builds → GitHub Pages deploy.
