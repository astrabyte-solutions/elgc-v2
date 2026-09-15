"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Home } from "lucide-react";
import { CONTACT_HERO_FEATURES } from "@/lib/data/contact";
import { IMAGES } from "@/lib/images";
import { getContactIcon } from "@/lib/contact-icons";

export function ContactHero() {
  return (
    <section className="relative bg-[#020c1b]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src={IMAGES.hero.contact}
          alt=""
          fill
          priority
          className="object-cover object-[75%_center] lg:object-[82%_center]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020c1b] from-[36%] via-[#020c1b]/92 via-[50%] to-[#020c1b]/15 to-100%" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-3 pt-6 pb-0 sm:pt-8 lg:px-8 lg:pt-10">
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
          <span className="text-[#22c55e]">Contact</span>
        </motion.nav>

        <div className="max-w-[560px] text-left">
          <motion.h1
            className="text-[1.75rem] font-bold leading-[1.15] text-white sm:text-4xl lg:text-[2.5rem]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.06 }}
          >
            Let&apos;s Discuss
            <br />
            <span className="text-[#22c55e]">the Workfront.</span>
          </motion.h1>

          <motion.p
            className="mt-4 max-w-[500px] text-sm leading-relaxed text-white/80 sm:text-[15px]"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.14 }}
          >
            Share your project requirement and we will respond within one business day. Our team
            will review your scope before responding to ensure a relevant and informed reply.
          </motion.p>
        </div>

        <motion.div
          className="mt-8 border-t border-white/10 lg:mt-10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22 }}
        >
          <div className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
            {CONTACT_HERO_FEATURES.map((feature) => {
              const Icon = getContactIcon(feature.iconName);
              return (
                <div
                  key={feature.title}
                  className="flex items-start gap-3 px-0 py-5 sm:px-4 lg:px-5"
                >
                  <Icon className="mt-0.5 h-7 w-7 shrink-0 text-white/90" strokeWidth={1.5} />
                  <div>
                    <p className="text-sm font-bold text-white sm:text-[15px]">{feature.title}</p>
                    <p className="mt-1 text-xs text-white/65 sm:text-[13px]">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      <div className="h-6 sm:h-8" aria-hidden />
    </section>
  );
}
