"use client";

import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { QUALITY_SAFETY_EXCELLENCE } from "@/lib/data/quality-safety";
import { getQualitySafetyIcon } from "@/lib/quality-safety-icons";

function cellBorder(index: number, lastIndex: number) {
  if (index === lastIndex) return "";
  return "border-b border-[#e8ecf0] lg:border-r lg:border-b-0";
}

export function QualitySafetyExcellenceSection() {
  const lastIndex = QUALITY_SAFETY_EXCELLENCE.length - 1;

  return (
    <AnimatedSection className="bg-[#eef1f4] py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-3 lg:px-8">
        <p className="mb-10 text-center text-sm font-bold tracking-[0.14em] text-[#22c55e] uppercase">
          Quality Excellence
        </p>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6">
          {QUALITY_SAFETY_EXCELLENCE.map((item, index) => {
            const Icon = getQualitySafetyIcon(item.iconName);
            return (
              <StaggerItem
                key={item.title}
                className={`flex flex-col items-center px-4 py-6 text-center sm:px-3 lg:py-4 ${cellBorder(index, lastIndex)}`}
              >
                <Icon className="mb-3 h-9 w-9 text-[#22c55e]" strokeWidth={1.4} />
                <h3 className="mb-2 text-sm font-bold text-[#0f2744] sm:text-[15px]">{item.title}</h3>
                <p className="text-xs leading-relaxed text-[#5a6472] sm:text-[13px]">
                  {item.description}
                </p>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
