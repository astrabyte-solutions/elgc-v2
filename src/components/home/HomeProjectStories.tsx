"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AccentHeading } from "@/components/home/AccentHeading";
import { PROJECTS } from "@/lib/data/projects";
import {
  HOME_SECTION_CONTAINER,
  HOME_SECTION_HEADING_MB,
  HOME_SECTION_PY,
} from "@/lib/home-section-styles";

const rowProjectSlugs = [
  "major-rolling-mill-revamp",
  "yogurt-processing-plant-dismantling",
  "material-recovery-plant-erection",
  "structural-steel-plant-expansion",
];

const projectBadges: Record<string, { label: string; color: string; featured?: boolean }> = {
  "major-rolling-mill-revamp": { label: "FEATURED PROJECT", color: "bg-[#f97316]", featured: true },
  "yogurt-processing-plant-dismantling": { label: "RELOCATION", color: "bg-[#2563eb]" },
  "material-recovery-plant-erection": { label: "ERECTION", color: "bg-[#7c3aed]" },
  "structural-steel-plant-expansion": { label: "STRUCTURAL", color: "bg-[#22c55e]" },
};

function ProjectCardContent({
  project,
  badge,
  expanded = true,
}: {
  project: (typeof PROJECTS)[number];
  badge: { label: string; color: string };
  expanded?: boolean;
}) {
  return (
    <>
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 lg:p-6">
        <span
          className={`inline-block rounded px-2.5 py-1 text-[10px] font-bold tracking-wide text-white sm:text-[11px] ${badge.color}`}
        >
          {badge.label}
        </span>

        <h3
          className={`mt-3 font-bold text-white ${
            expanded ? "text-xl sm:text-2xl lg:text-[1.65rem]" : "text-sm sm:text-base lg:text-lg"
          }`}
        >
          <span className={expanded ? "" : "line-clamp-2"}>{project.title}</span>
        </h3>

        <p className="mt-2 flex items-center gap-1.5 text-xs text-white/90 sm:text-sm">
          <MapPin className="h-3.5 w-3.5 shrink-0" />
          <span className={expanded ? "" : "truncate"}>{project.location}</span>
        </p>

        {expanded && (
          <div className="mt-3">
            <p className="max-w-md text-sm leading-relaxed text-white/80 line-clamp-3 sm:line-clamp-none">
              {project.description}
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-white">
              View Details
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        )}
      </div>
    </>
  );
}

export function HomeProjectStories() {
  const [activeIndex, setActiveIndex] = useState(0);

  const rowProjects = rowProjectSlugs
    .map((slug) => PROJECTS.find((p) => p.slug === slug))
    .filter(Boolean) as typeof PROJECTS;

  return (
    <AnimatedSection className={`overflow-x-hidden bg-white ${HOME_SECTION_PY}`}>
      <div className={HOME_SECTION_CONTAINER}>
        <div
          className={`flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between ${HOME_SECTION_HEADING_MB}`}
        >
          <AccentHeading accentLetter="P" rest="roject Stories" className="mb-0" />
          <Link
            href="/projects"
            className="inline-flex w-fit items-center gap-2 rounded-md border border-[#93c5fd] bg-white px-6 py-2.5 text-sm font-semibold text-[#2563eb] transition-colors hover:bg-[#eff6ff] sm:px-8 sm:py-3"
          >
            View All Projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Mobile — one project at a time */}
        <div className="lg:hidden">
          <div className="relative h-[380px] overflow-hidden rounded-xl sm:h-[400px]">
            <AnimatePresence mode="wait">
              {rowProjects.map((project, index) => {
                if (index !== activeIndex) return null;
                const badge = projectBadges[project.slug] || {
                  label: project.category,
                  color: "bg-[#2563eb]",
                };
                return (
                  <motion.div
                    key={project.slug}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -24 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    <Link
                      href={`/projects/${project.slug}`}
                      className="group relative block h-full w-full overflow-hidden rounded-xl"
                    >
                      <ProjectCardContent project={project} badge={badge} expanded />
                    </Link>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2">
            {rowProjects.map((project, index) => (
              <button
                key={project.slug}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex ? "w-6 bg-[#22c55e]" : "w-2 bg-[#22c55e]/30"
                }`}
                aria-label={`Show project ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop — expanding panels */}
        <div className="hidden h-[420px] gap-3 lg:flex lg:h-[460px]">
          {rowProjects.map((project, index) => {
            const isActive = activeIndex === index;
            const badge = projectBadges[project.slug] || {
              label: project.category,
              color: "bg-[#2563eb]",
            };

            return (
              <motion.div
                key={project.slug}
                className="relative min-w-0 overflow-hidden rounded-xl"
                initial={false}
                animate={{ flex: isActive ? 2.6 : 1 }}
                transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="group relative block h-full w-full overflow-hidden rounded-xl"
                >
                  <ProjectCardContent project={project} badge={badge} expanded={isActive} />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
