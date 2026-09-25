/**
 * Media assets for UI.
 * Replace `src` with the matching `path` file after ChatGPT generation.
 * Keep `prompt` as the generation source of truth; `path` is where to save.
 */

export type MediaAsset = {
  id: string;
  /** Current placeholder (remote or local) shown faded behind the prompt UI */
  src: string;
  /** Canonical save path under /public (also the final src once ready) */
  path: string;
  poster?: string;
  prompt: string;
  alt: string;
};

const BRAND =
  "Brand palette only: deep navy #051937, cyan #00D2FF, royal blue #1E60FF. No purple, no neon glow stacks, no logos, no readable brand names or UI text, no watermarks.";

export const media = {
  heroVideo: {
    id: "hero-video",
    src: "https://cdn.coverr.co/videos/coverr-working-on-a-computer-1584/1080p.mp4",
    path: "/media/heroes/hero-poster.jpg",
    poster:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80",
    prompt: `Still poster frame, 16:9, for a TalentTekPro hero video. Pure cinematic 3D CGI motion graphics still: deep navy void #051937, luminous geometric core with a cyan #00D2FF wireframe icosahedron nested in a royal-blue #1E60FF glass nucleus, three thin orbital rings, constellation of linked nodes (talent network becoming delivery lattice). Depth fog, volumetric cyan rim light, soft particle dust. Left third darker and emptier for headline overlay; spectacle center-right. Elegant, premium, photoreal metal/glass materials. ${BRAND}`,
    alt: "Abstract 3D talent-to-delivery orbital lattice for TalentTekPro.",
  } satisfies MediaAsset,
  landing: {
    id: "landing",
    src: "/media/heroes/landing.png",
    path: "/media/heroes/landing.png",
    prompt: `Editorial photoreal hero photograph, 16:9 (or taller crop-safe). Small diverse product squad collaborating around a laptop in a bright modern office with soft natural light and subtle cyan #00D2FF practical accents against deeper navy shadow #051937. Confident, senior, calm energy. Subjects mid-conversation, no staged handshake cliche. Space on the left for website headline overlay. Shallow depth of field, premium tech-company look. ${BRAND}`,
    alt: "TalentTekPro teammates collaborating at a laptop in a bright office.",
  } satisfies MediaAsset,
  manifesto: {
    id: "manifesto",
    src: "/media/heroes/manifesto.jpg",
    path: "/media/heroes/manifesto.jpg",
    prompt: `Editorial photograph, 16:9. Cross-functional workshop in a modern office: senior engineers and a hiring lead reviewing a laptop and whiteboard together. Soft cyan #00D2FF accent lighting, deep navy shadows #051937, shallow depth of field, cinematic grading. Confident collaborative mood, diverse professionals, documentary realism. ${BRAND}`,
    alt: "Cross-functional workshop reviewing plans on a laptop and whiteboard.",
  } satisfies MediaAsset,
  approach: {
    id: "approach",
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80",
    path: "/media/heroes/approach.jpg",
    prompt: `Editorial photograph, 3:2. Two professionals sharing a genuine high-five in a bright modern office after a milestone, collaborative energy, soft natural light mixed with subtle cyan #00D2FF accents, navy depth in background #051937. Photoreal, warm but premium, no staged stock smile. ${BRAND}`,
    alt: "Teammates celebrating with a high-five in a bright office.",
  } satisfies MediaAsset,
  getStarted: {
    id: "get-started",
    src: "/media/heroes/get-started.jpg",
    path: "/media/heroes/get-started.jpg",
    prompt: `Editorial photograph, 16:9. Enterprise leadership consultation in a deep navy conference room #051937, cyan #00D2FF and royal #1E60FF practical lights, people leaning over a shared screen, hopeful decisive mood, wide cinematic frame. ${BRAND}`,
    alt: "Leadership consultation around a shared screen.",
  } satisfies MediaAsset,
  servicesHero: {
    id: "services-hero",
    src: "/media/heroes/services-hero.png",
    path: "/media/heroes/services-hero.png",
    prompt: `Premium 3D CGI editorial illustration matching TalentTekPro blog covers: cinematic dark navy #051937 atmosphere, soft volumetric fog, photoreal glass and metal. A luminous translucent cyan crystalline core on a brushed metal pedestal, fed by flowing cyan fiber-optic light streams with bright data sparkles. Concept: talent network merging into delivery systems. No people, no text, no logos. ${BRAND}`,
    alt: "A luminous cyan crystalline core fed by light streams on deep navy.",
  } satisfies MediaAsset,
  processHero: {
    id: "process-hero",
    src: "/media/heroes/process-hero.jpg",
    path: "/media/heroes/process-hero.jpg",
    prompt: `Documentary editorial photograph, 16:9. Client partnership strategy workshop around a wide table, laptops open, facilitator at a whiteboard, natural light mixed with cyan #00D2FF practical accents, navy depth #051937. Serious, calm, senior energy. ${BRAND}`,
    alt: "Strategy workshop with laptops and whiteboard facilitation.",
  } satisfies MediaAsset,
  aboutHero: {
    id: "about-hero",
    src: "/media/heroes/about-hero.jpg",
    path: "/media/heroes/about-hero.jpg",
    prompt: `Editorial photograph, 16:9. Consulting session with enterprise leadership in a dark modern boardroom, teal glass reflection, cyan #00D2FF rim light, deep navy #051937 atmosphere, photoreal, composed and senior. ${BRAND}`,
    alt: "Leadership consulting session in a modern boardroom.",
  } satisfies MediaAsset,
  careersHero: {
    id: "careers-hero",
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80",
    path: "/media/heroes/careers-hero.jpg",
    prompt: `Editorial photograph, 16:9. Engineering team collaborating in a bright-dark hybrid office, candid discussion at desks, teal/cyan ambient light #00D2FF, navy shadows #051937, diverse professionals, authentic workplace energy. ${BRAND}`,
    alt: "Collaborative engineering team working together.",
  } satisfies MediaAsset,
  blogHero: {
    id: "blog-hero",
    src: "/media/blog/journal-hero.png",
    path: "/media/blog/journal-hero.png",
    prompt: `Editorial blog journal hero illustration, 16:9. Deep navy ink background #051937. Abstract field-notes concept: floating luminous pages and geometric research nodes connected by cyan #00D2FF filaments with royal blue #1E60FF accents, suggesting talent and delivery knowledge. Premium flat/editorial hybrid CGI. No people. ${BRAND}`,
    alt: "Abstract journal field-notes illustration in navy, cyan, and royal blue.",
  } satisfies MediaAsset,
  projectsHero: {
    id: "projects-hero",
    src: "/media/heroes/projects-hero.jpg",
    path: "/media/heroes/projects-hero.jpg",
    prompt: `Premium 3D CGI editorial illustration matching TalentTekPro blog covers: cinematic dark navy #051937 atmosphere, soft fog, photoreal glass and metal. A luminous translucent cyan crystalline structure on a brushed metal pedestal with flowing cyan light filaments and data sparkles. Concept: portfolio of shipped systems. No people, no text, no logos. ${BRAND}`,
    alt: "A luminous cyan crystalline portfolio core with light streams on deep navy.",
  } satisfies MediaAsset,
  contactHero: {
    id: "contact-hero",
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
    path: "/media/heroes/contact-hero.jpg",
    prompt: `Editorial photograph, 16:9. Calm reception desk in a modern tech office at night, soft cyan #00D2FF glow, welcoming empty space, deep navy #051937 atmosphere, quiet and premium. ${BRAND}`,
    alt: "Modern office reception area at night.",
  } satisfies MediaAsset,
  cases: [
    {
      id: "case-dating",
      src: "/media/cases/case-dating.png",
      path: "/media/cases/case-dating.png",
      prompt: `Premium 3D CGI editorial illustration matching TalentTekPro blog covers: dark navy #051937, soft fog, photoreal glass/metal pedestal. Luminous translucent cyan crystalline twin-core with flowing cyan light streams and sparkles. Matching/connections theme. No people, no text, no logos. ${BRAND}`,
      alt: "Twin luminous cyan crystalline cores linked by light streams on deep navy.",
    },
    {
      id: "case-healthcare",
      src: "/media/cases/case-healthcare.png",
      path: "/media/cases/case-healthcare.png",
      prompt: `Premium 3D CGI editorial illustration matching TalentTekPro blog covers: dark navy #051937, soft fog, photoreal glass/metal pedestal. Luminous translucent cyan crystalline shield-core with calm cyan light streams and sparkles. Healthcare ops theme. No people, no text, no logos. ${BRAND}`,
      alt: "A luminous cyan crystalline shield-core with light streams on deep navy.",
    },
    {
      id: "case-commerce",
      src: "/media/cases/case-commerce.png",
      path: "/media/cases/case-commerce.png",
      prompt: `Premium 3D CGI editorial illustration matching TalentTekPro blog covers: dark navy #051937, soft fog, photoreal glass/metal pedestal. Luminous translucent cyan modular glass cube with cyan light streams and sparkles. Commerce theme. No people, no text, no logos. ${BRAND}`,
      alt: "A luminous cyan modular crystalline cube with light streams on deep navy.",
    },
    {
      id: "case-booking",
      src: "/media/cases/case-booking.png",
      path: "/media/cases/case-booking.png",
      prompt: `Premium 3D CGI editorial illustration matching TalentTekPro blog covers: dark navy #051937, soft fog, photoreal glass/metal pedestal. Luminous translucent cyan isometric floorplan crystal with cyan light streams and sparkles. Booking theme. No people, no text, no logos. ${BRAND}`,
      alt: "A luminous cyan floorplan crystal with light streams on deep navy.",
    },
    {
      id: "case-pipeline",
      src: "/media/cases/case-pipeline.png",
      path: "/media/cases/case-pipeline.png",
      prompt: `Premium 3D CGI editorial illustration matching TalentTekPro blog covers: dark navy #051937, soft fog, photoreal glass/metal pedestal. Luminous translucent cyan route-arc core with cyan sensor light streams and sparkles. Pipeline inspection theme. No people, no text, no logos. ${BRAND}`,
      alt: "A luminous cyan route-arc core with sensor light streams on deep navy.",
    },
  ] satisfies MediaAsset[],
};

export function caseMedia(index: number): MediaAsset {
  return media.cases[index % media.cases.length];
}

/** Filename segment for UI labels (e.g. case-dating.png). */
export function mediaFilename(asset: Pick<MediaAsset, "path">): string {
  return asset.path.split("/").pop() ?? asset.path;
}
