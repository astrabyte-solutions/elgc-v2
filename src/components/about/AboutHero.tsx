"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IMAGES } from "@/lib/images";
import { COMPANY } from "@/lib/constants";

export function AboutHero() {
  return (
    <section className="relative min-h-[440px] overflow-hidden md:min-h-[480px] lg:min-h-[500px]">
      <Image
        src={IMAGES.hero.about}
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/94 via-[#0a1628]/58 to-[#0a1628]/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/30 via-transparent to-transparent" />

      <div className="relative mx-auto flex h-full min-h-[inherit] max-w-7xl items-center px-4 py-16 lg:px-8 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="max-w-xl border-l-4 border-[#22c55e] pl-6 sm:pl-7"
        >
          <p className="mb-4 text-sm font-bold tracking-[0.18em] text-[#22c55e] uppercase">
            About ELGC
          </p>
          <h1 className="text-3xl font-bold leading-[1.15] text-white sm:text-4xl md:text-5xl lg:text-[3.15rem]">
            Industrial Construction,{" "}
            <span className="text-[#22c55e]">Built Around Execution.</span>
          </h1>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-white/85 sm:text-base md:text-lg">
            {COMPANY.about}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
