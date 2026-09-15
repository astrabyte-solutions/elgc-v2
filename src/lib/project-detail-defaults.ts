import {
  Shovel,
  Columns3,
  Layers,
  Home,
  BrickWall,
  Pipette,
  type LucideIcon,
} from "lucide-react";
import { type Project } from "@/lib/data/projects";
import { IMAGES } from "@/lib/images";

export interface ProjectScopeItem {
  title: string;
  icon: LucideIcon;
}

export interface ProjectGalleryItem {
  image: string;
  caption: string;
}

const DEFAULT_SCOPE: ProjectScopeItem[] = [
  { title: "Site Preparation & Earthwork", icon: Shovel },
  { title: "RCC Foundation & Plinth Works", icon: Columns3 },
  { title: "Structural Steel Fabrication & Erection", icon: Layers },
  { title: "Roofing & Cladding", icon: Home },
  { title: "Masonry & Finishing Works", icon: BrickWall },
  { title: "External Development & Utilities", icon: Pipette },
];

const DEFAULT_HIGHLIGHTS = [
  "Works executed within a live operational environment",
  "Method statements and ITPs submitted and approved before commencement",
  "Multi-discipline coordination managed under a single site structure",
  "Scope delivered within the agreed programme and handback window",
  "Quality records and as-built documentation compiled at close-out",
  "Regular progress reporting maintained throughout execution",
];

const DEFAULT_GALLERY_CAPTIONS = [
  "Structural Steel Erection",
  "Foundation Works",
  "RCC Column Casting",
  "Roofing Installation",
  "Project Completion",
  "Site Mobilization",
  "Equipment Installation",
  "Quality Inspection",
  "Finishing Works",
  "Handover Ceremony",
];

export function getProjectOverview(project: Project): string[] {
  if (project.overview?.length) return project.overview;
  return [
    `ELGC was awarded the contract for design, engineering, procurement, construction and commissioning of ${project.title.toLowerCase()} for a leading ${project.industry.toLowerCase()} company.`,
    project.description,
  ];
}

export function getProjectScope(project: Project): ProjectScopeItem[] {
  if (project.scopeOfWork?.length) {
    return project.scopeOfWork.map((item) => ({
      title: item.title,
      icon: item.icon,
    }));
  }
  return DEFAULT_SCOPE;
}

export function getProjectHighlights(project: Project): string[] {
  return project.keyHighlights ?? DEFAULT_HIGHLIGHTS;
}

export function getProjectGallery(project: Project): ProjectGalleryItem[] {
  if (project.gallery?.length) return project.gallery;
  const images = [project.image, ...IMAGES.projects.shears.slice(0, 9)];
  return images.map((image, i) => ({
    image,
    caption: DEFAULT_GALLERY_CAPTIONS[i] ?? `Project Image ${i + 1}`,
  }));
}

export function getProjectSidebar(project: Project) {
  return [
    { label: "Client", value: project.client ?? "Confidential Client" },
    { label: "Location", value: project.location },
    {
      label: "Project Duration",
      value: project.durationRange ?? project.duration ?? "12 Months",
    },
    { label: "Built-up Area", value: project.area ?? "N/A" },
    {
      label: "Structure Type",
      value: project.structureType ?? "Industrial Structure",
    },
    { label: "Business Unit", value: project.category },
  ];
}

export function getCategoryBadgeBorder(category: string) {
  const normalized = category.toUpperCase();
  if (normalized.includes("CIVIL")) return "border-[#22c55e]";
  if (normalized.includes("FABRICATION")) return "border-[#2563eb]";
  if (normalized.includes("ERECTION")) return "border-[#7c3aed]";
  if (normalized.includes("ELECTRICAL") || normalized.includes("INSTRUMENTATION")) {
    return "border-[#f97316]";
  }
  if (normalized.includes("ENVIRONMENTAL")) return "border-[#059669]";
  return "border-[#22c55e]";
}
