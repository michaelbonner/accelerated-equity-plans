# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Accelerated Equity Plans is a marketing website for an equity compensation consulting firm. It's a SvelteKit application with TypeScript, deployed on Vercel. The site is entirely static with no CMS - content is hardcoded in TypeScript data files.

## Development Commands

```bash
bun run dev          # Start dev server at localhost:5173
bun run build        # Production build
bun run preview      # Preview production build locally
bun run check        # TypeScript type checking
bun run check:watch  # Type checking in watch mode
bun run lint         # Prettier check + Oxlint
bun run format       # Auto-format all code
```

Before committing, run: `bun run check && bun run lint && bun run build`

## Tech Stack

- **SvelteKit 2** with Svelte 5 (runes syntax)
- **TypeScript** with strict mode
- **Tailwind CSS 4** with PostCSS
- **Vite** for bundling
- **Bun** as package manager (npm also works)
- **Vercel** adapter for deployment

## Code Style

- **Tabs** for indentation (not spaces)
- **Single quotes** for strings
- **No trailing commas**
- **100 character** max line width
- Tailwind classes are auto-sorted by Prettier

## Architecture

### Routes (`src/routes/`)

File-based routing with SvelteKit conventions:

- `+page.svelte` - Page component
- `+layout.svelte` - Layout wrapper (root layout has navbar/footer)
- `+server.ts` - API endpoints (e.g., `/api/contact`)
- `+error.svelte` - Error page

### Library (`src/lib/`)

- `components/` - Reusable Svelte components (navbar, footer, ContactForm, etc.)
- `data/` - Static data files (leadershipTeam.ts contains team member info)
- `images/` - Image imports for enhanced-img optimization
- `types.ts` - TypeScript interfaces
- `styles.ts` - Reusable Tailwind class utilities
- `reviews.ts` - Customer testimonials

### Key Integrations

- **Zoho CRM** - Contact form submission via `/api/contact` endpoint
- **Google Analytics 4** - Via Partytown (non-blocking, runs in web worker)
- **Zoho SalesIQ** - Customer chat widget

### Environment Variables

- `ZOHO_CONTACT_FORM_URL` - Required for contact form (private, server-side only)

## Performance Optimizations

- `@sveltejs/enhanced-img` for responsive images with automatic WebP/AVIF
- Partytown isolates analytics to web workers
- GTM proxied via Vercel rewrites (`/proxytown/gtm`)

## SEO

The site uses extensive Schema.org JSON-LD markup for:

- Organization with services catalog
- Team member profiles
- Customer reviews
- Local business info

Sitemap is dynamically generated at `/sitemap.xml`.
