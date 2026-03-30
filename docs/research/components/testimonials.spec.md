# Testimonials Section Specification

## Overview
- **Target file:** `src/components/TestimonialsSection.tsx`
- **Screenshot:** `docs/design-references/testimonials-section-2026-03-30T10-50-23-208Z.png`
- **Interaction model:** static (3-column grid)

## DOM Structure
```
<section> (Testimonials, 1440×976px, bg #F6F6F6)
  <div> (container, max-width 1280px, padding 80px 60px, flex column, gap 40px)
    <div> (section header)
      <h2> "We" — Onest 80px weight 800
      <h2> "help" — Onest 80px weight 800
      <h2> "creators" — Onest 80px weight 800
      <h2> "quickly" — Onest 80px weight 800
      <h2> "build" — Onest 80px weight 800
      <h2> "websites" — Onest 80px weight 800
    </div>
    <div> (3-col grid of testimonial cards)
      <TestimonialCard> × 6
    </div>
  </div>
</section>
```

## Testimonial Card Structure
```
<div> (card, bg white, borderRadius 16px, padding 24px, flex column, gap 20px)
  <div> (header row: avatar + name/handle + stars)
    <img> (avatar, 40×40px, borderRadius 50%)
    <div> (name col)
      <p> "Jake Thompson" — Onest 16px weight 600, #080808
      <p> "@jakethompsonux" — Switzer 14px, #707070
    </div>
    <div> (stars — right aligned)
      ★★★★★ (5 blue stars)
    </div>
  </div>
  <p> (quote text — Switzer 16px, #333333, lineHeight 1.6)
  <div> (footer: template name + date)
    <p> "Haven Estate" — Switzer 14px weight 500, #080808
    <p> "// Feb 16, 2025" — Switzer 14px, #707070
  </div>
</div>
```

## Computed Styles

### Section
- backgroundColor: rgb(246, 246, 246)
- height: 976px

### Testimonial card
- backgroundColor: rgb(255, 255, 255)
- borderRadius: 16px
- padding: 24px
- display: flex
- flexDirection: column
- gap: 20px

### Reviewer name
- fontFamily: Onest
- fontSize: 16px
- fontWeight: 600
- color: rgb(8, 8, 8)

### Handle / date
- fontFamily: Switzer
- fontSize: 14px
- color: rgb(112, 112, 112)

### Quote text
- fontFamily: Switzer
- fontSize: 15px or 16px
- lineHeight: 1.6
- color: rgb(51, 51, 51)

### Stars (rating)
- color: rgb(4, 72, 244) — blue stars, not gold
- fontSize: 14px

## Testimonial Data
```typescript
const testimonials = [
  {
    name: "Jake Thompson",
    handle: "@jakethompsonux",
    quote: "Framerstore made launching my first Framer template effortless! The layout is sleek, the CMS is intuitive, and I had my store up in minutes. Highly recommend!",
    templateName: "Haven Estate",
    date: "Feb 16, 2025",
    avatar: "/images/avatar-jake.jpg",
    rating: 5
  },
  {
    name: "Emily Carter",
    handle: "@emilycdesigns",
    quote: "I've used several Framer templates before, but this one is a game-changer. Everything is optimized for selling templates effortlessly!",
    templateName: "Educore",
    date: "Feb 16, 2025",
    avatar: "/images/avatar-emily.jpg",
    rating: 5
  },
  {
    name: "Ryan Mitchell",
    handle: "@ryanmitchellux",
    quote: "Framerstore is hands down the best way to launch a Framer template store. The UI is clean, and the CMS is perfectly structured. 10/10!",
    templateName: "Bento Portfolio",
    date: "Feb 16, 2025",
    avatar: "/images/avatar-ryan.jpg",
    rating: 5
  },
  {
    name: "Sophia Williams",
    handle: "@sophiawdesigns",
    quote: "The perfect balance of aesthetics and functionality! I had my store live in under an hour, and it looks stunning!",
    templateName: "Designo",
    date: "Feb 16, 2025",
    avatar: "/images/avatar-sophia.jpg",
    rating: 5
  },
  {
    name: "Brandon Scott",
    handle: "@brandonscottui",
    quote: "As a designer, I appreciate how polished and flexible Framerstore is. It's exactly what I needed to start selling templates professionally!",
    templateName: "Vellox",
    date: "Feb 16, 2025",
    avatar: "/images/avatar-brandon.jpg",
    rating: 5
  },
  {
    name: "Olivia Reed",
    handle: "@oliviareedux",
    quote: "Framerstore turned what used to be a complicated process into something super easy. It's fast, responsive, and built for success!",
    templateName: "AI Chatbot",
    date: "Feb 16, 2025",
    avatar: "/images/avatar-olivia.jpg",
    rating: 5
  }
];
```

## Responsive Behavior
- **Desktop:** 3-column grid, 2 rows
- **Mobile:** 1-column, scrollable
