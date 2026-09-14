import { Container } from "@/components/ui/Container";
import { SectionIndex } from "@/components/ui/SectionIndex";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { home } from "@/content/home";

export function Industries() {
  return (
    <section className="border-t border-border py-24 md:py-28">
      <Container>
        <RevealOnScroll>
          <SectionIndex label={home.industries.index} />
          <h2 className="font-display mt-6 text-3xl font-semibold tracking-tight text-text md:text-4xl">
            {home.industries.headline}
          </h2>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {home.industries.items.map((item) => (
              <li
                key={item}
                className="border-l border-teal/40 pl-4 text-sm text-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
