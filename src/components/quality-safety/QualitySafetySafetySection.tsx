"use client";

import Image from "next/image";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { QUALITY_SAFETY_IMAGES, QUALITY_SAFETY_SAFETY_PRINCIPLES } from "@/lib/data/quality-safety";
import { getQualitySafetyIcon } from "@/lib/quality-safety-icons";

export function QualitySafetySafetySection() {
  return (
    <AnimatedSection className="bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-3 lg:px-8">
        <p className="mb-10 text-center text-sm font-bold tracking-[0.14em] text-[#22c55e] uppercase">
          Safety at ELGC
        </p>

        <StaggerContainer className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <StaggerItem>
            <div className="relative min-h-[300px] overflow-hidden rounded-xl sm:min-h-[380px] lg:min-h-[420px]">
              <Image
                src={QUALITY_SAFETY_IMAGES.safety}
                alt="Safety at ELGC"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 560px"
              />
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="grid gap-6 sm:grid-cols-2">
              {QUALITY_SAFETY_SAFETY_PRINCIPLES.map((principle) => {
                const Icon = getQualitySafetyIcon(principle.iconName);
                return (
                  <div key={principle.title} className="flex gap-3">
                    <Icon className="mt-0.5 h-8 w-8 shrink-0 text-[#22c55e]" strokeWidth={1.4} />
                    <div>
                      <h3 className="text-sm font-bold text-[#0f2744] sm:text-[15px]">
                        {principle.title}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-[#5a6472] sm:text-[13px]">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
