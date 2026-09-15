"use client";

import { getServiceBySlug } from "@/lib/data/services";
import { ServicePageTemplate } from "@/components/pages/ServicePageTemplate";

const service = getServiceBySlug("turnkey-environmental-pollution-control")!;

export function TurnkeyEnvironmentalServicePage() {
  return <ServicePageTemplate service={service} />;
}
