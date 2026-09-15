"use client";

import { motion, type Variants, type HTMLMotionProps } from "framer-motion";
import { type ReactNode } from "react";
import {
  easeOutExpo,
  springSoft,
  viewportDefault,
  viewportTight,
  hoverLift,
  tapScale,
} from "@/lib/motion";

export type SectionVariant = "fadeUp" | "fadeDown" | "fadeLeft" | "fadeRight" | "scale" | "fade";

const sectionVariants: Record<SectionVariant, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 56 },
    visible: { opacity: 1, y: 0 },
  },
  fadeDown: {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -48 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 48 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.94 },
    visible: { opacity: 1, scale: 1 },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
};

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
  variant?: SectionVariant;
}

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  id,
  variant = "fadeUp",
}: AnimatedSectionProps) {
  const transition =
    variant === "scale"
      ? { ...springSoft, delay }
      : { duration: 0.7, delay, ease: easeOutExpo };

  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportDefault}
      variants={sectionVariants[variant]}
      transition={transition}
    >
      {children}
    </motion.section>
  );
}

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
}

export function StaggerContainer({
  children,
  className = "",
  stagger = 0.08,
  delayChildren = 0.05,
}: StaggerContainerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportTight}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}

export function StaggerItem({ children, className = "", interactive = false }: StaggerItemProps) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 36, scale: 0.97 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.55, ease: easeOutExpo },
        },
      }}
      whileHover={interactive ? hoverLift : undefined}
      whileTap={interactive ? tapScale : undefined}
    >
      {children}
    </motion.div>
  );
}

interface HoverLiftProps {
  children: ReactNode;
  className?: string;
}

export function HoverLift({ children, className = "" }: HoverLiftProps) {
  return (
    <motion.div className={className} whileHover={hoverLift} whileTap={tapScale}>
      {children}
    </motion.div>
  );
}

interface FadeInProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function FadeIn({ children, delay = 0, className = "", ...props }: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportTight}
      transition={{ duration: 0.55, delay, ease: easeOutExpo }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface AnimatedHeadingProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p";
}

export function AnimatedHeading({
  children,
  className = "",
  delay = 0,
  as: Tag = "h2",
}: AnimatedHeadingProps) {
  const MotionTag = motion[Tag];

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportTight}
      transition={{ duration: 0.6, delay, ease: easeOutExpo }}
    >
      {children}
    </MotionTag>
  );
}
