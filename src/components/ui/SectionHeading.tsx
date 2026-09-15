import { type ReactNode } from "react";

interface SectionHeadingProps {
  label?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  label,
  title,
  subtitle,
  align = "left",
  light = false,
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`mb-10 max-w-3xl ${alignClass} ${className}`}>
      {label && (
        <p className="mb-2 text-sm font-bold tracking-widest text-green uppercase">{label}</p>
      )}
      <h2
        className={`text-3xl font-bold leading-tight md:text-4xl ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed ${light ? "text-white/80" : "text-gray-text"}`}>
          {subtitle}
        </p>
      )}
      {align === "center" && (
        <div className="mx-auto mt-4 h-1 w-16 rounded bg-green" />
      )}
    </div>
  );
}
