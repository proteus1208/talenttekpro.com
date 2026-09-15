/**
 * Media assets for UI.
 * Replace `src` / `poster` with /media/... files when generated.
 * Keep `prompt` as the shoot / generation source of truth.
 */

export type MediaAsset = {
  id: string;
  src: string;
  poster?: string;
  prompt: string;
  alt: string;
};

export const media = {
  heroVideo: {
    id: "hero-video",
    src: "https://cdn.coverr.co/videos/coverr-working-on-a-computer-1584/1080p.mp4",
    poster:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80",
    prompt:
      "Exactly 10 seconds, 16:9 seamless loop, pure cinematic 3D CGI motion graphics, no people, no offices, no text, no logos, no UI chrome. Deep navy void #051937. Camera slowly orbits a luminous geometric core: wireframe cyan #00D2FF icosahedron nested inside a denser royal-blue #1E60FF glass nucleus, surrounded by three thin orbital rings at different axes and a constellation of 40+ small nodes linked by faint cyan filaments (talent network morphing into delivery lattice). Depth fog, volumetric cyan rim light, subtle royal accents, soft particle dust drifting through depth. Left third of frame slightly darker and emptier for website headline overlay; main spectacle sits center-right. Macro to medium pull-back, elegant not chaotic, no purple neon, no sci-fi HUD text, photoreal materials with metal/glass sheen, 24fps, muted-friendly loop.",
    alt: "Abstract 3D talent-to-delivery orbital lattice for TalentTekPro.",
  } satisfies MediaAsset,
  manifesto: {
    id: "manifesto",
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80",
    prompt:
      "Editorial photo, cross-functional workshop in a modern dark-toned office, senior engineers and hiring lead reviewing a laptop and whiteboard, soft cyan accent lighting #00D2FF, deep navy shadows #051937, shallow depth of field, cinematic 16:9, no text, no logos, diverse professionals, confident collaborative mood",
    alt: "Cross-functional workshop reviewing plans on a laptop and whiteboard.",
  } satisfies MediaAsset,
  approach: {
    id: "approach",
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=80",
    prompt:
      "Strategy session, two consultants and a client CTO at a table with notebooks and a tablet showing abstract charts, Atlanta-modern glass office at dusk, cyan #00D2FF rim light on navy #051937 interiors, documentary editorial style, 3:2, no text overlays",
    alt: "Strategy session with consultants and a client reviewing plans.",
  } satisfies MediaAsset,
  getStarted: {
    id: "get-started",
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80",
    prompt:
      "Enterprise leadership consultation, wide shot, cyan #00D2FF and royal #1E60FF practical lights in a deep navy conference room #051937, people leaning over a shared screen, hopeful decisive mood, 16:9, no logos",
    alt: "Leadership consultation around a shared screen.",
  } satisfies MediaAsset,
  servicesHero: {
    id: "services-hero",
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
    prompt:
      "Modern technology workspace, wide desk with dual monitors showing code and a hiring pipeline board, deep slate room, cyan monitor glow, photoreal 16:9",
    alt: "Technology workspace with dual monitors in a dark modern office.",
  } satisfies MediaAsset,
  processHero: {
    id: "process-hero",
    src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80",
    prompt:
      "Client partnership and strategy workshop, wide table, laptops open, facilitator at whiteboard, natural light mixed with cyan practical, 16:9 documentary",
    alt: "Strategy workshop with laptops and whiteboard facilitation.",
  } satisfies MediaAsset,
  aboutHero: {
    id: "about-hero",
    src: "https://images.unsplash.com/photo-1600880292089-90a7e886a1be?auto=format&fit=crop&w=1600&q=80",
    prompt:
      "Consulting session with enterprise leadership, dark modern boardroom, teal glass reflection, photoreal 16:9",
    alt: "Leadership consulting session in a modern boardroom.",
  } satisfies MediaAsset,
  careersHero: {
    id: "careers-hero",
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80",
    prompt:
      "Engineering team at work in a bright-dark hybrid office, candid discussion, teal ambient light, 16:9",
    alt: "Collaborative engineering team working together.",
  } satisfies MediaAsset,
  contactHero: {
    id: "contact-hero",
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
    prompt:
      "Calm reception desk in a modern tech office at night, soft cyan glow, welcoming empty space, 16:9",
    alt: "Modern office reception area at night.",
  } satisfies MediaAsset,
  cases: [
    {
      id: "case-dating",
      src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
      prompt:
        "Premium product UI mockup of a real-time dating app on a laptop in a dim studio, edge lighting cyan #00D2FF and royal #1E60FF, navy backdrop #051937, shallow depth, 16:9, no readable brand names, photoreal",
      alt: "Dating web app product mockup on a laptop.",
    },
    {
      id: "case-healthcare",
      src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
      prompt:
        "Premium product UI mockup of a healthcare management dashboard on a laptop in a dim studio, edge lighting cyan #00D2FF and royal #1E60FF, navy backdrop #051937, shallow depth, 16:9, no readable brand names, photoreal",
      alt: "Healthcare management system dashboard mockup.",
    },
    {
      id: "case-commerce",
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      prompt:
        "Premium product UI mockup of a headless e-commerce storefront on a laptop in a dim studio, edge lighting cyan #00D2FF and royal #1E60FF, navy backdrop #051937, shallow depth, 16:9, no readable brand names, photoreal",
      alt: "E-commerce storefront analytics and product UI.",
    },
    {
      id: "case-booking",
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      prompt:
        "Premium product UI mockup of an office booking platform on a laptop in a dim studio, edge lighting cyan #00D2FF and royal #1E60FF, navy backdrop #051937, shallow depth, 16:9, no readable brand names, photoreal",
      alt: "Modern office space representing booking platform work.",
    },
    {
      id: "case-pipeline",
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      prompt:
        "Premium product UI mockup of an industrial pipeline inspection data platform on a laptop in a dim studio, edge lighting cyan #00D2FF and royal #1E60FF, navy backdrop #051937, shallow depth, 16:9, no readable brand names, photoreal",
      alt: "Data dashboard for pipeline inspection platform.",
    },
  ] satisfies MediaAsset[],
};

export function caseMedia(index: number): MediaAsset {
  return media.cases[index % media.cases.length];
}
