import type { MediaAsset } from "./media";

export type BlogPost = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  read: string;
  date: string;
  author: string;
  role: string;
  featured: boolean;
  cover: Pick<MediaAsset, "id" | "src" | "path" | "prompt" | "alt">;
  tags: string[];
  takeaways: string[];
  pullQuote: string;
  body: {
    heading?: string;
    paragraphs: string[];
  }[];
};

const BLOG_BRAND =
  "Brand palette only: deep navy #051937, cyan #00D2FF, royal blue #1E60FF. No purple, no logos, no readable text, no watermarks. Premium flat/editorial hybrid CGI, 16:9.";

/** Temporary faded backdrop until generated covers are saved to `path`. */
const BLOG_PLACEHOLDER =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80";

export const blogPage = {
  metaTitle: "Blog | TalentTekPro field notes & essays",
  metaDescription:
    "Essays and post-mortems from recruiters and engineers who shipped the work.",
  hero: {
    eyebrow: "Journal",
    title: "Field notes from the",
    titleAccent: "engine room.",
    support:
      "Essays and post-mortems from recruiters and engineers who shipped the work: talent, delivery, and the systems between them.",
  },
  stats: [
    { value: "18", label: "Field notes" },
    { value: "2", label: "Disciplines" },
    { value: "Weekly", label: "Cadence" },
  ],
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
      date: "Mar 12, 2026",
      author: "Maya Chen",
      role: "Staff ML Engineer",
      featured: true,
      cover: {
        id: "blog-production-rag-routing",
        src: BLOG_PLACEHOLDER,
        path: "/media/blog/production-rag-routing.png",
        prompt: `Editorial illustration, 16:9. Abstract RAG routing lattice: cyan #00D2FF filaments scoring and routing queries through geometric gates toward a royal-blue #1E60FF decision core on deep navy #051937. Suggests model routing, evals, and fallbacks under load. ${BLOG_BRAND}`,
        alt: "Abstract RAG routing lattice with cyan filaments and a royal-blue core.",
      },
      tags: ["RAG", "Routing", "Evals", "Latency"],
      takeaways: [
        "Treat model choice as an operational control with scored gates, not a one-off prompt tweak.",
        "Log every route decision with the retrieval score that triggered it.",
        "Ship offline evals and online shadow traffic before users see a new route.",
      ],
      pullQuote:
        "The fix is not a bigger prompt. It is a routing and evaluation system that treats model choice as an operational control.",
      body: [
        {
          paragraphs: [
            "Most RAG demos look sharp in a notebook and fall apart the first week of production traffic. Latency spikes, retrieval quality drifts, and the wrong model answers with confidence. Teams respond by stuffing more context into the prompt or swapping models mid-sprint and the outage pattern repeats.",
            "We ship RAG as a gated pipeline: retrieve, score, route, generate, then verify. Each stage has a clear failure mode and a fallback that keeps answers useful when the preferred path is slow or low-confidence. That discipline is what separates a demo from a system you can operate on a Friday.",
          ],
        },
        {
          heading: "Gate model choice, don’t guess",
          paragraphs: [
            "Cheap models handle high-volume, low-risk queries. Stronger models unlock when retrieval confidence is thin, the domain is regulated, or the user is mid-workflow. Routing rules are written as score thresholds and policy tags, not as one-off if-statements buried in the handler.",
            "We keep a short allowlist of models per environment and log every route decision with the retrieval score that triggered it. That audit trail is what makes Friday incidents diagnosable instead of folklore.",
            "When a route fires unexpectedly often, the dashboard shows it. Product and ML review the threshold together, usually the retrieval index drifted, not the model itself.",
          ],
        },
        {
          heading: "Evals before feature theater",
          paragraphs: [
            "Offline eval sets cover citation faithfulness, refusal quality, and latency budgets. Online shadow traffic compares candidates without exposing users until the gate passes. If an eval regresses, the route rolls back automatically.",
            "We refuse to ship a “better” model that fails faithfulness even if latency looks prettier. Feature theater is swapping models for the release note. Real progress is a gate that keeps retrieval useful under real load.",
          ],
        },
        {
          heading: "What we measure in week one",
          paragraphs: [
            "p95 end-to-end latency by route, citation hit rate on a frozen eval pack, and fallback rate under peak. If fallback rate climbs, we investigate retrieval before we buy a larger model.",
            "The result is a system the team can change without rewriting the product surface every sprint and answers that still hold when traffic is ugly.",
          ],
        },
      ],
    },
    {
      slug: "scorecards-time-to-productivity",
      category: "Hiring Ops",
      title: "Scorecards that predict time-to-productivity",
      excerpt:
        "Interview signals that correlate with ramp, not just algorithm trivia.",
      read: "6 min",
      date: "Feb 28, 2026",
      author: "Jordan Hale",
      role: "Director of Talent",
      featured: false,
      cover: {
        id: "blog-scorecards-time-to-productivity",
        src: BLOG_PLACEHOLDER,
        path: "/media/blog/scorecards-time-to-productivity.png",
        prompt: `Editorial illustration, 16:9. Abstract hiring scorecard panels and signal nodes linked by cyan #00D2FF lines on deep navy #051937, royal #1E60FF accents marking ramp predictors. Calm, systems-thinking mood. ${BLOG_BRAND}`,
        alt: "Abstract scorecard panels and signal nodes for hiring rubrics.",
      },
      tags: ["Scorecards", "Ramp", "Panels", "Rubrics"],
      takeaways: [
        "Score for behaviors that show up in the first 30–60 days, not puzzle speed alone.",
        "Use one shared rubric language across recruiters and hiring managers.",
        "Debrief with evidence first; recommendation second.",
      ],
      pullQuote:
        "We design scorecards around time-to-productivity: the behaviors and artifacts that show up in the first 30–60 days on a real team.",
      body: [
        {
          paragraphs: [
            "Most interview scorecards measure what is easy to ask, not what predicts ramp. Algorithm trivia and whiteboard puzzles feel rigorous and often select for people who interview well rather than ship in your context.",
            "We design scorecards around time-to-productivity: the behaviors and artifacts that show up in the first 30–60 days on a real team. That shift changes who you hire and how fast they contribute.",
          ],
        },
        {
          heading: "Signals that travel",
          paragraphs: [
            "Work-sample reviews, system tradeoff discussions, and written decision notes correlate better with ramp than puzzle speed. Panels score against observable evidence, then debrief with a shared rubric before any hire recommendation.",
            "When hiring managers and recruiters use the same scorecard language, feedback loops tighten and you stop debating gut feel in Slack after the fact.",
          ],
        },
        {
          heading: "Closing the loop after day 60",
          paragraphs: [
            "We spot-check new hires against the scorecard that hired them. If a strong hire underperformed on a dimension we scored lightly, that dimension gets weight next cycle. The scorecard is a living instrument, not a PDF in a drive.",
          ],
        },
      ],
    },
    {
      slug: "zero-downtime-deploys",
      category: "DevOps",
      title: "Zero-downtime deploys we actually trust",
      excerpt:
        "Kubernetes + GitHub Actions patterns that survive Friday afternoon releases.",
      read: "7 min",
      date: "Feb 14, 2026",
      author: "Sam Okonkwo",
      role: "Principal Platform Engineer",
      featured: false,
      cover: {
        id: "blog-zero-downtime-deploys",
        src: BLOG_PLACEHOLDER,
        path: "/media/blog/zero-downtime-deploys.png",
        prompt: `Editorial illustration, 16:9. Abstract canary rollout rings and progressive deploy arcs in cyan #00D2FF and royal #1E60FF on deep navy #051937, suggesting zero-downtime promotion and rollback safety. ${BLOG_BRAND}`,
        alt: "Abstract canary rollout rings suggesting zero-downtime deploys.",
      },
      tags: ["Kubernetes", "CI/CD", "Canaries", "Rollback"],
      takeaways: [
        "Promote the same build artifact across environments, never rebuild for prod.",
        "Canaries need real traffic and real metrics, not a green health check alone.",
        "Make rollback a first-class pipeline path, not a hero move.",
      ],
      pullQuote:
        "Friday releases survive when rollback is a first-class path, not a hero move.",
      body: [
        {
          paragraphs: [
            "Zero-downtime is a promise teams make casually and break under pressure. Trust comes from boring, repeatable patterns: health checks that mean something, rollout policies that fail closed, and pipelines that refuse to promote without evidence.",
          ],
        },
        {
          heading: "Kubernetes + Actions, without drama",
          paragraphs: [
            "We use progressive rollouts with readiness gates, migration jobs that run before traffic shifts, and GitHub Actions that publish artifacts once and promote the same build across environments. Canaries get real traffic and real metrics, not a green health endpoint alone.",
            "Friday releases survive when rollback is a first-class path, not a hero move. If the canary fails, the previous revision is still warm and the pipeline already knows how to put it back.",
          ],
        },
        {
          heading: "Migrations that don’t strand traffic",
          paragraphs: [
            "Schema changes land expand-contract. Features that depend on new columns stay dark until the expand step is verified. The deploy pipeline blocks promote if a migration job has not reported success, even if the container image is fine.",
          ],
        },
      ],
    },
    {
      slug: "saas-mvp-to-scale",
      category: "SaaS",
      title: "SaaS MVP to scale: NestJS, Stripe, PostHog",
      excerpt:
        "A pragmatic stack path from first paying customers to multi-tenant reality.",
      read: "9 min",
      date: "Jan 30, 2026",
      author: "Elena Ruiz",
      role: "Engineering Lead",
      featured: false,
      cover: {
        id: "blog-saas-mvp-to-scale",
        src: BLOG_PLACEHOLDER,
        path: "/media/blog/saas-mvp-to-scale.png",
        prompt: `Editorial illustration, 16:9. Modular SaaS lattice growing from simple MVP blocks into a multi-tenant structure, cyan #00D2FF connectors and royal #1E60FF cores on deep navy #051937. ${BLOG_BRAND}`,
        alt: "Modular SaaS lattice growing from MVP blocks to multi-tenant scale.",
      },
      tags: ["NestJS", "Stripe", "PostHog", "Multi-tenant"],
      takeaways: [
        "Earn complexity: isolate tenants in data and auth before splitting infrastructure.",
        "Instrument usage early so architecture decisions follow product truth.",
        "Billing and entitlements belong in one coherent model from day one.",
      ],
      pullQuote:
        "The goal is not a perfect stack on day one. It is a stack you can operate, observe, and evolve without a rewrite.",
      body: [
        {
          paragraphs: [
            "Early SaaS needs speed without painting the team into a corner. We favor a path that earns the right to complexity: NestJS for clear service boundaries, Stripe for billing that does not invent itself, and PostHog for product truth before vanity dashboards.",
          ],
        },
        {
          heading: "From first invoice to multi-tenant",
          paragraphs: [
            "Tenant isolation starts as disciplined data modeling and auth boundaries, then hardens into separate resources only when metrics demand it. Feature flags and usage events tell you when the MVP shape is lying, usually before the architecture does.",
            "The goal is not a perfect stack on day one. It is a stack you can operate, observe, and evolve without a rewrite when the tenth customer asks for something the first never needed.",
          ],
        },
        {
          heading: "Where teams usually overbuild",
          paragraphs: [
            "Microservices before a clear domain boundary. Custom billing before Stripe’s model is exhausted. Dashboards before event schemas. We push teams to ship the boring path first and add seams only when PostHog and support tickets agree something is on fire.",
          ],
        },
      ],
    },
    {
      slug: "staff-engineer-interviews",
      category: "Talent",
      title: "Structured interviewing for staff engineers",
      excerpt:
        "Panels, rubrics, and debriefs that keep the senior bar honest.",
      read: "5 min",
      date: "Jan 16, 2026",
      author: "Priya Nair",
      role: "Senior Technical Recruiter",
      featured: false,
      cover: {
        id: "blog-staff-engineer-interviews",
        src: BLOG_PLACEHOLDER,
        path: "/media/blog/staff-engineer-interviews.png",
        prompt: `Editorial illustration, 16:9. Three abstract interview panels linked to a shared staff-level rubric node, cyan #00D2FF evidence threads and royal #1E60FF seniority markers on deep navy #051937. ${BLOG_BRAND}`,
        alt: "Three abstract interview panels linked to a shared staff-level rubric.",
      },
      tags: ["Staff+", "Panels", "Debriefs", "Senior bar"],
      takeaways: [
        "Separate system design, influence, and execution into distinct sessions.",
        "Start debriefs with scorecard evidence, never the hire recommendation.",
        "Write prompts that force tradeoffs, not textbook recitation.",
      ],
      pullQuote:
        "Structure is how you keep seniority honest without turning the loop into theater.",
      body: [
        {
          paragraphs: [
            "Staff-level interviews collapse when every panelist invents their own bar. Structure is how you keep seniority honest without turning the loop into theater.",
          ],
        },
        {
          heading: "Panels with a shared bar",
          paragraphs: [
            "We separate system design, leadership influence, and execution depth into distinct sessions with explicit rubrics. Debriefs start with evidence against the scorecard, then move to recommendation, never the reverse.",
            "Candidates feel the difference: clearer prompts, fairer comparisons, and fewer “strong but vague” outcomes that waste everyone’s time.",
          ],
        },
        {
          heading: "What “staff” means on the scorecard",
          paragraphs: [
            "We look for scope that crosses teams, decisions that leave written residue, and the ability to say no with a path forward. Titles vary by company; the scorecard does not. That is how you hire staff engineers who actually operate at staff altitude.",
          ],
        },
      ],
    },
    {
      slug: "adr-first-delivery",
      category: "Architecture",
      title: "ADRs before feature theater",
      excerpt:
        "Why we write architecture decision records in week one of every embed.",
      read: "6 min",
      date: "Jan 8, 2026",
      author: "Chris Vogel",
      role: "Principal Architect",
      featured: false,
      cover: {
        id: "blog-adr-first-delivery",
        src: BLOG_PLACEHOLDER,
        path: "/media/blog/adr-first-delivery.png",
        prompt: `Editorial illustration, 16:9. Abstract architecture decision slabs with cyan #00D2FF tradeoff branches and royal #1E60FF consequence nodes on deep navy #051937. Suggests ADRs living next to code. ${BLOG_BRAND}`,
        alt: "Abstract architecture decision slabs with cyan tradeoff branches.",
      },
      tags: ["ADRs", "Embeds", "Tradeoffs", "Governance"],
      takeaways: [
        "Capture constraints in week one: compliance, latency, ownership, non-goals.",
        "Keep ADRs short (context, decision, consequences) next to the code.",
        "Use ADRs to explain change cost when stakeholders rotate.",
      ],
      pullQuote:
        "When stakeholders change, the ADR still explains why the system looks the way it does.",
      body: [
        {
          paragraphs: [
            "Feature velocity without decision memory creates the same debate every quarter. Architecture decision records (ADRs) are how we make tradeoffs durable and how embedded teams avoid rebuilding context from Slack archaeology.",
          ],
        },
        {
          heading: "Week-one discipline",
          paragraphs: [
            "In the first week of an embed we capture the constraints that already exist: compliance, latency budgets, ownership boundaries, and non-goals. New ADRs are short: context, decision, consequences. They live next to the code that depends on them.",
            "When stakeholders change, the ADR still explains why the system looks the way it does and what would have to be true to change it. That is how you ship features without feature theater.",
          ],
        },
        {
          heading: "What we refuse to ADR",
          paragraphs: [
            "Implementation trivia, ticket-level choices, and reversible naming debates. If a decision does not constrain future work or spending, it stays in the PR. ADRs earn their keep by surviving the next reorg.",
          ],
        },
      ],
    },
    // —— Talent (2 more) ——
    {
      slug: "sourcing-staff-plus-without-spam",
      category: "Talent",
      title: "Sourcing staff+ engineers without the spam blast",
      excerpt:
        "How we build short, high-signal lists for senior roles instead of spraying InMails.",
      read: "6 min",
      date: "Mar 5, 2026",
      author: "Priya Nair",
      role: "Senior Technical Recruiter",
      featured: false,
      cover: {
        id: "blog-sourcing-staff-plus-without-spam",
        src: BLOG_PLACEHOLDER,
        path: "/media/blog/sourcing-staff-plus-without-spam.png",
        prompt: `Editorial illustration, 16:9. Abstract talent graph with a few highlighted senior-node clusters connected by cyan #00D2FF threads, royal #1E60FF accents marking staff-level scope, deep navy #051937 field. Suggests precise sourcing over mass outreach. ${BLOG_BRAND}`,
        alt: "Abstract talent graph with highlighted senior-node clusters.",
      },
      tags: ["Sourcing", "Staff+", "Outreach", "Signal"],
      takeaways: [
        "Map the problem domain and shipped systems before you open a search.",
        "Personalize from public artifacts, not job-title keywords alone.",
        "Keep lists short enough that every reply gets a human follow-up.",
      ],
      pullQuote:
        "Staff+ candidates ignore volume. They respond to proof you understood their work.",
      body: [
        {
          paragraphs: [
            "Mass InMails look busy and convert poorly at staff altitude. Senior engineers filter for relevance in seconds. If your note could have been sent to anyone with “engineer” in the title, it will be ignored.",
            "We source from artifacts first: talks, ADRs, open-source maintainership, and products they shipped. The list stays short on purpose so every reply gets a real conversation, not a sequence.",
          ],
        },
        {
          heading: "Build the map before the outreach",
          paragraphs: [
            "Hiring managers define the problem domain, the systems that will be touched, and the influence scope. Recruiters translate that into a search brief with must-have evidence and soft signals. Only then do we open LinkedIn or GitHub.",
            "The brief kills vanity keywords. “Distributed systems” becomes “owned Kafka consumer lag under peak” or “migrated a monolith edge to a gateway.” Candidates feel the difference in the first sentence.",
          ],
        },
        {
          heading: "What we measure",
          paragraphs: [
            "Reply rate on first touch, stage conversion to onsite, and candidate NPS on process clarity. If reply rate is high but onsites flop, the brief was too soft. If replies are cold, the outreach was generic. We fix the brief before we buy more seats on a sourcing tool.",
          ],
        },
      ],
    },
    {
      slug: "closing-loops-that-candidates-trust",
      category: "Talent",
      title: "Closing loops candidates actually trust",
      excerpt:
        "Offer, counter, and decline rituals that protect brand and keep senior talent warm.",
      read: "5 min",
      date: "Feb 6, 2026",
      author: "Jordan Hale",
      role: "Director of Talent",
      featured: false,
      cover: {
        id: "blog-closing-loops-that-candidates-trust",
        src: BLOG_PLACEHOLDER,
        path: "/media/blog/closing-loops-that-candidates-trust.png",
        prompt: `Editorial illustration, 16:9. Abstract handshake of geometric nodes resolving into a clear decision arc, cyan #00D2FF confirmation lines and royal #1E60FF offer markers on deep navy #051937. Calm, trustworthy mood. ${BLOG_BRAND}`,
        alt: "Abstract geometric nodes resolving into a clear decision arc.",
      },
      tags: ["Offers", "Close", "Candidate experience", "Brand"],
      takeaways: [
        "Write the decline with the same care as the offer letter.",
        "Separate compensation narrative from role narrative in every close call.",
        "Keep warm declines on a 90-day check-in list with a real reason to reconnect.",
      ],
      pullQuote:
        "A clean no today is often a yes in a year. A sloppy close burns both.",
      body: [
        {
          paragraphs: [
            "Most teams obsess over the offer and ghost the decline. Senior candidates talk. The way you close a loop becomes part of your market story whether you intend it or not.",
            "We treat offer, counter, and decline as one ritual with clear owners, timelines, and language. Recruiters never improvise the hard parts alone.",
          ],
        },
        {
          heading: "The close call structure",
          paragraphs: [
            "Role narrative first: why this seat matters, what they would own in 90 days, who they would work with. Compensation second: base, equity, and the story behind the band. Questions third. Pressure last—and usually never.",
            "Counters get a written response within one business day. If the band cannot move, we say so plainly and leave the door open with a specific future trigger, not a vague “keep in touch.”",
          ],
        },
        {
          heading: "Declines that keep dignity",
          paragraphs: [
            "Every onsite gets a timely decline with one concrete strength and one honest gap. No form letter. Strong declines go on a 90-day check-in list with a note about what would need to change for another conversation. That is how pipelines stay warm without spam.",
          ],
        },
      ],
    },
    // —— AI & ML (2 more) ——
    {
      slug: "eval-harness-before-agents",
      category: "AI & ML",
      title: "Eval harnesses before agent frameworks",
      excerpt:
        "Why we freeze failure cases and scoring rubrics before we wire tools and planners.",
      read: "7 min",
      date: "Mar 1, 2026",
      author: "Maya Chen",
      role: "Staff ML Engineer",
      featured: false,
      cover: {
        id: "blog-eval-harness-before-agents",
        src: BLOG_PLACEHOLDER,
        path: "/media/blog/eval-harness-before-agents.png",
        prompt: `Editorial illustration, 16:9. Abstract evaluation grid with scored cells and cyan #00D2FF measurement beams testing a royal #1E60FF agent node on deep navy #051937. Suggests eval-first discipline before agent orchestration. ${BLOG_BRAND}`,
        alt: "Abstract evaluation grid scoring an agent node.",
      },
      tags: ["Evals", "Agents", "Rubrics", "Regression"],
      takeaways: [
        "Write failure cases and rubrics before choosing an agent framework.",
        "Version the eval pack with the same care as production prompts.",
        "Block merges that regress faithfulness even if demos look slicker.",
      ],
      pullQuote:
        "An agent without an eval harness is a demo with a pager.",
      body: [
        {
          paragraphs: [
            "Teams jump to planners, tools, and multi-agent graphs because the demos are exciting. Then production traffic surfaces the same failure modes the notebook never tested: tool loops, hallucinated citations, and quiet policy violations.",
            "We refuse to wire an agent until the eval harness exists: frozen failure cases, scoring rubrics, and a regression gate in CI. Frameworks are easy to swap. Failure memory is not.",
          ],
        },
        {
          heading: "What goes in the harness",
          paragraphs: [
            "Golden tasks with expected tool traces, refusal cases for out-of-policy asks, and latency budgets per hop. Human raters score faithfulness and usefulness on a short rubric; automated checks catch schema and citation breaks.",
            "Every prompt or tool change runs against the pack. If faithfulness drops, the merge stops—even when the demo looks prettier. That is how agents stay operable instead of theatrical.",
          ],
        },
        {
          heading: "When we finally add a planner",
          paragraphs: [
            "Only after the single-step path passes evals do we introduce planning. Each new hop gets its own slice of the harness. Complexity is earned by measured quality, not by architecture fashion.",
          ],
        },
      ],
    },
    {
      slug: "retrieval-freshness-without-rewrites",
      category: "AI & ML",
      title: "Retrieval freshness without rewriting the product",
      excerpt:
        "Chunking, re-index cadence, and stale-doc guards that keep RAG honest as content moves.",
      read: "6 min",
      date: "Jan 22, 2026",
      author: "Alex Kim",
      role: "ML Platform Engineer",
      featured: false,
      cover: {
        id: "blog-retrieval-freshness-without-rewrites",
        src: BLOG_PLACEHOLDER,
        path: "/media/blog/retrieval-freshness-without-rewrites.png",
        prompt: `Editorial illustration, 16:9. Abstract document shards refreshing through cyan #00D2FF index streams toward a royal #1E60FF retrieval core on deep navy #051937. Suggests continuous re-index and stale-document guards. ${BLOG_BRAND}`,
        alt: "Abstract document shards refreshing into a retrieval core.",
      },
      tags: ["RAG", "Indexing", "Freshness", "Chunking"],
      takeaways: [
        "Separate content freshness from model upgrades in your ops board.",
        "Stamp every chunk with source version and expiry metadata.",
        "Prefer incremental re-index jobs over full rebuilds on every edit.",
      ],
      pullQuote:
        "Most “model is dumb” tickets are actually stale index tickets in disguise.",
      body: [
        {
          paragraphs: [
            "When answers drift, teams blame the model. More often the index is weeks behind the docs, the chunk boundaries hide the right paragraph, or a deprecated page still ranks first. Freshness is an operations problem dressed as an ML problem.",
            "We treat retrieval as a product surface with owners, SLOs, and a re-index cadence that matches how fast source content actually changes.",
          ],
        },
        {
          heading: "Metadata that makes stale visible",
          paragraphs: [
            "Every chunk carries source path, version hash, and an expiry hint. Queries that surface expired chunks log a freshness miss. Dashboards show miss rate beside latency so product can see when the knowledge base is lying.",
            "Incremental jobs re-embed only changed documents. Full rebuilds are reserved for schema changes. That keeps cost predictable and answer quality current without a rewrite of the chat UI.",
          ],
        },
        {
          heading: "Chunking with the reader in mind",
          paragraphs: [
            "We chunk by semantic sections, not fixed token windows alone. Headers travel with the body. Overlap is intentional for procedures that span sections. The goal is a retrieval hit a human would recognize as the right place in the doc—not a random mid-sentence fragment.",
          ],
        },
      ],
    },
    // —— DevOps (2 more) ——
    {
      slug: "slos-that-survive-oncall",
      category: "DevOps",
      title: "SLOs that survive a real on-call week",
      excerpt:
        "Error budgets, burn alerts, and dashboards that on-call can act on at 2 a.m.",
      read: "7 min",
      date: "Feb 21, 2026",
      author: "Sam Okonkwo",
      role: "Principal Platform Engineer",
      featured: false,
      cover: {
        id: "blog-slos-that-survive-oncall",
        src: BLOG_PLACEHOLDER,
        path: "/media/blog/slos-that-survive-oncall.png",
        prompt: `Editorial illustration, 16:9. Abstract error-budget gauges and burn-rate arcs in cyan #00D2FF with royal #1E60FF alert nodes on deep navy #051937. Suggests operable SLOs for on-call. ${BLOG_BRAND}`,
        alt: "Abstract error-budget gauges and burn-rate arcs.",
      },
      tags: ["SLOs", "On-call", "Error budgets", "Observability"],
      takeaways: [
        "Define SLOs from user journeys, not from every microservice heartbeat.",
        "Page on burn rate, not on every red timeseries.",
        "Give on-call one dashboard that answers: user impact, blast radius, next action.",
      ],
      pullQuote:
        "If the page does not tell you what to do next, it is a vanity alert.",
      body: [
        {
          paragraphs: [
            "Teams invent SLOs in a workshop and abandon them the first noisy week of on-call. Useful SLOs survive because they map to user pain, burn alerts that fire early enough to act, and runbooks that live next to the dashboard.",
          ],
        },
        {
          heading: "Journey-first, not service-first",
          paragraphs: [
            "We start with the journeys that make money or trust: checkout, login, job submit. Latency and availability targets attach to those paths. Internal services get health signals, not pages, until they sit on a journey critical path.",
            "Error budgets are reviewed weekly with product. When burn is high, feature work pauses for reliability work. That conversation only works if the SLO is something both sides recognize as user-facing.",
          ],
        },
        {
          heading: "On-call UX",
          paragraphs: [
            "Pages include: which journey is burning, current burn rate, recent deploys, and the first three runbook steps. No hunting across six tabs. If we cannot write that card, we are not ready to page a human.",
          ],
        },
      ],
    },
    {
      slug: "infra-reviews-like-code-reviews",
      category: "DevOps",
      title: "Infra-as-code reviews that catch Friday fires",
      excerpt:
        "PR checklists for Terraform and Helm that treat blast radius like a first-class review comment.",
      read: "6 min",
      date: "Jan 12, 2026",
      author: "Nina Patel",
      role: "Staff Platform Engineer",
      featured: false,
      cover: {
        id: "blog-infra-reviews-like-code-reviews",
        src: BLOG_PLACEHOLDER,
        path: "/media/blog/infra-reviews-like-code-reviews.png",
        prompt: `Editorial illustration, 16:9. Abstract infrastructure blueprint layers with cyan #00D2FF review checkmarks and royal #1E60FF blast-radius rings on deep navy #051937. Suggests careful IaC peer review. ${BLOG_BRAND}`,
        alt: "Abstract infrastructure blueprint layers with review checkmarks.",
      },
      tags: ["Terraform", "Helm", "Review", "Blast radius"],
      takeaways: [
        "Require a blast-radius note on every infra PR that touches prod.",
        "Plan output is part of the review, not an afterthought paste.",
        "Separate risky apply windows from routine module tidy-ups.",
      ],
      pullQuote:
        "Code review culture without infra review culture is how Friday fires start.",
      body: [
        {
          paragraphs: [
            "Application PRs get careful eyes. Terraform and Helm often get a rubber stamp because the diff looks like YAML. Then a misplaced security group or a storage class change takes down a region after hours.",
            "We review infrastructure with the same seriousness as application code—and with a few extra questions only ops can answer.",
          ],
        },
        {
          heading: "The blast-radius comment",
          paragraphs: [
            "Every prod-touching PR includes a short blast-radius note: what can break, how we would detect it, and how we roll back. Plan output is attached to the PR, not pasted into Slack after merge. Reviewers are expected to challenge destroy plans and unexpected replacements.",
          ],
        },
        {
          heading: "Windows and ownership",
          paragraphs: [
            "Risky applies land in agreed windows with a second engineer online. Module tidy-ups that cannot affect prod can ship anytime. Ownership of each stack is named in CODEOWNERS so reviews do not bounce between random volunteers.",
          ],
        },
      ],
    },
    // —— Hiring Ops (2 more) ——
    {
      slug: "debrief-hygiene-after-panels",
      category: "Hiring Ops",
      title: "Debrief hygiene that keeps panels honest",
      excerpt:
        "Evidence-first debriefs, calibrated language, and how we stop the loudest voice from winning.",
      read: "5 min",
      date: "Mar 8, 2026",
      author: "Jordan Hale",
      role: "Director of Talent",
      featured: false,
      cover: {
        id: "blog-debrief-hygiene-after-panels",
        src: BLOG_PLACEHOLDER,
        path: "/media/blog/debrief-hygiene-after-panels.png",
        prompt: `Editorial illustration, 16:9. Abstract panel table of equal score nodes feeding a shared cyan #00D2FF evidence spine, royal #1E60FF calibration marks on deep navy #051937. Suggests fair debrief hygiene. ${BLOG_BRAND}`,
        alt: "Abstract panel score nodes feeding a shared evidence spine.",
      },
      tags: ["Debriefs", "Calibration", "Bias", "Panels"],
      takeaways: [
        "Collect written scorecards before anyone speaks in the debrief.",
        "Start with evidence against the rubric, never with hire/no-hire.",
        "Calibrate language quarterly so “strong yes” means the same thing.",
      ],
      pullQuote:
        "If the first word in the room is a recommendation, the scorecard already lost.",
      body: [
        {
          paragraphs: [
            "Debriefs fail when panelists arrive with a vibe and leave with a consensus that never touched the rubric. The loudest IC or the most senior manager steers the room. Candidates with quieter interviews lose for reasons that never appear on the scorecard.",
            "Hygiene is the fix: written scores first, evidence second, recommendation last.",
          ],
        },
        {
          heading: "The order that works",
          paragraphs: [
            "Everyone submits scorecards before the call. The facilitator reads evidence dimension by dimension. Only after the room agrees on the evidence do we discuss hire recommendation. Disagreements are documented, not smoothed over for speed.",
          ],
        },
        {
          heading: "Calibration that sticks",
          paragraphs: [
            "Once a quarter we replay anonymized scorecards and align on what “meets” versus “exceeds” means for each dimension. New interviewers shadow two debriefs before they vote. That is how language stays shared when the team grows.",
          ],
        },
      ],
    },
    {
      slug: "pipeline-velocity-without-candidate-spam",
      category: "Hiring Ops",
      title: "Pipeline velocity without candidate spam",
      excerpt:
        "Stage SLAs, batching, and nudges that move roles forward without burning your brand.",
      read: "6 min",
      date: "Jan 18, 2026",
      author: "Priya Nair",
      role: "Senior Technical Recruiter",
      featured: false,
      cover: {
        id: "blog-pipeline-velocity-without-candidate-spam",
        src: BLOG_PLACEHOLDER,
        path: "/media/blog/pipeline-velocity-without-candidate-spam.png",
        prompt: `Editorial illustration, 16:9. Abstract hiring funnel stages with cyan #00D2FF SLA timers and royal #1E60FF bottleneck markers on deep navy #051937. Suggests measured velocity without noisy outreach. ${BLOG_BRAND}`,
        alt: "Abstract hiring funnel stages with SLA timers.",
      },
      tags: ["Pipeline", "SLAs", "ATS", "Candidate experience"],
      takeaways: [
        "Set stage SLAs hiring managers can see on a shared board.",
        "Batch scheduling instead of one-off calendar ping-pong.",
        "Automate status updates; never automate rejection tone.",
      ],
      pullQuote:
        "Speed that feels like spam is not speed. It is brand debt.",
      body: [
        {
          paragraphs: [
            "Leaders want faster time-to-fill. Recruiters respond by pinging candidates harder. The pipeline moves, the brand erodes, and senior talent quietly opts out of future loops.",
            "We chase velocity with stage SLAs and better ops—not with more messages.",
          ],
        },
        {
          heading: "Visible SLAs",
          paragraphs: [
            "Each stage has an owner and a clock: resume review in two business days, feedback in one day after onsite, offer decision in three. The hiring manager dashboard shows red stages without a recruiter chase email. Accountability is structural.",
          ],
        },
        {
          heading: "Batching and human tone",
          paragraphs: [
            "Scheduling happens in batches with clear windows. Status updates can be automated; declines cannot. Candidates get fewer, clearer messages and a process that respects their calendar. That is how you move roles without looking desperate.",
          ],
        },
      ],
    },
    // —— SaaS (2 more) ——
    {
      slug: "entitlements-before-feature-flags-chaos",
      category: "SaaS",
      title: "Entitlements before feature-flag chaos",
      excerpt:
        "One billing-aware entitlement model so plans, trials, and flags stay coherent as you grow.",
      read: "7 min",
      date: "Feb 18, 2026",
      author: "Elena Ruiz",
      role: "Engineering Lead",
      featured: false,
      cover: {
        id: "blog-entitlements-before-feature-flags-chaos",
        src: BLOG_PLACEHOLDER,
        path: "/media/blog/entitlements-before-feature-flags-chaos.png",
        prompt: `Editorial illustration, 16:9. Abstract plan tiers as stacked geometric keys unlocking cyan #00D2FF feature gates, royal #1E60FF entitlement core on deep navy #051937. Suggests coherent billing and access control. ${BLOG_BRAND}`,
        alt: "Abstract plan tiers unlocking feature gates around an entitlement core.",
      },
      tags: ["Entitlements", "Stripe", "Flags", "Plans"],
      takeaways: [
        "Model plans as entitlements, not as scattered boolean flags.",
        "Trials and grandfathered accounts must read the same entitlement API.",
        "Feature flags experiment; entitlements authorize.",
      ],
      pullQuote:
        "Flags decide experiments. Entitlements decide whether the customer paid for it.",
      body: [
        {
          paragraphs: [
            "Early SaaS teams wire plan checks next to every feature until nobody knows what “Pro” means. Trials get special cases. Grandfathered accounts get more special cases. Support invents tribal knowledge.",
            "We put a single entitlement service in front of product surfaces so Stripe, trials, and flags stay coherent.",
          ],
        },
        {
          heading: "One read path",
          paragraphs: [
            "UI and API ask the entitlement layer: can this tenant use X at limit Y? Stripe webhooks update entitlements; they do not scatter plan logic into controllers. Feature flags sit on top for experiments, never as the source of truth for paid access.",
          ],
        },
        {
          heading: "When plans change",
          paragraphs: [
            "New SKUs are entitlement packs. Migrations are data jobs with audit logs, not weekend YAML edits. Product can rename a plan without engineering rewriting every gate. That is how you scale packaging without rewriting the product.",
          ],
        },
      ],
    },
    {
      slug: "onboarding-loops-that-retain",
      category: "SaaS",
      title: "Onboarding loops that actually retain",
      excerpt:
        "Activation events, empty-state craft, and week-one check-ins that predict who stays.",
      read: "6 min",
      date: "Jan 4, 2026",
      author: "Marcus Webb",
      role: "Product Engineer",
      featured: false,
      cover: {
        id: "blog-onboarding-loops-that-retain",
        src: BLOG_PLACEHOLDER,
        path: "/media/blog/onboarding-loops-that-retain.png",
        prompt: `Editorial illustration, 16:9. Abstract onboarding path of stepping stones lighting up in cyan #00D2FF toward a royal #1E60FF activation core on deep navy #051937. Suggests retention through guided first value. ${BLOG_BRAND}`,
        alt: "Abstract onboarding path of stepping stones toward an activation core.",
      },
      tags: ["Onboarding", "Activation", "Retention", "PostHog"],
      takeaways: [
        "Define one activation event that predicts 30-day retention.",
        "Design empty states as product, not as placeholders.",
        "Instrument drop-offs per step before adding more checklist items.",
      ],
      pullQuote:
        "If week-one activation is unclear, retention dashboards are just grief.",
      body: [
        {
          paragraphs: [
            "Teams ship onboarding checklists that nobody finishes and then wonder why churn is high. Retention starts when a new tenant reaches a first moment of value—and when that moment is instrumented well enough to improve.",
          ],
        },
        {
          heading: "Pick the activation event",
          paragraphs: [
            "We look at PostHog cohorts for events that predict 30-day retention: first invite accepted, first workflow run, first paid usage. That event becomes the north star of onboarding. Every step either leads there or gets cut.",
          ],
        },
        {
          heading: "Empty states and human follow-up",
          paragraphs: [
            "Empty states teach the next action with real copy and a single CTA. High-intent accounts that stall get a week-one check-in from success—not a marketing drip. Product and success share the same activation definition so neither invents a parallel funnel.",
          ],
        },
      ],
    },
    // —— Architecture (2 more) ——
    {
      slug: "event-boundaries-before-microservices",
      category: "Architecture",
      title: "Event boundaries before microservices",
      excerpt:
        "How we draw domain events and ownership lines so service splits do not become distributed monoliths.",
      read: "8 min",
      date: "Feb 10, 2026",
      author: "Chris Vogel",
      role: "Principal Architect",
      featured: false,
      cover: {
        id: "blog-event-boundaries-before-microservices",
        src: BLOG_PLACEHOLDER,
        path: "/media/blog/event-boundaries-before-microservices.png",
        prompt: `Editorial illustration, 16:9. Abstract domain islands exchanging cyan #00D2FF event arcs with clear royal #1E60FF ownership borders on deep navy #051937. Suggests event-first boundaries before service sprawl. ${BLOG_BRAND}`,
        alt: "Abstract domain islands exchanging event arcs across ownership borders.",
      },
      tags: ["Events", "Boundaries", "DDD", "Services"],
      takeaways: [
        "Name domain events and owners before you draw service boxes.",
        "Prefer a modular monolith until event contracts stabilize.",
        "Reject cross-service calls that need synchronous consensus for every write.",
      ],
      pullQuote:
        "Microservices without event boundaries are just a distributed monolith with worse debugging.",
      body: [
        {
          paragraphs: [
            "Service maps look mature in a slide deck and chaotic in production. Teams split by team chart, not by domain churn, and every write fans out across five synchronous calls. Latency and ownership both suffer.",
            "We start with events and ownership. Services come later, if the metrics demand them.",
          ],
        },
        {
          heading: "Events as the contract",
          paragraphs: [
            "Domain experts name the facts that must be true for the business: OrderPlaced, EntitlementGranted, DeployPromoted. Each event has an owner team and a schema. Consumers subscribe; they do not reach into another team’s database.",
          ],
        },
        {
          heading: "Earn the split",
          paragraphs: [
            "A modular monolith with clear packages often ships faster while contracts stabilize. We split a module only when independent deploy cadence or scaling pressure is real—and when the event contract has survived at least one painful change without silent coupling.",
          ],
        },
      ],
    },
    {
      slug: "multi-region-readiness-checklist",
      category: "Architecture",
      title: "Multi-region readiness without premature drama",
      excerpt:
        "A practical checklist for data, identity, and failover before you buy a second region.",
      read: "7 min",
      date: "Dec 18, 2025",
      author: "Chris Vogel",
      role: "Principal Architect",
      featured: false,
      cover: {
        id: "blog-multi-region-readiness-checklist",
        src: BLOG_PLACEHOLDER,
        path: "/media/blog/multi-region-readiness-checklist.png",
        prompt: `Editorial illustration, 16:9. Abstract twin region nodes mirrored with cyan #00D2FF sync paths and royal #1E60FF failover arcs on deep navy #051937. Suggests deliberate multi-region readiness. ${BLOG_BRAND}`,
        alt: "Abstract twin region nodes with sync paths and failover arcs.",
      },
      tags: ["Multi-region", "Failover", "Data", "Readiness"],
      takeaways: [
        "Prove single-region resilience before funding a second region.",
        "Decide active-active vs active-passive per data domain, not per logo slide.",
        "Identity, config, and secrets must failover as carefully as the database.",
      ],
      pullQuote:
        "A second region is not a strategy. It is a cost that only pays after the checklist is green.",
      body: [
        {
          paragraphs: [
            "“We need multi-region” often means “we had an outage.” Buying a second region without readiness just doubles the failure modes. We use a checklist that separates real readiness from architecture theater.",
          ],
        },
        {
          heading: "Prove the single region first",
          paragraphs: [
            "Chaos drills, documented failover for the primary datastore, and on-call runbooks that have been rehearsed. If you cannot recover one region cleanly, two regions will not save you.",
          ],
        },
        {
          heading: "Data and identity decisions",
          paragraphs: [
            "Each data domain picks active-active or active-passive with a written consistency story. Identity tokens, feature config, and secrets get the same treatment as user data. DNS and traffic shifting are practiced in daylight before they are needed at night.",
            "Only when the checklist is green do we fund the second region. That is how multi-region stays a resilience investment instead of a slide.",
          ],
        },
      ],
    },
  ] satisfies BlogPost[],
  cta: {
    headline: "Want notes like these on",
    headlineAccent: "your roadmap?",
    support: "Talk to us about talent, delivery, or both.",
  },
} as const;

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPage.posts.find((post) => post.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const current = getBlogPost(slug);
  if (!current) return [...blogPage.posts].slice(0, limit);
  const sameCategory = blogPage.posts.filter(
    (post) => post.slug !== slug && post.category === current.category,
  );
  const others = blogPage.posts.filter(
    (post) => post.slug !== slug && post.category !== current.category,
  );
  return [...sameCategory, ...others].slice(0, limit);
}
