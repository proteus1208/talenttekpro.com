import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionIndex } from "@/components/ui/SectionIndex";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { home } from "@/content/home";

export function Solutions() {
  return (
    <section className="border-t border-border bg-slate/30 py-24 md:py-32">
      <Container>
        <RevealOnScroll>
          <SectionIndex label={home.solutions.index} />
          <h2 className="font-display mt-6 max-w-2xl text-3xl font-semibold tracking-tight text-text md:text-4xl">
            {home.solutions.headline}
          </h2>
          <p className="mt-4 max-w-2xl text-muted">{home.solutions.support}</p>

          <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {home.solutions.disciplines.map((d) => (
              <Link key={d.num} href={d.href} className="group block border-t border-border pt-5">
                <p className="font-mono text-xs text-teal">{d.num}</p>
                <h3 className="font-display mt-2 text-lg font-semibold text-text transition-colors group-hover:text-teal">
                  {d.title}
                </h3>
                <ul className="mt-3 space-y-1">
                  {d.bullets.map((b) => (
                    <li key={b} className="text-sm text-muted">
                      → {b}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
