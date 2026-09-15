import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { home } from "@/content/home";

export function Industries() {
  return (
    <section className="section-dark section-pad border-t border-border">
      <Container>
        <RevealOnScroll>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-text md:text-4xl">
            {home.industries.headline}
          </h2>
          <ul className="mt-10 flex flex-wrap gap-3">
            {home.industries.items.map((item) => (
              <li
                key={item}
                className="rounded-sm border border-border px-4 py-2.5 text-sm text-muted transition-colors hover:border-border-strong hover:text-teal"
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
