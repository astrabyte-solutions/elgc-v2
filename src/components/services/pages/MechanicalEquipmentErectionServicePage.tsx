"use client";

import { getServiceBySlug } from "@/lib/data/services";
import { ServicePageTemplate } from "@/components/pages/ServicePageTemplate";

const service = getServiceBySlug("mechanical-equipment-erection")!;

export function MechanicalEquipmentErectionServicePage() {
  return <ServicePageTemplate service={service} />;
}
