# Tracerty Website Development

Marketing website for Tracerty, built with Next.js (Pages Router), TypeScript, and Tailwind CSS.

## Tech Stack

- Next.js 14 (Pages Router)
- TypeScript
- Tailwind CSS
- `lucide-react` (icons)

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available Scripts

```bash
npm run dev     # local dev server (polling enabled)
npm run lint    # lint check
npm run build   # production build
npm run start   # run production build
```

## Project Structure

```text
src/
  components/
    common/      # reusable UI blocks (buttons, cards, info rows, etc.)
    layout/      # header, footer, layout, SEO, hash-scroll behavior
    modals/      # modal components
    sections/    # shared section primitives
  data/
    site.ts      # nav config + submenu links
    theme.ts     # shared design tokens/colors
  pages/
    index.tsx
    products.tsx
    solutions.tsx
    sustainability.tsx
    resources.tsx
    about-us.tsx
    contact-us.tsx
  utils/
public/assets/   # all page/image/icon assets
```

## Implemented Pages

- Home (`/`)
- Products (`/products`)
- Solutions (`/solutions`)
- Sustainability (`/sustainability`)
- Resources (`/resources`)
- About Us (`/about-us`)
- Contact Us (`/contact-us`)

## Reusable Components in Use

- `TwoRowFeatureSection`
- `InfoBoxesRow` (supports variants and 3/4 column modes)
- `BlogInfoCards`
- `ResourcesFaqSection`
- `PeopleInfoCards`
- `PrimaryButton` / `OutlineButton`

## Navigation + Submenu Behavior

Top navigation is configured in `src/data/site.ts`.

- Primary menu items support dropdown submenus.
- Submenu links route to page sections using hash anchors.
- Hash scrolling is handled by `HashScroll` in `src/components/layout/HashScroll.tsx`.

## Design System Notes

- Global layout width is controlled by `SiteLayout` (`max-w-7xl`).
- Full-bleed sections use: `relative left-1/2 w-screen -translate-x-1/2`.
- Shared color tokens are in `src/data/theme.ts`.

## Repository

GitHub: [kushagraporwal-a/tracerty_website_development](https://github.com/kushagraporwal-a/tracerty_website_development)
