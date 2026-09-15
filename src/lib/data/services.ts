import { IMAGES } from "@/lib/images";

export interface ServiceProjectCard {
  title: string;
  image: string;
  tags: string[];
  href: string;
}

export interface Service {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  pageHeroDescription?: string;
  heroTitleLines?: { white: string; green: string };
  heroButtonLabel?: string;
  iconName: string;
  href: string;
  heroImage: string;
  heroFeatures: string[];
  overview: {
    title: string;
    highlight: string;
    description: string;
    features: { title: string; description: string }[];
  };
  overviewLayout?: "triple-dual-image" | "triple-single-image" | "split-left" | "triple-image-center" | "collage-left";
  overviewBg?: "dots" | "white";
  overviewFeatureStyle?: "green-icon" | "grey-box" | "green-title" | "navy-title";
  overviewImages?: [string, string] | [string, string, string];
  capabilities: string[];
  capabilityBullets?: Record<string, string[]>;
  capabilitiesLabel?: string;
  capabilitiesBg?: "dots" | "grey" | "white";
  process: { step: string; title: string; description: string }[];
  processSectionLabel?: string;
  processVariant?: "default" | "icon-circle" | "green-circle" | "alternating";
  processIconPosition?: "above" | "below";
  projectsLayout?: "featured-grid" | "horizontal-five";
  whyChoose: { title: string; description: string }[];
  whyChooseHeading?: string;
  detailProjects?: {
    featured: ServiceProjectCard;
    others: ServiceProjectCard[];
    viewAllLabel: string;
    viewAllHref: string;
    sectionLabel?: string;
  };
  ctaTitle: string;
  ctaHighlight: string;
  ctaSubtitle?: string;
  ctaImage?: string;
  ctaIcon?: "service" | "shield" | "zap" | "leaf" | "crane";
  featuresBarVariant?: "default" | "civil" | "fabrication" | "erection" | "electrical" | "environmental";
  whyChooseColumns?: 4 | 5;
  whyChooseVariant?: "dark" | "light";
  whyChooseLayout?: "default" | "inline";
}

