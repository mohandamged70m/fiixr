# Phase 6 — Polish + Edge Cases (Day 7 PM)

**Goal:** Production-ready UX.

## Tasks

### 6.1 Rate Limiting

- Implement rate limiting on `POST /api/errors/explain`
- 10 requests/min per user
- Return 429 with `Retry-After` header

### 6.2 Error Boundaries

- Custom 404 page with HeroUI styling
- Custom 500 / error page
- API error handling: parse Gemini failures, DB errors, auth errors
- Toast notifications for success/error actions

### 6.3 Loading & Empty States

- Skeleton loaders on dashboard, history, lookup
- Empty state illustrations for: no history, no results
- "No errors yet" with CTA to first lookup

### 6.4 SEO

- Title + description per page
- Open Graph image for landing page
- `sitemap.xml` for crawlable pages
- `robots.txt`

### 6.5 Responsive Design

- Test mobile: lookup textarea, result cards, history table
- Nav collapses to hamburger on mobile
- Touch-friendly buttons and inputs

### 6.6 Security

- Verify Clerk session on all API routes
- Input sanitization (prevent prompt injection in Gemini)
- Rate limiting as above

## Deliverables

- [ ] Rate limiting active
- [ ] All error states handled gracefully
- [ ] Loading/empty states for every page
- [ ] SEO metadata set
- [ ] Mobile responsive
- [ ] Security checks in place
