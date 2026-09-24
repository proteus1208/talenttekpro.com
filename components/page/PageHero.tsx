import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { SectionEdge } from "@/components/ui/SectionShell";
import { cn } from "@/lib/cn";

type PageHeroStat = {
  label: string;
  value: string;
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  /** Optional trailing phrase rendered with hero-gradient-text */
  titleAccent?: string;
  support?: string;
  image?: { src: string; alt: string };
  /** Optional metrics row under the hero copy/media */
  stats?: readonly PageHeroStat[];
  className?: string;
};

/**
 * Shared inner-page hero: matches landing typography (section-title scale),
 * light brand band, and optional curved photo edge.
 */
export function PageHero({
  eyebrow,
  title,
  titleAccent,
  support,
  image,
  stats,
  className,
}: PageHeroProps) {
  // Stats heroes use white so the curve into the next soft-blue band reads clearly
  const fill = stats && stats.length > 0 ? "#ffffff" : "#F5F9FC";

  return (
    <header
      className={cn(
        "relative z-[1] overflow-visible pt-12 pb-16 md:pt-16 md:pb-20",
        fill === "#ffffff" ? "bg-white" : "bg-[#F5F9FC]",
        className,
      )}
    >
      <SectionEdge fill={fill} variant="soft" position="bottom" />
      <Container className="relative z-10">
        <RevealOnScroll>
          <div>
            <p className="text-[0.8125rem] font-medium tracking-[0.16em] text-[#475569] uppercase md:text-sm">
              {eyebrow}
            </p>
            <span className="mt-3 block h-px w-10 bg-[#1E60FF]" aria-hidden />
          </div>
          <div
            className={
              image
                ? "mt-6 grid items-center gap-10 lg:grid-cols-12 lg:gap-12"
                : "mt-6"
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
                {/* Native img: next/image fill styles (0 vs "0px") + extension blur mismatch SSR */}
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
          {stats && stats.length > 0 ? (
            <dl
              className={cn(
                "mt-10 grid gap-5 md:gap-6",
                stats.length === 3
                  ? "grid-cols-3"
                  : "grid-cols-2 md:grid-cols-4",
              )}
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="text-[0.7rem] font-semibold tracking-[0.14em] text-[#94A3B8] uppercase">
                    {s.label}
                  </dt>
                  <dd className="font-display mt-2 text-3xl font-bold tracking-tight text-[#1E60FF] md:text-4xl">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          ) : null}
        </RevealOnScroll>
      </Container>
    </header>
  );
}
