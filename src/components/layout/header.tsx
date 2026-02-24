"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Menu", href: "/menu" },
  { label: "Flavors", href: "/flavor/design" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0"
      style={{
        zIndex: 100,
        height: 48,
        background: "rgba(251, 251, 253, 0.72)",
        backdropFilter: "saturate(180%) blur(20px)",
        WebkitBackdropFilter: "saturate(180%) blur(20px)",
        borderBottom: "0.5px solid rgba(60, 60, 67, 0.06)",
      }}
    >
      <nav
        className="flex items-center justify-between"
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          height: 48,
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
            color: "var(--label-primary)",
            textDecoration: "none",
            minHeight: 44,
            display: "flex",
            alignItems: "center",
          }}
        >
          <span aria-hidden="true" style={{ marginRight: 4 }}>🍡</span>
          mochi
        </Link>

        {/* Desktop nav */}
        <div
          className="hidden md:flex items-center"
          style={{ gap: 28 }}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontSize: 12,
                fontWeight: 500,
                color: "var(--label-secondary)",
                textDecoration: "none",
                minHeight: 44,
                display: "flex",
                alignItems: "center",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--label-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--label-secondary)")}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex items-center justify-center"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          style={{
            minWidth: 44,
            minHeight: 44,
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--label-primary)",
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            {mobileOpen ? (
              <>
                <line x1="4" y1="4" x2="14" y2="14" />
                <line x1="14" y1="4" x2="4" y2="14" />
              </>
            ) : (
              <>
                <line x1="3" y1="5" x2="15" y2="5" />
                <line x1="3" y1="9" x2="15" y2="9" />
                <line x1="3" y1="13" x2="15" y2="13" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile slide-down nav */}
      {mobileOpen && (
        <div
          className="md:hidden"
          style={{
            background: "rgba(251, 251, 253, 0.96)",
            backdropFilter: "saturate(180%) blur(20px)",
            WebkitBackdropFilter: "saturate(180%) blur(20px)",
            borderBottom: "0.5px solid rgba(60, 60, 67, 0.06)",
            padding: "8px 20px 16px",
          }}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: "flex",
                alignItems: "center",
                minHeight: 44,
                fontSize: 14,
                fontWeight: 500,
                color: "var(--label-secondary)",
                textDecoration: "none",
                borderBottom: "0.5px solid rgba(60, 60, 67, 0.06)",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
