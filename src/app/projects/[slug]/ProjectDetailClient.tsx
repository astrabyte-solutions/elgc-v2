"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useMemo } from "react";
import { notFound } from "next/navigation";
import {
  deserializeProjectFromClient,
  type SerializableProject,
} from "@/lib/project-serialization";
import { ProjectDetailHero } from "@/components/projects/detail/ProjectDetailHero";
import {
  PROJECT_DETAIL_TABS,
  ProjectDetailTabs,
  type ProjectDetailTabId,
} from "@/components/projects/detail/ProjectDetailTabs";
import { ProjectDetailSections } from "@/components/projects/detail/ProjectDetailSections";
import { ProjectDetailRelated } from "@/components/projects/detail/ProjectDetailRelated";
import { ProjectDetailCta } from "@/components/projects/detail/ProjectDetailCta";

const SCROLL_OFFSET = 120;

export default function ProjectDetailClient({
  project: serializedProject,
  overviewHtml,
}: {
  project: SerializableProject;
  overviewHtml?: string | null;
}) {
  const project = useMemo(
    () => deserializeProjectFromClient(serializedProject),
    [serializedProject],
  );
  const [activeTab, setActiveTab] = useState<ProjectDetailTabId>("overview");
  const isScrollingRef = useRef(false);

  const handleTabChange = useCallback((tab: ProjectDetailTabId) => {
    setActiveTab(tab);
    const el = document.getElementById(tab);
    if (!el) return;

    isScrollingRef.current = true;
    const top = el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
    window.scrollTo({ top, behavior: "smooth" });

    window.setTimeout(() => {
      isScrollingRef.current = false;
    }, 600);
  }, []);

  useEffect(() => {
    const sectionIds = PROJECT_DETAIL_TABS.map((t) => t.id);

    const onScroll = () => {
      if (isScrollingRef.current) return;

      let current: ProjectDetailTabId = "overview";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= SCROLL_OFFSET + 24) {
          current = id;
        }
      }
      setActiveTab(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!serializedProject) notFound();

  return (
    <>
      <ProjectDetailHero project={project} />
      <ProjectDetailTabs activeTab={activeTab} onTabChange={handleTabChange} />
      <ProjectDetailSections project={project} overviewHtml={overviewHtml} />
      <ProjectDetailRelated project={project} />
      <ProjectDetailCta />
    </>
  );
}
