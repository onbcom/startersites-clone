# Footer Specification

## Overview
- **Target file:** `src/components/Footer.tsx`
- **Screenshot:** `docs/design-references/footer-section-2026-03-30T10-50-40-914Z.png`
- **Interaction model:** static

## Visual Description
Dark footer (#222222) with two sections:
1. **CTA area** (top): Large white heading + 3 badges + logo + email + social links (left) | newsletter signup (right)
2. **Bottom bar**: Links row (Changelog, 404, LinkedIn, Instagram, Twitter X, Dribbble)

## DOM Structure
```
<footer> (1440×806px, bg #222222, flex column, align center)
  <div> (inner container, max-width 1280px, padding 80px 60px, flex column, gap 60px)

    <!-- TOP CTA ROW -->
    <div> (flex row, space-between)
      <div> (left column, flex column, gap 32px)
        <h2> "Customize and build a stunning website today."
          — Onest 76px/76px weight 700, white
        <div> (badges row, flex row, gap 24px)
          <span> ✓ "Instant access" — Switzer 16px white
          <span> ✓ "Responsive design" — Switzer 16px white
          <span> ✓ "No coding required" — Switzer 16px white
        </div>
        <div> (company info block)
          <img> logo light (white version)
          <p> "drop us a line" — label text, muted
          <a> "hello@flowgrid.com" — link, white
        </div>
        <div> (social icons row: Twitter/X + Dribbble)
        </div>
      </div>
      <div> (right column — newsletter, flex column, gap 24px)
        <h3> "Sign up for our newsletter:" — Onest 28px white
        <ul>
          <li> "Be the first to access new template releases"
          <li> "Unlock special discounts"
        </ul>
        <div> (email form, flex row, gap 12px)
          <input> "Type your email" — pill input, bg dark gray
          <button> "Submit" — blue pill button
        </div>
      </div>
    </div>

    <!-- BOTTOM NAV BAR -->
    <div> (flex row, space-between, border-top 1px solid rgba(255,255,255,0.1), pt 24px)
      <div> (links: Changelog, 404)
      <div> (social links: LinkedIn, Instagram, Twitter X, Dribbble)
    </div>
  </div>
</footer>
```

## Computed Styles

### Footer
- backgroundColor: rgb(34, 34, 34)  — #222222
- height: 806px
- display: flex
- flexDirection: column
- alignItems: center

### CTA heading
- fontFamily: Onest
- fontSize: 76px
- fontWeight: 700
- lineHeight: 76px
- color: rgb(255, 255, 255)
- width: 1320px (spans full container)

### Badge items (Instant access, etc.)
- fontFamily: Switzer
- fontSize: 16px
- color: rgb(255, 255, 255)
- display: flex
- alignItems: center
- gap: 9px (icon + text)

### Newsletter heading
- fontFamily: Onest
- fontSize: 24px or 28px
- fontWeight: 600 or 700
- color: rgb(255, 255, 255)

### Email input
- backgroundColor: rgb(51, 51, 51) or similar dark
- borderRadius: 40px
- padding: 14px 20px
- color: rgb(255, 255, 255)
- fontSize: 16px
- border: 1px solid rgba(255,255,255,0.15)

### Submit button (email)
- backgroundColor: rgb(4, 72, 244)
- color: white
- borderRadius: 40px
- padding: 14px 24px
- fontSize: 16px

### Bottom links
- fontFamily: Switzer
- fontSize: 14px
- color: rgba(255,255,255,0.6)
- hover: rgba(255,255,255,1)

## Text Content
- CTA heading: "Customize and build a stunning website today."
- Badges: "Instant access", "Responsive design", "No coding required"
- Label: "drop us a line"
- Email: "hello@flowgrid.com"
- Newsletter heading: "Sign up for our newsletter:"
- Benefit 1: "Be the first to access new template releases"
- Benefit 2: "Unlock special discounts"
- Email placeholder: "Type your email"
- Submit button: "Submit"
- Bottom links: "Changelog", "404"
- Social: "LinkedIn", "Instagram", "Twitter X", "Dribbble"

## Assets
- Logo (white): `/images/logo-light.svg` (white version on dark bg)
- Check icon for badges: Use SVG circle checkmark

## Responsive Behavior
- **Desktop:** 2-column layout (CTA left, newsletter right)
- **Mobile:** Single column, newsletter below CTA
