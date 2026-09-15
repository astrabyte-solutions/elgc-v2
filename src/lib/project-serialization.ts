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
import { type Project } from "@/lib/data/projects";

const ICON_MAP: Record<string, LucideIcon> = {
  Shovel,
  Columns3,
  Layers,
  Home,
  BrickWall,
  Pipette,
  Wrench,
};

export type SerializableProject = Omit<Project, "scopeOfWork"> & {
  scopeOfWork?: { title: string; iconName: string }[];
};

function iconToName(icon: LucideIcon): string {
  for (const [name, component] of Object.entries(ICON_MAP)) {
    if (component === icon) return name;
  }
  return "Wrench";
}

export function serializeProjectForClient(project: Project): SerializableProject {
  return {
    ...project,
    scopeOfWork: project.scopeOfWork?.map((item) => ({
      title: item.title,
      iconName: iconToName(item.icon),
    })),
  };
}

export function deserializeProjectFromClient(project: SerializableProject): Project {
  return {
    ...project,
    scopeOfWork: project.scopeOfWork?.map((item) => ({
      title: item.title,
      icon: ICON_MAP[item.iconName] ?? Wrench,
    })),
  };
}
