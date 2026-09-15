"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { type Service, type ServiceProjectCard } from "@/lib/data/services";

interface ServiceDetailProjectsSectionProps {
  service: Service;
  detailProjects: NonNullable<Service["detailProjects"]>;
}

function ProjectTags({ tags }: { tags: string[] }) {
  return (
    <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
      {tags.map((tag) => (
        <span key={tag} className="flex items-center gap-1 text-xs text-white/85">
          <MapPin className="h-3 w-3 shrink-0 opacity-80" />
          {tag}
        </span>
      ))}
    </div>
  );
}

function HorizontalCard({ project }: { project: ServiceProjectCard }) {
  return (
    <Link
      href={project.href}
      className="group flex flex-col overflow-hidden rounded-xl border border-[#e8ecf0] bg-white shadow-[0_2px_16px_rgba(15,39,68,0.07)]"
    >
      <div className="relative h-40 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="220px"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-sm font-bold leading-snug text-[#0f2744]">{project.title}</h3>
        <div className="mt-2 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs text-[#5a6472]">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export function ServiceDetailProjectsSection({
  service,
  detailProjects,
}: ServiceDetailProjectsSectionProps) {
  const { featured, others, viewAllLabel, viewAllHref } = detailProjects;
  const sectionLabel = detailProjects.sectionLabel ?? "Our Projects";
  const isHorizontal = service.projectsLayout === "horizontal-five";
  const allProjects = [featured, ...others];

  if (isHorizontal) {
    return (
      <AnimatedSection className="bg-white py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <p className="mb-8 text-sm font-bold tracking-[0.16em] text-[#22c55e] uppercase">
            {sectionLabel}
          </p>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {allProjects.map((project) => (
              <HorizontalCard key={project.title} project={project} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href={viewAllHref}
              className="inline-flex items-center gap-2 text-sm font-bold tracking-[0.12em] text-[#22c55e] uppercase transition-all hover:gap-3"
            >
              {viewAllLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </AnimatedSection>
    );
  }

  return (
    <AnimatedSection className="bg-white py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <p className="mb-8 text-sm font-bold tracking-[0.16em] text-[#22c55e] uppercase">
          {sectionLabel}
        </p>

        <div className="grid gap-4 lg:grid-cols-2 lg:gap-5">
          <Link
            href={featured.href}
            className="group relative block min-h-[320px] overflow-hidden rounded-xl lg:min-h-[360px]"
          >
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="600px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/95 via-[#0a1628]/35 to-transparent" />
            <div className="absolute right-0 bottom-0 left-0 p-6 sm:p-8">
              <h3 className="max-w-md text-xl font-bold text-white sm:text-2xl">{featured.title}</h3>
              <ProjectTags tags={featured.tags} />
              <span className="mt-5 inline-flex items-center gap-2 rounded-md border border-white/50 px-4 py-2 text-sm font-semibold text-white transition-colors group-hover:bg-white/10">
                View Project
                <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>

          <div className="grid grid-cols-2 gap-4">
            {others.map((project) => (
              <Link
                key={project.title}
                href={project.href}
                className="group relative block min-h-[140px] overflow-hidden rounded-xl sm:min-h-[160px]"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="300px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/92 via-[#0a1628]/40 to-transparent" />
                <div className="absolute right-0 bottom-0 left-0 p-4">
                  <h3 className="text-sm font-bold leading-snug text-white">{project.title}</h3>
                  <ProjectTags tags={project.tags} />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            href={viewAllHref}
            className="inline-flex items-center gap-2 text-sm font-bold tracking-[0.12em] text-[#22c55e] uppercase transition-all hover:gap-3"
          >
            {viewAllLabel}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
}
