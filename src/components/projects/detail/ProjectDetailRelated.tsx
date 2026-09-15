"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { type Project, PROJECTS } from "@/lib/data/projects";
import { getCategoryBadgeBorder } from "@/lib/project-detail-defaults";

export function ProjectDetailRelated({ project }: { project: Project }) {
  const related = PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 4);

  return (
    <AnimatedSection className="bg-white py-10 lg:py-12">
      <div className="mx-auto max-w-7xl px-3 lg:px-8">
        <div className="mb-6 flex items-center justify-between gap-4">
          <p className="text-sm font-bold tracking-[0.14em] text-[#22c55e] uppercase">
            Related Projects
          </p>
          <Link
            href="/projects"
            className="flex items-center gap-1.5 text-sm font-semibold text-[#22c55e] transition-all hover:gap-2"
          >
            View All Projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {related.map((p) => (
            <StaggerItem key={p.slug}>
              <Link
                href={`/projects/${p.slug}`}
                className="group block overflow-hidden rounded-xl border border-[#e8ecf0] bg-white shadow-[0_2px_12px_rgba(15,39,68,0.06)] transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="280px"
                  />
                  <span
                    className={`absolute bottom-3 left-3 rounded border bg-[#0a1628]/75 px-2 py-0.5 text-[10px] font-bold tracking-wide text-white uppercase ${getCategoryBadgeBorder(p.category)}`}
                  >
                    {p.category}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-bold leading-snug text-[#0f2744] sm:text-[15px]">
                    {p.title}
                  </h3>
                  <div className="mt-3 flex items-center justify-between text-[11px] text-[#6b7280] sm:text-xs">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3 shrink-0" />
                      {p.location.split(",")[0]}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3 shrink-0" />
                      {p.year}
                    </span>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
