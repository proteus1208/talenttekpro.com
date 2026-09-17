# Master Build Prompt — TalentTekPro Website

Paste this document (or the **Copy-paste block** at the bottom) into an AI coding / design agent as the single brief for building the full site. It consolidates brand, layout, pages, video, nav/footer, and **mandatory high-quality 3D + active animation**.

Source of truth files: `01`–`05` in this folder. When this prompt and those files disagree on fixtures, prefer this prompt for motion/3D; prefer `01`–`05` for copy, routes, and tokens.

---

## Role

You are a senior product designer + frontend engineer shipping **talenttekpro.com**: a premium hybrid agency site (tech talent acquisition + embedded engineering / digital delivery). Craft equals a GeniusXLab-style numbered-section agency site, but the brand is **TalentTekPro**, not GeniusXLab. Do not invent Fortune endorsements or copy proprietary competitor claims.

**Stack preference (if implementing):** Next.js App Router, React, TypeScript, Tailwind / CSS variables from tokens below, Framer Motion or CSS for 2D motion, **React Three Fiber + drei + Three.js** for the landing hero 3D scene and shared 3D motifs. Prefer CSS + light scroll libraries for secondary motion; reserve WebGL for the hero and 1–2 signature moments.

---

## Brand core

| Field | Value |
|-------|--------|
| Name | **TalentTekPro** (no space) |
| Tagline | Talent that ships. Technology that scales. |
| Short descriptor | Tech Talent & Delivery |
| Long descriptor | Integrated talent acquisition, embedded engineering, and digital delivery — so you scale people and product on one accountable partner. |
| Email | contact@talenttekpro.com |
| Est. | 2021 |
| Legal | © 2026 TalentTekPro LLC |

**Clients hire us to:** source/match senior technical talent (AI-assisted), embed cross-functional squads, and deliver cloud / AI / product / platform work end to end.

**Unlike pure staffing:** we stay through launch — match, embed, deliver.  
**Unlike pure agencies:** we can staff your team *or* be your team.

### Voice

- Concrete outcomes (time-to-hire, uptime, shipped increments). Senior, calm confidence.
- Hybrid clarity — talent *and* delivery in the same breath.
- No vague synergy/disrupt filler, emoji spam, or startup slang overload.
- Honest scope (“what we don’t know yet”).

### CTAs

| Role | Label |
|------|--------|
| Primary | `Start a project →` |
| Secondary | `Explore case studies` |
| Quote | `Get a Quote` |
| Services close | `Request a Proposal →` |

Primary buttons: cyan fill (`--ttp-ember` / `--ttp-teal` family). Secondary: ghost / teal text link with arrow.

---

## Visual system

**Concept:** Logo-aligned navy → royal → cyan (TP ribbon / pipeline mark). Deep navy backgrounds, signal cyan for links/borders/indexes, royal blue for secondary accents. **Primary CTAs use cyan (no orange).**

**Forbidden looks:** purple neon, cream + terracotta, broadsheet newspaper, Inter/Roboto/Arial as the designed face, emoji, heavy multi-layer glow stacks, pill clusters in the hero.

### Color tokens (ship in `:root`)

```css
:root {
  --ttp-ink: #051937;
  --ttp-slate: #0A1F3D;
  --ttp-surface: #0E2748;
  --ttp-surface-raised: #13315A;

  --ttp-border: rgba(0, 210, 255, 0.14);
  --ttp-border-strong: rgba(0, 210, 255, 0.45);

  --ttp-text: #E8F7FF;
  --ttp-text-muted: #A8C5D8;
  --ttp-text-faint: #6B8AA0;

  --ttp-teal: #00D2FF;
  --ttp-teal-dim: #0096FF;
  --ttp-royal: #1E60FF;
  --ttp-ember: #00D2FF;
  --ttp-ember-hover: #5AE0FF;

  --ttp-light: #F0F7FC;
  --ttp-light-ink: #051937;
  --ttp-light-muted: #4A5A6A;
}
```

| Token | Use |
|-------|-----|
| ink / wash | Page background |
| slate | Elevated section bands |
| teal | Links, indexes, signal rules, borders-strong |
| royal | Secondary accents / lattice mid tones |
| ember | Primary buttons (cyan fill) |
| surface | Cards / interactive panels only |
| light band | Testimonials / trust only |

