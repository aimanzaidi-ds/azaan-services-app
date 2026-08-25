# Azaan Services — Website

A static, server-free marketing website for Azaan Services (no backend, no
admin dashboard — content lives in `src/data/company.js` and directly in the
page files).

## What's new in this version
- **No backend / no server** — the previous Node backend and `/admin`
  dashboard have been removed. All content (services, FAQs, clients) is
  static data inside the React app.
- **Contact form** — instead of posting to a server, it opens a pre-filled
  WhatsApp message (with a mailto fallback) so enquiries still reach Azaan
  Services directly.
- **Trust marquee** — a scrolling line under the header: "Award-Winning
  Placement Firm — Indigo Airlines — Yatra.com — Carlson Wagonlit Travel —
  HCL — A-Class Vendor." Edit the list in
  `src/components/sections/TrustMarquee.jsx`.
- **Google Reviews section** — on the homepage, links out to the real Google
  reviews page. Update the URL in
  `src/components/sections/GoogleReviews.jsx`.
- **Photo gallery** — on the homepage, four real photos (award ceremony +
  team) from `public/gallery/`. Add more by dropping images into that folder
  and adding an entry in `src/components/sections/Gallery.jsx`.

## Run locally
```bash
npm install
npm run dev
```

## Build for production (static files only — deploy anywhere)
```bash
npm install
npm run build
```
This outputs a fully static `dist/` folder — upload it to any static host
(Netlify, Vercel, GitHub Pages, cPanel, etc.). No server or database needed.
