# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with React 19, Vite, and Tailwind CSS v4. The project showcases a single-page application with sections for hero, about, skills, projects, and contact information.

## Development Commands

### Start Development Server
```bash
npm run dev
```
Runs Vite dev server with HMR at http://localhost:5173

### Build for Production
```bash
npm run build
```
Creates optimized production build in `dist/`

### Lint Code
```bash
npm run lint
```
Runs ESLint on all `.js` and `.jsx` files

### Preview Production Build
```bash
npm run preview
```
Preview the production build locally

## Architecture

### Component Structure

The application follows a feature-based organization with clear separation between layout sections, reusable components, and pages:

- **`src/layout/`** - Main section components that compose the Home page (HeroSection, AboutSection, SkillsSection, ProjectsSection, ContactSection, Navbar, Footer)
- **`src/components/`** - Reusable UI components (StarBackground, ThemeToggle, ui components)
- **`src/pages/`** - Route-level page components (Home, NotFound)
- **`src/Storage/`** - Static data and content (navigation items, project data)

### Key Patterns

**Path Aliases**: The project uses `@/` alias that maps to `src/` directory (configured in vite.config.js). Always use this alias for imports: `import { cn } from "@/lib/utils"`

**Theme System**: Custom dark/light theme implementation using:
- CSS variables defined in `src/App.css` under `:root` and `.dark` selectors
- Theme toggle in `ThemeToggle` component persists preference to localStorage
- Tailwind CSS v4 with custom theme tokens (`--color-*` variables)
- Custom utility classes: `cosmic-button`, `card-hover`, `text-glow`, `gradient-border`

**Styling Approach**:
- Tailwind CSS v4 with inline utility classes
- Custom animations defined in App.css (`float`, `pulse-subtle`, `fade-in`, `meteor`)
- Some components use CSS modules (e.g., Home.module.css)
- Utility function `cn()` from `@/lib/utils` for conditional class merging using clsx and tailwind-merge

**Toast Notifications**: Custom toast system implemented in `src/hooks/use-toast.js` with Radix UI Toast primitive. Use the `useToast()` hook and `<Toaster />` component (already included in App.jsx).

**Routing**: React Router v7 with BrowserRouter. Currently has two routes: home (`/`) and catch-all 404.

### Data Management

Project content (navigation items, project cards) is stored as static data in `src/Storage/Storage.js`. Update this file to modify displayed content.

## Code Conventions

- Use functional components with hooks
- Follow the existing import order: external dependencies → internal components → styles
- Component files include the component name in the path: `ComponentName/ComponentName.jsx`
- Use destructuring for props
- Prefer named exports for components: `export const ComponentName = () => {}`
- ESLint allows unused variables that match pattern `^[A-Z_]` (typically React imports)

## Styling Notes

- The project uses Tailwind CSS v4 syntax (`@import "tailwindcss"` instead of separate directives)
- Custom theme tokens are defined in the `@theme` layer in App.css
- Use `hsl(var(--variable-name))` pattern for accessing CSS custom properties
- Background effects (StarBackground) use absolute positioning and should remain in page-level components

## Configuration Files

- **vite.config.js** - Vite config with React plugin, Tailwind, and path aliases
- **eslint.config.js** - ESLint flat config with React hooks and React refresh plugins
- **package.json** - Includes EmailJS integration (@emailjs/browser) though not currently implemented in ContactSection
