# Page Topology — Flowgrid (oma-flowgrid.framer.website)

## Page Overview
- **Title:** Flowgrid – Launch & Sell Your Framer Templates Effortlessly
- **Body bg:** rgb(246, 246, 246) — #F6F6F6
- **Total page height:** ~7700px (desktop 1440px)
- **Smooth scroll:** Lenis 1.2.4 (detected via link tag)

## Section Order (top → bottom)

| # | Name | offsetTop | Height | Background | Interaction Model |
|---|------|-----------|--------|------------|-------------------|
| 1 | Navbar | 0 | 102px | transparent | static |
| 2 | Hero | 0 | 737px | transparent | static |
| 3 | Logos Ticker | 737 | 30px | transparent | CSS animation (marquee scroll) |
| 4 | Featured Templates | 737 | 1417px | #F6F6F6 | static (3-col card grid) |
| 5 | Feature Section | 2154 | 1197px | #F6F6F6 | static (3 feature cards + full-width strip) |
| 6 | Benefits / Responsive | 3351 | 937px | #F6F6F6 | static (desktop/tablet/mobile mockups) |
| 7 | Testimonials | 4288 | 976px | #F6F6F6 | static (3-col testimonial cards grid) |
| 8 | FAQ | 5264 | 684px | #F6F6F6 | click-driven accordion |
| 9 | Contact | 5948 | 909px | #F6F6F6 | form |
| 10 | Footer | 6857 | 806px | #222222 dark | static |

## Layout Structure
- Page container: 1440px wide, centered
- Content max-width: typically 1280px or 1320px (60px padding each side)
- No scroll-snap
- Nav is NOT sticky — it scrolls away with the page

## Z-index Layers
- Nav: z-index auto (in normal flow)
- "Made in Framer" badge: fixed bottom-right corner

## Responsive Behavior
- Desktop: 1440px — multi-column layouts
- Tablet: 768px — maintains some multi-column
- Mobile: 390px — single column, hero text reduces, nav collapses to hamburger
