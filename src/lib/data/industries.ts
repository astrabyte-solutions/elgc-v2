import { IMAGES } from "@/lib/images";
import { getIndustryDetail, type IndustryDetailContent } from "@/lib/data/industry-details";
import {
  Fuel,
  FlaskConical,
  Zap,
  Droplets,
  Factory,
  Columns3,
  Building2,
  Building,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Industry {
  slug: string;
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
}

export interface IndustryWithDetail extends Industry {
  detail: IndustryDetailContent;
}

export const INDUSTRIES: Industry[] = [
  {
    slug: "oil-gas",
    title: "Oil & Gas",
    description:
      "Engineering and construction solutions for upstream, midstream and downstream facilities with a strong focus on safety, reliability and efficiency.",
    image: IMAGES.projects.shears[0],
    icon: Fuel,
  },
  {
    slug: "petrochemical",
    title: "Petrochemical",
    description:
      "Delivering process plant, utility systems and infrastructure projects with high standards of quality and performance.",
    image: IMAGES.projects.shears[1],
    icon: FlaskConical,
  },
  {
    slug: "power-generation",
    title: "Power Generation",
    description:
      "Supporting thermal, gas, renewable and cogeneration plants with comprehensive engineering and construction services.",
    image: IMAGES.projects.shears[2],
    icon: Zap,
  },
  {
    slug: "water-wastewater",
    title: "Water & Wastewater",
    description:
      "Providing sustainable water treatment, sewage treatment and desalination solutions for industrial and municipal applications.",
    image: IMAGES.projects.shears[3],
    icon: Droplets,
  },
  {
    slug: "cement",
    title: "Cement",
    description:
      "Design and execution of kiln systems, material handling, storage and utility infrastructure for cement plants.",
    image: IMAGES.projects.shears[4],
    icon: Factory,
  },
  {
    slug: "steel-metals",
    title: "Steel & Metals",
    description:
      "Structural, mechanical and utility solutions for integrated steel plants, rolling mills and metal processing units.",
    image: IMAGES.projects.shears[5],
    icon: Columns3,
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    description:
      "Building state-of-the-art facilities for manufacturing operations across various sectors.",
    image: IMAGES.projects.yogurt[0],
    icon: Building2,
  },
  {
    slug: "infrastructure",
    title: "Infrastructure",
    description:
      "Delivering large-scale infrastructure projects including industrial buildings, pipelines, roads and utilities.",
    image: IMAGES.projects.shears[6],
    icon: Building,
  },
];

export const HOME_INDUSTRIES = [
  { title: "Cement", image: IMAGES.projects.shears[4] },
  { title: "Steel", image: IMAGES.projects.shears[5] },
  { title: "Power", image: IMAGES.projects.shears[2] },
  { title: "Chemical", image: IMAGES.projects.shears[1] },
  { title: "Manufacturing", image: IMAGES.projects.yogurt[0] },
  { title: "Infrastructure", image: IMAGES.projects.shears[6] },
  { title: "Environmental", image: IMAGES.projects.shears[7] },
];

export function getIndustryBySlug(slug: string): IndustryWithDetail | undefined {
  const industry = INDUSTRIES.find((item) => item.slug === slug);
  const detail = getIndustryDetail(slug);
  if (!industry || !detail) return undefined;
  return { ...industry, detail };
}
