import { type ReactNode } from "react";

interface CtaActionsProps {
  children: ReactNode;
  className?: string;
}

/** Responsive CTA button row — stacks full-width on mobile, inline on larger screens. */
export function CtaActions({ children, className = "" }: CtaActionsProps) {
  return (
    <div
      className={`flex w-full min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3 md:justify-end ${className}`}
    >
      {children}
    </div>
  );
}

export const ctaButtonClass = "w-full justify-center sm:w-auto sm:shrink-0";
