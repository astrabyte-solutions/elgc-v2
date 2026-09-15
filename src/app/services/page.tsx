"use client";

import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesListSection } from "@/components/services/ServicesListSection";
import { CTABanner } from "@/components/layout/CTABanner";

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesListSection />

      <CTABanner
        title="Need a reliable execution partner?"
        subtitle="Let's discuss your project requirements and build something great together."
        primaryLabel="Discuss Your Project"
        secondaryLabel="Download Company Profile"
        secondaryHref="#"
      />
    </>
  );
}
