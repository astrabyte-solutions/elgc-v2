"use client";

import Image from "next/image";
import { Construction, ClipboardList, Users, Award, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { CounterStat } from "@/components/ui/CounterStat";
import { IMAGES } from "@/lib/images";

const footerStats = [
  { icon: ClipboardList, value: 100, suffix: "+", label: "Projects Delivered" },
  { icon: Users, value: 10, suffix: "+", label: "Industrial Clients" },
  { icon: Clock, value: 2008, suffix: "", label: "Established" },
  { icon: Award, value: 100, suffix: "+", label: "Mobilisation Capacity" },
];

export function ProjectsCtaSection() {
  return (
    <section className="relative overflow-hidden bg-[#0a1628] py-12 lg:py-14">
      <Image
        src={IMAGES.hero.projects}
        alt=""
        fill
        className="object-cover object-left opacity-20"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/90 to-[#0a1628]/85" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <motion.div
          className="flex items-center gap-5 sm:gap-6"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#22c55e] sm:h-[72px] sm:w-[72px]">
            <Construction className="h-8 w-8 text-white sm:h-9 sm:w-9" strokeWidth={1.5} />
          </div>
          <div>
            <h2 className="text-xl font-bold leading-snug text-white sm:text-2xl md:text-[1.65rem]">
              Have a <span className="text-[#22c55e]">Project in Mind?</span>
            </h2>
            <p className="mt-2 max-w-md text-sm text-white/75 sm:text-[15px]">
              Partner with ELGC for reliable engineering, execution and project delivery.
            </p>
            <div className="mt-5">
              <Button href="/request-proposal">Start Your Project</Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:gap-4"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          {footerStats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center text-center ${
                i < footerStats.length - 1 ? "lg:border-r lg:border-white/15" : ""
              }`}
            >
              <stat.icon className="mb-2 h-7 w-7 text-white/80" strokeWidth={1.5} />
              <p className="text-2xl font-bold text-white sm:text-[1.65rem]">
                <CounterStat end={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-1 text-xs text-white/65 sm:text-[13px]">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
