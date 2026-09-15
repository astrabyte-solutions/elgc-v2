import {
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

export interface ServiceDropdownItem {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

/** Grid order: col1-row1, col2-row1, col1-row2, col2-row2 … */
export const SERVICE_DROPDOWN_ITEMS: ServiceDropdownItem[] = [
  {
    title: "Shutdowns, Revamps & Plant Modifications",
    description: "Outage planning, workpack prep and parallel workfronts",
    href: "/services/shutdowns-revamps-plant-modifications",
    icon: Wrench,
  },
  {
    title: "Mechanical & Equipment Erection",
    description: "Receipt through precision alignment and commissioning",
    href: "/services/mechanical-equipment-erection",
    icon: Construction,
  },
  {
    title: "Plant Relocation, Dismantling & Reinstallation",
    description: "Controlled dismantling, transport and reinstallation",
    href: "/services/plant-relocation-dismantling",
    icon: PackageOpen,
  },
  {
    title: "Structural Steel & Fabrication",
    description: "Steel fabricated and erected for industrial environments",
    href: "/services/structural-steel-fabrication",
    icon: Layers,
  },
  {
    title: "Industrial Civil Works",
    description: "Foundations, containment and RCC coordinated with plant ops",
    href: "/services/industrial-civil-works",
    icon: Building2,
  },
  {
    title: "Piping Systems",
    description: "Spool fabrication, field erection and shutdown tie-ins",
    href: "/services/piping-systems",
    icon: Pipette,
  },
  {
    title: "Electrical & Instrumentation Support",
    description: "Motor connections, panels, hook-up and commissioning",
    href: "/services/electrical-instrumentation-support",
    icon: Zap,
  },
  {
    title: "Environmental & Pollution-Control Systems",
    description: "Dust extraction and effluent systems, engineering to commissioning",
    href: "/services/environmental-pollution-control",
    icon: Leaf,
  },
  {
    title: "Plant Improvement, Inspection & Rectification",
    description: "Condition assessment, rectification and 5S programmes",
    href: "/services/plant-improvement-inspection-rectification",
    icon: ClipboardCheck,
  },
  {
    title: "EPC Delivery, Procurement & Project Management",
    description: "Single accountable structure from scope to handover",
    href: "/services/epc-procurement-project-management",
    icon: ClipboardList,
  },
];
