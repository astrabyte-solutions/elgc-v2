"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { IMAGES } from "@/lib/images";

export function AboutQualityCtaSection() {
  return (
    <AnimatedSection className="relative overflow-hidden bg-[#0a1628]">
      <Image
        src={IMAGES.hero.industries}
        alt=""
        fill
        className="object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-[#0a1628]/88" />

      <div className="relative mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-14">
        <div className="flex flex-col items-stretch gap-6 lg:flex-row lg:items-center lg:gap-10">
          {/* Worker photo + shield badge */}
          <div className="relative shrink-0">
            <div className="relative h-28 w-28 overflow-hidden rounded-sm sm:h-32 sm:w-32">
              <Image
                src={IMAGES.hero.quality}
                alt=""
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="absolute -right-4 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center bg-[#22c55e] shadow-lg sm:h-16 sm:w-16">
              <ShieldCheck className="h-7 w-7 text-white sm:h-8 sm:w-8" strokeWidth={1.6} />
            </div>
          </div>

          {/* Text */}
          <div className="min-w-0 flex-1">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,340px)_1fr] lg:items-start lg:gap-10">
              <div>
                <p className="mb-3 text-sm font-bold tracking-[0.16em] text-[#22c55e] uppercase">
                  Quality &amp; Safety
                </p>
                <h2 className="text-2xl font-bold leading-snug text-white sm:text-3xl lg:text-[1.75rem] xl:text-3xl">
                  Committed to Quality. Dedicated to{" "}
                  <span className="text-[#22c55e]">Safety.</span>
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-white/80 sm:text-[15px] lg:pt-8">
                ELGC follows stringent quality standards and safety practices at every stage of the
                project to ensure reliable and sustainable results.
              </p>
            </div>
          </div>

          {/* CTA */}
          <Link
            href="/quality-safety"
            className="inline-flex w-full shrink-0 items-center justify-center gap-2 border border-white px-5 py-3 text-xs font-bold tracking-wide text-white uppercase transition-colors hover:bg-white/10 sm:w-auto sm:px-6 sm:text-[13px]"
          >
            Explore Our Quality &amp; Safety
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
}
