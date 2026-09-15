"use client";

import { getServiceBySlug } from "@/lib/data/services";
import { ServicePageTemplate } from "@/components/pages/ServicePageTemplate";

const service = getServiceBySlug("erection-works")!;

export function ErectionWorksServicePage() {
  return <ServicePageTemplate service={service} />;
}
