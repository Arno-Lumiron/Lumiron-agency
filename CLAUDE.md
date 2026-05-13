# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Stack

Next.js 16 (App Router) · TypeScript strict · Tailwind CSS v4 · ShadCN/UI · Framer Motion · Lucide React · CVA + clsx + tailwind-merge

## Commands

```bash
npm run dev       # dev server on localhost:3000
npm run build     # production build (also runs tsc)
npm run lint      # ESLint
npx tsc --noEmit  # type-check only
```

Always run `npm run lint` **and** `npx tsc --noEmit` before considering a change done. Treat warnings as errors — they catch the issues listed below.

## Architecture

```
src/
  app/
    layout.tsx        # Root layout: Inter + Instrument Serif fonts, metadata
    page.tsx          # Home page — composes all sections
    globals.css       # Brand tokens (CSS vars), Tailwind v4 @theme, base styles
  components/
    layout/
      navbar.tsx      # Sticky nav, mobile hamburger
      footer.tsx      # Dark footer with big watermark
    sections/
      hero-section.tsx
      hero-graphic.tsx        # Animated CSS shapes (Framer Motion)
      secteurs-section.tsx    # 4-col grid of 12 industry cards
      offre-section.tsx       # 3-col grid of 6 offer cards
      produits-section.tsx    # Ori / Iko duo layout
      produit-card.tsx        # Reusable product column card
      stats-section.tsx       # Dark section with count-up numbers
      avis-section.tsx        # 4-col testimonial grid
      cta-section.tsx         # Dark CTA banner
    shared/
      animated-reveal.tsx     # Fade-up/left/right on scroll (Framer Motion + IntersectionObserver)
      animated-stagger.tsx    # Stagger container + StaggerChild
      animated-text.tsx       # Per-character wave reveal for headings
      animated-counter.tsx    # Count-up numbers (useCountUp hook)
      btn.tsx                 # CVA button with outline/primary/coral/ghost variants
      tag.tsx                 # CVA tag with black/coral/outline variants
      eyebrow.tsx             # Section eyebrow label with coral dot
      section-heading.tsx     # Two-column section header (eyebrow + h2 + lead)
    ui/                       # ShadCN-generated primitives (do not hand-edit)
  hooks/
    use-reduced-motion.ts     # Reads prefers-reduced-motion
    use-count-up.ts           # RAF-based count-up animation
  lib/
    constants.ts    # All copy/data (NAV_LINKS, OFFRE_ITEMS, STATS, TESTIMONIALS, PRODUCTS, SECTEURS)
    utils.ts        # cn() helper
  types/
    index.ts        # Shared TypeScript interfaces
```

## Design system

Brand colors are defined as CSS custom properties in `globals.css` and exposed as Tailwind utilities via `@theme inline`:

| Token        | Value     |
| ------------ | --------- |
| `ivoire`     | `#F0EEE8` |
| `encre`      | `#1A1A1A` |
| `coral`      | `#FF5C39` |
| `gris`       | `#6B6B6B` |
| `gris-light` | `#9C9486` |

Use them in Tailwind as `bg-coral`, `text-encre`, `border-ivoire-soft`, etc. **Never** inline a hex (`bg-[#FF5C39]`) — if a color is used twice, it belongs in `@theme`.

---

## Conventions

### Next.js

- **Internal navigation uses `<Link>` from `next/link`.** Never use `<a href="/...">` for in-app routes — ESLint (`@next/next/no-html-link-for-pages`) will flag it, and you lose client-side navigation + prefetching.

  ```tsx
  // ❌ Wrong
  <a href="/contact">Contact</a>;

  // ✅ Right
  import Link from "next/link";
  <Link href="/contact">Contact</Link>;
  ```

  External URLs (`https://…`, `mailto:`, `tel:`) stay as `<a>` and add `target="_blank" rel="noopener noreferrer"` when opening in a new tab.

- **Use `next/image`** instead of `<img>` for any static asset. Always pass `width` + `height` (or `fill` with a sized parent) and a descriptive `alt`. Use `priority` only on above-the-fold images (typically the hero).
- **Use `next/font`** (already wired in `layout.tsx`). Never load fonts via `<link>` or `@import` in CSS.
- **Server Components by default.** Add `"use client"` only when the file genuinely needs `useState`, `useEffect`, `useRef`, an event handler, Framer Motion, or a browser API. If only one leaf needs it, push the `"use client"` down to that leaf — don't make a whole section client-side for one button.
- **Metadata** lives in `layout.tsx` (global) or in route-level `page.tsx` via the `metadata` export — never via `<Head>`.

### Tailwind CSS v4 — no arbitrary values when a token exists

- **Prefer the scale.** If a number maps to a built-in step, use it. The Tailwind ESLint plugin (`tailwindcss/no-unnecessary-arbitrary-value`, `tailwindcss/enforces-shorthand`) will warn otherwise.
  ```tsx
  // ❌ max-w-[360px]   → ✅ max-w-90
  // ❌ p-[16px]        → ✅ p-4
  // ❌ text-[18px]     → ✅ text-lg
  // ❌ mt-[2rem]       → ✅ mt-8
  // ❌ rounded-[8px]   → ✅ rounded-lg
  // ❌ gap-[24px]      → ✅ gap-6
  // ❌ bg-[#FF5C39]    → ✅ bg-coral
  ```
  Arbitrary values are reserved for genuinely off-scale design hand-offs (e.g. `top-[37px]` from a Figma spec).
