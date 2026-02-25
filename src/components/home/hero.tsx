"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Trigger hero entrance after mount
    const el = sectionRef.current;
    if (!el) return;
    requestAnimationFrame(() => {
      el.querySelectorAll('.hero-enter').forEach((child) => {
        child.classList.add('visible');
      });
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        background: "var(--bg-warm)",
        borderBottom: "0.5px solid var(--sep)",
        overflow: "hidden",
      }}
    >
      {/* Subtle gradient glow behind the hero */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: -60,
          right: -100,
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(255,107,157,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 32px 48px", position: "relative" }}>
        <p
          className="hero-enter hero-enter-1"
          style={{
            fontSize: 14,
            fontWeight: 700,
            color: "var(--pink-text)",
            marginBottom: 12,
            letterSpacing: "0.02em",
            textTransform: "uppercase",
          }}
        >
          The curated AI marketplace
        </p>

        <h1
          className="hero-enter hero-enter-2"
          style={{
            fontSize: 52,
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
            color: "var(--t1)",
            marginBottom: 16,
            maxWidth: 600,
          }}
        >
          Feed your AI{" "}
          <span
            className="font-display"
            style={{
              background: "var(--gradient-hero)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontStyle: "italic",
              fontSize: "1.05em",
            }}
          >
            superpowers.
          </span>
        </h1>

        <p
          className="hero-enter hero-enter-3"
          style={{
            fontSize: 18,
            color: "var(--t2)",
            lineHeight: 1.55,
            maxWidth: 480,
            marginBottom: 28,
          }}
        >
          Taste-tested prompts and skills for Claude, ChatGPT, Gemini, and more.
          No malware. No garbage. Just the good stuff.
        </p>

        <div className="hero-enter hero-enter-4 flex items-center flex-wrap" style={{ gap: 12 }}>
          <Link
            href="/menu"
            className="feed-btn btn-bouncy"
            style={{
              padding: "16px 36px",
              fontSize: 17,
              minHeight: 52,
              textDecoration: "none",
            }}
          >
            Browse the Menu
          </Link>
          <Link
            href="/about"
            className="btn-bouncy"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 600,
              borderRadius: 100,
              background: "none",
              color: "var(--pink-text)",
              boxShadow: "inset 0 0 0 2px var(--sep-heavy)",
              padding: "16px 36px",
              fontSize: 17,
              minHeight: 52,
              textDecoration: "none",
              transition: "all 0.15s ease",
            }}
          >
            Why Mochi?
          </Link>
        </div>
      </div>
    </section>
  );
}
