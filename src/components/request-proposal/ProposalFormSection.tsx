"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, Headset, Phone, Mail, Upload } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { COMPANY } from "@/lib/constants";
import {
  PROPOSAL_CONTACT_METHODS,
  PROPOSAL_INDUSTRIES,
  PROPOSAL_LOCATIONS,
  PROPOSAL_NEXT_STEPS,
  PROPOSAL_SERVICE_TYPES,
  PROPOSAL_TIMELINES,
  PROPOSAL_VALUE_RANGES,
  PROPOSAL_WHY_CHOOSE,
} from "@/lib/data/request-proposal";
import { getProposalIcon } from "@/lib/proposal-icons";

const inputClass =
  "w-full rounded border border-[#dde3ea] bg-white px-4 py-3 text-sm text-[#374151] outline-none transition-colors placeholder:text-[#9ca3af] focus:border-[#22c55e]";

const selectClass = `${inputClass} appearance-none`;

function RequiredLabel({ children }: { children: string }) {
  const label = children.replace(" *", "");
  const required = children.includes("*");
  return (
    <label className="mb-1.5 block text-sm font-medium text-[#0f2744]">
      {label}
      {required && <span className="text-[#22c55e]"> *</span>}
    </label>
  );
}

export function ProposalFormSection() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [otherService, setOtherService] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data: Record<string, string | string[]> = {};

    formData.forEach((value, key) => {
      const str = String(value);
      if (data[key]) {
        const existing = data[key];
        data[key] = Array.isArray(existing) ? [...existing, str] : [existing, str];
      } else {
        data[key] = str;
      }
    });

    try {
      const res = await fetch("/api/public/quote-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      alert("Submission failed. Please try again or contact us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AnimatedSection className="bg-[#eef1f4] py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-3 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="rounded-xl bg-white p-12 text-center shadow-[0_4px_24px_rgba(15,39,68,0.08)]">
                <CheckCircle2 className="mx-auto mb-4 h-16 w-16 text-[#22c55e]" />
                <h2 className="text-2xl font-bold text-[#0f2744]">Request Submitted!</h2>
                <p className="mt-2 text-sm text-[#5a6472]">
                  Our team will review your requirements and get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-8 rounded-xl bg-white p-6 shadow-[0_4px_24px_rgba(15,39,68,0.08)] sm:p-8"
              >
                <div>
                  <p className="mb-4 text-sm font-bold tracking-[0.14em] text-[#22c55e] uppercase">
                    Project Information
                  </p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <RequiredLabel>Full Name *</RequiredLabel>
                      <input required name="fullName" className={inputClass} placeholder="Enter your full name" />
                    </div>
                    <div>
                      <RequiredLabel>Company Name *</RequiredLabel>
                      <input required name="companyName" className={inputClass} placeholder="Enter company name" />
                    </div>
                    <div>
                      <RequiredLabel>Email Address *</RequiredLabel>
                      <input
                        required
                        name="email"
                        type="email"
                        className={inputClass}
                        placeholder="Enter email address"
                      />
                    </div>
                    <div>
                      <RequiredLabel>Phone Number *</RequiredLabel>
                      <input
                        required
                        name="phone"
                        type="tel"
                        className={inputClass}
                        placeholder="Enter phone number"
                      />
                    </div>
                    <div>
                      <RequiredLabel>Job Title / Designation</RequiredLabel>
                      <input name="jobTitle" className={inputClass} placeholder="Enter your designation" />
                    </div>
                    <div>
                      <RequiredLabel>Preferred Contact Method</RequiredLabel>
                      <select name="contactMethod" className={selectClass} defaultValue="">
                        <option value="" disabled>
                          Select an option
                        </option>
                        {PROPOSAL_CONTACT_METHODS.map((method) => (
                          <option key={method} value={method}>
                            {method}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="mb-4 text-sm font-bold tracking-[0.14em] text-[#22c55e] uppercase">
                    Project Details
                  </p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <RequiredLabel>Project Title *</RequiredLabel>
                      <input required name="projectTitle" className={inputClass} placeholder="Enter project title" />
                    </div>
                    <div>
                      <RequiredLabel>Project Location *</RequiredLabel>
                      <select required name="projectLocation" className={selectClass} defaultValue="">
                        <option value="" disabled>
                          Select location
                        </option>
                        {PROPOSAL_LOCATIONS.map((location) => (
                          <option key={location} value={location}>
                            {location}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <RequiredLabel>Industry / Sector *</RequiredLabel>
                      <select required name="industry" className={selectClass} defaultValue="">
                        <option value="" disabled>
                          Select industry
                        </option>
                        {PROPOSAL_INDUSTRIES.map((industry) => (
                          <option key={industry} value={industry}>
                            {industry}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <RequiredLabel>Estimated Project Value</RequiredLabel>
                      <select name="projectValue" className={selectClass} defaultValue="">
                        <option value="" disabled>
                          Select range
                        </option>
                        {PROPOSAL_VALUE_RANGES.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="mt-6">
                    <RequiredLabel>Project Type / Services Required *</RequiredLabel>
                    <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {PROPOSAL_SERVICE_TYPES.map((service) => (
                        <label
                          key={service}
                          className="flex items-center gap-2.5 text-sm text-[#374151]"
                        >
                          <input
                            type="checkbox"
                            name="services"
                            value={service}
                            className="h-4 w-4 accent-[#22c55e]"
                          />
                          {service}
                        </label>
                      ))}
                      <label className="flex items-center gap-2.5 text-sm text-[#374151] sm:col-span-2">
                        <input
                          type="checkbox"
                          name="services"
                          value="Other"
                          className="h-4 w-4 accent-[#22c55e]"
                          checked={otherService}
                          onChange={(e) => setOtherService(e.target.checked)}
                        />
                        Other (Please specify)
                        <input
                          type="text"
                          name="otherServiceDetail"
                          disabled={!otherService}
                          className={`${inputClass} ml-2 max-w-[220px] py-2`}
                          placeholder=""
                        />
                      </label>
                    </div>
                  </div>

                  <div className="mt-6">
                    <RequiredLabel>Project Description *</RequiredLabel>
                    <textarea
                      required
                      name="projectDescription"
                      rows={5}
                      className={inputClass}
                      placeholder="Please describe your project scope, objectives, and key requirements..."
                    />
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div>
                      <RequiredLabel>Project Timeline</RequiredLabel>
                      <select name="timeline" className={selectClass} defaultValue="">
                        <option value="" disabled>
                          Select timeline
                        </option>
                        {PROPOSAL_TIMELINES.map((timeline) => (
                          <option key={timeline} value={timeline}>
                            {timeline}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <RequiredLabel>Expected Start Date</RequiredLabel>
                      <input type="date" name="startDate" className={inputClass} />
                    </div>
                  </div>

                  <div className="mt-6">
                    <RequiredLabel>Upload Documents (Optional)</RequiredLabel>
                    <div className="mt-2 rounded-lg border-2 border-dashed border-[#dde3ea] bg-[#fafbfc] px-6 py-10 text-center">
                      <Upload className="mx-auto mb-3 h-9 w-9 text-[#9ca3af]" strokeWidth={1.5} />
                      <p className="text-sm text-[#5a6472]">
                        Drag &amp; drop files here or{" "}
                        <button type="button" className="font-semibold text-[#2563eb]">
                          browse
                        </button>
                      </p>
                      <p className="mt-1 text-xs text-[#9ca3af]">
                        (PDF, DOC, DWG, JPG – Max 10MB each)
                      </p>
                    </div>
                  </div>

                  <p className="mt-6 text-xs text-[#5a6472]">
                    By submitting this form, you agree to our{" "}
                    <Link href="#" className="text-[#2563eb] hover:underline">
                      Privacy Policy
                    </Link>{" "}
                    and{" "}
                    <Link href="#" className="text-[#2563eb] hover:underline">
                      Terms &amp; Conditions
                    </Link>
                    .
                  </p>

                  <div className="mt-6">
                    <Button type="submit" icon="arrow">
                      {submitting ? "Submitting..." : "Submit Request"}
                    </Button>
                  </div>
                </div>
              </form>
            )}
          </div>

          <div className="space-y-6">
            <div className="rounded-xl bg-[#f4f6f8] p-6">
              <p className="mb-5 text-sm font-bold tracking-[0.14em] text-[#22c55e] uppercase">
                What Happens Next?
              </p>
              <div className="space-y-5">
                {PROPOSAL_NEXT_STEPS.map((step) => {
                  const Icon = getProposalIcon(step.iconName);
                  return (
                    <div key={step.title} className="flex gap-3">
                      <Icon className="mt-0.5 h-8 w-8 shrink-0 text-[#22c55e]" strokeWidth={1.4} />
                      <div>
                        <p className="text-sm font-bold text-[#0f2744]">{step.title}</p>
                        <p className="mt-0.5 text-xs leading-relaxed text-[#5a6472] sm:text-[13px]">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-xl bg-[#f4f6f8] p-6">
              <p className="mb-4 text-sm font-bold tracking-[0.14em] text-[#22c55e] uppercase">
                Why Choose ELGC?
              </p>
              <ul className="space-y-3">
                {PROPOSAL_WHY_CHOOSE.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#374151]">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-[#22c55e]"
                      strokeWidth={1.5}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl bg-[#0a1628] p-6 text-white">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/20">
                <Headset className="h-6 w-6 text-white" strokeWidth={1.5} />
              </div>
              <p className="mb-1 text-sm font-bold tracking-[0.14em] uppercase">Need Help?</p>
              <p className="mb-5 text-sm text-white/70">
                Talk to our experts today for quick assistance.
              </p>
              <p className="flex items-center gap-2.5 text-sm">
                <Phone className="h-4 w-4 shrink-0 text-[#22c55e]" />
                <a href={`tel:${COMPANY.phone[0].replace(/\s/g, "")}`} className="hover:text-[#22c55e]">
                  {COMPANY.phone[0]}
                </a>
              </p>
              {COMPANY.email.map((email) => (
                <p key={email} className="mt-2 flex items-center gap-2.5 text-sm">
                  <Mail className="h-4 w-4 shrink-0 text-[#22c55e]" />
                  <a href={`mailto:${email}`} className="hover:text-[#22c55e]">
                    {email}
                  </a>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
