import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { site } from "@/content/site";

type PageCtaProps = {
  headline: string;
  support?: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  showEmail?: boolean;
};

export function PageCta({
  headline,
  support,
  primary,
  secondary,
  showEmail = true,
}: PageCtaProps) {
  return (
    <section className="section-elevated border-t border-border section-pad">
      <Container>
        <RevealOnScroll>
          <h2 className="font-display max-w-2xl text-3xl font-semibold tracking-tight text-text md:text-4xl">
            {headline}
          </h2>
          {support ? (
            <p className="mt-4 max-w-xl text-muted">{support}</p>
          ) : null}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href={primary.href}>{primary.label}</Button>
            {secondary ? (
              <Button href={secondary.href} variant="secondary">
                {secondary.label}
              </Button>
            ) : null}
            {showEmail ? (
              <a
                href={`mailto:${site.email}`}
                className="text-sm font-medium text-teal hover:text-[#5AE0FF] hover:underline"
              >
                {site.email}
              </a>
            ) : null}
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
