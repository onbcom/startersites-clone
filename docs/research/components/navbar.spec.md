# Navbar Specification

## Overview
- **Target file:** `src/components/Navbar.tsx`
- **Screenshot:** `docs/design-references/navbar-top-2026-03-30T10-49-07-953Z.png`
- **Interaction model:** static (NOT sticky — scrolls with page)

## DOM Structure
```
<nav> (full-width, 102px tall, transparent bg, flex column center)
  <div> (inner container, max-width 1280px, flex row, space-between)
    <a href="/"> (logo link, 140×30px, absolute positioned)
      <img src="/images/logo-light.svg" alt="FlowGrid" width=119 height=25>
    </a>
    <div> (center link group, flex row, gap 8px)
      <a>Templates</a>
      <a>Features</a>
      <a>Testimonial</a>
      <a>FAQ</a>
    </div>
    <div> (right group, flex row, gap 16px, align center)
      <div> (search bar, 250px wide, pill shape, bg #F6F6F6, flex row, space-between)
        <span>Search...</span>
        <button> (search icon)
      </div>
      <a href="#"> (Buy Template button, blue pill)
        Buy Template
      </a>
    </div>
  </div>
</nav>
```

## Computed Styles (exact values from getComputedStyle)

### <nav>
- position: relative (NOT sticky)
- width: 1440px (full width)
- height: 102px
- display: flex
- flexDirection: column
- justifyContent: center
- alignItems: center
- padding: 8px 0px
- backgroundColor: rgba(0,0,0,0) transparent
- zIndex: auto

### Inner container
- width: ~1280px (60px padding each side from 1440)
- display: flex
- flexDirection: row
- justifyContent: space-between
- alignItems: center

### Nav links (Templates, Features, Testimonial, FAQ)
- fontFamily: Switzer, sans-serif
- fontSize: 14px (visual estimate — computed as 12px but text renders larger)
- fontWeight: 400
- color: rgb(8, 8, 8)
- padding: 8px 10px
- borderRadius: 40px
- display: flex
- alignItems: center
- gap: 8px
- transition: opacity 0.2s (hover dims)

### Buy Template button
- backgroundColor: rgb(4, 72, 244) — #0448F4 blue
- color: rgb(255, 255, 255) white
- fontFamily: Switzer
- fontSize: 16px
- fontWeight: 400
- letterSpacing: -0.16px
- lineHeight: 22.4px
- padding: 16px 20px 14px
- height: 54px
- width: ~136px
- borderRadius: 40px (full pill)
- display: flex
- flexDirection: column
- alignItems: center
- overflow: hidden
- position: relative
- **Has hover text animation:** Two text layers stack (main + hover), hover slides them up

### Search bar
- backgroundColor: rgb(246, 246, 246)
- width: 250px
- height: 70px
- borderRadius: 50px
- padding: 14px
- display: flex
- flexDirection: row
- justifyContent: space-between
- alignItems: center

## States & Behaviors

### Nav is NOT sticky
No scroll-triggered behavior. Nav scrolls away normally.

### Buy Template hover
Has a text-slide hover animation — two text layers ("Buy Template" × 2), on hover they slide up
by their height to reveal the second. Implement with CSS overflow:hidden + translateY transition.

### Link hover
Opacity slightly decreases on hover (0.7 or similar). Simple transition.

## Assets
- Logo: `public/images/logo-light.svg`

## Text Content
- Logo alt: "FlowGrid"
- Links: Templates, Features, Testimonial, FAQ
- Button: Buy Template
- Search placeholder: Search...

## Responsive Behavior
- **Desktop (1440px):** Full nav with all links, search bar, CTA
- **Mobile (390px):** Logo only + hamburger menu icon (links hidden)
- **Breakpoint:** ~768px
