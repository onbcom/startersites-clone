# Behaviors — Flowgrid Clone

## Smooth Scroll
- **Library:** Lenis 1.2.4 (via unpkg CDN)
- **Implementation:** Install `lenis` npm package, initialize in layout with useEffect
- **Effect:** Butter-smooth scroll inertia, no snap points

## Navbar
- **Position:** relative (NOT sticky/fixed — scrolls away)
- **Behavior:** Static, no scroll-triggered state change
- **Background:** transparent at all scroll positions
- **Height:** 102px

## Logos Ticker (hero bottom strip)
- **Behavior:** Horizontal marquee animation — logos scroll left continuously
- **Implementation:** CSS `@keyframes` scroll animation, duplicate set of logos for seamless loop
- **Speed:** Continuous, moderate pace

## Template Cards
- **Hover state:** Likely slight lift/shadow — needs testing
- **Interaction:** Click to external link

## FAQ Accordion
- **Interaction model:** Click-driven
- **Behavior:** Click a question to expand/collapse the answer
- **Animation:** Height transition (smooth expand/collapse)
- **Default:** All closed

## Footer Newsletter Form
- **Behavior:** Email input with Submit button
- **No client-side validation visible** — static form

## Contact Form
- **Fields:** Full Name, Email, Company, Message, Submit button
- **Static form** (no visible backend)

## Animations (scroll-triggered)
- Elements appear to animate in on scroll (fade/slide up) — Framer's built-in animation system
- In React clone: use IntersectionObserver for fade-up animations on key elements
- Sections: heading text, feature cards, testimonial cards

## No Detected:
- No modal/drawer
- No video autoplay (images used for mockups)
- No dark mode toggle
- No sticky navbar
