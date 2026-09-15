import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Breadcrumb, type Crumb } from "@/components/page/Breadcrumb";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";

type PageHeroProps = {
  crumbs: Crumb[];
  eyebrow: string;
  title: string;
  support?: string;
  image?: { src: string; alt: string };
};

export function PageHero({ crumbs, eyebrow, title, support, image }: PageHeroProps) {
  return (
    <header className="section-dark border-b border-border section-pad !pb-12 md:!pb-16">
      <Container>
        <RevealOnScroll>
          <Breadcrumb items={[{ label: "Home", href: "/" }, ...crumbs]} />
          <p className="font-display mt-8 text-sm font-medium tracking-[0.18em] text-[#1E60FF] uppercase">
            {eyebrow}
          </p>
          <div
            className={
              image
                ? "mt-4 grid items-end gap-10 lg:grid-cols-12 lg:gap-12"
                : "mt-4"
            }
          >
            <div className={image ? "lg:col-span-6" : "max-w-3xl"}>
              <h1 className="font-display text-4xl font-semibold tracking-tight text-text md:text-5xl">
                {title}
              </h1>
              {support ? (
                <p className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">
                  {support}
                </p>
              ) : null}
            </div>
            {image ? (
              <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-border lg:col-span-6">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 560px"
                  priority
                />
              </div>
            ) : null}
          </div>
        </RevealOnScroll>
      </Container>
    </header>
  );
}
