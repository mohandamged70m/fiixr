# Phase 7 — Deploy + QA (Final)

**Goal:** Live at sentinel.dev.

## Tasks

### 7.1 Vercel Deploy

- `git init && git add . && git commit -m "initial commit"`
- `npx vercel --prod`
- Set all env vars in Vercel dashboard:
  - `DATABASE_URL`, `DIRECT_URL`
  - `CLERK_SECRET_KEY`, `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
  - `CLERK_WEBHOOK_SECRET`
  - `GEMINI_API_KEY`
  - `STRIPE_SECRET_KEY`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
  - `STRIPE_WEBHOOK_SECRET`

### 7.2 Clerk Production

- Switch Clerk instance from Development → Production
- Configure allowed redirect origins

### 7.3 Supabase Production

- Verify connection pooling works from Vercel
- Run `npx prisma db push` on production DB
- Enable pgvector extension in production

### 7.4 Stripe Webhook

- Register `stripe.com` webhook endpoint → `POST /api/webhooks/stripe`
- Test: create checkout → verify webhook fires → DB updates

### 7.5 End-to-End QA

```text
1. Visit landing page → loads correctly
2. Click "Get Started" → Clerk sign-up flow
3. Complete sign-up → redirected to dashboard
4. Paste error in lookup → see result
5. Check history → error appears
6. Upgrade to Pro → Stripe checkout → plan updates
7. Switch to Arabic → RTL layout works
8. Log out → log back in → data persists
```

### 7.6 Final Polish

- Fix any bugs found during QA
- Set up custom domain (if available)
- Monitor Vercel logs for errors
- Verify Supabase connection pool limits

## Deliverables

- [ ] App deployed to Vercel production
- [ ] All env vars set correctly
- [ ] Clerk production keys active
- [ ] Supabase production DB synced
- [ ] Stripe webhook verified
- [ ] E2E test passed end-to-end
- [ ] Live at sentinel.dev (or custom domain)
