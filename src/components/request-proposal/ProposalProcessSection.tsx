"use client";

import { ChevronRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { PROPOSAL_PROCESS_STEPS } from "@/lib/data/request-proposal";
import { getProposalIcon } from "@/lib/proposal-icons";

export function ProposalProcessSection() {
  return (
    <AnimatedSection className="bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-3 lg:px-8">
        <p className="mb-10 text-center text-sm font-bold tracking-[0.14em] text-[#22c55e] uppercase">
          Our Proposal Process
        </p>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
          {PROPOSAL_PROCESS_STEPS.map((step, index) => {
            const Icon = getProposalIcon(step.iconName);
            return (
              <div key={step.title} className="relative flex flex-col items-center text-center">
                <Icon className="mb-3 h-9 w-9 text-[#5a6472]" strokeWidth={1.4} />
                <div className="mb-3 flex h-7 w-7 items-center justify-center rounded-full bg-[#22c55e] text-xs font-bold text-white">
                  {step.step}
                </div>
                <h3 className="mb-1.5 text-sm font-bold text-[#0f2744] sm:text-[15px]">
                  {step.title}
                </h3>
                <p className="text-xs leading-relaxed text-[#5a6472] sm:text-[13px]">
                  {step.description}
                </p>

                {index < PROPOSAL_PROCESS_STEPS.length - 1 && (
                  <ChevronRight
                    className="absolute top-10 -right-2 hidden h-5 w-5 text-[#c5cdd6] lg:block"
                    aria-hidden
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
