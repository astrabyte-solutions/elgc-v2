"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SERVICE_DROPDOWN_ITEMS } from "@/lib/service-dropdown";

interface ServicesDropdownProps {
  open: boolean;
}

export function ServicesDropdown({ open }: ServicesDropdownProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="absolute top-full left-0 z-50 mt-1 w-[min(560px,calc(100vw-2rem))] pt-2"
          onWheel={(e) => e.stopPropagation()}
        >
          <div className="overflow-hidden rounded-xl border border-[#e8ecf0] bg-white shadow-[0_16px_40px_rgba(15,39,68,0.12)]">
            <div className="flex items-center justify-between border-b border-[#e8ecf0] px-4 py-3">
              <p className="text-xs font-bold tracking-[0.12em] text-[#0f2744] uppercase">
                Capabilities
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#16a34a] hover:underline"
              >
                View all
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div
              className="max-h-[min(420px,calc(100vh-9rem))] overflow-y-auto overscroll-contain px-2 py-2"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              <div className="grid grid-cols-1 gap-0.5 sm:grid-cols-2">
                {SERVICE_DROPDOWN_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-[#f0fdf4]"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#22c55e]/10 transition-colors group-hover:bg-[#22c55e]/15">
                      <item.icon className="h-4 w-4 text-[#22c55e]" strokeWidth={1.75} />
                    </div>
                    <p className="min-w-0 text-[13px] leading-snug font-semibold text-[#0f2744] transition-colors group-hover:text-[#16a34a]">
                      {item.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
