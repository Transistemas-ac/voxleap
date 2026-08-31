<h1 align="center">VoxLeap</h1>

<p align="center"><a href="README.md">🇪🇸 Español</a> - 🇬🇧 English</p>

<p align="center">Global English communication coaching studio</p>

---

**VoxLeap** is the website of a communication coaching studio that helps professionals develop their English skills through conversations that matter. It includes an editorial landing page and an interactive English level test for technical professionals.

## ✨ Features

**Landing (`/`)**
- Hero with animated organic light beams (black, white and violet).
- Client strip with monochrome logos (Microsoft, LVMH, Iron Mountain, Grey, YPF, among others).
- Manifesto with phrases that light up on scroll.
- Programs section: 1:1 Coaching, Corporate Groups, Global Architects and MAIA Bootcamp.
- Founder section with a black & white portrait on a violet panel.

**English Level Check (`/maia`)**
- 20 grammar, reading and listening questions + an open writing response.
- Audio with playback speed controls (0.75× / 1× / 1.25×).
- Progress bar and automatic scoring with CEFR levels (A1 → C2).
- Result screen with call to action and LinkedIn / WhatsApp sharing.
- Answers sent by email via FormSubmit, with mandatory privacy consent.

**Quality**
- Full SEO: Open Graph/Twitter metadata, `sitemap.xml`, `robots.txt`, generated OG image and JSON-LD.
- Accessibility: skip link, ARIA (radiogroups, progressbar, alerts), AA contrast and `prefers-reduced-motion` support.
- Performance: optimized WebP images, inlined logos (no extra requests) and compressed audio.
- Legal pages: `/privacy` and `/terms`.
- Security headers configured in `next.config.ts`.

## 🛠️ Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack) + React 19
- TypeScript
- Section-based CSS (`src/styles/`) + CSS Module for MAIA
- Self-hosted Inter font via `next/font`

## 🚀 Scripts

```bash
pnpm install    # install dependencies
pnpm dev        # development server
pnpm build      # production build
pnpm start      # production server
pnpm lint       # eslint
```

## 📁 Structure

```
src/
├── app/
│   ├── maia/          # English Level Check (client component + CSS Module)
│   ├── privacy/       # Privacy policy
│   ├── terms/         # Terms of service
│   ├── layout.tsx     # Root layout, metadata and JSON-LD
│   ├── page.tsx       # Landing
│   ├── opengraph-image.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/        # header, scroll-reveal, maia-test, brand-marks
└── styles/            # Section-based global CSS
public/
└── logos/             # Brand SVGs
```

## 🔗 Routes

| Route    | Content                               |
| -------- | ------------------------------------- |
| `/`      | Main landing page                     |
| `/maia`  | Tech English level test               |
| `/privacy` | Privacy policy                      |
| `/terms` | Terms of service                      |

> **Note:** the `https://voxleap.com` domain used in metadata, sitemap and robots is a placeholder; replace it with the real domain before publishing.

## 📄 License

Private use. Contact: sandovalmatiasezequiel@gmail.com