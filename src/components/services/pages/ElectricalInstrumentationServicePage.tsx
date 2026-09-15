"use client";

import { getServiceBySlug } from "@/lib/data/services";
import { ServicePageTemplate } from "@/components/pages/ServicePageTemplate";

const service = getServiceBySlug("electrical-instrumentation")!;

export function ElectricalInstrumentationServicePage() {
  return <ServicePageTemplate service={service} />;
}
