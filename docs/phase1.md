# Phase 1 — Foundation (Day 1-2)

**Goal:** Running app at `localhost:3000` with auth, DB, i18n, and landing page.

## Tasks

### 1.1 Scaffold Next.js Project

```bash
npx create-next-app@latest sentinel-ai --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```

### 1.2 Install Dependencies

```bash
npm i @clerk/nextjs @prisma/client @google/generative-ai next-intl stripe framer-motion @heroui/react next-themes @next/mdx
npm i -D prisma
```

### 1.3 Configure HeroUI

- Add `heroui` plugin to `tailwind.config.ts`
- Wrap root layout with `<HeroUIProvider>`
- Wrap with `<ThemeProvider>` for dark mode

### 1.4 Configure Clerk

- Setup `.env.local` with `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY`
- Add `<ClerkProvider>` in root layout
- Create `middleware.ts` with `clerkMiddleware()`
- Create `/sign-in` and `/sign-up` pages with Clerk components
- Setup webhook endpoint `POST /api/webhooks/clerk`

### 1.5 Configure Supabase + Prisma

- Create Supabase project (US East)
- Copy connection strings to `.env.local`:
  - `DATABASE_URL` = pooled (port 6543)
  - `DIRECT_URL` = direct (port 5432)
- Define schema in `prisma/schema.prisma`
- Enable pgvector extension
- Run `npx prisma db push` to sync schema
- Create `lib/prisma.ts` singleton

### 1.6 Setup next-intl

- Create `i18n/request.ts` with locale detection
- Create `middleware.ts` with locale routing
- Create `messages/en.json` and `messages/ar.json` with initial translations
- Create locale-based layout

### 1.7 Build Landing Page

- Hero section with tagline and CTA buttons
- Features grid (3-4 cards showing core value)
- Pricing table (Free / Pro / Team)
- Footer with EN/AR toggle

## Deliverables

- [ ] Authentication flow works (sign up, sign in, sign out)
- [ ] User synced to Supabase via Clerk webhook
- [ ] Landing page visible at `/` with EN/AR toggle
- [ ] Prisma connected to Supabase
- [ ] HeroUI components rendering correctly
- [ ] Dark/Light mode toggle works
