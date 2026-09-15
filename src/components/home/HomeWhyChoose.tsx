"use client";

import { Cog, Users, ShieldCheck, Puzzle, type LucideIcon } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { HOME_SECTION_CONTAINER } from "@/lib/home-section-styles";

const GREEN = "#22c55e";
const BLUE = "#60a5fa";

const items: {
  icon: LucideIcon;
  title: string;
  description: string;
  color: typeof GREEN | typeof BLUE;
}[] = [
  {
    icon: Cog,
    title: "Engineering-Driven Execution",
    description: "Engineering excellence at the core of every solution we deliver.",
    color: GREEN,
  },
  {
    icon: Users,
    title: "Experienced Technical Team",
    description: "Skilled professionals with decades of industry expertise.",
    color: BLUE,
  },
  {
    icon: ShieldCheck,
    title: "Safety & Quality Focus",
    description: "Commitment to world-class safety standards and quality.",
    color: GREEN,
  },
  {
    icon: Puzzle,
    title: "End-to-End Project Capability",
    description: "Single-point responsibility from concept to commissioning.",
    color: BLUE,
  },
];

function cellBorder(index: number, lastIndex: number) {
  if (index === lastIndex) return "";
  return "border-b border-white/25 lg:border-r lg:border-b-0";
}

function WhyChooseHeading() {
  return (
    <div>
      <h2 className="text-2xl font-bold leading-tight text-white sm:text-[1.65rem] lg:text-[1.75rem]">
        Why Choose
        <br />
        ELGC
      </h2>
      <div className="mt-4 h-[3px] w-14 rounded-sm bg-[#22c55e]" aria-hidden />
    </div>
  );
}

export function HomeWhyChoose() {
  const lastIndex = items.length;

  return (
    <AnimatedSection className="bg-[#0a1628] py-14 lg:py-16">
      <div className={HOME_SECTION_CONTAINER}>
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-5 lg:items-stretch">
          <StaggerItem
            className={`flex min-h-[152px] items-center py-8 lg:min-h-[172px] lg:py-9 lg:pr-7 ${cellBorder(0, lastIndex)}`}
          >
            <WhyChooseHeading />
          </StaggerItem>

          {items.map((item, index) => (
            <StaggerItem
              key={item.title}
              className={`flex min-h-[152px] gap-3 px-5 py-8 sm:px-4 lg:min-h-[172px] lg:py-9 ${cellBorder(index + 1, lastIndex)}`}
            >
              <item.icon
                className="mt-0.5 h-9 w-9 shrink-0"
                style={{ color: item.color }}
                strokeWidth={1.4}
              />
              <div>
                <h3 className="mb-2 text-[14px] font-bold leading-snug text-white sm:text-[15px]">
                  {item.title}
                </h3>
                <p className="text-[12px] leading-relaxed text-white/65 sm:text-[13px]">
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
