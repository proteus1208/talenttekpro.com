import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { home } from "@/content/home";
import { SectionEdge } from "@/components/ui/SectionShell";

export function Testimonials() {
  return (
    <section className="relative z-[1] overflow-visible bg-white section-pad">
      <SectionEdge fill="#ffffff" variant="valley" position="top" />
      <Container>
        <RevealOnScroll>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-light-ink md:text-4xl">
            {home.testimonials.headline}
          </h2>
          <div className="mt-12 grid gap-10 lg:grid-cols-3">
            {home.testimonials.items.map((item) => (
              <blockquote
                key={item.name}
                className="border-t-2 border-teal pt-6"
              >
                <p className="text-base leading-relaxed text-light-muted">
                  “{item.quote}”
                </p>
                <footer className="mt-6 flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-full border border-light-border bg-white font-mono text-xs text-teal-dim">
                    {item.initials}
                  </span>
                  <div>
                    <cite className="not-italic text-sm font-medium text-light-ink">
                      {item.name}
                    </cite>
                    <p className="text-xs text-light-muted">
                      {item.title}, {item.company}
                    </p>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
