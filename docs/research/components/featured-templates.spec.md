# Featured Templates Section Specification

## Overview
- **Target file:** `src/components/FeaturedTemplates.tsx`
- **Screenshot:** `docs/design-references/featured-templates-2026-03-30T10-49-57-246Z.png`
- **Interaction model:** static (3-column card grid)

## DOM Structure
```
<section> (Featured templates, 1440×1417px, bg #F6F6F6)
  <div> (container, max-width 1280px, padding 80px 60px, flex column, gap 40px)
    <div> (section header row, flex row, space-between, align flex-end)
      <div> (left — heading)
        <h2> "Featured" — Onest weight 800
        <h2> "Framer" — Onest weight 800 (new line)
        <h2> "templates" — Onest weight 800
      </div>
      <div> (right — rating badge)
        "4.9/5" + stars
        "Loved by 1000+ creators"
      </div>
    </div>
    <div> (cards grid, 3 columns, gap 20px)
      <TemplateCard> × 6 (two rows of 3)
    </div>
  </div>
</section>
```

## Template Card Structure
```
<div> (card, ~427×~580px, bg white, borderRadius 16px, overflow hidden, flex column)
  <div> (image area, ~427×401px, overflow hidden, borderRadius 12px 12px 0 0)
    <img> (template screenshot, objectFit cover, full width)
  </div>
  <div> (card footer, padding 16px 20px, flex row, space-between, align center)
    <div> (left — name + category)
      <p> "Designo" — Onest 22px, weight 600, color #080808
      <p> "$39" — Onest 18px, weight 500, color #080808 (same row or below)
    </div>
    <div> (right — seller info: avatar + framerstore icon)
      <img> seller avatar (small circle ~32px)
      <img> framerstore icon (small)
    </div>
  </div>
  <div> (category tag row, padding 0 20px 16px, flex row, space-between)
    <span> "Agency Template" — Switzer 14px, color #707070
    <div> (action icons: cart + share, 2 small icon buttons)
  </div>
</div>
```

## Computed Styles

### Section
- backgroundColor: rgb(246, 246, 246)
- width: 1440px
- height: 1417px
- display: flex
- justifyContent: center
- alignItems: center

### Container
- maxWidth: 1280px (or 1320px)
- padding: 80px 60px
- display: flex
- flexDirection: column
- gap: 40px

### Section heading (h2 multi-line)
- fontFamily: Onest
- fontSize: ~80px (large) — visual inspection
- fontWeight: 800
- lineHeight: 1.0
- color: rgb(8, 8, 8)

### Cards grid
- display: grid
- gridTemplateColumns: repeat(3, 1fr)
- gap: 20px

### Card container
- backgroundColor: rgb(255, 255, 255)
- borderRadius: 16px
- overflow: hidden
- display: flex
- flexDirection: column

### Card image wrapper
- width: 100%
- height: ~400px
- overflow: hidden

### Card name text
- fontFamily: Onest
- fontSize: 22px
- fontWeight: 600
- lineHeight: 26.4px
- color: rgb(8, 8, 8)

### Card price text
- fontFamily: Onest
- fontSize: 18px
- fontWeight: 500
- lineHeight: 23.4px
- color: rgb(8, 8, 8)

### Card category text
- fontFamily: Switzer
- fontSize: 14px
- color: rgb(112, 112, 112)

## Template Data (6 cards)
```typescript
const templates = [
  { name: "Designo", price: 39, category: "Agency Template", image: "/images/template-designo.png" },
  { name: "Vellox", price: 39, category: "Agency Template", image: "/images/template-vellox.png" },
  { name: "Haven Estate", price: 49, category: "Real Estate Template", image: "/images/template-haven-estate.png" },
  { name: "AI Chatbot", price: 59, category: "AI Template", image: "/images/template-ai-chatbot.png" },
  { name: "William Thompson", price: 49, category: "Photography Template", image: "/images/template-william-thompson.png" },
  { name: "Educore", price: 29, category: "Online Course Template", image: "/images/template-educore.png" },
];
// All cards share: sellerAvatar="/images/seller-avatar.jpg", storeIcon="/images/framerstore-icon.png"
```

## Assets
- Template images: `/images/template-*.png`
- Seller avatar (shared): `/images/seller-avatar.jpg`
- Framerstore icon (shared): `/images/framerstore-icon.png`

## Responsive Behavior
- **Desktop:** 3-column grid
- **Tablet (768px):** 2-column grid
- **Mobile (390px):** 1-column or 2-column compact
