"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useDarkMode } from "@/lib/use-dark-mode";
import { useLunchbox } from "@/lib/use-lunchbox";

const NAV_LINKS = [
  { label: "Menu", href: "/menu" },
  { label: "Explore", href: "/flavor/design" },
  { label: "My Lunchbox", href: "/lunchbox" },
];

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const { isDark, toggle } = useDarkMode();
  const { count: lunchboxCount } = useLunchbox();
  const [searchValue, setSearchValue] = useState("");
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const mobileInputRef = useRef<HTMLInputElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      setSearchValue(val);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        if (val.trim()) {
          router.push(`/menu?q=${encodeURIComponent(val.trim())}`);
        }
      }, 400);
    },
    [router]
  );

  const handleSearchKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && searchValue.trim()) {
        if (timerRef.current) clearTimeout(timerRef.current);
        router.push(`/menu?q=${encodeURIComponent(searchValue.trim())}`);
        setMobileSearchOpen(false);
      }
      if (e.key === "Escape") {
        setMobileSearchOpen(false);
      }
    },
    [router, searchValue]
  );

  const clearSearch = () => {
    setSearchValue("");
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  const toggleMobileSearch = () => {
    setMobileSearchOpen(!mobileSearchOpen);
    if (!mobileSearchOpen) {
      setTimeout(() => mobileInputRef.current?.focus(), 100);
    }
  };

  useEffect(() => {
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, []);

  return (
    <header className="frosted-glass" style={{ position: "sticky", top: 0, zIndex: 100 }}>
      <nav role="navigation" aria-label="Main navigation" className="flex items-center" style={{ maxWidth: 1200, margin: "0 auto", height: 60, padding: "0 32px", gap: 24 }}>
        <Link href="/" className="flex items-center" style={{ gap: 10, textDecoration: "none", flexShrink: 0, padding: "8px 0" }}>
          <div className="nav-mark" aria-hidden="true" />
          <span style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.04em", color: "var(--t1)" }}>mochi</span>
        </Link>

        <div className="hidden md:flex items-center" style={{ gap: 4, flex: 1 }}>
          {NAV_LINKS.map((link) => {
            const isActive = link.href === "/menu" ? pathname === "/menu" : link.href === "/flavor/design" ? pathname.startsWith("/flavor") : pathname === link.href;
            return (
              <Link key={link.href} href={link.href} className={`nav-link-item ${isActive ? "active" : ""}`}>
                {link.label}
                {link.label === "My Lunchbox" && lunchboxCount > 0 && (
                  <span style={{ marginLeft: 6, padding: "1px 7px", borderRadius: 100, background: "var(--pink)", color: "#FFF", fontSize: 11, fontWeight: 700, lineHeight: "18px" }}>
                    {lunchboxCount > 99 ? "99+" : lunchboxCount}
                  </span>
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop search */}
        <div className="hidden md:flex items-center" role="search" style={{ gap: 8, background: "var(--bg2)", borderRadius: 10, padding: "0 14px", height: 40, width: 240, flexShrink: 0, transition: "width 0.3s ease, box-shadow 0.2s ease" }}
          onFocus={(e) => { (e.currentTarget as HTMLElement).style.width = "320px"; (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 2px var(--focus)"; }}
          onBlur={(e) => { (e.currentTarget as HTMLElement).style.width = "240px"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}>
          <span style={{ fontSize: 14, color: "var(--t3)", flexShrink: 0 }} aria-hidden="true">&#x1F50D;</span>
          <input type="search" value={searchValue} onChange={handleSearchChange} onKeyDown={handleSearchKeyDown} placeholder="Search mochis..." aria-label="Search mochis" autoComplete="off"
            style={{ flex: 1, background: "none", fontSize: 14, color: "var(--t1)", height: "100%", border: "none", outline: "none" }} />
          {searchValue && (
            <button onClick={clearSearch} aria-label="Clear search" style={{ padding: 4, fontSize: 14, color: "var(--t3)", minWidth: 28, minHeight: 28, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", background: "none", border: "none", cursor: "pointer" }}>&#x2715;</button>
          )}
        </div>

        {/* Mobile search toggle */}
        <button
          onClick={toggleMobileSearch}
          aria-label="Search"
          className="md:hidden cursor-pointer"
          style={{
            marginLeft: "auto", width: 44, height: 44,
            display: "flex", alignItems: "center", justifyContent: "center",
            background: "none", border: "none", fontSize: 18, color: "var(--t2)",
            borderRadius: 10,
          }}
        >
          &#x1F50D;
        </button>

        <button onClick={toggle} aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"} aria-pressed={isDark} className={`dark-toggle hidden md:block ${isDark ? "on" : ""}`} />

        <div className="hidden md:flex" style={{ width: 44, height: 44, borderRadius: "50%", background: "var(--gradient-primary)", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 800, color: "white", flexShrink: 0 }}>M</div>
      </nav>

      {/* Mobile search bar — slides down below header */}
      {mobileSearchOpen && (
        <div
          className="md:hidden"
          role="search"
          style={{
            padding: "0 20px 12px",
            background: "inherit",
          }}
        >
          <div style={{
            display: "flex", alignItems: "center", gap: 8,
            background: "var(--bg2)", borderRadius: 10,
            padding: "0 14px", height: 44,
          }}>
            <span style={{ fontSize: 14, color: "var(--t3)", flexShrink: 0 }} aria-hidden="true">&#x1F50D;</span>
            <input
              ref={mobileInputRef}
              type="search"
              value={searchValue}
              onChange={handleSearchChange}
              onKeyDown={handleSearchKeyDown}
              placeholder="Search mochis..."
              aria-label="Search mochis"
              autoComplete="off"
              style={{ flex: 1, background: "none", fontSize: 16, color: "var(--t1)", height: "100%", border: "none", outline: "none" }}
            />
            <button
              onClick={() => { clearSearch(); setMobileSearchOpen(false); }}
              aria-label="Close search"
              className="cursor-pointer"
              style={{ padding: 4, fontSize: 14, color: "var(--t3)", minWidth: 44, minHeight: 44, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", background: "none", border: "none" }}
            >
              &#x2715;
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
