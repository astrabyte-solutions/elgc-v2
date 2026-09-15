"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { HomeSectionHeading } from "@/components/home/HomeSectionHeading";
import {
  HOME_SECTION_CONTAINER,
  HOME_SECTION_HEADING_MB,
  HOME_SECTION_PY,
} from "@/lib/home-section-styles";
import { IMAGES } from "@/lib/images";

const highlights = [
  {
    title: "Project Stories",
    image: IMAGES.projects.shears[0],
    description: "Detailed accounts of project constraints, execution decisions and outcomes.",
  },
  {
    title: "Field Notes",
    image: IMAGES.projects.yogurt[0],
    description: "Short observations from shutdowns, revamps and industrial construction.",
  },
  {
    title: "Technical Articles",
    image: IMAGES.projects.shears[4],
    description: "Perspectives on planning, project controls, quality, HSE and execution.",
  },
];

export function HomeBlogsSection() {
  return (
    <AnimatedSection className={`bg-white ${HOME_SECTION_PY}`}>
      <div className={HOME_SECTION_CONTAINER}>
        <div className={`flex flex-wrap items-end justify-between gap-4 ${HOME_SECTION_HEADING_MB}`}>
          <HomeSectionHeading title="Project Stories, Field Notes and Industrial Insight" />
          <Link
            href="/blogs"
            className="flex items-center gap-1.5 text-sm font-semibold text-[#22c55e] transition-colors hover:gap-2"
          >
            View all blogs
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <StaggerContainer className="grid gap-4 sm:grid-cols-3" stagger={0.08}>
          {highlights.map((item) => (
            <StaggerItem key={item.title} interactive>
              <Link
                href="/blogs"
                className="group premium-card relative block h-[240px] overflow-hidden rounded-xl sm:h-[280px]"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="premium-image-zoom object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2744] via-[#0f2744]/55 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10">
                    <BookOpen className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <p className="text-base font-bold">{item.title}</p>
                  <p className="mt-1 text-xs text-white/75">{item.description}</p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
