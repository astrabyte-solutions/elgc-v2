import {
  Headset,
  Users,
  ClipboardList,
  Handshake,
  Phone,
  Smartphone,
  Mail,
  Globe,
  MapPin,
  Clock,
  Building2,
  type LucideIcon,
} from "lucide-react";

export const CONTACT_ICON_MAP: Record<string, LucideIcon> = {
  Headset,
  Users,
  ClipboardList,
  Handshake,
  Phone,
  Smartphone,
  Mail,
  Globe,
  MapPin,
  Clock,
  Building2,
};

export function getContactIcon(name: string): LucideIcon {
  return CONTACT_ICON_MAP[name] ?? Phone;
}
