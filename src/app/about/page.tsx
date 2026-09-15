"use client";

import { AboutHero } from "@/components/about/AboutHero";
import { AboutWhoWeAreSection } from "@/components/about/AboutWhoWeAreSection";
import { AboutTimelineSection } from "@/components/about/AboutTimelineSection";
import { AboutTeamCapabilitiesSection } from "@/components/about/AboutTeamCapabilitiesSection";
import { AboutQualityCtaSection } from "@/components/about/AboutQualityCtaSection";

export default function AboutPage() {
  return (
    <>
      <AboutHero />

      <AboutWhoWeAreSection />

      <AboutTimelineSection />

      <AboutTeamCapabilitiesSection />

      <AboutQualityCtaSection />
    </>
  );
}
