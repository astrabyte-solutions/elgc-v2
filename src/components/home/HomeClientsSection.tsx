"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AccentHeading } from "@/components/home/AccentHeading";
import { CLIENT_LOGOS } from "@/lib/data/clients";
import {
  HOME_SECTION_CONTAINER,
  HOME_SECTION_HEADING_MB,
  HOME_SECTION_PY,
} from "@/lib/home-section-styles";

const AUTO_PLAY_MS = 4000;

function ClientLogoCard({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="premium-card flex h-[88px] items-center justify-center rounded-lg border border-[#e8ecf0] bg-white px-5 py-4 shadow-[0_2px_12px_rgba(15,39,68,0.05)] sm:h-[96px]">
      <div className="relative h-11 w-full sm:h-12">
        <Image src={logo} alt={name} fill className="object-contain" sizes="(max-width: 640px) 45vw, 180px" />
      </div>
    </div>
  );
}

export function HomeClientsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(2);
  const [isPaused, setIsPaused] = useState(false);

  const total = CLIENT_LOGOS.length;
  const maxIndex = Math.max(0, total - slidesPerView);

  const updateSlidesPerView = useCallback(() => {
    if (window.innerWidth >= 1280) setSlidesPerView(5);
    else if (window.innerWidth >= 1024) setSlidesPerView(4);
    else if (window.innerWidth >= 640) setSlidesPerView(3);
    else setSlidesPerView(2);
  }, []);

  useEffect(() => {
    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, [updateSlidesPerView]);

  useEffect(() => {
    setActiveIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  useEffect(() => {
    if (isPaused || maxIndex === 0) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, AUTO_PLAY_MS);

    return () => clearInterval(timer);
  }, [isPaused, maxIndex]);

  return (
    <AnimatedSection className={`bg-[#eef1f4] ${HOME_SECTION_PY}`}>
      <div className={HOME_SECTION_CONTAINER}>
        <div
          className={`flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between ${HOME_SECTION_HEADING_MB}`}
        >
          <AccentHeading accentLetter="O" rest="ur Clients" className="mb-0" />
          <Link
            href="/supplier-registration"
            className="inline-flex w-fit items-center gap-2 rounded-md border border-[#86efac] bg-white px-6 py-2.5 text-sm font-semibold text-[#16a34a] transition-colors hover:bg-[#f0fdf4] sm:px-8 sm:py-3"
          >
            Supplier Registration
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div
          className="overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            className="flex"
            style={{ width: `${(total / slidesPerView) * 100}%` }}
            animate={{ x: `-${(activeIndex * 100) / total}%` }}
            transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
          >
            {CLIENT_LOGOS.map((client) => (
              <div
                key={client.slug}
                className="shrink-0 px-2"
                style={{ width: `${100 / total}%` }}
              >
                <ClientLogoCard name={client.name} logo={client.logo} />
              </div>
            ))}
          </motion.div>
        </div>

        {maxIndex > 0 && (
          <div className="mt-8 flex justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === activeIndex ? "w-6 bg-[#22c55e]" : "w-2 bg-[#22c55e]/30"
                }`}
                aria-label={`Go to client slide ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </AnimatedSection>
  );
}
