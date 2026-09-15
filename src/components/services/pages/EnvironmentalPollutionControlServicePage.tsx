"use client";

import { getServiceBySlug } from "@/lib/data/services";
import { ServicePageTemplate } from "@/components/pages/ServicePageTemplate";

const service = getServiceBySlug("environmental-pollution-control")!;

export function EnvironmentalPollutionControlServicePage() {
  return <ServicePageTemplate service={service} />;
}
