import { type LucideIcon } from "lucide-react";
import { type Service } from "@/lib/data/services";

export type OverviewLayout =
  | "triple-dual-image"
  | "triple-single-image"
  | "split-left"
  | "triple-image-center"
  | "collage-left";

export type ProcessVariant = "default" | "icon-circle" | "green-circle" | "alternating";

export type ProjectsLayout = "featured-grid" | "horizontal-five";

export type CapabilitiesVariant = "standard" | "key-with-bullets";

export interface ServiceDetailConfig {
  service: Service;
  featuresBarVariant: "default" | "civil" | "fabrication" | "erection" | "electrical" | "environmental";
  overviewLayout: OverviewLayout;
  overviewBg: "dots" | "white";
  overviewFeatureStyle: "green-icon" | "grey-box";
  capabilitiesLabel?: string;
  capabilitiesVariant?: CapabilitiesVariant;
  capabilitiesBg: "dots" | "grey" | "white";
  capabilitiesColumns?: number;
  processLabel?: string;
  processVariant: ProcessVariant;
  projectsLayout: ProjectsLayout;
  whyChooseColumns: 4 | 5;
  ctaIcon?: "service" | "shield" | "zap" | "leaf" | "crane";
}
