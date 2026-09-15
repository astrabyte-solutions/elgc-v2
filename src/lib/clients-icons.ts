import {
  Users,
  Handshake,
  Briefcase,
  Globe,
  ShieldCheck,
  Award,
  Clock,
  HardHat,
  BarChart3,
  Building2,
  Factory,
  ThumbsUp,
  type LucideIcon,
} from "lucide-react";

export const CLIENTS_ICON_MAP: Record<string, LucideIcon> = {
  Users,
  Handshake,
  Briefcase,
  Globe,
  ShieldCheck,
  Award,
  Clock,
  HardHat,
  BarChart3,
  Building2,
  Factory,
  ThumbsUp,
};

export function getClientsIcon(name: string): LucideIcon {
  return CLIENTS_ICON_MAP[name] ?? ShieldCheck;
}
