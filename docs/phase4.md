# Phase 4 — Billing (Day 6)

**Goal:** Users can subscribe to Pro/Team via Stripe.

## Tasks

### 4.1 Stripe Setup

- Create products in Stripe Dashboard:
  - Pro: $15/month (recurring)
  - Team: $50/month (recurring)
- Copy `STRIPE_SECRET_KEY` + `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` to `.env.local`
- Setup webhook signing secret

### 4.2 POST /api/checkout

- Creates Stripe Checkout Session
- Passes `userId` + `plan` in metadata
- Returns session URL → redirect user

### 4.3 Billing Page

- Show current plan with badge
- "Upgrade to Pro" / "Upgrade to Team" buttons
- If already Pro: show "Manage Subscription" (Stripe Customer Portal)

### 4.4 Stripe Webhook

- `POST /api/webhooks/stripe`
- Handle:
  - `checkout.session.completed` → update User.plan + set stripeCustId
  - `customer.subscription.updated` → sync plan changes
  - `customer.subscription.deleted` → revert to free
- Update Clerk user metadata with plan info

### 4.5 Plan Enforcement

- Free: `UsageLog.lookupsUsed < 10`
- Pro: no limit
- Show "Upgrade to Pro" banner at bottom of lookup page for free users near limit

## Deliverables

- [ ] Stripe Checkout redirects and processes payment
- [ ] Webhook updates user plan in DB + Clerk
- [ ] Billing page shows plan and upgrade options
- [ ] Pro users have unlimited lookups
- [ ] Free users blocked at 10 with upgrade prompt
