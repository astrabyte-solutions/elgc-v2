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
  type LucideIcon,
} from "lucide-react";

const GREEN = "#22c55e";
const BLUE = "#2563eb";

export interface HomeServiceCard {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  accent: typeof GREEN | typeof BLUE;
}

export const HOME_SERVICE_CARDS: HomeServiceCard[] = [
  {
    title: "Shutdowns, Revamps & Plant Modifications",
    description:
      "Planned and executed within the outage window — pre-planned workpacks, parallel workfronts and structured handback.",
    href: "/services/shutdowns-revamps-plant-modifications",
    icon: Wrench,
    accent: GREEN,
  },
  {
    title: "Mechanical & Equipment Erection",
    description:
      "From delivery point to final position — receipt, inspection, precision setting, grouting and alignment.",
    href: "/services/mechanical-equipment-erection",
    icon: Construction,
    accent: BLUE,
  },
  {
    title: "Plant Relocation, Dismantling & Reinstallation",
    description:
      "Controlled asset movements — condition assessment, tagged dismantling, preservation and reinstallation.",
    href: "/services/plant-relocation-dismantling",
    icon: PackageOpen,
    accent: GREEN,
  },
  {
    title: "Structural Steel & Fabrication",
    description:
      "Industrial steelwork fabricated and erected to drawing — equipment supports, platforms, modifications.",
    href: "/services/structural-steel-fabrication",
    icon: Layers,
    accent: BLUE,
  },
  {
    title: "Industrial Civil Works",
    description:
      "Equipment foundations, containment, drainage and RCC structures coordinated with plant operations.",
    href: "/services/industrial-civil-works",
    icon: Building2,
    accent: GREEN,
  },
  {
    title: "Piping Systems",
    description:
      "Spool fabrication, field erection, modifications and tie-ins integrated within shutdown campaigns.",
    href: "/services/piping-systems",
    icon: Pipette,
    accent: BLUE,
  },
  {
    title: "Electrical & Instrumentation Support",
    description:
      "Motor connections, panel works, instrument hook-up and commissioning support within project execution.",
    href: "/services/electrical-instrumentation-support",
    icon: Zap,
    accent: GREEN,
  },
  {
    title: "Environmental & Pollution-Control Systems",
    description:
      "Dust extraction, filtration and effluent systems from engineering through commissioning.",
    href: "/services/environmental-pollution-control",
    icon: Leaf,
    accent: BLUE,
  },
  {
    title: "Plant Improvement, Inspection & Rectification",
    description:
      "Condition assessment, structured inspection, rectification works and 5S programme delivery.",
    href: "/services/plant-improvement-inspection-rectification",
    icon: ClipboardCheck,
    accent: GREEN,
  },
];
