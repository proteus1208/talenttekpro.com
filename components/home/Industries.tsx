"use client";

import {
  ArrowRight,
  Building2,
  Factory,
  HeartPulse,
  ShoppingCart,
  Truck,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { ScrollShape } from "@/components/effects/ScrollShape";
import { SoftRegion } from "@/components/effects/SoftRegion";
import { SectionEdge } from "@/components/ui/SectionShell";
import { home } from "@/content/home";
import { cn } from "@/lib/cn";

const tones: Record<
  string,
  { iconWrap: string; icon: string; dot: string; tag: string }
> = {
  blue: {
    iconWrap: "bg-[#EFF6FF]",
    icon: "text-[#1E60FF]",
    dot: "bg-[#1E60FF]",
    tag: "text-[#1E60FF]",
  },
  teal: {
    iconWrap: "bg-[#ECFDF5]",
    icon: "text-[#0D9488]",
    dot: "bg-[#0D9488]",
    tag: "text-[#0D9488]",
  },
  violet: {
    iconWrap: "bg-[#F5F3FF]",
    icon: "text-[#7C3AED]",
    dot: "bg-[#7C3AED]",
    tag: "text-[#7C3AED]",
  },
  orange: {
    iconWrap: "bg-[#FFF7ED]",
    icon: "text-[#EA580C]",
    dot: "bg-[#EA580C]",
    tag: "text-[#EA580C]",
  },
  sky: {
    iconWrap: "bg-[#F0F9FF]",
    icon: "text-[#0284C7]",
    dot: "bg-[#0284C7]",
    tag: "text-[#0284C7]",
  },
};

const icons: Record<string, LucideIcon> = {
  Logistics: Truck,
  Healthcare: HeartPulse,
  Manufacturing: Factory,
  Retail: ShoppingCart,
  Energy: Zap,
};

function MarqueePills({
  items,
  trackKey,
}: {
  items: typeof home.industries.items;
  trackKey: string;
}) {
  return (
    <div className="flex shrink-0 items-center gap-3 pr-3" aria-hidden={trackKey === "b"}>
      {items.map((item, i) => {
        const Icon = icons[item.title] ?? Building2;
        return (
          <span
            key={`${trackKey}-${item.title}-${i}`}
            className="inline-flex shrink-0 items-center gap-2.5 rounded-full bg-white px-4 py-2.5 text-sm font-medium whitespace-nowrap text-[#051937] shadow-[0_8px_22px_rgba(5,25,55,0.06)]"
          >
            <span className="grid size-7 place-items-center rounded-full bg-[#EFF6FF] text-[#1E60FF]">
              <Icon className="size-3.5" strokeWidth={2} aria-hidden />
            </span>
            {item.title}
          </span>
        );
      })}
    </div>
  );
}

export function Industries() {
  const items = home.industries.items;
  // Enough copies so one half is always wider than the viewport
  const loopItems = [...items, ...items, ...items];

  return (
    <section className="relative z-[1] overflow-visible bg-white section-pad">
      {/* Solid curve into previous #F0F7FC — clear curved border */}
      <SectionEdge fill="#ffffff" variant="soft" position="top" />
      {/* Soft petal region */}
      <ScrollShape
        className="top-[30%] -right-12 h-48 w-48 text-[#00B4FF] md:h-60 md:w-60"
      >
        <SoftRegion variant="petal" />
      </ScrollShape>

      <Container className="relative z-10">
        <RevealOnScroll>
          <div className="min-w-0">
            <p className="inline-flex items-center gap-2 rounded-full bg-[#EFF6FF] px-3 py-1.5 text-xs font-semibold tracking-[0.14em] text-[#1E60FF] uppercase">
              <Building2 className="size-3.5" aria-hidden />
              {home.industries.eyebrow}
            </p>
            <h2 className="section-title mt-4 whitespace-nowrap">
              {home.industries.headline}{" "}
              <span className="hero-gradient-text">
                {home.industries.headlineAccent}
              </span>
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#64748B] md:text-lg">
              {home.industries.support}
            </p>
          </div>
        </RevealOnScroll>
      </Container>

      {/* Mask + loop constrained to content width, not full viewport */}
      <Container className="relative z-10 mt-10">
        <div className="marquee-fade overflow-x-clip">
          <div className="animate-marquee flex w-max">
            <MarqueePills items={loopItems} trackKey="a" />
            <MarqueePills items={loopItems} trackKey="b" />
          </div>
        </div>
      </Container>

      {/* Cards centered in container */}
      <Container className="relative z-10 mt-12">
        <RevealOnScroll>
          <div className="flex flex-wrap justify-center gap-5">
            {items.map((item) => {
              const tone = tones[item.tone] ?? tones.blue;
              const Icon = icons[item.title] ?? Building2;
              return (
                <article
                  key={item.title}
                  className="flex w-full max-w-[17.5rem] flex-col rounded-[1.75rem] bg-white p-7 shadow-[0_18px_44px_rgba(5,25,55,0.09)] sm:w-[calc(50%-0.625rem)] lg:w-[17.5rem]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span
                      className={cn(
                        "grid size-12 place-items-center rounded-[0.9rem]",
                        tone.iconWrap,
                        tone.icon,
                      )}
                    >
                      <Icon className="size-5" strokeWidth={1.75} aria-hidden />
                    </span>
                    <span
                      className={cn(
                        "grid size-9 place-items-center rounded-full",
                        tone.iconWrap,
                        tone.icon,
                      )}
                    >
                      <ArrowRight className="size-4" strokeWidth={2} aria-hidden />
                    </span>
                  </div>

                  <h3 className="card-title mt-7">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-[#64748B]">
                    {item.description}
                  </p>

                  <p
                    className={cn(
                      "mt-8 flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.16em] uppercase",
                      tone.tag,
                    )}
                  >
                    <span
                      className={cn("size-1.5 shrink-0 rounded-full", tone.dot)}
                      aria-hidden
                    />
                    {item.tag}
                  </p>
                </article>
              );
            })}
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
