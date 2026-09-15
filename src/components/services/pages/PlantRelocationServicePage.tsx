"use client";

import { getServiceBySlug } from "@/lib/data/services";
import { ServicePageTemplate } from "@/components/pages/ServicePageTemplate";

const service = getServiceBySlug("plant-relocation-dismantling")!;

export function PlantRelocationServicePage() {
  return <ServicePageTemplate service={service} />;
}
