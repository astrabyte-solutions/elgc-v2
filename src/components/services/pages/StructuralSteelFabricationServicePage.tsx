"use client";

import { getServiceBySlug } from "@/lib/data/services";
import { ServicePageTemplate } from "@/components/pages/ServicePageTemplate";

const service = getServiceBySlug("structural-steel-fabrication")!;

export function StructuralSteelFabricationServicePage() {
  return <ServicePageTemplate service={service} />;
}
