"use client";

import {
  HardHat,
  UserCog,
  Users,
  Flame,
  Construction,
  CircuitBoard,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";

const capabilities: { label: string; icon: LucideIcon }[] = [
  { label: "Engineers", icon: HardHat },
  { label: "Project Managers", icon: UserCog },
  { label: "Civil Teams", icon: Users },
  { label: "Fabrication Specialists", icon: Flame },
  { label: "Erection Experts", icon: Construction },
  { label: "Electrical & Instrumentation Technicians", icon: CircuitBoard },
  { label: "Safety Supervisors", icon: ShieldCheck },
];

export function AboutTeamCapabilitiesSection() {
  return (
    <AnimatedSection className="overflow-x-hidden bg-white py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,300px)_1fr] lg:gap-10 xl:gap-12">
          <div>
            <p className="mb-3 text-sm font-bold tracking-[0.16em] text-[#22c55e] uppercase">
              Our Strength
            </p>
            <h2 className="text-2xl font-bold text-[#0f2744] sm:text-3xl lg:text-[2rem]">
              Our Team Capabilities
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[#5a6472]">
              Our strength lies in our skilled team and their commitment to excellence.
            </p>
          </div>

          <StaggerContainer className="grid w-full grid-cols-3 gap-y-6 sm:grid-cols-4 lg:grid-cols-7 lg:gap-0">
            {capabilities.map((cap, index) => (
              <StaggerItem
                key={cap.label}
                className={`flex flex-col items-center px-1 sm:px-2 ${
                  index > 0 ? "lg:border-l lg:border-[#e8ecf0]" : ""
                }`}
              >
                <cap.icon className="h-7 w-7 text-[#2563eb] sm:h-8 sm:w-8" strokeWidth={1.4} />
                <p className="mt-2 max-w-[108px] text-center text-[9px] font-semibold leading-snug text-[#0f2744] sm:mt-2.5 sm:text-[10px] xl:text-[11px]">
                  {cap.label}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </AnimatedSection>
  );
}
