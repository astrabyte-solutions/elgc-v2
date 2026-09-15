"use client";

import { getServiceBySlug } from "@/lib/data/services";
import { ServicePageTemplate } from "@/components/pages/ServicePageTemplate";

const service = getServiceBySlug("industrial-civil-works")!;

export function IndustrialCivilWorksServicePage() {
  return <ServicePageTemplate service={service} />;
}
