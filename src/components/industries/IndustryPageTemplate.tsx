"use client";

import { HardHat } from "lucide-react";
import { getIndustryBySlug } from "@/lib/data/industries";
import { IndustryDetailHero } from "./detail/IndustryDetailHero";
import { IndustryDetailSolutionsSection } from "./detail/IndustryDetailSolutionsSection";
import { IndustryDetailExpertiseSection } from "./detail/IndustryDetailExpertiseSection";
import { IndustryDetailBenefitsSection } from "./detail/IndustryDetailBenefitsSection";
import { CTABanner } from "@/components/layout/CTABanner";

interface IndustryPageTemplateProps {
  slug: string;
}

export function IndustryPageTemplate({ slug }: IndustryPageTemplateProps) {
  const industry = getIndustryBySlug(slug);
  if (!industry) return null;

  return (
    <>
      <IndustryDetailHero industry={industry} />
      <IndustryDetailSolutionsSection industry={industry} />
      <IndustryDetailExpertiseSection industry={industry} />
      <IndustryDetailBenefitsSection industry={industry} />
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
