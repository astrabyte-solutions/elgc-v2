# ELGC Website

Next.js corporate website for **ELGC** (Engineering. Excellence. Execution.) — built to match the UI designs in `ELGC_MAIN_UI/` and using project photos from `ELGC_MAIN_PROJECTS/`.

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — scroll animations, page loader, counters
- **Lucide React** — icons

## Getting Started

```bash
cd elgc-website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home |
| `/about` | About Us |
| `/services` | All Services |
| `/services/[slug]` | Service detail (6 pages) |
| `/projects` | Project Portfolio |
| `/projects/[slug]` | Project Details |
| `/industries` | Industries |
| `/quality-safety` | Quality & Safety |
| `/clients` | Clients |
| `/contact` | Contact Us |
| `/request-proposal` | Request a Proposal |

## Project Images

Photos are copied to `public/images/projects/` from:
- Shears Installation Project
- Yogurt Plant Project

## Build

```bash
npm run build
npm start
```
