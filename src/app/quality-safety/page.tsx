import { QualitySafetyHero } from "@/components/quality-safety/QualitySafetyHero";
import { QualitySafetyApproachSection } from "@/components/quality-safety/QualitySafetyApproachSection";
import { QualitySafetyStandardsSection } from "@/components/quality-safety/QualitySafetyStandardsSection";
import { QualitySafetySafetySection } from "@/components/quality-safety/QualitySafetySafetySection";
import { QualitySafetyExcellenceSection } from "@/components/quality-safety/QualitySafetyExcellenceSection";
import { QualitySafetyCtaSection } from "@/components/quality-safety/QualitySafetyCtaSection";

export default function QualitySafetyPage() {
  return (
    <>
      <QualitySafetyHero />
      <QualitySafetyApproachSection />
      <QualitySafetyStandardsSection />
      <QualitySafetySafetySection />
      <QualitySafetyExcellenceSection />
      <QualitySafetyCtaSection />
    </>
  );
}
