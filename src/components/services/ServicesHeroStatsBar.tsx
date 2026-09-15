"use client";

import { motion } from "framer-motion";
import {
  HardHat,
  Building2,
  Users,
  Handshake,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { CounterStat } from "@/components/ui/CounterStat";

const GREEN = "#22c55e";

const stats: {
  icon: LucideIcon;
  value: number;
  suffix: string;
  label: string;
}[] = [
  { icon: HardHat, value: 2008, suffix: "", label: "Established in Abu Dhabi" },
  { icon: Building2, value: 100, suffix: "+", label: "Projects Delivered" },
  { icon: Users, value: 100, suffix: "+", label: "Mobilisation Capacity" },
  { icon: Handshake, value: 10, suffix: "+", label: "Industrial Clients" },
];

const pledgeLines = ["Safety", "Quality", "Commitment"];

export function ServicesHeroStatsBar() {
  return (
    <motion.div
      className="relative z-30 mx-auto w-full max-w-[1150px] px-4 lg:px-6"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.35 }}
    >
      <div className="rounded-lg bg-[#0f2744] shadow-[0_8px_32px_rgba(0,0,0,0.25)]">
        <div className="flex flex-col divide-y divide-white/10 lg:flex-row lg:divide-x lg:divide-y-0">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-1 items-center gap-3 px-4 py-5 sm:gap-4 sm:px-5 sm:py-6 lg:py-6"
            >
              <stat.icon className="h-8 w-8 shrink-0 sm:h-9 sm:w-9" style={{ color: GREEN }} strokeWidth={1.5} />
              <div className="min-w-0">
                <p className="text-xl font-bold leading-none text-white sm:text-2xl">
                  <CounterStat end={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-1.5 text-xs leading-snug text-white/80 sm:text-[13px]">{stat.label}</p>
              </div>
            </div>
          ))}

          <div className="flex flex-1 items-center gap-3 px-4 py-5 sm:gap-4 sm:px-5 sm:py-6 lg:py-6">
            <ShieldCheck className="h-8 w-8 shrink-0 sm:h-9 sm:w-9" style={{ color: GREEN }} strokeWidth={1.5} />
            <div className="space-y-0.5">
              {pledgeLines.map((line) => (
                <p key={line} className="text-sm font-semibold leading-snug text-white sm:text-[15px]">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
