import { Hero } from "@/components/home/Hero";
import { Solutions } from "@/components/home/Solutions";
import { Manifesto } from "@/components/home/Manifesto";
import { Impact } from "@/components/home/Impact";
import { Platform } from "@/components/home/Platform";
import { CaseStudies } from "@/components/home/CaseStudies";
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
    <main className="relative z-0 flex-1 overflow-x-clip">
      <Hero />
      <Manifesto />
      <Impact />
      <Platform />
      <CaseStudies />
      <Solutions />
      <Approach />
      <Industries />
      <PartnersTrust />
      <Testimonials />
      <CareersTeaser />
      <BlogTeaser />
      <FaqTeaser />
      <GetStarted />
    </main>
  );
}
