# Contact Section Specification

## Overview
- **Target file:** `src/components/ContactSection.tsx`
- **Screenshot:** `docs/design-references/contact-section-2026-03-30T10-50-34-744Z.png`
- **Interaction model:** form (static)

## DOM Structure
```
<section> (Contact, 1440×909px, bg #F6F6F6)
  <div> (container, max-width 1280px, padding 80px 60px, flex row, gap 80px)
    <div> (left column, flex column, gap 40px, width ~40%)
      <div> (heading)
        <h2> "Contact" — Onest 80px weight 800
        <h2> "us" — Onest 80px weight 800
        <p> "Send us a message we love to hear from you" — Switzer 18px, muted
      </div>
      <div> (contact details, flex column, gap 24px)
        <div> (email row, flex row, gap 16px, align center)
          <div> (icon circle, blue bg, 48×48px, borderRadius 50%)
            <img src="/images/icon-email.svg">
          </div>
          <div>
            <p> "Email" — label
            <p> "hello@flowgrid.com" — value
          </div>
        </div>
        <div> (address row)
          <div> icon circle (blue)
            <img src="/images/icon-location.svg">
          </div>
          <div>
            <p> "Address"
            <p> "3891 Richardson, California"
          </div>
        </div>
        <div> (phone row)
          <div> icon circle (blue)
            <img src="/images/icon-phone.svg">
          </div>
          <div>
            <p> "Phone"
            <p> "(239) 555-0108"
          </div>
        </div>
      </div>
    </div>
    <div> (right column — form, width ~60%, bg white, borderRadius 20px, padding 40px)
      <h3> "Fill out the form"
      <form>
        <input> "Full Name"
        <input> "Email"
        <input> "Company"
        <textarea> "Message"
        <button> "Submit" (blue pill)
      </form>
    </div>
  </div>
</section>
```

## Computed Styles

### Section heading
- fontFamily: Onest
- fontSize: 76px (visual ~80px)
- fontWeight: 800
- color: rgb(8, 8, 8)

### Contact icon circle
- backgroundColor: rgb(4, 72, 244) — blue
- width: 48px
- height: 48px
- borderRadius: 50%
- display: flex
- alignItems: center
- justifyContent: center

### Contact detail label
- fontFamily: Switzer
- fontSize: 13px
- color: rgb(112, 112, 112)

### Contact detail value
- fontFamily: Switzer
- fontSize: 16px
- fontWeight: 500
- color: rgb(8, 8, 8)

### Form container
- backgroundColor: rgb(255, 255, 255)
- borderRadius: 20px
- padding: 40px
- display: flex
- flexDirection: column
- gap: 20px

### Form heading
- fontFamily: Onest
- fontSize: 24px
- fontWeight: 700
- color: rgb(8, 8, 8)

### Form input
- backgroundColor: rgb(246, 246, 246)
- borderRadius: 12px
- padding: 14px 16px
- fontSize: 16px
- fontFamily: Switzer
- color: rgb(8, 8, 8)
- border: 1px solid rgba(203,213,225,0.5)
- width: 100%

### Textarea
- Same as input
- minHeight: 120px
- resize: vertical

### Submit button
- backgroundColor: rgb(4, 72, 244)
- color: white
- borderRadius: 40px
- padding: 14px 32px
- fontFamily: Switzer
- fontSize: 16px
- fontWeight: 500
- alignSelf: flex-start

## Text Content
- Section heading: "Contact us"
- Subtext: "Send us a message we love to hear from you"
- Email: "hello@flowgrid.com"
- Address: "3891 Richardson, California"
- Phone: "(239) 555-0108"
- Form heading: "Fill out the form"
- Labels: "Full Name", "Email", "Company", "Message"
- Placeholders: "Enter your full name", "Enter your email", "Company (optional)", "Type your message here..."
- Submit: "Submit"

## Assets
- `/images/icon-email.svg`
- `/images/icon-location.svg`
- `/images/icon-phone.svg`

## Responsive Behavior
- **Desktop:** 2-column (contact info left, form right)
- **Mobile:** Single column, form below contact info
