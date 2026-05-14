# Phase 5 — Arabic / RTL (Day 7 AM)

**Goal:** Full bilingual experience with RTL layout.

## Tasks

### 5.1 Complete AR Translations

- Translate `messages/en.json` → `messages/ar.json`
- Cover all UI strings: nav, buttons, labels, placeholders, errors, pricing

### 5.2 RTL Layout

- Set `dir="rtl"` on `<html>` when locale is `ar`
- Use Tailwind `rtl:` prefix for:
  - Margins/padding flips
  - Text alignment
  - Icon positioning in buttons
- Test sidebar and nav components flip correctly

### 5.3 Gemini AR Prompting

- Send `locale: "ar"` in Gemini prompt
- Test that responses come back in Arabic
- Handle code examples staying LTR within RTL text

### 5.4 Clerk Arabic

- Configure Clerk localization:
  ```tsx
  import { arSA } from "@clerk/localizations"
  <ClerkProvider localization={arSA}>
  ```

### 5.5 Testing

- Full flow in AR: sign up → lookup → history → settings → billing
- Verify no layout breakage
- Verify code blocks render correctly in RTL mode

## Deliverables

- [ ] All UI strings translated to Arabic
- [ ] RTL layout renders correctly
- [ ] Gemini responds in Arabic when locale is `ar`
- [ ] Clerk auth pages in Arabic
- [ ] No layout/ux regressions in AR mode
