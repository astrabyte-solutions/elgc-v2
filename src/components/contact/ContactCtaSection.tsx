"use client";

import Image from "next/image";
import { HardHat } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { CtaActions, ctaButtonClass } from "@/components/ui/CtaActions";
import { IMAGES } from "@/lib/images";

export function ContactCtaSection() {
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

      <div className="relative mx-auto max-w-7xl px-3 py-12 lg:px-8 lg:py-14">
        <div className="flex flex-col items-stretch justify-between gap-6 sm:gap-8 lg:flex-row lg:items-center">
          <div className="flex min-w-0 items-start gap-4 sm:items-center sm:gap-6">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#22c55e] text-white sm:h-[72px] sm:w-[72px]">
              <HardHat className="h-8 w-8 sm:h-9 sm:w-9" strokeWidth={1.5} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#22c55e] sm:text-2xl lg:text-3xl">
                Ready to Start Your Project?
              </h2>
              <p className="mt-2 text-sm text-white/70 sm:text-[15px]">
                Talk to our experts today and let&apos;s create value through engineering
                excellence.
              </p>
            </div>
          </div>

          <CtaActions className="lg:justify-end">
            <Button href="/request-proposal" className={`${ctaButtonClass} px-4 text-xs sm:px-6 sm:text-sm`}>
              Request a Proposal
            </Button>
            <Button
              href="#"
              variant="outline-white"
              icon="download"
              className={`${ctaButtonClass} px-4 text-xs sm:px-6 sm:text-sm`}
            >
              Download Company Profile
            </Button>
          </CtaActions>
        </div>
      </div>
    </AnimatedSection>
  );
}
