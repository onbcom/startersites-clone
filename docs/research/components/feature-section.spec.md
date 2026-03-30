# Feature Section Specification

## Overview
- **Target file:** `src/components/FeatureSection.tsx`
- **Screenshot:** `docs/design-references/feature-section-2026-03-30T10-50-08-078Z.pn`
- **Interaction model:** static

## Visual Description
The Features section has two distinct visual areas:
1. Top: "Fully responsive and customizable" large heading + 3 feature cards in a row
2. Bottom: Full-width dark strip "Scale up 2x faster" + 3 step cards + a blue "Never leave Framer" callout card

## DOM Structure
```
<section> (Feature, 1440×1197px, bg #F6F6F6)
  <div> (container max-width 1280px, padding 80px 60px, flex column, gap 60px)

    <!-- TOP AREA -->
    <div> (top row, flex row, space-between, align flex-start)
      <div> (left — large heading)
        <h2> "Fully" — Onest ~80px, weight 800
        <h2> "responsive"
        <h2> "and"
        <h2> "customizable"
      </div>
      <div> (right — subtext)
        <p> "No more website woes—just powerful solutions at your fingertips"
      </div>
    </div>

    <!-- 3 FEATURE CARDS -->
    <div> (3-col grid, gap 20px)
      <div> (card 1: "Built with global standards")
        <img> (feature icon, ~40×40px)
        <h3> "Built with global standards" — Onest 24px weight 600
        <p> "Unlock brilliance—build your website the smart way."
        <a> "Browse Templates" (blue pill small button)
      </div>
      <div> (card 2: "Scale up 2x faster")
        <img> feature icon
        <h3> "Scale up 2x faster"
        <p> "Unlock brilliance—build your website the smart way."
      </div>
      <div> (card 3: "Never leave Framer" — BLUE card)
        backgroundColor: rgb(4, 72, 244) blue
        <img> Framer icon
        <h3> "Never leave Framer" — white text
        <p> "Unlock brilliance — build" — white text
        <ul> (3 checkmarks)
          "Pick a template"
          "Customize it"
          "Launch"
      </div>
    </div>

    <!-- FULL-WIDTH STRIP / BROWSE SECTION -->
    <div> (full-width strip, bg dark ~#1a1a1a, borderRadius 20px, padding 40px 60px)
      <div> (left: heading + steps row)
        <h2> "Browse from our quality templates"
        <p> "Unlock brilliance—build your website the smart way."
        <a> "Browse Templates" (white pill button)
      </div>
      <div> (right: template images/mockups stacked)
        3 template preview images
      </div>
    </div>
  </div>
</section>
```

## Computed Styles

### Section
- backgroundColor: rgb(246, 246, 246)
- height: 1197px

### Large heading (Fully responsive and customizable)
- fontFamily: Onest
- fontSize: ~80px
- fontWeight: 800
- lineHeight: 1.0
- color: rgb(8, 8, 8)

### Feature card (white)
- backgroundColor: rgb(255, 255, 255)
- borderRadius: 16px
- padding: 32px
- display: flex
- flexDirection: column
- gap: 16px

### Feature card blue ("Never leave Framer")
- backgroundColor: rgb(4, 72, 244)
- borderRadius: 16px
- padding: 32px
- color: rgb(255, 255, 255)

### Feature card heading (h3)
- fontFamily: Onest
- fontSize: 22px
- fontWeight: 600
- color: rgb(8, 8, 8) (or white on blue card)

### Feature card body
- fontFamily: Switzer
- fontSize: 16px
- color: rgb(112, 112, 112)

### Dark browse strip
- backgroundColor: rgb(26, 26, 26) or similar dark
- borderRadius: 20px
- padding: 60px
- display: flex
- justifyContent: space-between
- alignItems: center

## Text Content
- Section subtitle: "No more website woes—just powerful solutions at your fingertips"
- Card 1 title: "Built with global standards"
- Card 1 body: "Unlock brilliance—build your website the smart way."
- Card 2 title: "Scale up 2x faster"
- Card 2 body: "Unlock brilliance—build your website the smart way."
- Card 3 title: "Never leave Framer"
- Card 3 body: "Unlock brilliance — build"
- Card 3 checklist: "Pick a template", "Customize it", "Launch"
- Strip heading: "Browse from our quality templates"
- Strip body: "Unlock brilliance—build your website the smart way."
- Strip CTA: "Browse Templates"

## Assets
- Feature icons: `/images/feature-icon-1.svg`, `/images/feature-icon-2.svg`, `/images/feature-icon-3.svg`
- Framer icon: `/images/framer-icon.svg`
- Feature mockups: `/images/feature-mockup-1.png` ... `/images/feature-mockup-4.png`

## Responsive Behavior
- **Desktop:** 3-column feature cards, side-by-side browse strip
- **Mobile:** Single column, strip stacks vertically