export const SERVICES: Service[] = [
  // ─── 01 ─────────────────────────────────────────────────────────────────────
  {
    slug: "shutdowns-revamps-plant-modifications",
    number: "01",
    title: "Shutdowns, Revamps & Plant Modifications",
    shortTitle: "Shutdowns & Revamps",
    description:
      "Planned for the Window. Prepared for the Workfront. ELGC executes shutdowns, revamps and plant modifications inside live industrial environments where every hour of downtime counts.",
    pageHeroDescription:
      "ELGC plans and executes scheduled shutdowns, plant revamps, and in-service modifications with precision pre-planning and disciplined on-site execution inside live industrial environments.",
    heroTitleLines: { white: "Shutdowns, Revamps &", green: "Plant Modifications" },
    heroButtonLabel: "Discuss Your Shutdown",
    iconName: "Wrench",
    href: "/services/shutdowns-revamps-plant-modifications",
    heroImage: IMAGES.hero.services,
    heroFeatures: [
      "Pre-Shutdown Planning",
      "Window Adherence",
      "Workfront Coordination",
      "Isolation & PTW Compliance",
      "Safe Handback",
    ],
    overview: {
      title: "Planned for the Window.",
      highlight: "Prepared for the Workfront.",
      description:
        "ELGC delivers shutdown and revamp services inside live industrial environments where every hour of downtime carries direct commercial cost. Our teams are selected for shutdown experience, briefed well ahead of the planned window, and structured to maintain workfront density throughout the campaign.",
      features: [
        {
          title: "Pre-Shutdown Engineering",
          description: "Scope freeze, method statements, and work packages prepared before mobilisation.",
        },
        {
          title: "Workfront Density",
          description: "Multiple parallel workfronts maximise productivity within the fixed outage window.",
        },
        {
          title: "Isolation & PTW Compliance",
          description: "Rigorous permit-to-work and isolation discipline maintained throughout.",
        },
        {
          title: "Commissioning & Handback",
          description: "Systematic reinstatement checks and signed handback to operations.",
        },
      ],
    },
    overviewLayout: "split-left",
    overviewBg: "white",
    overviewFeatureStyle: "green-title",
    overviewImages: [IMAGES.projects.shears[0], IMAGES.projects.shears[1]],
    featuresBarVariant: "default",
    whyChooseColumns: 4,
    capabilities: [
      "Shutdown planning, sequencing and workpack preparation",
      "Equipment removal, replacement and reinstatement",
      "In-service plant modifications and tie-ins",
      "Structural modifications within operating plants",
      "Mechanical equipment overhaul support",
      "Piping modifications and replacements during outages",
      "Commissioning and reinstatement checks",
      "Hot-work, cold-work and confined-space execution",
    ],
    processSectionLabel: "OUR SHUTDOWN EXECUTION PROCESS",
    processVariant: "green-circle",
    process: [
      {
        step: "01",
        title: "Scope Definition & Freeze",
        description: "Confirm scope, deliverables and shutdown objectives in advance of mobilisation.",
      },
      {
        step: "02",
        title: "Workpack Preparation",
        description: "Method statements, risk assessments and permits prepared per workfront.",
      },
      {
        step: "03",
        title: "Pre-Mobilisation Readiness",
        description: "Materials, tools and teams staged before the window opens.",
      },
      {
        step: "04",
        title: "Window Execution",
        description: "Parallel workfronts executed under continuous supervision to schedule.",
      },
      {
        step: "05",
        title: "Inspection & Testing",
        description: "Hold points, inspections and functional tests completed before reinstatement.",
      },
      {
        step: "06",
        title: "Commissioning & Handback",
        description: "Safe handback to operations with full documentation package.",
      },
    ],
    whyChoose: [
      {
        title: "Shutdown-Experienced Teams",
        description: "Personnel selected for live-plant and outage-work background.",
      },
      {
        title: "Pre-Planning Discipline",
        description: "Scope freeze and workpacks prepared well before the window opens.",
      },
      {
        title: "Window Adherence",
        description: "Structured workfront management to protect the outage duration.",
      },
      {
        title: "Integrated Disciplines",
        description: "Mechanical, structural, piping and E&I resources under one team.",
      },
    ],
    whyChooseHeading: "WHY CHOOSE ELGC FOR SHUTDOWNS & REVAMPS",
    detailProjects: {
      sectionLabel: "RELATED PROJECTS",
      featured: {
        title: "Major Rolling Mill Revamp",
        image: IMAGES.projects.shears[0],
        tags: ["Shutdowns & Revamps", "Steel Manufacturing", "Abu Dhabi, UAE"],
        href: "/projects/major-rolling-mill-revamp",
      },
      others: [
        {
          title: "Roller Mill Replacement",
          image: IMAGES.projects.shears[2],
          tags: ["Shutdowns & Revamps"],
          href: "/projects/roller-mill-replacement",
        },
        {
          title: "Scrap Chute Replacement",
          image: IMAGES.projects.shears[3],
          tags: ["Shutdowns & Revamps"],
          href: "/projects/scrap-chute-replacement",
        },
        {
          title: "Oxygen Injection System Upgrade",
          image: IMAGES.projects.shears[4],
          tags: ["Shutdowns & Revamps"],
          href: "/projects/oxygen-injection-system-upgrade",
        },
        {
          title: "Ship-Unloader Rectification Support",
          image: IMAGES.projects.shears[5],
          tags: ["Inspection & Improvement"],
          href: "/projects/ship-unloader-inspection-rectification",
        },
      ],
      viewAllLabel: "VIEW ALL SHUTDOWN PROJECTS",
      viewAllHref: "/projects",
    },
    ctaTitle: "Planning a Shutdown or",
    ctaHighlight: "Plant Modification?",
    ctaSubtitle:
      "Contact ELGC early to align scope, resources and workpack preparation with your planned outage window.",
    ctaIcon: "service",
  },

  // ─── 02 ─────────────────────────────────────────────────────────────────────
  {
    slug: "mechanical-equipment-erection",
    number: "02",
    title: "Mechanical & Equipment Erection",
    shortTitle: "Equipment Erection",
    description:
      "From Delivery Point to Final Position. ELGC manages mechanical equipment erection from receipt and storage through precision installation, alignment and commissioning handover.",
    pageHeroDescription:
      "ELGC provides complete mechanical erection services covering receipt, storage, setting, grouting, precision alignment and commissioning support for industrial equipment.",
    heroTitleLines: { white: "Mechanical &", green: "Equipment Erection" },
    heroButtonLabel: "Discuss Equipment Erection",
    iconName: "Construction",
    href: "/services/mechanical-equipment-erection",
    heroImage: IMAGES.hero.erection,
    heroFeatures: [
      "Receipt & Inspection",
      "Foundation Preparation",
      "Precision Setting & Grouting",
      "Alignment & Coupling",
      "Commissioning Support",
    ],
    overview: {
      title: "From Delivery Point",
      highlight: "to Final Position.",
      description:
        "ELGC manages the full mechanical erection sequence from equipment receipt and inspection through precision installation, grouting, alignment and commissioning handover. Our teams are experienced in working alongside OEM representatives and integrating into client construction programmes.",
      features: [
        {
          title: "Receipt & Storage Management",
          description: "Incoming inspection, preservation and storage to manufacturer requirements.",
        },
        {
          title: "Precision Setting & Grouting",
          description: "Equipment set on prepared bases with precision alignment and grouted to specification.",
        },
        {
          title: "Alignment & Commissioning",
          description: "Final alignment checked before commissioning, with full QA documentation.",
        },
        {
          title: "OEM Interface",
          description: "Experienced working alongside OEM supervision and hold-point requirements.",
        },
      ],
    },
    overviewLayout: "triple-dual-image",
    overviewBg: "white",
    overviewFeatureStyle: "green-title",
    overviewImages: [IMAGES.hero.erection, IMAGES.projects.shears[6]],
    featuresBarVariant: "erection",
    whyChooseColumns: 4,
    capabilities: [
      "Equipment receipt, inspection and storage",
      "Foundation and base-plate preparation",
      "Precision grouting and levelling",
      "Mechanical alignment and shaft coupling",
      "Piping hook-up coordination",
      "Pre-commissioning checks and functional testing",
      "Heavy lifting and crane coordination",
      "OEM hold-point witness support",
    ],
    processSectionLabel: "OUR ERECTION PROCESS",
    processVariant: "icon-circle",
    processIconPosition: "below",
    process: [
      {
        step: "01",
        title: "Receipt & Inspection",
        description: "Equipment received, inspected for damage and placed in storage per preservation plan.",
      },
      {
        step: "02",
        title: "Foundation Preparation",
        description: "Base preparation, levelling and base-plate positioning checked against drawings.",
      },
      {
        step: "03",
        title: "Setting & Grouting",
        description: "Equipment set, levelled and grouted to specification.",
      },
      {
        step: "04",
        title: "Alignment",
        description: "Shaft, coupling and flange alignment measured and adjusted to tolerance.",
      },
      {
        step: "05",
        title: "Hook-up & QA",
        description: "Ancillary connections confirmed and QA documentation completed.",
      },
      {
        step: "06",
        title: "Pre-commissioning Support",
        description: "Functional checks completed ahead of commissioning handover.",
      },
    ],
    whyChoose: [
      {
        title: "Experienced Erection Teams",
        description: "Mechanical riggers and fitters experienced in live industrial environments.",
      },
      {
        title: "Precision Alignment",
        description: "Alignment methods and tooling to manufacturer tolerances.",
      },
      {
        title: "QA Documentation",
        description: "Hold points, inspection records and certificates issued throughout.",
      },
      {
        title: "Programme Integration",
        description: "Coordination with civil, piping and E&I disciplines to maintain schedule.",
      },
    ],
    whyChooseHeading: "WHY CHOOSE ELGC FOR EQUIPMENT ERECTION",
    detailProjects: {
      sectionLabel: "RELATED PROJECTS",
      featured: {
        title: "Material Recovery Plant Equipment Erection",
        image: IMAGES.projects.shears[7],
        tags: ["Equipment Erection", "Abu Dhabi, UAE"],
        href: "/projects/material-recovery-plant-erection",
      },
      others: [
        {
          title: "Major Rolling Mill Revamp",
          image: IMAGES.projects.shears[0],
          tags: ["Steel Manufacturing"],
          href: "/projects/major-rolling-mill-revamp",
        },
        {
          title: "Roller Mill Replacement",
          image: IMAGES.projects.shears[2],
          tags: ["Shutdowns & Revamps"],
          href: "/projects/roller-mill-replacement",
        },
        {
          title: "Scrap Chute Replacement",
          image: IMAGES.projects.shears[3],
          tags: ["Shutdowns & Revamps"],
          href: "/projects/scrap-chute-replacement",
        },
        {
          title: "Cooling Tower Relocation",
          image: IMAGES.projects.shears[4],
          tags: ["Relocation & Dismantling"],
          href: "/projects/cooling-tower-relocation",
        },
      ],
      viewAllLabel: "VIEW ALL ERECTION PROJECTS",
      viewAllHref: "/projects",
    },
    ctaTitle: "Planning Equipment Installation or",
    ctaHighlight: "Mechanical Erection Works?",
    ctaSubtitle:
      "Contact ELGC to discuss your equipment erection scope, programme and site requirements.",
    ctaIcon: "crane",
  },

  // ─── 03 ─────────────────────────────────────────────────────────────────────
  {
    slug: "plant-relocation-dismantling",
    number: "03",
    title: "Plant Relocation, Dismantling & Reinstallation",
    shortTitle: "Plant Relocation & Dismantling",
    description:
      "Controlled Movement of Industrial Assets. ELGC manages the full sequence from condition assessment and controlled dismantling through transport coordination to reinstallation.",
    pageHeroDescription:
      "ELGC provides controlled dismantling, relocation and reinstallation of industrial plant and equipment, maintaining asset integrity and recovery quality throughout the process.",
    heroTitleLines: { white: "Plant Relocation,", green: "Dismantling & Reinstallation" },
    heroButtonLabel: "Discuss Plant Relocation",
    iconName: "PackageOpen",
    href: "/services/plant-relocation-dismantling",
    heroImage: IMAGES.hero.projects,
    heroFeatures: [
      "Condition Assessment",
      "Controlled Dismantling",
      "Asset Preservation",
      "Transport Coordination",
      "Reinstallation & Recommissioning",
    ],
    overview: {
      title: "Controlled Movement",
      highlight: "of Industrial Assets.",
      description:
        "ELGC manages the complete relocation sequence — condition assessment, tagging and documentation, controlled dismantling, preservation during transport and reinstallation with recommissioning support. Our approach protects asset value and maintains recovery quality throughout.",
      features: [
        {
          title: "Pre-Dismantling Assessment",
          description: "Equipment condition recorded, tagged and documented before any work begins.",
        },
        {
          title: "Controlled Dismantling",
          description: "Systematic disconnection and dismantling following an approved engineering sequence.",
        },
        {
          title: "Transport & Preservation",
          description: "Assets preserved and handled to maintain condition through transit.",
        },
        {
          title: "Reinstallation & Recommissioning",
          description: "Equipment reinstated and commissioned at the receiving location.",
        },
      ],
    },
    overviewLayout: "triple-single-image",
    overviewBg: "dots",
    overviewFeatureStyle: "grey-box",
    overviewImages: [IMAGES.projects.yogurt[0], IMAGES.projects.yogurt[0]],
    whyChooseColumns: 4,
    capabilities: [
      "Condition assessment and pre-dismantling documentation",
      "Equipment tagging and component labelling",
      "Controlled mechanical and structural dismantling",
      "Rigging and heavy transport coordination",
      "Storage and preservation during relocation",
      "Foundation preparation at receiving site",
      "Reinstallation, alignment and recommissioning support",
      "Packing and export preparation for cross-border movements",
    ],
    processSectionLabel: "OUR RELOCATION PROCESS",
    processVariant: "default",
    process: [
      {
        step: "01",
        title: "Condition Assessment",
        description: "Equipment inspected, documented and tagged before dismantling begins.",
      },
      {
        step: "02",
        title: "Dismantling Sequence Planning",
        description: "Engineering sequence and method statements prepared and approved.",
      },
      {
        step: "03",
        title: "Controlled Dismantling",
        description: "Systematic disconnection in planned sequence with components labelled.",
      },
      {
        step: "04",
        title: "Transport Coordination",
        description: "Rigging, loading and transport arranged to preserve asset condition.",
      },
      {
        step: "05",
        title: "Receiving Site Preparation",
        description: "Foundation and installation area prepared ahead of equipment arrival.",
      },
      {
        step: "06",
        title: "Reinstallation & Commissioning",
        description: "Equipment reinstated, aligned and commissioned at the new location.",
      },
    ],
    whyChoose: [
      {
        title: "Asset Value Protection",
        description: "Documentation and handling approach protects equipment through the relocation cycle.",
      },
      {
        title: "Engineering-Led Dismantling",
        description: "Sequence controlled by method statement to avoid damage or component loss.",
      },
      {
        title: "End-to-End Accountability",
        description: "Single team accountable across dismantling, transport and reinstallation.",
      },
      {
        title: "Industrial Environment Experience",
        description: "Teams experienced working within operating plants during partial shutdowns.",
      },
    ],
    whyChooseHeading: "WHY CHOOSE ELGC FOR PLANT RELOCATION",
    detailProjects: {
      sectionLabel: "RELATED PROJECTS",
      featured: {
        title: "Yogurt Processing Plant Dismantling and Packing",
        image: IMAGES.projects.yogurt[0],
        tags: ["Relocation & Dismantling", "Al Ain, UAE"],
        href: "/projects/yogurt-processing-plant-dismantling",
      },
      others: [
        {
          title: "Cooling Tower Relocation",
          image: IMAGES.projects.shears[8],
          tags: ["Relocation & Dismantling"],
          href: "/projects/cooling-tower-relocation",
        },
        {
          title: "Major Rolling Mill Revamp",
          image: IMAGES.projects.shears[0],
          tags: ["Shutdowns & Revamps"],
          href: "/projects/major-rolling-mill-revamp",
        },
        {
          title: "Roller Mill Replacement",
          image: IMAGES.projects.shears[2],
          tags: ["Shutdowns & Revamps"],
          href: "/projects/roller-mill-replacement",
        },
        {
          title: "Material Recovery Plant Erection",
          image: IMAGES.projects.shears[7],
          tags: ["Equipment Erection"],
          href: "/projects/material-recovery-plant-erection",
        },
      ],
      viewAllLabel: "VIEW ALL RELOCATION PROJECTS",
      viewAllHref: "/projects",
    },
    ctaTitle: "Planning a Plant Relocation or",
    ctaHighlight: "Controlled Dismantling?",
    ctaSubtitle:
      "Contact ELGC to discuss your asset relocation scope, sequence and timeline.",
    ctaIcon: "service",
  },

  // ─── 04 ─────────────────────────────────────────────────────────────────────
  {
    slug: "structural-steel-fabrication",
    number: "04",
    title: "Structural Steel & Fabrication",
    shortTitle: "Structural Steel & Fabrication",
    description:
      "Steelwork Built for Industrial Function. ELGC fabricates and erects structural steel for live industrial environments — new structures, modifications, equipment supports and plant-integrated steelwork.",
    pageHeroDescription:
      "ELGC provides structural steel fabrication and erection services for industrial structures, equipment supports, platforms and modifications within operating plant environments.",
    heroTitleLines: { white: "Structural Steel &", green: "Fabrication" },
    heroButtonLabel: "Discuss Steel Requirements",
    iconName: "Layers",
    href: "/services/structural-steel-fabrication",
    heroImage: IMAGES.hero.fabrication,
    heroFeatures: [
      "Fabrication to Drawing",
      "Structural Erection",
      "In-Plant Modifications",
      "Surface Treatment",
      "QA Documentation",
    ],
    overview: {
      title: "Steelwork Built",
      highlight: "for Industrial Function.",
      description:
        "ELGC provides fabrication and erection of structural steelwork for industrial environments. Our scope includes new structures, equipment support platforms, walkways, modifications within operating plants, and structural elements supporting process or environmental systems.",
      features: [
        {
          title: "Fabrication to Engineering Standards",
          description: "Steel fabricated to approved drawings with full dimensional inspection records.",
        },
        {
          title: "Site Erection Within Operating Plants",
          description: "Erection work managed with appropriate isolation and access controls.",
        },
        {
          title: "Modifications to Existing Structures",
          description: "Structural modifications planned with engineering review and access coordination.",
        },
        {
          title: "Surface Treatment & Coating",
          description: "Blast cleaning and protective coating applied to project specification.",
        },
      ],
    },
    overviewLayout: "split-left",
    overviewBg: "white",
    overviewFeatureStyle: "green-title",
    overviewImages: [IMAGES.hero.fabrication, IMAGES.projects.shears[9]],
    featuresBarVariant: "fabrication",
    whyChooseColumns: 4,
    whyChooseVariant: "light",
    capabilities: [
      "Structural steel fabrication to approved drawings",
      "Equipment support frames and platforms",
      "Walkways, handrails and access structures",
      "Modifications to existing plant steelwork",
      "Structural erection and bolted connections",
      "Welded connections with NDT support",
      "Surface preparation and protective coating",
      "Dimensional and QA inspection documentation",
    ],
    processSectionLabel: "OUR FABRICATION & ERECTION PROCESS",
    processVariant: "icon-circle",
    process: [
      {
        step: "01",
        title: "Drawing Review & Material Take-off",
        description: "Fabrication drawings reviewed, material list prepared and procurement raised.",
      },
      {
        step: "02",
        title: "Material Procurement & Inspection",
        description: "Steel procured with mill certificates; incoming inspection conducted.",
      },
      {
        step: "03",
        title: "Fabrication & Assembly",
        description: "Cutting, forming, welding and assembly to drawing dimensions.",
      },
      {
        step: "04",
        title: "Dimensional Inspection",
        description: "Fabricated items checked against drawings with records raised.",
      },
      {
        step: "05",
        title: "Surface Treatment",
        description: "Blast cleaning and protective coating applied per specification.",
      },
      {
        step: "06",
        title: "Site Erection",
        description: "Steel erected, bolted and aligned with QA documentation completed.",
      },
    ],
    whyChoose: [
      {
        title: "Industrial-Grade Fabrication",
        description: "Steel fabricated to engineering drawings with full dimensional records.",
      },
      {
        title: "In-Plant Erection Capability",
        description: "Erection inside live plant with appropriate safety and access controls.",
      },
      {
        title: "Integrated Scope Delivery",
        description: "Fabrication and erection under a single accountable team.",
      },
      {
        title: "QA Throughout",
        description: "Inspection hold points and documentation maintained from material receipt to handover.",
      },
    ],
    whyChooseHeading: "WHY CHOOSE ELGC FOR STRUCTURAL STEEL",
    detailProjects: {
      sectionLabel: "RELATED PROJECTS",
      featured: {
        title: "Structural Steel for Plant Expansion",
        image: IMAGES.projects.shears[9],
        tags: ["Civil & Structural", "Steel Manufacturing", "Abu Dhabi, UAE"],
        href: "/projects/structural-steel-plant-expansion",
      },
      others: [
        {
          title: "Major Rolling Mill Revamp",
          image: IMAGES.projects.shears[0],
          tags: ["Shutdowns & Revamps"],
          href: "/projects/major-rolling-mill-revamp",
        },
        {
          title: "Slag Tipping and Cooling Station",
          image: IMAGES.projects.shears[10],
          tags: ["EPC Projects"],
          href: "/projects/slag-tipping-cooling-station",
        },
        {
          title: "Material Recovery Plant Erection",
          image: IMAGES.projects.shears[7],
          tags: ["Equipment Erection"],
          href: "/projects/material-recovery-plant-erection",
        },
        {
          title: "Scrap Chute Replacement",
          image: IMAGES.projects.shears[3],
          tags: ["Shutdowns & Revamps"],
          href: "/projects/scrap-chute-replacement",
        },
      ],
      viewAllLabel: "VIEW ALL STRUCTURAL PROJECTS",
      viewAllHref: "/projects",
    },
    ctaTitle: "Need Structural Steel Fabrication or",
    ctaHighlight: "Erection Support?",
    ctaSubtitle:
      "Contact ELGC to discuss your structural scope, drawings and delivery programme.",
    ctaIcon: "service",
  },

  // ─── 05 ─────────────────────────────────────────────────────────────────────
  {
    slug: "industrial-civil-works",
    number: "05",
    title: "Industrial Civil Works",
    shortTitle: "Industrial Civil Works",
    description:
      "Civil Construction Coordinated With Equipment and Operations. ELGC delivers civil works in environments where construction must be phased around running industrial operations.",
    pageHeroDescription:
      "ELGC provides industrial civil works including equipment foundations, plinths, drainage, containment structures and below-grade installations within operating plant environments.",
    heroTitleLines: { white: "Industrial", green: "Civil Works" },
    heroButtonLabel: "Discuss Civil Requirements",
    iconName: "Building2",
    href: "/services/industrial-civil-works",
    heroImage: IMAGES.hero.civil,
    heroFeatures: [
      "Equipment Foundations",
      "Plinths & Sole Plates",
      "Drainage & Containment",
      "RCC Structures",
      "Phased Execution",
    ],
    overview: {
      title: "Civil Construction Coordinated",
      highlight: "With Equipment and Operations.",
      description:
        "ELGC's civil scope in industrial projects extends beyond standard construction. We deliver foundations for heavy equipment, equipment plinths and sole plates, drainage and containment systems, and below-grade installations coordinated with mechanical and structural programmes.",
      features: [
        {
          title: "Equipment Foundation Construction",
          description: "Foundations designed and constructed for static and rotating equipment loads.",
        },
        {
          title: "Containment & Drainage",
          description: "Bunded areas, drainage channels and sumps serving industrial containment requirements.",
        },
        {
          title: "Below-Grade Installations",
          description: "Ducts, trenches and below-slab work coordinated with piping and E&I programmes.",
        },
        {
          title: "Phased Execution",
          description: "Civil works sequenced to release areas for equipment installation progressively.",
        },
      ],
    },
    overviewLayout: "triple-image-center",
    overviewBg: "white",
    overviewFeatureStyle: "navy-title",
    overviewImages: [IMAGES.hero.civil, IMAGES.projects.shears[11], IMAGES.projects.shears[12]],
    featuresBarVariant: "civil",
    whyChooseColumns: 4,
    capabilitiesBg: "white",
    capabilities: [
      "Equipment foundations (static and dynamic loads)",
      "Equipment plinths, base plates and sole-plate grouting",
      "Drainage channels, sumps and containment bunding",
      "RCC structures, slabs and walls",
      "Below-grade trenches, ducts and sleeves",
      "Concrete cutting, breaking and reinstatement",
      "Civil modifications within operating plants",
      "Site roads, pavements and external works",
    ],
    processIconPosition: "above",
    whyChooseLayout: "inline",
    process: [
      {
        step: "01",
        title: "Survey & Setting Out",
        description: "Existing conditions surveyed and work area set out against plant coordinates.",
      },
      {
        step: "02",
        title: "Excavation & Earthworks",
        description: "Controlled excavation within operating plant, shoring where required.",
      },
      {
        step: "03",
        title: "Foundation Construction",
        description: "Formwork, reinforcement and concrete pours per structural drawings.",
      },
      {
        step: "04",
        title: "Curing & Striking",
        description: "Concrete cured to specification; formwork struck on schedule.",
      },
      {
        step: "05",
        title: "Grouting & Finishing",
        description: "Base plates grouted; finished surfaces prepared to specification.",
      },
      {
        step: "06",
        title: "Area Handback",
        description: "Area cleaned, reinstated and handed back for equipment installation.",
      },
    ],
    whyChoose: [
      {
        title: "Industrial Environment Experience",
        description: "Civil work executed within live plants with appropriate operational controls.",
      },
      {
        title: "Coordination with Mechanical Programme",
        description: "Foundation completion sequenced to release areas for equipment erection.",
      },
      {
        title: "Quality Concrete Works",
        description: "Mix design, placing and curing to structural specification.",
      },
      {
        title: "Clean Execution",
        description: "Housekeeping and area management maintained throughout.",
      },
    ],
    whyChooseHeading: "WHY CHOOSE ELGC FOR INDUSTRIAL CIVIL WORKS",
    detailProjects: {
      sectionLabel: "RELATED PROJECTS",
      featured: {
        title: "Structural Steel for Plant Expansion",
        image: IMAGES.projects.shears[11],
        tags: ["Civil & Structural", "Abu Dhabi, UAE"],
        href: "/projects/structural-steel-plant-expansion",
      },
      others: [
        {
          title: "Slag Tipping and Cooling Station",
          image: IMAGES.projects.shears[10],
          tags: ["EPC Projects"],
          href: "/projects/slag-tipping-cooling-station",
        },
        {
          title: "Material Recovery Plant Erection",
          image: IMAGES.projects.shears[7],
          tags: ["Equipment Erection"],
          href: "/projects/material-recovery-plant-erection",
        },
        {
          title: "Major Rolling Mill Revamp",
          image: IMAGES.projects.shears[0],
          tags: ["Shutdowns & Revamps"],
          href: "/projects/major-rolling-mill-revamp",
        },
        {
          title: "Industrial 5S Implementation",
          image: IMAGES.projects.shears[12],
          tags: ["Inspection & Improvement"],
          href: "/projects/industrial-5s-implementation",
        },
      ],
      viewAllLabel: "VIEW ALL CIVIL PROJECTS",
      viewAllHref: "/projects",
    },
    ctaTitle: "Need Industrial Civil Works or",
    ctaHighlight: "Foundation Construction?",
    ctaSubtitle:
      "Contact ELGC to discuss your civil scope, phasing and coordination requirements.",
    ctaImage: IMAGES.hero.civil,
    ctaIcon: "service",
  },

  // ─── 06 ─────────────────────────────────────────────────────────────────────
  {
    slug: "piping-systems",
    number: "06",
    title: "Piping Systems",
    shortTitle: "Piping Systems",
    description:
      "Fabrication, Modification and Installation for Industrial Service. ELGC delivers piping scope for shutdowns, revamps, new installations and plant modifications.",
    pageHeroDescription:
      "ELGC provides piping fabrication, modification and installation services across industrial sectors — carbon steel, alloy and stainless piping for process service.",
    heroTitleLines: { white: "Piping", green: "Systems" },
    heroButtonLabel: "Discuss Piping Scope",
    iconName: "Pipette",
    href: "/services/piping-systems",
    heroImage: IMAGES.hero.about,
    heroFeatures: [
      "Spool Fabrication",
      "Field Erection",
      "Modifications & Tie-ins",
      "Pressure Testing",
      "QA Documentation",
    ],
    overview: {
      title: "Fabrication, Modification and Installation",
      highlight: "for Industrial Service.",
      description:
        "ELGC delivers piping fabrication, field erection, modifications and tie-in work across industrial projects. Our scope is integrated into shutdown campaigns, plant revamps and new installation projects. We provide spool fabrication, field installation, pressure testing and QA documentation.",
      features: [
        {
          title: "Spool Fabrication",
          description: "Piping spools fabricated to isometric drawings with dimensional inspection records.",
        },
        {
          title: "Field Erection & Tie-ins",
          description: "Field piping erected and connected with plant tie-in work during planned windows.",
        },
        {
          title: "Modifications During Shutdowns",
          description: "Piping modifications executed within outage windows alongside mechanical works.",
        },
        {
          title: "Testing & QA",
          description: "Pressure testing and QA documentation completed per project requirements.",
        },
      ],
    },
    overviewLayout: "collage-left",
    overviewBg: "white",
    overviewFeatureStyle: "green-title",
    overviewImages: [IMAGES.projects.shears[13], IMAGES.projects.shears[14], IMAGES.projects.shears[15]],
    capabilitiesBg: "grey",
    whyChooseColumns: 4,
    capabilities: [
      "Carbon steel, stainless and alloy spool fabrication",
      "Field piping erection and alignment",
      "Modifications and replacements during shutdowns",
      "Plant tie-in work and hook-up",
      "Piping supports, hangers and restraints",
      "Insulation and cladding coordination",
      "Hydrostatic and pneumatic pressure testing",
      "QA documentation and test packs",
    ],
    processSectionLabel: "OUR PIPING EXECUTION PROCESS",
    processVariant: "alternating",
    process: [
      {
        step: "01",
        title: "Isometric Review",
        description: "Piping isometrics reviewed, materials quantified and procurement raised.",
      },
      {
        step: "02",
        title: "Spool Fabrication",
        description: "Spools fabricated to drawings with weld records and dimensional checks.",
      },
      {
        step: "03",
        title: "Field Installation",
        description: "Spools and field runs erected with supports installed.",
      },
      {
        step: "04",
        title: "Tie-ins & Hook-up",
        description: "Field connections and plant tie-ins executed during outage window.",
      },
      {
        step: "05",
        title: "Pressure Testing",
        description: "System pressure-tested per approved test procedure.",
      },
      {
        step: "06",
        title: "Documentation & Handover",
        description: "Test records, weld logs and QA documentation compiled for handover.",
      },
    ],
    whyChoose: [
      {
        title: "Integrated with Shutdown Scope",
        description: "Piping work sequenced within outage windows alongside mechanical and structural teams.",
      },
      {
        title: "Fabrication & Field Capability",
        description: "Both shop fabrication and field erection delivered under a single team.",
      },
      {
        title: "QA Documentation",
        description: "Weld records, test packs and inspection reports maintained throughout.",
      },
      {
        title: "Multi-Material Experience",
        description: "Carbon steel, stainless and alloy piping fabrication capability.",
      },
    ],
    whyChooseHeading: "WHY CHOOSE ELGC FOR PIPING SYSTEMS",
    detailProjects: {
      sectionLabel: "RELATED PROJECTS",
      featured: {
        title: "Oxygen Injection System Upgrade",
        image: IMAGES.projects.shears[13],
        tags: ["Shutdowns & Revamps", "Abu Dhabi, UAE"],
        href: "/projects/oxygen-injection-system-upgrade",
      },
      others: [
        {
          title: "Major Rolling Mill Revamp",
          image: IMAGES.projects.shears[0],
          tags: ["Steel Manufacturing"],
          href: "/projects/major-rolling-mill-revamp",
        },
        {
          title: "Scrap Chute Replacement",
          image: IMAGES.projects.shears[3],
          tags: ["Shutdowns & Revamps"],
          href: "/projects/scrap-chute-replacement",
        },
        {
          title: "Slag Tipping and Cooling Station",
          image: IMAGES.projects.shears[10],
          tags: ["EPC Projects"],
          href: "/projects/slag-tipping-cooling-station",
        },
        {
          title: "Roller Mill Replacement",
          image: IMAGES.projects.shears[2],
          tags: ["Shutdowns & Revamps"],
          href: "/projects/roller-mill-replacement",
        },
      ],
      viewAllLabel: "VIEW ALL PIPING PROJECTS",
      viewAllHref: "/projects",
    },
    ctaTitle: "Need Piping Fabrication,",
    ctaHighlight: "Modification or Installation?",
    ctaSubtitle:
      "Contact ELGC to discuss your piping scope, materials and schedule requirements.",
    ctaIcon: "shield",
  },

  // ─── 07 ─────────────────────────────────────────────────────────────────────
  {
    slug: "electrical-instrumentation-support",
    number: "07",
    title: "Electrical & Instrumentation Support",
    shortTitle: "E&I Support",
    description:
      "Specialist Resources Integrated Into Project Execution. ELGC provides E&I support resources for plant projects, shutdowns and commissioning campaigns.",
    pageHeroDescription:
      "ELGC provides electrical and instrumentation support resources integrated into plant projects, shutdown campaigns and commissioning programmes.",
    heroTitleLines: { white: "Electrical &", green: "Instrumentation Support" },
    heroButtonLabel: "Discuss E&I Requirements",
    iconName: "Zap",
    href: "/services/electrical-instrumentation-support",
    heroImage: IMAGES.hero.electrical,
    heroFeatures: [
      "Motor & Drive Connections",
      "Cable & Tray Works",
      "Panel & MCC Installation",
      "Instrument Hook-up",
      "Testing & Commissioning",
    ],
    overview: {
      title: "Specialist Resources",
      highlight: "Integrated Into Project Execution.",
      description:
        "ELGC provides E&I support for plant-based projects where electrical and instrumentation work forms part of a wider mechanical or revamp scope. Our teams work alongside mechanical crews on shutdowns, alongside civil teams on new installations, and alongside OEM representatives during commissioning.",
      features: [
        {
          title: "Motor & Drive Connections",
          description: "Motor terminations, cable runs and variable-speed drive commissioning checks.",
        },
        {
          title: "Panel & MCC Works",
          description: "Electrical panel installation, MCC terminations and distribution works.",
        },
        {
          title: "Instrument Hook-up",
          description: "Field instrumentation installation, hook-up wiring and loop checking.",
        },
        {
          title: "Testing & Commissioning Support",
          description: "Loop testing, functional checks and commissioning documentation.",
        },
      ],
    },
    overviewLayout: "triple-dual-image",
    overviewBg: "white",
    overviewFeatureStyle: "green-title",
    overviewImages: [IMAGES.hero.electrical, IMAGES.projects.shears[6]],
    featuresBarVariant: "electrical",
    whyChooseColumns: 4,
    capabilitiesBg: "dots",
    capabilities: [
      "Motor cable connections and terminations",
      "Cable tray and conduit installation",
      "Cable laying and glanding",
      "Electrical panel and MCC installation",
      "Instrument hook-up and impulse tubing",
      "Loop checking and functional testing",
      "Commissioning support and documentation",
      "Shutdown E&I maintenance support",
    ],
    processSectionLabel: "OUR E&I EXECUTION PROCESS",
    processVariant: "alternating",
    process: [
      {
        step: "01",
        title: "Scope Review",
        description: "E&I scope reviewed against drawings and integrated into the project schedule.",
      },
      {
        step: "02",
        title: "Cable & Tray Installation",
        description: "Cable tray, conduit and routing installed per design.",
      },
      {
        step: "03",
        title: "Cabling",
        description: "Cables pulled, identified and protected to specification.",
      },
      {
        step: "04",
        title: "Termination & Connection",
        description: "Motor, instrument and panel terminations completed per wiring schedules.",
      },
      {
        step: "05",
        title: "Loop Checking",
        description: "Instrument loops and control circuits verified against design.",
      },
      {
        step: "06",
        title: "Commissioning Support",
        description: "Electrical systems energised and functional checks documented.",
      },
    ],
    whyChoose: [
      {
        title: "Integrated with Mechanical Scope",
        description: "E&I teams work alongside mechanical crews as part of the same project execution.",
      },
      {
        title: "Shutdown & Outage Experience",
        description: "E&I resources experienced in outage work with permit-to-work requirements.",
      },
      {
        title: "Commissioning Documentation",
        description: "Inspection and test records produced throughout the project.",
      },
      {
        title: "Multi-Discipline Interface",
        description: "E&I coordination managed within the overall project structure.",
      },
    ],
    whyChooseHeading: "WHY CHOOSE ELGC FOR E&I SUPPORT",
    projectsLayout: "horizontal-five",
    detailProjects: {
      sectionLabel: "RELATED PROJECTS",
      featured: {
        title: "Major Rolling Mill Revamp",
        image: IMAGES.projects.shears[0],
        tags: ["Shutdowns & Revamps", "E&I Works", "Abu Dhabi, UAE"],
        href: "/projects/major-rolling-mill-revamp",
      },
      others: [
        {
          title: "Material Recovery Plant Erection",
          image: IMAGES.projects.shears[7],
          tags: ["Equipment Erection"],
          href: "/projects/material-recovery-plant-erection",
        },
        {
          title: "Oxygen Injection System Upgrade",
          image: IMAGES.projects.shears[13],
          tags: ["Shutdowns & Revamps"],
          href: "/projects/oxygen-injection-system-upgrade",
        },
        {
          title: "Slag Tipping and Cooling Station",
          image: IMAGES.projects.shears[10],
          tags: ["EPC Projects"],
          href: "/projects/slag-tipping-cooling-station",
        },
        {
          title: "Cold DRI Dust Collection—Dry Extraction",
          image: IMAGES.projects.shears[14],
          tags: ["Environmental Systems"],
          href: "/projects/cold-dri-dust-collection-dry",
        },
      ],
      viewAllLabel: "VIEW ALL E&I PROJECTS",
      viewAllHref: "/projects",
    },
    ctaTitle: "Need E&I Support for a",
    ctaHighlight: "Plant Project or Shutdown?",
    ctaSubtitle:
      "Contact ELGC to discuss your electrical and instrumentation scope and resourcing.",
    ctaImage: IMAGES.hero.electrical,
    ctaIcon: "zap",
  },

  // ─── 08 ─────────────────────────────────────────────────────────────────────
  {
    slug: "environmental-pollution-control",
    number: "08",
    title: "Environmental & Pollution-Control Systems",
    shortTitle: "Environmental Systems",
    description:
      "Integrated Systems From Engineering Through Commissioning. ELGC delivers dust suppression, extraction, filtration and effluent systems for industrial plant.",
    pageHeroDescription:
      "ELGC delivers environmental and pollution-control systems from engineering through installation and commissioning, with proven delivery in industrial steel and process plant environments.",
    heroTitleLines: { white: "Environmental &", green: "Pollution-Control Systems" },
    heroButtonLabel: "Discuss Environmental Scope",
    iconName: "Leaf",
    href: "/services/environmental-pollution-control",
    heroImage: IMAGES.hero.environmental,
    heroFeatures: [
      "Dust Extraction Systems",
      "Filtration & Collection",
      "Wet & Dry Systems",
      "Structural Support Works",
      "Commissioning",
    ],
    overview: {
      title: "Integrated Systems From",
      highlight: "Engineering Through Commissioning.",
      description:
        "ELGC has delivered dust extraction, pollution-control and effluent-handling systems within live industrial plants. Our scope spans structural supports, ducting, collection equipment, wet or dry extraction systems, and E&I integration through to commissioning. Multiple environmental systems have been delivered for a single major steel producer over successive project campaigns.",
      features: [
        {
          title: "Dust Extraction & Filtration",
          description: "Dry and wet extraction systems for industrial dust and pollution control.",
        },
        {
          title: "Ducting & Stack Systems",
          description: "Ductwork, transitions and stack structures fabricated and erected to design.",
        },
        {
          title: "Wet Slurry & Effluent Systems",
          description: "Wet extraction with slurry handling and disposal system installation.",
        },
        {
          title: "E&I Integration",
          description: "Electrical and instrumentation integration with control system commissioning.",
        },
      ],
    },
    overviewLayout: "collage-left",
    overviewBg: "white",
    overviewFeatureStyle: "green-title",
    overviewImages: [IMAGES.hero.environmental, IMAGES.projects.shears[5], IMAGES.projects.shears[6]],
    featuresBarVariant: "environmental",
    capabilitiesLabel: "SYSTEM CAPABILITIES",
    capabilitiesBg: "grey",
    whyChooseColumns: 4,
    capabilities: [
      "Dust extraction and filtration system installation",
      "Dry extraction system engineering and erection",
      "Wet slurry extraction and disposal systems",
      "Ducting, transitions and ductwork supports",
      "Stack and chimney structures",
      "Structural steelwork supporting environmental systems",
      "E&I integration and control system hook-up",
      "System commissioning and performance verification",
    ],
    processIconPosition: "below",
    processSectionLabel: "OUR SYSTEM DELIVERY PROCESS",
    processVariant: "green-circle",
    process: [
      {
        step: "01",
        title: "System Design Review",
        description: "Engineering drawings and system design reviewed; scope confirmed.",
      },
      {
        step: "02",
        title: "Structural & Civil Works",
        description: "Supports, foundations and structural elements constructed.",
      },
      {
        step: "03",
        title: "Equipment & Ductwork Installation",
        description: "Collection equipment and ductwork installed to drawing.",
      },
      {
        step: "04",
        title: "E&I Integration",
        description: "Electrical and instrumentation connections completed.",
      },
      {
        step: "05",
        title: "System Testing",
        description: "Pre-commissioning checks and system leak testing completed.",
      },
      {
        step: "06",
        title: "Commissioning & Performance Verification",
        description: "System commissioned and performance against design criteria confirmed.",
      },
    ],
    whyChoose: [
      {
        title: "Proven Industrial Delivery",
        description: "Multiple environmental systems delivered within a single steel plant environment.",
      },
      {
        title: "Integrated Scope Capability",
        description: "Structural, mechanical, ducting and E&I delivered under one team.",
      },
      {
        title: "Live Plant Execution",
        description: "Systems installed within operating plants with appropriate isolation and controls.",
      },
      {
        title: "Commissioning Accountability",
        description: "Accountable through to commissioned and operating status.",
      },
    ],
    whyChooseHeading: "WHY CHOOSE ELGC FOR ENVIRONMENTAL SYSTEMS",
    detailProjects: {
      sectionLabel: "RELATED PROJECTS",
      featured: {
        title: "Cold DRI Dust Collection—Dry Extraction",
        image: IMAGES.projects.shears[14],
        tags: ["Environmental Systems", "Steel Manufacturing", "Abu Dhabi, UAE"],
        href: "/projects/cold-dri-dust-collection-dry",
      },
      others: [
        {
          title: "Cold DRI Dust Collection—Wet Slurry Disposal",
          image: IMAGES.projects.shears[15],
          tags: ["Environmental Systems"],
          href: "/projects/cold-dri-dust-collection-wet",
        },
        {
          title: "Slag Tipping and Cooling Station",
          image: IMAGES.projects.shears[10],
          tags: ["EPC Projects"],
          href: "/projects/slag-tipping-cooling-station",
        },
        {
          title: "Major Rolling Mill Revamp",
          image: IMAGES.projects.shears[0],
          tags: ["Steel Manufacturing"],
          href: "/projects/major-rolling-mill-revamp",
        },
        {
          title: "Structural Steel for Plant Expansion",
          image: IMAGES.projects.shears[9],
          tags: ["Civil & Structural"],
          href: "/projects/structural-steel-plant-expansion",
        },
      ],
      viewAllLabel: "VIEW ALL ENVIRONMENTAL PROJECTS",
      viewAllHref: "/projects",
    },
    ctaTitle: "Need Environmental or",
    ctaHighlight: "Pollution-Control Systems?",
    ctaSubtitle:
      "Contact ELGC to discuss your environmental system scope, design and delivery programme.",
    ctaImage: IMAGES.hero.environmental,
    ctaIcon: "leaf",
  },

  // ─── 09 ─────────────────────────────────────────────────────────────────────
  {
    slug: "plant-improvement-inspection-rectification",
    number: "09",
    title: "Plant Improvement, Inspection & Rectification",
    shortTitle: "Inspection & Rectification",
    description:
      "Identify the Condition. Define the Solution. Support the Execution. ELGC provides inspection, assessment and rectification support for operating industrial plant.",
    pageHeroDescription:
      "ELGC supports plant inspection, condition assessment and rectification work across operating industrial facilities, providing resources integrated into client maintenance and improvement programmes.",
    heroTitleLines: { white: "Plant Improvement,", green: "Inspection & Rectification" },
    heroButtonLabel: "Discuss Inspection Scope",
    iconName: "ClipboardCheck",
    href: "/services/plant-improvement-inspection-rectification",
    heroImage: IMAGES.hero.quality,
    heroFeatures: [
      "Condition Assessment",
      "Inspection Support",
      "Rectification Works",
      "5S & Housekeeping",
      "Close-out Documentation",
    ],
    overview: {
      title: "Identify the Condition.",
      highlight: "Define the Solution. Support the Execution.",
      description:
        "ELGC provides inspection support, condition assessment and rectification services for operating industrial plants. Our teams are integrated into client maintenance and improvement programmes, providing structured execution capability alongside in-house teams and specialist engineers.",
      features: [
        {
          title: "Condition Assessment",
          description: "Structured inspection of plant and equipment to record current state.",
        },
        {
          title: "Rectification Planning",
          description: "Scope defined from assessment findings with method statements prepared.",
        },
        {
          title: "Rectification Execution",
          description: "Works executed by ELGC teams or in support of client maintenance crews.",
        },
        {
          title: "5S & Housekeeping Programmes",
          description: "Industrial 5S implementation for systematic workplace organisation.",
        },
      ],
    },
    overviewLayout: "triple-single-image",
    overviewBg: "dots",
    overviewFeatureStyle: "grey-box",
    overviewImages: [IMAGES.hero.quality, IMAGES.hero.quality],
    whyChooseColumns: 4,
    capabilities: [
      "Plant and equipment inspection support",
      "Condition assessment documentation",
      "Structural integrity rectification works",
      "Mechanical rectification and refurbishment",
      "Industrial 5S programme implementation",
      "Housekeeping and waste management improvement",
      "Corrective maintenance execution support",
      "Defect reporting and close-out tracking",
    ],
    processSectionLabel: "OUR INSPECTION & RECTIFICATION PROCESS",
    processVariant: "default",
    process: [
      {
        step: "01",
        title: "Inspection Scope Agreement",
        description: "Areas, systems and equipment to be assessed confirmed with client.",
      },
      {
        step: "02",
        title: "Inspection & Assessment",
        description: "Structured inspection executed and findings documented.",
      },
      {
        step: "03",
        title: "Findings Report",
        description: "Condition report issued with prioritised rectification recommendations.",
      },
      {
        step: "04",
        title: "Rectification Planning",
        description: "Method statements and work packages prepared for agreed rectification scope.",
      },
      {
        step: "05",
        title: "Rectification Execution",
        description: "Works carried out by ELGC or in support of client maintenance teams.",
      },
      {
        step: "06",
        title: "Close-out Documentation",
        description: "Work completion records and updated condition status issued.",
      },
    ],
    whyChoose: [
      {
        title: "Operating Plant Experience",
        description: "Teams familiar with permit-to-work, isolation and live-plant working requirements.",
      },
      {
        title: "Structured Approach",
        description: "Inspection and rectification managed as a defined scope with documentation.",
      },
      {
        title: "Integrated with Client Teams",
        description: "ELGC resources work alongside client maintenance and engineering staff.",
      },
      {
        title: "Multiple Discipline Capability",
        description: "Mechanical, structural and civil rectification within a single team.",
      },
    ],
    whyChooseHeading: "WHY CHOOSE ELGC FOR PLANT IMPROVEMENT",
    detailProjects: {
      sectionLabel: "RELATED PROJECTS",
      featured: {
        title: "Ship-Unloader Inspection and Rectification Support",
        image: IMAGES.projects.shears[5],
        tags: ["Inspection & Improvement", "Abu Dhabi, UAE"],
        href: "/projects/ship-unloader-inspection-rectification",
      },
      others: [
        {
          title: "Industrial 5S Implementation",
          image: IMAGES.projects.shears[12],
          tags: ["Inspection & Improvement"],
          href: "/projects/industrial-5s-implementation",
        },
        {
          title: "Major Rolling Mill Revamp",
          image: IMAGES.projects.shears[0],
          tags: ["Shutdowns & Revamps"],
          href: "/projects/major-rolling-mill-revamp",
        },
        {
          title: "Roller Mill Replacement",
          image: IMAGES.projects.shears[2],
          tags: ["Shutdowns & Revamps"],
          href: "/projects/roller-mill-replacement",
        },
        {
          title: "Scrap Chute Replacement",
          image: IMAGES.projects.shears[3],
          tags: ["Shutdowns & Revamps"],
          href: "/projects/scrap-chute-replacement",
        },
      ],
      viewAllLabel: "VIEW ALL INSPECTION PROJECTS",
      viewAllHref: "/projects",
    },
    ctaTitle: "Need Inspection, Rectification or",
    ctaHighlight: "Plant Improvement Support?",
    ctaSubtitle:
      "Contact ELGC to discuss your plant condition, scope and resourcing requirements.",
    ctaIcon: "shield",
  },

  // ─── 10 ─────────────────────────────────────────────────────────────────────
  {
    slug: "epc-procurement-project-management",
    number: "10",
    title: "EPC Delivery, Procurement & Project Management",
    shortTitle: "EPC & Project Management",
    description:
      "One Accountable Structure From Defined Need to Handover. ELGC provides EPC delivery, procurement management and project management services for industrial clients.",
    pageHeroDescription:
      "ELGC delivers EPC projects and provides procurement and project management services — a single accountable structure from defined scope through to operational handover.",
    heroTitleLines: { white: "EPC Delivery, Procurement &", green: "Project Management" },
    heroButtonLabel: "Discuss EPC Scope",
    iconName: "ClipboardList",
    href: "/services/epc-procurement-project-management",
    heroImage: IMAGES.hero.proposal,
    heroFeatures: [
      "Single Accountability",
      "Procurement Management",
      "Multi-Discipline Execution",
      "Cost & Schedule Control",
      "Handover Documentation",
    ],
    overview: {
      title: "One Accountable Structure",
      highlight: "From Defined Need to Handover.",
      description:
        "ELGC provides EPC delivery and project management services where a single team is accountable across engineering, procurement, construction and commissioning. For clients who need a single point of accountability covering multiple disciplines, ELGC manages the interfaces, the programme and the quality outcomes.",
      features: [
        {
          title: "Single Point of Accountability",
          description: "One contract structure covering engineering, procurement and construction.",
        },
        {
          title: "Procurement Management",
          description: "Vendor selection, expediting and materials management under ELGC control.",
        },
        {
          title: "Multi-Discipline Coordination",
          description: "Civil, mechanical, structural, piping and E&I coordinated within a single programme.",
        },
        {
          title: "Handover Documentation",
          description: "Full handover package with as-built records, certificates and O&M documentation.",
        },
      ],
    },
    overviewLayout: "triple-dual-image",
    overviewBg: "white",
    overviewFeatureStyle: "green-title",
    overviewImages: [IMAGES.hero.proposal, IMAGES.projects.shears[1]],
    whyChooseColumns: 4,
    capabilities: [
      "EPC contract delivery (civil, structural, mechanical, piping, E&I)",
      "Procurement management and vendor coordination",
      "Programme planning and schedule management",
      "Cost control and progress reporting",
      "Multi-discipline construction management",
      "Commissioning planning and execution management",
      "As-built documentation and handover package",
      "Site HSE and quality management systems",
    ],
    processSectionLabel: "OUR EPC DELIVERY PROCESS",
    processVariant: "green-circle",
    processIconPosition: "below",
    process: [
      {
        step: "01",
        title: "Scope Definition",
        description: "Scope of work, deliverables and handover requirements confirmed.",
      },
      {
        step: "02",
        title: "Engineering & Procurement",
        description: "Engineering completed and procurement initiated with programme integration.",
      },
      {
        step: "03",
        title: "Construction Mobilisation",
        description: "Teams and equipment mobilised to site on programme.",
      },
      {
        step: "04",
        title: "Multi-Discipline Execution",
        description: "Civil, structural, mechanical and E&I works executed under unified management.",
      },
      {
        step: "05",
        title: "Commissioning",
        description: "Systems commissioned with functional testing and performance verification.",
      },
      {
        step: "06",
        title: "Handover",
        description: "Handover documentation compiled and project formally handed over to client.",
      },
    ],
    whyChoose: [
      {
        title: "Single Accountability",
        description: "One team responsible for the full scope from engineering to handover.",
      },
      {
        title: "Programme Discipline",
        description: "Schedule managed across all disciplines with regular client progress updates.",
      },
      {
        title: "Integrated Delivery Team",
        description: "All trades and disciplines within the same management structure.",
      },
      {
        title: "Handover Quality",
        description: "Documentation and commissioning delivered to enable operational readiness.",
      },
    ],
    whyChooseHeading: "WHY CHOOSE ELGC FOR EPC DELIVERY",
    detailProjects: {
      sectionLabel: "RELATED PROJECTS",
      featured: {
        title: "Slag Tipping and Cooling Station",
        image: IMAGES.projects.shears[10],
        tags: ["EPC Projects", "Steel Manufacturing", "Abu Dhabi, UAE"],
        href: "/projects/slag-tipping-cooling-station",
      },
      others: [
        {
          title: "Cold DRI Dust Collection—Dry Extraction",
          image: IMAGES.projects.shears[14],
          tags: ["Environmental Systems"],
          href: "/projects/cold-dri-dust-collection-dry",
        },
        {
          title: "Cold DRI Dust Collection—Wet Slurry Disposal",
          image: IMAGES.projects.shears[15],
          tags: ["Environmental Systems"],
          href: "/projects/cold-dri-dust-collection-wet",
        },
        {
          title: "Structural Steel for Plant Expansion",
          image: IMAGES.projects.shears[9],
          tags: ["Civil & Structural"],
          href: "/projects/structural-steel-plant-expansion",
        },
        {
          title: "Material Recovery Plant Erection",
          image: IMAGES.projects.shears[7],
          tags: ["Equipment Erection"],
          href: "/projects/material-recovery-plant-erection",
        },
      ],
      viewAllLabel: "VIEW ALL EPC PROJECTS",
      viewAllHref: "/projects",
    },
    ctaTitle: "Need EPC Delivery or",
    ctaHighlight: "Project Management Services?",
    ctaSubtitle:
      "Contact ELGC to discuss your project scope, delivery structure and accountability requirements.",
    ctaIcon: "service",
  },
];

export function getServiceBySlug(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
