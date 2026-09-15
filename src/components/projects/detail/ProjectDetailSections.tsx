"use client";

import Image from "next/image";
import {
  User,
  MapPin,
  Calendar,
  Building2,
  Construction,
  Warehouse,
  FileText,
  Download,
  type LucideIcon,
} from "lucide-react";
import { type Project } from "@/lib/data/projects";
import {
  getProjectOverview,
  getProjectScope,
  getProjectHighlights,
  getProjectSidebar,
} from "@/lib/project-detail-defaults";
import { AnimatedSection, FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { ProjectDetailGallery } from "./ProjectDetailGallery";
import { motion } from "framer-motion";
import { hoverLift, tapScale } from "@/lib/motion";

const sidebarIcons: LucideIcon[] = [User, MapPin, Calendar, Building2, Construction, Warehouse];

const DOCUMENTS = [
  { name: "Project Brochure", type: "PDF" },
  { name: "Technical Specifications", type: "PDF" },
  { name: "Scope of Work Document", type: "PDF" },
];

const sectionScroll = "scroll-mt-[7.5rem]";

export function ProjectDetailSections({
  project,
  overviewHtml,
}: {
  project: Project;
  overviewHtml?: string | null;
}) {
  const overview = overviewHtml ? null : getProjectOverview(project);
  const scope = getProjectScope(project);
  const highlights = getProjectHighlights(project);
  const sidebar = getProjectSidebar(project);

  return (
    <div className="bg-white">
      <AnimatedSection id="overview" variant="fadeRight" className={`${sectionScroll} py-10 lg:py-12`}>
        <div className="mx-auto grid max-w-7xl items-start gap-8 px-3 lg:grid-cols-[2fr_3fr] lg:gap-10 lg:px-8">
          <FadeIn className="text-left">
            <p className="mb-4 text-sm font-bold tracking-[0.14em] text-[#22c55e] uppercase">
              Project Overview
            </p>
            {overviewHtml ? (
              <div
                className="prose prose-sm max-w-none text-[15px] leading-relaxed text-[#5a6472] prose-p:mb-4"
                dangerouslySetInnerHTML={{ __html: overviewHtml }}
              />
            ) : (
              overview?.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="mb-4 text-[15px] leading-relaxed text-[#5a6472] last:mb-0"
                >
                  {paragraph}
                </p>
              ))
            )}
          </FadeIn>
          <FadeIn delay={0.1} className="relative min-h-[240px] overflow-hidden rounded-xl sm:min-h-[300px] lg:min-h-[320px]">
            <Image src={project.image} alt={project.title} fill className="premium-image-zoom object-cover" sizes="600px" />
          </FadeIn>
        </div>
      </AnimatedSection>

      <AnimatedSection variant="fadeUp" className="pb-10 lg:pb-12">
        <div className="mx-auto grid max-w-7xl items-start gap-8 px-3 lg:grid-cols-[280px_1fr] lg:gap-10 lg:px-8 xl:grid-cols-[300px_1fr]">
          <div
            id="technical"
            className={`${sectionScroll} rounded-xl border border-[#e8ecf0] bg-white p-5 shadow-[0_2px_16px_rgba(15,39,68,0.06)] sm:p-6`}
          >
            <p className="mb-5 text-sm font-bold tracking-[0.14em] text-[#22c55e] uppercase lg:sr-only">
              Technical Details
            </p>
            <ul className="space-y-5">
              {sidebar.map((item, i) => {
                const Icon = sidebarIcons[i % sidebarIcons.length];
                return (
                  <li key={item.label} className="flex gap-3">
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-[#5a6472]" strokeWidth={1.5} />
                    <div>
                      <p className="text-xs font-bold text-[#0f2744]">{item.label}</p>
                      <p className="mt-0.5 text-sm leading-snug text-[#5a6472]">{item.value}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <div id="scope" className={sectionScroll}>
              <p className="mb-5 text-sm font-bold tracking-[0.14em] text-[#22c55e] uppercase">
                Scope of Work
              </p>
              <StaggerContainer className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6">
                {scope.map((item) => (
                  <StaggerItem key={item.title} interactive>
                    <div className="premium-card flex flex-col items-center rounded-lg border border-[#e8ecf0] bg-white px-2 py-4 text-center shadow-[0_1px_8px_rgba(15,39,68,0.04)]">
                    <item.icon className="mb-3 h-8 w-8 text-[#22c55e]" strokeWidth={1.4} />
                    <p className="text-[11px] font-bold leading-snug text-[#0f2744] sm:text-xs">
                      {item.title}
                    </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            <div id="highlights" className={`${sectionScroll} mt-10`}>
              <p className="mb-5 text-sm font-bold tracking-[0.14em] text-[#22c55e] uppercase">
                Key Highlights
              </p>
              <StaggerContainer className="grid gap-3 sm:grid-cols-2" stagger={0.06}>
                {highlights.map((text) => (
                  <StaggerItem key={text}>
                    <div className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#22c55e] text-white">
                      <svg
                        className="h-3 w-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <p className="text-sm leading-relaxed text-[#5a6472]">{text}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <section id="gallery" className={sectionScroll}>
        <ProjectDetailGallery project={project} embedded />
      </section>

      <AnimatedSection id="documents" variant="fadeUp" className={`${sectionScroll} py-10 lg:py-12`}>
        <div className="mx-auto max-w-7xl px-3 lg:px-8">
          <p className="mb-6 text-sm font-bold tracking-[0.14em] text-[#22c55e] uppercase">
            Documents
          </p>
          <StaggerContainer className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {DOCUMENTS.map((doc) => (
              <StaggerItem key={doc.name} interactive>
                <motion.button
                  type="button"
                  className="premium-card flex w-full items-center gap-4 rounded-xl border border-[#e8ecf0] bg-white p-4 text-left transition-colors hover:border-[#22c55e]/40 hover:bg-[#f8fdf9]"
                  whileHover={hoverLift}
                  whileTap={tapScale}
                >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#eef1f4]">
                  <FileText className="h-5 w-5 text-[#22c55e]" strokeWidth={1.5} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-bold text-[#0f2744]">{doc.name}</p>
                  <p className="text-xs text-[#6b7280]">{doc.type}</p>
                </div>
                <Download className="h-4 w-4 shrink-0 text-[#22c55e]" />
                </motion.button>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </AnimatedSection>
    </div>
  );
}
