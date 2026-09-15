import { caseMedia } from "./media";

export type ProjectFilter =
  | "All"
  | "Talent"
  | "Digital Product"
  | "Platform"
  | "E-commerce";

export type ProjectCase = {
  slug: string;
  title: string;
  type: string;
  filters: Exclude<ProjectFilter, "All">[];
  year: string;
  summary: string;
  outcome: string[];
  stack: string[];
  mediaIndex: number;
};

export const projectsPage = {
  metaTitle: "Projects | TalentTekPro portfolio of shipped work & talent wins",
  metaDescription:
    "Filterable case studies spanning talent placements and digital product delivery.",
  hero: {
    eyebrow: "Projects / Case Studies",
    title: "Every team we placed. Every system we put into production.",
    support:
      "Filter by type, then open the full story — hiring outcomes and shipped product.",
  },
  stats: [
    { label: "case studies", value: "9" },
    { label: "delivered", value: "50+" },
    { label: "countries", value: "10+" },
    { label: "satisfaction", value: "98%" },
  ],
  filters: ["All", "Talent", "Digital Product", "Platform", "E-commerce"] as const,
  cta: {
    headline: "Have a challenge like these? Let’s build the team — and the product.",
  },
} as const;

export const projectCases: ProjectCase[] = [
  {
    slug: "dating-web-app",
    title: "Dating Web App",
    type: "Digital Product + Squad",
    filters: ["Digital Product"],
    year: "2024",
    summary:
      "Real-time matching product with an embedded FE/BE squad — live updates that stay responsive at scale.",
    outcome: [
      "Embedded squad through launch",
      "Sub-second match refresh under load",
      "Hand-off with runbooks and observability",
    ],
    stack: ["React", "NestJS", "WebSockets"],
    mediaIndex: 0,
  },
  {
    slug: "healthcare-management",
    title: "Healthcare Management System",
    type: "Digital Product",
    filters: ["Digital Product"],
    year: "2023",
    summary:
      "Live ops panel for appointments and metrics — secure backend streaming into a calm control surface.",
    outcome: [
      "HIPAA-minded architecture patterns",
      "Ops dashboard adopted by care coordinators",
      "Stable release cadence after go-live",
    ],
    stack: ["React", "Laravel"],
    mediaIndex: 1,
  },
  {
    slug: "bigcommerce-leds",
    title: "BigCommerce LEDs Store",
    type: "E-commerce",
    filters: ["E-commerce"],
    year: "2025",
    summary: "High-performance LED catalog storefront engineered for browse speed and conversion.",
    outcome: [
      "Faster PDP loads on large catalogs",
      "Checkout path simplified for B2B buyers",
      "Content ops without engineering tickets",
    ],
    stack: ["BigCommerce", "Next.js"],
    mediaIndex: 2,
  },
  {
    slug: "office-booking",
    title: "Office Booking Platform",
    type: "Digital Product",
    filters: ["Digital Product"],
    year: "2025",
    summary: "Flexible workspace booking connecting professionals to available rooms and desks.",
    outcome: [
      "Real-time availability across sites",
      "Admin tools for facilities teams",
      "Mobile-first booking flow",
    ],
    stack: ["React", "Next.js", "TypeScript"],
    mediaIndex: 3,
  },
  {
    slug: "food-delivery-shopify",
    title: "Food Delivery Headless Shopify",
    type: "Platform",
    filters: ["Platform", "E-commerce"],
    year: "2025",
    summary: "Headless storefront engineered for performance and conversion for a modern commerce brand.",
    outcome: [
      "Hydrogen storefront in production",
      "Conversion lift on mobile",
      "Composable content blocks for merchandising",
    ],
    stack: ["Hydrogen", "React"],
    mediaIndex: 2,
  },
  {
    slug: "nutrition-shopify",
    title: "Functional Nutrition Shopify",
    type: "E-commerce",
    filters: ["E-commerce"],
    year: "2025",
    summary: "Subscriptions and nutrition brand experience on Shopify with retention tooling.",
    outcome: [
      "Subscription flows via Skio",
      "Reduced churn in first 90 days",
      "Brand-safe PDP templates",
    ],
    stack: ["Shopify", "Skio"],
    mediaIndex: 0,
  },
  {
    slug: "personal-care-shopify",
    title: "Sustainable Personal Care Shopify",
    type: "E-commerce",
    filters: ["E-commerce"],
    year: "2025",
    summary: "Eco brand storefront with recommendation and replenishment patterns.",
    outcome: [
      "Rebuy recommendations live",
      "Clear sustainability storytelling",
      "Faster campaign launches",
    ],
    stack: ["Shopify", "Rebuy"],
    mediaIndex: 1,
  },
  {
    slug: "pipeline-inspection",
    title: "Pipeline Inspection Platform",
    type: "Digital Product",
    filters: ["Digital Product", "Platform"],
    year: "2025",
    summary:
      "Bridge from raw industrial data to human decisions — maps, streams, and operator-ready views.",
    outcome: [
      "Map-centric operator console",
      "Streaming data into decision views",
      "Operator training materials shipped",
    ],
    stack: ["Vue", "Nuxt", "Maps"],
    mediaIndex: 4,
  },
  {
    slug: "series-b-platform-pod",
    title: "Series B Platform Pod Staffing",
    type: "Talent",
    filters: ["Talent"],
    year: "2025",
    summary:
      "Six senior hires in 90 days for a platform pod — with an embed option after acceptance.",
    outcome: [
      "6 senior hires in 90 days",
      "Scorecard-driven interviewing",
      "Optional C2H / embed path after ramp",
    ],
    stack: ["Hiring", "C2H"],
    mediaIndex: 3,
  },
];

export function getProject(slug: string) {
  return projectCases.find((c) => c.slug === slug);
}

export function projectMedia(c: ProjectCase) {
  return caseMedia(c.mediaIndex);
}
