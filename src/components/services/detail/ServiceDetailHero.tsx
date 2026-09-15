"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { motion } from "framer-motion";
import { BlueprintIllustration } from "@/components/home/BlueprintIllustration";
import { Button } from "@/components/ui/Button";
import { type Service } from "@/lib/data/services";

interface ServiceDetailHeroProps {
  service: Service;
}

function renderHeroTitle(service: Service) {
  if (service.heroTitleLines) {
    return (
      <>
        {service.heroTitleLines.white}
        <br />
        <span className="text-[#22c55e]">{service.heroTitleLines.green}</span>
      </>
    );
  }

  const titleParts = service.title.split(" & ");
  const firstPart = titleParts[0];
  const secondPart = titleParts.slice(1).join(" & ");

  return (
    <>
      {firstPart}
      {secondPart && (
        <>
          {" & "}
          <span className="text-[#22c55e]">{secondPart}</span>
        </>
      )}
    </>
  );
}

export function ServiceDetailHero({ service }: ServiceDetailHeroProps) {
  const heroDescription = service.pageHeroDescription ?? service.description;
  const buttonLabel = service.heroButtonLabel ?? "Request Consultation";

  return (
    <section className="relative overflow-visible bg-[#0a1628] pb-0">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={service.heroImage}
          alt=""
          fill
          priority
          className="object-cover object-[70%_center] lg:object-[75%_center]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/97 via-[#0a1628]/88 to-[#0a1628]/30" />
      </div>

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage: "radial-gradient(circle, #93c5fd 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
        aria-hidden
      />

      <div className="pointer-events-none absolute top-6 bottom-28 left-0 hidden w-[46%] opacity-[0.2] lg:block">
        <BlueprintIllustration className="h-full w-full max-w-[500px] text-[#93c5fd]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-10 pb-8 sm:pt-12 lg:px-8 lg:pt-14 lg:pb-10">
        <nav className="mb-6 flex flex-wrap items-center gap-1 text-sm text-white/75">
          <Link href="/" className="flex items-center gap-1 hover:text-[#22c55e]">
            <Home className="h-3.5 w-3.5" />
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link href="/services" className="hover:text-[#22c55e]">
            Services
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-[#22c55e]">{service.title}</span>
        </nav>

        <div className="max-w-2xl">
          <motion.p
            className="mb-4 text-sm font-bold tracking-[0.18em] text-[#22c55e] uppercase"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            Our Service
          </motion.p>

          <motion.h1
            className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.6rem] lg:leading-[1.15]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            {renderHeroTitle(service)}
          </motion.h1>

          <motion.p
            className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/85 sm:text-base"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
          >
            {heroDescription}
          </motion.p>

          <motion.div
            className="mt-7"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}
          >
            <Button href="/request-proposal">{buttonLabel}</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
