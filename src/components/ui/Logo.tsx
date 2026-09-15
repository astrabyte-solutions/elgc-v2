"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import logoImage from "../../../public/images/logo.png";

export const LOGO_SRC: StaticImageData = logoImage;

interface LogoProps {
  showTagline?: boolean;
  showWordmark?: boolean;
  size?: "sm" | "md" | "lg" | "xl" | "header";
  className?: string;
  href?: string;
}

const sizes = {
  sm: { image: 36, className: "h-9 w-9" },
  md: { image: 48, className: "h-12 w-12" },
  lg: { image: 64, className: "h-16 w-16" },
  xl: { image: 80, className: "h-20 w-20" },
  header: { image: 48, className: "h-11 w-11 sm:h-12 sm:w-12" },
};

export function Logo({
  showTagline = false,
  showWordmark = true,
  size = "md",
  className = "",
  href = "/",
}: LogoProps) {
  const { image, className: imageClass } = sizes[size];
  const wordmarkVisible = showWordmark && (size === "header" || size === "lg" || size === "xl");

  const content = (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 ${className}`}>
      <Image
        src={logoImage}
        alt="ELGC"
        width={image}
        height={image}
        className={`${imageClass} shrink-0 rounded-md object-contain`}
        priority
      />
      {wordmarkVisible && (
        <div className="hidden min-w-0 flex-col sm:flex">
          <span className="text-[15px] font-bold leading-tight tracking-tight text-[#0f2744] sm:text-base">
            ELGC
          </span>
          <span className="mt-0.5 text-[9px] font-medium leading-tight tracking-[0.14em] text-[#5a6472] uppercase sm:text-[10px]">
            Emirates Link GC
          </span>
        </div>
      )}
      {showTagline && (
        <span className="mt-0.5 text-[10px] leading-tight tracking-wide text-gray-text">
          Engineered for Industry. Driven by Precision. Trusted to Deliver.
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="group inline-flex shrink-0 transition-opacity hover:opacity-90">
        {content}
      </Link>
    );
  }

  return content;
}
