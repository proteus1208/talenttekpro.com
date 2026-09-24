# Layout & Special Effects

GeniusXLab-inspired composition: numbered sections, one job per section, full-bleed hero, brand-first first viewport. Adapted for TalentTekPro hybrid (talent + delivery).

---

## Global layout rules

### Composition

1. **One composition per viewport**: especially the first screen: not a dashboard of widgets.
2. **Brand first**: “TalentTekPro” is a hero-level signal (wordmark + display name), not only nav text.
3. **Hero budget**: first viewport contains only: brand, one headline, one short supporting sentence, one CTA group, one dominant full-bleed video/image. **No** stats, schedules, address blocks, or secondary promos in the first viewport.
4. **Full-bleed hero**: video/image is an edge-to-edge plane (or background). No inset hero cards, side-panel hero media, or floating image mosaics.
5. **No hero overlays**, no detached badges, promo stickers, or chips on top of hero media.
6. **Cards default off**: cards only when they are the container for interaction (e.s. quote form, role apply row, filterable project tile). If removing border/shadow/radius doesn’t hurt interaction, don’t use a card.
7. **One job per section**: one headline, usually one supporting sentence, then content.

### Grid & spacing

| Breakpoint | Content max | Gutter | Section vertical |
|------------|-------------|--------|------------------|
| ≥1280px | 1120–1200px | 24–32px | 96–128px |
| Tablet | fluid | 20–24px | 72–96px |
| Mobile | fluid | 16–20px | 64–80px |

Section index label (mono, muted) sits above or beside each major block:

`001 / TalentTekPro / Est. 2021`  
`002 / Manifesto`  
`003 / Impact`  
…

### Sticky chrome

- Top nav: translucent ink scrim over hero; solidifies after scroll past hero.
- Optional thin **scroll progress** bar at very bottom or top edge (teal fill on ink track).
- Mobile: compact sticky nav + hamburger; primary CTA “Get a Quote” remains reachable.

---

## Home page section order

| # | Section | Job |
|---|---------|-----|
| 001 | Hero | Brand + promise + CTA + full-bleed video |
| 002 | Manifesto | Hybrid thesis in 2–4 lines + one atmospheric still |
| 003 | Impact | Metrics only (satisfaction, placements, countries, etc.) |
| 004 | Platform | Interactive mock: Talent OS / Delivery velocity (tabs) |
| 005 | Case studies | Horizontal or grid strip of shipped + staffing wins |
| 006 | Solutions | Eight disciplines |
| 007 | Industries | Sector list (one job: depth across sectors) |
| 008 | Approach | Four phases teaser → link to `/process` |
| 009 | More work / partners | Secondary cases + logo marquee |
| 010 | Careers teaser | Open roles snapshot |
| 011 | Blog teaser | Latest 3 articles |
| 012 | FAQ | 3 questions + link to full FAQ |
| 013 | Get started CTA | Contact band |
| - | Footer | See [05-footer-nav.md](./05-footer-nav.md) |

Inner pages follow: **breadcrumb → page hero (still, not video unless specified) → body sections → CTA → footer**.

---

## Navigation layout

```
[Mark + TalentTekPro]   Services  Case Studies  Approach  About  Blog  Careers   [Get a Quote]
```

- Left: logo lockup  
- Center/right: text links (muted → teal on hover/active)  
- Far right: ember-filled or outline ember CTA  

Announcer bar (optional, above nav): one line: `Talent that ships. Technology that scales.` + `contact@talenttekpro.com` + `Start a project →`

---

## Platform section layout (home 004)

Three modes via text tabs (not card stack): **Talent OS** · **AI Match** · **Ship Velocity**

| Mode | Content |
|------|---------|
| Talent OS | Funnel health, open reqs, time-to-shortlist |
| AI Match | Multi-signal routing mock (skills, timezone, seniority) |
| Ship Velocity | Sprint remaining, deploy count, risk register |

Treat these as **interactive panels** (`--ttp-surface`), phone/desktop frame optional. Do not float stickers over the hero video.

---

## Special effects

Ship **at least** these intentional motions. Prefer CSS + light scroll libraries; avoid particle spam and heavy glow.

### 1. Hero ambient parallax

- Video/image layer moves slower than scroll (subtle `translateY`, ~5–10% of scroll delta).
- Brand wordmark + headline: fade in + slight rise (`opacity 0→1`, `translateY 12px→0`) on load, 600–900ms, ease-out.
- CTA group delays ~150ms after headline.
- Keep motion subtle enough that poster still works when video fails.

### 2. Section index scrub

- Labels `00N / Name` fade/ sharpen with scroll intersection (opacity 0.35 → 1 when section is primary).
- Optional: thin teal rule grows from 0→100% width under the label once.

### 3. Pipeline match animation (Capabilities / Platform)

- On enter viewport: path draws talent node → match node → ship node (SVG stroke-dashoffset, ~1.2s).
- Match node pulses teal once; score counter ticks up (e.g. 0 → 94).
- Runs once per visit unless user prefers reduced motion.

### Supporting polish

| Effect | Behavior |
|--------|----------|
| Logo marquee | Infinite horizontal scroll of partner marks; pause on hover |
| Page transitions | Soft fade or short ink wipe (~200ms); don’t block LCP |
| Hover links | Color → teal; underline offset animation |
| Project tiles | Image slight scale 1→1.03; no heavy shadow stack |
| Scroll progress | Teal fill proportional to document scroll |

### Explicitly avoid

- Neon glow stacks, purple blobs, emoji
- Pill clusters and stat strips in the hero
- Autoplaying loud audio
- Motion that obscures text readability

---

## Reduced motion

```css
@media (prefers-reduced-motion: reduce) {
  /* Disable parallax, pipeline draw, marquees, page wipes */
  /* Keep opacity fades ≤150ms or cut to instant */
}
```

- Hero: static poster, no parallax  
- Pipeline: final state drawn immediately  
- Marquee: static wrapped row or pause  

---

## Responsive notes

| Concern | Behavior |
|---------|----------|
| Hero video | `object-fit: cover`; poster mandatory; pause offscreen |
| Platform mock | Stack tabs above panel on mobile; simplify metrics |
| Case strip | Horizontal scroll snap on mobile; grid on desktop |
| Disciplines | 1 col mobile → 2 tablet → 4 desktop |
| Nav | Collapse to drawer under ~960px |

---

## Accessibility

- Focus rings use `--ttp-focus` (teal), 2px offset  
- Contrast: body text on ink ≥ WCAG AA  
- Video: no essential info only in video; copy lives in DOM  
- Marquee: `aria-hidden` decorative logos with text alternative list nearby if needed  
