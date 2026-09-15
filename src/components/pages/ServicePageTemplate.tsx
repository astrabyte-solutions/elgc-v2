"use client";

import { type Service } from "@/lib/data/services";
import { PROJECTS } from "@/lib/data/projects";
import { ServiceDetailHero } from "@/components/services/detail/ServiceDetailHero";
import { ServiceDetailFeaturesBar } from "@/components/services/detail/ServiceDetailFeaturesBar";
import { ServiceDetailOverviewSection } from "@/components/services/detail/ServiceDetailOverviewSection";
import { ServiceDetailCapabilitiesSection } from "@/components/services/detail/ServiceDetailCapabilitiesSection";
import { ServiceDetailProcessSection } from "@/components/services/detail/ServiceDetailProcessSection";
import { ServiceDetailProjectsSection } from "@/components/services/detail/ServiceDetailProjectsSection";
import { ServiceDetailWhyChooseSection } from "@/components/services/detail/ServiceDetailWhyChooseSection";
import { ServiceDetailCta } from "@/components/services/detail/ServiceDetailCta";

interface ServicePageTemplateProps {
  service: Service;
}

function buildFallbackProjects(service: Service) {
  const related = PROJECTS.slice(0, 5);
  return {
    featured: {
      title: related[0].title,
      image: related[0].image,
      tags: [related[0].category, related[0].industry],
      href: `/projects/${related[0].slug}`,
    },
    others: related.slice(1, 5).map((p) => ({
      title: p.title,
      image: p.image,
      tags: [p.category],
      href: `/projects/${p.slug}`,
    })),
    viewAllLabel: `VIEW ALL ${service.shortTitle.toUpperCase()} PROJECTS`,
    viewAllHref: "/projects",
  };
}

export function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  const detailProjects = service.detailProjects ?? buildFallbackProjects(service);

  return (
    <>
      <div className="relative bg-[#0a1628] pb-12 sm:pb-14">
        <ServiceDetailHero service={service} />
        <ServiceDetailFeaturesBar service={service} />
      </div>

      <ServiceDetailOverviewSection service={service} />
      <ServiceDetailCapabilitiesSection service={service} />
      <ServiceDetailProcessSection service={service} />
      <ServiceDetailProjectsSection service={service} detailProjects={detailProjects} />
      <ServiceDetailWhyChooseSection service={service} />
      <ServiceDetailCta service={service} />
    </>
  );
}
