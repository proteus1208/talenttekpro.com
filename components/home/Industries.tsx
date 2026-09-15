"use client";

import {
  Building2,
  Factory,
  HeartPulse,
  Landmark,
  Radio,
  ShoppingCart,
  Truck,
  Zap,
  LayoutGrid,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { home } from "@/content/home";
import { SectionEdge } from "@/components/ui/SectionShell";
import { cn } from "@/lib/cn";

const industryMeta: Record<string, { icon: LucideIcon; iconBg: string }> = {
  "Banking & Finance": {
    icon: Landmark,
    iconBg: "bg-[#1E60FF]",
  },
  "Healthcare & Life Sciences": {
    icon: HeartPulse,
    iconBg: "bg-[#14B8A6]",
  },
  Manufacturing: {
    icon: Factory,
    iconBg: "bg-[#8B5CF6]",
  },
  "Retail & CPG": {
    icon: ShoppingCart,
    iconBg: "bg-[#F43F5E]",
  },
  "Energy & Utilities": {
    icon: Zap,
    iconBg: "bg-[#EAB308]",
  },
  "Telecom & Media": {
    icon: Radio,
    iconBg: "bg-[#06B6D4]",
  },
  "Public Sector": {
    icon: Building2,
    iconBg: "bg-[#4338CA]",
  },
  "Travel & Logistics": {
    icon: Truck,
    iconBg: "bg-[#3B82F6]",
  },
};

export function Industries() {
  return (
    <section className="relative z-[1] overflow-visible bg-white section-pad">
      <SectionEdge fill="#ffffff" variant="slant" position="top" />

      <div
        className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#DBEAFE]/70 blur-3xl"
        aria-hidden
      />

      <Container className="relative z-10">
        <RevealOnScroll>
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-[#EFF6FF] px-3 py-1.5 text-xs font-semibold tracking-[0.14em] text-[#1E60FF] uppercase">
              <LayoutGrid className="size-3.5" aria-hidden />
              {home.industries.eyebrow}
            </p>
            <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-[#051937] md:text-4xl lg:text-[2.75rem]">
              Deep expertise{" "}
              <span className="hero-gradient-text">across sectors.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#64748B] md:text-lg">
              {home.industries.support}
            </p>
          </div>

          <ul className="mt-12 flex flex-wrap gap-3 md:gap-4">
            {home.industries.items.map((item) => {
              const meta = industryMeta[item] ?? {
                icon: Building2,
                iconBg: "bg-[#1E60FF]",
              };
              const Icon = meta.icon;
              return (
                <li key={item}>
                  <button
                    type="button"
                    className={cn(
                      "group inline-flex items-center gap-3 rounded-2xl bg-white py-2.5 pl-2.5 pr-4 text-left shadow-[0_8px_24px_rgba(5,25,55,0.06)] transition-all duration-200",
                      "hover:-translate-y-0.5 hover:border hover:border-[#1E60FF]/35 hover:bg-[#EFF6FF] hover:shadow-[0_12px_28px_rgba(30,96,255,0.12)]",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E60FF]/40",
                    )}
                  >
                    <span
                      className={cn(
                        "grid size-9 shrink-0 place-items-center rounded-full text-white shadow-sm",
                        meta.iconBg,
                      )}
                    >
                      <Icon className="size-4" strokeWidth={2} aria-hidden />
                    </span>
                    <span className="text-sm font-medium text-[#051937] transition-colors group-hover:text-[#1E60FF]">
                      {item}
                    </span>
                    <ArrowRight
                      className="ml-1 size-4 text-[#94A3B8] transition-colors group-hover:text-[#1E60FF]"
                      aria-hidden
                    />
                  </button>
                </li>
              );
            })}
          </ul>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