### Typography

| Role | Font | Notes |
|------|------|--------|
| Display / H1–H2 | **Sora** | Brand + section headlines |
| Body / UI | **IBM Plex Sans** | 16–18px readable |
| Mono / indexes | **IBM Plex Mono** | `001 / TalentTekPro`, metrics |

Scale (desktop): Display `clamp(2.75rem, 6vw, 4.5rem)` / 600 / 1.05 · H2 `clamp(1.75rem, 3vw, 2.5rem)` · Body `1.0625rem` / 1.6.

### Logo

- Wordmark: TalentTekPro; optional teal on “Tek” *or* teal center node on mark — pick one system.
- Mark: interlocking **T** + three-node pipeline (talent → match → ship); teal on **match** node preferred.
- Lockups: horizontal mark+wordmark (nav/footer); wordmark only; mark only (favicon); stacked (splash/OG).
- Clear space ≥ height of capital T. Nav wordmark ~28–32px; mark ~24–28px.
- Don’t: outline glow, gradients in letterforms, stretch, burn tagline into logo file, place logo on busy media without scrim.

### Imagery mood

Interview / delivery rooms with cyan practical light; pair-programming and live dashboards; diverse senior professionals. No stock handshake clichés. Editorial photography: dark ink atmosphere, teal practicals, no text overlays in-frame.

### Fixture metrics (replace before launch)

50+ projects/placements · 40+ clients · 12+ team · 2 hubs · 10+ countries · 5+ years · 98% satisfaction · 99.9% uptime (managed delivery). Partner marquee: industry labels or licensed marks only.

---

## Global composition rules

1. **One composition per viewport** — especially first screen: not a dashboard of widgets.
2. **Brand first** — “TalentTekPro” is a hero-level signal (wordmark + display name), not only nav text. Brand test: if removing the nav makes the first viewport feel generic, branding is too weak.
3. **Hero budget** — first viewport only: brand, one headline, one short supporting sentence, one CTA group, **one dominant full-bleed visual plane**. No stats, schedules, address blocks, or secondary promos in the first viewport.
4. **Full-bleed hero** — edge-to-edge visual plane (3D canvas / video / image). No inset hero cards, side-panel hero media, floating mosaics.
5. **No hero overlays** — no detached badges, promo stickers, or chips on top of hero media.
6. **Cards default off** — cards only when they are the container for interaction. If removing border/shadow/radius doesn’t hurt interaction, don’t use a card.
7. **One job per section** — one headline, usually one supporting sentence, then content.
8. Numbered section indexes in mono: `001 / TalentTekPro / Est. 2021`, `002 / Manifesto`, …

### Grid & spacing

| Breakpoint | Content max | Gutter | Section vertical |
|------------|-------------|--------|------------------|
| ≥1280px | 1120–1200px | 24–32px | 96–128px |
| Tablet | fluid | 20–24px | 72–96px |
| Mobile | fluid | 16–20px | 64–80px |

### Sticky chrome

- Top nav: translucent ink scrim over hero; solidifies after scroll past hero.
- Optional thin scroll-progress bar (teal on ink).
- Mobile: compact sticky nav + hamburger; primary CTA reachable.

---

## CRITICAL: Landing first section = premium interactive 3D scene

**The home page first viewport is not a static image and is not video-first.** It must be a **high-quality real-time 3D scene** that immediately signals “this is a 3D-capable, craft-led product site.”

### Hero visual plane (001)

