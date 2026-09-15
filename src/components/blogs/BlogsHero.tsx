"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Home } from "lucide-react";
import { IMAGES } from "@/lib/images";

export function BlogsHero() {
  return (
    <section className="relative min-h-[400px] bg-[#020c1b] sm:min-h-[440px] lg:min-h-[460px]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src={IMAGES.hero.industries}
          alt=""
          fill
          priority
          className="object-cover object-[75%_center] lg:object-[82%_center]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020c1b] from-[36%] via-[#020c1b]/90 via-[50%] to-[#020c1b]/15 to-100%" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[inherit] max-w-7xl items-center px-3 py-14 sm:py-16 lg:px-8 lg:py-20">
        <div className="max-w-[540px] text-left">
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
            <span className="text-[#22c55e]">Insights</span>
          </motion.nav>

          <motion.p
            className="mb-3 text-sm font-bold tracking-[0.16em] text-[#22c55e] uppercase"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.04 }}
          >
            Insights
          </motion.p>

          <motion.h1
            className="text-[1.75rem] font-bold leading-[1.15] text-white sm:text-4xl lg:text-[2.65rem]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            Lessons From the Plan.{" "}
            <span className="text-[#22c55e]">Evidence From the Workfront.</span>
          </motion.h1>

          <motion.p
            className="mt-4 max-w-md text-sm leading-relaxed text-white/75 sm:text-base"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.14 }}
          >
            Project stories, field notes and technical articles from ELGC teams working inside live
            industrial plants across the UAE.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
