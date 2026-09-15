"use client";

import { SERVICES } from "@/lib/data/services";
import { ServicesDotBackground } from "@/components/services/ServicesDotBackground";
import { ServiceShowcaseCard } from "@/components/services/ServiceShowcaseCard";

export function ServicesListSection() {
  return (
    <section className="relative bg-[#eef1f4] pb-20 pt-24 sm:pt-28 lg:pb-24">
      <div className="relative mx-auto max-w-6xl space-y-8 px-4 sm:space-y-10 lg:px-8">
        <ServicesDotBackground count={SERVICES.length} />
        {SERVICES.map((service, index) => (
          <ServiceShowcaseCard key={service.slug} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}
