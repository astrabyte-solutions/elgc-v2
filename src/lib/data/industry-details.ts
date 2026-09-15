import { IMAGES } from "@/lib/images";

export interface IndustryFeature {
  title: string;
  description: string;
  iconName: string;
}

export interface IndustrySolution {
  title: string;
  description: string;
  iconName: string;
}

export interface IndustryProjectType {
  title: string;
  description: string;
  iconName: string;
}

export interface IndustryBenefit {
  title: string;
  description: string;
  iconName: string;
}

export interface IndustryDetailContent {
  heroLabel: string;
  heroTitleLines: { line1: string; line2Green: string; line3White: string };
  heroDescription: string;
  heroImage: string;
  heroFeatures: IndustryFeature[];
  solutionsHeading: string;
  solutionsDescription: string;
  solutions: IndustrySolution[];
  expertiseHeading: string;
  expertiseDescription: string;
  expertiseChecklist: string[];
  expertiseImage: string;
  projectTypes: IndustryProjectType[];
  benefitsHeading: string;
  benefits: IndustryBenefit[];
}

const DEFAULT_SOLUTIONS: IndustrySolution[] = [
  {
    title: "Design & Engineering",
    description: "Innovative and efficient engineering solutions tailored to your needs.",
    iconName: "Compass",
  },
  {
    title: "Engineering Procurement",
    description: "Strategic sourcing and procurement with a focus on quality and value.",
    iconName: "Search",
  },
  {
    title: "Construction Management",
    description: "Expert project management ensuring on-time and within-budget delivery.",
    iconName: "Construction",
  },
  {
    title: "Fabrication Works",
    description: "High-precision fabrication using advanced technology and skilled workforce.",
    iconName: "Ruler",
  },
  {
    title: "Erection & Installation",
    description: "Safe and efficient erection and installation of complex industrial facilities.",
    iconName: "Wrench",
  },
  {
    title: "Testing & Commissioning",
    description: "Rigorous testing and commissioning for reliable and safe operations.",
    iconName: "Gauge",
  },
  {
    title: "Environmental Solutions",
    description: "Sustainable solutions for emission control, waste management & more.",
    iconName: "Leaf",
  },
  {
    title: "Operation & Maintenance",
    description: "Comprehensive O&M services to maximize plant performance.",
    iconName: "Headset",
  },
];

const DEFAULT_PROJECT_TYPES: IndustryProjectType[] = [
  {
    title: "Greenfield Projects",
    description: "Complete engineering and construction of new facilities from the ground up.",
    iconName: "Sprout",
  },
  {
    title: "Brownfield Projects",
    description: "Upgrading and expanding existing facilities with minimal disruption.",
    iconName: "Building2",
  },
  {
    title: "Revamp & Modernization",
    description: "Improving performance, efficiency and reliability of existing assets.",
    iconName: "RefreshCcw",
  },
  {
    title: "Turnkey Projects",
    description: "End-to-end responsibility from concept to commissioning and handover.",
    iconName: "KeyRound",
  },
];

const DEFAULT_BENEFITS: IndustryBenefit[] = [
  {
    title: "Operational Excellence",
    description: "Optimized processes for maximum efficiency and productivity.",
    iconName: "Target",
  },
  {
    title: "Cost Efficiency",
    description: "Smart engineering and execution for better ROI.",
    iconName: "CircleDollarSign",
  },
  {
    title: "Safety First",
    description: "Highest safety standards for people, assets and environment.",
    iconName: "ShieldCheck",
  },
  {
    title: "Sustainable Solutions",
    description: "Environmentally responsible solutions for a sustainable future.",
    iconName: "Leaf",
  },
  {
    title: "Long-Term Partnership",
    description: "Building lasting relationships based on trust, integrity and performance.",
    iconName: "Handshake",
  },
];

const DEFAULT_HERO_FEATURES: IndustryFeature[] = [
  {
    title: "Proven Expertise",
    description: "Decades of experience across industrial sectors",
    iconName: "ShieldCheck",
  },
  {
    title: "Safe & Reliable",
    description: "Committed to safety, quality and reliability",
    iconName: "Users",
  },
  {
    title: "End-to-End Solutions",
    description: "From concept to commissioning",
    iconName: "BadgeCheck",
  },
  {
    title: "Global Standards",
    description: "Compliant with international codes and standards",
    iconName: "Globe",
  },
];

