import Link from "next/link";
import { Upload } from "lucide-react";

export const supplierInputClass =
  "w-full rounded border border-[#dde3ea] bg-white px-4 py-3 text-sm text-[#374151] outline-none transition-colors placeholder:text-[#9ca3af] focus:border-[#22c55e]";

export const supplierSelectClass = `${supplierInputClass} appearance-none`;

export function SupplierSection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-[#e8ecf0] bg-[#fafbfc] p-5 sm:p-6">
      <p className="mb-1 text-xs font-bold tracking-[0.14em] text-[#22c55e] uppercase">
        Section {number}
      </p>
      <h3 className="mb-5 text-lg font-bold text-[#0f2744]">{title}</h3>
      <div className="space-y-5">{children}</div>
    </div>
  );
}

export function SupplierField({
  label,
  required,
  hint,
  children,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-[#0f2744]">
        {label}
        {required && <span className="text-[#22c55e]"> *</span>}
      </label>
      {hint && <p className="mb-2 text-xs leading-relaxed text-[#5a6472]">{hint}</p>}
      {children}
    </div>
  );
}

export function SupplierYesNo({ name, required }: { name: string; required?: boolean }) {
  return (
    <div className="flex flex-wrap gap-5">
      <label className="flex items-center gap-2 text-sm text-[#374151]">
        <input type="radio" name={name} value="yes" required={required} className="accent-[#22c55e]" />
        Yes
      </label>
      <label className="flex items-center gap-2 text-sm text-[#374151]">
        <input type="radio" name={name} value="no" required={required} className="accent-[#22c55e]" />
        No
      </label>
    </div>
  );
}

export function SupplierFileUpload({
  label,
  required,
  accept = ".pdf,.doc,.docx,.jpg,.jpeg,.png,.zip",
}: {
  label?: string;
  required?: boolean;
  accept?: string;
}) {
  return (
    <SupplierField label={label ?? "Upload supporting document"} required={required}>
      <div className="rounded-lg border-2 border-dashed border-[#dde3ea] bg-white px-4 py-6 text-center">
        <Upload className="mx-auto mb-2 h-8 w-8 text-[#9ca3af]" strokeWidth={1.5} />
        <label className="cursor-pointer text-sm text-[#5a6472]">
          <span className="font-semibold text-[#2563eb]">Browse files</span>
          <input type="file" className="sr-only" required={required} accept={accept} />
        </label>
        <p className="mt-1 text-xs text-[#9ca3af]">PDF, DOC, JPG, PNG, ZIP — Max 10MB</p>
      </div>
    </SupplierField>
  );
}

export function SupplierExternalLink({ href, children }: { href: string; children: string }) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" className="text-[#2563eb] hover:underline">
      {children}
    </Link>
  );
}
