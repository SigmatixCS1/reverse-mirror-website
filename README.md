# Reverse Mirror
Marketing and lore site for **Reverse Mirror**, an interconnected psychological and archetypal horror anthology. Built with the Next.js App Router, TypeScript, and Tailwind CSS, with a dark cinematic visual language (black / dark red / amber‑gold, glass panels, subtle occult editorial styling).
Live site: https://reverse-mirror-site.vercel.app
## Tech Stack
- [Next.js](https://nextjs.org) 16 (App Router, Turbopack)
- React 19 + TypeScript
- Tailwind CSS v4
- `next/image` for image optimization
- Firebase Analytics
- Hosted on Vercel
## Getting Started
Install dependencies and run the development server:
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the site.
Useful scripts:
```bash
npm run dev     # start the dev server
npm run build   # production build (also runs type checking)
npm run start   # serve the production build
npm run lint    # run ESLint
```
## Routes
All pages live under `app/` (App Router). Top navigation is defined by the `navLinks` array in `app/layout.tsx`:
- `/` — Home
- `/about` — About
- `/stories` — Stories
- `/characters` — Character gallery (Core Cast, Expanded Cast, System Architects)
- `/mythology` — Mythology
- `/systems` — Platform systems (Videre stream network)
- `/gallery` — Gallery
- `/mirror-fragments` — Mirror Fragments (still present; removed from the top nav in favor of Systems)
## Key Components
Shared components live in `app/components/`:
- `OccultFrame.tsx` — decorative red/black gradient frame with glow and corner sigils, used around feature imagery.
- `system-image.tsx` (`SystemImage`) — `next/image` wrapper that falls back to a dark placeholder (host/show) if an image is missing.
- `hero-carousel.tsx` — client carousel used on the home page.
## Characters page
`app/characters/page.tsx` renders three sections from typed `Character[]` arrays — `characters` (Core Cast), `expandedCharacters` (Expanded Cast), and `systemArchitects` (System Architects). A shared `CharacterCard` renders both a `feature` (large, side‑by‑side) and a `compact` (tighter grid) variant. Portraits use `next/image`.
### Adding a character
1. Drop the portrait in `public/images/characters/` (e.g. `new-character.png`).
2. Append an entry to the relevant array in `app/characters/page.tsx`:
```ts
{
  slug: "new-character",
  name: "New Character",
  role: "Their Archetype",
  description: "Short description...",
  fragment: "Their first-person Mirror Fragment.",
  image: "/images/characters/new-character.png",
  alt: "Portrait of New Character, Their Archetype",
}
```
### Adding a character section
Copy an existing section block (divider + header + grid) at the bottom of the page, define a new array, and map it through `CharacterCard` with `variant="feature"` or `variant="compact"`.
## Systems page
`app/systems/page.tsx` presents the **Videre** platform: a hero intro, a cinematic banner wrapped in `OccultFrame`, and a `streamNetwork` of host "dossier" panels (image left / text right on desktop, stacked on mobile). Banner and host thumbnails use `next/image` via the `SystemImage` wrapper. Images live in `public/images/systems/videre/`.
### Adding a platform or host
- Add host art under `public/images/systems/<platform>/` and append entries to the host data array.
- For a new platform (e.g. Votive Live, Velvet Room, Kindred+, Helix), copy the banner + stream‑network sections, point them at a new `public/images/systems/<slug>/` folder, and update the headings/copy. `OccultFrame` is reused as‑is.
## Deployment
The site is deployed to Vercel. Production deploys are done from the project root:
```bash
npx vercel deploy --prod --yes
```
The production alias is https://reverse-mirror-site.vercel.app. Pushing to `master` also keeps the linked Vercel project up to date.