export const INDUSTRY_DETAILS: Record<string, IndustryDetailContent> = {
  "oil-gas": {
    heroLabel: "INDUSTRIES WE SERVE",
    heroTitleLines: {
      line1: "Oil & Gas",
      line2Green: "Engineering the Energy",
      line3White: "that Powers the World.",
    },
    heroDescription:
      "ELGC delivers end-to-end engineering, construction and environmental solutions for the oil & gas industry.",
    heroImage: IMAGES.projects.shears[0],
    heroFeatures: [
      {
        title: "Proven Expertise",
        description: "Decades of experience in the oil & gas sector",
        iconName: "ShieldCheck",
      },
      {
        title: "Safe & Reliable",
        description: "Committed to safety, quality and reliability",
        iconName: "Users",
      },
      {
        title: "End-to-End Solutions",
        description: "From concept to commissioning",
        iconName: "BadgeCheck",
      },
      {
        title: "Global Standards",
        description: "Compliant with international codes and standards",
        iconName: "Globe",
      },
    ],
    solutionsHeading: "Comprehensive Solutions for the Entire Project Lifecycle",
    solutionsDescription:
      "We provide integrated engineering, procurement, construction and commissioning services tailored to the unique challenges of the oil & gas industry.",
    solutions: DEFAULT_SOLUTIONS.map((item, i) =>
      i === 4
        ? {
            ...item,
            description:
              "Safe and efficient erection and installation of complex oil & gas facilities.",
          }
        : item
    ),
    expertiseHeading: "Engineering Complex Solutions for Critical Operations",
    expertiseDescription:
      "From upstream to downstream, we support every segment of the oil & gas value chain with customized solutions.",
    expertiseChecklist: [
      "Upstream Facilities (Onshore & Offshore)",
      "Midstream Pipelines & Terminals",
      "Downstream Refineries & Petrochemicals",
      "Storage Tanks & Pressure Vessels",
      "Gas Processing & Compression Plants",
      "Offshore Platforms & Modules",
    ],
    expertiseImage: IMAGES.projects.shears[8],
    projectTypes: DEFAULT_PROJECT_TYPES,
    benefitsHeading: "Delivering Value. Driving Performance. Ensuring Safety.",
    benefits: DEFAULT_BENEFITS,
  },
  petrochemical: {
    heroLabel: "INDUSTRIES WE SERVE",
    heroTitleLines: {
      line1: "Petrochemical",
      line2Green: "Building Process Plants",
      line3White: "with Precision & Performance.",
    },
    heroDescription:
      "ELGC delivers integrated engineering, fabrication and construction solutions for petrochemical plants and process facilities.",
    heroImage: IMAGES.projects.shears[1],
    heroFeatures: DEFAULT_HERO_FEATURES.map((f, i) =>
      i === 0
        ? { ...f, description: "Deep expertise in petrochemical process plants" }
        : f
    ),
    solutionsHeading: "Integrated Solutions for Petrochemical Excellence",
    solutionsDescription:
      "We provide engineering, procurement, construction and commissioning services tailored to the demanding requirements of petrochemical facilities.",
    solutions: DEFAULT_SOLUTIONS,
    expertiseHeading: "Engineering Solutions for Complex Process Operations",
    expertiseDescription:
      "From process units to utility systems, we support every aspect of petrochemical facility development with customized engineering solutions.",
    expertiseChecklist: [
      "Process Plant Engineering & Design",
      "Utility Systems & Piping Networks",
      "Storage & Handling Facilities",
      "Instrumentation & Control Systems",
      "Environmental & Safety Systems",
      "Plant Expansion & Debottlenecking",
    ],
    expertiseImage: IMAGES.projects.shears[1],
    projectTypes: DEFAULT_PROJECT_TYPES,
    benefitsHeading: "Delivering Value. Driving Performance. Ensuring Safety.",
    benefits: DEFAULT_BENEFITS,
  },
  "power-generation": {
    heroLabel: "INDUSTRIES WE SERVE",
    heroTitleLines: {
      line1: "Power Generation",
      line2Green: "Powering Progress",
      line3White: "with Reliable Infrastructure.",
    },
    heroDescription:
      "ELGC delivers comprehensive engineering and construction solutions for thermal, gas, renewable and cogeneration power plants.",
    heroImage: IMAGES.projects.shears[2],
    heroFeatures: DEFAULT_HERO_FEATURES.map((f, i) =>
      i === 0 ? { ...f, description: "Proven experience in power generation projects" } : f
    ),
    solutionsHeading: "Complete Solutions for Power Plant Development",
    solutionsDescription:
      "We provide integrated engineering, procurement, construction and commissioning services for power generation facilities of all scales.",
    solutions: DEFAULT_SOLUTIONS,
    expertiseHeading: "Engineering Reliable Power Infrastructure",
    expertiseDescription:
      "From boiler structures to electrical systems, we support every segment of power generation with customized engineering solutions.",
    expertiseChecklist: [
      "Thermal & Gas Power Plants",
      "Renewable Energy Facilities",
      "Cogeneration & Combined Cycle Plants",
      "Boiler & Turbine Structures",
      "Electrical & Instrumentation Systems",
      "Ash Handling & Environmental Systems",
    ],
    expertiseImage: IMAGES.projects.shears[2],
    projectTypes: DEFAULT_PROJECT_TYPES,
    benefitsHeading: "Delivering Value. Driving Performance. Ensuring Safety.",
    benefits: DEFAULT_BENEFITS,
  },
  "water-wastewater": {
    heroLabel: "INDUSTRIES WE SERVE",
    heroTitleLines: {
      line1: "Water & Wastewater",
      line2Green: "Sustainable Water",
      line3White: "Solutions for Every Need.",
    },
    heroDescription:
      "ELGC delivers engineering and construction solutions for water treatment, sewage treatment and desalination projects.",
    heroImage: IMAGES.projects.shears[3],
    heroFeatures: DEFAULT_HERO_FEATURES.map((f, i) =>
      i === 0 ? { ...f, description: "Expertise in water and wastewater infrastructure" } : f
    ),
    solutionsHeading: "Comprehensive Water Infrastructure Solutions",
    solutionsDescription:
      "We provide integrated engineering, procurement, construction and commissioning services for water and wastewater treatment facilities.",
    solutions: DEFAULT_SOLUTIONS,
    expertiseHeading: "Engineering Sustainable Water Management Systems",
    expertiseDescription:
      "From treatment plants to distribution networks, we support every aspect of water infrastructure with customized solutions.",
    expertiseChecklist: [
      "Water Treatment Plants (WTP)",
      "Sewage Treatment Plants (STP)",
      "Effluent Treatment Plants (ETP)",
      "Desalination Facilities",
      "Pumping Stations & Pipelines",
      "Industrial Water Recycling Systems",
    ],
    expertiseImage: IMAGES.projects.shears[3],
    projectTypes: DEFAULT_PROJECT_TYPES,
    benefitsHeading: "Delivering Value. Driving Performance. Ensuring Safety.",
    benefits: DEFAULT_BENEFITS,
  },
  cement: {
    heroLabel: "INDUSTRIES WE SERVE",
    heroTitleLines: {
      line1: "Cement",
      line2Green: "Building the Foundation",
      line3White: "of Modern Infrastructure.",
    },
    heroDescription:
      "ELGC delivers engineering and construction solutions for cement plants including kilns, material handling and utility systems.",
    heroImage: IMAGES.projects.shears[4],
    heroFeatures: DEFAULT_HERO_FEATURES.map((f, i) =>
      i === 0 ? { ...f, description: "Extensive experience in cement plant projects" } : f
    ),
    solutionsHeading: "End-to-End Solutions for Cement Plant Development",
    solutionsDescription:
      "We provide integrated engineering, procurement, construction and commissioning services tailored to cement industry requirements.",
    solutions: DEFAULT_SOLUTIONS,
    expertiseHeading: "Engineering Solutions for Cement Production",
    expertiseDescription:
      "From kiln systems to material handling, we support every segment of cement plant development with proven expertise.",
    expertiseChecklist: [
      "Kiln Systems & Preheater Towers",
      "Material Handling & Storage",
      "Crushing & Grinding Units",
      "Packing & Dispatch Systems",
      "ESP & Bag Filter Systems",
      "Utility & Auxiliary Buildings",
    ],
    expertiseImage: IMAGES.projects.shears[4],
    projectTypes: DEFAULT_PROJECT_TYPES,
    benefitsHeading: "Delivering Value. Driving Performance. Ensuring Safety.",
    benefits: DEFAULT_BENEFITS,
  },
  "steel-metals": {
    heroLabel: "INDUSTRIES WE SERVE",
    heroTitleLines: {
      line1: "Steel & Metals",
      line2Green: "Forging Industrial",
      line3White: "Strength & Excellence.",
    },
    heroDescription:
      "ELGC delivers structural, mechanical and utility solutions for integrated steel plants, rolling mills and metal processing units.",
    heroImage: IMAGES.projects.shears[5],
    heroFeatures: DEFAULT_HERO_FEATURES.map((f, i) =>
      i === 0 ? { ...f, description: "Proven track record in steel & metals sector" } : f
    ),
    solutionsHeading: "Comprehensive Solutions for Steel & Metals Industry",
    solutionsDescription:
      "We provide integrated engineering, fabrication, erection and commissioning services for steel production and processing facilities.",
    solutions: DEFAULT_SOLUTIONS,
    expertiseHeading: "Engineering Solutions for Metals Production",
    expertiseDescription:
      "From blast furnaces to rolling mills, we support every segment of steel and metals production with customized solutions.",
    expertiseChecklist: [
      "Integrated Steel Plants",
      "Rolling Mills & Processing Units",
      "Structural Steel Fabrication",
      "Material Handling Systems",
      "Furnace & Reheating Equipment",
      "Utility & Pollution Control Systems",
    ],
    expertiseImage: IMAGES.projects.shears[5],
    projectTypes: DEFAULT_PROJECT_TYPES,
    benefitsHeading: "Delivering Value. Driving Performance. Ensuring Safety.",
    benefits: DEFAULT_BENEFITS,
  },
  manufacturing: {
    heroLabel: "INDUSTRIES WE SERVE",
    heroTitleLines: {
      line1: "Manufacturing",
      line2Green: "Building Facilities",
      line3White: "for Modern Production.",
    },
    heroDescription:
      "ELGC delivers engineering and construction solutions for state-of-the-art manufacturing facilities across diverse sectors.",
    heroImage: IMAGES.projects.yogurt[0],
    heroFeatures: DEFAULT_HERO_FEATURES.map((f, i) =>
      i === 0 ? { ...f, description: "Experience across diverse manufacturing sectors" } : f
    ),
    solutionsHeading: "Complete Solutions for Manufacturing Facilities",
    solutionsDescription:
      "We provide integrated engineering, procurement, construction and commissioning services for manufacturing plant development.",
    solutions: DEFAULT_SOLUTIONS,
    expertiseHeading: "Engineering World-Class Manufacturing Infrastructure",
    expertiseDescription:
      "From industrial buildings to process equipment installation, we support every aspect of manufacturing facility development.",
    expertiseChecklist: [
      "Industrial Building Construction",
      "Process Equipment Installation",
      "Utility & HVAC Systems",
      "Clean Room & Controlled Environments",
      "Material Handling & Logistics",
      "Electrical & Instrumentation Works",
    ],
    expertiseImage: IMAGES.projects.yogurt[0],
    projectTypes: DEFAULT_PROJECT_TYPES,
    benefitsHeading: "Delivering Value. Driving Performance. Ensuring Safety.",
    benefits: DEFAULT_BENEFITS,
  },
  infrastructure: {
    heroLabel: "INDUSTRIES WE SERVE",
    heroTitleLines: {
      line1: "Infrastructure",
      line2Green: "Building the Backbone",
      line3White: "of Industrial Growth.",
    },
    heroDescription:
      "ELGC delivers large-scale infrastructure projects including industrial buildings, pipelines, roads and utilities.",
    heroImage: IMAGES.projects.shears[6],
    heroFeatures: DEFAULT_HERO_FEATURES.map((f, i) =>
      i === 0 ? { ...f, description: "Extensive infrastructure development experience" } : f
    ),
    solutionsHeading: "Comprehensive Infrastructure Development Solutions",
    solutionsDescription:
      "We provide integrated engineering, procurement, construction and commissioning services for industrial infrastructure projects.",
    solutions: DEFAULT_SOLUTIONS,
    expertiseHeading: "Engineering Large-Scale Infrastructure Projects",
    expertiseDescription:
      "From industrial parks to utility corridors, we support every aspect of infrastructure development with proven capabilities.",
    expertiseChecklist: [
      "Industrial Buildings & Warehouses",
      "Pipeline & Utility Corridors",
      "Roads & Site Development",
      "Drainage & External Works",
      "Substation & Electrical Infrastructure",
      "Water Supply & Fire Fighting Systems",
    ],
    expertiseImage: IMAGES.projects.shears[6],
    projectTypes: DEFAULT_PROJECT_TYPES,
    benefitsHeading: "Delivering Value. Driving Performance. Ensuring Safety.",
    benefits: DEFAULT_BENEFITS,
  },
};

export function getIndustryDetail(slug: string): IndustryDetailContent | undefined {
  return INDUSTRY_DETAILS[slug];
}
