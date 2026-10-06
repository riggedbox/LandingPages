# AGENT.md — Digital Signage Landing Page

## Project

This is the landing page for Riggedbox Digital Signage / Reels Player.

Current production URL:
https://riggedbox.com/digitalsignage/

Product positioning:
- Local-first digital signage.
- Displays Instagram Reels, videos, photos, and carousels from an Instagram Professional Account.
- Uses the Instagram Graph API rather than scraping.
- Playlist-based playback.
- Separate fullscreen display mode.
- Access tokens remain in the local backend and are encrypted; browser clients must not receive the token.

The landing page is a marketing/product website. Do not turn it into a generic SaaS template.

---

## Primary Objective

Redesign/refine the landing page so it feels like a premium modern creative-tech product while preserving the existing product identity and all working functionality.

The visual/motion reference is the supplied Dribbble video:

`Marketing Agency Website- animation by Ronas IT - UI-UX Team on Dribbble.mp4`

Use the video as a reference for:
- visual rhythm
- section transitions
- editorial composition
- large typography
- playful floating UI elements
- scroll-driven storytelling
- soft gradient background fields
- rounded white content panels
- subtle parallax
- animated cards
- polished micro-interactions

Do NOT reproduce the reference website literally.
Do NOT copy its branding, illustrations, text, assets, or exact layout.
Translate its visual language into the Digital Signage product.

---

## Design Direction

Target aesthetic:

"Editorial creative agency motion + premium SaaS product + physical digital-display technology."

Core characteristics:
- Bright off-white/white canvas.
- Soft pink/coral gradient atmosphere inspired by the reference video.
- Black/dark charcoal typography with strong contrast.
- Large expressive headline typography.
- Rounded cards and pill-shaped controls.
- Generous whitespace.
- Product screenshots/mockups as the main visual language.
- Thin borders and restrained shadows.
- Small decorative geometric elements used sparingly.
- Motion should feel intentional and tactile, not like a collection of random animations.

Avoid:
- generic corporate blue SaaS aesthetics
- excessive glassmorphism
- excessive gradients on text
- neon cyberpunk styling
- excessive shadows
- animation on every element
- huge blocks of marketing copy
- fake statistics or testimonials
- invented customer logos
- invented product capabilities

---

## Current Product Content

Keep the core message:

Eyebrow:
"Local-first digital signage"

Hero:
"Konten Anda. Layar Anda."

Supporting copy:
"Tampilkan Reels, video, foto, dan carousel dari Instagram Professional Account pada layar digital yang selalu siap menarik perhatian."

Primary CTA:
"Mulai percakapan"

Secondary CTA:
"Lihat cara kerja"

Feature positioning:
"Instagram Anda, tampil lebih besar."

The product should communicate these three technical advantages clearly:

1. Ambil dari sumber resmi
   Media dimuat melalui Instagram Graph API dari akun profesional yang terhubung — bukan scraping.

2. Playlist yang fleksibel
   Pilih media, susun urutan, atur mode pemutaran, lalu buka display fullscreen terpisah.

3. Local-first
   Token akses tetap berada di backend lokal dan disimpan dalam bentuk terenkripsi. Browser tidak menerimanya.

How it works:
"Hubungkan. Pilih. Putar."

Explain the flow:
1. Hubungkan Instagram Professional Account.
2. Validasi akses.
3. Pilih media yang ingin ditampilkan.
4. Mulai playback pada monitor.

Closing CTA:
"Mari buat layar Anda lebih hidup."

---

## Recommended Page Structure

### 1. Sticky Navigation

Keep the navigation minimal.

Suggested:
- Logo / Reels Player
- Fitur
- Cara kerja
- Privasi
- CTA: "Mulai percakapan"

Navigation should become visually compact while scrolling.

Do not use a heavy hamburger menu on desktop.

---

### 2. Hero

The hero is the most important section.

