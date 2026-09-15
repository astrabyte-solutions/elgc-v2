"use client";

import { getServiceBySlug } from "@/lib/data/services";
import { ServicePageTemplate } from "@/components/pages/ServicePageTemplate";

const service = getServiceBySlug("shutdowns-revamps-plant-modifications")!;

export function ShutdownsRevampsServicePage() {
  return <ServicePageTemplate service={service} />;
}
