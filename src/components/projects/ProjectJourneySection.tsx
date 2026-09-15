"use client";

import Image from "next/image";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { IMAGES } from "@/lib/images";

const journeySteps = [
  { step: "01", title: "Site Preparation", image: IMAGES.projects.shears[0] },
  { step: "02", title: "Fabrication", image: IMAGES.projects.shears[1] },
  { step: "03", title: "Erection", image: IMAGES.projects.shears[2] },
  { step: "04", title: "Installation", image: IMAGES.projects.shears[3] },
  { step: "05", title: "Testing", image: IMAGES.projects.shears[4] },
  { step: "06", title: "Commissioning", image: IMAGES.projects.shears[5] },
];

export function ProjectJourneySection() {
  return (
    <AnimatedSection className="bg-[#f8f9fb] py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-center text-xl font-bold sm:text-2xl">
          <span className="text-[#22c55e]">PROJECT JOURNEY:</span>{" "}
          <span className="text-[#0f2744]">From Concept to Commissioning</span>
        </h2>

        <StaggerContainer className="mt-12 space-y-8" stagger={0.08}>
          <div className="relative hidden lg:grid lg:grid-cols-6 lg:gap-2">
            <div
              className="absolute top-[18px] right-[6%] left-[6%] border-t-2 border-dashed border-[#cbd5e1]"
              aria-hidden
            />
            {journeySteps.map((step, i) => (
              <StaggerItem key={step.step} className="relative flex items-center justify-center gap-2">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#22c55e] text-xs font-bold text-white">
                  {step.step}
                </div>
                <span className="text-sm font-bold text-[#0f2744]">{step.title}</span>
                {i < journeySteps.length - 1 && (
                  <span className="absolute -right-1 text-lg text-[#94a3b8]" aria-hidden>
                    ›
                  </span>
                )}
              </StaggerItem>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4">
            {journeySteps.map((step) => (
              <StaggerItem key={`${step.step}-img`}>
                <div className="mb-3 text-center lg:hidden">
                  <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-[#22c55e] text-xs font-bold text-white">
                    {step.step}
                  </div>
                  <h4 className="text-sm font-bold text-[#0f2744]">{step.title}</h4>
                </div>
                <div className="relative h-24 overflow-hidden rounded-lg sm:h-28 lg:h-32">
                  <Image src={step.image} alt={step.title} fill className="object-cover" sizes="200px" />
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
