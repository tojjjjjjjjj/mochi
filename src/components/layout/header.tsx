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
  const [searchFocused, setSearchFocused] = useState(false);
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
      }
    },
    [router, searchValue]
  );

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 frosted-glass"
      style={{
        zIndex: 100,
        height: 60,
        borderBottom: "0.5px solid var(--sep)",
      }}
    >
      <nav
        role="navigation"
        aria-label="Main navigation"
        className="flex items-center justify-between"
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          height: 60,
          padding: "0 20px",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center"
          style={{
            fontWeight: 800,
            fontSize: 17,
            letterSpacing: "-0.03em",
            color: "var(--t1)",
            textDecoration: "none",
            minHeight: 44,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 8,
              background: "var(--gradient-primary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
            }}
          >
            <span aria-hidden="true">🍡</span>
          </div>
          <span className="hidden sm:inline">mochi</span>
        </Link>

        {/* Desktop nav links */}
        <div
          className="hidden md:flex items-center"
          style={{ gap: 24 }}
        >
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/menu"
                ? pathname === "/menu"
                : link.href === "/flavor/design"
                  ? pathname.startsWith("/flavor")
                  : pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontSize: 13,
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? "var(--t1)" : "var(--t2)",
                  textDecoration: "none",
                  minHeight: 44,
                  display: "flex",
                  alignItems: "center",
                  transition: "color 0.2s ease",
                  position: "relative",
                }}
              >
                {link.label}
                {link.label === "My Lunchbox" && lunchboxCount > 0 && (
                  <span
                    style={{
                      marginLeft: 6,
                      width: 18,
                      height: 18,
                      borderRadius: "50%",
                      background: "var(--pink)",
                      color: "#FFFFFF",
                      fontSize: 10,
                      fontWeight: 700,
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      lineHeight: 1,
                    }}
                  >
                    {lunchboxCount > 99 ? "99+" : lunchboxCount}
                  </span>
                )}
              </Link>
            );
          })}
        </div>

        {/* Right side: search + dark toggle */}
        <div className="flex items-center" style={{ gap: 8 }}>
          {/* Search */}
          <div className="hidden md:block relative">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2"
              style={{ color: "var(--t3)", pointerEvents: "none" }}
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="search"
              value={searchValue}
              onChange={handleSearchChange}
              onKeyDown={handleSearchKeyDown}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              placeholder="Search mochis..."
              aria-label="Search mochis"
              style={{
                width: searchFocused ? 320 : 240,
                paddingLeft: 34,
                paddingRight: 12,
                paddingTop: 8,
                paddingBottom: 8,
                borderRadius: 10,
                backgroundColor: "var(--bg2)",
                border: "1px solid var(--sep)",
                fontSize: 13,
                color: "var(--t1)",
                outline: "none",
                transition: "width 0.3s ease, border-color 0.2s ease",
                minHeight: 36,
              }}
            />
          </div>

          {/* Dark mode toggle */}
          <button
            onClick={toggle}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="hidden md:flex items-center justify-center"
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: "var(--bg2)",
              border: "1px solid var(--sep)",
              cursor: "pointer",
              color: "var(--t2)",
              fontSize: 16,
              minHeight: 44,
              minWidth: 44,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {isDark ? "☀️" : "🌙"}
          </button>
        </div>
      </nav>
    </header>
  );
}
