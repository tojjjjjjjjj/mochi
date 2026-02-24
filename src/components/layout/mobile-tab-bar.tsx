"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDarkMode } from "@/lib/use-dark-mode";

const TABS = [
  { label: "Menu", href: "/menu", icon: "\uD83C\uDF71" },
  { label: "Explore", href: "/flavor/design", icon: "\uD83E\uDDED" },
  { label: "Lunchbox", href: "/lunchbox", icon: "\u2764\uFE0F" },
];

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
    <div className="md:hidden fixed bottom-0 left-0 right-0" style={{ zIndex: 50 }}>
      {settingsOpen && (
        <div style={{ background: "var(--bg)", borderTop: "0.5px solid var(--sep)", padding: "12px 20px" }}>
          <button onClick={toggle} style={{ display: "flex", alignItems: "center", gap: 10, width: "100%", padding: "10px 0", background: "none", border: "none", color: "var(--t1)", fontSize: 14, fontWeight: 500, cursor: "pointer", minHeight: 44 }}>
            <span style={{ fontSize: 18 }}>{isDark ? "\u2600\uFE0F" : "\uD83C\uDF19"}</span>
            {isDark ? "Light Mode" : "Dark Mode"}
          </button>
          <Link href="/about" onClick={() => setSettingsOpen(false)} style={{ display: "flex", alignItems: "center", gap: 10, width: "100%", padding: "10px 0", color: "var(--t2)", fontSize: 14, fontWeight: 500, textDecoration: "none", minHeight: 44 }}>
            About Mochi
          </Link>
        </div>
      )}

      <nav role="tablist" aria-label="Main navigation" style={{ display: "flex", alignItems: "center", justifyContent: "space-around", background: "var(--bg)", backdropFilter: "blur(12px)", borderTop: "0.5px solid var(--sep)", padding: "8px 0 20px", transition: "background 0.3s ease" }}>
        {TABS.map((tab) => {
          const active = isActive(tab.href);
          return (
            <Link key={tab.href} href={tab.href} role="tab" aria-selected={active} onClick={() => setSettingsOpen(false)}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, padding: "6px 16px", minHeight: 44, minWidth: 64, fontSize: 10, fontWeight: active ? 600 : 500, color: active ? "var(--pink-text)" : "var(--t3)", textDecoration: "none" }}>
              <span style={{ fontSize: 22, opacity: active ? 1 : 0.35 }}>{tab.icon}</span>
              {tab.label}
            </Link>
          );
        })}
        <button role="tab" aria-selected={settingsOpen} aria-label="Settings" onClick={() => setSettingsOpen(!settingsOpen)}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, padding: "6px 16px", minHeight: 44, minWidth: 64, fontSize: 10, fontWeight: settingsOpen ? 600 : 500, color: settingsOpen ? "var(--pink-text)" : "var(--t3)", background: "none", border: "none", cursor: "pointer" }}>
          <span style={{ fontSize: 22, opacity: settingsOpen ? 1 : 0.35 }}>&#x2699;&#xFE0F;</span>
          Settings
        </button>
      </nav>
    </div>
  );
}
