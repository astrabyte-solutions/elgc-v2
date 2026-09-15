"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { type Service } from "@/lib/data/services";
import { getServiceIcon } from "@/lib/service-icons";

const GREEN = "#22c55e";
const BLUE = "#2563eb";

interface ServiceShowcaseCardProps {
  service: Service;
  index: number;
}

function DiagonalAccentLine({ isEven, accent }: { isEven: boolean; accent: string }) {
  return (
    <svg
      className="pointer-events-none absolute inset-0 z-10 hidden h-full w-full lg:block"
      preserveAspectRatio="none"
      viewBox="0 0 100 100"
      aria-hidden
    >
      {isEven ? (
        <line
          x1="85"
          y1="0"
          x2="100"
          y2="100"
          stroke={accent}
          strokeWidth="0.45"
          vectorEffect="non-scaling-stroke"
        />
      ) : (
        <line
          x1="15"
          y1="0"
          x2="0"
          y2="100"
          stroke={accent}
          strokeWidth="0.45"
          vectorEffect="non-scaling-stroke"
        />
      )}
    </svg>
  );
}

function CardImagePanel({
  service,
  isEven,
  accent,
}: {
  service: Service;
  isEven: boolean;
  accent: string;
}) {
  return (
    <div
      className={`relative min-h-56 w-full sm:min-h-64 lg:min-h-[300px] ${
        isEven ? "order-1 lg:col-start-1 lg:row-start-1" : "order-2 lg:col-start-2 lg:row-start-1"
      }`}
    >
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 ${
            isEven ? "service-image-clip-right" : "service-image-clip-left"
          }`}
        >
          <Image
            src={service.heroImage}
            alt={service.title}
            fill
            className="object-cover premium-image-zoom"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <DiagonalAccentLine isEven={isEven} accent={accent} />
      </div>
    </div>
  );
}

function CardTextPanel({
  service,
  isEven,
  accent,
  Icon,
}: {
  service: Service;
  isEven: boolean;
  accent: string;
  Icon: ReturnType<typeof getServiceIcon>;
}) {
  return (
    <div
      className={`relative flex flex-col justify-center bg-white px-6 py-8 sm:px-8 ${
        isEven
          ? "order-2 lg:col-start-2 lg:row-start-1 lg:pl-10 lg:pr-10"
          : "order-1 lg:col-start-1 lg:row-start-1 lg:pl-10 lg:pr-8"
      }`}
    >
      <span
        className={`mb-5 block text-[2.75rem] font-bold leading-none sm:text-5xl lg:absolute lg:top-7 ${
          isEven ? "lg:right-10 lg:mb-0 lg:text-right" : "lg:left-10"
        }`}
        style={{ color: accent }}
      >
        {service.number}
      </span>

      <div className={`flex items-start gap-4 lg:mt-12 ${isEven ? "lg:pr-4" : "lg:pl-4"}`}>
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full sm:h-[52px] sm:w-[52px]"
          style={{ backgroundColor: accent }}
        >
          <Icon className="h-6 w-6 text-white sm:h-7 sm:w-7" strokeWidth={1.6} />
        </div>
        <h2 className="min-w-0 flex-1 pt-1 text-xl font-bold leading-snug text-[#0f2744] sm:text-[1.35rem]">
          {service.title}
        </h2>
      </div>

      <p className="mt-4 text-[15px] leading-relaxed text-[#5a6472] sm:mt-5">
        {service.description}
      </p>

      <Link
        href={service.href}
        className="group mt-6 inline-flex items-center gap-2 text-sm font-bold tracking-[0.12em] uppercase transition-all hover:gap-3"
        style={{ color: accent }}
      >
        View Service
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

export function ServiceShowcaseCard({ service, index }: ServiceShowcaseCardProps) {
  const isEven = index % 2 === 1;
  const accent = isEven ? BLUE : GREEN;
  const Icon = getServiceIcon(service.iconName);

  return (
    <AnimatedSection delay={index * 0.05} variant={isEven ? "fadeLeft" : "fadeRight"}>
      <motion.article
        className="premium-card group grid min-h-[300px] grid-cols-1 overflow-hidden rounded-xl bg-white shadow-[0_4px_28px_rgba(15,39,68,0.09)] lg:grid-cols-2"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
      >
        <CardTextPanel service={service} isEven={isEven} accent={accent} Icon={Icon} />
        <CardImagePanel service={service} isEven={isEven} accent={accent} />
      </motion.article>
    </AnimatedSection>
  );
}
