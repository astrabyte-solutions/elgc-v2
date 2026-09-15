import Link from "next/link";
import { getAdminUrl } from "@/lib/admin/config";

export function AdminPageHeader({
  eyebrow,
  title,
  subtitle,
  action,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  action?: { label: string; href: string };
}) {
  return (
    <div className="mb-8 flex flex-wrap items-start justify-between gap-4 border-b border-[#e8ecf0] px-8 py-8">
      <div>
        {eyebrow && (
          <p className="mb-2 text-xs font-bold tracking-[0.14em] text-[#94a3b8] uppercase">{eyebrow}</p>
        )}
        <h1 className="text-2xl font-bold text-[#0f2744]">{title}</h1>
        {subtitle && <p className="mt-1 text-sm text-[#64748b]">{subtitle}</p>}
      </div>
      {action && (
        <Link
          href={action.href}
          className="inline-flex items-center rounded-lg bg-[#22c55e] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#16a34a]"
        >
          + {action.label}
        </Link>
      )}
    </div>
  );
}

export function AdminStatCard({
  label,
  value,
  color,
}: {
  label: string;
  value: number | string;
  color: string;
}) {
  return (
    <div className="admin-card">
      <p className="text-xs font-bold tracking-[0.12em] text-[#94a3b8] uppercase">{label}</p>
      <p className={`mt-2 text-3xl font-bold ${color}`}>{value}</p>
    </div>
  );
}

export function getAdminActionUrl(segment: string) {
  return getAdminUrl(segment);
}
