"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Home, Building2, Award, HardHat, Globe } from "lucide-react";
import { BlueprintIllustration } from "@/components/home/BlueprintIllustration";
import { CounterStat } from "@/components/ui/CounterStat";
import { IMAGES } from "@/lib/images";
import {
  PROJECT_CATEGORY_FILTERS,
  type ProjectCategoryId,
} from "@/lib/project-categories";

const heroStats = [
  { icon: Building2, value: 100, suffix: "+", label: "Projects Delivered" },
  { icon: Award, value: 2008, suffix: "", label: "Established in Abu Dhabi" },
  { icon: HardHat, value: 100, suffix: "+", label: "Mobilisation Capacity" },
  { icon: Globe, value: 10, suffix: "+", label: "Industrial Clients" },
];

interface ProjectsHeroProps {
  activeCategory: ProjectCategoryId;
  onCategoryChange: (category: ProjectCategoryId) => void;
}

export function ProjectsHero({ activeCategory, onCategoryChange }: ProjectsHeroProps) {
  return (
    <section className="relative bg-[#020c1b]">
      {/* Background — overflow hidden only on bg layer */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src={IMAGES.hero.projects}
          alt=""
          fill
          priority
          className="object-cover object-[80%_center] lg:object-[85%_center]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020c1b] from-[38%] via-[#020c1b]/88 via-[52%] to-[#020c1b]/20 to-100%" />
      </div>

      <div className="pointer-events-none absolute top-4 bottom-32 left-0 z-[1] hidden w-[30%] max-w-[340px] opacity-[0.12] lg:block">
        <BlueprintIllustration className="h-full w-full text-[#93c5fd]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-3 pt-5 sm:pt-6 lg:px-8 lg:pt-7">
        <motion.nav
          className="mb-4 flex items-center gap-1 text-sm text-white/85"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <Link href="/" className="flex items-center gap-1 hover:text-[#22c55e]">
            <Home className="h-3.5 w-3.5" />
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-white/60" />
          <span className="text-[#22c55e]">Projects</span>
        </motion.nav>

        <div className="max-w-[520px] text-left">
          <motion.h1
            className="text-[1.75rem] font-bold leading-[1.15] text-white sm:text-4xl lg:text-[2.5rem]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.06 }}
          >
            Industrial Work Defined by Its Constraints—
            <br />
            <span className="text-[#22c55e]">and Its Outcome.</span>
          </motion.h1>

          <motion.div
            className="mt-3 h-[3px] w-12 rounded-sm bg-[#22c55e]"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.4, delay: 0.14 }}
            style={{ transformOrigin: "left" }}
            aria-hidden
          />

          <motion.p
            className="mt-3 max-w-[480px] text-sm leading-relaxed text-white/80 sm:text-[15px]"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
          >
            Explore selected ELGC projects across shutdowns, equipment erection, relocation,
            structural steel, environmental systems, industrial improvement and multidisciplinary
            EPC delivery.
          </motion.p>
        </div>

        <motion.div
          className="mt-5 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-4 sm:mt-6 lg:max-w-4xl lg:grid-cols-4 lg:gap-x-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.24 }}
        >
          {heroStats.map((stat) => (
            <div key={stat.label} className="flex min-w-0 items-center gap-2.5 sm:gap-3">
              <stat.icon className="h-6 w-6 shrink-0 text-white/70 sm:h-7 sm:w-7" strokeWidth={1.5} />
              <div className="min-w-0">
                <p className="text-lg font-bold leading-none text-[#22c55e] sm:text-xl">
                  <CounterStat end={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-0.5 text-[11px] leading-tight text-white/75 sm:text-xs">{stat.label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Category filter — overlaps next section; must NOT be clipped by parent overflow */}
      <motion.div
        className="relative z-20 mx-auto mt-6 max-w-7xl px-3 sm:mt-8 lg:px-8"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.32 }}
      >
        <div className="-mb-10 translate-y-1/2 rounded-2xl bg-white px-3 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.14)] sm:-mb-12 sm:rounded-full sm:px-4 sm:py-3.5 lg:px-5">
          <div className="flex flex-wrap items-center justify-center gap-2 lg:flex-nowrap lg:justify-between lg:gap-1">
            {PROJECT_CATEGORY_FILTERS.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => onCategoryChange(cat.id)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-2.5 text-[11px] font-semibold leading-snug whitespace-nowrap transition-colors sm:px-3.5 sm:text-xs lg:px-2.5 lg:py-2 ${
                    isActive
                      ? "bg-[#22c55e] text-white"
                      : "text-[#374151] hover:bg-[#f3f4f6] hover:text-[#22c55e]"
                  }`}
                >
                  {!isActive && <Icon className="h-4 w-4 shrink-0" strokeWidth={1.5} />}
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Spacer so filter overlap has room inside the hero */}
      <div className="h-10 sm:h-12" aria-hidden />
    </section>
  );
}
