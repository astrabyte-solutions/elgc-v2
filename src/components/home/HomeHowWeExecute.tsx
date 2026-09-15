"use client";

import {
  MessagesSquare,
  ScanSearch,
  DraftingCompass,
  Factory,
  HardHat,
  ClipboardCheck,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { HomeSectionHeading } from "@/components/home/HomeSectionHeading";
import { BlueprintIllustration } from "@/components/home/BlueprintIllustration";
import {
  HOME_SECTION_CONTAINER,
  HOME_SECTION_HEADING_MB,
  HOME_SECTION_PY,
} from "@/lib/home-section-styles";

const steps: { step: string; title: string; icon: LucideIcon }[] = [
  { step: "01", title: "Understand the operating environment", icon: MessagesSquare },
  { step: "02", title: "Verify site conditions", icon: ScanSearch },
  { step: "03", title: "Define scope and interfaces", icon: DraftingCompass },
  { step: "04", title: "Plan resources and controls", icon: Factory },
  { step: "05", title: "Execute and adapt", icon: HardHat },
  { step: "06", title: "Test, hand over and close out", icon: ClipboardCheck },
];

function ProcessStep({ step, title, icon: Icon }: (typeof steps)[number]) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex h-[68px] w-[68px] items-center justify-center rounded-full border-2 border-[#93c5fd] bg-white shadow-[0_2px_12px_rgba(37,99,235,0.08)]">
        <Icon className="h-7 w-7 text-[#2563eb]" strokeWidth={1.4} />
      </div>
      <p className="mt-3 text-sm font-bold text-[#2563eb]">{step}</p>
      <p className="mt-1 max-w-[140px] text-xs font-bold leading-snug text-[#0f2744] sm:text-[13px]">
        {title}
      </p>
    </div>
  );
}

function StepConnector() {
  return (
    <div className="flex flex-1 items-center self-start pt-[34px]">
      <div className="flex w-full items-center">
        <div className="h-0 flex-1 border-t-2 border-dashed border-[#93c5fd]" />
        <ChevronRight className="-ml-0.5 h-4 w-4 shrink-0 text-[#93c5fd]" strokeWidth={2.5} />
      </div>
    </div>
  );
}

export function HomeHowWeExecute() {
  return (
    <AnimatedSection className={`relative overflow-hidden bg-white ${HOME_SECTION_PY}`}>
      <div className="pointer-events-none absolute top-6 right-0 hidden w-[36%] opacity-[0.2] lg:block">
        <BlueprintIllustration className="h-auto w-full text-[#6baed6]" />
      </div>

      <div className={`relative ${HOME_SECTION_CONTAINER}`}>
        <HomeSectionHeading
          title="Control Before Activity. Verification Before Commitment."
          className={HOME_SECTION_HEADING_MB}
        />

        {/* Desktop timeline */}
        <div className="hidden lg:flex lg:items-start">
          {steps.map((step, index) => (
            <div key={step.step} className="flex min-w-0 flex-1 items-start">
              <ProcessStep {...step} />
              {index < steps.length - 1 && <StepConnector />}
            </div>
          ))}
        </div>

        {/* Mobile / tablet grid */}
        <StaggerContainer className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:hidden">
          {steps.map((step) => (
            <StaggerItem key={step.step}>
              <ProcessStep {...step} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
