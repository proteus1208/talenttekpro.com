import { Hero } from "@/components/home/Hero";
import { Manifesto } from "@/components/home/Manifesto";
import { Impact } from "@/components/home/Impact";
import { Platform } from "@/components/home/Platform";
import { CaseStudies } from "@/components/home/CaseStudies";
import { Solutions } from "@/components/home/Solutions";
import { Industries } from "@/components/home/Industries";
import { Approach } from "@/components/home/Approach";
import { PartnersTrust } from "@/components/home/PartnersTrust";
import { Testimonials } from "@/components/home/Testimonials";
import { CareersTeaser } from "@/components/home/CareersTeaser";
import { BlogTeaser } from "@/components/home/BlogTeaser";
import { FaqTeaser } from "@/components/home/FaqTeaser";
import { GetStarted } from "@/components/home/GetStarted";

export default function HomePage() {
  return (
    <main className="flex-1">
      <Hero />
      <Manifesto />
      <Impact />
      <Platform />
      <CaseStudies />
      <Solutions />
      <Industries />
      <Approach />
      <PartnersTrust />
      <Testimonials />
      <CareersTeaser />
      <BlogTeaser />
      <FaqTeaser />
      <GetStarted />
    </main>
  );
}
