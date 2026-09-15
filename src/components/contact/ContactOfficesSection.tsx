"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CONTACT_OFFICES } from "@/lib/data/contact";
import { COMPANY } from "@/lib/data/company";
import { getContactIcon } from "@/lib/contact-icons";

function ContactGoogleMap() {
  return (
    <div className="relative h-full min-h-[320px] overflow-hidden rounded-xl border border-[#e8ecf0] sm:min-h-[380px]">
      <iframe
        src={COMPANY.mapsEmbedUrl}
        title="Emirates Link General Contracting LLC - ELGC office location"
        className="absolute inset-0 h-full w-full"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export function ContactOfficesSection() {
  return (
    <AnimatedSection className="bg-[#eef1f4] pb-14 lg:pb-20">
      <div className="mx-auto max-w-7xl px-3 lg:px-8">
        <div className="rounded-xl bg-white p-6 shadow-[0_4px_24px_rgba(15,39,68,0.08)] sm:p-8">
          <p className="mb-8 text-sm font-bold tracking-[0.14em] text-[#22c55e] uppercase">
            Our Offices
          </p>

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-8">
              {CONTACT_OFFICES.map((office) => {
                const Icon = getContactIcon("Building2");
                return (
                  <div key={office.name} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#22c55e]">
                      <Icon className="h-6 w-6 text-white" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-base font-bold text-[#0f2744]">{office.name}</p>
                      <p className="text-base font-bold text-[#0f2744]">{office.city}</p>
                      <div className="mt-1 space-y-0.5">
                        {office.lines.map((line) => (
                          <p key={line} className="text-sm leading-relaxed text-[#5a6472]">
                            {line}
                          </p>
                        ))}
                      </div>
                      <a
                        href={COMPANY.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-block text-sm font-semibold text-[#22c55e] transition-colors hover:text-[#16a34a]"
                      >
                        Get Directions →
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            <ContactGoogleMap />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
