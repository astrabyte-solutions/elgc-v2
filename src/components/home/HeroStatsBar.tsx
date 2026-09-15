"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Building2,
  Users,
  Handshake,
  type LucideIcon,
} from "lucide-react";
import { CounterStat } from "@/components/ui/CounterStat";

const GREEN = "#22c55e";
const BLUE = "#2563eb";
const NAVY = "#0f2744";

const stats: {
  icon: LucideIcon;
  value: number;
  suffix: string;
  label: string;
  color: typeof GREEN | typeof BLUE;
}[] = [
  { icon: Calendar, value: 2008, suffix: "", label: "Established — UAE industrial experience", color: GREEN },
  { icon: Building2, value: 100, suffix: "+", label: "Projects — shutdowns, EPC & plant works", color: BLUE },
  { icon: Users, value: 100, suffix: "+", label: "Mobilisation capacity for critical execution", color: GREEN },
  { icon: Handshake, value: 10, suffix: "+", label: "Industrial clients — owners, EPCs & OEMs", color: BLUE },
];

export function HeroStatsBar() {
  return (
    <motion.div
      className="relative z-30 mx-auto w-full max-w-[1150px] min-w-0 px-4 lg:px-6"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.4 }}
    >
      <div className="overflow-hidden rounded-lg bg-white shadow-[0_8px_32px_rgba(15,39,68,0.12)]">
        <div className="grid grid-cols-1 divide-y divide-gray-200 sm:grid-cols-2 xl:grid-cols-4 xl:divide-x xl:divide-y-0">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex min-w-0 items-center gap-3 px-4 py-5 sm:gap-4 sm:px-5 sm:py-6 lg:py-7"
            >
              <stat.icon
                className="h-8 w-8 shrink-0 sm:h-9 sm:w-9"
                style={{ color: stat.color }}
                strokeWidth={1.5}
              />
              <div className="min-w-0">
                <p
                  className="text-[1.5rem] leading-none font-bold sm:text-[1.65rem] lg:text-[1.75rem]"
                  style={{ color: stat.color }}
                >
                  <CounterStat end={stat.value} suffix={stat.suffix} />
                </p>
                <p
                  className="mt-1.5 text-xs leading-snug font-medium break-words sm:text-[13px]"
                  style={{ color: NAVY }}
                >
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
