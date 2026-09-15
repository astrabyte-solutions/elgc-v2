"use client";

import { getServiceBySlug } from "@/lib/data/services";
import { ServicePageTemplate } from "@/components/pages/ServicePageTemplate";

const service = getServiceBySlug("epc-procurement-project-management")!;

export function EpcProjectManagementServicePage() {
  return <ServicePageTemplate service={service} />;
}
