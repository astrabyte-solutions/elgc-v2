"use client";

import { FileText, ArrowRight } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { QUALITY_SAFETY_STANDARDS } from "@/lib/data/quality-safety";

function CertificationBadge({ label, code }: { label: string; code: string }) {
  return (
    <div className="mb-4 flex flex-col items-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#0f2744]">
        <span className="text-xs font-bold tracking-tight text-[#0f2744]">{label}</span>
      </div>
      <p className="mt-2 text-[11px] font-bold text-[#0f2744] sm:text-xs">{code}</p>
    </div>
  );
}

export function QualitySafetyStandardsSection() {
  return (
    <AnimatedSection id="certificates" className="bg-[#eef1f4] py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-3 lg:px-8">
        <div className="mb-10 flex items-center justify-center gap-4">
          <div className="hidden h-px flex-1 bg-[#22c55e]/40 sm:block" aria-hidden />
          <p className="shrink-0 text-sm font-bold tracking-[0.14em] text-[#22c55e] uppercase">
            Our Systems &amp; Standards
          </p>
          <div className="hidden h-px flex-1 bg-[#22c55e]/40 sm:block" aria-hidden />
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,300px)_1fr] lg:gap-12 xl:grid-cols-[minmax(0,340px)_1fr]">
          <div className="lg:pt-2">
            <p className="text-sm leading-relaxed text-[#5a6472] sm:text-[15px]">
              We follow internationally recognized standards and company systems to ensure
              consistent delivery of quality and safe solutions.
            </p>
            <div className="mt-6">
              <a
                href="/certificates/ISO-9001-2015-Certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-green px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:scale-[1.02] hover:bg-green-dark"
              >
                Our Policies &amp; Certificates
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <StaggerContainer className="grid gap-4 sm:grid-cols-2">
            {QUALITY_SAFETY_STANDARDS.map((standard) => (
              <StaggerItem key={standard.code}>
                <div className="flex h-full flex-col items-center rounded-lg border border-[#e8ecf0] bg-white px-4 py-6 text-center shadow-[0_2px_12px_rgba(15,39,68,0.05)]">
                  <CertificationBadge label={standard.label} code={standard.code} />
                  <p className="text-xs leading-relaxed text-[#5a6472] sm:text-[13px]">
                    {standard.description}
                  </p>
                  <a
                    href={standard.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#22c55e] transition-colors hover:text-[#16a34a]"
                  >
                    <FileText className="h-3.5 w-3.5" />
                    View Certificate
                  </a>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </AnimatedSection>
  );
}
