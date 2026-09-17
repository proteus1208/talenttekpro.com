import type { Metadata } from "next";
import { PageHero } from "@/components/page/PageHero";
import { LegalSections } from "@/components/page/LegalSections";
import { legalPage } from "@/content/legal";

export const metadata: Metadata = {
  title: legalPage.privacy.metaTitle,
};

export default function PrivacyPage() {
  const { hero, sections } = legalPage.privacy;
  return (
    <main className="flex-1">
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        support={hero.support}
      />
      <LegalSections sections={sections} />
    </main>
  );
}
