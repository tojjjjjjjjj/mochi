"use client";

import Link from "next/link";
import { FLAVORS } from "@/lib/constants";
import { useScrollReveal } from "@/lib/use-scroll-reveal";

export function FlavorGrid() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="scroll-reveal" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px 80px" }}>
      <div style={{ paddingTop: 40, marginBottom: 20 }}>
        <p style={{ fontSize: 13, fontWeight: 600, color: "var(--t3)", textTransform: "uppercase", letterSpacing: "0.02em", marginBottom: 6 }}>
          Categories
        </p>
        <h2 className="font-display" style={{ fontSize: 28, fontWeight: 400, letterSpacing: "-0.02em", color: "var(--t1)", fontStyle: "italic" }}>
          Browse by Flavor
        </h2>
      </div>
      <div className="card-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 20 }}>
        {FLAVORS.map((flavor, i) => (
          <Link
            key={flavor.slug}
            href={`/flavor/${flavor.slug}`}
            className="block stagger-child"
            style={{
              textDecoration: "none",
              opacity: 0,
              animation: `hero-fade-up var(--t-spring) var(--ease-spring) forwards`,
              animationDelay: `${i * 60}ms`,
            }}
          >
            <div className="mochi-card" style={{ padding: 24, height: "100%" }}>
              <div className="flex items-center" style={{ gap: 12, marginBottom: 10 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: flavor.bgLight, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>
                  <span aria-hidden="true">{flavor.emoji}</span>
                </div>
                <span style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.02em", color: "var(--t1)" }}>{flavor.name}</span>
              </div>
              <p style={{ fontSize: 15, color: "var(--t2)", lineHeight: 1.47 }}>{flavor.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
