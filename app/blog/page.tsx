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
        crumbs={[{ label: "Blog" }]}
        eyebrow={blogPage.hero.eyebrow}
        title={blogPage.hero.title}
        titleAccent={blogPage.hero.titleAccent}
        support={blogPage.hero.support}
        image={{ src: media.blogHero.src, alt: media.blogHero.alt }}
      />

      <section className="relative z-[1] overflow-visible bg-white section-pad">
        <SectionEdge fill="#ffffff" variant="soft" position="top" />
        <ScrollShape
          className="top-16 -right-8 h-40 w-48 text-[#00B4FF] md:h-52 md:w-60"
          reverse
        >
          <SoftRegion variant="bean" />
        </ScrollShape>

        <Container className="relative z-10">
          <RevealOnScroll>
            <h2 className="section-title">
              The latest{" "}
              <span className="hero-gradient-text">articles.</span>
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#64748B]">
              Filter by topic — or start with the featured note.
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