- Full-bleed **WebGL canvas** (React Three Fiber) as the dominant edge-to-edge background/plane.
- HTML UI (brand, index, headline, support, CTAs) sits in a left/center safe stack with readable contrast — use a soft ink gradient scrim behind type, **not** floating chips or badges.
- Scene must feel **production-grade**: dense geometry or lattice (not three lonely spheres), intentional camera, material restraint, brand color lighting.
- Motif: **talent → match → ship** pipeline — nodes, paths, orbital lattice, or abstract “team + system” network. Teal on the match/center signal; royal as secondary rim; deep ink void.
- **Active animation always on** while the hero is in view: slow orbital rotation, breathing emissive pulse on match node, subtle particle or light travel along edges, micro parallax from pointer (desktop) / device tilt if safe (optional).
- Pointer interactivity: cursor parallax / light follow; optional click or hover to emphasize a node (talent / match / ship) with a short camera ease — keep it elegant, not gamey.
- Performance: adaptive DPR, pause render loop when hero leaves viewport, fallback to high-quality **static poster** (or simplified CSS) if WebGL fails / software rasterizer / `prefers-reduced-motion`.
- Reduced motion: freeze to a beautiful composed still of the same 3D world (or poster); keep UI readable.
- Optional secondary layer: muted cinematic video *behind* or *as texture* only if it never competes with the 3D read; default is **3D owns the first fold**.

### Hero copy (pick one headline)

| Field | Content |
|-------|---------|
| Brand | TalentTekPro |
| Index | `001 / TalentTekPro / Est. 2021` |
| Headline options | **Build the team. Ship the system.** · **Talent that ships.** · **Match senior talent. Deliver production software.** |
| Support | AI-assisted tech talent and embedded engineering squads — one partner from shortlist to production. |
| CTAs | `Start a project →` · `Explore case studies` |

### 3D scene quality bar (acceptance)

- [ ] First viewport unmistakably WebGL / 3D within 1 second of load (or graceful poster if blocked)
- [ ] Reads as TalentTekPro pipeline narrative without on-canvas text/logos burned in
- [ ] Continuous ambient motion while visible; idle never feels dead
- [ ] Pointer parallax works on desktop; touch does not fight scroll
- [ ] 60fps on mid laptops when possible; degrade gracefully (lower DPR, fewer nodes)
- [ ] Brand colors match tokens; no purple neon bloom spam
- [ ] Falls back cleanly for reduced motion and no-WebGL
- [ ] Brand + headline remain the hero-level signal; 3D supports, does not bury type

### Master 3D hero generation / art direction prompt

```text
Premium real-time WebGL brand hero for TalentTekPro, full-bleed dark void #051937, dense orbital lattice and three-node pipeline (talent → match → ship), geometric nodes connected by thin luminous paths, cyan #00D2FF emissive accent on the center match node, royal #1E60FF rim light sparingly, sky-white #E8F7FF edge highlights, slow continuous orbital rotation, soft breathing pulse on match node, light traveling along edges, subtle mouse parallax, photoreal PBR-adjacent materials without plastic shine overload, cinematic depth of field light, enterprise tech staffing + engineering mood, no text, no logos, no purple neon, no sci-fi HUD clutter, high visual density, production portfolio quality
```

---

## Active animation & 3D effects design (site-wide)

Ship a **motion system**, not isolated gimmicks. Goal: presence and hierarchy — active, alive, premium.

### Required motion set (minimum)

1. **Hero 3D ambient + parallax** (above) — primary quality signal.
2. **Hero UI entrance** — wordmark + headline fade/rise 600–900ms ease-out; CTA group ~150ms later.
3. **Section index scrub** — `00N / Name` opacity 0.35 → 1 when section is primary; optional teal rule grow 0→100%.
4. **Pipeline match animation** (Capabilities / Platform / Approach) — SVG or lightweight 3D: path draws talent → match → ship (~1.2s); match node pulses teal once; optional score tick 0 → 94. Once per visit unless reduced motion.
5. **Reveal on scroll** — sections/content rise + fade with intersection; staggered children on lists/grids.
6. **Logo marquee** — infinite horizontal partner scroll; pause on hover.
7. **Link / tile polish** — links → teal; project tiles image scale 1→1.03; scroll progress teal fill.

### Elevated 3D / depth moments (use 1–2 beyond hero)

| Moment | Idea |
|--------|------|
| Platform (004) | Interactive panel with subtle 3D depth or CSS 3D tilt on device frame; tabs switch content with short crossfade |
| Approach teaser | Mini pipeline 3D or extruded path that advances with scroll scrub |
| Get started / closing | Soft 3D light wash or node fade into contact band |

Do **not** put a second full-screen WebGL scene on every page. Inner pages: typography-led or still heroes; optional small 3D motif in footer/loader only.

### Explicitly avoid

