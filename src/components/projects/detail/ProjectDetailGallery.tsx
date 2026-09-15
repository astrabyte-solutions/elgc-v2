"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { type Project } from "@/lib/data/projects";
import { getProjectGallery } from "@/lib/project-detail-defaults";

interface ProjectDetailGalleryProps {
  project: Project;
  embedded?: boolean;
}

export function ProjectDetailGallery({ project, embedded = false }: ProjectDetailGalleryProps) {
  const gallery = getProjectGallery(project);
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const updateButtons = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(maxScroll > 4 && el.scrollLeft < maxScroll - 4);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    updateButtons();

    el.addEventListener("scroll", updateButtons, { passive: true });
    window.addEventListener("resize", updateButtons);

    const observer = new ResizeObserver(updateButtons);
    observer.observe(el);

    return () => {
      el.removeEventListener("scroll", updateButtons);
      window.removeEventListener("resize", updateButtons);
      observer.disconnect();
    };
  }, [gallery.length, updateButtons]);

  const scroll = (direction: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;

    const item = el.querySelector<HTMLElement>("[data-gallery-item]");
    if (!item) return;

    const gap = 16;
    el.scrollBy({ left: direction * (item.offsetWidth + gap), behavior: "smooth" });
  };

  const sectionClass = embedded
    ? "bg-white py-10 lg:py-12"
    : "bg-[#f8f9fb] py-10 lg:py-12";

  return (
    <section className={sectionClass}>
      <div className="mx-auto max-w-7xl px-3 lg:px-8">
        <p className="mb-6 text-sm font-bold tracking-[0.14em] text-[#22c55e] uppercase">
          Project Gallery
        </p>

        <div className="relative">
          <button
            type="button"
            onClick={() => scroll(-1)}
            disabled={!canPrev}
            className="absolute top-[36%] -left-1 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#e5e7eb] bg-white text-[#374151] shadow-sm transition-colors hover:border-[#22c55e] hover:text-[#22c55e] disabled:pointer-events-none disabled:opacity-40 sm:-left-4"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div
            ref={trackRef}
            className="flex gap-4 overflow-x-auto scroll-smooth px-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {gallery.map((item, i) => (
              <motion.div
                key={`${item.caption}-${i}`}
                data-gallery-item
                className="w-[calc(50%-0.5rem)] shrink-0 sm:w-[calc(33.333%-0.75rem)] lg:w-[calc(20%-0.8rem)]"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ y: -6 }}
              >
                <div className="group relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={item.image}
                    alt={item.caption}
                    fill
                    className="premium-image-zoom object-cover"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 220px"
                  />
                </div>
                <p className="mt-2 text-sm font-bold text-[#0f2744]">{item.caption}</p>
              </motion.div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scroll(1)}
            disabled={!canNext}
            className="absolute top-[36%] -right-1 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#e5e7eb] bg-white text-[#374151] shadow-sm transition-colors hover:border-[#22c55e] hover:text-[#22c55e] disabled:pointer-events-none disabled:opacity-40 sm:-right-4"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
