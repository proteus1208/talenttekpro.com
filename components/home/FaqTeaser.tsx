"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LinkArrow } from "@/components/ui/LinkArrow";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { ScrollShape } from "@/components/effects/ScrollShape";
import { SoftRegion } from "@/components/effects/SoftRegion";
import { home } from "@/content/home";
import { cn } from "@/lib/cn";
import { SectionEdge } from "@/components/ui/SectionShell";

export function FaqTeaser() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative z-[1] overflow-visible bg-[#EAF3FB] section-pad">
      <SectionEdge fill="#EAF3FB" variant="bump" position="top" />
      <ScrollShape
        className="top-16 -right-4 h-40 w-40 text-[#1E60FF] md:h-52 md:w-52"
        reverse
      >
        <SoftRegion variant="droplet" />
      </ScrollShape>
      <Container className="max-w-3xl">
        <RevealOnScroll>
          <h2 className="section-title">
            {home.faq.headline}{" "}
            <span className="hero-gradient-text">
              {home.faq.headlineAccent}
            </span>
          </h2>
          <div className="mt-10 divide-y divide-border-strong/40 border-y border-border-strong/40">
            {home.faq.items.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.q}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span className="text-base font-medium text-text">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={cn(
                        "size-5 shrink-0 transition-transform",
                        isOpen ? "rotate-180 text-teal" : "text-muted",
                      )}
                    />
                  </button>
                  {isOpen ? (
                    <p className="pb-5 text-sm leading-relaxed text-muted">
                      {item.a}
                    </p>
                  ) : null}
                </div>
              );
            })}
          </div>
          <div className="mt-8">
            <LinkArrow href={home.faq.cta.href}>{home.faq.cta.label}</LinkArrow>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
