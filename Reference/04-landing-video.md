# Landing Page Hero Video

Full-bleed background (or background plane) for `/` hero. Site UI supplies all copy — **no titles, logos, or captions burned into the video**.

---

## Concept

**Split narrative in 12–15 seconds:** human talent energy → production delivery energy → quiet logo-safe negative space.

1. **Talent** — interview / scorecard / focused candidate conversation  
2. **Match cut** — hands on keyboard / pair programming / deploy terminal  
3. **Resolve** — abstract pipeline nodes (talent → match → ship) dissolving into dark field for HTML wordmark overlay  

**Mood:** Confident, precise, human. Editorial — not stock handshake, not purple AI sci-fi.

**Audio:** Optional low ambient bed (room tone + soft synth pulse). **No VO.** Mute-autoplay friendly; assume many users start muted.

---

## Specs

| Spec | Value |
|------|-------|
| Duration | 12–15s loop-friendly (seamless or soft fade ends) |
| Aspect | 16:9 master; protect center for 9:16 / 1:1 crops |
| Resolution | 4K preferred (3840×2160); deliver 1080p web encode |
| Framerate | 24 or 30 fps |
| Grade | Charcoal ink shadows, cyan `#00D2FF` practicals, royal `#1E60FF` rim sparingly |
| Text in frame | None |
| Loop | Last 8 frames can hold dark negative space for seamless loop under UI |

---

## Shot list

| Time | Shot | Notes |
|------|------|-------|
| 0.0–3.0s | Slow dolly on interview: two people, laptop side angle, teal desk lamp | Faces readable but not “stock smile”; senior energy |
| 3.0–3.4s | Match cut on eye-line or laptop lid | Hard cut or 4-frame dissolve |
| 3.4–7.5s | Pair programming / dual monitors; deploy log soft-focus | Hands + screens; code unreadable |
| 7.5–10.5s | Macro: abstract UI nodes drawing a 3-node path | Teal center node; matches site pipeline motif |
| 10.5–15s | Pull back to empty dark field with faint node glow dying out | Reserved for TalentTekPro wordmark + headline in HTML |

---

## Master generation / board prompt

Use for Runway, Luma, Kling, or as a live-action board:

```text
Cinematic brand film, 12 seconds, 16:9, for a hybrid tech talent and software delivery company. Dark editorial lighting, charcoal shadows, soft cyan practical lights (#00D2FF), subtle royal blue rim light. Sequence: (1) slow dolly interview between a hiring lead and a senior engineer in a modern Atlanta-style office at dusk, authentic focused expressions, laptop open; (2) match cut to pair programming at dual monitors with shallow depth of field, deploy terminal softly blurred; (3) abstract geometric three-node pipeline animating talent to match to ship in cyan, then dissolving into empty deep ink negative space. No text, no logos, no watermarks, no handshake cliché, no purple neon, no sci-fi HUD clutter. Photoreal + restrained motion graphics, confident precise human mood, loop-friendly ending on dark frame.
```

### Shorter AI video prompt (single take style)

```text
Photoreal cinematic 16:9 clip, dark modern office, teal accent lighting, slow camera dolly from a tech interview scene into a software pair-programming desk, then fade to abstract teal pipeline nodes on charcoal background ending in empty dark space, no text no logos, elegant corporate technology brand film, 12 seconds
```

---

## Live-action brief (if shooting)

- **Locations:** Modern office + one remote-home desk insert (optional).  
- **Cast:** Diverse senior professionals; avoid “too young startup” cliché.  
- **Wardrobe:** Neutral layers, no visible competitor logos.  
- **Props:** Laptops, notebooks, simple scorecard paper (text not readable on camera).  
- **Lighting:** Key soft; teal practical in frame; keep skin tones natural.  
- **Deliverables:** Clean plate dark ending · separate node motion-graphics pass · stereo ambient bed stem.

---

## Poster still (required)

Used as `poster` attribute, LCP image, and reduced-motion fallback.

**Prompt:**
```text
Still frame from a cinematic brand film, modern dark office interview at a laptop, senior professionals mid-conversation, soft teal practical light, charcoal shadows, shallow depth of field, 16:9 photoreal, no text no logos, hopeful focused mood, suitable as website hero poster
```

**Alt text (site):** “TalentTekPro team in a focused hiring and engineering collaboration session.”

---

## Crops & safe areas

```text
┌────────────────────────────────────────────┐
│         16:9 master                        │
│    ┌──────────────────────────┐            │
│    │  center safe (UI type)   │            │
│    │  keep faces/nodes here   │            │
│    └──────────────────────────┘            │
│  edges may be cropped on mobile            │
└────────────────────────────────────────────┘
```

- **9:16 stories / mobile full-bleed:** keep subject in vertical center third.  
- **Desktop:** left 40% may hold HTML text stack — keep that region less busy after t=10s (prefer dark field).  
- Do not place critical action in the top 80px (nav) or bottom 100px (CTA on mobile).

---

## Web encode notes

| File | Use |
|------|-----|
| `hero.mp4` (H.264) | Primary |
| `hero.webm` (VP9/AV1) | Optional savings |
| `hero-poster.jpg` or `.webp` | Poster / reduced motion |
| Duration trim | Exact loop points documented in filename or sidecar JSON |

**Playback:** `autoplay` `muted` `loop` `playsinline`; pause when hero leaves viewport; respect `prefers-reduced-motion` (show poster only).

---

## Acceptance

- [ ] Reads as talent → delivery → brand space without on-screen copy  
- [ ] Grade matches site tokens (ink / teal / ember)  
- [ ] Poster works alone as a beautiful hero  
- [ ] Mobile crop doesn’t clip faces  
- [ ] File weight tuned for web (target early draft &lt; 8–12 MB at 1080p, optimize further for prod)  
