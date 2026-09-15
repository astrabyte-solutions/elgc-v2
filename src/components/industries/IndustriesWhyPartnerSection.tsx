"use client";

import {
  Users,
  ShieldCheck,
  Award,
  RefreshCcw,
  Handshake,
  type LucideIcon,
} from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";

const items: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Users,
    title: "Industry Experience",
    description: "Proven track record across multiple sectors and complex projects.",
  },
  {
    icon: ShieldCheck,
    title: "Safety First",
    description: "Unwavering commitment to safety, health and environment.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Strict quality control processes ensuring excellence at every step.",
  },
  {
    icon: RefreshCcw,
    title: "End-to-End Solutions",
    description: "From concept to commissioning and beyond.",
  },
  {
    icon: Handshake,
    title: "Long-Term Relationships",
    description: "Building lasting partnerships through trust, transparency and performance.",
  },
];

function cellBorder(index: number, lastIndex: number) {
  if (index === lastIndex) return "";
  return "border-b border-[#dde3ea] lg:border-r lg:border-b-0";
}

export function IndustriesWhyPartnerSection() {
  const lastIndex = items.length - 1;

  return (
    <AnimatedSection className="bg-[#eef1f4] py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-3 lg:px-8">
        <StaggerContainer className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,300px)_1fr] lg:gap-12 xl:grid-cols-[minmax(0,340px)_1fr]">
          <StaggerItem>
            <p className="mb-2 text-sm font-bold tracking-[0.14em] text-[#22c55e] uppercase">
              Why Partner With ELGC
            </p>
            <h2 className="text-2xl font-bold leading-tight text-[#0f2744] sm:text-3xl lg:text-[2rem]">
              A Partner You{" "}
              <span className="text-[#22c55e]">Can Rely On</span>
            </h2>
            <div className="mt-4 flex h-[3px] w-16 overflow-hidden rounded-sm" aria-hidden>
              <div className="h-full w-1/2 bg-[#0f2744]" />
              <div className="h-full w-1/2 bg-[#22c55e]" />
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
              {items.map((item, index) => (
                <div
                  key={item.title}
                  className={`flex flex-col items-center px-4 py-6 text-center sm:px-3 lg:py-4 ${cellBorder(index, lastIndex)}`}
                >
                  <item.icon className="mb-3 h-9 w-9 text-[#22c55e]" strokeWidth={1.4} />
                  <h3 className="mb-2 text-sm font-bold text-[#0f2744] sm:text-[15px]">{item.title}</h3>
                  <p className="text-xs leading-relaxed text-[#5a6472] sm:text-[13px]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
