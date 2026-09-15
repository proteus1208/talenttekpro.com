import type { Metadata } from "next";
import { PageHero } from "@/components/page/PageHero";
import { PageCta } from "@/components/page/PageCta";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { BlogIndex } from "@/components/blog/BlogIndex";
import { blogPage } from "@/content/blog";
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
        support={blogPage.hero.support}
      />

      <section className="section-dark border-t border-border section-pad">
        <Container>
          <RevealOnScroll>
            <BlogIndex />
          </RevealOnScroll>
        </Container>
      </section>

      <PageCta
        headline="Want notes like these on your roadmap?"
        support="Talk to us about talent, delivery, or both."
        primary={cta.primary}
        showEmail
      />
    </main>
  );
}
