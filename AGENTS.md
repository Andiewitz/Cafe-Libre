# Brew & Bean - Coffee Shop Website

## Development Commands

```bash
npm run dev        # Start dev server on http://localhost:3000
npm run build      # Production build (tsc + vite)
npm run preview    # Preview production build locally
npm run lint       # Run oxlint
npm run format     # Format all files with Prettier
npm run format:check  # Check formatting without writing
```

## Tech Stack

| Layer         | Library                                     |
| ------------- | ------------------------------------------- |
| Framework     | React 19 + TypeScript                       |
| Build         | Vite 8                                      |
| Styling       | Tailwind CSS v4                             |
| UI Primitives | Radix UI                                    |
| Animations    | Framer Motion                               |
| Routing       | React Router DOM v7                         |
| Forms         | React Hook Form + Zod                       |
| Icons         | Custom SVG + Lucide (removed, using custom) |
| Linting       | Oxlint                                      |
| Formatting    | Prettier                                    |

## Project Structure

```
src/
  assets/          # Images and static assets
  components/
    icons/         # Custom SVG icon components
    layout/        # Header, Footer, NavMenu, Container
    ui/            # Styled Radix UI components (Button, Card, Badge, Dialog)
    sections/      # Page sections (Hero, MenuPreview, AboutPreview, etc.)
    common/        # Reusable components (SocialLink, MenuCard, BackToTop, ScrollProgress)
  data/            # Static data (menu, testimonials, team)
  pages/           # Route pages (Home, Menu, About, Location, Contact, NotFound)
  routes/          # Route definitions
  hooks/           # Custom hooks
  styles/          # Global CSS and Tailwind config
  utils/           # Utility functions (cn, formatters)
```

## Code Style

- No semicolons (Prettier config)
- Single quotes
- Trailing commas (all)
- 2-space indentation
- Import paths use `@/` alias

## Deployment

Builds to `dist/` directory. Deploy to GitHub Pages, Netlify, or Vercel.
