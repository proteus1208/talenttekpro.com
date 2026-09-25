import type { Metadata } from "next";
import { PageHero } from "@/components/page/PageHero";
import { PageCta } from "@/components/page/PageCta";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { ScrollShape } from "@/components/effects/ScrollShape";
import { SoftRegion } from "@/components/effects/SoftRegion";
import { SectionEdge } from "@/components/ui/SectionShell";
import { BlogIndex } from "@/components/blog/BlogIndex";
import { blogPage } from "@/content/blog";
import { media } from "@/content/media";
import { cta } from "@/content/site";

export const metadata: Metadata = {
  title: blogPage.metaTitle,
  description: blogPage.metaDescription,
};

export default function BlogPage() {
  return (
    <main className="flex-1">
      <PageHero
        eyebrow={blogPage.hero.eyebrow}
        title={blogPage.hero.title}
        titleAccent={blogPage.hero.titleAccent}
        support={blogPage.hero.support}
        image={media.blogHero}
      />

      <section className="relative z-[1] overflow-visible bg-white section-pad !py-14 md:!py-16">
        <SectionEdge fill="#ffffff" variant="soft" position="top" />
        <Container className="relative z-10">
          <RevealOnScroll>
            <dl className="grid grid-cols-3 gap-4 md:gap-6">
              {blogPage.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[1.25rem] bg-[#F5F9FC] px-4 py-5 md:px-6 md:py-6"
                >
                  <dt className="text-[0.7rem] font-semibold tracking-[0.14em] text-[#94A3B8] uppercase">
                    {stat.label}
                  </dt>
                  <dd className="font-display mt-2 text-2xl font-bold tracking-tight text-[#1E60FF] md:text-3xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </RevealOnScroll>
        </Container>
      </section>

      <section className="relative z-[1] overflow-visible bg-[#F0F7FC] section-pad">
        <SectionEdge fill="#F0F7FC" variant="wave" position="top" />
        <ScrollShape
          className="top-16 -right-8 h-40 w-48 text-[#1E60FF] md:h-52 md:w-60"
          reverse
        >
          <SoftRegion variant="bean" />
        </ScrollShape>

        <Container className="relative z-10">
          <RevealOnScroll>
            <p className="text-[0.8125rem] font-medium tracking-[0.16em] text-[#475569] uppercase">
              Articles
            </p>
            <span className="mt-3 block h-px w-10 bg-[#1E60FF]" aria-hidden />
            <h2 className="section-title mt-5">
              The latest{" "}
              <span className="hero-gradient-text">articles.</span>
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#64748B]">
              Filter by topic, then open any note for the full write-up:
              takeaways, tradeoffs, and what we actually ship.
            </p>
            <div className="mt-10">
              <BlogIndex />
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      <PageCta
        headline={blogPage.cta.headline}
        headlineAccent={blogPage.cta.headlineAccent}
        support={blogPage.cta.support}
        primary={cta.primary}
        showEmail
      />
    </main>
  );
}
