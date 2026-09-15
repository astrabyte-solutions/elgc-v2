"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { CheckCircle2, ChevronLeft, ChevronRight, Headset, Mail, Phone } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { COMPANY } from "@/lib/constants";
import {
  SUPPLIER_CERTIFICATE_TYPES,
  SUPPLIER_CODE_OF_CONDUCT_URL,
  SUPPLIER_COUNTRIES,
  SUPPLIER_CURRENCIES,
  SUPPLIER_HSE_REQUIREMENTS_URL,
  SUPPLIER_NEXT_STEPS,
  SUPPLIER_WIZARD_STEPS,
} from "@/lib/data/supplier-registration";
import { SupplierStepProgress } from "@/components/supplier-registration/SupplierStepProgress";
import {
  SupplierExternalLink,
  SupplierField,
  SupplierFileUpload,
  SupplierSection,
  SupplierYesNo,
  supplierInputClass,
  supplierSelectClass,
} from "@/components/supplier-registration/SupplierFormUi";

const phoneHint =
  "Follow format: +[country code]-[area code]-[phone number]. e.g. +971-2-1234567";

export function SupplierRegistrationForm() {
  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const isLastStep = step === SUPPLIER_WIZARD_STEPS.length - 1;

  function validateCurrentStep() {
    const container = stepRefs.current[step];
    if (!container) return true;
    const fields = container.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>(
      "input, select, textarea",
    );
    for (const field of fields) {
      if (!field.checkValidity()) {
        field.reportValidity();
        return false;
      }
    }
    return true;
  }

  function goNext() {
    if (!validateCurrentStep()) return;
    setStep((s) => Math.min(s + 1, SUPPLIER_WIZARD_STEPS.length - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function goBack() {
    setStep((s) => Math.max(s - 1, 0));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateCurrentStep()) return;
    setSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      if (typeof value === "string") data[key] = value;
    });

    try {
      const res = await fetch("/api/public/supplier-registration", {
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
                <h2 className="text-2xl font-bold text-[#0f2744]">Registration Submitted</h2>
                <p className="mt-2 text-sm text-[#5a6472]">
                  Thank you. Our procurement team will review your application and contact you
                  regarding vendor onboarding.
                </p>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-6 rounded-xl bg-white p-6 shadow-[0_4px_24px_rgba(15,39,68,0.08)] sm:p-8"
              >
                <div className="rounded-lg border border-[#dbeafe] bg-[#eff6ff] px-4 py-3 text-sm text-[#1e3a5f]">
                  <p className="font-semibold">Supplier Registration</p>
                  <p className="mt-1 text-xs leading-relaxed text-[#5a6472]">
                    Complete each step below. Fields marked with{" "}
                    <span className="text-[#22c55e]">*</span> are mandatory.
                  </p>
                </div>

                <SupplierStepProgress
                  steps={[...SUPPLIER_WIZARD_STEPS]}
                  currentStep={step}
                  onStepClick={(index) => {
                    if (index < step) setStep(index);
                  }}
                />

                {step === 0 && (
                <div ref={(el) => { stepRefs.current[0] = el; }}>
                <SupplierSection number="2" title="Tax Registration">
                  <SupplierField label="Tax Registration Number (TRN)" required>
                    <input
                      required
                      name="trn"
                      className={supplierInputClass}
                      placeholder="e.g. 100049778200003"
                    />
                  </SupplierField>
                </SupplierSection>
                </div>
                )}

                {step === 1 && (
                <div ref={(el) => { stepRefs.current[1] = el; }}>
                <SupplierSection number="3" title="General Information">
                  <SupplierField
                    label="3.1 Name of the organization (as per the trade license)"
                    required
                    hint="If the name is more than 35 characters, use the additional field below for the remaining part."
                  >
                    <input
                      required
                      name="organizationName"
                      maxLength={35}
                      className={supplierInputClass}
                      placeholder="Organization name (max 35 characters)"
                    />
                  </SupplierField>

                  <SupplierField label="3.2 Additional box for Name of the organization">
                    <input
                      name="organizationNameAdditional"
                      className={supplierInputClass}
                      placeholder="Remaining part of organization name (if applicable)"
                    />
                  </SupplierField>

                  <SupplierField
                    label="3.3 Is the company an associate of an existing supplier to ELGC?"
                    required
                  >
                    <SupplierYesNo name="existingSupplierAssociate" required />
                  </SupplierField>

                  <SupplierField label="3.5 Suppliers' Code of Conduct" required>
                    <p className="mb-3 text-xs text-[#5a6472]">
                      Please read the{" "}
                      <SupplierExternalLink href={SUPPLIER_CODE_OF_CONDUCT_URL}>
                        Suppliers&apos; Code of Conduct
                      </SupplierExternalLink>{" "}
                      and confirm your acceptance.
                    </p>
                    <label className="flex items-start gap-2 text-sm text-[#374151]">
                      <input type="checkbox" required className="mt-1 accent-[#22c55e]" />
                      I have read and agree with the Suppliers&apos; Code of Conduct
                    </label>
                  </SupplierField>

                  <SupplierField label="3.7 Are you a Sheikh Khalifa Funded Company?" required>
                    <SupplierYesNo name="sheikhKhalifaFunded" required />
                  </SupplierField>
                </SupplierSection>
                </div>
                )}

                {step === 2 && (
                <div ref={(el) => { stepRefs.current[2] = el; }}>
                <SupplierSection number="4" title="Company Address">
                  <p className="-mt-2 text-xs text-[#5a6472]">
                    Address of the entity doing business with ELGC
                  </p>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <SupplierField label="4.1 Address Line 1 / Street" required>
                      <input required name="addressLine1" className={supplierInputClass} />
                    </SupplierField>
                    <SupplierField label="4.2 Address Line 2">
                      <input name="addressLine2" className={supplierInputClass} />
                    </SupplierField>
                    <SupplierField label="4.3 Postal Code" required>
                      <input required name="postalCode" className={supplierInputClass} />
                    </SupplierField>
                    <SupplierField label="4.4 City" required>
                      <input required name="city" className={supplierInputClass} />
                    </SupplierField>
                    <SupplierField label="4.5 State / Emirate / Province (Region)" required>
                      <input required name="state" className={supplierInputClass} />
                    </SupplierField>
                    <SupplierField label="4.6 Country" required>
                      <select required name="country" className={supplierSelectClass} defaultValue="">
                        <option value="" disabled>
                          Select country
                        </option>
                        {SUPPLIER_COUNTRIES.map((country) => (
                          <option key={country} value={country}>
                            {country}
                          </option>
                        ))}
                      </select>
                    </SupplierField>
                    <SupplierField label="4.7 Corporate Telephone" required hint={phoneHint}>
                      <input required name="corporatePhone" type="tel" className={supplierInputClass} />
                    </SupplierField>
                    <SupplierField label="4.8 Contact Phone 2 (Mobile)" hint={phoneHint}>
                      <input name="mobilePhone" type="tel" className={supplierInputClass} />
                    </SupplierField>
                    <SupplierField label="4.9 Corporate Fax">
                      <input name="corporateFax" type="tel" className={supplierInputClass} />
                    </SupplierField>
                    <SupplierField label="4.10 Sales Person Name" required>
                      <input required name="salesPersonName" className={supplierInputClass} />
                    </SupplierField>
                    <SupplierField label="4.11 Sales Person Phone" required hint={phoneHint}>
                      <input required name="salesPersonPhone" type="tel" className={supplierInputClass} />
                    </SupplierField>
                    <div className="sm:col-span-2">
                      <SupplierField label="4.12 Sales Person Email Address" required>
                        <input
                          required
                          name="salesPersonEmail"
                          type="email"
                          className={supplierInputClass}
                        />
                      </SupplierField>
                    </div>
                  </div>
                </SupplierSection>
                </div>
                )}

                {step === 3 && (
                <div ref={(el) => { stepRefs.current[3] = el; }}>
                <SupplierSection number="7" title="Financial & Bank Information">
                  <SupplierField label="7.1.3 Year 2 — Company turnover (supported by documentary evidence)" required>
                    <input
                      required
                      name="year2Turnover"
                      className={supplierInputClass}
                      placeholder="e.g. AED 4 million"
                    />
                  </SupplierField>
                  <SupplierFileUpload label="7.1.2 Upload supporting document (Year 2 turnover)" required />
                  <SupplierFileUpload label="7.1.4 Upload supporting document (additional evidence)" />

                  <SupplierField label="7.2 Number of bank accounts you wish to register" required>
                    <select required name="bankAccountCount" className={supplierSelectClass} defaultValue="1">
                      {[1, 2, 3, 4, 5].map((n) => (
                        <option key={n} value={n}>
                          {n}
                        </option>
                      ))}
                    </select>
                  </SupplierField>

                  <div className="rounded-lg border border-[#e8ecf0] bg-white px-4 py-3 text-xs text-[#5a6472]">
                    <p className="font-semibold text-[#0f2744]">7.3 Bank account letter</p>
                    <p className="mt-1">
                      Please provide bank account information on company letterhead, signed by an
                      authorized person and stamped. Upload the signed letter below.
                    </p>
                  </div>
                  <SupplierFileUpload label="Upload signed bank letter (company letterhead)" required />

                  <p className="text-sm font-bold text-[#0f2744]">7.4 Bank Information #1</p>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <SupplierField label="7.4.1 Bank ID">
                      <input name="bankId" className={supplierInputClass} placeholder="e.g. 0001" />
                    </SupplierField>
                    <SupplierField label="7.4.2 Bank Name" required>
                      <input required name="bankName" className={supplierInputClass} />
                    </SupplierField>
                    <SupplierField label="7.4.4 Bank not listed?" required>
                      <SupplierYesNo name="bankNotListed" required />
                    </SupplierField>
                    <SupplierField label="7.4.6 Branch Address" required>
                      <input required name="branchAddress" className={supplierInputClass} />
                    </SupplierField>
                    <SupplierField label="7.4.7 Bank Country" required>
                      <select required name="bankCountry" className={supplierSelectClass} defaultValue="">
                        <option value="" disabled>
                          Select country
                        </option>
                        {SUPPLIER_COUNTRIES.map((country) => (
                          <option key={country} value={country}>
                            {country}
                          </option>
                        ))}
                      </select>
                    </SupplierField>
                    <SupplierField label="7.4.9 Bank Account Number" required>
                      <input required name="bankAccountNumber" className={supplierInputClass} />
                    </SupplierField>
                    <SupplierField label="7.4.10 IBAN" required>
                      <input required name="iban" className={supplierInputClass} />
                    </SupplierField>
                    <SupplierField
                      label="7.4.11 Name of Beneficiary (as per trade license)"
                      required
                    >
                      <input required name="beneficiaryName" className={supplierInputClass} />
                    </SupplierField>
                    <SupplierField label="7.4.12 Currency" required>
                      <select required name="currency" className={supplierSelectClass} defaultValue="">
                        <option value="" disabled>
                          Select currency
                        </option>
                        {SUPPLIER_CURRENCIES.map((currency) => (
                          <option key={currency} value={currency}>
                            {currency}
                          </option>
                        ))}
                      </select>
                    </SupplierField>
                    <div className="sm:col-span-2">
                      <SupplierField label="7.4.13 Correspondence Bank Details / Chips code / ACH / EFT / ABA / FED">
                        <input name="correspondenceBank" className={supplierInputClass} />
                      </SupplierField>
                    </div>
                  </div>
                </SupplierSection>
                </div>
                )}

                {step === 4 && (
                <div ref={(el) => { stepRefs.current[4] = el; }}>
                <SupplierSection number="8" title="Company Documents">
                  <p className="text-sm font-bold text-[#0f2744]">8.1 Trade License Details</p>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <SupplierField label="8.1.1 Certificate Type">
                      <input
                        readOnly
                        value={SUPPLIER_CERTIFICATE_TYPES.tradeLicense}
                        className={`${supplierInputClass} bg-[#f8fafc]`}
                      />
                    </SupplierField>
                    <SupplierField label="8.1.2 Trade License Number" required>
                      <input required name="tradeLicenseNumber" className={supplierInputClass} />
                    </SupplierField>
                    <SupplierField label="8.1.3 Expiration Date" required>
                      <input required name="tradeLicenseExpiry" type="date" className={supplierInputClass} />
                    </SupplierField>
                  </div>
                  <SupplierFileUpload label="8.1.4 Certificate Copy (Trade License)" required />

                  <p className="text-sm font-bold text-[#0f2744]">8.2 VAT Registration Details</p>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <SupplierField label="8.2.1 Certificate Type">
                      <input
                        readOnly
                        value={SUPPLIER_CERTIFICATE_TYPES.vat}
                        className={`${supplierInputClass} bg-[#f8fafc]`}
                      />
                    </SupplierField>
                    <SupplierField label="8.2.2 VAT Registration Number" required>
                      <input required name="vatNumber" className={supplierInputClass} />
                    </SupplierField>
                  </div>
                  <SupplierFileUpload label="8.2.3 VAT Registration Document Copy" required />

                  <SupplierField
                    label="8.4.1 Does your company have a Business Continuity Management (BCM) Plan / Policy?"
                    required
                  >
                    <SupplierYesNo name="bcmPlan" required />
                  </SupplierField>
                </SupplierSection>
                </div>
                )}

                {step === 5 && (
                <div ref={(el) => { stepRefs.current[5] = el; }}>
                <SupplierSection number="10" title="Industry Information">
                  <SupplierField label="Industry sectors and capabilities" required>
                    <textarea
                      required
                      name="industryInformation"
                      rows={4}
                      className={supplierInputClass}
                      placeholder="Describe your industry sectors, products, and services..."
                    />
                  </SupplierField>
                </SupplierSection>
                </div>
                )}

                {step === 6 && (
                <div ref={(el) => { stepRefs.current[6] = el; }}>
                <SupplierSection number="11" title="Customer Information">
                  <SupplierField label="Key customers and project references">
                    <textarea
                      name="customerInformation"
                      rows={4}
                      className={supplierInputClass}
                      placeholder="List major customers, projects, and regions served..."
                    />
                  </SupplierField>
                </SupplierSection>
                </div>
                )}

                {step === 7 && (
                <div ref={(el) => { stepRefs.current[7] = el; }}>
                <SupplierSection number="12.1" title="Category Specific Information">
                  <SupplierField label="12.1.1 Comments on supplier capability">
                    <textarea
                      name="supplierCapability"
                      rows={3}
                      className={supplierInputClass}
                      placeholder="Describe your capabilities relevant to ELGC requirements..."
                    />
                  </SupplierField>

                  <SupplierFileUpload label="12.1.5 Lost Time Injury (LTI) records for last 3 years" />
                  <SupplierFileUpload label="12.1.6 QHSE policy & person in charge for QHSE implementation" required />

                  <SupplierField label="12.1.7 Will the scope be subcontracted?" required>
                    <SupplierYesNo name="subcontracted" required />
                  </SupplierField>
                  <SupplierField label="12.1.11 Do you have a qualified safety officer?" required>
                    <SupplierYesNo name="qualifiedSafetyOfficer" required />
                  </SupplierField>
                  <SupplierField label="12.1.12 Number of certified safety officers?">
                    <input
                      name="safetyOfficerCount"
                      type="number"
                      min={0}
                      className={supplierInputClass}
                    />
                  </SupplierField>
                  <SupplierFileUpload label="12.1.13 Upload safety officer certifications (ZIP)" accept=".zip" />
                  <SupplierField label="12.1.14 Do you have Health & Safety related certificates?" required>
                    <SupplierYesNo name="hsCertificates" required />
                  </SupplierField>
                  <SupplierField label="12.1.15 Do you have ISO 9001 certificate?" required>
                    <SupplierYesNo name="iso9001" required />
                  </SupplierField>
                  <SupplierField label="12.1.19 Do you have ISO 14001 certificate?" required>
                    <SupplierYesNo name="iso14001" required />
                  </SupplierField>
                  <SupplierField label="12.1.20 Do you have Power of Attorney Certificate?" required>
                    <SupplierYesNo name="hasPoa" required />
                  </SupplierField>

                  <SupplierField label="12.1.22 HSE Requirements acknowledgment" required>
                    <p className="mb-3 text-xs text-[#5a6472]">
                      Acknowledge that your company will abide by HSE requirements when working on
                      ELGC projects.{" "}
                      <SupplierExternalLink href={SUPPLIER_HSE_REQUIREMENTS_URL}>
                        View HSE Requirements
                      </SupplierExternalLink>
                    </p>
                    <label className="flex items-start gap-2 text-sm text-[#374151]">
                      <input type="checkbox" required className="mt-1 accent-[#22c55e]" />
                      Yes, we will abide by the HSE requirements
                    </label>
                  </SupplierField>

                  <SupplierField label="12.1.23 Safety Commitments acknowledgment" required>
                    <label className="flex items-start gap-2 text-sm text-[#374151]">
                      <input type="checkbox" required className="mt-1 accent-[#22c55e]" />
                      Yes, we will abide by the safety commitments
                    </label>
                  </SupplierField>

                  <SupplierFileUpload label="12.1.24 Safety Awards (past 3 years)" />
                  <SupplierField label="12.1.25 HSE-related fines or warnings from government agencies?" required>
                    <SupplierYesNo name="hseFines" required />
                  </SupplierField>
                  <SupplierField label="If yes, attach details">
                    <textarea name="hseFinesDetails" rows={2} className={supplierInputClass} />
                  </SupplierField>

                  <SupplierField
                    label="12.1.27 Company HSE Management System manual (or operations manual with integrated HSE)?"
                    required
                  >
                    <SupplierYesNo name="hseManual" required />
                  </SupplierField>
                  <SupplierFileUpload label="12.1.28 Attach HSE Management System evidence" />

                  <SupplierField label="12.1.29 Procedure for HSE Auditing and Inspection?" required>
                    <SupplierYesNo name="hseAuditing" required />
                  </SupplierField>
                  <SupplierFileUpload label="12.1.30 Attach auditing procedure evidence" />

                  <SupplierField
                    label="12.1.31 Skills and competency training/development system (Technical and HSE)?"
                    required
                  >
                    <SupplierYesNo name="competencyTraining" required />
                  </SupplierField>
                  <SupplierFileUpload label="12.1.32 Attach competency training evidence" />

                  <SupplierField
                    label="12.1.33 How do you ensure plant and equipment is certified, controlled and maintained in safe condition?"
                    required
                  >
                    <textarea
                      required
                      name="equipmentCertification"
                      rows={3}
                      className={supplierInputClass}
                    />
                  </SupplierField>

                  <SupplierField label="12.1.34 Does your company have an In Country Value (ICV) Certificate?">
                    <SupplierYesNo name="icvCertificate" />
                  </SupplierField>
                  <SupplierFileUpload label="Upload ICV Certificate (if applicable)" />
                </SupplierSection>
                </div>
                )}

                {step === 8 && (
                <div ref={(el) => { stepRefs.current[8] = el; }}>
                <SupplierSection number="12.2" title="Certificates">
                  <p className="text-sm font-bold text-[#0f2744]">12.2.1 Power of Attorney</p>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <SupplierField label="12.2.1.1 Certificate Type">
                      <input
                        readOnly
                        value={SUPPLIER_CERTIFICATE_TYPES.poa}
                        className={`${supplierInputClass} bg-[#f8fafc]`}
                      />
                    </SupplierField>
                    <SupplierField label="12.2.1.2 Issuing Authority">
                      <input name="poaAuthority" className={supplierInputClass} />
                    </SupplierField>
                    <SupplierField label="12.2.1.3 Expiration Date">
                      <input name="poaExpiry" type="date" className={supplierInputClass} />
                    </SupplierField>
                  </div>
                  <SupplierFileUpload label="12.2.1.4 Certificate Copy (Power of Attorney)" />

                  <p className="text-sm font-bold text-[#0f2744]">12.2.2 Health and Safety</p>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <SupplierField label="12.2.2.1 Certificate Type">
                      <input
                        readOnly
                        value={SUPPLIER_CERTIFICATE_TYPES.healthSafety}
                        className={`${supplierInputClass} bg-[#f8fafc]`}
                      />
                    </SupplierField>
                    <SupplierField label="12.2.2.2 Accreditation Body">
                      <input name="hsAccreditation" className={supplierInputClass} />
                    </SupplierField>
                    <SupplierField label="12.2.2.3 Expiration Date">
                      <input name="hsExpiry" type="date" className={supplierInputClass} />
                    </SupplierField>
                  </div>
                  <SupplierFileUpload label="12.2.2.4 Certificate Copy (Health & Safety)" />

                  <p className="text-sm font-bold text-[#0f2744]">12.2.3 Quality Management</p>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <SupplierField label="12.2.3.1 Certificate Type">
                      <input
                        readOnly
                        value={SUPPLIER_CERTIFICATE_TYPES.quality}
                        className={`${supplierInputClass} bg-[#f8fafc]`}
                      />
                    </SupplierField>
                    <SupplierField label="12.2.3.2 Accreditation Body">
                      <input name="qualityAccreditation" className={supplierInputClass} />
                    </SupplierField>
                    <SupplierField label="12.2.3.3 Expiration Date">
                      <input name="qualityExpiry" type="date" className={supplierInputClass} />
                    </SupplierField>
                  </div>
                  <SupplierFileUpload label="12.2.3.4 Certificate Copy (ISO 9001)" />
                </SupplierSection>
                </div>
                )}

                {isLastStep && (
                <p className="text-xs text-[#5a6472]">
                  By submitting this form, you confirm that all information provided is accurate and
                  agree to our{" "}
                  <Link href="#" className="text-[#2563eb] hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
                )}

                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#e8ecf0] pt-6">
                  <button
                    type="button"
                    onClick={goBack}
                    disabled={step === 0}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[#dde3ea] px-4 py-2.5 text-sm font-medium text-[#64748b] transition-colors hover:bg-[#f8fafc] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Back
                  </button>

                  {isLastStep ? (
                    <Button type="submit" icon="arrow">
                      {submitting ? "Submitting..." : "Submit Supplier Registration"}
                    </Button>
                  ) : (
                    <button
                      type="button"
                      onClick={goNext}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-[#22c55e] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#16a34a]"
                    >
                      Next
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </form>
            )}
          </div>

          <div className="space-y-6">
            <div className="rounded-xl bg-[#f4f6f8] p-6">
              <p className="mb-5 text-sm font-bold tracking-[0.14em] text-[#22c55e] uppercase">
                Registration Process
              </p>
              <div className="space-y-5">
                {SUPPLIER_NEXT_STEPS.map((step, index) => (
                  <div key={step.title} className="flex gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#22c55e]/10 text-sm font-bold text-[#16a34a]">
                      {index + 1}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-[#0f2744]">{step.title}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-[#5a6472]">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl bg-[#0a1628] p-6 text-white">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/20">
                <Headset className="h-6 w-6 text-white" strokeWidth={1.5} />
              </div>
              <p className="mb-1 text-sm font-bold tracking-[0.14em] uppercase">Procurement Support</p>
              <p className="mb-5 text-sm text-white/70">
                Questions about supplier registration or vendor onboarding?
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
