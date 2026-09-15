"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BlueprintIllustration } from "@/components/home/BlueprintIllustration";
import { ServicesHeroStatsBar } from "@/components/services/ServicesHeroStatsBar";
import { IMAGES } from "@/lib/images";

export function ServicesHero() {
  return (
    <section className="relative overflow-visible bg-[#0a1628] pb-0">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={IMAGES.hero.services}
          alt=""
          fill
          priority
          className="object-cover object-[65%_center] lg:object-[72%_center]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/97 via-[#0a1628]/88 to-[#0a1628]/35" />
      </div>

      <div className="pointer-events-none absolute top-8 bottom-24 left-0 hidden w-[48%] opacity-[0.22] lg:block">
        <BlueprintIllustration className="h-full w-full max-w-[520px] text-[#93c5fd]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-12 pb-8 sm:pt-14 lg:px-8 lg:pt-16 lg:pb-10">
        <div className="max-w-2xl">
          <motion.p
            className="mb-4 text-sm font-bold tracking-[0.18em] text-[#22c55e] uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Capabilities
          </motion.p>

          <motion.h1
            className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.65rem] lg:leading-[1.15]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            Industrial Construction Across the Full Project Lifecycle
          </motion.h1>

          <motion.div
            className="mt-5 h-[3px] w-14 rounded-sm bg-[#22c55e]"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            aria-hidden
          />

          <motion.p
            className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/85 sm:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.25 }}
          >
            ELGC delivers shutdowns, revamps, equipment erection, plant relocation, structural
            steel, piping, civil works and EPC packages inside operating industrial plants in the
            UAE — as main contractor or specialist subcontractor.
          </motion.p>
        </div>
      </div>

      <div className="relative z-30 translate-y-10 sm:translate-y-12">
        <ServicesHeroStatsBar />
      </div>
    </section>
  );
}
