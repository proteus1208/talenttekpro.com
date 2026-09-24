export type CareerRole = {
  slug: string;
  track: string;
  title: string;
  location: string;
  type: string;
  summary: string;
  about: string;
  /** Comp / engagement framing shown on the role page */
  compensation: string;
  /** Primary tools and stack for the seat */
  stack: string[];
  responsibilities: string[];
  requirements: string[];
  niceToHave?: string[];
  /** How the interview loop runs */
  process: string[];
};

export const careersPage = {
  metaTitle: "Careers | Join TalentTekPro",
  metaDescription:
    "Build the work you want to be known for: senior recruiting, engineering, and delivery roles.",
  hero: {
    eyebrow: "Careers",
    title: "Build the work you want to be",
    titleAccent: "known for.",
    support:
      "We hire exceptional people, pay competitively, and give them problems that compound: GenAI platforms, enterprise delivery, and talent systems.",
  },
  benefits: {
    headline: "What you",
    headlineAccent: "get.",
    support: "Remote-first craft, real learning budget, and colleagues who raise the bar.",
    items: [
      { title: "Remote-first", body: "Work from where you do your best thinking." },
      { title: "Learning budget", body: "Courses, conferences, and tools on us." },
      { title: "Top-tier gear", body: "Machine, monitor, and setup that keep pace." },
      { title: "Health & wellness", body: "Coverage that respects how hard we ship." },
      { title: "Flexible PTO", body: "Take the time you need, no points system." },
      { title: "Senior colleagues", body: "Learn beside people who have done the work." },
    ],
  },
  culture: {
    headline: "How we",
    headlineAccent: "work.",
    items: [
      {
        title: "Senior bar",
        body: "Client engagements stay at a senior level, no bait-and-switch staffing.",
      },
      {
        title: "Transparent milestones",
        body: "Delivery plans you can see, challenge, and own.",
      },
      {
        title: "AI-native practice",
        body: "The tools we sell are the tools we use every day.",
      },
      {
        title: "Global craft",
        body: "A distributed team united by quality, not time zones.",
      },
    ],
  },
  roles: {
    headline: "Open",
    headlineAccent: "roles.",
    applyNote:
      "Open a role for the full description, then apply with your LinkedIn and résumé. We review every senior-track application.",
    items: [
      {
        slug: "junior-full-stack-software-engineer",
        track: "Engineering",
        title: "Junior Full Stack Software Engineer",
        location: "Remote · Americas & EU",
        type: "Full-time",
        summary:
          "Ship production features across the stack with mentorship from senior engineers on real client embeds and TalentTekPro platforms.",
        about:
          "This is a growth seat for engineers who already ship, not a classroom. You’ll join small product squads on client embeds and internal tooling: React/Next.js on the front, Node APIs on the back, with a senior engineer as your primary review partner. We care that you learn production habits—tests, observability, honest scoping—not that you already know every library. Expect real tickets, real deploys, and clear feedback in the first 90 days.",
        compensation:
          "Competitive junior base + benefits · band shared in the first conversation after we review your application.",
        stack: [
          "TypeScript",
          "React / Next.js",
          "Node.js",
          "PostgreSQL",
          "GitHub Actions",
          "Vercel / AWS",
        ],
        responsibilities: [
          "Build and ship UI and API features against written acceptance criteria with senior review before merge.",
          "Own small vertical slices end-to-end: schema → API → UI → basic tests → release notes.",
          "Write and maintain unit/integration tests for the surfaces you touch; fix flakes you introduce.",
          "Pair weekly with a senior on architecture tradeoffs, production debugging, and PR craft.",
          "Contribute to sprint planning, demos, and hand-off notes for client or internal stakeholders.",
          "Keep tickets, PRs, and Slack updates clear enough that async teammates can unblock without a call.",
          "Raise early when scope, estimates, or production signals look wrong—curiosity beats silence.",
        ],
        requirements: [
          "1–3 years of professional software experience, or a strong portfolio of shipped projects with real users.",
          "Solid TypeScript/JavaScript fundamentals and hands-on work with at least one modern web framework (React preferred).",
          "Willingness to work across front-end and back-end; you don’t need to be expert at both on day one.",
          "Comfort with Git, code review, and reading documentation without hand-holding every step.",
          "Clear written English and reliable remote habits (calendar, async updates, camera-on for pairing).",
          "Overlap of at least 4 hours with US Eastern or Central European business hours.",
          "Authorized to work as a contractor or employee in your country of residence (we support remote W-2 / contractor paths by market).",
        ],
        niceToHave: [
          "Next.js App Router or NestJS exposure",
          "Basic CI/CD familiarity (GitHub Actions, preview deploys)",
          "Interest in AI-assisted coding workflows used in production teams",
          "Prior internship or freelance work with a paying client",
        ],
        process: [
          "Recruiter screen (30 min) — role fit, logistics, compensation expectations",
          "Technical screen (45 min) — TypeScript/React or Node practical with a senior engineer",
          "Pairing exercise (60–90 min) — small feature or bugfix on a realistic codebase slice",
          "Team / culture debrief (30 min) — how we ship, mentorship model, questions both ways",
          "Offer within 5 business days of a completed loop",
        ],
      },
      {
        slug: "senior-full-stack-engineer",
        track: "Engineering",
        title: "Senior Full-Stack Engineer",
        location: "Remote · Global",
        type: "Full-time",
        summary:
          "Own end-to-end product surfaces for client embeds and TalentTekPro platforms: architecture through production.",
        about:
          "You’ll lead technical delivery on digital product and platform work for TalentTekPro and our embed clients. That means design systems, APIs, performance, and the judgment to keep scope honest under real deadlines. You will mentor mid and junior engineers, sit in client-facing technical conversations, and leave systems that another team can operate after we hand off. This is not a ticket farm—you are expected to own outcomes from discovery through observability.",
        compensation:
          "Senior base + performance bonus · equity conversation for long-term seats · band shared after first technical screen.",
        stack: [
          "TypeScript",
          "React / Next.js",
          "Node / NestJS",
          "PostgreSQL",
          "Redis",
          "AWS / GCP",
          "Docker / Kubernetes (light)",
          "OpenTelemetry",
        ],
        responsibilities: [
          "Architect and ship full-stack features with measurable product and reliability outcomes.",
          "Set the code and review bar: ADRs for consequential decisions, PR standards, and mentoring for mid/junior engineers.",
          "Partner with product, talent, and delivery leads on scoping, risk, and milestone honesty.",
          "Own observability, release quality, migrations, and rollback paths for surfaces you lead.",
          "Lead client-facing engineering conversations: tradeoffs, estimates, and what “done” means.",
          "Improve platform foundations (auth, multi-tenant boundaries, design system, CI) when client work exposes gaps.",
          "Document hand-offs so client or internal teams can operate without tribal knowledge.",
          "Contribute to hiring: take-homes, panels, and scorecards for engineering seats.",
        ],
        requirements: [
          "5+ years building and operating production web systems (SaaS, marketplace, or similar).",
          "Deep TypeScript and modern React; solid Node (or comparable) backend experience including data modeling.",
          "Track record of leading technical decisions on shipped products—not only implementing tickets.",
          "Proven mentoring of other engineers through review, pairing, and clear written standards.",
          "Comfortable in client-facing or cross-functional engineering conversations under time pressure.",
          "Experience with cloud deploys, CI/CD, and basic production debugging (logs, metrics, traces).",
          "Excellent written English; able to write ADRs and hand-off docs others actually use.",
          "Overlap of at least 4 hours with US business hours for client embeds when required.",
        ],
        niceToHave: [
          "Next.js App Router in production",
          "Multi-tenant SaaS or marketplace architecture",
          "Prior consulting, agency, or embed experience",
          "Staff-level scope on a previous team (cross-squad influence)",
        ],
        process: [
          "Recruiter screen (30 min)",
          "System design + stack deep-dive (60 min) with a principal/staff engineer",
          "Practical: architecture review of a realistic product slice or live debugging (60–90 min)",
          "Leadership / client-fit conversation (45 min)",
          "References + offer",
        ],
      },
      {
        slug: "ai-ml-engineer",
        track: "Data & AI",
        title: "AI / ML Engineer",
        location: "Remote · Global",
        type: "Full-time",
        summary:
          "Build production AI features: retrieval, agents, evals, and model routing that clients and our own talent systems can trust.",
        about:
          "You’ll turn applied AI into reliable product surfaces—not demos. That means RAG pipelines, scoring systems, agent workflows, and model routing with gates that survive real traffic. You’ll partner with full-stack engineers to ship APIs clients can operate, and with talent teams when hiring or matching use cases need signal quality. We care about eval harnesses, cost control, and failure modes as much as model choice.",
        compensation:
          "Competitive ML/AI band + bonus · GPU/tooling budget · band shared after technical screen.",
        stack: [
          "Python",
          "TypeScript (service integration)",
          "OpenAI / Anthropic / open models",
          "Vector DBs (pgvector, Pinecone, or similar)",
          "Eval / tracing tooling",
          "FastAPI or NestJS",
          "AWS / GCP",
        ],
        responsibilities: [
          "Design and ship LLM/ML features with offline evals, online shadow traffic, and explicit fallbacks.",
          "Build and maintain retrieval, embedding, and model-routing layers behind product APIs.",
          "Own latency, cost, and quality dashboards for the features you ship; kill regressions before users feel them.",
          "Partner with engineering on contracts, auth, and multi-tenant data boundaries for AI surfaces.",
          "Work with talent and product on hiring/matching or client GenAI use cases when domain signal matters.",
          "Write runbooks: how to operate, roll back, and explain model behavior to non-ML stakeholders.",
          "Evaluate vendors and models with a short allowlist and measurable gates—not hype cycles.",
          "Contribute to hiring for AI/ML and full-stack seats that touch AI surfaces.",
        ],
        requirements: [
          "3+ years in ML engineering or applied AI with systems that reached production users.",
          "Strong Python and comfort integrating models into real services (not notebooks alone).",
          "Hands-on experience shipping retrieval, ranking, or agent systems beyond prototypes.",
          "Discipline around evals, logging, and failure modes (refusals, hallucinations, cost spikes).",
          "Ability to explain trade-offs clearly to product, talent, and client stakeholders.",
          "Familiarity with at least one cloud environment and containerized deploys.",
          "Excellent written English for specs, eval reports, and incident notes.",
          "Overlap of at least 3–4 hours with US or EU delivery partners.",
        ],
        niceToHave: [
          "Production RAG with citation / faithfulness evals",
          "TypeScript service integration experience",
          "Hiring, HR-tech, or matching domain experience",
          "Fine-tuning or distillation work with measured lift",
        ],
        process: [
          "Recruiter screen (30 min)",
          "Applied AI deep-dive (60 min) — retrieval, evals, routing, failure modes",
          "Practical case: design an eval + fallback plan for a realistic product feature (60–90 min)",
          "Cross-functional fit with engineering/product (30–45 min)",
          "Offer",
        ],
      },
      {
        slug: "technical-recruiter",
        track: "Talent",
        title: "Technical Recruiter",
        location: "Remote · Americas",
        type: "Full-time",
        summary:
          "Source and close senior engineering talent with scorecards that predict ramp, not just keyword matches.",
        about:
          "You’ll run full-cycle search for client embeds and TalentTekPro internal seats. That means intake with hiring managers, market mapping, structured panels, and debriefs that keep the senior bar honest. You’ll partner with engineers who can discuss stack tradeoffs—and you’ll be expected to push back on vague scorecards. We measure time-to-slate quality and candidate experience, not InMail volume.",
        compensation:
          "Base + placement / performance bonus · benefits · OTE discussed in the first screen.",
        stack: [
          "LinkedIn Recruiter",
          "ATS (Greenhouse / Ashby / Lever or similar)",
          "Structured scorecards",
          "Calendly / scheduling tools",
          "Notion / Google Workspace",
        ],
        responsibilities: [
          "Own role intake: problem domain, must-have evidence, timeline, and compensation truth with hiring managers.",
          "Build short, high-signal shortlists for staff+ and senior engineering seats—no spam blast sourcing.",
          "Design and run structured interview loops with shared rubrics and evidence-first debriefs.",
          "Partner with delivery leads on offer strategy, counters, and clean declines that protect brand.",
          "Maintain ATS hygiene, pipeline SLAs, and candidate communication that stays human.",
          "Report weekly on funnel health: reply rates, stage conversion, and where scorecards need weight.",
          "Coach hiring managers on panel prep and feedback quality; escalate when the bar drifts.",
          "Support TalentTekPro employer brand moments (content hooks, event follow-ups) when needed.",
        ],
        requirements: [
          "3+ years full-cycle recruiting for software engineers or adjacent technical roles (backend, platform, ML, or full-stack).",
          "Comfort discussing stacks, seniority signals, and tradeoffs with hiring managers and candidates.",
          "Proven ability to close senior/staff candidates in competitive markets with a clean process.",
          "Experience running structured interviews and debriefs—not gut-feel consensus alone.",
          "Excellent written and spoken English; crisp outreach and decline writing.",
          "Reliable overlap with US business hours (Americas-based preferred).",
          "Authorized to work in your country of residence for full-time remote employment or contracting.",
        ],
        niceToHave: [
          "Agency, RPO, or multi-client search experience",
          "Executive / staff-level search track record",
          "Familiarity with AI-assisted sourcing tools used carefully (not as spam engines)",
          "Prior work placing into consulting or embed models",
        ],
        process: [
          "Recruiter / talent lead screen (30 min)",
          "Role-play intake + sourcing strategy (45 min)",
          "Hiring manager panel (45 min) — scorecard design and close scenarios",
          "References focused on process quality and candidate NPS",
          "Offer",
        ],
      },
      {
        slug: "virtual-assistant",
        track: "Operations",
        title: "Virtual Assistant",
        location: "Remote · LATAM & Europe",
        type: "Full-time / contract",
        summary:
          "Keep founders and delivery leads unblocked: calendar, research, follow-ups, and light ops that stay accurate under pace.",
        about:
          "You’ll support leadership and project teams with administrative excellence across time zones. Calendar, inbox triage, document prep, travel logistics, and coordination for recruiting and delivery ops. Discretion matters: you’ll see client names, compensation conversations, and hiring pipelines. We want someone who anticipates the next blocker, not someone who only waits for a task list.",
        compensation:
          "Competitive VA / ops rate or salary by market · contractor or employment path · discussed in first screen.",
        stack: [
          "Google Workspace",
          "Notion",
          "Slack",
          "Calendly",
          "DocuSign / similar",
          "Light ATS support",
        ],
        responsibilities: [
          "Own calendars for designated leaders: protect focus time, prep agendas, and confirm logistics.",
          "Triage email and Slack; draft replies and escalate only what needs a decision.",
          "Prepare decks, one-pagers, and meeting notes that stay accurate and on brand.",
          "Coordinate travel, vendor schedules, and cross-timezone meetings without thrash.",
          "Support recruiting and delivery ops with research, scheduling batches, and tracker hygiene.",
          "Maintain shared trackers and lightweight SOPs so coverage is possible when you’re offline.",
          "Handle confidential information with care; never improvise sensitive communications.",
          "Flag process gaps (double-bookings, stale trackers, missing follow-ups) with a proposed fix.",
        ],
        requirements: [
          "2+ years supporting executives, founders, or busy technical/consulting teams remotely.",
          "Excellent written English and professional tone in Slack, email, and docs.",
          "Strong Google Workspace and Notion (or equivalent) fluency; fast and accurate.",
          "Proven discretion with confidential client, hiring, and compensation information.",
          "Reliable overlap with Americas business hours (roughly 9am–1pm US Eastern minimum).",
          "Based in LATAM or Europe with stable internet and a quiet work setup.",
          "Comfort juggling multiple owners and deadlines without dropping details.",
        ],
        niceToHave: [
          "Agency, consulting, or multi-stakeholder ops experience",
          "Light design or presentation skills (Figma, Slides)",
          "Spanish or Portuguese in addition to English",
          "Prior support for recruiting or sales pipelines",
        ],
        process: [
          "Operations screen (25 min)",
          "Skills practical: calendar conflict + inbox triage exercise (45 min)",
          "Working-style conversation with a leader you’d support (30 min)",
          "Paid trial week for finalists when useful",
          "Offer / contractor agreement",
        ],
      },
      {
        slug: "pr-communications-assistant",
        track: "Marketing",
        title: "Public Relations & Communications Assistant",
        location: "Remote · U.S. only",
        type: "Full-time / contract",
        summary:
          "Help tell the TalentTekPro story: drafts, media lists, social support, and campaign coordination that stay on brand.",
        about:
          "You’ll support PR and communications for a hybrid tech talent + delivery brand. Media and influencer lists, draft copy, event support, coverage tracking, and coordination with leadership on announcements and case-study storytelling. American English editorial judgment matters. You won’t invent strategy alone on day one—but you will own accuracy, deadlines, and follow-through.",
        compensation:
          "Competitive communications / marketing support band · U.S. contractor or employment · shared in first screen.",
        stack: [
          "Google Workspace",
          "Notion",
          "Social schedulers",
          "Media databases / lists",
          "Basic CMS",
          "Analytics dashboards (light)",
        ],
        responsibilities: [
          "Build and maintain media, podcast, and influencer lists with clear tiering and notes.",
          "Support outreach campaigns: research, personalization drafts, and follow-up tracking.",
          "Draft short-form copy, bios, briefing notes, and social posts under brand guidance.",
          "Track coverage, mentions, and campaign timelines; surface wins and gaps weekly.",
          "Coordinate with leadership on announcements, launches, and case-study storytelling.",
          "Help prep event one-pagers, speaker bios, and follow-up sequences.",
          "Keep the content calendar and shared drive organized so nothing ships from a stale draft.",
          "Protect brand voice: flag off-tone copy before it goes external.",
        ],
        requirements: [
          "1–3 years in PR, communications, content, or marketing support roles.",
          "Strong writing and editorial judgment in American English.",
          "U.S.-based with reliable East or Central business-hour coverage.",
          "Comfort juggling multiple deadlines without losing factual accuracy.",
          "Familiarity with media outreach workflows and basic social scheduling tools.",
          "Professional discretion with unannounced launches and client stories.",
          "Authorized to work in the United States (W-2 or 1099 as agreed).",
        ],
        niceToHave: [
          "B2B or tech brand experience",
          "Basic CMS experience (Webflow, WordPress, or similar)",
          "Interest in talent, engineering, or AI storytelling",
          "Light design skills for simple one-pagers",
        ],
        process: [
          "Marketing / brand screen (25 min)",
          "Writing sample review (provided prompt, 48-hour turnaround)",
          "Practical: media list cleanup + short draft under a brief (45 min live or async)",
          "Fit conversation with leadership (30 min)",
          "Offer / contractor agreement",
        ],
      },
    ] satisfies CareerRole[],
  },
  cta: {
    headline: "Ready to",
    headlineAccent: "build with us?",
    support: "Tell us what you want to be known for: we’ll reply with next steps.",
  },
} as const;

export function getCareerRole(slug: string) {
  return careersPage.roles.items.find((role) => role.slug === slug);
}
