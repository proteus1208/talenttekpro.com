import { Container } from "@/components/ui/Container";
import { CountUp } from "@/components/effects/CountUp";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { home } from "@/content/home";

export function Impact() {
  return (
    <section className="section-elevated section-pad border-t border-border">
      <Container>
        <RevealOnScroll>
          <h2 className="font-display max-w-2xl text-3xl font-semibold tracking-tight text-text md:text-4xl">
            {home.impact.headline}
          </h2>
          <dl className="mt-14 grid gap-0 sm:grid-cols-2 lg:grid-cols-3">
            {home.impact.metrics.map((metric) => (
              <div
                key={metric.label}
                className="border-t border-border py-7 pr-6 sm:border-r sm:odd:border-r lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(3n+1)]:pl-0"
              >
                <dt className="text-sm text-faint">{metric.label}</dt>
                <dd className="font-display mt-3 text-4xl font-semibold tracking-tight text-teal md:text-5xl">
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