Composition:
- Large headline on the left/upper area.
- Product display mockup on the opposite side or overlapping the hero.
- Floating Instagram/media cards around the product.
- Soft pink gradient/background shape behind the product.
- Small decorative elements can drift subtly.

Hero should visually communicate:
Instagram content -> digital screen -> attractive physical display.

Animation:
- Headline enters with a short stagger.
- Product display slides/fades into position.
- Media cards float in with slightly different timing.
- Background shape moves very slowly.
- Avoid aggressive continuous movement.

The hero must still work if JavaScript animations fail.

---

### 3. Product Showcase

Create a stronger visual demonstration of the actual product.

Use existing screenshots/assets if available.

Do not invent UI features that do not exist.

Possible composition:
- Large central display frame.
- Multiple media previews/cards surrounding it.
- A playlist/control panel appearing as a secondary layer.
- Small labels explaining what the user is seeing.

This section should answer:
"What actually appears on the screen?"

---

### 4. Feature Section

Use a visually interesting card composition instead of three identical SaaS cards.

Preferred approach:
- One large primary feature card.
- Two smaller supporting cards.
- Cards can have different sizes and visual treatments.
- Scroll reveals should create a sense of depth.

Technical claims must remain accurate.

---

### 5. How It Works

Use a horizontal or vertically progressive storytelling layout.

Example:

01 — Hubungkan
Connect the Instagram Professional Account.

02 — Pilih
Select and organize the media.

03 — Putar
Open fullscreen display and let the playlist run.

Use scroll-triggered transitions:
- active step changes
- display preview updates
- connecting lines/progress indicators animate

Keep the implementation accessible and usable without animation.

---

### 6. Use Cases

If assets/content permit, visually demonstrate:
- Toko
- Studio
- Kantor
- Lobby
- Event

Do not claim industry-specific features that the product does not actually support.

This section is about showing where the display can be useful, not creating fictional customer stories.

---

### 7. Security / Local-first

Make the security architecture visually understandable.

Important message:
"The browser does not receive the Instagram access token."

Show a simple visual flow:

Instagram Graph API
        ↓
Local Backend
        ↓
Encrypted Credential Storage
        ↓
Display / Browser

Avoid implying that the product provides enterprise-grade security certifications unless such certifications actually exist.

---

### 8. Final CTA

Use a visually strong closing section inspired by the reference video's pink gradient ending.

Suggested copy:

"Mari buat layar Anda lebih hidup."

Supporting text:
"Siapkan konten Instagram Anda untuk tampil lebih besar."

CTA:
"Mulai percakapan"

WhatsApp CTA must keep the existing destination.

---

### 9. Footer

Keep:
- Product name
- Privacy
- Terms
- Data deletion
- WhatsApp/contact
- Instagram/Meta attribution where legally required

Do not remove existing legal links.

---

## Motion System

The supplied reference video uses a polished editorial motion language. Recreate the principles, not the exact animation.

Preferred motion:
- opacity + translate
- scale 0.96 -> 1
- slight rotation for decorative cards
- horizontal card movement
- masked/reveal text
- scroll-based parallax
- card stacking
- smooth section transitions

Animation timing:
- micro interaction: 150–250ms
- normal entrance: 500–800ms
- large section transition: 800–1200ms
- stagger: approximately 60–120ms

Use easing that feels smooth and slightly physical.

Avoid:
- constant large-scale looping animations
- excessive bounce
- long blocking animations
- scroll hijacking
- animations that prevent clicking
- animations that make text difficult to read

Respect:
`prefers-reduced-motion: reduce`

---

## Technical Rules

Before modifying code:

1. Inspect the complete existing implementation.
2. Identify framework/build system.
3. Identify all relevant components, CSS, JS, assets, and animation libraries.
4. Identify existing routes and external links.
5. Identify current responsive behavior.
6. Identify which elements are functional versus purely visual.
7. Preserve working functionality unless explicitly asked to change it.

Do not rewrite the project blindly.

Do not replace the framework merely because another framework is more convenient.

