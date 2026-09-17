import type { Metadata } from "next";
import { PageHero } from "@/components/page/PageHero";
import { LegalSections } from "@/components/page/LegalSections";
import { legalPage } from "@/content/legal";

export const metadata: Metadata = {
  title: legalPage.terms.metaTitle,
};

export default function TermsPage() {
  const { hero, sections } = legalPage.terms;
  return (
    <main className="flex-1">
      <PageHero
        crumbs={[{ label: "Terms" }]}
        eyebrow={hero.eyebrow}
        title={hero.title}
        support={hero.support}
      />
      <LegalSections sections={sections} />
    </main>
  );
}
