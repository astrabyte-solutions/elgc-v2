"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CLIENT_TESTIMONIALS } from "@/lib/data/clients";

const AUTO_PLAY_MS = 5000;

function TestimonialCard({
  text,
  author,
  companyShort,
  logo,
}: {
  text: string;
  author: string;
  companyShort: string;
  logo: string;
}) {
  return (
    <div className="flex h-full flex-col rounded-xl bg-white p-6 shadow-[0_4px_24px_rgba(15,39,68,0.08)] sm:p-7">
      <Quote className="mb-4 h-8 w-8 text-[#22c55e]/50" strokeWidth={1.5} />
      <p className="mb-6 flex-1 text-sm leading-relaxed text-[#374151] sm:text-[15px]">{text}</p>
      <div className="flex items-end justify-between gap-4">
        <p className="text-xs font-medium text-[#5a6472] sm:text-[13px]">— {author}</p>
        <div className="relative h-8 w-20 shrink-0">
          <Image
            src={logo}
            alt={companyShort}
            fill
            className="object-contain object-right"
            sizes="80px"
          />
        </div>
      </div>
    </div>
  );
}

export function ClientsTestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const total = CLIENT_TESTIMONIALS.length;
  const maxIndex = Math.max(0, total - slidesPerView);

  const updateSlidesPerView = useCallback(() => {
    if (window.innerWidth >= 1024) setSlidesPerView(3);
    else if (window.innerWidth >= 768) setSlidesPerView(2);
    else setSlidesPerView(1);
  }, []);

  useEffect(() => {
    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, [updateSlidesPerView]);

  useEffect(() => {
    setActiveIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  useEffect(() => {
    if (isPaused || maxIndex === 0) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, AUTO_PLAY_MS);

    return () => clearInterval(timer);
  }, [isPaused, maxIndex]);

  return (
    <AnimatedSection className="bg-[#eef1f4] py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-3 lg:px-8">
        <div className="mb-10 flex items-center justify-center gap-4">
          <div className="hidden h-px flex-1 bg-[#22c55e]/40 sm:block" aria-hidden />
          <p className="shrink-0 text-sm font-bold tracking-[0.14em] text-[#22c55e] uppercase">
            What Our Clients Say
          </p>
          <div className="hidden h-px flex-1 bg-[#22c55e]/40 sm:block" aria-hidden />
        </div>

        <div
          className="overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            className="flex"
            style={{ width: `${(total / slidesPerView) * 100}%` }}
            animate={{ x: `-${(activeIndex * 100) / total}%` }}
            transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
          >
            {CLIENT_TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.company}
                className="shrink-0 px-2"
                style={{ width: `${100 / total}%` }}
              >
                <TestimonialCard
                  text={testimonial.text}
                  author={testimonial.author}
                  companyShort={testimonial.companyShort}
                  logo={testimonial.logo}
                />
              </div>
            ))}
          </motion.div>
        </div>

        {maxIndex > 0 && (
          <div className="mt-8 flex justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === activeIndex ? "w-6 bg-[#22c55e]" : "w-2 bg-[#22c55e]/30"
                }`}
                aria-label={`Go to testimonial slide ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </AnimatedSection>
  );
}
