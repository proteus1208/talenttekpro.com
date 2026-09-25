/**
 * Media assets for UI.
 * Marketing-stock aesthetic: clear subject, polished, readable ? not busy CGI.
 */

export type MediaAsset = {
  id: string;
  src: string;
  path: string;
  poster?: string;
  prompt: string;
  alt: string;
};

const BRAND =
  "Brand accents only when needed: deep navy #051937, cyan #00D2FF, royal blue #1E60FF. No purple, no logos, no readable UI text, no watermarks.";

const TEAM =
  "Cast only young white American men ages ~25-32, clean-cut tech professionals. No women, no other ethnicities.";

const MARKETING_PHOTO =
  "Premium SaaS marketing stock photograph style like Stripe/Notion/Linear careers pages: bright modern office, soft natural light, sharp focus on subjects, clean background, clear readable scene, professional color grade. Not cinematic fog, not dark moody drama.";

const MARKETING_ABSTRACT =
  "Premium SaaS marketing illustration style: one clear hero object centered, simple readable metaphor, soft studio lighting on deep navy #051937, subtle cyan #00D2FF and royal #1E60FF accents, polished 3D, plenty of calm empty space. Clean and premium like Stripe/Linear marketing art ? NOT busy particle storms, NOT dense lattices, NOT empty lonely cubes.";

