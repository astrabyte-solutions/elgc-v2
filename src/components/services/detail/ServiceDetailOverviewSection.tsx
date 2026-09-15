"use client";

import Image from "next/image";
import {
  Cog,
  Factory,
  ShieldCheck,
  Clock,
  Layers,
  HardHat,
  UserCog,
  Puzzle,
  Target,
  Leaf,
  type LucideIcon,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { type Service } from "@/lib/data/services";

const featureIcons: LucideIcon[] = [UserCog, HardHat, Puzzle, Target, Cog, Factory, ShieldCheck, Clock, Leaf];

interface ServiceDetailOverviewSectionProps {
  service: Service;
}

function featureTitleClass(style: Service["overviewFeatureStyle"]) {
  if (style === "grey-box" || style === "green-title") return "text-[15px] font-bold text-[#22c55e]";
  if (style === "navy-title") return "text-[15px] font-bold text-[#0f2744]";
  return "text-[15px] font-bold text-[#22c55e]";
}

function FeatureList({
  service,
  style,
}: {
  service: Service;
  style: NonNullable<Service["overviewFeatureStyle"]>;
}) {
  const titleClass = featureTitleClass(style);

  return (
    <div className="space-y-6">
      {service.overview.features.map((feature, i) => {
        const Icon = featureIcons[i % featureIcons.length];

        return (
          <div key={feature.title} className="flex gap-4">
            {style === "grey-box" ? (
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#e8edf2]">
                <Icon className="h-6 w-6 text-[#22c55e]" strokeWidth={1.5} />
              </div>
            ) : (
              <Icon className="mt-0.5 h-8 w-8 shrink-0 text-[#22c55e]" strokeWidth={1.5} />
            )}
            <div>
              <h3 className={titleClass}>{feature.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-[#5a6472]">{feature.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function OverviewHeading({
  service,
  inlineTitle = false,
  descriptionOnly = false,
}: {
  service: Service;
  inlineTitle?: boolean;
  descriptionOnly?: boolean;
}) {
  const { overview } = service;

  if (descriptionOnly) {
    return <p className="text-[15px] leading-relaxed text-[#5a6472]">{overview.description}</p>;
  }

  return (
    <>
      <p className="mb-3 text-sm font-bold tracking-[0.16em] text-[#22c55e] uppercase">Overview</p>
      <h2 className="text-2xl font-bold leading-tight text-[#0f2744] sm:text-3xl lg:text-[2rem]">
        {inlineTitle ? (
          <>
            {overview.title} <span className="text-[#22c55e]">{overview.highlight}</span>
          </>
        ) : (
          <>
            {overview.title}
            <br />
            <span className="text-[#22c55e]">{overview.highlight}</span>
          </>
        )}
      </h2>
      {service.overviewLayout !== "split-left" && service.overviewLayout !== "collage-left" && (
        <div className="mt-4 flex h-1 w-20 overflow-hidden rounded-sm">
          <span className="h-full w-1/2 bg-[#22c55e]" />
          <span className="h-full w-1/2 bg-[#2563eb]" />
        </div>
      )}
      <p className="mt-5 text-[15px] leading-relaxed text-[#5a6472]">{overview.description}</p>
    </>
  );
}

export function ServiceDetailOverviewSection({ service }: ServiceDetailOverviewSectionProps) {
  const layout = service.overviewLayout ?? "triple-dual-image";
  const bgClass = service.overviewBg === "white" ? "bg-white" : "service-detail-dots";
  const featureStyle = service.overviewFeatureStyle ?? "green-title";
  const images = service.overviewImages ?? [service.heroImage, service.heroImage];

  if (layout === "split-left") {
    return (
      <AnimatedSection className={`${bgClass} py-16 lg:py-20`}>
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <div className="relative min-h-[280px] overflow-hidden rounded-2xl shadow-[0_8px_32px_rgba(15,39,68,0.12)] sm:min-h-[360px] lg:min-h-[480px]">
            <Image src={images[0]} alt="" fill className="object-cover" sizes="50vw" />
          </div>
          <div>
            <OverviewHeading service={service} inlineTitle />
            <div className="mt-8">
              <FeatureList service={service} style={featureStyle} />
            </div>
          </div>
        </div>
      </AnimatedSection>
    );
  }

  if (layout === "collage-left") {
    const img1 = images[0];
    const img2 = images[1] ?? images[0];
    const img3 = images[2] ?? images[0];
    return (
      <AnimatedSection className={`${bgClass} py-16 lg:py-20`}>
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <div className="grid gap-3">
            <div className="relative min-h-[220px] overflow-hidden rounded-2xl sm:min-h-[260px]">
              <Image src={img1} alt="" fill className="object-cover" sizes="500px" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative min-h-[140px] overflow-hidden rounded-2xl">
                <Image src={img2} alt="" fill className="object-cover" sizes="250px" />
              </div>
              <div className="relative min-h-[140px] overflow-hidden rounded-2xl">
                <Image src={img3} alt="" fill className="object-cover" sizes="250px" />
              </div>
            </div>
          </div>
          <div>
            <OverviewHeading service={service} inlineTitle />
            <div className="mt-8">
              <FeatureList service={service} style={featureStyle} />
            </div>
          </div>
        </div>
      </AnimatedSection>
    );
  }

  if (layout === "triple-image-center") {
    const { overview } = service;
    return (
      <AnimatedSection className={`${bgClass} py-16 lg:py-20`}>
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <p className="mb-3 text-sm font-bold tracking-[0.16em] text-[#22c55e] uppercase">Overview</p>
          <h2 className="text-2xl font-bold leading-tight text-[#0f2744] sm:text-3xl lg:text-[2rem]">
            {overview.title} <span className="text-[#22c55e]">{overview.highlight}</span>
          </h2>
          <div className="mt-10 grid items-start gap-10 lg:grid-cols-[1fr_auto_1fr] lg:gap-8">
            <p className="text-[15px] leading-relaxed text-[#5a6472]">{overview.description}</p>
            <div className="relative mx-auto min-h-[320px] w-full max-w-[280px] overflow-hidden rounded-2xl shadow-md lg:min-h-[400px]">
              <Image src={images[0]} alt="" fill className="object-cover" sizes="280px" />
            </div>
            <div className="lg:pt-2">
              <FeatureList service={service} style={featureStyle} />
            </div>
          </div>
        </div>
      </AnimatedSection>
    );
  }

  const isSingle = layout === "triple-single-image";

  if (isSingle) {
    return (
      <AnimatedSection className={`${bgClass} py-16 lg:py-20`}>
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <OverviewHeading service={service} />
          <div className="mt-10 grid items-start gap-10 lg:grid-cols-[1.05fr_1fr_0.9fr] lg:gap-8">
            <OverviewHeading service={service} descriptionOnly />
            <div className="lg:pt-2">
              <FeatureList service={service} style={featureStyle} />
            </div>
            <div className="relative min-h-[320px] overflow-hidden rounded-2xl border-4 border-white shadow-md lg:min-h-[420px]">
              <Image src={images[0]} alt="" fill className="object-cover" sizes="450px" />
            </div>
          </div>
        </div>
      </AnimatedSection>
    );
  }

  return (
    <AnimatedSection className={`${bgClass} py-16 lg:py-20`}>
      <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 lg:grid-cols-[1.1fr_1fr_0.95fr] lg:gap-8 lg:px-8">
        <div>
          <OverviewHeading service={service} />
        </div>
        <div className="lg:pt-2">
          <FeatureList service={service} style={featureStyle} />
        </div>
        <div className="grid gap-4">
          <div className="relative min-h-[200px] overflow-hidden rounded-2xl border-4 border-white shadow-md sm:min-h-[220px]">
            <Image src={images[0]} alt="" fill className="object-cover" sizes="400px" />
          </div>
          <div className="relative min-h-[200px] overflow-hidden rounded-2xl border-4 border-white shadow-md sm:min-h-[220px]">
            <Image src={images[1]} alt="" fill className="object-cover" sizes="400px" />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
