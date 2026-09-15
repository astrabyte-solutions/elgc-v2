import {
  FilePenLine,
  Headset,
  ClipboardList,
  FileSearch,
  Handshake,
  History,
  ClipboardPen,
  ClipboardCheck,
  CheckCircle2,
  Phone,
  Mail,
  Upload,
  Clipboard,
  type LucideIcon,
} from "lucide-react";

export const PROPOSAL_ICON_MAP: Record<string, LucideIcon> = {
  FilePenLine,
  Headset,
  ClipboardList,
  FileSearch,
  Handshake,
  History,
  ClipboardPen,
  ClipboardCheck,
  CheckCircle2,
  Phone,
  Mail,
  Upload,
  Clipboard,
};

export function getProposalIcon(name: string): LucideIcon {
  return PROPOSAL_ICON_MAP[name] ?? ClipboardList;
}
