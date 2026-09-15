"use client";

import {
  Lightbulb,
  Building2,
  Calendar,
  Calculator,
  Handshake,
  HardHat,
  BarChart3,
  FolderCheck,
  Wind,
  Droplets,
  Cable,
  Settings,
  type LucideIcon,
} from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { type Service } from "@/lib/data/services";

const capabilityIcons: LucideIcon[] = [
  Lightbulb,
  Building2,
  Calendar,
  Calculator,
  Handshake,
  HardHat,
  BarChart3,
  FolderCheck,
  Wind,
  Droplets,
  Cable,
  Settings,
];

interface ServiceDetailCapabilitiesSectionProps {
  service: Service;
}

export function ServiceDetailCapabilitiesSection({ service }: ServiceDetailCapabilitiesSectionProps) {
  const { capabilities, capabilityBullets } = service;
  const label = service.capabilitiesLabel ?? "Our Capabilities";
  const bg =
    service.capabilitiesBg === "grey"
      ? "bg-[#eef1f4]"
      : service.capabilitiesBg === "white"
        ? "bg-white"
        : "service-detail-dots";

  const count = capabilities.length;
  const gridCols =
    count === 6
      ? "sm:grid-cols-2 lg:grid-cols-3"
      : count === 7
        ? "sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7"
        : "sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8";

  const hasBullets = Boolean(capabilityBullets);

  return (
    <AnimatedSection className={`${bg} py-14 lg:py-16`}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <p className="mb-8 text-sm font-bold tracking-[0.16em] text-[#22c55e] uppercase">{label}</p>

        <StaggerContainer className={`grid gap-4 ${gridCols}`}>
          {capabilities.map((cap, i) => {
            const Icon = capabilityIcons[i % capabilityIcons.length];
            const bullets = capabilityBullets?.[cap];

            return (
              <StaggerItem key={cap}>
                <div
                  className={`flex h-full flex-col rounded-lg border border-[#e8ecf0] bg-white px-4 py-5 shadow-[0_2px_16px_rgba(15,39,68,0.07)] ${
                    hasBullets ? "text-center" : ""
                  }`}
                >
                  <Icon
                    className={`mb-4 h-9 w-9 text-[#22c55e] ${hasBullets ? "mx-auto" : ""}`}
                    strokeWidth={1.4}
                  />
                  <h3
                    className={`mb-3 text-sm font-bold leading-snug text-[#0f2744] ${
                      hasBullets ? "text-center" : ""
                    }`}
                  >
                    {cap}
                  </h3>
                  {bullets ? (
                    <ul className="mb-4 space-y-1 text-left text-xs text-[#5a6472]">
                      {bullets.map((b) => (
                        <li key={b}>• {b}</li>
                      ))}
                    </ul>
                  ) : (
                    <div className="flex-1" />
                  )}
                  <div
                    className={`h-[3px] w-10 rounded-sm bg-[#22c55e] ${hasBullets ? "mx-auto" : ""}`}
                    aria-hidden
                  />
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
