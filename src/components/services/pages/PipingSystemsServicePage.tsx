"use client";

import { getServiceBySlug } from "@/lib/data/services";
import { ServicePageTemplate } from "@/components/pages/ServicePageTemplate";

const service = getServiceBySlug("piping-systems")!;

export function PipingSystemsServicePage() {
  return <ServicePageTemplate service={service} />;
}
