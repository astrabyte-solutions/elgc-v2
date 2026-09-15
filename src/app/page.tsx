"use client";

import { HomeHero } from "@/components/home/HomeHero";
import { HomeServicesSection } from "@/components/home/HomeServicesSection";
import { HomeProjectStories } from "@/components/home/HomeProjectStories";
import { HomeWhyChoose } from "@/components/home/HomeWhyChoose";
import { HomeHowWeExecute } from "@/components/home/HomeHowWeExecute";
import { HomeBlogsSection } from "@/components/home/HomeBlogsSection";
import { HomeQualitySection } from "@/components/home/HomeQualitySection";
import { HomeClientsSection } from "@/components/home/HomeClientsSection";
import { CTABanner } from "@/components/layout/CTABanner";

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <HomeServicesSection />

      <HomeProjectStories />

      <HomeWhyChoose />

      <HomeHowWeExecute />

      <HomeBlogsSection />

      <HomeQualitySection />

      <HomeClientsSection />

      <CTABanner
        title="Have an upcoming industrial or construction project?"
        subtitle="Let our experts deliver the right solution for your needs."
      />
    </>
  );
}
