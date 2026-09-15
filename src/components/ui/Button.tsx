"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { type ReactNode } from "react";
import { hoverScale, tapScale } from "@/lib/motion";

type ButtonVariant = "primary" | "outline" | "outline-white" | "ghost-white";

interface ButtonProps {
  href?: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  icon?: "arrow" | "download" | "none";
  onClick?: () => void;
  type?: "button" | "submit";
}

const variants: Record<ButtonVariant, string> = {
  primary: "bg-green text-white hover:bg-green-dark",
  outline: "border-2 border-green text-green hover:bg-green hover:text-white",
  "outline-white": "border-2 border-white text-white hover:bg-white hover:text-navy",
  "ghost-white": "border border-white/40 text-white hover:bg-white/10",
};

const motionProps = {
  whileHover: hoverScale,
  whileTap: tapScale,
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  icon = "arrow",
  onClick,
  type = "button",
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold uppercase tracking-wide transition-colors duration-300";
  const classes = `${base} ${variants[variant]} ${className}`;

  const content = (
    <>
      {children}
      {icon === "arrow" && (
        <motion.span className="inline-flex" whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
          <ArrowRight className="h-4 w-4" />
        </motion.span>
      )}
      {icon === "download" && <Download className="h-4 w-4" />}
    </>
  );

  if (href) {
    return (
      <motion.div className="flex w-full sm:inline-flex sm:w-auto" {...motionProps}>
        <Link href={href} className={`${classes} w-full justify-center sm:w-auto`}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`${classes} w-full justify-center sm:w-auto`}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
}
