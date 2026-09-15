import { ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { home } from "@/content/home";
import { SectionEdge } from "@/components/ui/SectionShell";

export function PartnersTrust() {
  const items = home.partners.marquee;

  return (
    <section className="relative z-[1] overflow-visible bg-white section-pad">
      <SectionEdge fill="#ffffff" variant="bump" position="top" />
      <Container>
        <RevealOnScroll>
          <h2 className="font-display whitespace-nowrap text-[clamp(1.05rem,3.4vw,2.5rem)] font-semibold tracking-tight text-text">
            {home.partners.headline}
          </h2>
        </RevealOnScroll>
      </Container>

      {/* Duplicated ring: two equal tracks, animate 0 → -50% */}
      <div className="marquee-fade mt-10 overflow-x-clip">
        <div className="animate-marquee flex w-max">
          <div className="flex shrink-0 items-center gap-12 px-6">
            {items.map((label) => (
              <span
                key={`a-${label}`}
                className="font-display text-sm font-medium tracking-wide text-muted/50 whitespace-nowrap"
              >
                {label}
              </span>
            ))}
          </div>
          <div className="flex shrink-0 items-center gap-12 px-6" aria-hidden>
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
