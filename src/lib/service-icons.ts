import {
  DraftingCompass,
  Building2,
  Wrench,
  Construction,
  Zap,
  Leaf,
  type LucideIcon,
} from "lucide-react";

export const SERVICE_ICONS: Record<string, LucideIcon> = {
  DraftingCompass,
  Building2,
  Wrench,
  Construction,
  Zap,
  Leaf,
};

export function getServiceIcon(name: string): LucideIcon {
  return SERVICE_ICONS[name] ?? Building2;
}
