"use client";

import { useState } from "react";
import { ClipboardCheck } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { CONTACT_TOUCH_ITEMS } from "@/lib/data/contact";
import { getContactIcon } from "@/lib/contact-icons";

const inputClass =
  "w-full rounded border border-[#dde3ea] bg-white px-4 py-3 text-sm text-[#374151] outline-none transition-colors placeholder:text-[#9ca3af] focus:border-[#22c55e]";

function RequiredLabel({ children }: { children: string }) {
  return (
    <label className="mb-1.5 block text-sm font-medium text-[#0f2744]">
      {children.replace(" *", "")}
      <span className="text-red-500"> *</span>
    </label>
  );
}

export function ContactFormSection() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <AnimatedSection className="bg-[#eef1f4] py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-3 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="rounded-xl bg-white p-6 shadow-[0_4px_24px_rgba(15,39,68,0.08)] sm:p-8">
            <p className="mb-1 text-sm font-bold tracking-[0.14em] text-[#22c55e] uppercase">
              Send Us a Message
            </p>
            <p className="mb-6 text-sm text-[#5a6472]">
              Fill out the form and our team will get back to you shortly.
            </p>

            {submitted ? (
              <div className="py-12 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#22c55e]/10">
                  <ClipboardCheck className="h-8 w-8 text-[#22c55e]" />
                </div>
                <h3 className="text-xl font-bold text-[#0f2744]">Message Sent!</h3>
                <p className="mt-2 text-sm text-[#5a6472]">
                  We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <RequiredLabel>Full Name *</RequiredLabel>
                    <input required className={inputClass} placeholder="Full Name" />
                  </div>
                  <div>
                    <RequiredLabel>Company Name *</RequiredLabel>
                    <input required className={inputClass} placeholder="Company Name" />
                  </div>
                  <div>
                    <RequiredLabel>Email Address *</RequiredLabel>
                    <input required type="email" className={inputClass} placeholder="Email Address" />
                  </div>
                  <div>
                    <RequiredLabel>Phone Number *</RequiredLabel>
                    <input required type="tel" className={inputClass} placeholder="Phone Number" />
                  </div>
                </div>
                <div>
                  <RequiredLabel>Subject *</RequiredLabel>
                  <input required className={inputClass} placeholder="Subject" />
                </div>
                <div>
                  <RequiredLabel>Message *</RequiredLabel>
                  <textarea
                    required
                    rows={5}
                    className={inputClass}
                    placeholder="Tell us about your project or requirements..."
                  />
                </div>
                <Button type="submit" icon="arrow" className="mt-2">
                  {submitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>

          <div className="rounded-xl bg-white p-6 shadow-[0_4px_24px_rgba(15,39,68,0.08)] sm:p-8">
            <p className="mb-6 text-sm font-bold tracking-[0.14em] text-[#22c55e] uppercase">
              Get in Touch
            </p>
            <div className="divide-y divide-[#e8ecf0]">
              {CONTACT_TOUCH_ITEMS.map((item) => {
                const Icon = getContactIcon(item.iconName);
                return (
                  <div key={item.title} className="flex gap-4 py-5 first:pt-0 last:pb-0">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[#22c55e]">
                      <Icon className="h-5 w-5 text-[#22c55e]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="mb-1 text-sm font-bold text-[#0f2744]">{item.title}</p>
                      {item.lines.map((line) => (
                        <p key={line} className="text-sm leading-relaxed text-[#5a6472]">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