- Neon glow stacks, purple blobs, particle spam that obscures text
- Autoplaying loud audio
- Motion that fights scroll or readability
- Dashboard clutter in the first viewport
- Cards and floating stickers over the hero 3D canvas

### Reduced motion

```css
@media (prefers-reduced-motion: reduce) {
  /* Disable parallax, pipeline draw, marquees, page wipes, continuous 3D spin */
  /* Hero: static composed still / poster */
  /* Keep opacity fades ≤150ms or instant */
}
```

---

## Home section order

| # | Section | Job |
|---|---------|-----|
| **001** | **Hero** | Brand + promise + CTA + **full-bleed interactive 3D scene** |
| 002 | Manifesto | Hybrid thesis 2–4 lines + one atmospheric still |
| 003 | Impact | Metrics only |
| 004 | Platform | Interactive mock: Talent OS · AI Match · Ship Velocity |
| 005 | Case studies | 4–5 featured tiles → `/projects/...` |
| 006 | Solutions | Eight disciplines |
| 007 | Industries | Sector list |
| 008 | Approach | Four phases teaser → `/process` |
| 009 | More work / partners | Secondary cases + logo marquee |
| 010 | Careers teaser | Open roles snapshot |
| 011 | Blog teaser | Latest 3 |
| 012 | FAQ | 3 questions + link |
| 013 | Get started | Contact band |
| — | Footer | Columns per IA |

### Home section copy aims (brief)

- **002 Manifesto:** “TalentTekPro charts how enterprises hire and build —” consulting-led talent strategy, AI matching, squads through launch; measure time-to-productivity and production systems.
- **003 Impact:** 98% satisfaction · 50+ · 10+ countries · 99.9% · 40+ clients · 5+ years.
- **004 Platform:** Same command surface recruiters + delivery leads use — funnel, match routing, sprint velocity.
- **005 Cases fixtures:** Dating platform · Healthcare ops · Headless commerce · Office booking · Pipeline inspection (mix staffing + build). Headline: “Work that hired and shipped.”
- **006 Solutions:** “Tailored talent and technology for real-world scale.” Eight disciplines linked to `/services#...`.
- **007 Industries:** Banking & Finance · Healthcare · Manufacturing · Retail & CPG · Energy · Telecom & Media · Public Sector · Travel & Logistics.
- **008 Approach:** “Unlock capacity — people and platforms.” Bullets: Customized · Quality · AI-native · Global. CTA `See our process →`.
- **010 Careers:** “Join our team.” 3–4 roles → `/careers`.
- **011 Blog:** “The latest articles.” 3 posts.
- **012 FAQ:** engagement models · how fast we start · startups vs enterprise.
- **013 Get started:** “Ready to explore your possibilities? Talk to us today.” Free consultancy — talent, delivery, or both.

---

## Eight disciplines (services spine)

1. Tech Talent Acquisition  
2. Embedded Squads  
3. Contract & Contract-to-Hire  
4. Applied AI for Hiring & Products  
5. Digital Engineering  
6. Cloud & Platform  
7. Consulting & Workforce Strategy  
8. Managed Delivery / SRE  

### Engagement models (fixtures)

| Model | From |
|-------|------|
| Project-Based | $75k |
| Embedded Squad | $45k/mo |
| Retainer | $15k/mo |
| Talent Search | Custom |
| Managed Services | Custom |

---

## Route map & chrome

### Primary nav

`[Mark + TalentTekPro]` · Services · Case Studies · Approach · About · Blog · Careers · `[Get a Quote]`

Optional announcer: tagline + email + `Start a project →`.

| Label | Route |
|-------|-------|
| Home | `/` |
| Services | `/services` |
| Case Studies | `/projects` |
| Approach | `/process` |
| About | `/about` |
| Blog | `/blog` |
| Careers | `/careers` |
| Get a Quote | `/contact` |
| Pricing | `/pricing` |
| FAQ | `/faq` |
| Privacy / Terms / Cookies | `/privacy` `/terms` `/cookies` |

### Footer

Brand block (mark, name, Tech Talent & Delivery, email) + columns:

- **Company:** About, Services, Case Studies, Our Approach, Careers  
- **Resources:** Blog, Pricing, FAQ, Contact  
- **Legal:** Privacy, Terms, Cookies  

