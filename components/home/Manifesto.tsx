import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { SectionEdge } from "@/components/ui/SectionShell";
import { home } from "@/content/home";
import { media } from "@/content/media";

export function Manifesto() {
  return (
    <section className="relative z-[1] overflow-visible bg-white pt-20 pb-24 md:pt-24 md:pb-28">
      <SectionEdge fill="#ffffff" variant="wave" position="top" />

      {/* Different vocabulary from Services: rounded square, diamond, arc */}
      <svg
        className="pointer-events-none absolute top-[36%] -left-16 h-52 w-52 text-[#E8F1FF] md:h-64 md:w-64"
        viewBox="0 0 200 200"
        fill="currentColor"
        aria-hidden
      >
        <rect x="28" y="28" width="144" height="144" rx="36" />
      </svg>
      <svg
        className="pointer-events-none absolute -right-10 bottom-8 h-48 w-48 text-[#DFF6FB] md:h-60 md:w-60"
        viewBox="0 0 200 200"
        fill="currentColor"
        aria-hidden
      >
        <path d="M100 18 L182 100 L100 182 L18 100 Z" />
      </svg>
      <svg
        className="pointer-events-none absolute top-[18%] right-[22%] hidden h-36 w-36 text-[#CFE8FF] lg:block"
        viewBox="0 0 160 160"
        fill="none"
        stroke="currentColor"
        strokeWidth="16"
        strokeLinecap="round"
        aria-hidden
      >
        <path d="M28 110 A60 60 0 0 1 132 110" />
      </svg>

      <Container className="relative z-10">
        <RevealOnScroll>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
            <div className="max-w-xl">
              <h2 className="section-title">
                {home.manifesto.headline}{" "}
                <span className="hero-gradient-text">
                  {home.manifesto.headlineAccent}
                </span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[#64748B] md:text-lg">
                {home.manifesto.body}
              </p>
            </div>

            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl md:rounded-3xl">
              <Image
                src={media.manifesto.src}
                alt={media.manifesto.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 560px"
              />
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
