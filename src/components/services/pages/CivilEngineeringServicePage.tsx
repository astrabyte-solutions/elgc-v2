"use client";

import { getServiceBySlug } from "@/lib/data/services";
import { ServicePageTemplate } from "@/components/pages/ServicePageTemplate";

const service = getServiceBySlug("civil-engineering")!;

export function CivilEngineeringServicePage() {
  return <ServicePageTemplate service={service} />;
}
