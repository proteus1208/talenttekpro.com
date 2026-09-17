import { Container } from "@/components/ui/Container";
import { Breadcrumb, type Crumb } from "@/components/page/Breadcrumb";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { SectionEdge } from "@/components/ui/SectionShell";
import { cn } from "@/lib/cn";

type PageHeroProps = {
  crumbs: Crumb[];
  eyebrow: string;
  title: string;
  /** Optional trailing phrase rendered with hero-gradient-text */
  titleAccent?: string;
  support?: string;
  image?: { src: string; alt: string };
  className?: string;
};

/**
 * Shared inner-page hero — matches landing typography (section-title scale),
 * light brand band, and optional curved photo edge.
 */
export function PageHero({
  crumbs,
  eyebrow,
  title,
  titleAccent,
  support,
  image,
  className,
}: PageHeroProps) {
  return (
    <header
      className={cn(
        "relative z-[1] overflow-visible bg-[#F5F9FC] pt-10 pb-16 md:pt-12 md:pb-20",
        className,
      )}
    >
      <SectionEdge fill="#F5F9FC" variant="soft" position="bottom" />
      <Container className="relative z-10">
        <RevealOnScroll>
          <Breadcrumb items={[{ label: "Home", href: "/" }, ...crumbs]} />
          <p className="mt-8 inline-flex items-center rounded-full bg-[#EFF6FF] px-3.5 py-1.5 text-[0.7rem] font-semibold tracking-[0.14em] text-[#1E60FF] uppercase">
            {eyebrow}
          </p>
          <div
            className={
              image
                ? "mt-5 grid items-center gap-10 lg:grid-cols-12 lg:gap-12"
                : "mt-5"
            }
          >
            <div className={image ? "lg:col-span-6" : "max-w-3xl"}>
              <h1 className="section-title">
                {title}
                {titleAccent ? (
                  <>
                    {" "}
                    <span className="hero-gradient-text">{titleAccent}</span>
                  </>
                ) : null}
              </h1>
              {support ? (
                <p className="mt-5 max-w-xl text-base leading-relaxed text-[#64748B] md:text-lg">
                  {support}
                </p>
              ) : null}
            </div>
            {image ? (
              <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] shadow-[0_24px_60px_rgba(5,25,55,0.12)] md:rounded-[1.75rem] lg:col-span-6">
                {/* Native img — next/image fill styles (0 vs "0px") + extension blur mismatch SSR */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image.src}
                  alt={image.alt}
                  decoding="async"
                  fetchPriority="high"
                  className="absolute inset-0 h-full w-full object-cover"
                  suppressHydrationWarning
                />
              </div>
            ) : null}
          </div>
        </RevealOnScroll>
      </Container>
    </header>
  );
}
