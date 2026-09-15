"use client";

import { Users, ClipboardCheck, Target, ShieldCheck, Clock, type LucideIcon } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { type Service } from "@/lib/data/services";

const whyIcons: LucideIcon[] = [Users, ClipboardCheck, Target, ShieldCheck, Clock];

interface ServiceDetailWhyChooseSectionProps {
  service: Service;
}

function cellBorder(index: number, lastIndex: number, isDark: boolean) {
  if (index === lastIndex) return "";
  return isDark
    ? "border-b border-white/20 lg:border-r lg:border-b-0"
    : "border-b border-[#e8ecf0] lg:border-r lg:border-b-0";
}

export function ServiceDetailWhyChooseSection({ service }: ServiceDetailWhyChooseSectionProps) {
  const items = service.whyChoose;
  const heading =
    service.whyChooseHeading ?? `WHY CHOOSE ELGC FOR ${service.title.toUpperCase()}`;
  const isLight = service.whyChooseVariant === "light";
  const isInline = !isLight && service.whyChooseLayout === "inline";
  const lastIndex = items.length - 1;
  const columns = service.whyChooseColumns ?? (items.length === 4 ? 4 : 5);

  return (
    <AnimatedSection
      className={`relative overflow-hidden py-14 lg:py-16 ${
        isLight ? "bg-[#eef1f4]" : "bg-[#0a1628]"
      }`}
    >
      {!isLight && (
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: "radial-gradient(circle, #93c5fd 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
          aria-hidden
        />
      )}

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <p className="mb-10 text-sm font-bold tracking-[0.14em] text-[#22c55e] uppercase lg:text-[13px]">
          {heading}
        </p>

        <StaggerContainer
          className={`grid grid-cols-1 sm:grid-cols-2 ${
            columns === 4 ? "lg:grid-cols-4" : "lg:grid-cols-5"
          }`}
        >
          {items.map((item, index) => {
            const Icon = whyIcons[index % whyIcons.length];

            return (
              <StaggerItem
                key={item.title}
                className={`flex gap-3 px-4 py-7 sm:px-3 lg:py-8 ${cellBorder(index, lastIndex, !isLight)} ${
                  isInline ? "items-start" : "flex-col"
                }`}
              >
                <Icon
                  className={`shrink-0 text-[#22c55e] ${isInline ? "mt-0.5 h-8 w-8" : "h-8 w-8"}`}
                  strokeWidth={1.4}
                />
                <div>
                  <h3
                    className={`mb-2 text-sm font-bold leading-snug sm:text-[15px] ${
                      isLight ? "text-[#0f2744]" : "text-white"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`text-xs leading-relaxed sm:text-[13px] ${
                      isLight ? "text-[#5a6472]" : "text-white/65"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
