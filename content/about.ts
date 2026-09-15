export const aboutPage = {
  metaTitle: "About | TalentTekPro",
  metaDescription:
    "Recruiters, engineers, and innovation partners — founded 2021 to close the gap between hiring and shipping.",
  hero: {
    eyebrow: "TalentTekPro / Est. 2021",
    title: "Recruiters, engineers, and innovation partners.",
    support:
      "Founded to close the gap between “we need talent” and “we need it shipped.” Today we serve 40+ clients across 10+ countries with a senior remote-first team.",
  },
  who: {
    headline: "Partners in talent and digital transformation.",
    body: "Strategic hiring plus hands-on engineering — embedding senior people who ship production systems, not slide decks alone.",
  },
  metrics: [
    { label: "projects & placements", value: 50, suffix: "+" },
    { label: "clients served", value: 40, suffix: "+" },
    { label: "team members", value: 12, suffix: "+" },
    { label: "hubs", value: 2, suffix: "+" },
    { label: "countries", value: 10, suffix: "+" },
    { label: "years", value: 5, suffix: "+" },
  ],
  principles: [
    {
      num: "I",
      title: "Senior teams only",
      body: "No juniors learning on your dime for client-critical work.",
    },
    {
      num: "II",
      title: "Ship the foundation first",
      body: "Auth, observability, pipelines — before feature theater.",
    },
    {
      num: "III",
      title: "AI-native by default",
      body: "Matching and delivery automation embedded in the practice.",
    },
    {
      num: "IV",
      title: "Honest estimates",
      body: "We say what we don’t know before we price discovery.",
    },
    {
      num: "V",
      title: "Global delivery",
      body: "Onshore strategy with near/offshore execution.",
    },
    {
      num: "VI",
      title: "Outcomes over output",
      body: "Time-to-productivity, revenue, risk — not vanity story points.",
    },
  ],
  timeline: [
    { year: "2021", event: "TalentTekPro founded — tech talent + delivery thesis." },
    { year: "2022", event: "Expanded Americas / EU remote practice." },
    { year: "2024", event: "Strengthened AI matching + multi-hub delivery." },
    { year: "2026", event: "50+ projects & placements; 2+ hubs; 40+ clients." },
  ],
  cta: {
    headline: "Want to work with a hybrid partner?",
    support: "Talk to us about talent, delivery, or both.",
  },
} as const;
