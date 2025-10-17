# Sophia Foundation (Clean Repo)

A production‑ready Next.js app with Stripe donations, AI helper, and basic impact stats.

## Tech
- Next.js App Router (TypeScript)
- Tailwind + shadcn/ui style approach
- Stripe Checkout (server route)
- OpenAI Assistant proxy

## Quick Start
```bash
npm i   # or pnpm i / yarn
cp .env.example .env.local
# Fill env: STRIPE_SECRET_KEY, OPENAI_API_KEY, NEXT_PUBLIC_SITE_URL
npm run dev
```

## Deploy on Vercel
- Import GitHub repo in Vercel
- Add env vars in Vercel dashboard
- Build command: `next build` (auto)
- Node.js: 18+ (auto)

## Stripe
- Use test mode keys first
- No webhooks required for basic flow; success page updates stats via API

## OpenAI
- Set `OPENAI_API_KEY`

## Colors
- Gold `#C9A227` / Soft Pink `#F6D6E0`
