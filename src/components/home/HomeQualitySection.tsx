"use client";

import Image from "next/image";
import { ArrowRight, Cog, ShieldCheck, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { HOME_SECTION_CONTAINER } from "@/lib/home-section-styles";
import { IMAGES } from "@/lib/images";
import { COMPANY_CERTIFICATES } from "@/lib/constants";

const certIcons: Record<string, LucideIcon> = {
  "iso-9001-2015": Cog,
  "iso-45001-2018": ShieldCheck,
  "iso-14001": ShieldCheck,
};

const certColors = ["#2563eb", "#22c55e"];

export function HomeQualitySection() {
  return (
    <AnimatedSection className="relative overflow-hidden py-12 lg:py-14">
      <Image
        src={IMAGES.hero.quality}
        alt=""
        fill
        className="object-cover object-center"
        priority={false}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/94 via-[#0a1628]/52 to-[#0a1628]/94" />

      <div className={`relative ${HOME_SECTION_CONTAINER}`}>
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-14 xl:gap-20">
          {/* Left — copy */}
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold leading-snug text-white sm:text-3xl lg:text-[2rem] lg:leading-tight">
              <span className="relative inline-block">
                Built Into the Plan.
                <span
                  className="absolute -bottom-1.5 left-0 h-[3px] w-[calc(100%+2px)] rounded-sm bg-[#22c55e]"
                  aria-hidden
                />
              </span>{" "}
              Present at the Workfront.
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/80 sm:text-[15px]">
              Quality and HSE are not added after work begins. ELGC integrates activity-specific risk
              controls, inspection and test requirements, documented approvals, progress monitoring
              and workfront supervision into project delivery.
            </p>
            <Link
              href="/quality-safety"
              className="mt-5 inline-flex items-center gap-2 rounded-md border border-white px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Our Quality &amp; HSE Approach
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Right — ISO certifications */}
          <div className="flex flex-col gap-4 sm:gap-5 lg:ml-auto lg:w-[min(100%,320px)]">
            {COMPANY_CERTIFICATES.filter((cert) => cert.file).map((cert, index) => {
              const Icon = certIcons[cert.id] ?? ShieldCheck;
              const color = certColors[index % certColors.length];
              return (
                <Link
                  key={cert.id}
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 transition-opacity hover:opacity-90"
                >
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full shadow-lg"
                    style={{ backgroundColor: color }}
                  >
                    <Icon className="h-5 w-5 text-white" strokeWidth={1.6} />
                  </div>
                  <div>
                    <p className="text-base font-bold text-white sm:text-lg">{cert.title}</p>
                    <p className="mt-0.5 text-sm text-white/70">{cert.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
