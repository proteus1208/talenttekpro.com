import { Container } from "@/components/ui/Container";
import { SectionIndex } from "@/components/ui/SectionIndex";
import { CountUp } from "@/components/effects/CountUp";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { home } from "@/content/home";

export function Impact() {
  return (
    <section className="border-t border-border bg-slate/40 py-24 md:py-28">
      <Container>
        <RevealOnScroll>
          <SectionIndex label={home.impact.index} />
          <h2 className="font-display mt-6 max-w-2xl text-3xl font-semibold tracking-tight text-text md:text-4xl">
            {home.impact.headline}
          </h2>
          <dl className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {home.impact.metrics.map((metric) => (
              <div key={metric.label} className="border-t border-border pt-5">
                <dt className="text-sm text-faint">{metric.label}</dt>
                <dd className="font-display mt-2 text-4xl font-semibold text-text md:text-5xl">
                  <CountUp value={metric.value} suffix={metric.suffix} />
                </dd>
                <p className="mt-2 text-sm text-muted">{metric.detail}</p>
              </div>
            ))}
          </dl>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