Bottom: `© 2026 TalentTekPro LLC All rights reserved.` + Privacy / Terms / Cookies.

---

## Inner pages (build all)

Inner pattern: **breadcrumb → page hero (still, not full-screen WebGL unless specified) → body → CTA → footer**.

| Route | Title | H1 / aim |
|-------|-------|----------|
| `/services` | Services \| TalentTekPro | Eight disciplines. One accountable partner. Engagement models + proposal CTA. |
| `/projects` | Projects \| TalentTekPro… | Every team we placed. Every system we put into production. Filters: All · Talent · Digital Product · Platform · E-commerce. Fixture cases 01–09 as in `03-pages`. |
| `/process` | Approach \| How We Work… | Unlock the potential of your business. Principles + phases Discover → Match & Design → Build & Embed → Scale. |
| `/about` | About \| TalentTekPro | Recruiters, engineers, and innovation partners. Six principles + timeline 2021→2026. |
| `/blog` | Blog \| TalentTekPro… | Field notes from the engine room — and the hiring floor. Categories talent + engineering. |
| `/careers` | Careers \| Join… | Build the work you want to be known for. Benefits, culture, open roles (fixtures). LinkedIn + résumé on apply. |
| `/pricing` | Pricing \| … | Engagement models; custom scoping. |
| `/faq` | FAQ \| … | Objection handling (models, timeline, mix, replacement, security, TZ, IP, AI matching, cadence). |
| `/contact` | Contact \| … | Form (name, email, company, need: Talent/Delivery/Both, message) + email. |
| Legal stubs | Privacy / Terms / Cookies | Controller TalentTekPro LLC; standard structure. |

Shared CTA patterns: marketing → Start a project / Explore case studies; services → Request a Proposal; careers → View open roles / Apply.

---

## Optional hero video (secondary asset)

If a brand film is produced (`04-landing-video`), it may support marketing or poster generation — **it does not replace the 3D first fold** unless WebGL is unavailable. Concept: 12–15s talent → delivery → dark negative space; no burned-in text/logos; grade ink/cyan/royal; poster required; `prefers-reduced-motion` → poster only.

---

## Accessibility & quality

- Focus rings teal, 2px offset; body contrast ≥ WCAG AA on ink.
- Essential info in DOM, not only in canvas/video.
- Pause WebGL and video when offscreen; mute autoplay if any audio bed.
- Mobile: hero canvas `object-fit` cover behavior; touch scroll preserved; nav drawer &lt; ~960px.
- Disciplines: 1 → 2 → 4 columns; case strip scroll-snap mobile / grid desktop.

---

## Implementation checklist

- [ ] Tokens, fonts, logo lockups from brand system  
- [ ] Home **001 = full-bleed interactive 3D** meeting quality bar  
- [ ] Active site-wide motion system + reduced-motion paths  
- [ ] All routes + nav/footer IA wired  
- [ ] Copy and fixtures from pages brief; email everywhere `contact@talenttekpro.com`  
- [ ] No purple neon / cream terracotta / broadsheet / Inter-as-brand  
- [ ] Cards only where interaction needs them  
- [ ] Lighthouse-minded: pause WebGL offscreen, poster fallback, tuned assets  

---

## Copy-paste block (single prompt for agents)

