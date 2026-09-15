"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { PROJECTS } from "@/lib/data/projects";
import { getCategoryBadgeClass } from "@/lib/project-categories";

const STORY_SLUGS = [
  "major-rolling-mill-revamp",
  "yogurt-processing-plant-dismantling",
  "material-recovery-plant-erection",
  "cold-dri-dust-collection-dry",
];

const cards = STORY_SLUGS.map((slug) => PROJECTS.find((p) => p.slug === slug)!).filter(Boolean);

export function FeaturedProjectsSection() {
  return (
    <AnimatedSection className="bg-white pb-6 pt-20 sm:pt-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-8 flex items-center justify-between gap-4">
          <p className="text-sm font-bold tracking-[0.16em] text-[#22c55e] uppercase">
            Featured Project Stories
          </p>
          <Link
            href="#portfolio"
            className="flex items-center gap-1.5 text-sm font-semibold text-[#22c55e] transition-colors hover:gap-2"
          >
            View All Projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
          {cards.map((project) => (
            <StaggerItem key={project.slug} interactive>
              <Link
                href={`/projects/${project.slug}`}
                className="group premium-card flex h-full flex-col overflow-hidden rounded-2xl bg-[#0a1628] shadow-[0_4px_24px_rgba(10,22,40,0.15)]"
              >
                <div className="relative h-48 overflow-hidden sm:h-52">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="premium-image-zoom object-cover"
                    sizes="320px"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <span
                    className={`inline-flex w-fit rounded px-2 py-0.5 text-[10px] font-bold tracking-wide text-white uppercase ${getCategoryBadgeClass(project.category)}`}
                  >
                    {project.category}
                  </span>
                  <h3 className="mt-3 text-base font-bold leading-snug text-white sm:text-lg">
                    {project.title}
                  </h3>
                  <p className="mt-2 flex items-center gap-1.5 text-xs text-white/65">
                    <MapPin className="h-3.5 w-3.5 shrink-0" />
                    {project.location}
                  </p>
                  <p className="mt-3 line-clamp-2 flex-1 text-xs leading-relaxed text-white/55 sm:text-[13px]">
                    {project.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#22c55e] transition-all group-hover:gap-2">
                    View Project
                    <ArrowRight className="h-4 w-4" />
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
