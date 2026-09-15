"use client";

import {
  Building2,
  HardHat,
  UserCog,
  Wrench,
  Construction,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";

const CIRCLE_SIZE = 104;
const LINE_Y = CIRCLE_SIZE / 2;

/** Midpoints between the 6 evenly spaced circle centers (at 1/12, 3/12, … 11/12). */
const DOT_POSITIONS = [16.6667, 33.3333, 50, 66.6667, 83.3333];

const timeline: {
  year: string;
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    year: "2009",
    title: "Foundation",
    description:
      "ELGC was established with a vision to deliver quality engineering and construction solutions.",
    icon: Building2,
  },
  {
    year: "2012",
    title: "Early Projects",
    description: "Successfully delivered multiple civil and industrial projects across sectors.",
    icon: HardHat,
  },
  {
    year: "2015",
    title: "Expansion",
    description: "Expanded capabilities in civil engineering and in-house fabrication works.",
    icon: UserCog,
  },
  {
    year: "2018",
    title: "Erection & Electrical",
    description:
      "Strengthened erection works and added electrical & instrumentation capabilities.",
    icon: Wrench,
  },
  {
    year: "2021",
    title: "Environmental Solutions",
    description: "Introduced turnkey environmental and pollution control systems.",
    icon: Construction,
  },
  {
    year: "Future",
    title: "Continued Growth",
    description:
      "Committed to continuous improvement, innovation, and building long-term partnerships.",
    icon: ShieldCheck,
  },
];

function TimelineNode({ item }: { item: (typeof timeline)[number] }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div
        className="relative z-10 flex items-center justify-center rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
        style={{ width: CIRCLE_SIZE, height: CIRCLE_SIZE }}
      >
        <item.icon className="h-10 w-10 text-[#2563eb]" strokeWidth={1.4} />
      </div>

      <div className="mt-6 w-full max-w-[168px] px-1 sm:max-w-[180px]">
        <p className="text-center text-sm font-bold text-[#22c55e]">{item.year}</p>
        <h4 className="mt-1.5 text-center text-sm font-bold leading-snug text-white sm:text-base">
          {item.title}
        </h4>
        <p className="mt-2 text-left text-xs leading-relaxed text-white/75 sm:text-[13px]">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export function AboutTimelineSection() {
  return (
    <AnimatedSection className="overflow-hidden bg-[#0a1628] py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <p className="mb-3 text-sm font-bold tracking-[0.16em] text-[#22c55e] uppercase">
          Our Journey
        </p>
        <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-[2rem]">
          Company Timeline
        </h2>

        <div className="relative mt-12">
          {/* Horizontal line through circle centers */}
          <div
            className="pointer-events-none absolute hidden h-px bg-gradient-to-r from-white/30 via-white/22 to-transparent lg:block"
            style={{ top: LINE_Y, left: "calc(100% / 12)", width: "calc(100% * 5/6)" }}
            aria-hidden
          />

          {/* Green dots — centered in gaps between circles */}
          {DOT_POSITIONS.map((left) => (
            <span
              key={left}
              className="pointer-events-none absolute z-[1] hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#22c55e] lg:block"
              style={{ top: LINE_Y, left: `${left}%` }}
              aria-hidden
            />
          ))}

          {/* Desktop — 6 equal columns, no scroll */}
          <StaggerContainer className="hidden lg:grid lg:grid-cols-6">
            {timeline.map((item) => (
              <StaggerItem key={item.year}>
                <TimelineNode item={item} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Tablet / mobile — 2×3 grid, no horizontal scroll */}
          <StaggerContainer className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:hidden">
            {timeline.map((item) => (
              <StaggerItem key={item.year}>
                <TimelineNode item={item} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </AnimatedSection>
  );
}
