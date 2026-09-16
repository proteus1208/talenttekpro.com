import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { ScrollShape } from "@/components/effects/ScrollShape";
import { SoftRegion } from "@/components/effects/SoftRegion";
import { SectionEdge } from "@/components/ui/SectionShell";
import { site } from "@/content/site";

type PageCtaProps = {
  headline: string;
  headlineAccent?: string;
  support?: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  showEmail?: boolean;
};

/** Shared bottom CTA — landing typography + soft blue band */
export function PageCta({
  headline,
  headlineAccent,
  support,
  primary,
  secondary,
  showEmail = true,
}: PageCtaProps) {
  return (
    <section className="relative z-[1] overflow-visible bg-[#F8FBFE] section-pad">
      <SectionEdge fill="#F8FBFE" variant="soft" position="top" />
      <ScrollShape
        className="bottom-10 right-[8%] hidden h-36 w-40 text-[#1E60FF] lg:block"
        reverse
      >
        <SoftRegion variant="swirl" />
      </ScrollShape>

      <Container className="relative z-10">
        <RevealOnScroll>
          <h2 className="section-title max-w-2xl">
            {headline}
            {headlineAccent ? (
              <>
                {" "}
                <span className="hero-gradient-text">{headlineAccent}</span>
              </>
            ) : null}
          </h2>
          {support ? (
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#64748B]">
              {support}
            </p>
          ) : null}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href={primary.href} className="rounded-full">
              {primary.label}
            </Button>
            {secondary ? (
              <Button href={secondary.href} variant="secondary" className="rounded-full">
                {secondary.label}
              </Button>
            ) : null}
            {showEmail ? (
              <a
                href={`mailto:${site.email}`}
                className="text-sm font-medium text-[#1E60FF] transition-colors hover:underline"
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
