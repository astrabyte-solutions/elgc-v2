import { IMAGES } from "@/lib/images";
import {
  Shovel,
  Columns3,
  Layers,
  Wrench,
  Settings,
  Package,
  Truck,
  Pipette,
  Zap,
  Leaf,
  ClipboardCheck,
  HardHat,
  type LucideIcon,
} from "lucide-react";

export interface ProjectScopeItem {
  title: string;
  icon: LucideIcon;
}

export interface ProjectGalleryItem {
  image: string;
  caption: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  categoryColor: string;
  location: string;
  year: number;
  industry: string;
  description: string;
  image: string;
  featured?: boolean;
  contractType?: string;
  value?: string;
  duration?: string;
  durationRange?: string;
  client?: string;
  area?: string;
  structureType?: string;
  overview?: string[];
  scopeOfWork?: ProjectScopeItem[];
  keyHighlights?: string[];
  gallery?: ProjectGalleryItem[];
}

export const PROJECTS: Project[] = [
  // ─── 1 ─────────────────────────────────────────────────────────────────────
  {
    slug: "major-rolling-mill-revamp",
    title: "Major Rolling Mill Revamp",
    category: "Shutdowns & Revamps",
    categoryColor: "bg-[#f97316]",
    location: "Abu Dhabi, UAE",
    year: 2026,
    industry: "Steel Manufacturing",
    description:
      "Replacement of shear machines and a pinch roll within a live rolling mill during a planned 28-day shutdown window, requiring precision sequencing across mechanical, structural and E&I disciplines.",
    image: IMAGES.projects.shears[0],
    featured: true,
    contractType: "Lump Sum",
    duration: "28-day shutdown",
    client: "Leading integrated steel producer (identity withheld)",
    value: "Peak mobilisation: 65 personnel",
    overview: [
      "ELGC was engaged to replace shear machines and a pinch roll within an operating rolling mill during a planned 28-day shutdown window. The project required precision sequencing across mechanical, structural and E&I disciplines to meet the fixed outage schedule.",
      "The scope was executed by a peak workforce of 65 personnel working across parallel workfronts. Pre-shutdown preparation — including scope freeze, method statements and material staging — was completed before the window opened, enabling ELGC to begin heavy lifting on day one.",
      "All equipment was replaced, aligned and reinstated within the planned window, with commissioning checks completed before handback to operations.",
    ],
    scopeOfWork: [
      { title: "Removal of existing shear machines and pinch roll", icon: Wrench },
      { title: "Structural steelwork modifications and supports", icon: Layers },
      { title: "Mechanical installation, alignment and grouting", icon: Settings },
      { title: "E&I disconnection, reconnection and testing", icon: Zap },
      { title: "Pre-commissioning checks and handback to operations", icon: ClipboardCheck },
    ],
    keyHighlights: [
      "28-day shutdown window maintained",
      "Peak mobilisation of 65 personnel across parallel workfronts",
      "Scope freeze and workpacks completed before window opened",
      "All disciplines — mechanical, structural, E&I — under single team",
      "Equipment commissioned and handed back to operations within window",
    ],
    gallery: [
      { image: IMAGES.projects.shears[0], caption: "Rolling Mill Workfront" },
      { image: IMAGES.projects.shears[1], caption: "Shear Machine Removal" },
      { image: IMAGES.projects.shears[2], caption: "Structural Modifications" },
      { image: IMAGES.projects.shears[3], caption: "Mechanical Installation" },
      { image: IMAGES.projects.shears[4], caption: "Alignment Works" },
      { image: IMAGES.projects.shears[5], caption: "E&I Connections" },
      { image: IMAGES.projects.shears[6], caption: "Pre-commissioning Checks" },
      { image: IMAGES.projects.shears[7], caption: "Handback to Operations" },
    ],
  },

  // ─── 2 ─────────────────────────────────────────────────────────────────────
  {
    slug: "yogurt-processing-plant-dismantling",
    title: "Yogurt Processing Plant Dismantling and Packing",
    category: "Relocation & Dismantling",
    categoryColor: "bg-blue-600",
    location: "Al Ain, UAE",
    year: 2025,
    industry: "Food & Beverage",
    description:
      "Controlled dismantling, documentation and export packing of a yogurt processing plant, preserving equipment condition and asset value for reinstallation at a new facility.",
    image: IMAGES.projects.yogurt[0],
    featured: true,
    contractType: "Lump Sum",
    duration: "Three months",
    client: "Food and beverage manufacturer (identity withheld)",
    overview: [
      "ELGC was engaged to carry out the complete dismantling, documentation and export packing of a yogurt processing plant at a facility in Al Ain.",
      "The scope required systematic disconnection and dismantling following an approved engineering sequence, with all components tagged, documented and packed to preserve their condition for reinstallation at the client's new facility.",
      "ELGC managed all rigging, heavy handling and packing activities, delivering a complete asset handover with documentation that supported the subsequent reinstallation programme.",
    ],
    scopeOfWork: [
      { title: "Pre-dismantling condition assessment and tagging", icon: ClipboardCheck },
      { title: "Controlled mechanical and piping disconnection", icon: Pipette },
      { title: "E&I disconnection and cable management", icon: Zap },
      { title: "Structural and equipment dismantling", icon: Wrench },
      { title: "Rigging, handling and export packing", icon: Package },
    ],
    keyHighlights: [
      "All equipment tagged, documented and packed for reinstallation",
      "Engineering sequence maintained to protect asset condition",
      "Export packing prepared to client specification",
      "Complete documentation package delivered with assets",
    ],
    gallery: [
      { image: IMAGES.projects.yogurt[0], caption: "Processing Line Dismantling" },
      { image: IMAGES.projects.yogurt[1], caption: "Equipment Tagging and Documentation" },
      { image: IMAGES.projects.yogurt[2], caption: "Export Packing and Loading" },
    ],
  },

  // ─── 3 ─────────────────────────────────────────────────────────────────────
  {
    slug: "roller-mill-replacement",
    title: "Roller Mill Replacement",
    category: "Shutdowns & Revamps",
    categoryColor: "bg-[#f97316]",
    location: "Abu Dhabi, UAE",
    year: 2024,
    industry: "Steel Manufacturing",
    description:
      "Replacement of a roller mill assembly within a planned shutdown window, including mechanical removal, installation of new unit and precision alignment before recommissioning.",
    image: IMAGES.projects.shears[2],
    featured: true,
    contractType: "Lump Sum",
    duration: "Planned shutdown window",
    client: "Steel manufacturing client (identity withheld)",
    overview: [
      "ELGC carried out the replacement of a roller mill assembly within a planned shutdown window at a steel manufacturing facility in Abu Dhabi.",
      "The scope included removal of the existing roller mill, preparation of the installation area, setting and alignment of the new unit, and all associated mechanical and E&I reinstatement work.",
      "The project was completed within the planned outage window with commissioning checks confirmed before plant restart.",
    ],
    scopeOfWork: [
      { title: "Removal of existing roller mill assembly", icon: Wrench },
      { title: "Installation area preparation and base works", icon: Shovel },
      { title: "Setting, grouting and precision alignment", icon: Settings },
      { title: "E&I reinstatement and testing", icon: Zap },
      { title: "Pre-commissioning and handback", icon: ClipboardCheck },
    ],
    keyHighlights: [
      "Completed within planned shutdown window",
      "Precision alignment achieved to manufacturer tolerance",
      "All disciplines coordinated under single team",
    ],
    gallery: [
      { image: IMAGES.projects.shears[2], caption: "Roller Mill Removal" },
      { image: IMAGES.projects.shears[3], caption: "New Unit Installation" },
      { image: IMAGES.projects.shears[4], caption: "Alignment and Commissioning" },
    ],
  },

  // ─── 4 ─────────────────────────────────────────────────────────────────────
  {
    slug: "material-recovery-plant-erection",
    title: "Material Recovery Plant Equipment Erection",
    category: "Equipment Erection",
    categoryColor: "bg-[#7c3aed]",
    location: "Abu Dhabi, UAE",
    year: 2024,
    industry: "Steel Manufacturing",
    description:
      "Supply and erection of mechanical equipment for a material recovery plant, including receipt, storage, precision setting and alignment of processing machinery.",
    image: IMAGES.projects.shears[7],
    featured: true,
    contractType: "Lump Sum",
    duration: "Five months",
    client: "Industrial client (identity withheld)",
    overview: [
      "ELGC was engaged for the mechanical equipment erection scope on a material recovery plant project in Abu Dhabi.",
      "The scope covered equipment receipt, incoming inspection, storage and preservation, foundation preparation, equipment setting, precision grouting and alignment.",
      "Works were coordinated alongside civil and E&I contractors to maintain the overall project programme and achieve scheduled mechanical completion.",
    ],
    scopeOfWork: [
      { title: "Equipment receipt, inspection and storage", icon: Package },
      { title: "Foundation preparation and base-plate setting", icon: Shovel },
      { title: "Precision grouting and levelling", icon: Settings },
      { title: "Mechanical alignment and coupling", icon: Wrench },
      { title: "Pre-commissioning support and documentation", icon: ClipboardCheck },
    ],
    keyHighlights: [
      "Equipment received, inspected and stored to preservation plan",
      "Precision grouting and alignment completed to manufacturer tolerances",
      "Coordinated alongside civil and E&I contractors",
    ],
    gallery: [
      { image: IMAGES.projects.shears[7], caption: "Equipment Receipt and Inspection" },
      { image: IMAGES.projects.shears[8], caption: "Foundation Preparation" },
      { image: IMAGES.projects.shears[9], caption: "Equipment Setting and Grouting" },
      { image: IMAGES.projects.shears[10], caption: "Alignment Works" },
    ],
  },

  // ─── 5 ─────────────────────────────────────────────────────────────────────
  {
    slug: "scrap-chute-replacement",
    title: "Scrap Chute Replacement",
    category: "Shutdowns & Revamps",
    categoryColor: "bg-[#f97316]",
    location: "Abu Dhabi, UAE",
    year: 2024,
    industry: "Steel Manufacturing",
    description:
      "Replacement of scrap chutes during a planned outage window within a steel plant, including structural removal, new chute fabrication and installation.",
    image: IMAGES.projects.shears[3],
    featured: true,
    contractType: "Lump Sum",
    duration: "Planned shutdown window",
    client: "Steel manufacturing client (identity withheld)",
    overview: [
      "ELGC carried out the replacement of scrap chutes at a steel manufacturing plant during a planned outage window.",
      "The scope included removal of worn chutes, fabrication of replacement sections and installation with all associated structural and mechanical work completed within the shutdown window.",
    ],
    scopeOfWork: [
      { title: "Removal of existing scrap chutes", icon: Wrench },
      { title: "Fabrication of replacement chute sections", icon: Layers },
      { title: "Structural modifications and supports", icon: Columns3 },
      { title: "Installation, alignment and securing", icon: Settings },
      { title: "Inspection and handback", icon: ClipboardCheck },
    ],
    keyHighlights: [
      "Removal and replacement completed within planned window",
      "Chutes fabricated and pre-staged before shutdown commenced",
      "Structural modifications incorporated within the same scope",
    ],
    gallery: [
      { image: IMAGES.projects.shears[3], caption: "Scrap Chute Removal" },
      { image: IMAGES.projects.shears[4], caption: "Chute Fabrication" },
      { image: IMAGES.projects.shears[5], caption: "Installation and Alignment" },
    ],
  },

  // ─── 6 ─────────────────────────────────────────────────────────────────────
  {
    slug: "industrial-5s-implementation",
    title: "Industrial 5S Implementation",
    category: "Inspection & Improvement",
    categoryColor: "bg-[#059669]",
    location: "Abu Dhabi, UAE",
    year: 2023,
    industry: "Steel Manufacturing",
    description:
      "Implementation of an industrial 5S workplace organisation programme across plant areas, covering sort, set in order, shine, standardise and sustain phases.",
    image: IMAGES.projects.shears[12],
    featured: true,
    contractType: "Service Contract",
    duration: "Four months",
    client: "Industrial client (identity withheld)",
    overview: [
      "ELGC was engaged to implement an industrial 5S programme across designated plant areas at a manufacturing facility in Abu Dhabi.",
      "The scope covered all five phases — Sort, Set in Order, Shine, Standardise and Sustain — with structured execution, documentation and a handover programme to embed sustainability of standards.",
    ],
    scopeOfWork: [
      { title: "Sort — identification and removal of unneeded items", icon: ClipboardCheck },
      { title: "Set in Order — organised storage and labelling", icon: Columns3 },
      { title: "Shine — deep cleaning and condition restoration", icon: HardHat },
      { title: "Standardise — procedures and visual standards", icon: Layers },
      { title: "Sustain — handover and monitoring framework", icon: Settings },
    ],
    keyHighlights: [
      "All five 5S phases delivered and documented",
      "Visual standards established across targeted areas",
      "Handover programme designed to sustain improvements",
    ],
    gallery: [
      { image: IMAGES.projects.shears[12], caption: "5S Sort and Set in Order" },
      { image: IMAGES.projects.shears[11], caption: "Shine and Standardise Phase" },
      { image: IMAGES.projects.shears[10], caption: "Visual Standards Implementation" },
    ],
  },

  // ─── 7 ─────────────────────────────────────────────────────────────────────
  {
    slug: "ship-unloader-inspection-rectification",
    title: "Ship-Unloader Inspection and Rectification Support",
    category: "Inspection & Improvement",
    categoryColor: "bg-[#059669]",
    location: "Abu Dhabi, UAE",
    year: 2024,
    industry: "Steel Manufacturing",
    description:
      "Inspection and rectification support for ship-unloader structural and mechanical components, providing condition assessment and execution of identified repair works.",
    image: IMAGES.projects.shears[5],
    featured: true,
    contractType: "Service Contract",
    duration: "Planned inspection window",
    client: "Industrial client (identity withheld)",
    overview: [
      "ELGC provided inspection and rectification support for ship-unloader equipment at a steel plant facility in Abu Dhabi.",
      "The scope covered structured inspection of structural and mechanical components, condition reporting, and execution of identified rectification works within the planned access window.",
    ],
    scopeOfWork: [
      { title: "Structural and mechanical inspection", icon: ClipboardCheck },
      { title: "Condition assessment and reporting", icon: Layers },
      { title: "Structural rectification works", icon: Wrench },
      { title: "Mechanical component repair and refurbishment", icon: Settings },
      { title: "Close-out documentation", icon: HardHat },
    ],
    keyHighlights: [
      "Structured inspection with documented condition findings",
      "Rectification works executed within planned access window",
      "Close-out documentation issued for all rectified items",
    ],
    gallery: [
      { image: IMAGES.projects.shears[5], caption: "Ship-Unloader Inspection" },
      { image: IMAGES.projects.shears[6], caption: "Structural Assessment" },
      { image: IMAGES.projects.shears[7], caption: "Rectification Works" },
    ],
  },

  // ─── 8 ─────────────────────────────────────────────────────────────────────
  {
    slug: "structural-steel-plant-expansion",
    title: "Structural Steel for Plant Expansion",
    category: "Civil & Structural",
    categoryColor: "bg-green",
    location: "Abu Dhabi, UAE",
    year: 2021,
    industry: "Steel Manufacturing",
    description:
      "Fabrication and erection of structural steelwork for a plant expansion programme, including equipment support structures, platforms and walkways within an operating facility.",
    image: IMAGES.projects.shears[9],
    featured: true,
    contractType: "Lump Sum",
    duration: "Seven months",
    client: "Steel manufacturing client (identity withheld)",
    overview: [
      "ELGC was awarded the structural steel fabrication and erection scope for a plant expansion project at a steel manufacturing facility in Abu Dhabi.",
      "The scope included equipment support structures, platforms, walkways and access steelwork, all fabricated to engineering drawings and erected within the operating plant environment.",
      "Works were sequenced to allow ongoing plant operations to continue with minimal disruption throughout the construction period.",
    ],
    scopeOfWork: [
      { title: "Structural steel fabrication to approved drawings", icon: Layers },
      { title: "Equipment support frames and platforms", icon: Columns3 },
      { title: "Walkways, handrails and access structures", icon: HardHat },
      { title: "Surface preparation and protective coating", icon: Wrench },
      { title: "Site erection and QA documentation", icon: ClipboardCheck },
    ],
    keyHighlights: [
      "All steel fabricated to dimensional inspection records",
      "Erection completed within live plant environment",
      "Works sequenced to protect ongoing operations",
      "Full QA documentation compiled and issued",
    ],
    gallery: [
      { image: IMAGES.projects.shears[9], caption: "Structural Steel Fabrication" },
      { image: IMAGES.projects.shears[10], caption: "Equipment Support Structures" },
      { image: IMAGES.projects.shears[11], caption: "Platform and Walkway Erection" },
      { image: IMAGES.projects.shears[12], caption: "Site Erection and Alignment" },
    ],
  },

  // ─── 9 ─────────────────────────────────────────────────────────────────────
  {
    slug: "cooling-tower-relocation",
    title: "Cooling Tower Relocation",
    category: "Relocation & Dismantling",
    categoryColor: "bg-blue-600",
    location: "Abu Dhabi, UAE",
    year: 2021,
    industry: "Industrial",
    description:
      "Controlled dismantling, transport and reinstallation of a cooling tower unit to a new location within the same facility, including foundation preparation and recommissioning support.",
    image: IMAGES.projects.shears[8],
    overview: [
      "ELGC carried out the controlled dismantling and relocation of a cooling tower to a new position within an industrial facility in Abu Dhabi.",
      "The scope included condition assessment, systematic dismantling, transport, foundation preparation at the receiving location, reinstallation, and recommissioning support.",
    ],
    scopeOfWork: [
      { title: "Condition assessment and dismantling sequence planning", icon: ClipboardCheck },
      { title: "Controlled structural and mechanical dismantling", icon: Wrench },
      { title: "Transport and handling coordination", icon: Truck },
      { title: "Foundation preparation at receiving location", icon: Shovel },
      { title: "Reinstallation, alignment and recommissioning", icon: Settings },
    ],
    keyHighlights: [
      "Asset condition maintained through relocation sequence",
      "Foundation prepared and handed over on programme",
      "Recommissioning support provided at new location",
    ],
    gallery: [
      { image: IMAGES.projects.shears[8], caption: "Cooling Tower Dismantling" },
      { image: IMAGES.projects.shears[9], caption: "Transport and Handling" },
      { image: IMAGES.projects.shears[10], caption: "Reinstallation Works" },
    ],
  },

  // ─── 10 ────────────────────────────────────────────────────────────────────
  {
    slug: "cold-dri-dust-collection-dry",
    title: "Cold DRI Dust Collection—Dry Extraction",
    category: "Environmental Systems",
    categoryColor: "bg-[#059669]",
    location: "Abu Dhabi, UAE",
    year: 2020,
    industry: "Steel Manufacturing",
    description:
      "Design, fabrication, installation and commissioning of a dry extraction dust collection system for a cold direct-reduced iron handling area within a steel plant.",
    image: IMAGES.projects.shears[14],
    overview: [
      "ELGC delivered a dry extraction dust collection system for the cold DRI handling area at a steel plant in Abu Dhabi.",
      "The scope included structural supports, ducting fabrication and installation, collection equipment erection, E&I integration and system commissioning.",
    ],
    scopeOfWork: [
      { title: "Structural supports and equipment bases", icon: Columns3 },
      { title: "Ducting fabrication and installation", icon: Layers },
      { title: "Dust collection equipment erection", icon: Leaf },
      { title: "E&I integration and control hook-up", icon: Zap },
      { title: "System commissioning and performance verification", icon: ClipboardCheck },
    ],
    keyHighlights: [
      "Dry extraction system installed and commissioned within live plant",
      "Structural, ducting and E&I scopes delivered under one team",
      "System performance verified against design criteria",
    ],
    gallery: [
      { image: IMAGES.projects.shears[14], caption: "Ducting Installation" },
      { image: IMAGES.projects.shears[15], caption: "Collection Equipment" },
      { image: IMAGES.projects.shears[13], caption: "E&I Integration" },
    ],
  },

  // ─── 11 ────────────────────────────────────────────────────────────────────
  {
    slug: "slag-tipping-cooling-station",
    title: "Slag Tipping and Cooling Station",
    category: "EPC Projects",
    categoryColor: "bg-[#2563eb]",
    location: "Abu Dhabi, UAE",
    year: 2020,
    industry: "Steel Manufacturing",
    description:
      "EPC delivery of a slag tipping and cooling station, covering civil works, structural steelwork, mechanical equipment installation and E&I through to commissioning.",
    image: IMAGES.projects.shears[10],
    overview: [
      "ELGC delivered the slag tipping and cooling station on an EPC basis for a steel manufacturing client in Abu Dhabi.",
      "The scope covered all disciplines from civil foundations and structural steelwork through mechanical equipment installation and E&I integration to system commissioning and handover.",
    ],
    scopeOfWork: [
      { title: "Civil foundations and drainage works", icon: Shovel },
      { title: "Structural steelwork fabrication and erection", icon: Columns3 },
      { title: "Mechanical equipment installation and alignment", icon: Settings },
      { title: "Piping and fluid system installation", icon: Pipette },
      { title: "E&I integration and system commissioning", icon: Zap },
    ],
    keyHighlights: [
      "Full EPC scope delivered under single accountability",
      "All disciplines — civil, structural, mechanical, E&I — integrated",
      "System commissioned and handed over to operations",
    ],
    gallery: [
      { image: IMAGES.projects.shears[10], caption: "Civil and Structural Works" },
      { image: IMAGES.projects.shears[11], caption: "Mechanical Installation" },
      { image: IMAGES.projects.shears[12], caption: "System Commissioning" },
    ],
  },

  // ─── 12 ────────────────────────────────────────────────────────────────────
  {
    slug: "oxygen-injection-system-upgrade",
    title: "Oxygen Injection System Upgrade",
    category: "Shutdowns & Revamps",
    categoryColor: "bg-[#f97316]",
    location: "Abu Dhabi, UAE",
    year: 2018,
    industry: "Steel Manufacturing",
    description:
      "Upgrade of an oxygen injection system within a steel plant, including piping modifications, valve replacement and associated E&I work during a planned maintenance window.",
    image: IMAGES.projects.shears[13],
    overview: [
      "ELGC carried out the upgrade of an oxygen injection system at a steel manufacturing facility in Abu Dhabi during a planned maintenance window.",
      "The scope included piping modifications, valve and instrument replacement, pressure testing and recommissioning within the planned outage period.",
    ],
    scopeOfWork: [
      { title: "Piping modifications and spool replacement", icon: Pipette },
      { title: "Valve and instrument replacement", icon: Wrench },
      { title: "E&I disconnection and reconnection", icon: Zap },
      { title: "Pressure testing and leak checking", icon: ClipboardCheck },
      { title: "Recommissioning and system handback", icon: Settings },
    ],
    keyHighlights: [
      "All piping modifications completed within planned window",
      "Pressure testing passed before system restart",
      "E&I scope integrated within same team",
    ],
    gallery: [
      { image: IMAGES.projects.shears[13], caption: "Piping Modification Works" },
      { image: IMAGES.projects.shears[14], caption: "Valve Replacement" },
      { image: IMAGES.projects.shears[15], caption: "Pressure Testing" },
    ],
  },

  // ─── 13 ────────────────────────────────────────────────────────────────────
  {
    slug: "cold-dri-dust-collection-wet",
    title: "Cold DRI Dust Collection—Wet Slurry Disposal",
    category: "Environmental Systems",
    categoryColor: "bg-[#059669]",
    location: "Abu Dhabi, UAE",
    year: 2015,
    industry: "Steel Manufacturing",
    description:
      "Design, fabrication, installation and commissioning of a wet slurry extraction and disposal system for dust collection in a cold DRI plant area.",
    image: IMAGES.projects.shears[15],
    overview: [
      "ELGC delivered a wet slurry extraction and disposal system for dust collection within the cold DRI plant area at a steel manufacturing facility in Abu Dhabi.",
      "The scope included structural supports, wet extraction equipment installation, slurry piping and handling systems, E&I integration and commissioning.",
    ],
    scopeOfWork: [
      { title: "Structural supports and equipment bases", icon: Columns3 },
      { title: "Wet extraction equipment installation", icon: Leaf },
      { title: "Slurry piping and disposal system installation", icon: Pipette },
      { title: "E&I integration and control hook-up", icon: Zap },
      { title: "System commissioning and handover", icon: ClipboardCheck },
    ],
    keyHighlights: [
      "Wet slurry extraction system installed and commissioned",
      "Structural, piping and E&I scopes delivered under one team",
      "Successor to earlier dry extraction project at same facility",
    ],
    gallery: [
      { image: IMAGES.projects.shears[15], caption: "Wet Extraction Installation" },
      { image: IMAGES.projects.shears[14], caption: "Slurry Piping Works" },
      { image: IMAGES.projects.shears[13], caption: "E&I Integration" },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}

export const PROJECT_CATEGORIES = [
  "All Projects",
  "Shutdowns & Revamps",
  "Equipment Erection",
  "Relocation & Dismantling",
  "Civil & Structural",
  "Environmental Systems",
  "Inspection & Improvement",
  "EPC Projects",
];
