import type { Metadata } from "next";
import { PageHero } from "@/components/page/PageHero";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { ContactForm } from "@/components/contact/ContactForm";
import { contactPage } from "@/content/contact";
import { media } from "@/content/media";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: contactPage.metaTitle,
  description: contactPage.metaDescription,
};

export default function ContactPage() {
  return (
    <main className="flex-1">
      <PageHero
        eyebrow={contactPage.hero.eyebrow}
        title={contactPage.hero.title}
        support={contactPage.hero.support}
        image={{ src: media.contactHero.src, alt: media.contactHero.alt }}
      />

      <section className="section-elevated border-t border-border section-pad">
        <Container>
          <RevealOnScroll>
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <ContactForm />
              </div>
              <aside className="lg:col-span-5">
                <p className="text-sm text-faint uppercase tracking-wide">Direct</p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-3 inline-block text-lg font-medium text-teal hover:text-[#5AE0FF] hover:underline"
                >
                  {site.email}
                </a>
                <p className="mt-6 text-sm leading-relaxed text-muted">
                  Prefer email? Include whether you need Talent, Delivery, or Both —
                  and any timeline constraints.
                </p>
              </aside>
            </div>
          </RevealOnScroll>
        </Container>
      </section>
    </main>
  );
}
