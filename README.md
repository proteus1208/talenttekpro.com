# TalentTekPro

Hybrid **tech talent + embedded delivery** marketing site.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

| Path | Role |
|------|------|
| `Reference/` | Design / content scenario (source of truth for brand & pages) |
| `content/` | Typed site + home + media (URLs + generation prompts) |
| `components/` | Layout, home sections, effects, UI primitives |
| `app/` | Next.js App Router: full landing + stub routes |

## Media

All landing visuals are defined in [`content/media.ts`](content/media.ts) with:

- `src`: URL used in the UI now (Unsplash / Coverr placeholders)
- `prompt`: shoot / generation brief
- `alt`: accessibility text

Replace `src` with `/media/...` files under `public/media/` when assets are ready.

## Scripts

- `npm run dev`: development
- `npm run build`: production build
- `npm run start`: serve production build
