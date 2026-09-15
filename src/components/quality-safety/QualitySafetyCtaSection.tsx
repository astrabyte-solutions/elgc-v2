"use client";

import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { CtaActions, ctaButtonClass } from "@/components/ui/CtaActions";
import { CounterStat } from "@/components/ui/CounterStat";
import { QUALITY_SAFETY_FOOTER_STATS, QUALITY_SAFETY_IMAGES } from "@/lib/data/quality-safety";
import { getQualitySafetyIcon } from "@/lib/quality-safety-icons";

function statBorder(index: number, lastIndex: number) {
  if (index === lastIndex) return "";
  return "border-b border-white/10 sm:border-r sm:border-b-0";
}

export function QualitySafetyCtaSection() {
  const lastIndex = QUALITY_SAFETY_FOOTER_STATS.length - 1;

  return (
    <AnimatedSection className="relative overflow-hidden bg-[#0a1628]">
      <Image
        src={QUALITY_SAFETY_IMAGES.cta}
        alt=""
        fill
        className="object-cover opacity-20"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[#0a1628]/88" />

      <div className="relative mx-auto max-w-7xl px-3 py-12 lg:px-8 lg:py-14">
        <div className="flex flex-col items-stretch justify-between gap-6 sm:gap-8 lg:flex-row lg:items-center">
          <div className="flex min-w-0 items-start gap-4 sm:items-center sm:gap-6">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#22c55e] text-white sm:h-[72px] sm:w-[72px]">
              <ShieldCheck className="h-8 w-8 sm:h-9 sm:w-9" strokeWidth={1.5} />
            </div>
            <div>
              <h2 className="text-xl font-bold leading-snug text-white sm:text-2xl lg:text-3xl">
                <span className="text-[#22c55e]">Safety</span> is Our Priority.{" "}
                <span className="text-[#22c55e]">Quality</span> is Our Promise.
              </h2>
              <p className="mt-2 text-sm text-white/70 sm:text-[15px]">
                Together, we build a safer world with excellence in everything we do.
              </p>
            </div>
          </div>

          <CtaActions className="lg:justify-end">
            <Button href="/contact" className={`${ctaButtonClass} px-4 text-xs sm:px-6 sm:text-sm`}>
              Discuss Your Project
            </Button>
            <Button
              href="#"
              variant="outline-white"
              icon="download"
              className={`${ctaButtonClass} px-4 text-xs sm:px-6 sm:text-sm`}
            >
              Download HSE Policy
            </Button>
          </CtaActions>
        </div>

        <div className="mt-12 grid grid-cols-1 border-t border-white/10 sm:grid-cols-2 lg:mt-14 lg:grid-cols-5">
          {QUALITY_SAFETY_FOOTER_STATS.map((stat, index) => {
            const Icon = getQualitySafetyIcon(stat.iconName);
            return (
              <div
                key={stat.title}
                className={`flex items-center gap-3 px-4 py-6 sm:flex-col sm:px-3 sm:text-center lg:py-8 ${statBorder(index, lastIndex)}`}
              >
                <Icon className="h-7 w-7 shrink-0 text-white/80 sm:mb-2" strokeWidth={1.4} />
                <div className="sm:text-center">
                  <p className="text-xl font-bold text-white sm:text-2xl">
                    <CounterStat end={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white sm:text-[15px]">{stat.title}</p>
                  <p className="mt-0.5 text-xs text-white/55 sm:text-[13px]">{stat.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
