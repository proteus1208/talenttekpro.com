import type { Metadata } from "next";
import { PageHero } from "@/components/page/PageHero";
import { PageCta } from "@/components/page/PageCta";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { processPage } from "@/content/process";
import { media } from "@/content/media";
import { cta } from "@/content/site";

export const metadata: Metadata = {
  title: processPage.metaTitle,
  description: processPage.metaDescription,
};

export default function ProcessPage() {
  return (
    <main className="flex-1">
      <PageHero
        crumbs={[{ label: "Approach" }]}
        eyebrow={processPage.hero.eyebrow}
        title={processPage.hero.title}
        support={processPage.hero.support}
        image={{ src: media.processHero.src, alt: media.processHero.alt }}
      />

      <section className="section-elevated border-t border-border section-pad">
        <Container>
          <RevealOnScroll>
            <h2 className="font-display text-2xl font-semibold text-text">Principles</h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {processPage.principles.map((p) => (
                <li
                  key={p}
                  className="border-t-2 border-teal/40 pt-4 text-base text-muted"
                >
                  <span className="text-teal">→</span> {p}
                </li>
              ))}
            </ul>
          </RevealOnScroll>
        </Container>
      </section>

      <section className="section-dark border-t border-border section-pad">
        <Container>
          <RevealOnScroll>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-text">
              Phases
            </h2>
            <ol className="mt-12 grid gap-0 border-t-2 border-teal/30 sm:grid-cols-2 lg:grid-cols-4">
              {processPage.phases.map((phase, i) => (
                <li
                  key={phase.num}
                  className="border-border py-6 pr-6 sm:border-r lg:[&:nth-child(4)]:border-r-0"
                >
                  <p className="font-mono text-xs text-teal">
                    {phase.num}
                    {i < processPage.phases.length - 1 ? " →" : ""}
                  </p>
                  <p className="mt-2 font-mono text-[0.65rem] tracking-wide text-faint uppercase">
                    phase // {phase.label}
                  </p>
                  <h3 className="font-display mt-2 text-xl font-semibold text-text">
                    {phase.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{phase.body}</p>
                </li>
              ))}
            </ol>
          </RevealOnScroll>
        </Container>
      </section>

      <PageCta
        headline={processPage.cta.headline}
        support={processPage.cta.support}
        primary={cta.primary}
        secondary={{ label: "View services", href: "/services" }}
      />
    </main>
  );
}
