"use client";

import { motion } from "framer-motion";
import { easeOutExpo, viewportTight } from "@/lib/motion";

interface AccentHeadingProps {
  accentLetter: string;
  rest: string;
  light?: boolean;
  className?: string;
}

export function AccentHeading({ accentLetter, rest, light = false, className = "" }: AccentHeadingProps) {
  return (
    <motion.h2
      className={`text-2xl font-bold sm:text-3xl lg:text-[2rem] ${
        light ? "text-white" : "text-[#0f2744]"
      } ${className}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportTight}
      transition={{ duration: 0.65, ease: easeOutExpo }}
    >
      <span className="relative inline-block">
        {accentLetter}
        <motion.span
          className="absolute -bottom-1 left-0 h-[3px] rounded-sm bg-[#22c55e]"
          initial={{ width: 0 }}
          whileInView={{ width: 20 }}
          viewport={viewportTight}
          transition={{ duration: 0.5, delay: 0.2, ease: easeOutExpo }}
        />
      </span>
      {rest}
    </motion.h2>
  );
}
