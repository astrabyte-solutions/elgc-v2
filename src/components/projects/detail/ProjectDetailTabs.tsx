"use client";

export const PROJECT_DETAIL_TABS = [
  { id: "overview", label: "Overview" },
  { id: "scope", label: "Scope of Work" },
  { id: "highlights", label: "Key Highlights" },
  { id: "technical", label: "Technical Details" },
  { id: "gallery", label: "Gallery" },
  { id: "documents", label: "Documents" },
] as const;

export type ProjectDetailTabId = (typeof PROJECT_DETAIL_TABS)[number]["id"];

interface ProjectDetailTabsProps {
  activeTab: ProjectDetailTabId;
  onTabChange: (tab: ProjectDetailTabId) => void;
}

export function ProjectDetailTabs({ activeTab, onTabChange }: ProjectDetailTabsProps) {
  return (
    <div className="sticky top-[72px] z-40 border-b border-[#e5e7eb] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
      <div className="mx-auto max-w-7xl px-3 lg:px-8">
        <div className="flex items-stretch overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {PROJECT_DETAIL_TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => onTabChange(tab.id)}
                className={`relative shrink-0 px-3 py-4 text-[10px] font-bold tracking-[0.1em] uppercase transition-colors sm:px-4 sm:text-[11px] lg:flex-1 lg:px-2 lg:text-xs ${
                  isActive ? "text-[#22c55e]" : "text-[#0f2744] hover:text-[#22c55e]"
                }`}
              >
                {tab.label}
                {isActive && (
                  <span
                    className="absolute right-2 bottom-0 left-2 h-[3px] rounded-t-sm bg-[#22c55e] sm:right-3 sm:left-3 lg:right-4 lg:left-4"
                    aria-hidden
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
