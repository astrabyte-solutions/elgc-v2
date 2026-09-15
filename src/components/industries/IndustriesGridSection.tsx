"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { INDUSTRIES } from "@/lib/data/industries";

function SplitAccentLine() {
  return (
    <div className="mt-4 flex h-[3px] w-16 overflow-hidden rounded-sm" aria-hidden>
      <div className="h-full w-1/2 bg-[#22c55e]" />
      <div className="h-full w-1/2 bg-[#60a5fa]" />
    </div>
  );
}

export function IndustriesGridSection() {
  return (
    <AnimatedSection className="bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-3 lg:px-8">
        <div className="mb-10 grid gap-6 lg:mb-12 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="mb-2 text-sm font-bold tracking-[0.14em] text-[#22c55e] uppercase">
              Our Industries
            </p>
            <h2 className="text-2xl font-bold leading-tight text-[#0f2744] sm:text-3xl lg:text-[2rem]">
              Expertise Across{" "}
              <span className="text-[#22c55e]">Diverse Sectors</span>
            </h2>
            <SplitAccentLine />
          </div>
          <p className="text-sm leading-relaxed text-[#5a6472] sm:text-[15px] lg:pt-8">
            From heavy industrial facilities to critical infrastructure, ELGC has the experience,
            resources and capabilities to deliver reliable and sustainable solutions tailored to the
            unique needs of each industry we serve.
          </p>
        </div>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((ind) => (
            <StaggerItem key={ind.title} interactive>
              <div className="group premium-card flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-[0_4px_24px_rgba(15,39,68,0.08)]">
                <div className="relative h-[175px] sm:h-[185px]">
                  <Image
                    src={ind.image}
                    alt={ind.title}
                    fill
                    className="premium-image-zoom object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                  />
                  <div className="absolute -bottom-5 left-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#22c55e] shadow-md">
                    <ind.icon className="h-5 w-5 text-white" strokeWidth={1.5} />
                  </div>
                </div>

                <div className="flex flex-1 flex-col px-5 pt-9 pb-5">
                  <h3 className="mb-2 text-center text-base font-bold text-[#0f2744]">{ind.title}</h3>
                  <p className="mb-4 flex-1 text-center text-sm leading-relaxed text-[#5a6472]">
                    {ind.description}
                  </p>
                  <Link
                    href={`/industries/${ind.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-[#22c55e] transition-colors hover:text-[#16a34a]"
                  >
                    Learn More <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
