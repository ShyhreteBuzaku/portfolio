# Portfolio

A dark-themed portfolio built with **Next.js** and **React**, featuring project cards with image carousels and detail modals with galleries and links.

## Features

- Dark theme with charcoal background and orange accent
- **Category tabs**: Websites / Mobile Apps
- **Project cards** with:
  - Image carousel (slide images with arrows on the card)
  - Title, description, technology tags
  - “Visit Website” link
- **Project modal** (open by clicking a card):
  - Full gallery with prev/next and dot indicators
  - Long description and technologies
  - Links: Visit Website, GitHub, and optional other links

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize

- **Your name**: Edit `YOUR_NAME` in `app/page.tsx`.
- **Projects**: Edit `lib/projects.ts` — add/remove projects, set `images`, `websiteUrl`, `githubUrl`, `otherLinks`, etc.
- **Images**: Use URLs in `project.images` or place images in `public/` and reference as `/your-image.jpg`.

## Tech stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