```text
Build the complete TalentTekPro marketing website (Next.js App Router, React, TypeScript, CSS variables, Framer Motion/CSS for 2D, React Three Fiber + drei + Three.js for WebGL).

BRAND: TalentTekPro — hybrid tech talent acquisition + embedded engineering / digital delivery. Tagline: “Talent that ships. Technology that scales.” Email: contact@talenttekpro.com. Est. 2021. © 2026 TalentTekPro LLC. Voice: senior, calm, concrete outcomes; talent AND delivery in the same breath. CTAs: “Start a project →”, “Explore case studies”, “Get a Quote”.

VISUAL: Deep navy → royal → cyan. Tokens: ink #051937, slate #0A1F3D, surface #0E2748, text #E8F7FF, muted #A8C5D8, teal/cyan #00D2FF (links, indexes, primary buttons), royal #1E60FF. Fonts: Sora (display), IBM Plex Sans (body), IBM Plex Mono (indexes). Logo: TalentTekPro wordmark + interlocking T with three-node pipeline (talent→match→ship), teal on center match node. FORBIDDEN: purple neon, cream+terracotta, broadsheet, Inter/Roboto as designed look, emoji, hero pill clusters, cards in hero, floating badges on hero media.

COMPOSITION: One composition per viewport; brand-first first screen; hero budget = brand + one headline + one support line + one CTA group + one dominant full-bleed visual; cards default off; one job per section; numbered mono indexes 001, 002…; sticky translucent nav; optional teal scroll progress.

CRITICAL — HOME HERO (001): The first section MUST be a premium full-bleed interactive 3D WebGL scene (not a static image-first or video-first hero). Dense orbital lattice / pipeline nodes (talent→match→ship), cyan emissive match node, royal rim light, continuous ambient animation (orbit, pulse, light along edges), desktop pointer parallax, pause when offscreen, adaptive DPR, poster/static fallback for no-WebGL and prefers-reduced-motion. HTML brand “TalentTekPro”, index “001 / TalentTekPro / Est. 2021”, headline (pick one: “Build the team. Ship the system.” / “Talent that ships.” / “Match senior talent. Deliver production software.”), support about AI-assisted talent + embedded squads, CTAs Start a project + Explore case studies, soft ink scrim behind type only — no overlay chips. Quality bar: production portfolio WebGL, alive when idle, readable type, brand colors, 60fps where possible.

ACTIVE ANIMATION SITE-WIDE: Hero 3D + UI entrance; section index scrub; pipeline draw talent→match→ship with teal pulse; scroll reveals; partner marquee; link/tile hover; scroll progress. Optional 1–2 extra 3D/depth moments (Platform panel tilt, Approach scroll-scrub pipeline) — do NOT put full-screen WebGL on every page. Respect reduced motion.

HOME ORDER: 001 Hero 3D · 002 Manifesto · 003 Impact metrics · 004 Platform tabs (Talent OS / AI Match / Ship Velocity) · 005 Case studies · 006 Eight disciplines · 007 Industries · 008 Approach teaser · 009 More work + partners · 010 Careers teaser · 011 Blog teaser · 012 FAQ · 013 Get started · Footer.

DISCIPLINES: Talent Acquisition, Embedded Squads, Contract/C2H, Applied AI, Digital Engineering, Cloud & Platform, Consulting/Workforce Strategy, Managed Delivery/SRE. Engagement fixtures: Project from $75k, Embedded from $45k/mo, Retainer from $15k/mo, Talent Search custom, Managed custom.

ROUTES: / /services /projects /process /about /blog /careers /pricing /faq /contact /privacy /terms /cookies. Nav: Services, Case Studies→/projects, Approach→/process, About, Blog, Careers, Get a Quote→/contact. Footer columns Company / Resources / Legal as standard agency IA. Inner pages: breadcrumb + still hero + body + CTA (no mandatory full-screen 3D).

FIXTURES: 50+ projects, 40+ clients, 12+ team, 2 hubs, 10+ countries, 5+ years, 98% satisfaction; case studies mix staffing + product (dating, healthcare, commerce, office booking, pipeline inspection, etc.). Replace before launch; no fake Fortune logos.

A11Y/PERF: WCAG AA text, teal focus rings, essential copy in DOM, pause WebGL/video offscreen, mobile-friendly scroll vs canvas, nav drawer ~<960px.

Deliver a cohesive premium site where the landing first fold proves high-quality 3D craft and the rest of the page stays actively animated, on-brand, and conversion-focused.
```

---

## Related docs

| File | Role |
|------|------|
| [README.md](./README.md) | Scenario overview |
| [01-brand-theme-logo.md](./01-brand-theme-logo.md) | Brand, tokens, logo prompts |
| [02-layout-effects.md](./02-layout-effects.md) | Layout & base effects |
| [03-pages.md](./03-pages.md) | Full page copy & image prompts |
| [04-landing-video.md](./04-landing-video.md) | Optional brand film (secondary to 3D hero) |
| [05-footer-nav.md](./05-footer-nav.md) | Nav & footer IA |
