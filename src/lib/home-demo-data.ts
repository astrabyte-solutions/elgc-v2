import { IMAGES } from "@/lib/images";

export const ELGC_GREEN = "#04af34";
export const ELGC_BLUE = "#08319c";
export const ELGC_NAVY = "#061527";

export interface DemoHeroSlide {
  id: string;
  eyebrow: string;
  titleHtml: string;
  text: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  background: string;
  backgroundAlt: string;
  visuals: { src: string; alt: string; variant: "large" | "small-a" | "small-b" }[];
  progressLabel: string;
}

export interface DemoServiceCard {
  number: string;
  titleHtml: string;
  description: string;
  badges: string[];
  href: string;
  image: string;
  imageAlt: string;
}

export const DEMO_HERO_SLIDES: DemoHeroSlide[] = [
  {
    id: "industrial-execution",
    eyebrow: "INDUSTRIAL PROJECT EXECUTION",
    titleHtml:
      'Built for <span>Critical Industrial Work.</span><br />Engineered to Perform Under Pressure.',
    text: "Shutdowns, plant modifications and multidisciplinary works inside operating facilities — where safety, time and coordination are critical.",
    primaryCta: { label: "Explore Capabilities", href: "/services" },
    secondaryCta: { label: "View Projects", href: "/projects" },
    background: IMAGES.hero.home,
    backgroundAlt: "Industrial project execution site",
    visuals: [
      { src: IMAGES.collage.home1, alt: "Industrial plant works", variant: "large" },
      { src: IMAGES.collage.home2, alt: "Equipment erection", variant: "small-a" },
      { src: IMAGES.collage.home3, alt: "Structural fabrication", variant: "small-b" },
    ],
    progressLabel: "01 Execution",
  },
  {
    id: "shutdowns-revamps",
    eyebrow: "SHUTDOWNS & REVAMPS",
    titleHtml:
      'When the Window Is Fixed,<br /><span>Execution Cannot Drift.</span>',
    text: "Verified site conditions, prepared workfronts and controlled mobilisation for time-critical industrial outages.",
    primaryCta: {
      label: "Shutdown Capabilities",
      href: "/services/shutdowns-revamps-plant-modifications",
    },
    secondaryCta: { label: "Discuss Your Project", href: "/contact" },
    background: IMAGES.hero.services,
    backgroundAlt: "Shutdown and revamp works in live industrial plant",
    visuals: [
      { src: IMAGES.projects.shears[0], alt: "Rolling mill revamp works", variant: "large" },
      { src: IMAGES.projects.shears[2], alt: "Shutdown execution", variant: "small-a" },
      { src: IMAGES.projects.shears[3], alt: "Plant modification works", variant: "small-b" },
    ],
    progressLabel: "02 Shutdowns",
  },
  {
    id: "from-scope-to-handover",
    eyebrow: "FROM SCOPE TO HANDOVER",
    titleHtml:
      'One Team Across<br /><span>Multiple Industrial Interfaces.</span>',
    text: "Procurement, civil, steel, mechanical, piping and E&I coordinated through one accountable project structure.",
    primaryCta: { label: "How We Work", href: "/about" },
    secondaryCta: { label: "Request a Proposal", href: "/request-proposal" },
    background: IMAGES.hero.quality,
    backgroundAlt: "Integrated project delivery and handover",
    visuals: [
      { src: IMAGES.hero.quality, alt: "Project management and delivery", variant: "large" },
      { src: IMAGES.projects.shears[9], alt: "Structural works", variant: "small-a" },
      { src: IMAGES.hero.environmental, alt: "Environmental systems", variant: "small-b" },
    ],
    progressLabel: "03 Handover",
  },
];

export const DEMO_SERVICE_CARDS: DemoServiceCard[] = [
  {
    number: "01",
    titleHtml: 'Shutdowns, Revamps & <span>Plant Modifications</span>',
    description:
      "Shutdown planning, workpack preparation, parallel workfronts and structured handback within the planned outage window.",
    badges: ["Outage Planning", "Workfront Management", "Handback"],
    href: "/services/shutdowns-revamps-plant-modifications",
    image: IMAGES.projects.shears[0],
    imageAlt: "Shutdown and revamp works",
  },
  {
    number: "02",
    titleHtml: 'Mechanical & <span>Equipment Erection</span>',
    description:
      "Receipt, positioning, alignment and commissioning support for industrial machinery and process equipment.",
    badges: ["Erection", "Alignment", "Commissioning"],
    href: "/services/mechanical-equipment-erection",
    image: IMAGES.hero.erection,
    imageAlt: "Mechanical equipment erection",
  },
  {
    number: "03",
    titleHtml: 'Plant Relocation & <span>Dismantling</span>',
    description:
      "Controlled decommissioning, dismantling, packing, relocation and reinstallation of industrial equipment and plant systems.",
    badges: ["Dismantling", "Packing", "Relocation"],
    href: "/services/plant-relocation-dismantling",
    image: IMAGES.projects.yogurt[0],
    imageAlt: "Plant relocation and dismantling",
  },
  {
    number: "04",
    titleHtml: 'Structural Steel & <span>Fabrication</span>',
    description:
      "Design coordination, fabrication and erection of industrial structures, platforms, supports and project-specific steelwork.",
    badges: ["Fabrication", "Erection", "Supports"],
    href: "/services/structural-steel-fabrication",
    image: IMAGES.hero.fabrication,
    imageAlt: "Structural steel fabrication",
  },
  {
    number: "05",
    titleHtml: 'Industrial <span>Civil Works</span>',
    description:
      "Equipment foundations, structural modifications, concrete works, industrial flooring and associated infrastructure.",
    badges: ["Foundations", "RCC", "Infrastructure"],
    href: "/services/industrial-civil-works",
    image: IMAGES.hero.civil,
    imageAlt: "Industrial civil works",
  },
  {
    number: "06",
    titleHtml: 'Environmental & <span>Pollution Control</span>',
    description:
      "Integrated delivery of dust collection, material handling and environmental-improvement systems through to commissioning.",
    badges: ["Dust Collection", "Engineering", "Commissioning"],
    href: "/services/environmental-pollution-control",
    image: IMAGES.hero.environmental,
    imageAlt: "Environmental pollution control systems",
  },
];
