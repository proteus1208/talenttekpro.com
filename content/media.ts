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
      "Cinematic brand film, 12 seconds, 16:9, for a hybrid tech talent and software delivery company. Dark editorial lighting, charcoal shadows, soft teal practical lights (#2EC4B6), subtle warm ember rim light. Sequence: (1) slow dolly interview between a hiring lead and a senior engineer in a modern Atlanta-style office at dusk, authentic focused expressions, laptop open; (2) match cut to pair programming at dual monitors with shallow depth of field, deploy terminal softly blurred; (3) abstract geometric three-node pipeline animating talent to match to ship in teal, then dissolving into empty deep ink negative space. No text, no logos, no watermarks, no handshake cliché, no purple neon. Photoreal + restrained motion graphics, confident precise human mood, loop-friendly ending on dark frame.",
    alt: "TalentTekPro team in a focused hiring and engineering collaboration session.",
  } satisfies MediaAsset,
  manifesto: {
    id: "manifesto",
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80",
    prompt:
      "Editorial photo, cross-functional workshop in a modern dark-toned office, senior engineers and hiring lead reviewing a laptop and whiteboard, soft teal accent lighting #2EC4B6, charcoal shadows, shallow depth of field, cinematic 16:9, no text, no logos, diverse professionals, confident collaborative mood",
    alt: "Cross-functional workshop reviewing plans on a laptop and whiteboard.",
  } satisfies MediaAsset,
  approach: {
    id: "approach",
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=80",
    prompt:
      "Strategy session, two consultants and a client CTO at a table with notebooks and a tablet showing abstract charts, Atlanta-modern glass office at dusk, teal rim light, documentary editorial style, 3:2, no text overlays",
    alt: "Strategy session with consultants and a client reviewing plans.",
  } satisfies MediaAsset,
  getStarted: {
    id: "get-started",
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80",
    prompt:
      "Enterprise leadership consultation, wide shot, warm and teal practical lights in a dark conference room, people leaning over a shared screen, hopeful decisive mood, 16:9, no logos",
    alt: "Leadership consultation around a shared screen.",
  } satisfies MediaAsset,
  cases: [
    {
      id: "case-dating",
      src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
      prompt:
        "Premium product UI mockup of a real-time dating app on a laptop in a dim studio, edge lighting teal and warm ember, charcoal backdrop #0B1218, shallow depth, 16:9, no readable brand names, photoreal",
      alt: "Dating web app product mockup on a laptop.",
    },
    {
      id: "case-healthcare",
      src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
      prompt:
        "Premium product UI mockup of a healthcare management dashboard on a laptop in a dim studio, edge lighting teal and warm ember, charcoal backdrop #0B1218, shallow depth, 16:9, no readable brand names, photoreal",
      alt: "Healthcare management system dashboard mockup.",
    },
    {
      id: "case-commerce",
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      prompt:
        "Premium product UI mockup of a headless e-commerce storefront on a laptop in a dim studio, edge lighting teal and warm ember, charcoal backdrop #0B1218, shallow depth, 16:9, no readable brand names, photoreal",
      alt: "E-commerce storefront analytics and product UI.",
    },
    {
      id: "case-booking",
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      prompt:
        "Premium product UI mockup of an office booking platform on a laptop in a dim studio, edge lighting teal and warm ember, charcoal backdrop #0B1218, shallow depth, 16:9, no readable brand names, photoreal",
      alt: "Modern office space representing booking platform work.",
    },
    {
      id: "case-pipeline",
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      prompt:
        "Premium product UI mockup of an industrial pipeline inspection data platform on a laptop in a dim studio, edge lighting teal and warm ember, charcoal backdrop #0B1218, shallow depth, 16:9, no readable brand names, photoreal",
      alt: "Data dashboard for pipeline inspection platform.",
    },
  ] satisfies MediaAsset[],
};

export function caseMedia(index: number): MediaAsset {
  return media.cases[index % media.cases.length];
}