- **Shorthand utilities.** `mx-4 my-4` → `m-4`. `px-2 py-2` → `p-2`. `rounded-tl-md rounded-tr-md` → `rounded-t-md`.
- **Compose classes with `cn()`** from `lib/utils.ts` (clsx + tailwind-merge). Never concatenate class strings manually — `cn()` deduplicates conflicting utilities (`p-2 p-4` → `p-4`).
- **Responsive prefixes go after base classes** in each logical group: `flex items-center md:flex-row md:items-start`, not interleaved.
- **No inline `style={{}}`** except for dynamic CSS variables (e.g. `style={{ "--rd": delay }}`).

### TypeScript

- **Strict mode is on.** No `any`. Use `unknown` + narrowing when truly unknown. Prefer `type` for unions/aliases, `interface` for object shapes meant to be extended.
- **Props at the top of the file**, named `XxxProps`, exported only when reused.
- **No non-null assertions (`!`)** unless commented with why it's safe.
- **Shared types live in `src/types/index.ts`.** Component-local types stay in the component file.
- **No `React.FC`** — type props explicitly: `function ProduitCard({ title }: ProduitCardProps)`.

### Components

- **One component per file.** File name kebab-case (`produit-card.tsx`), export name PascalCase (`ProduitCard`).
- **Variants via CVA.** Buttons, tags, badges: define variants with `class-variance-authority` and export the `cva` config alongside the component for type inference.
- **Composition over props explosion.** Prefer `children` and slots over 10 boolean props.
- **No copy in JSX.** Every user-facing string lives in `src/lib/constants.ts`. Sections read from constants and render — they don't hardcode labels.
- **Sections are self-contained.** A section pulls its data from constants and its primitives from `shared/`. It shouldn't reach into another section.
- **Icons** come from `lucide-react`. Set `aria-hidden` on decorative icons; pair with a visible label or `aria-label` when interactive.

### Accessibility

- Every interactive element is a `<button>`, `<Link>`, or `<a>` — never a `<div onClick>`.
- Every image has a meaningful `alt`, or `alt=""` if purely decorative.
- Headings follow document order: one `<h1>` per page (the hero), `<h2>` per section, no skipping levels.
- Contrast: text on `bg-ivoire` uses `text-encre` or `text-gris`. Avoid `text-gris-light` for body copy.
- Animations are gated by `useReducedMotion()` — if the user opted out, render the end state directly without transition.
- Focus states are visible — don't strip `outline` without providing a `focus-visible:` ring.

### Performance

- No client component imports a server-only library (`fs`, `node:` modules, server SDKs).
- Lazy-load heavy below-the-fold pieces with `next/dynamic` when they pull large deps (charts, 3D, etc.).
- Framer Motion: prefer `whileInView` over hand-rolled IntersectionObserver when the existing `AnimatedReveal` doesn't fit. Consider `LazyMotion` + `domAnimation` if bundle size becomes a concern.

---

## Pre-commit checklist

Walk this list before saying "done":

1. `npm run lint` — zero warnings, zero errors.
2. `npx tsc --noEmit` — zero errors.
3. No `<a href="/...">` for internal routes. No `<img>` for static assets.
4. No arbitrary Tailwind values where a scale token exists (`[360px]`, `[16px]`, `[#hex]`…).
5. No hardcoded copy in JSX — strings come from `lib/constants.ts`.
6. `"use client"` only on files that need it, and pushed to the leaf where possible.
7. New colors / spacings / radii added to `@theme` in `globals.css`, not buried as arbitrary values.
8. New shared component? It lives in `src/components/shared/`, with a CVA variants export if it has visual states.
9. Animations have a `useReducedMotion()` fallback.
10. `npm run build` succeeds locally.

---

## Known recurring issues — fix on sight

These have happened in this codebase before. When you spot any of them (in a file you're editing or anywhere you read), fix them as part of the change:

- `max-w-[360px]` → `max-w-90` (and likewise for any value already on the spacing scale: `[16px]` → `4`, `[24px]` → `6`, `[32px]` → `8`, `[64px]` → `16`…)
- `<a href="/…">` → `<Link href="/…">` from `next/link`
- `<img src="…">` → `<Image>` from `next/image`
- Hex literals in JSX (`bg-[#FF5C39]`, `text-[#1A1A1A]`) → token utilities (`bg-coral`, `text-encre`)
- Hardcoded copy strings in section files → move to `constants.ts`
- `"use client"` at the top of a section that renders static markup → remove it
- Manual class concatenation (`` `flex ${isActive ? "bg-coral" : "bg-ivoire"}` ``) → wrap in `cn()`
- Missing `alt` on `<Image>` → add a real description or `alt=""` if decorative
- `style={{ color: "#FF5C39" }}` → `className="text-coral"`

When unsure between a Tailwind utility and an arbitrary value: search `tailwindcss.com/docs` for the property; if a default step matches, use it.
