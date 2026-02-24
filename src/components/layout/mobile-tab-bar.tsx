"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDarkMode } from "@/lib/use-dark-mode";

const TABS = [
  {
    label: "Menu",
    href: "/menu",
    icon: (active: boolean) => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active ? 2 : 1.5} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    label: "Explore",
    href: "/flavor/design",
    icon: (active: boolean) => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active ? 2 : 1.5} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill={active ? "currentColor" : "none"} />
      </svg>
    ),
  },
  {
    label: "Lunchbox",
    href: "/lunchbox",
    icon: (active: boolean) => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth={active ? 2 : 1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
] as const;

export default function MobileTabBar() {
  const pathname = usePathname();
  const { isDark, toggle } = useDarkMode();
  const [settingsOpen, setSettingsOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/menu") return pathname === "/menu";
    if (href === "/flavor/design") return pathname.startsWith("/flavor");
    return pathname === href;
  };

  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0"
      style={{ zIndex: 100 }}
    >
      {/* Settings panel */}
      {settingsOpen && (
        <div
          style={{
            background: "var(--bg)",
            borderTop: "1px solid var(--sep)",
            padding: "12px 20px",
          }}
        >
          <button
            onClick={toggle}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              width: "100%",
              padding: "10px 0",
              background: "none",
              border: "none",
              color: "var(--t1)",
              fontSize: 14,
              fontWeight: 500,
              cursor: "pointer",
              minHeight: 44,
            }}
          >
            <span style={{ fontSize: 18 }}>{isDark ? "☀️" : "🌙"}</span>
            {isDark ? "Light Mode" : "Dark Mode"}
          </button>
          <Link
            href="/about"
            onClick={() => setSettingsOpen(false)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              width: "100%",
              padding: "10px 0",
              color: "var(--t2)",
              fontSize: 14,
              fontWeight: 500,
              textDecoration: "none",
              minHeight: 44,
            }}
          >
            About Mochi
          </Link>
        </div>
      )}

      <nav
        role="tablist"
        aria-label="Main navigation"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          height: 64,
          paddingBottom: "env(safe-area-inset-bottom, 0px)",
          background: "var(--bg)",
          borderTop: "1px solid var(--sep)",
        }}
      >
        {TABS.map((tab) => {
          const active = isActive(tab.href);
          return (
            <Link
              key={tab.href}
              href={tab.href}
              role="tab"
              aria-selected={active}
              onClick={() => setSettingsOpen(false)}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
                flex: 1,
                minHeight: 44,
                color: active ? "var(--pink)" : "var(--t3)",
                textDecoration: "none",
                fontSize: 10,
                fontWeight: active ? 600 : 500,
              }}
            >
              {tab.icon(active)}
              {tab.label}
            </Link>
          );
        })}

        {/* Settings tab */}
        <button
          role="tab"
          aria-selected={settingsOpen}
          aria-label="Settings"
          onClick={() => setSettingsOpen(!settingsOpen)}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            flex: 1,
            minHeight: 44,
            color: settingsOpen ? "var(--pink)" : "var(--t3)",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: 10,
            fontWeight: settingsOpen ? 600 : 500,
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={settingsOpen ? 2 : 1.5} strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
          Settings
        </button>
      </nav>
    </div>
  );
}
