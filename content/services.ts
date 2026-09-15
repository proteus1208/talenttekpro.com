export const engagementModels = [
  {
    id: "project",
    name: "Project-Based",
    aim: "Fixed scope delivery",
    price: "From $75k",
  },
  {
    id: "squad",
    name: "Embedded Squad",
    aim: "Senior team in your org",
    price: "From $45k/mo",
  },
  {
    id: "retainer",
    name: "Retainer",
    aim: "Advisory + capacity on demand",
    price: "From $15k/mo",
  },
  {
    id: "search",
    name: "Talent Search",
    aim: "Retained / contingency search",
    price: "Custom",
  },
  {
    id: "managed",
    name: "Managed Services",
    aim: "Platform ops",
    price: "Custom",
  },
] as const;

export const servicesPage = {
  metaTitle: "Services | TalentTekPro",
  metaDescription:
    "Eight disciplines under one accountable partner — talent acquisition, embedded squads, AI, cloud, and engineering.",
  hero: {
    eyebrow: "Capabilities / 08 Disciplines",
    title: "Eight disciplines. One accountable partner.",
    support:
      "Senior recruiters and engineers under one roof — coherent hiring, faster decisions, teams that stay through launch.",
  },
  integrated: {
    headline: "Eight disciplines, one accountable team.",
    body: "Talent, embedded squads, AI, cloud, and engineering — so architecture and workforce plans don’t diverge.",
  },
  disciplines: [
    {
      id: "talent",
      num: "01",
      title: "Tech Talent Acquisition",
      aim: "Pipeline, sourcing, diversity tech hiring",
      bullets: [
        "Role intake",
        "Sourced shortlists",
        "Diversity pipelines",
        "Executive tech search",
      ],
    },
    {
      id: "squads",
      num: "02",
      title: "Embedded Squads",
      aim: "Team inside client org",
      bullets: [
        "Product squads",
        "Platform pods",
        "3–12 month embeds",
        "Knowledge transfer",
      ],
    },
    {
      id: "contract",
      num: "03",
      title: "Contract & Contract-to-Hire",
      aim: "Flexible capacity",
      bullets: [
        "Contract eng",
        "C2H paths",
        "Ramp plans",
        "Replacement guarantees",
      ],
    },
    {
      id: "ai",
      num: "04",
      title: "Applied AI for Hiring & Products",
      aim: "AI on both sides",
      bullets: ["Match scoring", "RAG copilots", "Agent workflows", "Eval gates"],
    },
    {
      id: "engineering",
      num: "05",
      title: "Digital Engineering",
      aim: "Shipped interfaces & APIs",
      bullets: ["Web & mobile", "Design systems", "API platforms", "Performance"],
    },
    {
      id: "cloud",
      num: "06",
      title: "Cloud & Platform",
      aim: "Scale foundations",
      bullets: ["Migration", "Kubernetes", "Serverless", "FinOps"],
    },
    {
      id: "consulting",
      num: "07",
      title: "Consulting & Workforce Strategy",
      aim: "Advice that binds talent + tech",
      bullets: ["Roadmaps", "GCC / hub setup", "Diligence", "Vendor selection"],
    },
    {
      id: "managed",
      num: "08",
      title: "Managed Delivery / SRE",
      aim: "Keep it running",
      bullets: ["24/7 monitoring", "Incidents", "Capacity", "Cost optimization"],
    },
  ],
  models: engagementModels,
  cta: {
    headline: "Let’s scope your next hire — or your next release.",
    support: "Tell us what you need: talent, delivery, or both.",
  },
} as const;
