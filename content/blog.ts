export const blogPage = {
  metaTitle: "Blog | TalentTekPro field notes & essays",
  metaDescription:
    "Essays and post-mortems from recruiters and engineers who shipped the work.",
  hero: {
    eyebrow: "Journal",
    title: "Field notes from the",
    titleAccent: "engine room.",
    support:
      "Essays and post-mortems from recruiters and engineers who shipped the work — talent, delivery, and the systems between them.",
  },
  categories: [
    "All",
    "Talent",
    "AI & ML",
    "DevOps",
    "Hiring Ops",
    "SaaS",
    "Architecture",
  ] as const,
  posts: [
    {
      slug: "production-rag-routing",
      category: "AI & ML",
      title: "Production RAG with model routing that survives scale",
      excerpt:
        "How we gate model choice, evals, and fallbacks so retrieval stays useful under real traffic.",
      read: "8 min",
      featured: true,
    },
    {
      slug: "scorecards-time-to-productivity",
      category: "Hiring Ops",
      title: "Scorecards that predict time-to-productivity",
      excerpt:
        "Interview signals that correlate with ramp — not just algorithm trivia.",
      read: "6 min",
      featured: false,
    },
    {
      slug: "zero-downtime-deploys",
      category: "DevOps",
      title: "Zero-downtime deploys we actually trust",
      excerpt:
        "Kubernetes + GitHub Actions patterns that survive Friday afternoon releases.",
      read: "7 min",
      featured: false,
    },
    {
      slug: "saas-mvp-to-scale",
      category: "SaaS",
      title: "SaaS MVP to scale: NestJS, Stripe, PostHog",
      excerpt:
        "A pragmatic stack path from first paying customers to multi-tenant reality.",
      read: "9 min",
      featured: false,
    },
    {
      slug: "staff-engineer-interviews",
      category: "Talent",
      title: "Structured interviewing for staff engineers",
      excerpt:
        "Panels, rubrics, and debriefs that keep the senior bar honest.",
      read: "5 min",
      featured: false,
    },
    {
      slug: "adr-first-delivery",
      category: "Architecture",
      title: "ADRs before feature theater",
      excerpt:
        "Why we write architecture decision records in week one of every embed.",
      read: "6 min",
      featured: false,
    },
  ],
  cta: {
    headline: "Want notes like these on",
    headlineAccent: "your roadmap?",
    support: "Talk to us about talent, delivery, or both.",
  },
} as const;
