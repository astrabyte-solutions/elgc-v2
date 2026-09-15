"use client";

import { getServiceBySlug } from "@/lib/data/services";
import { ServicePageTemplate } from "@/components/pages/ServicePageTemplate";

const service = getServiceBySlug("plant-improvement-inspection-rectification")!;

export function PlantImprovementInspectionServicePage() {
  return <ServicePageTemplate service={service} />;
}
