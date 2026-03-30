# Hero Section Specification

## Overview
- **Target file:** `src/components/HeroSection.tsx`
- **Screenshot:** `docs/design-references/navbar-top-2026-03-30T10-49-07-953Z.png`
- **Interaction model:** static

## DOM Structure
```
<section> (Hero, 1440×737px, transparent bg, flex column center, gap 40px)
  <div> (container, max-width 1280px, flex column, gap 32px)
    <div> (header/badge row — "Featured in" + logos)
      small animated label: "Template Featured in"
      logos: 5 brand logo SVGs in a row
    </div>

    <div> (main heading area, flex column)
      <h1> "Building quality Framer" — Onest 104px/104px weight 800, color #080808
      <div> (inline row: h1 "templates for" + Framer icon image, h1 "for")
        <h1> "templates for" — same style
        <img src="/images/framer-icon.svg" width=57 height=57 inline>
      </div>
      <div> (inline row: hero mockup image + h1)
        <img src="/images/hero-mockup.png" width=136 height=99 (thumbnail mockup)>
        <h1> "for" — same style
      </div>
      <h1> "creators & founders." — same style
    </h1>
    </div>

    <div> (CTA row, flex row, gap 12px, align center)
      <a> "Browse Templates" — blue pill button
        + arrow icon (white)
      </a>
      <a> "Framerstore Features" — outline/ghost pill button
        + icon
      </a>
    </div>

    <div> (bottom stats row, flex row, space-between or center)
      <div> (logos ticker — see LogosTicker component)
      <div> (right: rating + users)
        "4.9/5" + star icons
        "Loved by 1000+ creators"
      </div>
    </div>
  </div>
</section>
```

## Computed Styles (exact values)

### Section container
- width: 1440px
- height: 737px
- display: flex
- flexDirection: column
- justifyContent: flex-start
- alignItems: center
- gap: 40px
- backgroundColor: rgba(0,0,0,0)
- padding: 0

### H1 heading
- fontFamily: Onest, "Onest Placeholder", sans-serif
- fontSize: 104px
- fontWeight: 800
- lineHeight: 104px
- color: rgb(8, 8, 8)
- letterSpacing: normal (tight at this size)

### "Browse Templates" button
- backgroundColor: rgb(4, 72, 244) — #0448F4
- color: rgb(255, 255, 255)
- fontFamily: Switzer, sans-serif
- fontSize: 16px
- fontWeight: 400
- letterSpacing: -0.16px
- lineHeight: 22.4px
- padding: 16px 28px 16px 20px
- height: 54px
- borderRadius: 40px
- display: flex
- flexDirection: row
- alignItems: center
- gap: 8px (between text and arrow icon)

### "Framerstore Features" button (ghost/outline)
- backgroundColor: transparent or light gray
- color: rgb(8, 8, 8)
- fontFamily: Switzer
- fontSize: 16px
- padding: ~16px 20px
- borderRadius: 40px
- border: 1px solid rgba(203,213,225,0.5) or similar
- display: flex
- alignItems: center
- gap: 8px

### Rating text
- fontFamily: Onest
- fontSize: ~14px
- color: rgb(8, 8, 8)

## Assets
- Framer icon: `public/images/framer-icon.svg` (57×57px, inline in heading)
- Hero mockup thumbnail: `public/images/hero-mockup.png` (136×99px, inline in heading)
- Arrow icon: `public/images/icon-arrow.svg` (16×16, white, in Browse button)
- Star icon: `public/images/icon-star.svg` (in rating row)

## Text Content (verbatim)
- H1 line 1: "Building quality Framer"
- H1 line 2: "templates for" [+ Framer icon inline]
- H1 line 3: [hero-mockup image] "for" (actually the word shows after image)
- H1 line 4: "creators & founders."
- Button 1: "Browse Templates"
- Button 2: "Framerstore Features"
- Rating: "4.9/ 5"
- Social proof: "Loved by 1000+ creators"
- Badge: "Template Featured in"
- Counter: "50, 100, 150... 750" (animated number ticker on right side)

## Responsive Behavior
- **Desktop (1440px):** 104px heading, full layout
- **Mobile (390px):** Heading shrinks to ~56px, single column, CTA buttons stack
- **Breakpoint:** ~768px
