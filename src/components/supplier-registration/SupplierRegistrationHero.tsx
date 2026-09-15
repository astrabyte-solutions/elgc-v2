"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Home } from "lucide-react";
import { IMAGES } from "@/lib/images";

export function SupplierRegistrationHero() {
  return (
    <section className="relative bg-[#020c1b]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src={IMAGES.hero.services}
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020c1b] from-[36%] via-[#020c1b]/92 via-[50%] to-[#020c1b]/15 to-100%" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-3 py-14 sm:py-16 lg:px-8 lg:py-20">
        <motion.nav
          className="mb-5 flex flex-wrap items-center gap-1 text-sm text-white/85"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <Link href="/" className="flex items-center gap-1 hover:text-[#22c55e]">
            <Home className="h-3.5 w-3.5" />
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-white/60" />
          <span className="text-[#22c55e]">Supplier Registration</span>
        </motion.nav>

        <div className="max-w-[620px] text-left">
          <motion.p
            className="mb-3 text-sm font-bold tracking-[0.16em] text-[#22c55e] uppercase"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.06 }}
          >
            Vendor Registration
          </motion.p>

          <motion.h1
            className="text-[1.75rem] font-bold leading-[1.15] text-white sm:text-4xl lg:text-[2.5rem]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            Register as an
            <br />
            <span className="text-[#22c55e]">ELGC Supplier</span>
          </motion.h1>

          <motion.div
            className="mt-3 h-[3px] w-12 rounded-sm bg-[#22c55e]"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.4, delay: 0.16 }}
            style={{ transformOrigin: "left" }}
            aria-hidden
          />

          <motion.p
            className="mt-4 max-w-[540px] text-sm leading-relaxed text-white/80 sm:text-[15px]"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Complete the supplier registration form below with your company, financial, compliance,
            and certification details for vendor onboarding with ELGC.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
