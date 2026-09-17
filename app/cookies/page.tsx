import type { Metadata } from "next";
import { PageHero } from "@/components/page/PageHero";
import { LegalSections } from "@/components/page/LegalSections";
import { legalPage } from "@/content/legal";

export const metadata: Metadata = {
  title: legalPage.cookies.metaTitle,
};

export default function CookiesPage() {
  const { hero, sections } = legalPage.cookies;
  return (
    <main className="flex-1">
      <PageHero
        crumbs={[{ label: "Cookies" }]}
        eyebrow={hero.eyebrow}
        title={hero.title}
        support={hero.support}
      />
      <LegalSections sections={sections} />
    </main>
  );
}
