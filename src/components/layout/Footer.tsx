"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, Globe, MapPin, Share2 } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { COMPANY, FOOTER_SERVICES, COMPANY_CERTIFICATES } from "@/lib/constants";
import { easeOutExpo, hoverScale, tapScale, viewportDefault } from "@/lib/motion";

const quickLinks = [
  { label: "About ELGC", href: "/about" },
  { label: "Capabilities", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Quality & HSE", href: "/quality-safety" },
  { label: "Insights", href: "/blogs" },
  { label: "Supplier Registration", href: "/supplier-registration" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <motion.footer
      className="bg-navy-dark text-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportDefault}
      transition={{ duration: 0.7, ease: easeOutExpo }}
    >
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <StaggerContainer className="grid gap-10 md:grid-cols-2 lg:grid-cols-5" stagger={0.06}>
          <StaggerItem className="lg:col-span-1">
            <h4 className="mb-4 text-sm font-bold tracking-wider text-green uppercase">About ELGC</h4>
            <p className="text-sm leading-relaxed text-white/70">{COMPANY.footerAbout}</p>
            <div className="mt-6 flex gap-3">
              {[Share2, Globe, Mail, Phone].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 transition-colors hover:border-green hover:bg-green"
                  whileHover={hoverScale}
                  whileTap={tapScale}
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </StaggerItem>

          <StaggerItem>
            <h4 className="mb-4 text-sm font-bold tracking-wider text-green uppercase">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="premium-link text-sm text-white/70 transition-colors hover:translate-x-0.5 hover:text-green">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </StaggerItem>

          <StaggerItem>
            <h4 className="mb-4 text-sm font-bold tracking-wider text-green uppercase">Capabilities</h4>
            <ul className="space-y-2.5">
              {FOOTER_SERVICES.map((service) => (
                <li key={service}>
                  <Link href="/services" className="text-sm text-white/70 transition-colors hover:text-green">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </StaggerItem>

          <StaggerItem>
            <h4 className="mb-4 text-sm font-bold tracking-wider text-green uppercase">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-white/70">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-green" />
                <a href={`tel:${COMPANY.phone[0].replace(/\s/g, "")}`} className="hover:text-green">
                  {COMPANY.phone[0]}
                </a>
              </li>
              {COMPANY.email.map((email) => (
                <li key={email} className="flex items-start gap-2 text-sm text-white/70">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-green" />
                  <a href={`mailto:${email}`} className="hover:text-green">
                    {email}
                  </a>
                </li>
              ))}
              <li className="flex items-start gap-2 text-sm text-white/70">
                <Globe className="mt-0.5 h-4 w-4 shrink-0 text-green" />
                <a href={`https://${COMPANY.website}`} className="hover:text-green" target="_blank" rel="noopener noreferrer">
                  {COMPANY.website}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-green" />
                {COMPANY.address}
              </li>
            </ul>
          </StaggerItem>

          <StaggerItem>
            <h4 className="mb-4 text-sm font-bold tracking-wider text-green uppercase">Certifications</h4>
            <ul className="space-y-2">
              {COMPANY_CERTIFICATES.map((cert) => (
                <li key={cert.id}>
                  {cert.file ? (
                    <a
                      href={cert.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-white/60 transition-colors hover:text-green"
                    >
                      {cert.title} — {cert.description}
                    </a>
                  ) : (
                    <span className="text-xs text-white/60">
                      {cert.title} — {cert.description}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </StaggerItem>
        </StaggerContainer>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-white/50 md:flex-row lg:px-8">
          <p>&copy; 2026 {COMPANY.legalName}. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-green">Privacy Policy</Link>
            <span>|</span>
            <Link href="#" className="hover:text-green">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
