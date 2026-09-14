import { Container } from "@/components/ui/Container";
import { SectionIndex } from "@/components/ui/SectionIndex";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { home } from "@/content/home";

export function Testimonials() {
  return (
    <section className="border-t border-border bg-slate/30 py-24 md:py-28">
      <Container>
        <RevealOnScroll>
          <SectionIndex label={home.testimonials.index} />
          <h2 className="font-display mt-6 text-3xl font-semibold tracking-tight text-text md:text-4xl">
            {home.testimonials.headline}
          </h2>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {home.testimonials.items.map((item) => (
              <blockquote
                key={item.name}
                className="border-t border-border pt-6"
              >
                <p className="text-base leading-relaxed text-muted">
                  “{item.quote}”
                </p>
                <footer className="mt-6 flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-full border border-border bg-surface font-mono text-xs text-teal">
                    {item.initials}
                  </span>
                  <div>
                    <cite className="not-italic text-sm font-medium text-text">
                      {item.name}
                    </cite>
                    <p className="text-xs text-faint">
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
