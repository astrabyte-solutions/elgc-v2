"use client";

import Image from "next/image";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { type IndustryWithDetail } from "@/lib/data/industries";
import { getIndustryIcon } from "@/lib/industry-icons";

interface IndustryDetailExpertiseSectionProps {
  industry: IndustryWithDetail;
}

export function IndustryDetailExpertiseSection({ industry }: IndustryDetailExpertiseSectionProps) {
  const { detail } = industry;

  return (
    <AnimatedSection className="bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-3 lg:px-8">
        <StaggerContainer className="grid gap-10 lg:grid-cols-3 lg:gap-8">
          <StaggerItem>
            <p className="mb-2 text-sm font-bold tracking-[0.14em] text-[#22c55e] uppercase">
              Our Expertise
            </p>
            <h2 className="text-2xl font-bold leading-tight text-[#0f2744] sm:text-3xl lg:text-[1.85rem]">
              {detail.expertiseHeading}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#5a6472] sm:text-[15px]">
              {detail.expertiseDescription}
            </p>
            <ul className="mt-6 space-y-3">
              {detail.expertiseChecklist.map((item) => {
                const CheckIcon = getIndustryIcon("CheckCircle2");
                return (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#22c55e]" strokeWidth={1.5} />
                    <span className="text-sm text-[#374151] sm:text-[15px]">{item}</span>
                  </li>
                );
              })}
            </ul>
          </StaggerItem>

          <StaggerItem>
            <div className="relative min-h-[280px] overflow-hidden rounded-xl sm:min-h-[340px] lg:min-h-[400px]">
              <Image
                src={detail.expertiseImage}
                alt={industry.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 400px"
              />
            </div>
          </StaggerItem>

          <StaggerItem>
            <p className="mb-2 text-sm font-bold tracking-[0.14em] text-[#22c55e] uppercase">
              Types of Projects
            </p>
            <div className="space-y-6">
              {detail.projectTypes.map((project) => {
                const Icon = getIndustryIcon(project.iconName);
                return (
                  <div key={project.title} className="flex gap-3">
                    <Icon className="mt-0.5 h-8 w-8 shrink-0 text-[#22c55e]" strokeWidth={1.4} />
                    <div>
                      <h3 className="text-sm font-bold text-[#0f2744] sm:text-[15px]">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-[#5a6472] sm:text-[13px]">
                        {project.description}
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
