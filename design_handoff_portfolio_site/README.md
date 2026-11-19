# Handoff: Atul Tiwari Portfolio Site

## Overview
Single-page personal portfolio for Atul Tiwari, Senior Backend Engineer and Tech Lead. Goal: present experience, selected work, skills and education, and drive visitors to the resume download and LinkedIn. All content comes from his resume (`resume.pdf`); do not add experience, numbers or achievements that are not in it.

## About the Design Files
`Atul Tiwari Portfolio.dc.html` is a **design reference built in HTML** (a streaming "Design Component" file: template + a small JS class holding the data). It is a prototype of intended look and behavior, not production code to copy. Recreate it in the target environment. `PLAN.md` in `uploads/portfolio-website/` proposes **Astro + Tailwind on GitHub Pages** (repo `atult120.github.io`); use that unless told otherwise. Data arrays at the bottom of the file (`stats`, `jobs`, `work`, `skills`) should become typed data modules (`src/data/*.ts`).

## Fidelity
**High-fidelity.** Final colors, type, spacing and animation. Recreate pixel-accurately.

## Page structure (single page, top to bottom)
Container: `max-width:1160px; margin:0 auto; padding:0 clamp(20px,4vw,48px)`.

1. **Header** – flex, space-between, padding 28px 0, 14px text. Left: "Atul Tiwari" (Instrument Serif 26px, no underline, links to #top). Right nav: Experience, Work, Skills (color #55524c) and a pill "Contact" link (1px solid #1c1b19, radius 999, padding 8px 18px, weight 500; hover bg #1c1b19 / text #f4f1ec). Gap clamp(14px,2.5vw,32px). On ≤640px only the Contact pill shows.
2. **Hero** (`#top`) – padding clamp(56px,9vw,112px) 0 clamp(48px,7vw,88px) (40px top on mobile).
   - Eyebrow: JetBrains Mono 12px, uppercase, letter-spacing .08em, #c9482b, with 8px pulsing dot. Text: "Open to Senior Backend Engineer and Backend Tech Lead roles".
   - H1: Instrument Serif 400, `clamp(48px,10vw,148px)`, line-height .94, letter-spacing -.03em, margin-top 32px. Two masked lines: "Backend systems" / "that *stay up*." (`stay up` italic, #c9482b; trailing period normal).
   - Meta strip: margin-top 40px, padding-top 20px, 1px top border #1c1b19, mono 12px uppercase, #55524c, flex-wrap gap 10px 28px: "Atul Tiwari · Project Lead, Persistent Systems · Mumbai, India · 8 years".
   - Below: grid `repeat(auto-fit,minmax(min(100%,320px),1fr))`, gap 36px, margin-top 40px, align end. Left paragraph (Hanken Grotesk, clamp(18px,1.6vw,21px)/1.55, #3a3833, max 34em): "Senior Backend Engineer and Tech Lead building high-scale, high-uptime systems across Fintech, Healthcare, and Real Estate, with Node.js, TypeScript, and AWS Serverless." Right: buttons — primary "Download resume" (bg #1c1b19, text #f4f1ec, padding 14px 24px, radius 999, 15px/500; hover bg #c9482b, text #fff; links to `/resume.pdf`, download name "Atul Tiwari - Resume.pdf"); secondary "LinkedIn" (1px solid #1c1b19, padding 13px 24px; hover inverts). Buttons full width on ≤640px.
3. **Stats row** – top border 1px #1c1b19; grid `repeat(auto-fit,minmax(200px,1fr))`; each cell padding 32px 24px 32px 0, bottom border #d8d3ca. Number: Instrument Serif `clamp(44px,5vw,68px)`/1, letter-spacing -.02em. Label: 14px/1.45 #55524c, max 22ch.
   - 1M+ monthly requests served at 99.95% uptime · 8 engineers led as Tech Lead · 40% faster deployments through CI/CD automation · $3.5K saved per month on cloud infrastructure.
4. **About** – padding clamp(72px,10vw,128px) 0; grid auto-fit minmax(min(100%,300px),1fr), gap 40px 64px. H2 "About" (Instrument Serif `clamp(36px,4vw,52px)`/1.05, -.015em). Three paragraphs, 18px/1.65, #2c2a26, gap 20px (text in file).
5. **Experience** (`#experience`) – header row: H2 "Experience" + mono "2018 — PRESENT" (12px, #55524c), 1px bottom border #1c1b19, padding-bottom 20px. Each job is an `article`: grid auto-fit minmax(min(100%,280px),1fr), gap 24px 64px, padding 40px 0, bottom border #d8d3ca. Left: date (mono 12px #c9482b), company (Instrument Serif 34px/1.1), role (16px/500), location (14px #55524c). Right: bullet list (16px/1.55, `›` marker in #c9482b, gap 14px) then stack line (mono 12px/1.7 #55524c). Jobs: Persistent Systems (no bullets in resume), Wilco Source, Torinit, i-XL Technologies, Bookmyflat.com Pvt Ltd. Exact copy in `jobs` array.
6. **Selected work** (`#work`) – full-bleed #1c1b19 section, text #f4f1ec, padding clamp(64px,9vw,112px) with the container centered inside. H2 margin-bottom 48px. Cards grid `repeat(auto-fit,minmax(min(100%,340px),1fr))`, gap 1px on #3a3833 with 1px #3a3833 outer border (hairline grid).
   - Card: bg #1c1b19, padding 40px (28px 22px mobile), column gap 24px, relative. Top row: mono 12px #ec8a6f "01 / WILCO SOURCE · HEALTHCARE" + arrow ↗ (22px, #8a857b). Title: Instrument Serif `clamp(28px,3vw,36px)`/1.1, balance wrap. Metrics: 2-col grid, gap 20px, padding 24px 0, 1px #3a3833 top and bottom; number Instrument Serif `clamp(34px,4vw,48px)`, label 13px #b5b0a6. Body 15px/1.65 #d4cfc5. Stack: mono 11px/1.7 #8a857b.
   - Hover: bg #262522; 2px #ec8a6f bar scales in from left on top (scaleX 0→1, .5s cubic-bezier(.2,.7,.2,1)); arrow translates (4px,-4px) and turns #ec8a6f; transitions .35s.
   - Cards: 01 Portable ultrasound imaging platform; 02 Legacy PHP monoliths to microservices; 03 Multi-tenant platform with RBAC; 04 Rental platform performance and automation (see `work` array for metrics and copy).
7. **Skills** (`#skills`) – H2 "Skills and technologies", top border 1px #1c1b19. Each group row: flex-wrap, gap 14px 48px, padding 24px 0, bottom border #d8d3ca. Label: mono 12px uppercase #c9482b, flex `1 1 180px`, max-width 240px. Chips container flex `3 1 320px`, gap 8px. Chip: 1px #bdb7ac, radius 999, padding 6px 14px, 14px; hover bg #1c1b19, text #f4f1ec. Groups: Languages, Frameworks, Data, Architecture, Cloud and DevOps, Security and quality, Leadership.
8. **Education** – two-column like About. Niranjan Majhithia College of Commerce (BScIT, IT · 2016 - 2018); M J Junior College of Science (Niranjana Hospital · Bachelor of Science). Name 18px/500, detail #55524c.
9. **Footer / Contact** (`#contact`) – 1px top border #1c1b19, padding clamp(64px,9vw,112px) 0 40px. H2 "Let's build something reliable." Instrument Serif `clamp(48px,8vw,112px)`/.98, max 14ch. Buttons: "Connect on LinkedIn" (bg #c9482b, white, hover bg #1c1b19) and "Resume (PDF)" (outlined). Bottom mono 12px row: "Atul Tiwari · Mumbai, Maharashtra, India" / "Backend Engineering · Tech Leadership", margin-top 96px.

## Interactions & Behavior
- Hero load: eyebrow, meta strip, paragraph and CTAs use `rise` (opacity 0→1, translateY 28px→0, .9s cubic-bezier(.2,.7,.2,1)) with delays 0 / .55 / .7 / .85s. H1 lines slide up from a clipped mask (`translateY(105%)→0`, 1s same easing, delays .1s and .22s).
- Eyebrow dot pulses (box-shadow ring 0→10px fade, 1.8s infinite).
- Scroll reveal on experience articles, work cards, and skill rows: same `rise`, driven by CSS `animation-timeline: view()` with `animation-range: entry 5% entry 45%`, wrapped in `@supports`. Elements are simply visible where unsupported (consider an IntersectionObserver fallback).
- `prefers-reduced-motion: reduce` disables all animation.
- Smooth scroll on `html`. Anchor nav to #experience, #work, #skills, #contact.
- Resume button downloads `/resume.pdf`. LinkedIn: https://www.linkedin.com/in/atul-tiwari-91990316a
- Responsive: single breakpoint 640px (see header, hero, cards above); everything else is fluid via `clamp()` and auto-fit grids.

## State Management
None. Static content from data arrays; no fetching.

## Design Tokens
- Colors: bg #f4f1ec, ink #1c1b19, text #2c2a26 / #3a3833, muted #55524c, hairline #d8d3ca, chip border #bdb7ac, accent #c9482b, accent on dark #ec8a6f, dark card hover #262522, dark divider #3a3833, dark muted #8a857b / #b5b0a6 / #d4cfc5. Selection: bg #c9482b, text white.
- Fonts (Google Fonts): Instrument Serif (400, italic) for display; Hanken Grotesk (400/500/600) for body; JetBrains Mono (400/500) for labels.
- Radius: 999px (pills). No shadows.
- Section rhythm: `clamp(72px,10vw,128px)` vertical.
- Links: color #1c1b19, hover #c9482b, underline color #c9482b.

## Assets
No images or icons. `resume.pdf` is the supplied LinkedIn-generated resume; note it contains his phone number and email, so it becomes public when linked. Public contact links are LinkedIn only (email and phone intentionally omitted from the page).

## Content notes
- The resume summary says API latency reduced 35%; the Wilco role says 40%. About uses 35%, Wilco entries use 40%.
- Persistent Systems (Project Lead, May 2026 – Present) has no listed achievements; leave bullets empty until supplied.

## Files
- `Atul Tiwari Portfolio.dc.html` – the full design (markup, CSS keyframes in the head, data in the JS class at the bottom)
- `resume.pdf` – source resume and download asset
