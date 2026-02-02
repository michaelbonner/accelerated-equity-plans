# Copilot Instructions for Accelerated Equity Plans

## Project Overview

This is a SvelteKit application for Accelerated Equity Plans, built with TypeScript and deployed on Vercel.

## Tech Stack

- **Framework**: SvelteKit (Svelte 5)
- **Language**: TypeScript with strict mode enabled
- **Styling**: Tailwind CSS 4.x
- **Package Manager**: Bun
- **Deployment**: Vercel
- **Build Tool**: Vite

## Development Commands

- **Dev Server**: `bun run dev` or `npm run dev`
- **Build**: `bun run build` or `npm run build`
- **Preview**: `bun run preview` or `npm run preview`
- **Type Checking**: `bun run check` or `npm run check`
- **Linting**: `bun run lint` or `npm run lint`
- **Formatting**: `bun run format` or `npm run format`

## Code Style and Conventions

### Formatting (Prettier)

- Use **tabs** for indentation (not spaces)
- Use **single quotes** for strings
- **No trailing commas**
- Maximum line width: **100 characters**

### TypeScript

- Strict mode is enabled - always maintain type safety
- Avoid using `any` type whenever possible
- Enable `checkJs` for JavaScript files

### File Organization

- Components and utilities go in `src/lib/`
- Routes and pages go in `src/routes/`
- Static assets go in `static/`

## Testing and Validation

Before finalizing any changes:

1. Run `bun run check` to validate TypeScript types
2. Run `bun run lint` to check code style
3. Run `bun run format` to auto-format code
4. Run `bun run build` to ensure the project builds successfully

## Best Practices

- Follow existing code patterns and conventions in the codebase
- Keep components small and focused
- Use semantic HTML elements
- Ensure responsive design with Tailwind CSS utilities
- Maintain accessibility standards
