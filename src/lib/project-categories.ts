import {
  LayoutGrid,
  Wrench,
  Construction,
  PackageOpen,
  Layers,
  Building2,
  Pipette,
  Zap,
  Leaf,
  ClipboardCheck,
  ClipboardList,
  type LucideIcon,
} from "lucide-react";

export const PROJECT_CATEGORY_FILTERS = [
  { id: "All Projects", label: "All Projects", icon: LayoutGrid },
  { id: "Shutdowns & Revamps", label: "Shutdowns & Revamps", icon: Wrench },
  { id: "Equipment Erection", label: "Equipment Erection", icon: Construction },
  { id: "Relocation & Dismantling", label: "Relocation & Dismantling", icon: PackageOpen },
  { id: "Civil & Structural", label: "Civil & Structural", icon: Building2 },
  { id: "Environmental Systems", label: "Environmental Systems", icon: Leaf },
  { id: "Inspection & Improvement", label: "Inspection & Improvement", icon: ClipboardCheck },
  { id: "EPC Projects", label: "EPC Projects", icon: ClipboardList },
] as const;

export type ProjectCategoryId = (typeof PROJECT_CATEGORY_FILTERS)[number]["id"];

export function matchesProjectCategory(category: string, filterId: ProjectCategoryId) {
  if (filterId === "All Projects") return true;
  const normalized = category.toUpperCase();
  if (filterId === "Shutdowns & Revamps") return normalized.includes("SHUTDOWN") || normalized.includes("REVAMP");
  if (filterId === "Equipment Erection") return normalized.includes("ERECTION") || normalized.includes("EQUIPMENT");
  if (filterId === "Relocation & Dismantling") return normalized.includes("RELOCATION") || normalized.includes("DISMANTLING");
  if (filterId === "Civil & Structural") return normalized.includes("CIVIL") || normalized.includes("STRUCTURAL");
  if (filterId === "Environmental Systems") return normalized.includes("ENVIRONMENTAL");
  if (filterId === "Inspection & Improvement") return normalized.includes("INSPECTION") || normalized.includes("IMPROVEMENT");
  if (filterId === "EPC Projects") return normalized.includes("EPC");
  return false;
}

export function getCategoryBadgeClass(category: string) {
  const normalized = category.toUpperCase();
  if (normalized.includes("SHUTDOWN") || normalized.includes("REVAMP")) return "bg-[#f97316]";
  if (normalized.includes("ERECTION") || normalized.includes("EQUIPMENT")) return "bg-[#7c3aed]";
  if (normalized.includes("RELOCATION") || normalized.includes("DISMANTLING")) return "bg-[#2563eb]";
  if (normalized.includes("CIVIL") || normalized.includes("STRUCTURAL")) return "bg-[#22c55e]";
  if (normalized.includes("ENVIRONMENTAL")) return "bg-[#059669]";
  if (normalized.includes("INSPECTION") || normalized.includes("IMPROVEMENT")) return "bg-[#059669]";
  if (normalized.includes("EPC")) return "bg-[#2563eb]";
  return "bg-[#22c55e]";
}