export const media = {
  heroVideo: {
    id: "hero-video",
    src: "https://cdn.coverr.co/videos/coverr-working-on-a-computer-1584/1080p.mp4",
    path: "/media/heroes/hero-poster.jpg",
    poster:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80",
    prompt: `Unused on site. ${BRAND}`,
    alt: "Hero poster placeholder.",
  } satisfies MediaAsset,
  landing: {
    id: "landing",
    src: "/media/heroes/landing.png",
    path: "/media/heroes/landing.png",
    prompt: `Premium SaaS marketing hero photograph, 16:9. Bright modern tech office. A beautiful young woman developer collaborating with two young male developers around one laptop. Soft natural light, clear faces, left third open for headline. No logos, no readable UI text. ${BRAND}`,
    alt: "A woman developer collaborating with teammates at a laptop.",
  } satisfies MediaAsset,
  manifesto: {
    id: "manifesto",
    src: "/media/heroes/manifesto.jpg",
    path: "/media/heroes/manifesto.jpg",
    prompt: `${MARKETING_PHOTO} ${TEAM} Two young white American men reviewing a laptop at a clean whiteboard in a bright office. Clear, simple marketing stock composition. 16:9. ${BRAND}`,
    alt: "Two young white American engineers reviewing a laptop.",
  } satisfies MediaAsset,
  approach: {
    id: "approach",
    src: "/media/heroes/approach.jpg",
    path: "/media/heroes/approach.jpg",
    prompt: `${MARKETING_PHOTO} ${TEAM} Two young white American men smiling and high-fiving in a bright modern office after a win. Clear simple stock photo. 16:9. ${BRAND}`,
    alt: "Two young white American teammates celebrating with a high-five.",
  } satisfies MediaAsset,
  getStarted: {
    id: "get-started",
    src: "/media/heroes/get-started.jpg",
    path: "/media/heroes/get-started.jpg",
    prompt: `${MARKETING_PHOTO} ${TEAM} Two young white American men leaning over a laptop on a meeting table in a bright glass conference room. Clear, hopeful CTA photo. 16:9. ${BRAND}`,
    alt: "Young white American teammates reviewing a laptop in a meeting room.",
  } satisfies MediaAsset,
  servicesHero: {
    id: "services-hero",
    src: "/media/heroes/services-hero.png",
    path: "/media/heroes/services-hero.png",
    prompt: `${MARKETING_ABSTRACT} Meaning: talent plus delivery. A single elegant glass sphere on the left connected by one clean cyan arc to a single royal-blue geometric module on the right ? two clear shapes, one connection. Soft studio light, deep navy background. 16:9. ${BRAND}`,
    alt: "A glass sphere connected by a cyan arc to a royal-blue module.",
  } satisfies MediaAsset,
  processHero: {
    id: "process-hero",
    src: "/media/heroes/process-hero.jpg",
    path: "/media/heroes/process-hero.jpg",
    prompt: `${MARKETING_PHOTO} ${TEAM} Three young white American men in a bright meeting room: two seated with laptops, one standing at a clean whiteboard. Clear marketing stock scene. 16:9. ${BRAND}`,
    alt: "Young white American team in a bright strategy meeting.",
  } satisfies MediaAsset,
  aboutHero: {
    id: "about-hero",
    src: "/media/heroes/about-hero.jpg",
    path: "/media/heroes/about-hero.jpg",
    prompt: `${MARKETING_PHOTO} ${TEAM} Three young white American men in a bright modern boardroom around a table, talking calmly. Clear corporate marketing stock. 16:9. ${BRAND}`,
    alt: "Young white American leaders in a bright boardroom.",
  } satisfies MediaAsset,
  careersHero: {
    id: "careers-hero",
    src: "/media/heroes/careers-hero.jpg",
    path: "/media/heroes/careers-hero.jpg",
    prompt: `${MARKETING_PHOTO} ${TEAM} Three young white American men working together at standing desks in a bright open office. Clear friendly careers marketing photo. 16:9. ${BRAND}`,
    alt: "Young white American engineers working together in a bright office.",
  } satisfies MediaAsset,
  blogHero: {
    id: "blog-hero",
    src: "/media/blog/journal-hero.png",
    path: "/media/blog/journal-hero.png",
    prompt: `${MARKETING_ABSTRACT} Meaning: journal / field notes. One soft luminous frosted page floating above one small cyan node cluster. Very clear, simple, premium. Deep navy background. 16:9. ${BRAND}`,
    alt: "A single luminous page above a small cyan node cluster.",
  } satisfies MediaAsset,
  projectsHero: {
    id: "projects-hero",
    src: "/media/heroes/projects-hero.jpg",
    path: "/media/heroes/projects-hero.jpg",
    prompt: `${MARKETING_ABSTRACT} Meaning: portfolio. Three frosted glass portfolio cards floating in a neat row, soft cyan edge light, one card slightly forward with royal-blue accent. Clear, orderly, premium marketing art. Deep navy background. 16:9. ${BRAND}`,
    alt: "Three frosted glass portfolio cards in a neat floating row.",
  } satisfies MediaAsset,
  contactHero: {
    id: "contact-hero",
    src: "/media/heroes/contact-hero.jpg",
    path: "/media/heroes/contact-hero.jpg",
    prompt: `${MARKETING_PHOTO} Bright modern office reception desk, empty and welcoming, soft daylight, clean architecture, cyan accent on a small desk lamp. No crowds. Clear contact marketing photo. 16:9. ${BRAND}`,
    alt: "Bright welcoming office reception desk.",
  } satisfies MediaAsset,
  cases: [
    {
      id: "case-dating",
      src: "/media/cases/case-dating.png",
      path: "/media/cases/case-dating.png",
      prompt: `${MARKETING_ABSTRACT} Meaning: matching. Two soft glowing orbs connected by one clean cyan bridge to a shared center. Extremely clear, simple, premium. Deep navy. 16:9. ${BRAND}`,
      alt: "Two glowing orbs connected by a cyan bridge.",
    },
    {
      id: "case-healthcare",
      src: "/media/cases/case-healthcare.png",
      path: "/media/cases/case-healthcare.png",
      prompt: `${MARKETING_ABSTRACT} Meaning: healthcare trust. One clear translucent shield shape with a soft cyan rim and calm royal-blue center glow. Simple and readable. Deep navy. 16:9. ${BRAND}`,
      alt: "A clear translucent shield with a soft cyan rim.",
    },
    {
      id: "case-commerce",
      src: "/media/cases/case-commerce.png",
      path: "/media/cases/case-commerce.png",
      prompt: `${MARKETING_ABSTRACT} Meaning: commerce. Three neat frosted product tiles in a clean shelf row, cyan edge light. Simple marketing product metaphor. Deep navy. 16:9. ${BRAND}`,
      alt: "Three neat frosted product tiles in a shelf row.",
    },
    {
      id: "case-booking",
      src: "/media/cases/case-booking.png",
      path: "/media/cases/case-booking.png",
      prompt: `${MARKETING_ABSTRACT} Meaning: booking. A simple isometric glass room with one chair, soft cyan outline, one corner lit royal blue as reserved. Clear and minimal. Deep navy. 16:9. ${BRAND}`,
      alt: "A simple isometric glass room with one reserved corner lit.",
    },
    {
      id: "case-pipeline",
      src: "/media/cases/case-pipeline.png",
      path: "/media/cases/case-pipeline.png",
      prompt: `${MARKETING_ABSTRACT} Meaning: pipeline. One clean curved cyan path with three small sensor dots ending at a royal-blue beacon. Very clear line art 3D. Deep navy. 16:9. ${BRAND}`,
      alt: "A clean cyan path with sensor dots ending at a royal beacon.",
    },
  ] satisfies MediaAsset[],
};

export function caseMedia(index: number): MediaAsset {
  return media.cases[index % media.cases.length];
}

export function mediaFilename(asset: Pick<MediaAsset, "path">): string {
  return asset.path.split("/").pop() ?? asset.path;
}
