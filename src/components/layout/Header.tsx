"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";
import { SERVICE_DROPDOWN_ITEMS } from "@/lib/service-dropdown";
import { Logo } from "@/components/ui/Logo";
import { ServicesDropdown } from "@/components/layout/ServicesDropdown";

function NavUnderline({ active }: { active: boolean }) {
  return (
    <span
      className={`absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-[#22c55e] transition-transform duration-300 ease-out ${
        active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
      }`}
      style={{ transformOrigin: "left center" }}
    />
  );
}

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const servicesActive = isActive("/services");

  const navLinkClass = (active: boolean) =>
    `group relative whitespace-nowrap rounded-md px-1.5 py-2 text-[12px] font-semibold tracking-wide transition-colors duration-200 xl:px-2.5 xl:text-[13px] ${
      active
        ? "text-[#16a34a]"
        : "text-[#334155] hover:bg-[#f0fdf4]/80 hover:text-[#16a34a]"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[#e8ecf0]/80 bg-white/95 shadow-[0_4px_30px_rgba(15,39,68,0.07)] backdrop-blur-md"
          : "border-b border-[#e8ecf0] bg-white"
      }`}
    >
      <div className="mx-auto grid h-[76px] max-w-[1400px] grid-cols-[auto_1fr_auto] items-center gap-2 px-3 lg:gap-4 lg:px-6 xl:px-8">
        <div className="shrink-0">
          <Logo size="header" showWordmark />
        </div>

        <nav className="hidden min-w-0 items-center justify-center gap-0 lg:flex">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href={link.href}
                  className={`${navLinkClass(servicesActive || servicesOpen)} flex items-center gap-0.5`}
                >
                  {link.label}
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                  <NavUnderline active={servicesActive || servicesOpen} />
                </Link>
                <div className="absolute top-full left-0 h-3 w-full" aria-hidden />
                <ServicesDropdown open={servicesOpen} />
              </div>
            ) : (
              <Link key={link.href} href={link.href} className={navLinkClass(isActive(link.href))}>
                {link.label}
                <NavUnderline active={isActive(link.href)} />
              </Link>
            ),
          )}
        </nav>

        <div className="flex shrink-0 items-center justify-end gap-1.5 sm:gap-2">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="hidden shrink-0 xl:block">
            <Link
              href="/supplier-registration"
              className="inline-flex shrink-0 items-center whitespace-nowrap rounded-lg border border-[#22c55e] bg-white px-3 py-2 text-[10px] font-bold tracking-wide text-[#16a34a] uppercase transition-colors hover:bg-[#f0fdf4]"
            >
              Supplier Registration
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="hidden shrink-0 lg:block">
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-lg bg-[#22c55e] px-3 py-2 text-[10px] font-bold tracking-wide text-white uppercase shadow-[0_4px_14px_rgba(34,197,94,0.35)] transition-colors hover:bg-[#16a34a] xl:px-4 xl:text-[11px]"
            >
              Discuss Your Project
              <ArrowRight className="h-3.5 w-3.5 shrink-0" strokeWidth={2.5} />
            </Link>
          </motion.div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#e8ecf0] text-[#0f2744] transition-colors hover:border-[#22c55e]/40 hover:bg-[#f0fdf4] lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              className="fixed inset-0 top-[76px] z-40 bg-[#0f2744]/40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-[76px] left-0 z-50 flex h-[calc(100dvh-76px)] w-[min(320px,88vw)] flex-col overflow-y-auto border-r border-[#e8ecf0] bg-white shadow-[4px_0_32px_rgba(15,39,68,0.12)] lg:hidden"
            >
              <nav className="flex flex-col gap-1 px-4 py-5">
                {NAV_LINKS.map((link) =>
                  link.children ? (
                    <div key={link.href}>
                      <button
                        type="button"
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors ${
                          servicesActive
                            ? "bg-[#22c55e]/10 text-[#16a34a]"
                            : "text-[#334155] hover:bg-[#f8fafc]"
                        }`}
                      >
                        {link.label}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-1 space-y-0.5 rounded-xl bg-[#eef1f4] p-2">
                              {SERVICE_DROPDOWN_ITEMS.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="flex items-center gap-3 rounded-lg p-2.5 transition-colors hover:bg-white"
                                >
                                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#22c55e]/10">
                                    <item.icon className="h-4 w-4 text-[#22c55e]" strokeWidth={1.75} />
                                  </div>
                                  <p className="text-sm font-semibold leading-snug text-[#0f2744]">
                                    {item.title}
                                  </p>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors ${
                        isActive(link.href)
                          ? "bg-[#22c55e]/10 text-[#16a34a]"
                          : "text-[#334155] hover:bg-[#f8fafc]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ),
                )}
                <Link
                  href="/supplier-registration"
                  onClick={() => setMobileOpen(false)}
                  className="mt-3 flex items-center justify-center whitespace-nowrap rounded-lg border border-[#22c55e] bg-white px-4 py-3 text-sm font-bold tracking-wide text-[#16a34a] uppercase"
                >
                  Supplier Registration
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-[#22c55e] px-4 py-3 text-sm font-bold tracking-wide text-white uppercase shadow-[0_4px_14px_rgba(34,197,94,0.3)]"
                >
                  Discuss Your Project
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
