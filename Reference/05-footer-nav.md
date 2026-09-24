# Navigation & Footer

Information architecture mirrored from the GeniusXLab-style agency footer the scenario is based on, rebranded for TalentTekPro.

---

## Announcer bar (optional)

Single line above primary nav:

| Left / center | Right |
|---------------|-------|
| Talent that ships. Technology that scales. | `contact@talenttekpro.com` · `Start a project →` |

Dismissible on mobile if it steals height from the hero.

---

## Primary navigation

| Label | Route | Notes |
|-------|-------|-------|
| Logo / TalentTekPro | `/` | Mark + wordmark |
| Services | `/services` | |
| Case Studies | `/projects` | Label “Case Studies”; URL may be `/projects` or `/case-studies` (pick one; redirect the other) |
| Approach | `/process` | “Our Approach” in footer |
| About | `/about` | |
| Blog | `/blog` | |
| Careers | `/careers` | |
| Get a Quote | `/contact` | Emphasized CTA (ember) |

**Active state:** teal text or teal underline.  
**Mobile:** hamburger drawer with same links + CTA button full width.

---

## Route map

| Route | Page |
|-------|------|
| `/` | Home |
| `/services` | Services |
| `/projects` | Case Studies index |
| `/projects/[slug]` | Case study detail (future) |
| `/process` | Our Approach |
| `/about` | About |
| `/blog` | Blog index |
| `/blog/[slug]` | Article (future) |
| `/careers` | Careers |
| `/careers/[slug]` | Role detail (future) |
| `/pricing` | Pricing |
| `/faq` | FAQ |
| `/contact` | Contact / Get a Quote |
| `/privacy` | Privacy |
| `/terms` | Terms |
| `/cookies` | Cookies |

---

## Footer structure

Three link columns + brand blurb + legal row. Background `--ttp-ink` / `--ttp-slate`; borders `--ttp-border`.

### Brand block

```
[Mark] TalentTekPro
Tech Talent & Delivery

contact@talenttekpro.com
```

Short line under name: Integrated talent acquisition and digital delivery.

### Column: Company

| Label | Route |
|-------|-------|
| About | `/about` |
| Services | `/services` |
| Case Studies | `/projects` |
| Our Approach | `/process` |
| Careers | `/careers` |

### Column: Resources

| Label | Route |
|-------|-------|
| Blog | `/blog` |
| Pricing | `/pricing` |
| FAQ | `/faq` |
| Contact | `/contact` |

### Column: Legal

| Label | Route |
|-------|-------|
| Privacy | `/privacy` |
| Terms | `/terms` |
| Cookies | `/cookies` |

Also list `contact@talenttekpro.com` as a mailto link under Legal or under brand block (GeniusXLab places email near Legal: either is fine; prefer brand block + Legal links without duplicating three times).

### Bottom bar

```
© 2026 TalentTekPro LLC All rights reserved.

Privacy    Terms    Cookies
```

Repeat Privacy / Terms / Cookies as text links for quick access (same targets as Legal column).

Optional: scroll percent indicator (`scroll 0%`) as micro interaction: non-essential.

---

## Footer wireframe

```text
┌─────────────────────────────────────────────────────────────┐
│  TalentTekPro                    Company     Resources  Legal│
│  Tech Talent & Delivery          About       Blog       Privacy
│  contact@…                       Services    Pricing    Terms
│                                  Case Studies FAQ       Cookies
│                                  Our Approach Contact
│                                  Careers
├─────────────────────────────────────────────────────────────┤
│  © 2026 TalentTekPro LLC …          Privacy  Terms  Cookies │
└─────────────────────────────────────────────────────────────┘
```

Mobile: brand block first, then accordion or stacked columns, then copyright row.

---

## CTA consistency

| Placement | Action |
|-----------|--------|
| Announcer | Start a project → → `/contact` |
| Nav | Get a Quote → `/contact` |
| Footer email | mailto:`contact@talenttekpro.com` |
| Home / services closers | Start a project / Request a Proposal → `/contact` |

---

## SEO / titles (quick reference)

| Route | Title pattern |
|-------|----------------|
| `/` | TalentTekPro \| Tech Talent & Delivery |
| `/services` | Services \| TalentTekPro |
| `/projects` | Projects \| TalentTekPro portfolio |
| `/process` | Approach \| How We Work \| TalentTekPro |
| `/about` | About \| TalentTekPro |
| `/blog` | Blog \| TalentTekPro field notes |
| `/careers` | Careers \| Join TalentTekPro |
| `/pricing` | Pricing \| TalentTekPro |
| `/faq` | FAQ \| TalentTekPro |
| `/contact` | Contact \| TalentTekPro |

---

## Acceptance

- [ ] Every GeniusXLab-style footer label has a TalentTekPro route  
- [ ] Case Studies nav label points at projects index  
- [ ] Our Approach points at `/process`  
- [ ] Legal trio exists as pages and footer links  
- [ ] Email is `contact@talenttekpro.com` everywhere in chrome  
