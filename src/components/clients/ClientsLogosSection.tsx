"use client";

import Image from "next/image";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { CLIENT_LOGOS } from "@/lib/data/clients";

export function ClientsLogosSection() {
  return (
    <AnimatedSection className="bg-[#eef1f4] py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-3 lg:px-8">
        <div className="mb-10 flex items-center justify-center gap-4">
          <div className="hidden h-px flex-1 bg-[#22c55e]/40 sm:block" aria-hidden />
          <p className="shrink-0 text-sm font-bold tracking-[0.14em] text-[#22c55e] uppercase">
            Our Valued Clients
          </p>
          <div className="hidden h-px flex-1 bg-[#22c55e]/40 sm:block" aria-hidden />
        </div>

        <StaggerContainer className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5">
          {CLIENT_LOGOS.map((client) => (
            <StaggerItem key={client.slug} interactive>
              <div className="premium-card flex h-[92px] items-center justify-center rounded-lg border border-[#e8ecf0] bg-white px-4 py-3 shadow-[0_2px_12px_rgba(15,39,68,0.05)] sm:h-[100px]">
                <div className="relative h-12 w-full sm:h-14">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 50vw, 160px"
                  />
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
