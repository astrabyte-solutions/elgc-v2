"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Mountain,
  HardHat,
  Zap,
  FlaskConical,
  Cog,
  Building2,
  Leaf,
  type LucideIcon,
} from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { HomeSectionHeading } from "@/components/home/HomeSectionHeading";
import {
  HOME_SECTION_CONTAINER,
  HOME_SECTION_HEADING_MB,
  HOME_SECTION_PY,
} from "@/lib/home-section-styles";
import { IMAGES } from "@/lib/images";

const industries: { title: string; image: string; icon: LucideIcon }[] = [
  { title: "Cement", image: IMAGES.projects.shears[4], icon: Mountain },
  { title: "Steel", image: IMAGES.projects.shears[5], icon: HardHat },
  { title: "Power", image: IMAGES.projects.shears[2], icon: Zap },
  { title: "Chemistry", image: IMAGES.projects.shears[1], icon: FlaskConical },
  { title: "Manufacturing", image: IMAGES.projects.yogurt[0], icon: Cog },
  { title: "Infrastructure", image: IMAGES.projects.shears[6], icon: Building2 },
  { title: "Environmental Systems", image: IMAGES.projects.shears[7], icon: Leaf },
];

export function HomeIndustriesSection() {
  return (
    <AnimatedSection className={`bg-white ${HOME_SECTION_PY}`}>
      <div className={HOME_SECTION_CONTAINER}>
        <HomeSectionHeading title="Industries Served" className={HOME_SECTION_HEADING_MB} />

        <StaggerContainer className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 lg:grid-cols-7">
          {industries.map((industry) => (
            <StaggerItem key={industry.title} interactive>
              <Link
                href="/industries"
                className="group premium-card relative block h-[220px] overflow-hidden rounded-lg sm:h-[280px] lg:h-[300px]"
              >
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  className="premium-image-zoom object-cover"
                />
                <div className="absolute inset-0 bg-[#0f2744]/50 transition-colors duration-300 group-hover:bg-[#0f2744]/40" />

                <div className="absolute inset-0 flex flex-col items-center justify-between px-2 py-6 sm:py-8">
                  <div className="flex flex-1 items-center justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14">
                      <industry.icon className="h-6 w-6 text-white sm:h-7 sm:w-7" strokeWidth={1.5} />
                    </div>
                  </div>
                  <span className="text-center text-[11px] font-bold leading-tight text-white sm:text-xs lg:text-sm">
                    {industry.title}
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
