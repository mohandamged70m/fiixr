# Phase 3 — User Features (Day 5)

**Goal:** Dashboard, history, settings, usage quota enforcement.

## Tasks

### 3.1 Dashboard Page

- Usage stats card: "X / Y lookups used this month"
- Recent 5 error lookups list
- Quick action: "New Lookup" button
- Upgrade banner (if free tier near limit)

### 3.2 History Page

- Paginated table: error preview, language, framework, date, cached badge
- Click row → expand or navigate to detail view
- Search/filter by error text or language

### 3.3 Error Detail Page

- Reuse `ErrorResult` component from Phase 2
- Load from `GET /api/errors/[id]`
- Show original input alongside result

### 3.4 Usage Quota Middleware

- Check `UsageLog` for current month
- If `lookupsUsed >= limit` → return 429 with upgrade prompt
- Reset logic: delete/create `UsageLog` monthly

### 3.5 Settings Page

- Display name (update Clerk + DB)
- Email (read-only)
- Locale preference toggle (EN/AR)
- Theme preference (light/dark/system)

## Deliverables

- [ ] Dashboard shows usage stats
- [ ] History page lists all past lookups
- [ ] Error detail view works
- [ ] Quota enforcement blocks free tier at 10
- [ ] Settings page updates profile
