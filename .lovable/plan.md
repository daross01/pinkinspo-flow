

# pinkinspo — Aesthetic Visual Inspiration Website

## Overview
A minimal, feminine, Pinterest-style scroll experience for nail, outfit, and hairstyle inspiration. Mobile-first, designed to maximize scroll time with strategic monetization CTAs throughout.

## Design System
- **Colors**: White background (`#FFFFFF`) + Soft pink accent (`~#F9E8EF` / `~#EC4899` variants)
- **Font**: Inter (single font, varying weights)
- **Style**: Ultra-minimal, lots of whitespace, no shadows, no thick borders, rounded soft elements
- **Mobile-first** layout, fully responsive

## Global Header
- Sticky top bar on all pages
- Left: "pinkinspo" logo text in pink
- Right: Soft pink rounded CTA button → "The Pinterest + AI Method" linking to `/method`

## Pages & Features

### 1. Home Page (`/`)
- **Hero**: Centered title "Your daily dose of aesthetic inspo ✨" with subtitle
- **3 Category Sections** (Uñas, Outfits, Peinados): Each shows a horizontal carousel of cards with 2x2 image collages and labels (San Valentín, Primavera) linking to subsection pages
- **Final CTA Block**: Soft pink background with "Descubre cómo replicarla" button

### 2. Category Pages (`/inspo-unas`, `/inspo-outfits`, `/inspo-peinados`)
- H1 title + short intro text
- Horizontal carousel of subsection cards (same style as home)
- Final CTA block

### 3. Subsection Pages (e.g., `/inspo-unas/san-valentin`)
- H1 + intro paragraph
- **Vertical image feed**: 20 placeholder images in 3:4 ratio, one below another, pure vertical scroll
- **CTA block injected after the 5th image**
- **Bottom section**: "More Inspo" horizontal carousel linking to other subsections + final CTA block

### 4. Method Page (`/method`)
- Placeholder product/landing page structure for future Gumroad integration
- Hero section with product title "The Pinterest + AI Method"
- Benefits/features section
- CTA button (placeholder link for future Gumroad product)

## Content Approach
- All images will use aesthetic placeholder images (soft pink/aesthetic styled placeholders)
- All text content in Spanish as specified
- SEO-friendly page titles and meta descriptions

## Routes
- `/` — Home
- `/inspo-unas`, `/inspo-outfits`, `/inspo-peinados` — Category pages
- `/inspo-unas/san-valentin`, `/inspo-unas/primavera` — Subsection pages (×6 total)
- `/method` — Product page placeholder

## No Backend Needed
This is a fully static, frontend-only site. No database, no auth, no API calls required. Images are static/placeholder. Future Gumroad integration is just an external link.

