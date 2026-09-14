import { ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionIndex } from "@/components/ui/SectionIndex";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { home } from "@/content/home";

export function PartnersTrust() {
  const loop = [...home.partners.marquee, ...home.partners.marquee];

  return (
    <section className="border-t border-border py-24 md:py-28">
      <Container>
        <RevealOnScroll>
          <SectionIndex label={home.partners.index} />
          <h2 className="font-display mt-6 text-3xl font-semibold tracking-tight text-text md:text-4xl">
            {home.partners.headline}
          </h2>
        </RevealOnScroll>
      </Container>

      <div className="mt-10 overflow-hidden border-y border-border py-4">
        <div className="animate-marquee flex w-max gap-10 px-5">
          {loop.map((label, i) => (
            <span
              key={`${label}-${i}`}
              className="font-display text-sm font-medium tracking-wide text-faint whitespace-nowrap"
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      <Container className="mt-12">
        <RevealOnScroll>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {home.partners.certifications.map((cert) => (
              <div
                key={cert.label}
                className="rounded-sm border border-border bg-surface/60 p-5"
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
