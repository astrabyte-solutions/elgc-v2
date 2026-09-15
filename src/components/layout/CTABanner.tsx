"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CtaActions, ctaButtonClass } from "@/components/ui/CtaActions";
import { easeOutExpo } from "@/lib/motion";

interface CTABannerProps {
  title: ReactNode;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  icon?: ReactNode;
}

export function CTABanner({
  title,
  subtitle,
  primaryLabel = "Request a Proposal",
  primaryHref = "/request-proposal",
  secondaryLabel,
  secondaryHref,
  icon,
}: CTABannerProps) {
  return (
    <AnimatedSection variant="scale" className="relative overflow-hidden bg-navy py-10 sm:py-12 lg:py-14">
      <div className="absolute inset-0 bg-[url('/images/projects/shears/Photo-5.jpg')] bg-cover bg-center opacity-10" />
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: easeOutExpo }}
      />
      <div className="relative mx-auto flex max-w-7xl flex-col items-stretch justify-between gap-6 px-4 sm:gap-8 md:flex-row md:items-center lg:px-8">
        <motion.div
          className="flex min-w-0 items-start gap-4 sm:items-center sm:gap-6"
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: easeOutExpo }}
        >
          {icon && (
            <motion.div
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-green text-white sm:h-16 sm:w-16"
              whileHover={{ scale: 1.08, rotate: 4 }}
              transition={{ duration: 0.25 }}
            >
              {icon}
            </motion.div>
          )}
          <div className="min-w-0">
            <h2 className="text-xl font-bold leading-snug text-white sm:text-2xl md:text-3xl">{title}</h2>
            {subtitle && <p className="mt-2 text-sm text-white/70 sm:text-base">{subtitle}</p>}
          </div>
        </motion.div>
        <motion.div
          className="w-full min-w-0 md:max-w-md lg:max-w-none"
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1, ease: easeOutExpo }}
        >
          <CtaActions className="md:justify-end">
            <Button href={primaryHref} className={`${ctaButtonClass} px-4 text-xs sm:px-6 sm:text-sm`}>
              {primaryLabel}
            </Button>
            {secondaryLabel && secondaryHref && (
              <Button
                href={secondaryHref}
                variant="outline-white"
                icon={secondaryLabel.includes("Download") ? "download" : "arrow"}
                className={`${ctaButtonClass} px-4 text-xs sm:px-6 sm:text-sm`}
              >
                {secondaryLabel}
              </Button>
            )}
          </CtaActions>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
