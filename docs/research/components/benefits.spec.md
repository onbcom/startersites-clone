# Benefits / Responsive Section Specification

## Overview
- **Target file:** `src/components/BenefitsSection.tsx`
- **Screenshot:** `docs/design-references/benefits-section-2026-03-30T10-50-17-689Z.png`
- **Interaction model:** static

## Visual Description
Left: Large heading "Easily build sites with our templates". Right: 3 device mockup images side by side (Desktop, Tablet, Mobile) showing the William Thompson photography template.

## DOM Structure
```
<section> (Benefits, 1440×937px, bg #F6F6F6)
  <div> (container, max-width 1280px, padding 80px 60px, flex row, space-between, align center)
    <div> (left column, flex column, gap 24px, max-width ~400px)
      <h2> "Easily" — Onest 80px weight 800
      <h2> "build" — Onest 80px weight 800
      <h2> "sites" — Onest 80px weight 800
      <h2> "with" — Onest 80px weight 800
      <h2> "our" — Onest 80px weight 800
      <h2> "templates" — Onest 80px weight 800
      <p> "No more website woes—just powerful solutions at your fingertips"
    </div>
    <div> (right column — device mockups, flex row, align flex-end, gap 16px)
      <div> (desktop mockup, largest, bg dark, borderRadius 12px, overflow hidden)
        <img src="/images/responsive-desktop.jpg"> William Thompson template screenshot
        <p> "Desktop" — label below
      </div>
      <div> (tablet mockup, medium)
        <img src="/images/responsive-tablet.jpg">
        <p> "Tablet"
      </div>
      <div> (mobile mockup, smallest)
        <img src="/images/responsive-mobile.jpg">
        <p> "Mobile"
      </div>
    </div>
  </div>
</section>
```

## Computed Styles

### Section
- backgroundColor: rgb(246, 246, 246)
- height: 937px

### Left heading
- fontFamily: Onest
- fontSize: 80px (approx based on visual)
- fontWeight: 800
- lineHeight: 1.0
- color: rgb(8, 8, 8)

### Subtext
- fontFamily: Switzer
- fontSize: 16px
- color: rgb(112, 112, 112)
- lineHeight: 1.6

### Device mockup container
- borderRadius: 12px
- overflow: hidden
- display: flex
- flexDirection: column
- alignItems: center

### Desktop mockup
- width: ~500px (widest)
- backgroundColor: rgb(26, 26, 26) or similar dark
- borderRadius: 12px

### Tablet mockup
- width: ~300px

### Mobile mockup
- width: ~200px

### Device label (Desktop, Tablet, Mobile)
- fontFamily: Switzer
- fontSize: 14px
- color: rgb(112, 112, 112)
- marginTop: 8px

## Text Content
- Heading lines: "Easily", "build", "sites", "with", "our", "templates"
- Subtext: "No more website woes—just powerful solutions at your fingertips"
- Labels: "Desktop", "Tablet", "Mobile"

## Assets
- `/images/responsive-desktop.jpg`
- `/images/responsive-tablet.jpg`
- `/images/responsive-mobile.jpg`

## Responsive Behavior
- **Desktop:** Side by side (heading left, mockups right)
- **Mobile:** Stacked, mockups scroll horizontally
