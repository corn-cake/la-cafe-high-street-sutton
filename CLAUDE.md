# Next.js 16 + React 19 + Tailwind v4 + TypeScript

## Commands

- `pnpm dev` - Dev server
- `pnpm build` - Build
- `pnpm lint` - Lint
- `pnpm tsc --noEmit` - Type check

## IMPORTANT: Do Not Over-Engineer

- Make minimal changes to accomplish the task
- Do NOT add abstractions, helpers, or utilities unless explicitly asked
- Do NOT add comments, types, or error handling beyond what's needed
- Do NOT create new files unless absolutely necessary
- Prefer simple, direct solutions over "clean" architecture
- Three similar lines of code is better than a premature abstraction

## Code Style

- Server Components by default, `'use client'` only when needed
- ES modules only, use `@/*` path alias
- Tailwind v4 uses CSS-first config (no tailwind.config.js)

## Before Commit

Pre-commit hook runs lint + type-check + build. All must pass.
