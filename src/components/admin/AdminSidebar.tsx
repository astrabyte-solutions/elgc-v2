"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  FolderKanban,
  ClipboardList,
  MessageSquareQuote,
  Settings,
  LogOut,
} from "lucide-react";
import { getAdminUrl } from "@/lib/admin/config";
import { Logo } from "@/components/ui/Logo";

const navItems = [
  { href: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "blogs", label: "Blogs", icon: FileText },
  { href: "projects", label: "Projects", icon: FolderKanban },
  { href: "submissions/suppliers", label: "Supplier Registrations", icon: ClipboardList },
  { href: "submissions/quotes", label: "Quote Requests", icon: MessageSquareQuote },
  { href: "settings", label: "Settings", icon: Settings },
];

function isNavActive(pathname: string, href: string) {
  const url = getAdminUrl(href);
  if (href === "dashboard") return pathname === url;
  if (href === "settings") return pathname === url;
  return pathname === url || pathname.startsWith(`${url}/`);
}

export function AdminSidebar({ userName }: { userName: string }) {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push(getAdminUrl("login"));
    router.refresh();
  }

  return (
    <aside className="flex h-full w-[250px] shrink-0 flex-col border-r border-[#e8ecf0] bg-white">
      <div className="border-b border-[#e8ecf0] px-5 py-5">
        <Logo size="header" showWordmark />
        <p className="mt-2 text-[11px] font-bold tracking-[0.14em] text-[#22c55e] uppercase">Admin CMS</p>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
        {navItems.map((item) => {
          const url = getAdminUrl(item.href);
          const active = isNavActive(pathname, item.href);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={url}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                active
                  ? "bg-[#f0fdf4] text-[#16a34a]"
                  : "text-[#475569] hover:bg-[#f8fafc] hover:text-[#0f2744]"
              }`}
            >
              <Icon className="h-4 w-4 shrink-0" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-[#e8ecf0] px-4 py-4">
        <div className="mb-3 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0f2744] text-sm font-bold text-white">
            {userName
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2)
              .toUpperCase()}
          </div>
          <div>
            <p className="text-sm font-semibold text-[#0f2744]">{userName}</p>
            <p className="text-[11px] font-bold tracking-wide text-[#22c55e] uppercase">Administrator</p>
          </div>
        </div>
        <button
          type="button"
          onClick={handleLogout}
          className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-[#64748b] transition-colors hover:bg-[#f8fafc] hover:text-[#0f2744]"
        >
          <LogOut className="h-4 w-4" />
          Sign out
        </button>
      </div>
    </aside>
  );
}
