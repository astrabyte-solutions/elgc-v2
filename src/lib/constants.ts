export { COMPANY, CERTIFICATIONS, COMPANY_CERTIFICATES } from "@/lib/data/company";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About ELGC", href: "/about" },
  {
    label: "Capabilities",
    href: "/services",
    children: [
      { label: "Shutdowns, Revamps & Plant Modifications", href: "/services/shutdowns-revamps-plant-modifications" },
      { label: "Mechanical & Equipment Erection", href: "/services/mechanical-equipment-erection" },
      { label: "Plant Relocation, Dismantling & Reinstallation", href: "/services/plant-relocation-dismantling" },
      { label: "Structural Steel & Fabrication", href: "/services/structural-steel-fabrication" },
      { label: "Industrial Civil Works", href: "/services/industrial-civil-works" },
      { label: "Piping Systems", href: "/services/piping-systems" },
      { label: "Electrical & Instrumentation Support", href: "/services/electrical-instrumentation-support" },
      { label: "Environmental & Pollution-Control Systems", href: "/services/environmental-pollution-control" },
      { label: "Plant Improvement, Inspection & Rectification", href: "/services/plant-improvement-inspection-rectification" },
      { label: "EPC Delivery, Procurement & Project Management", href: "/services/epc-procurement-project-management" },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "Quality & HSE", href: "/quality-safety" },
  { label: "Insights", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_SERVICES = [
  "Shutdowns & Revamps",
  "Equipment Erection",
  "Plant Relocation & Dismantling",
  "Structural Steel & Fabrication",
  "Environmental Systems",
  "EPC & Project Management",
];
