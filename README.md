# Haixia Doris Law PLLC — Website

Next.js website for [dorislawyer.com](https://dorislawyer.com), rebuilt for GitHub + Vercel deployment.

## Pages
- `/` — Home
- `/about` — About JD Doris
- `/services` — Legal services offered
- `/contact` — Contact information

## Tech Stack
- **Next.js 14** (App Router)
- **TypeScript**
- **CSS** (custom, no Tailwind needed)

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

### Option 1: Via Vercel Dashboard (Recommended)
1. Push this repo to GitHub under `github.com/atom0755`
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import from GitHub → select this repo
4. Click **Deploy** — no configuration needed

### Option 2: Via Vercel CLI
```bash
npm i -g vercel
vercel
```

## Notes on Images
The site currently loads images directly from `dorislawyer.com`.  
To host images yourself, download them and place in `/public/images/`, then update the `src` paths in the page files.

Images used:
- `Doris-1-1024x1024.jpg` — profile photo (home page)
- `Doris-1024x1024.jpg` — profile photo (contact page)
