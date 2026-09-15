"use client";

import Image from "next/image";
import { Clipboard } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { IMAGES } from "@/lib/images";

export function ProposalCtaSection() {
  return (
    <AnimatedSection className="relative overflow-hidden bg-[#0a1628]">
      <Image
        src={IMAGES.hero.industries}
        alt=""
        fill
        className="object-cover opacity-20"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[#0a1628]/88" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-stretch justify-between gap-6 px-3 py-12 sm:gap-8 lg:flex-row lg:items-center lg:px-8 lg:py-14">
        <div className="flex min-w-0 items-start gap-4 sm:items-center sm:gap-6">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#22c55e] text-white sm:h-[72px] sm:w-[72px]">
            <Clipboard className="h-8 w-8 sm:h-9 sm:w-9" strokeWidth={1.5} />
          </div>
          <div>
            <h2 className="text-xl font-bold leading-snug text-white sm:text-2xl lg:text-3xl">
              Let&apos;s Build Something <span className="text-[#22c55e]">Great</span> Together
            </h2>
            <p className="mt-2 text-sm text-white/70 sm:text-[15px]">
              Share your project details and we&apos;ll create the right solution for you.
            </p>
          </div>
        </div>

        <Link
          href="/projects"
          className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-md border-2 border-white px-5 py-3 text-sm font-semibold tracking-wide text-white uppercase transition-colors hover:bg-white/10 sm:w-auto sm:px-6"
        >
          View Our Projects
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </AnimatedSection>
  );
}