Prefer the existing stack.

Reuse existing assets before creating replacements.

---

## Responsive Requirements

Desktop:
- editorial composition
- large hero
- layered product mockups
- generous whitespace

Tablet:
- reduce overlap
- preserve hierarchy
- keep interactions usable

Mobile:
- single-column flow
- no horizontal overflow
- no tiny text
- product mockups remain readable
- floating decorative elements should be reduced
- navigation remains usable
- CTA remains obvious

The page must look intentionally designed on mobile, not like a collapsed desktop page.

---

## Performance Requirements

The landing page must remain lightweight.

Rules:
- Lazy-load below-the-fold media.
- Optimize large screenshots.
- Prefer WebP/AVIF when supported.
- Avoid loading unnecessary animation libraries.
- Avoid large autoplay videos unless they materially improve the product demonstration.
- Avoid excessive DOM nodes for decorative effects.
- Keep animation GPU-friendly.
- Avoid expensive blur filters on many elements.
- Avoid scroll event handlers that run expensive layout calculations every frame.

Prefer:
- transform
- opacity
- IntersectionObserver
- requestAnimationFrame where necessary
- CSS animations for simple effects

---

## Accessibility

Must support:
- keyboard navigation
- visible focus states
- semantic headings
- meaningful button/link labels
- sufficient color contrast
- reduced motion
- readable mobile typography

Do not make essential information dependent on hover.

---

## Content Rules

Language: Bahasa Indonesia.

Tone:
- concise
- modern
- technically credible
- confident
- not exaggerated

Do not invent:
- customer names
- client logos
- statistics
- pricing
- testimonials
- integrations
- AI features
- analytics features
- hardware capabilities

unless they already exist in the code/product specification.

---

## CTA Rules

The main conversion target is WhatsApp/contact.

Preserve the existing WhatsApp destination.

Use consistent CTA wording.

Primary:
"Mulai percakapan"

Secondary:
"Lihat cara kerja"

Do not create fake signup/login flows.

---

## SEO

Preserve or improve:
- title
- meta description
- Open Graph metadata
- semantic heading hierarchy
- canonical URL

Suggested title:
"Digital Signage Instagram | Reels Player — Riggedbox"

Suggested description:
"Ubah konten Instagram Professional Account menjadi digital signage yang siap tampil di toko, studio, kantor, lobby, dan event."

Do not keyword-stuff.

---

## Definition of Done

The implementation is complete only when:

- The page communicates the product within the first viewport.
- The visual style clearly reflects the supplied reference video's editorial/motion language.
- The product itself remains the visual focus.
- Existing functionality and legal links still work.
- WhatsApp CTA works.
- Desktop layout is polished.
- Mobile layout is intentionally designed.
- Animations are smooth and restrained.
- Reduced-motion behavior works.
- No horizontal overflow exists.
- No console errors are introduced.
- No fake product claims are introduced.
- Performance is acceptable.
- The code remains maintainable.

---

## Agent Workflow

Always work in this order:

### Phase 1 — Inspect
Inspect the repository and existing implementation.

### Phase 2 — Plan
Create a concise implementation plan describing:
- components to modify
- assets to reuse
- new components required
- animation strategy
- responsive strategy
- risks

Do not modify files yet.

### Phase 3 — Implement
Implement the plan incrementally.

### Phase 4 — Validate
Check:
- desktop
- tablet
- mobile
- navigation
- CTA
- legal links
- console errors
- horizontal overflow
- reduced motion
- animation performance

### Phase 5 — Polish
Only after functionality is correct:
- adjust spacing
- typography
- motion timing
- visual hierarchy
- responsive details

Do not perform broad rewrites just for aesthetic preference.

---

## Important Design Principle

The goal is not:

"Make a pretty website."

The goal is:

"Make a visitor immediately understand that their Instagram content can become a polished, continuously running digital display — and make them want to ask how to deploy it."

Every visual decision should support that goal.
