import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { home } from "@/content/home";
import { SectionEdge } from "@/components/ui/SectionShell";

export function Industries() {
  return (
    <section className="relative z-[1] overflow-visible bg-white section-pad">
      <SectionEdge fill="#ffffff" variant="slant" position="top" />
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
