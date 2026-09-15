"use client";

import { getServiceBySlug } from "@/lib/data/services";
import { ServicePageTemplate } from "@/components/pages/ServicePageTemplate";

const service = getServiceBySlug("fabrication-works")!;

export function FabricationWorksServicePage() {
  return <ServicePageTemplate service={service} />;
}
