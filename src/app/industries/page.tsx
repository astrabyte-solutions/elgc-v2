import { HardHat } from "lucide-react";
import { IndustriesHero } from "@/components/industries/IndustriesHero";
import { IndustriesGridSection } from "@/components/industries/IndustriesGridSection";
import { IndustriesWhyPartnerSection } from "@/components/industries/IndustriesWhyPartnerSection";
import { CTABanner } from "@/components/layout/CTABanner";

export default function IndustriesPage() {
  return (
    <>
      <IndustriesHero />
      <IndustriesGridSection />
      <IndustriesWhyPartnerSection />
      <CTABanner
        icon={<HardHat className="h-7 w-7" strokeWidth={1.5} />}
        title={
          <>
            Let&apos;s Build <span className="text-green">the Future</span> Together
          </>
        }
        subtitle="Tell us about your project and discover how ELGC can add value to your business."
        primaryLabel="Discuss Your Project"
        primaryHref="/contact"
        secondaryLabel="Download Company Profile"
        secondaryHref="#"
      />
    </>
  );
}
