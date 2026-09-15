"use client";

import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { CLIENTS_WHY_CHOOSE } from "@/lib/data/clients";
import { getClientsIcon } from "@/lib/clients-icons";

function cellBorder(index: number, lastIndex: number) {
  if (index === lastIndex) return "";
  return "border-b border-[#e8ecf0] lg:border-r lg:border-b-0";
}

export function ClientsWhySection() {
  const lastIndex = CLIENTS_WHY_CHOOSE.length - 1;

  return (
    <AnimatedSection className="bg-white py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-3 lg:px-8">
        <p className="mb-10 text-center text-sm font-bold tracking-[0.14em] text-[#22c55e] uppercase">
          Why Clients Choose ELGC
        </p>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6">
          {CLIENTS_WHY_CHOOSE.map((item, index) => {
            const Icon = getClientsIcon(item.iconName);
            return (
              <StaggerItem
                key={item.title}
                className={`flex flex-col items-center px-4 py-6 text-center sm:px-3 lg:py-4 ${cellBorder(index, lastIndex)}`}
              >
                <Icon className="mb-3 h-9 w-9 text-[#22c55e]" strokeWidth={1.4} />
                <h3 className="mb-2 text-sm font-bold text-[#0f2744] sm:text-[15px]">{item.title}</h3>
                <p className="text-xs leading-relaxed text-[#5a6472] sm:text-[13px]">
                  {item.description}
                </p>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
