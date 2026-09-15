import type { Metadata } from "next";
import { PageHero } from "@/components/page/PageHero";
import { PageCta } from "@/components/page/PageCta";
import { Container } from "@/components/ui/Container";
import { FaqList } from "@/components/page/FaqList";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { faqPage } from "@/content/faq";
import { cta } from "@/content/site";

export const metadata: Metadata = {
  title: faqPage.metaTitle,
  description: faqPage.metaDescription,
};

export default function FaqPage() {
  return (
    <main className="flex-1">
      <PageHero
        crumbs={[{ label: "FAQ" }]}
        eyebrow={faqPage.hero.eyebrow}
        title={faqPage.hero.title}
        support={faqPage.hero.support}
      />

      <section className="section-dark border-t border-border section-pad">
        <Container className="max-w-3xl">
          <RevealOnScroll>
            <FaqList items={faqPage.items} />
          </RevealOnScroll>
        </Container>
      </section>

      <PageCta
        headline={faqPage.cta.headline}
        support={faqPage.cta.support}
        primary={cta.primary}
      />
    </main>
  );
}
