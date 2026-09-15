"use client";

import { Check } from "lucide-react";

export function SupplierStepProgress({
  steps,
  currentStep,
  onStepClick,
}: {
  steps: { title: string }[];
  currentStep: number;
  onStepClick?: (index: number) => void;
}) {
  return (
    <div className="mb-6">
      <div className="mb-3 flex items-center justify-between text-xs text-[#5a6472]">
        <span>
          Step <strong className="text-[#0f2744]">{currentStep + 1}</strong> of {steps.length}
        </span>
        <span className="font-medium text-[#22c55e]">{steps[currentStep]?.title}</span>
      </div>
      <div className="flex gap-1">
        {steps.map((step, index) => {
          const done = index < currentStep;
          const active = index === currentStep;
          return (
            <button
              key={step.title}
              type="button"
              onClick={() => onStepClick?.(index)}
              className={`h-2 flex-1 rounded-full transition-colors ${
                done ? "bg-[#22c55e]" : active ? "bg-[#86efac]" : "bg-[#e8ecf0]"
              }`}
              title={step.title}
              aria-label={`Step ${index + 1}: ${step.title}`}
            />
          );
        })}
      </div>
      <div className="mt-4 hidden gap-2 sm:flex sm:flex-wrap">
        {steps.map((step, index) => {
          const done = index < currentStep;
          const active = index === currentStep;
          return (
            <span
              key={step.title}
              className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-medium ${
                active
                  ? "bg-[#dcfce7] text-[#16a34a]"
                  : done
                    ? "bg-[#f0fdf4] text-[#22c55e]"
                    : "bg-[#f1f5f9] text-[#94a3b8]"
              }`}
            >
              {done && <Check className="h-3 w-3" />}
              {step.title}
            </span>
          );
        })}
      </div>
    </div>
  );
}
