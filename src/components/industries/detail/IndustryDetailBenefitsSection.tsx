"use client";

import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { type IndustryWithDetail } from "@/lib/data/industries";
import { getIndustryIcon } from "@/lib/industry-icons";

interface IndustryDetailBenefitsSectionProps {
  industry: IndustryWithDetail;
}

function cellBorder(index: number, lastIndex: number) {
  if (index === lastIndex) return "";
  return "border-b border-[#dde3ea] lg:border-r lg:border-b-0";
}

export function IndustryDetailBenefitsSection({ industry }: IndustryDetailBenefitsSectionProps) {
  const { detail } = industry;
  const lastIndex = detail.benefits.length - 1;

  return (
    <AnimatedSection className="bg-[#eef1f4] py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-3 lg:px-8">
        <StaggerContainer className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,300px)_1fr] lg:gap-12 xl:grid-cols-[minmax(0,340px)_1fr]">
          <StaggerItem>
            <p className="mb-2 text-sm font-bold tracking-[0.14em] text-[#22c55e] uppercase">
              Key Benefits
            </p>
            <h2 className="text-2xl font-bold leading-tight text-[#0f2744] sm:text-3xl lg:text-[2rem]">
              {detail.benefitsHeading}
            </h2>
          </StaggerItem>

          <StaggerItem>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
              {detail.benefits.map((benefit, index) => {
                const Icon = getIndustryIcon(benefit.iconName);
                return (
                  <div
                    key={benefit.title}
                    className={`flex flex-col items-center px-4 py-6 text-center sm:px-3 lg:py-4 ${cellBorder(index, lastIndex)}`}
                  >
                    <Icon className="mb-3 h-9 w-9 text-[#22c55e]" strokeWidth={1.4} />
                    <h3 className="mb-2 text-sm font-bold text-[#0f2744] sm:text-[15px]">
                      {benefit.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-[#5a6472] sm:text-[13px]">
                      {benefit.description}
                    </p>
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
