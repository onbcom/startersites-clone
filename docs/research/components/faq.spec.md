# FAQ Section Specification

## Overview
- **Target file:** `src/components/FaqSection.tsx`
- **Screenshot:** `docs/design-references/faq-section-2026-03-30T10-50-29-220Z.png`
- **Interaction model:** click-driven accordion

## DOM Structure
```
<section> (FAQ, 1440×684px, bg #F6F6F6)
  <div> (container, padding 80px 60px, max-width 1440px)
    <div> (header, flex row, space-between, align flex-start)
      <div> (left heading)
        <h2> "Answers" — Onest 80px weight 800
        <h2> "to" — Onest 80px weight 800
        <h2> "common" — Onest 80px weight 800
        <h2> "questions" — Onest 80px weight 800
        <h2> "asked" — Onest 80px weight 800
        <p> "If you have any other questions..." — Switzer 16px muted
      </div>
      <div> (right — accordion questions, 2-column grid)
        <FaqItem> × 7 (click to expand)
      </div>
    </div>
  </div>
</section>
```

## FAQ Item Structure
```
<div> (accordion item, border-bottom 1px solid rgba(203,213,225,0.5), py 20px)
  <button> (trigger row, flex row, space-between, align center, w-full)
    <span> "How long does it take to set up the chatbot?" — Switzer 16px weight 500, #080808
    <span> "+" icon — 20px, #080808 (rotates to "×" when open)
  </button>
  <div> (answer, hidden by default, expands on click)
    <p> answer text — Switzer 15px, #707070, lineHeight 1.6
  </div>
</div>
```

## Computed Styles

### Section container
- padding: 80px 60px
- display: flex
- flexDirection: column
- alignItems: flex-end
- gap: 60px

### FAQ grid (right column)
- display: grid
- gridTemplateColumns: 1fr 1fr (2 columns on desktop, based on visual)
- gap: 0px (rows separated by border only)

### FAQ question text
- fontFamily: Switzer
- fontSize: 16px
- fontWeight: 500
- color: rgb(8, 8, 8)

### FAQ "+" icon
- fontSize: 20px
- color: rgb(8, 8, 8)
- transition: transform 0.2s (rotates 45deg when open)

### FAQ answer text
- fontFamily: Switzer
- fontSize: 15px
- color: rgb(112, 112, 112)
- lineHeight: 1.6
- padding: 12px 0

## States & Behaviors

### Accordion open
- Click "+" button → answer expands (height transition 0.3s ease)
- "+" rotates to "×" (transform: rotate(45deg))
- Only one item open at a time (close others) OR all can be open — use all-open mode

## FAQ Data
```typescript
const faqs = [
  { id: "1", question: "How long does it take to set up the chatbot?", answer: "Setup typically takes just a few minutes. Simply install the widget, configure your preferences, and you're ready to go." },
  { id: "2", question: "Can the chatbot integrate with my existing tools?", answer: "Yes, our chatbot integrates with most popular tools including CRMs, helpdesks, and marketing platforms." },
  { id: "3", question: "Is the chatbot customizable for my brand?", answer: "Absolutely. You can customize colors, messaging, and behavior to match your brand identity." },
  { id: "4", question: "How does the chatbot handle multilingual support?", answer: "Our chatbot supports multiple languages and can detect and respond in your visitor's preferred language." },
  { id: "5", question: "What happens if the chatbot can't answer a question?", answer: "If the chatbot can't answer, it seamlessly escalates to a human agent or collects contact information for follow-up." },
  { id: "6", question: "Is there a limit to how many chats the chatbot can handle?", answer: "No hard limit — our infrastructure scales automatically to handle any volume of simultaneous conversations." },
  { id: "7", question: "How secure is the chatbot?", answer: "We use enterprise-grade encryption and comply with GDPR and other data protection standards." },
];
```

## Responsive Behavior
- **Desktop:** Left heading + right 2-col accordion grid
- **Mobile:** Single column, heading on top, accordion below
