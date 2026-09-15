import { eq, desc } from "drizzle-orm";
import {
  Shovel,
  Columns3,
  Layers,
  Home,
  BrickWall,
  Pipette,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { db, isDbConfigured } from "@/db";
import { projects as projectsTable } from "@/db/schema";
import type { DbProject } from "@/db/schema";
import {
  PROJECTS as STATIC_PROJECTS,
  type Project,
  type ProjectScopeItem,
  type ProjectGalleryItem,
} from "@/lib/data/projects";

export { serializeProjectForClient } from "@/lib/project-serialization";
export type { SerializableProject } from "@/lib/project-serialization";

const ICON_MAP: Record<string, LucideIcon> = {
  Shovel,
  Columns3,
  Layers,
  Home,
  BrickWall,
  Pipette,
  Wrench,
};

function mapDbProject(row: DbProject): Project {
  let scopeOfWork: ProjectScopeItem[] | undefined;
  let keyHighlights: string[] | undefined;
  let gallery: ProjectGalleryItem[] | undefined;

  if (row.scopeJson) {
    try {
      const parsed = JSON.parse(row.scopeJson) as { title: string; iconName: string }[];
      scopeOfWork = parsed.map((s) => ({
        title: s.title,
        icon: ICON_MAP[s.iconName] ?? Wrench,
      }));
    } catch {
      scopeOfWork = undefined;
    }
  }

  if (row.highlightsJson) {
    try {
      keyHighlights = JSON.parse(row.highlightsJson) as string[];
    } catch {
      keyHighlights = undefined;
    }
  }

  if (row.galleryJson) {
    try {
      gallery = JSON.parse(row.galleryJson) as ProjectGalleryItem[];
    } catch {
      gallery = undefined;
    }
  }

  return {
    slug: row.slug,
    title: row.title,
    category: row.category,
    categoryColor: row.categoryColor,
    location: row.location,
    year: row.year,
    industry: row.industry,
    description: row.description,
    image: row.image,
    featured: row.featured ?? false,
    contractType: row.contractType ?? undefined,
    value: row.value ?? undefined,
    duration: row.duration ?? undefined,
    durationRange: row.durationRange ?? undefined,
    client: row.client ?? undefined,
    area: row.area ?? undefined,
    structureType: row.structureType ?? undefined,
    scopeOfWork,
    keyHighlights,
    gallery,
  };
}

export function getProjectOverviewHtml(row: DbProject): string | null {
  return row.overviewHtml ?? null;
}

export async function getAllProjects(): Promise<Project[]> {
  if (!isDbConfigured() || !db) return STATIC_PROJECTS;

  const dbRows = await db
    .select()
    .from(projectsTable)
    .where(eq(projectsTable.status, "published"))
    .orderBy(desc(projectsTable.updatedAt));

  if (dbRows.length === 0) return STATIC_PROJECTS;

  const dbProjects = dbRows.map(mapDbProject);
  const slugs = new Set(dbProjects.map((p) => p.slug));
  const staticOnly = STATIC_PROJECTS.filter((p) => !slugs.has(p.slug));
  return [...dbProjects, ...staticOnly];
}

export async function getProjectBySlugAsync(slug: string): Promise<{
  project: Project | null;
  overviewHtml: string | null;
  fromDb: boolean;
}> {
  if (isDbConfigured() && db) {
    const [row] = await db
      .select()
      .from(projectsTable)
      .where(eq(projectsTable.slug, slug))
      .limit(1);

    if (row && row.status === "published") {
      return {
        project: mapDbProject(row),
        overviewHtml: row.overviewHtml,
        fromDb: true,
      };
    }
  }

  const project = STATIC_PROJECTS.find((p) => p.slug === slug) ?? null;
  return { project, overviewHtml: null, fromDb: false };
}

export async function getAllProjectSlugs(): Promise<string[]> {
  const all = await getAllProjects();
  return all.map((p) => p.slug);
}
