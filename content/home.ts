/**
 * Landing page copy & fixtures — replace metrics/clients before production launch.
 */

export const home = {
  hero: {
    index: "001 / TalentTekPro / Est. 2021",
    brand: "TalentTekPro",
    headline: "Build the team. Ship the system.",
    support:
      "AI-assisted tech talent and embedded engineering squads — one partner from shortlist to production.",
  },
  manifesto: {
    index: "002 / Manifesto",
    headline: "TalentTekPro charts how enterprises hire and build.",
    body: "Consulting-led talent strategy, AI-powered matching, squads that stay through launch. We measure every engagement by time-to-productivity and systems that hold in production.",
  },
  impact: {
    index: "003 / Impact",
    eyebrow: "By the numbers",
    headline: "Built for measurable impact.",
    metrics: [
      { label: "client satisfaction", value: 98, suffix: "%", detail: "across 50+ delivered projects" },
      { label: "projects & placements", value: 50, suffix: "+", detail: "since founding" },
      { label: "countries served", value: 10, suffix: "+", detail: "distributed senior team" },
      { label: "uptime managed", value: 99.9, suffix: "%", detail: "production-grade reliability" },
      { label: "clients served", value: 40, suffix: "+", detail: "startups to enterprise" },
      { label: "years experience", value: 5, suffix: "+", detail: "talent + delivery practice" },
    ],
  },
  platform: {
    index: "004 / Platform",
    eyebrow: "Platform / TalentTekPro",
    headline: "Real-time talent & delivery",
    support:
      "The same command surface our recruiters and delivery leads use — funnel health, match routing, sprint velocity.",
    tabs: [
      {
        id: "talent-os",
        label: "Talent OS",
        title: "Hiring operations",
        description: "Monitor open reqs, shortlist velocity and pipeline health across every search.",
        stats: [
          { label: "open reqs", value: "18" },
          { label: "avg shortlist", value: "9d" },
          { label: "fill rate", value: "94%" },
        ],
      },
      {
        id: "ai-match",
        label: "AI Match",
        title: "Multi-signal routing",
        description:
          "Skills, timezone, seniority and culture signals behind one match layer your team controls.",
        stats: [
          { label: "match score", value: "94" },
          { label: "signals", value: "12" },
          { label: "eval gate", value: "pass" },
        ],
      },
      {
        id: "ship",
        label: "Ship Velocity",
        title: "Delivery velocity",
        description: "Sprint progress, burn rate and risk register — demoable increments every two weeks.",
        stats: [
          { label: "velocity", value: "+24%" },
          { label: "deploys", value: "12" },
          { label: "p99", value: "48ms" },
        ],
      },
    ],
  },
  cases: {
    index: "005 / Case Studies",
    headline: "Work that hired and shipped.",
  },
  solutions: {
    index: "006 / Solutions",
    headline: "Tailored talent and technology for real-world scale.",
    support:
      "We design hiring pipelines and production systems that cut risk and raise velocity.",
    disciplines: [
      {
        num: "01",
        title: "Tech Talent Acquisition",
        href: "/services#talent",
        bullets: ["Role intake", "Sourced shortlists", "Diversity pipelines", "Executive tech search"],
      },
      {
        num: "02",
        title: "Embedded Squads",
        href: "/services#squads",
        bullets: ["Product squads", "Platform pods", "3–12 month embeds", "Knowledge transfer"],
      },
      {
        num: "03",
        title: "Contract & Contract-to-Hire",
        href: "/services#contract",
        bullets: ["Contract eng", "C2H paths", "Ramp plans", "Replacement paths"],
      },
      {
        num: "04",
        title: "Applied AI for Hiring & Products",
        href: "/services#ai",
        bullets: ["Match scoring", "RAG copilots", "Agent workflows", "Eval gates"],
      },
      {
        num: "05",
        title: "Digital Engineering",
        href: "/services#engineering",
        bullets: ["Web & mobile", "Design systems", "API platforms", "Performance"],
      },
      {
        num: "06",
        title: "Cloud & Platform",
        href: "/services#cloud",
        bullets: ["Migration", "Kubernetes", "Serverless", "FinOps"],
      },
      {
        num: "07",
        title: "Consulting & Workforce Strategy",
        href: "/services#consulting",
        bullets: ["Roadmaps", "Hub setup", "Diligence", "Vendor selection"],
      },
      {
        num: "08",
        title: "Managed Delivery / SRE",
        href: "/services#managed",
        bullets: ["24/7 monitoring", "Incidents", "Capacity", "Cost optimization"],
      },
    ],
  },
  industries: {
    index: "007 / Industries",
    headline: "Deep expertise across sectors.",
    items: [
      "Banking & Finance",
      "Healthcare & Life Sciences",
      "Manufacturing",
      "Retail & CPG",
      "Energy & Utilities",
      "Telecom & Media",
      "Public Sector",
      "Travel & Logistics",
    ],
  },
  approach: {
    index: "008 / Approach",
    headline: "Unlock capacity — people and platforms.",
    bullets: [
      "Customized solutions",
      "Quality & reliability",
      "AI-native matching & delivery",
      "Global delivery",
    ],
    phases: [
      { num: "00", label: "discover", title: "Discover", body: "Map constraints, stakeholders and success metrics." },
      { num: "01", label: "match-design", title: "Match & Design", body: "Scorecards, ADRs and a delivery roadmap." },
      { num: "02", label: "build-embed", title: "Build & Embed", body: "Two-week sprints; talent ramps beside the squad." },
      { num: "03", label: "scale", title: "Scale", body: "Harden, hand off and optimize for growth." },
    ],
    cta: { label: "See our process →", href: "/process" },
  },
  partners: {
    index: "009 / Trust",
    headline: "Trusted across industries that ship.",
    marquee: [
      "FinTech",
      "HealthTech",
      "Retail",
      "Industrial IoT",
      "SaaS",
      "Media",
      "Energy",
      "Logistics",
      "Public Sector",
      "Marketplaces",
    ],
    certifications: [
      { label: "SOC 2–minded delivery", detail: "Controls-first engagements" },
      { label: "ISO 27001–aligned ops", detail: "Security as default" },
      { label: "Cloud partner practice", detail: "AWS · Azure · GCP patterns" },
      { label: "Senior bar only", detail: "No juniors on critical paths" },
    ],
  },
  testimonials: {
    index: "010 / Voices",
    headline: "Client success stories",
    items: [
      {
        quote:
          "TalentTekPro translated our hiring plan into a production-ready squad in under a quarter — and stayed through launch.",
        name: "James Caldwell",
        title: "CTO",
        company: "Vertex Financial",
        initials: "JC",
      },
      {
        quote:
          "One partner for talent and delivery meant our architecture and workforce plan finally moved in the same direction.",
        name: "Maria Santos",
        title: "VP Technology",
        company: "Nova Health",
        initials: "MS",
      },
      {
        quote:
          "They turned our GenAI roadmap into a guarded production feature set — with the engineers to own it.",
        name: "Robert Hayes",
        title: "CDO",
        company: "Quantix Capital",
        initials: "RH",
      },
    ],
  },
  careers: {
    index: "011 / Careers",
    headline: "Join our team.",
    roles: [
      { track: "Engineering", title: "Senior Full-Stack Engineer", location: "Remote · Global", href: "/careers" },
      { track: "Data & AI", title: "AI / ML Engineer", location: "Remote · Global", href: "/careers" },
      { track: "Talent", title: "Technical Recruiter", location: "Remote · Americas", href: "/careers" },
      { track: "Engineering", title: "Junior Full Stack Software Engineer", location: "Remote · Americas & EU", href: "/careers" },
    ],
  },
  blog: {
    index: "012 / Journal",
    headline: "The latest articles.",
    posts: [
      {
        category: "AI & ML",
        title: "Production RAG with model routing that survives scale",
        href: "/blog",
        read: "8 min",
      },
      {
        category: "Hiring Ops",
        title: "Scorecards that predict time-to-productivity",
        href: "/blog",
        read: "6 min",
      },
      {
        category: "DevOps",
        title: "Zero-downtime deploys we actually trust",
        href: "/blog",
        read: "7 min",
      },
    ],
  },
  faq: {
    index: "013 / FAQ",
    headline: "Common questions.",
    items: [
      {
        q: "What engagement models do you offer?",
        a: "Fixed-scope projects, embedded squads, retainers, talent search, and managed delivery — alone or combined.",
      },
      {
        q: "How quickly can you start?",
        a: "Discovery can begin within one week. Full teams and searches typically mobilize in 2–3 weeks.",
      },
      {
        q: "Do you work with startups or only enterprise?",
        a: "Both — from Series A ventures to Fortune-scale enterprises that need senior talent and shipping capacity.",
      },
    ],
    cta: { label: "View all FAQs →", href: "/faq" },
  },
  getStarted: {
    index: "014 / Get Started",
    headline: "Ready to explore your possibilities? Talk to us today.",
    support: "Free consultancy — talent, delivery, or both. No obligation.",
  },
} as const;
