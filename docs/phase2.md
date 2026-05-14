# Phase 2 — Core Error Engine (Day 3-4)

**Goal:** Functional error lookup — paste error → get explanation.

## Tasks

### 2.1 Gemini Client

- Create `lib/gemini.ts`
- Initialize with `GEMINI_API_KEY`
- Create `explainError(rawError, stackTrace, language, framework, locale)` function
- Structured prompt → expect JSON response
- Use `gemini-2.0-flash` (fast + cheap)

### 2.2 Prompt Engineering

```text
You are Sentinel, an expert debugging assistant. 
Given this error, respond in JSON format:
{
  "summary": "What it means in plain {locale}",
  "rootCause": "Why it happened",
  "fix": "Step-by-step fix",
  "codeExample": "Code snippet showing the fix",
  "prevention": "How to avoid this in the future"
}
Error: {error}
Language: {language}
Framework: {framework}
Stack Trace: {stackTrace}
```

### 2.3 pgvector Setup

- Enable pgvector in Supabase SQL Editor:
  ```sql
  CREATE EXTENSION IF NOT EXISTS vector;
  ```
- Verify vector type works with Prisma
- Test `Embedding` table creation

### 2.4 Embedding Generation

- Use Gemini `embedding-001` model → 768-dim vector
- Create helper: `generateEmbedding(text): number[]`
- Store alongside error log on cache miss

### 2.5 POST /api/errors/explain

Full endpoint logic:
1. Authenticate user via Clerk
2. Check usage quota → 429 if exceeded
3. Hash `rawError` with SHA-256
4. Query pgvector: `ORDER BY embedding <=> $1 LIMIT 1`
5. If cosine distance < 0.15 → return cached result
6. Else → call Gemini → parse JSON → store ErrorLog + Embedding + UsageLog → return

### 2.6 Error Input UI (lookup page)

- `<Textarea>` for error input
- `<Select>` for language (JavaScript, Python, Go, Rust, etc.)
- `<Select>` for framework (React, Django, Express, Next.js, etc.)
- Optional `<Textarea>` for stack trace
- Submit `<Button>` with loading spinner

### 2.7 Error Result UI

- Card layout showing:
  - Summary (badge: "cached" vs "fresh")
  - Root Cause card
  - Fix steps with code block
  - Prevention tips
- Loading skeleton during API call

## Deliverables

- [ ] Gemini API returns structured explanations
- [ ] pgvector similarity search works
- [ ] Cache hits return < 500ms
- [ ] Cache misses return < 8s
- [ ] Lookup page works end-to-end
- [ ] Error hash + embedding stored correctly
