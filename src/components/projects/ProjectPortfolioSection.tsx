"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  LayoutGrid,
  List,
  MapPin,
  ChevronsDown,
} from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { PROJECTS } from "@/lib/data/projects";
import {
  matchesProjectCategory,
  type ProjectCategoryId,
} from "@/lib/project-categories";

type ViewMode = "gallery" | "list";

interface ProjectPortfolioSectionProps {
  activeCategory: ProjectCategoryId;
}

export function ProjectPortfolioSection({ activeCategory }: ProjectPortfolioSectionProps) {
  const [viewMode, setViewMode] = useState<ViewMode>("gallery");
  const [industryFilter, setIndustryFilter] = useState("All");
  const [locationFilter, setLocationFilter] = useState("All");
  const [yearFilter, setYearFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(12);

  useEffect(() => {
    setVisibleCount(12);
  }, [activeCategory, industryFilter, locationFilter, yearFilter]);

  const industries = useMemo(
    () => ["All", ...Array.from(new Set(PROJECTS.map((p) => p.industry)))],
    [],
  );
  const locations = useMemo(
    () => ["All", ...Array.from(new Set(PROJECTS.map((p) => p.location.split(",")[0].trim())))],
    [],
  );
  const years = useMemo(
    () => ["All", ...Array.from(new Set(PROJECTS.map((p) => String(p.year))))].sort(
      (a, b) => (a === "All" ? 1 : Number(b) - Number(a)),
    ),
    [],
  );

  const filtered = PROJECTS.filter((p) => {
    if (!matchesProjectCategory(p.category, activeCategory)) return false;
    if (industryFilter !== "All" && p.industry !== industryFilter) return false;
    if (locationFilter !== "All" && !p.location.includes(locationFilter)) return false;
    if (yearFilter !== "All" && String(p.year) !== yearFilter) return false;
    return true;
  });

  const visible = filtered.slice(0, visibleCount);

  return (
    <AnimatedSection id="portfolio" className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <p className="mb-8 text-sm font-bold tracking-[0.16em] text-[#22c55e] uppercase">
          Our Project Portfolio
        </p>

        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              className="rounded-md bg-[#22c55e] px-4 py-2 text-sm font-semibold text-white"
            >
              All
            </button>

            <FilterDropdown
              label="Industry"
              value={industryFilter}
              options={industries}
              onChange={setIndustryFilter}
            />
            <FilterDropdown
              label="Location"
              value={locationFilter}
              options={locations}
              onChange={setLocationFilter}
            />
            <FilterDropdown
              label="Year"
              value={yearFilter}
              options={years}
              onChange={setYearFilter}
            />
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setViewMode("gallery")}
              className={`flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-semibold transition-colors ${
                viewMode === "gallery"
                  ? "border-[#22c55e] text-[#22c55e]"
                  : "border-[#e5e7eb] text-[#6b7280] hover:border-[#d1d5db]"
              }`}
            >
              <LayoutGrid className="h-4 w-4" />
              Gallery View
            </button>
            <button
              type="button"
              onClick={() => setViewMode("list")}
              className={`flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-semibold transition-colors ${
                viewMode === "list"
                  ? "border-[#22c55e] text-[#22c55e]"
                  : "border-[#e5e7eb] text-[#6b7280] hover:border-[#d1d5db]"
              }`}
            >
              <List className="h-4 w-4" />
              List View
            </button>
          </div>
        </div>

        {viewMode === "gallery" ? (
          <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.06}>
            {visible.map((project) => (
              <StaggerItem key={project.slug} interactive>
                <Link
                  href={`/projects/${project.slug}`}
                  className="group premium-card relative block aspect-[4/3] overflow-hidden rounded-xl"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="premium-image-zoom object-cover"
                    sizes="300px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/95 via-[#0a1628]/30 to-transparent" />
                  <div className="absolute right-0 bottom-0 left-0 p-4">
                    <h3 className="text-sm font-bold leading-snug text-white sm:text-[15px]">
                      {project.title}
                    </h3>
                    <p className="mt-1.5 flex flex-wrap items-center gap-x-1.5 text-[11px] text-white/75 sm:text-xs">
                      <span>{project.industry}</span>
                      <span aria-hidden>•</span>
                      <MapPin className="h-3 w-3 shrink-0" />
                      <span>{project.location.split(",")[0]}</span>
                      <span aria-hidden>•</span>
                      <span>{project.year}</span>
                    </p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        ) : (
          <div className="space-y-3">
            {visible.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group flex gap-4 overflow-hidden rounded-xl border border-[#e8ecf0] bg-white p-3 transition-shadow hover:shadow-md sm:gap-5 sm:p-4"
              >
                <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-lg sm:h-24 sm:w-36">
                  <Image src={project.image} alt="" fill className="object-cover" sizes="150px" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-[#0f2744] group-hover:text-[#22c55e]">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs text-[#6b7280]">
                    {project.industry} • {project.location} • {project.year}
                  </p>
                  <p className="mt-2 line-clamp-2 text-sm text-[#5a6472]">{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
        )}

        {visibleCount < filtered.length && (
          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={() => setVisibleCount((c) => c + 4)}
              className="inline-flex flex-col items-center gap-2 text-sm font-bold tracking-[0.12em] text-[#22c55e] uppercase transition-colors hover:text-[#16a34a]"
            >
              Load More Projects
              <ChevronsDown className="h-5 w-5 animate-bounce" />
            </button>
          </div>
        )}
      </div>
    </AnimatedSection>
  );
}

function FilterDropdown({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const display = value === "All" ? label : value;

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 rounded-md bg-[#f3f4f6] px-4 py-2 text-sm font-medium text-[#374151] transition-colors hover:bg-[#e5e7eb]"
      >
        {display}
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 z-20 mt-1 min-w-[160px] overflow-hidden rounded-md border border-[#e5e7eb] bg-white shadow-lg">
          {options.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              className={`block w-full px-4 py-2 text-left text-sm hover:bg-[#f9fafb] ${
                value === opt ? "font-semibold text-[#22c55e]" : "text-[#374151]"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
