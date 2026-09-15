import { IMAGES } from "@/lib/images";

export const QUALITY_SAFETY_HERO_FEATURES = [
  {
    title: "Pre-Mobilisation Planning",
    subtitle: "Method statements before site entry",
    iconName: "ShieldCheck",
  },
  {
    title: "Permit to Work",
    subtitle: "Compliance maintained throughout",
    iconName: "ClipboardCheck",
  },
  {
    title: "ISO 9001 & ISO 45001",
    subtitle: "Certified management systems",
    iconName: "Target",
  },
  {
    title: "Structured Handover",
    subtitle: "As-built documentation compiled",
    iconName: "HardHat",
  },
] as const;

export const QUALITY_SAFETY_APPROACH = [
  {
    title: "Plan Before Entry",
    description:
      "Method statements and risk assessments are prepared and approved before site mobilisation begins.",
    iconName: "ShieldCheck",
  },
  {
    title: "Control During Execution",
    description:
      "Permit to work compliance, daily toolbox talks and supervision checks are maintained throughout.",
    iconName: "UserCog",
  },
  {
    title: "Inspect and Verify",
    description:
      "Inspection and test plans aligned to scope, with material traceability and NCR management.",
    iconName: "ClipboardCheck",
  },
  {
    title: "Report and Track",
    description:
      "Progress reported to client on agreed cycle. Constraints and look-ahead registers maintained.",
    iconName: "Target",
  },
  {
    title: "Hand Over with Evidence",
    description:
      "As-built documentation, test certificates and quality records compiled and handed over at close-out.",
    iconName: "Award",
  },
] as const;

export const QUALITY_SAFETY_STANDARDS = [
  {
    code: "9001:2015",
    label: "ISO",
    description:
      "Quality Management System — Constructional and Engineering Contracting related to Technology Projects",
    file: "/certificates/ISO-9001-2015-Certificate.pdf",
  },
  {
    code: "45001:2018",
    label: "ISO",
    description: "Occupational Health & Safety Management System",
    file: "/certificates/ISO-45001-2008-Certificate.pdf",
  },
  {
    code: "14001",
    label: "ISO",
    description: "Environmental Management System",
    file: "",
  },
] as const;

export const QUALITY_SAFETY_SAFETY_PRINCIPLES = [
  {
    title: "Safety Before Activity",
    description:
      "No work commences without an approved method statement, risk assessment and valid permit to work.",
    iconName: "HardHat",
  },
  {
    title: "Daily Toolbox Talks",
    description:
      "Toolbox talks are conducted at each shift start to align the team on hazards, controls and priorities.",
    iconName: "ClipboardCheck",
  },
  {
    title: "Site Inspections",
    description:
      "Regular site inspections by supervision and the QHSE team identify and close out conditions before they escalate.",
    iconName: "SearchCheck",
  },
  {
    title: "Incident Reporting",
    description:
      "All incidents and near-misses are reported, investigated and reviewed to drive corrective action.",
    iconName: "AlertTriangle",
  },
  {
    title: "Operative Competency",
    description:
      "Competency verification is completed for all operatives before assignment to safety-critical tasks.",
    iconName: "Users",
  },
  {
    title: "Respect for the Plant",
    description:
      "We operate within the host facility's safety rules, permit systems and environmental requirements.",
    iconName: "HeartPulse",
  },
] as const;

export const QUALITY_SAFETY_EXCELLENCE = [
  {
    title: "Quality Plan",
    description:
      "A project-specific quality plan is submitted and approved before works commence.",
    iconName: "ClipboardList",
  },
  {
    title: "Inspection & Test Plans",
    description:
      "ITPs are developed and aligned to scope, with hold and witness points agreed with the client.",
    iconName: "FileCog",
  },
  {
    title: "Material Traceability",
    description:
      "Test certificates and material traceability records are maintained and available for inspection.",
    iconName: "Search",
  },
  {
    title: "NCR Management",
    description:
      "Non-conformances are documented, tracked and closed out before works proceed to the next stage.",
    iconName: "Handshake",
  },
  {
    title: "Project Controls",
    description:
      "Programme tracking at activity level with variation management and client sign-off on changes.",
    iconName: "Lightbulb",
  },
  {
    title: "Handover Documentation",
    description:
      "Complete as-built records, test dossiers and QA documentation handed over at project close-out.",
    iconName: "ShieldCheck",
  },
] as const;

export const QUALITY_SAFETY_FOOTER_STATS = [
  {
    value: 2008,
    suffix: "",
    title: "Established",
    subtitle: "Operating in Abu Dhabi",
    iconName: "Award",
  },
  {
    value: 100,
    suffix: "+",
    title: "Projects Delivered",
    subtitle: "in live industrial environments",
    iconName: "BadgeCheck",
  },
  {
    value: 10,
    suffix: "+",
    title: "Industrial Clients",
    subtitle: "with repeat engagement",
    iconName: "Shield",
  },
  {
    value: 3,
    suffix: "",
    title: "Management Systems",
    subtitle: "ISO 9001, 45001, 14001",
    iconName: "Globe",
  },
] as const;

export const QUALITY_SAFETY_IMAGES = {
  hero: IMAGES.hero.quality,
  safety: IMAGES.projects.shears[8],
  cta: IMAGES.hero.industries,
};
