"use client";

import { useState } from "react";
import { ProjectsHero } from "@/components/projects/ProjectsHero";
import { FeaturedProjectsSection } from "@/components/projects/FeaturedProjectsSection";
import { ProjectJourneySection } from "@/components/projects/ProjectJourneySection";
import { ProjectPortfolioSection } from "@/components/projects/ProjectPortfolioSection";
import { ProjectsCtaSection } from "@/components/projects/ProjectsCtaSection";
import { type ProjectCategoryId } from "@/lib/project-categories";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategoryId>("All Projects");

  return (
    <div className="overflow-x-hidden">
      <ProjectsHero activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
      <FeaturedProjectsSection />
      <ProjectJourneySection />
      <ProjectPortfolioSection activeCategory={activeCategory} />
      <ProjectsCtaSection />
    </div>
  );
}
