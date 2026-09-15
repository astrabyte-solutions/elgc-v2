"use client";

import { getServiceBySlug } from "@/lib/data/services";
import { ServicePageTemplate } from "@/components/pages/ServicePageTemplate";

const service = getServiceBySlug("design-engineering-project-management")!;

export function DesignEngineeringServicePage() {
  return <ServicePageTemplate service={service} />;
}
