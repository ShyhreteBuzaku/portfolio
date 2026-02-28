"use client";

import type { ProjectCategory } from "@/lib/types";

interface CategoryTabsProps {
  active: ProjectCategory;
  onChange: (category: ProjectCategory) => void;
}

const tabs: { id: ProjectCategory; label: string; icon: React.ReactNode }[] = [
  {
    id: "websites",
    label: "Websites",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    id: "mobile",
    label: "Mobile Apps",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
];

export function CategoryTabs({ active, onChange }: CategoryTabsProps) {
  return (
    <nav className="flex gap-8 border-b border-white/10" role="tablist">
      {tabs.map((tab) => {
        const isActive = active === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab.id)}
            className={`flex items-center gap-2 pb-3 text-sm font-medium transition-colors border-b-2 -mb-px ${
              isActive
                ? "text-accent border-accent"
                : "text-grey-text border-transparent hover:text-white"
            }`}
          >
            <span className={isActive ? "text-accent" : ""}>{tab.icon}</span>
            {tab.label}
          </button>
        );
      })}
    </nav>
  );
}
