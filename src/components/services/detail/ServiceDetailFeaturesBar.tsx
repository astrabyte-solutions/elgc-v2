"use client";

import {
  Blocks,
  Building2,
  ShieldCheck,
  Clock,
  HardHat,
  Factory,
  Users,
  Construction,
  Zap,
  Gauge,
  Leaf,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { type Service } from "@/lib/data/services";

const ICON_MAP: Record<NonNullable<Service["featuresBarVariant"]>, LucideIcon[]> = {
  default: [HardHat, Building2, ShieldCheck, Clock, HardHat],
  civil: [Blocks, Building2, ShieldCheck, Clock, HardHat],
  fabrication: [Factory, Users, ShieldCheck, Clock, HardHat],
  erection: [Construction, Gauge, Users, Clock, HardHat],
  electrical: [Zap, Gauge, ShieldCheck, Clock, Users],
  environmental: [Leaf, Building2, ShieldCheck, Clock, Gauge],
};

interface ServiceDetailFeaturesBarProps {
  service: Service;
}

export function ServiceDetailFeaturesBar({ service }: ServiceDetailFeaturesBarProps) {
  const variant = service.featuresBarVariant ?? "default";
  const icons = ICON_MAP[variant];

  return (
    <motion.div
      className="relative z-30 mx-auto w-full max-w-[1150px] translate-y-8 px-4 sm:translate-y-10 lg:px-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.3 }}
    >
      <div className="rounded-xl border border-white/10 bg-[#0f2744] shadow-[0_8px_32px_rgba(0,0,0,0.28)]">
        <div className="flex flex-col divide-y divide-white/10 lg:flex-row lg:divide-x lg:divide-y-0">
          {service.heroFeatures.map((feature, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={feature}
                className="flex flex-1 items-center gap-3 px-4 py-4 sm:gap-4 sm:px-5 sm:py-5"
              >
                <Icon className="h-7 w-7 shrink-0 text-white/90" strokeWidth={1.5} />
                <p className="text-sm font-semibold leading-snug text-white sm:text-[15px]">{feature}</p>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
