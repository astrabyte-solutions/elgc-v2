"use client";

import {
  ClipboardList,
  Lightbulb,
  DraftingCompass,
  Users,
  Monitor,
  FileCheck,
  Scissors,
  Flame,
  Search,
  SprayCan,
  Truck,
  Package,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { type Service } from "@/lib/data/services";

const defaultProcessIcons: LucideIcon[] = [
  ClipboardList,
  Lightbulb,
  DraftingCompass,
  Users,
  Monitor,
  FileCheck,
];

const fabricationProcessIcons: LucideIcon[] = [
  ClipboardList,
  Scissors,
  Flame,
  Search,
  SprayCan,
  Truck,
];

const erectionProcessIcons: LucideIcon[] = [
  ClipboardList,
  Package,
  Wrench,
  Monitor,
  Search,
  FileCheck,
];

interface ServiceDetailProcessSectionProps {
  service: Service;
}

export function ServiceDetailProcessSection({ service }: ServiceDetailProcessSectionProps) {
  const { process } = service;
  const sectionLabel = service.processSectionLabel ?? "Our Process";
  const variant = service.processVariant ?? "default";
  const iconPosition = service.processIconPosition ?? (variant === "default" ? "below" : "above");

  const icons =
    variant === "icon-circle"
      ? fabricationProcessIcons
      : variant === "green-circle"
        ? erectionProcessIcons
        : defaultProcessIcons;

  const isIconCircle = variant === "icon-circle";
  const isGreenCircle = variant === "green-circle";
  const isAlternating = variant === "alternating";

  return (
    <AnimatedSection className="bg-white py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <p className="mb-10 text-sm font-bold tracking-[0.16em] text-[#22c55e] uppercase">
          {sectionLabel}
        </p>

        <div className="relative">
          <div
            className={`absolute hidden border-t-2 border-dashed border-[#22c55e]/70 lg:block ${
              isIconCircle || isGreenCircle
                ? "top-[36px] right-[6%] left-[6%]"
                : iconPosition === "above"
                  ? "top-[52px] right-[8%] left-[8%]"
                  : "top-[22px] right-[8%] left-[8%]"
            }`}
            aria-hidden
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4">
            {process.map((step, i) => {
              const Icon = icons[i % icons.length];

              if (isIconCircle) {
                return (
                  <div key={step.step} className="relative text-center">
                    <div className="relative mx-auto mb-4 inline-flex">
                      <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#0f2744]">
                        <Icon className="h-7 w-7 text-white" strokeWidth={1.5} />
                      </div>
                      <span className="absolute -top-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#22c55e] text-[11px] font-bold text-white">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="mb-2 text-sm font-bold leading-snug text-[#0f2744]">{step.title}</h3>
                    <p className="text-xs leading-relaxed text-[#5a6472] sm:text-[13px]">
                      {step.description}
                    </p>
                  </div>
                );
              }

              if (isGreenCircle) {
                return (
                  <div key={step.step} className="relative text-center">
                    <div className="relative mx-auto mb-3 inline-flex flex-col items-center">
                      {iconPosition === "above" && (
                        <Icon className="mb-2 h-6 w-6 text-[#22c55e]" strokeWidth={1.5} />
                      )}
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#22c55e] text-sm font-bold text-white">
                        {step.step}
                      </div>
                      {iconPosition === "below" && (
                        <Icon className="mt-2 h-6 w-6 text-[#22c55e]" strokeWidth={1.5} />
                      )}
                    </div>
                    <h3 className="mb-2 text-sm font-bold leading-snug text-[#0f2744]">{step.title}</h3>
                    <p className="text-xs leading-relaxed text-[#5a6472] sm:text-[13px]">
                      {step.description}
                    </p>
                  </div>
                );
              }

              if (isAlternating) {
                return (
                  <div key={step.step} className="relative text-center">
                    <div className="relative mx-auto mb-3 inline-flex flex-col items-center">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold text-white ${
                          i % 2 === 0 ? "bg-[#22c55e]" : "bg-[#2563eb]"
                        }`}
                      >
                        {step.step}
                      </div>
                      <Icon className="mt-2 h-6 w-6 text-[#22c55e]" strokeWidth={1.5} />
                    </div>
                    <h3 className="mb-2 text-sm font-bold leading-snug text-[#0f2744]">{step.title}</h3>
                    <p className="text-xs leading-relaxed text-[#5a6472] sm:text-[13px]">
                      {step.description}
                    </p>
                  </div>
                );
              }

              return (
                <div key={step.step} className="relative text-center">
                  <div className="mb-3 flex flex-col items-center">
                    {iconPosition === "above" && (
                      <Icon className="mb-2 h-6 w-6 text-[#0f2744]" strokeWidth={1.5} />
                    )}
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0f2744] text-sm font-bold text-white">
                      {step.step}
                    </div>
                    {iconPosition === "below" && (
                      <Icon className="mt-2 h-6 w-6 text-[#0f2744]" strokeWidth={1.5} />
                    )}
                  </div>
                  <h3 className="mb-2 text-sm font-bold leading-snug text-[#0f2744]">{step.title}</h3>
                  <p className="text-xs leading-relaxed text-[#5a6472] sm:text-[13px]">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
