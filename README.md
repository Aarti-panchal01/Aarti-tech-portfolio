# aarti-panchal.site — technical portfolio

One-page personal site for Aarti Panchal: a short bio and four essays about real work (the Angular 4 → 20 migration of India's 104 health helpline UI for AMRIT/Piramal Swasthya under C4GT 2026, 2-qubit NMR quantum computing at Quanad Lab, the ARIA research agent, and Khoj).

Every factual claim on the page traces back to [`research/facts.md`](research/facts.md) (site scrape, GitHub API data, repo READMEs). The exact copy lives in [`research/content.md`](research/content.md). Unilateral judgment calls are logged in [`DECISIONS.md`](DECISIONS.md).

## Stack

- [Next.js 15](https://nextjs.org/) (App Router) + TypeScript
- Tailwind CSS v4
- Static export (`output: 'export'`) — builds to plain HTML/CSS in `out/`, no server needed

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static export to out/
```

## Deploy

Import this repo at [vercel.com/new](https://vercel.com/new) — Vercel auto-detects Next.js, zero config needed — then attach a custom domain under Project → Settings → Domains. (The static `out/` also works on GitHub Pages, Netlify, or any static host.)
