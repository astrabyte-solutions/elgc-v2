"use client";

import Image from "next/image";
import { Users } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { CtaActions, ctaButtonClass } from "@/components/ui/CtaActions";
import { CounterStat } from "@/components/ui/CounterStat";
import { CLIENTS_FOOTER_STATS, CLIENTS_IMAGES } from "@/lib/data/clients";
import { getClientsIcon } from "@/lib/clients-icons";

function statBorder(index: number, lastIndex: number) {
  if (index === lastIndex) return "";
  return "border-b border-white/10 sm:border-r sm:border-b-0";
}

export function ClientsCtaSection() {
  const lastIndex = CLIENTS_FOOTER_STATS.length - 1;

  return (
    <AnimatedSection className="relative overflow-hidden bg-[#0a1628]">
      <Image
        src={CLIENTS_IMAGES.cta}
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
              <Users className="h-8 w-8 sm:h-9 sm:w-9" strokeWidth={1.5} />
            </div>
            <div>
              <h2 className="text-xl font-bold leading-snug text-white sm:text-2xl lg:text-3xl">
                Let&apos;s Build{" "}
                <span className="text-[#22c55e]">Stronger Partnerships</span>
              </h2>
              <p className="mt-2 text-sm text-white/70 sm:text-[15px]">
                Partner with ELGC for engineering excellence and long-term collaboration.
              </p>
            </div>
          </div>

          <CtaActions className="lg:justify-end">
            <Button href="/contact" className={`${ctaButtonClass} px-4 text-xs sm:px-6 sm:text-sm`}>
              Work With ELGC
            </Button>
            <Button
              href="/contact"
              variant="outline-white"
              icon="arrow"
              className={`${ctaButtonClass} px-4 text-xs sm:px-6 sm:text-sm`}
            >
              Contact Our Team
            </Button>
          </CtaActions>
        </div>

        <div className="mt-12 grid grid-cols-1 border-t border-white/10 sm:grid-cols-2 lg:mt-14 lg:grid-cols-5">
          {CLIENTS_FOOTER_STATS.map((stat, index) => {
            const Icon = getClientsIcon(stat.iconName);
            return (
              <div
                key={stat.title}
                className={`flex items-center gap-3 px-4 py-6 sm:px-3 lg:py-8 ${statBorder(index, lastIndex)}`}
              >
                <Icon className="h-7 w-7 shrink-0 text-white/80" strokeWidth={1.4} />
                <div>
                  <p className="text-xl font-bold text-white sm:text-2xl">
                    <CounterStat end={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1 text-xs text-white/60 sm:text-[13px]">{stat.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
