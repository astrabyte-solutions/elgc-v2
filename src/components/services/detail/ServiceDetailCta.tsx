"use client";

import Image from "next/image";
import { DraftingCompass, Shield, Zap, Leaf, Construction } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CtaActions, ctaButtonClass } from "@/components/ui/CtaActions";
import { type Service } from "@/lib/data/services";
import { getServiceIcon } from "@/lib/service-icons";
import { IMAGES } from "@/lib/images";

interface ServiceDetailCtaProps {
  service: Service;
}

function CtaIcon({ service }: { service: Service }) {
  const iconType = service.ctaIcon ?? "service";
  const className = "h-8 w-8 text-white sm:h-9 sm:w-9";

  if (iconType === "shield") return <Shield className={className} strokeWidth={1.5} />;
  if (iconType === "zap") return <Zap className={className} strokeWidth={1.5} />;
  if (iconType === "leaf") return <Leaf className={className} strokeWidth={1.5} />;
  if (iconType === "crane") return <Construction className={className} strokeWidth={1.5} />;

  const Icon = getServiceIcon(service.iconName);
  return <Icon className={className} strokeWidth={1.5} />;
}

export function ServiceDetailCta({ service }: ServiceDetailCtaProps) {
  const titleParts = service.ctaTitle.split(service.ctaHighlight);
  const beforeHighlight = titleParts[0];
  const afterHighlight = titleParts[1] ?? "";
  const ctaBg = service.ctaImage ?? IMAGES.hero.proposal;

  return (
    <section className="relative overflow-hidden bg-[#0a1628] py-12 lg:py-14">
      <Image src={ctaBg} alt="" fill className="object-cover object-left opacity-25" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/80 to-[#0a1628]/60" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage: "radial-gradient(circle, #93c5fd 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
        aria-hidden
      />

      <div className="relative mx-auto flex max-w-7xl flex-col items-stretch justify-between gap-6 px-4 sm:gap-8 md:flex-row md:items-center lg:px-8">
        <div className="flex min-w-0 items-start gap-4 sm:items-center sm:gap-6">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#22c55e] sm:h-[72px] sm:w-[72px]">
            <CtaIcon service={service} />
          </div>
          <div className="min-w-0">
            <h2 className="text-xl font-bold leading-snug text-white sm:text-2xl md:text-[1.65rem]">
              {beforeHighlight}
              <span className="text-[#22c55e]">{service.ctaHighlight}</span>
              {afterHighlight}
            </h2>
            {service.ctaSubtitle && (
              <p className="mt-2 max-w-xl text-sm text-white/75 sm:text-[15px]">{service.ctaSubtitle}</p>
            )}
          </div>
        </div>

        <CtaActions className="md:justify-end">
          <Button href="/request-proposal" className={`${ctaButtonClass} text-xs sm:text-sm`}>
            Discuss Your Project
          </Button>
          <Button href="#" variant="outline-white" icon="download" className={`${ctaButtonClass} text-xs sm:text-sm`}>
            Download Company Profile
          </Button>
        </CtaActions>
      </div>
    </section>
  );
}
