/**
 * Site chrome & IA — swap later for CMS without rewriting components.
 */

export const site = {
  name: "TalentTekPro",
  legalName: "TalentTekPro LLC",
  tagline: "Talent that ships. Technology that scales.",
  descriptor: "Tech Talent & Delivery",
  description:
    "Integrated talent acquisition, embedded engineering, and digital delivery — so you scale people and product on one accountable partner.",
  email: "contact@talenttekpro.com",
  copyrightYear: 2026,
  est: 2021,
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const primaryNav: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/projects" },
  { label: "Approach", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
];

export const footerColumns = {
  company: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Case Studies", href: "/projects" },
    { label: "Our Approach", href: "/process" },
    { label: "Careers", href: "/careers" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "Pricing", href: "/pricing" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Cookies", href: "/cookies" },
  ],
} as const;

export const cta = {
  primary: { label: "Start a project →", href: "/contact" },
  secondary: { label: "Explore case studies", href: "/projects" },
  quote: { label: "Get a Quote", href: "/contact" },
  proposal: { label: "Request a Proposal →", href: "/contact" },
} as const;
