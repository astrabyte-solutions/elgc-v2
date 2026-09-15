"use client";

import Image from "next/image";
import {
  Calendar,
  Building2,
  Users,
  Handshake,
  Target,
  Eye,
  Diamond,
  CheckCircle,
  type LucideIcon,
} from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { CounterStat } from "@/components/ui/CounterStat";
import { IMAGES } from "@/lib/images";
import { COMPANY } from "@/lib/constants";

const stats: {
  value: number;
  suffix: string;
  line1: string;
  line2: string;
  icon: LucideIcon;
}[] = [
  { value: 2008, suffix: "", line1: "Established", line2: "in Abu Dhabi", icon: Calendar },
  { value: 100, suffix: "+", line1: "Projects", line2: "Delivered", icon: Building2 },
  { value: 100, suffix: "+", line1: "Mobilisation", line2: "Capacity", icon: Users },
  { value: 10, suffix: "+", line1: "Industrial", line2: "Clients", icon: Handshake },
];

const valuesLeft = [
  "Safety Before Activity",
  "Ownership",
  "Verification",
];
const valuesRight = [
  "Quality in Execution",
  "Respect for the Operating Environment",
  "Continuous Improvement",
];

const sideGalleryImages = [IMAGES.collage.about2, IMAGES.collage.about3, IMAGES.collage.about4];

export function AboutWhoWeAreSection() {
  return (
    <AnimatedSection className="overflow-x-hidden bg-white py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Who We Are */}
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="mb-3 text-sm font-bold tracking-[0.16em] text-[#22c55e] uppercase">
              Who We Are
            </p>
            <h2 className="text-3xl font-bold leading-tight text-[#0f2744] md:text-4xl">
              Experience Where{" "}
              <span className="text-[#22c55e]">Conditions Are Complex.</span>
            </h2>
            <div className="mt-4 flex h-1 w-20 overflow-hidden rounded-sm">
              <span className="h-full w-1/2 bg-[#2563eb]" />
              <span className="h-full w-1/2 bg-[#22c55e]" />
            </div>
            <p className="mt-5 text-[15px] leading-relaxed text-[#5a6472]">{COMPANY.about}</p>
            <p className="mt-4 text-[15px] leading-relaxed text-[#5a6472]">
              {COMPANY.aboutExtended}
            </p>

            <div className="mt-10 border-t border-[#e8ecf0] pt-8">
              <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:flex md:divide-x md:divide-[#e8ecf0]">
                {stats.map((stat, index) => (
                  <div
                    key={stat.line2}
                    className={`flex flex-col items-start md:min-w-0 md:flex-1 md:px-4 ${
                      index === 0 ? "md:pl-0" : ""
                    } ${index === stats.length - 1 ? "md:pr-0" : ""}`}
                  >
                    <stat.icon
                      className="mb-3 h-9 w-9 shrink-0 text-[#2563eb]"
                      strokeWidth={1.5}
                    />
                    <p className="text-2xl font-bold leading-none text-[#22c55e]">
                      <CounterStat end={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="mt-1.5 text-sm font-semibold leading-tight text-[#0f2744]">
                      {stat.line1}
                    </p>
                    <p className="text-sm leading-tight text-[#5a6472]">{stat.line2}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image gallery */}
          <div className="relative">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-[1.12fr_0.88fr]">
              <div className="relative min-h-[260px] sm:min-h-[360px]">
                {/* Decorative dots + green square — behind image */}
                <div
                  className="pointer-events-none absolute top-1 left-3 z-0 hidden sm:grid sm:grid-cols-5 sm:gap-2"
                  aria-hidden
                >
                  {Array.from({ length: 25 }).map((_, i) => (
                    <span key={i} className="h-1.5 w-1.5 rounded-full bg-[#cbd5e1]" />
                  ))}
                </div>
                <div
                  className="pointer-events-none absolute top-11 left-9 z-0 hidden h-8 w-8 bg-[#22c55e] sm:block"
                  aria-hidden
                />
                <div className="relative z-10 h-full min-h-[inherit] overflow-hidden rounded-xl">
                  <Image src={IMAGES.collage.about1} alt="" fill className="object-cover" />
                </div>
              </div>
              <div className="grid grid-rows-3 gap-3">
                {sideGalleryImages.map((src) => (
                  <div key={src} className="relative min-h-[100px] overflow-hidden rounded-xl sm:min-h-0">
                    <Image src={src} alt="" fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <StaggerContainer className="mt-14 grid gap-4 md:grid-cols-3 lg:mt-16 lg:gap-5">
          <StaggerItem>
            <div className="flex h-full gap-4 rounded-xl bg-[#f4f7fa] p-6 lg:p-7">
              <Target className="h-10 w-10 shrink-0 text-[#22c55e]" strokeWidth={1.4} />
              <div>
                <h3 className="text-sm font-bold tracking-wide text-[#22c55e] uppercase">
                  Our Mission
                </h3>
                <div className="mt-1.5 mb-3 h-0.5 w-10 bg-[#22c55e]" />
                <p className="text-sm leading-relaxed text-[#5a6472]">{COMPANY.mission}</p>
              </div>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="flex h-full gap-4 rounded-xl bg-[#f4f7fa] p-6 lg:p-7">
              <Eye className="h-10 w-10 shrink-0 text-[#2563eb]" strokeWidth={1.4} />
              <div>
                <h3 className="text-sm font-bold tracking-wide text-[#2563eb] uppercase">
                  Our Vision
                </h3>
                <div className="mt-1.5 mb-3 h-0.5 w-10 bg-[#2563eb]" />
                <p className="text-sm leading-relaxed text-[#5a6472]">{COMPANY.vision}</p>
              </div>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="flex h-full flex-col rounded-xl bg-[#f4f7fa] p-6 lg:p-7">
              <div className="flex items-center gap-4">
                <Diamond className="h-10 w-10 shrink-0 text-[#22c55e]" strokeWidth={1.4} />
                <h3 className="text-sm font-bold tracking-wide text-[#22c55e] uppercase">
                  Our Values
                </h3>
              </div>

              <div className="mt-5 grid flex-1 grid-cols-2 gap-x-3 gap-y-2.5 sm:gap-x-5">
                <div className="space-y-2.5">
                  {valuesLeft.map((value) => (
                    <span
                      key={value}
                      className="flex items-start gap-2 text-[13px] leading-snug text-[#5a6472]"
                    >
                      <CheckCircle
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#22c55e]"
                        strokeWidth={2}
                      />
                      {value}
                    </span>
                  ))}
                </div>
                <div className="space-y-2.5">
                  {valuesRight.map((value) => (
                    <span
                      key={value}
                      className="flex items-start gap-2 text-[13px] leading-snug text-[#5a6472]"
                    >
                      <CheckCircle
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#22c55e]"
                        strokeWidth={2}
                      />
                      {value}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
