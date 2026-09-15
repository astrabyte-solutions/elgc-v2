"use client";

import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { type IndustryWithDetail } from "@/lib/data/industries";
import { getIndustryIcon } from "@/lib/industry-icons";

interface IndustryDetailSolutionsSectionProps {
  industry: IndustryWithDetail;
}

export function IndustryDetailSolutionsSection({ industry }: IndustryDetailSolutionsSectionProps) {
  const { detail } = industry;

  return (
    <AnimatedSection className="bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-3 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-12 xl:grid-cols-[minmax(0,360px)_1fr]">
          <div className="lg:pt-2">
            <p className="mb-2 text-sm font-bold tracking-[0.14em] text-[#22c55e] uppercase">
              Our Solutions
            </p>
            <h2 className="text-2xl font-bold leading-tight text-[#0f2744] sm:text-3xl lg:text-[2rem]">
              {detail.solutionsHeading}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#5a6472] sm:text-[15px]">
              {detail.solutionsDescription}
            </p>
            <div className="mt-6">
              <Button href="/contact">Discuss Your Project</Button>
            </div>
          </div>

          <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {detail.solutions.map((solution) => {
              const Icon = getIndustryIcon(solution.iconName);
              return (
                <StaggerItem key={solution.title}>
                  <div className="flex h-full flex-col items-center rounded-lg border border-[#e8ecf0] bg-white px-4 py-6 text-center shadow-[0_2px_16px_rgba(15,39,68,0.06)]">
                    <Icon className="mb-4 h-9 w-9 text-[#22c55e]" strokeWidth={1.4} />
                    <h3 className="mb-2 text-sm font-bold text-[#0f2744] sm:text-[15px]">
                      {solution.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-[#5a6472] sm:text-[13px]">
                      {solution.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </AnimatedSection>
  );
}
