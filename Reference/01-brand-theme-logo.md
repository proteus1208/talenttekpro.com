# Brand, Theme & Logo

## Positioning

**TalentTekPro** builds high-performing tech teams *and* ships production systems. Clients engage us to:

- Source and match senior technical talent (AI-assisted pipelines)
- Embed cross-functional squads inside their org
- Deliver cloud, AI, product, and platform work end to end

**Tagline:** Talent that ships. Technology that scales.

**Short descriptor (nav/footer):** Tech Talent & Delivery

**Long descriptor:** Integrated talent acquisition, embedded engineering, and digital delivery — so you scale people and product on one accountable partner.

---

## Voice & tone

| Do | Don't |
|----|--------|
| Concrete outcomes (time-to-hire, uptime, shipped increments) | Vague “synergy” / “disrupt” filler |
| Senior, calm confidence | Hype, emoji, startup slang overload |
| Hybrid clarity — talent *and* delivery in the same breath | Pretend we are only a staffing firm or only an agency |
| Honest scope (“what we don’t know yet”) | Inflated Fortune logos as decoration without relationship |

**Sample microcopy**

- CTA primary: `Start a project →`
- CTA secondary: `Explore case studies`
- Quote CTA: `Get a Quote`
- Email: `contact@talenttekpro.com`

---

## Visual direction

**Concept:** “Talent pipeline meets production console.”

Deep ink backgrounds, signal teal for match/talent moments, warm ember for CTAs. Real workplaces and pairing — not purple gradients, cream+terracotta serif kitsch, or broadsheet newspaper layouts.

### Imagery mood

- Interview rooms with soft teal practical light
- Pair-programming / war-room laptops
- Live dashboards (hiring funnel + deploy velocity)
- Diverse senior professionals; no stock handshake clichés
- Atmospheric depth; avoid abstract neon blobs as the main visual idea

---

## Color tokens

```css
:root {
  /* Backgrounds */
  --ttp-ink: #0B1218;
  --ttp-slate: #15202B;
  --ttp-wash: radial-gradient(ellipse 80% 60% at 70% 20%, rgba(46, 196, 182, 0.12), transparent 55%),
              radial-gradient(ellipse 60% 50% at 10% 80%, rgba(224, 122, 61, 0.06), transparent 50%),
              var(--ttp-ink);

  /* Surfaces (interactive panels only — default is no cards) */
  --ttp-surface: #1A2633;
  --ttp-surface-raised: #243447;
  --ttp-border: rgba(242, 245, 247, 0.08);

  /* Text */
  --ttp-text: #F2F5F7;
  --ttp-text-muted: #A8B5C2;
  --ttp-text-faint: #6B7A8A;

  /* Accents */
  --ttp-teal: #2EC4B6;      /* talent / match / success */
  --ttp-teal-dim: #1A8F85;
  --ttp-ember: #E07A3D;     /* CTA / urgency */
  --ttp-ember-hover: #F08A4D;

  /* Semantic */
  --ttp-focus: #2EC4B6;
  --ttp-danger: #E25C5C;
}
```

### Usage rules

| Token | Use |
|-------|-----|
| `--ttp-ink` / wash | Page background |
| `--ttp-teal` | Links, match scores, active nav, pipeline nodes |
| `--ttp-ember` | Primary buttons, key CTAs only |
| `--ttp-surface` | Command-center mock UIs, form fields — not decorative cards |
| Muted text | Supporting sentences, section indexes (`001 / …`) |

---

## Typography

| Role | Font | Fallback | Notes |
|------|------|----------|-------|
| Display / H1–H2 | **Sora** | `system-ui` | Expressive; brand and section headlines |
| Body / UI | **IBM Plex Sans** | `system-ui` | Readable at 16–18px |
| Mono / indexes | **IBM Plex Mono** | `ui-monospace` | Section labels `001 / TalentTekPro`, metrics |

**Avoid:** Inter, Roboto, Arial, generic system-only stacks as the designed look.

### Scale (desktop)

| Step | Size | Weight | Line |
|------|------|--------|------|
| Display | clamp(2.75rem, 6vw, 4.5rem) | 600 | 1.05 |
| H2 | clamp(1.75rem, 3vw, 2.5rem) | 600 | 1.15 |
| H3 | 1.25–1.5rem | 550 | 1.25 |
| Body | 1.0625rem | 400 | 1.6 |
| Small / index | 0.75–0.8125rem | 500 | 1.4 · tracked slightly |

---

## Logo system

### Concept

- **Wordmark:** `TalentTekPro` (no space). Capital T, T, P; “Tek” is the technical hinge.
- **Mark (optional):** Interlocking **T** with a three-node pipeline (talent → match → ship). Nodes connected by a short path; teal on the center (match) node.
- **Accent:** Teal on “Tek” *or* on the match node — pick one system and stay consistent. Preferred: teal match-node in the mark; wordmark stays solid white/ink.

### Lockups

| Variant | Use |
|---------|-----|
| Horizontal mark + wordmark | Desktop nav, footer |
| Wordmark only | Tight headers |
| Mark only | Favicon, app icon, loader |
| Stacked mark above wordmark | Mobile splash, OG default |

### Color variants

| On | Treatment |
|----|-----------|
| Dark hero / ink | Wordmark `#F2F5F7`, mark nodes teal center |
| Light surfaces (rare) | Wordmark `#0B1218`, same teal node |
| Mono | Single color; no drop shadow / glow |

### Clear space & sizing

- Clear space ≥ height of the capital **T** on all sides
- Nav wordmark ~28–32px tall; mark ~24–28px
- Favicon: mark only, 32 / 180 / 512 PNG + SVG

### Don’t

- Outline glow, gradients inside letterforms, or purple neon
- Stretch, add tagline into the logo file (tagline is separate UI)
- Place logo over busy video without scrim

---

## Logo generation prompts

### Mark (primary)

```text
Minimal logo mark for "TalentTekPro", interlocking capital T with a three-node pipeline glyph (talent to match to ship), geometric, flat vector, single-weight strokes, charcoal ink #0B1218 background, off-white strokes #F2F5F7, one teal #2EC4B6 accent on the center match node, no gradients, no glow, no 3D, no text in the mark, square composition, high clarity at 32px favicon size, professional tech staffing and engineering brand
```

### Wordmark

```text
Clean wordmark logo "TalentTekPro" in a modern geometric sans similar to Sora, semi-bold, tight letter-spacing, solid off-white #F2F5F7 on deep charcoal #0B1218, optional subtle teal #2EC4B6 underline only under "Tek", flat vector, no shadows, no 3D, no icons, horizontal lockup, enterprise technology brand
```

### App icon / OG

```text
App icon: TalentTekPro pipeline-T mark centered on rounded-square deep slate #15202B, teal center node #2EC4B6, off-white strokes, generous padding, flat vector, no photo, no text, iOS-style simple icon
```

---

## Scenario fixtures (replace before launch)

| Metric | Fixture |
|--------|---------|
| Projects / placements delivered | 50+ |
| Clients served | 40+ |
| Team members | 12+ |
| Global offices / hubs | 2 |
| Countries served | 10+ |
| Years experience | 5+ (Est. framing 2021+) |
| Client satisfaction | 98% |

Partner / logo marquee: use generic industry labels or licensed marks only — do not invent Fortune trademarks as endorsements.
