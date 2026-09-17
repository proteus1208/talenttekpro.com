"use client";

import { ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { ScrollShape } from "@/components/effects/ScrollShape";
import { SoftRegion } from "@/components/effects/SoftRegion";
import { home } from "@/content/home";
import { SectionEdge } from "@/components/ui/SectionShell";

export function PartnersTrust() {
  const items = home.partners.marquee;

  return (
    <section className="relative z-[1] overflow-visible bg-white section-pad">
      <SectionEdge fill="#ffffff" variant="bump" position="top" />
      <ScrollShape
        className="-bottom-6 left-[18%] h-40 w-56 text-[#1E60FF] md:h-52 md:w-64"
        reverse
      >
        <SoftRegion variant="cloud" />
      </ScrollShape>

      <Container>
        <RevealOnScroll>
          <h2 className="section-title whitespace-nowrap">
            {home.partners.headline}{" "}
            <span className="hero-gradient-text">
              {home.partners.headlineAccent}
            </span>
          </h2>
        </RevealOnScroll>
      </Container>

      <Container className="mt-10">
        <div className="marquee-fade overflow-x-clip">
          <div className="animate-marquee flex w-max">
            <div className="flex shrink-0 items-center gap-12 pr-12">
              {items.map((label) => (
                <span
                  key={`a-${label}`}
                  className="font-display text-sm font-medium tracking-wide text-muted/50 whitespace-nowrap"
                >
                  {label}
                </span>
              ))}
            </div>
            <div className="flex shrink-0 items-center gap-12 pr-12" aria-hidden>
              {items.map((label) => (
                <span
                  key={`b-${label}`}
                  className="font-display text-sm font-medium tracking-wide text-muted/50 whitespace-nowrap"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>

      <Container className="mt-12">
        <RevealOnScroll>
          <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-x-10 gap-y-8 sm:gap-x-12">
            {home.partners.certifications.map((cert) => (
              <div
                key={cert.label}
                className="w-full max-w-[12rem] border-t border-border-strong/50 pt-5 sm:w-[calc(50%-1.5rem)] lg:w-[calc(25%-0.75rem)]"
              >
                <ShieldCheck className="size-5 text-teal" aria-hidden />
                <p className="mt-3 text-sm font-medium text-text">{cert.label}</p>
                <p className="mt-1 text-xs text-muted">{cert.detail}</p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
