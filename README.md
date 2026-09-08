# ZONO Clone

A pixel-close functional recreation of [zono.framer.ai](https://zono.framer.ai/) — the ZONO high-conversion coaching masterclass landing page.

## Stack

- React 19 + TypeScript
- Tailwind CSS v4 (custom `tb` = 810px and `dt` = 1200px breakpoints matching the reference's Framer breakpoints)
- Framer Motion (appear animations extracted verbatim from the reference's `__framer__appearAnimationsContent` config)
- Lucide React (control bar icons)

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
```

## Structure

```
src/
  components/
    Navbar.tsx            — fixed 80px nav: ZONO logo, 4 links, Join waitlist CTA
    Hero.tsx              — badge, 56px H1 w/ teal span, CTAs, video-call mockup
    BookingSection.tsx    — session cards (icon, rows, price, CTA)
    LearningSection.tsx   — 4 learn tiles (image tiles + pattern tiles, 40% offset)
    StatsSection.tsx      — count-up stat cards (2,500+ / 150+ / 30+ / 18K)
    CoachSection.tsx     — coach bio + About/Vision/Mission cards
    ComparisonSection.tsx— Zono vs Other AI coaches columns
    FeaturesSection.tsx   — interactive tabs (AI-First, Plug&play, Real Results, Zero Audience)
    AudienceSection.tsx   — fit / not-fit qualification cards
    Testimonials.tsx      — 2-row draggable slideshow carousel w/ arrows
    GuaranteeSection.tsx  — risk-free guarantee + image
    FAQ.tsx               — accordion (first open, chevron rotates -180°) + contact card
    SocialsSection.tsx    — YouTube / Instagram community cards
    Footer.tsx            — waitlist form, link columns, designer credit
    shared/
      Reveal.tsx          — reference appear animation (2s, ease [0.16,1,0.3,1])
      ui.tsx              — ButtonFilled / ButtonOutline / Badge / SectionHeading
  data/content.ts         — all reference copy verbatim
public/
  icons.svg               — sprite built from the reference's inline Framer icon set
```

## Fidelity notes

- All colors, radii, paddings, typography (Bricolage Grotesque + Inter), and section
  spacing extracted from the live reference DOM via computed-style dumps at
  1440px / 1024px / 390px.
- Appear animations replicate the reference exactly: opacity 0.001 → 1,
  scale 0.9 → 1, y 80 → 0, 2s duration, cubic-bezier(0.16, 1, 0.3, 1),
  staggered 0.1–0.4s delays.
- Video-call mockup reproduces the reference layout: tall "Rahul" tile with
  avatar cluster + 09:13 badge, stacked "Muthu"/"Jeevee Dev" tiles with mic
  pills, and the 5-icon control bar.
- Testimonial cards are 29.41% width with 16px gap (matches the Framer
  slideshow formula `calc(29.4118% - 14.1176px)`), drag-enabled with
  arrow controls.
- Learn tiles switch layout per breakpoint like the reference:
  desktop 4-col with 40%-offset pattern tiles, tablet 2×2 uniform 517px,
  mobile single column.
- Section heights track the reference within a few percent at all
  breakpoints; zero horizontal overflow at 1440/1280/1024/768/430/390/375.
