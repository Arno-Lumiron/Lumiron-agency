# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Stack

Next.js 16 (App Router) · TypeScript strict · Tailwind CSS v4 · ShadCN/UI · Framer Motion · Lucide React · CVA + clsx + tailwind-merge

## Commands

```bash
npm run dev      # dev server on localhost:3000
npm run build    # production build (also runs tsc)
npm run lint     # ESLint
npx tsc --noEmit # type-check only
```

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

| Token | Value |
|---|---|
| `ivoire` | `#F0EEE8` |
| `encre` | `#1A1A1A` |
| `coral` | `#FF5C39` |
| `gris` | `#6B6B6B` |
| `gris-light` | `#9C9486` |

Use them in Tailwind as `bg-coral`, `text-encre`, `border-ivoire-soft`, etc.

## Conventions

- Server Components by default; `'use client'` only when hooks or browser APIs are needed.
- All copy lives in `src/lib/constants.ts` — edit there, not in JSX.
- Animations respect `prefers-reduced-motion` via `useReducedMotion()`.
- No inline styles except for dynamic CSS vars (`style={{ '--rd': delay }}`).
- ShadCN components live in `src/components/ui/`; custom shared components in `src/components/shared/`.
