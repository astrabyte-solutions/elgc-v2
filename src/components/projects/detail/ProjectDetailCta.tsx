"use client";

import { FileSearch } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { CtaActions, ctaButtonClass } from "@/components/ui/CtaActions";

export function ProjectDetailCta() {
  return (
    <section className="overflow-x-hidden bg-[#0a1628] py-10 lg:py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-stretch justify-between gap-6 px-3 sm:gap-8 md:flex-row md:items-center lg:px-8">
        <motion.div
          className="flex min-w-0 items-center gap-4 sm:gap-5"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#22c55e] sm:h-16 sm:w-16">
            <FileSearch className="h-7 w-7 text-white" strokeWidth={1.5} />
          </div>
          <div className="text-left">
            <h2 className="text-xl font-bold text-white sm:text-2xl">
              Have a <span className="text-[#22c55e]">Similar Project</span> in Mind?
            </h2>
            <p className="mt-1.5 text-sm text-white/70">Let&apos;s build something great together.</p>
          </div>
        </motion.div>

        <motion.div
          className="w-full min-w-0 md:max-w-md"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          <CtaActions>
            <Button href="/request-proposal" className={`${ctaButtonClass} text-xs sm:text-sm`}>
              Request a Proposal
            </Button>
            <Button href="/contact" variant="outline-white" className={`${ctaButtonClass} text-xs sm:text-sm`}>
              Contact Our Team
            </Button>
          </CtaActions>
        </motion.div>
      </div>
    </section>
  );
}
