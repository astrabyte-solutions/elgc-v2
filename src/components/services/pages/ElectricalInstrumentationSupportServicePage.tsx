"use client";

import { getServiceBySlug } from "@/lib/data/services";
import { ServicePageTemplate } from "@/components/pages/ServicePageTemplate";

const service = getServiceBySlug("electrical-instrumentation-support")!;

export function ElectricalInstrumentationSupportServicePage() {
  return <ServicePageTemplate service={service} />;
}
