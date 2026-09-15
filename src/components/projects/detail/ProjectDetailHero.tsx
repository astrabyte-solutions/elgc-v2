"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Home,
  MapPin,
  Calendar,
  Factory,
  FileText,
  DraftingCompass,
} from "lucide-react";
import { type Project } from "@/lib/data/projects";

const metaItems = (project: Project) => [
  { icon: Calendar, label: "Project Year", value: String(project.year) },
  { icon: Factory, label: "Industry", value: project.industry },
  { icon: FileText, label: "Contract Type", value: project.contractType ?? "Lump Sum" },
  { icon: DraftingCompass, label: "Project Value", value: project.value ?? "Confidential" },
];

export function ProjectDetailHero({ project }: { project: Project }) {
  return (
    <section className="relative overflow-hidden bg-[#050a14]">
      <div className="absolute inset-0">
        <Image
          src={project.image}
          alt=""
          fill
          priority
          className="object-cover object-[78%_center] lg:object-[82%_center]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050a14] from-[42%] via-[#050a14]/92 via-[58%] to-[#050a14]/15 to-100%" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-3 lg:px-8">
        {/* Breadcrumbs */}
        <motion.nav
          className="flex items-center gap-1 pt-5 pb-0 text-sm text-white/80 sm:pt-6"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link href="/" className="flex items-center gap-1 hover:text-[#22c55e]">
            <Home className="h-3.5 w-3.5" />
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-white/45" />
          <Link href="/projects" className="hover:text-[#22c55e]">
            Projects
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-white/45" />
          <span className="line-clamp-1 text-[#22c55e]">{project.title}</span>
        </motion.nav>

        {/* Title block */}
        <div className="max-w-xl pt-5 pb-8 text-left sm:max-w-2xl sm:pb-10">
          <motion.p
            className="mb-2 text-xs font-bold tracking-[0.15em] text-[#22c55e] uppercase"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            {project.category}
          </motion.p>

          <motion.h1
            className="text-[1.65rem] font-bold leading-[1.2] text-white sm:text-4xl lg:text-[2.4rem]"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            {project.title}
          </motion.h1>

          <motion.p
            className="mt-3 flex items-center gap-2 text-sm text-white/85"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <MapPin className="h-4 w-4 shrink-0 text-white/70" strokeWidth={1.5} />
            {project.location}
          </motion.p>

          <motion.p
            className="mt-3 max-w-lg text-sm leading-relaxed text-white/75 sm:text-[15px]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            {project.description}
          </motion.p>
        </div>

        {/* Stats bar — full width, 4 equal columns */}
        <motion.div
          className="grid grid-cols-2 border-t border-white/15 lg:grid-cols-4"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.25 }}
        >
          {metaItems(project).map((item, i) => (
            <div
              key={item.label}
              className={`flex items-center gap-3 py-4 sm:gap-3.5 sm:py-5 ${
                i > 0 ? "lg:border-l lg:border-white/15" : ""
              } ${i % 2 === 1 ? "border-l border-white/15 lg:border-l" : ""} ${
                i >= 2 ? "border-t border-white/15 lg:border-t-0" : ""
              } lg:px-4 lg:first:pl-0`}
            >
              <item.icon className="h-6 w-6 shrink-0 text-white/75 sm:h-7 sm:w-7" strokeWidth={1.5} />
              <div className="min-w-0">
                <p className="text-[11px] text-white/50 sm:text-xs">{item.label}</p>
                <p className="truncate text-sm font-bold text-white sm:text-[15px]">{item.value}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
