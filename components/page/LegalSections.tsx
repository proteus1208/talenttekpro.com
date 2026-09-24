import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";

type Section = { heading: string; body: string };

export function LegalSections({ sections }: { sections: readonly Section[] }) {
  return (
    <section className="section-dark border-t border-border section-pad">
      <Container className="max-w-3xl">
        <RevealOnScroll>
          <div className="space-y-10">
            {sections.map((s) => (
              <article key={s.heading} className="border-t border-border pt-6">
                <h2 className="font-display text-xl font-semibold text-text">{s.heading}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-12 text-xs text-faint">
            Scenario legal copy for the TalentTekPro marketing site: replace with counsel-approved text before production.
          </p>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
