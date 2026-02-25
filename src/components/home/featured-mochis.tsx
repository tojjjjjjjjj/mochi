"use client";

import Link from "next/link";
import MochiCard from "@/components/ui/mochi-card";
import { useScrollReveal } from "@/lib/use-scroll-reveal";
import type { Mochi } from "@/types/database";

type FeaturedMochisProps = { hottest: Mochi[]; houseSpecials: Mochi[]; fresh: Mochi[] };

type SectionStyle = {
  icon: string;
  eyebrow: string;
  title: string;
  bg?: string;
  borderTop?: string;
};

const SECTION_STYLES: Record<string, SectionStyle> = {
  hottest: {
    icon: "\uD83D\uDD25",
    eyebrow: "Most Popular",
    title: "Trending Right Now",
  },
  houseSpecials: {
    icon: "\u2B50",
    eyebrow: "Curated by Us",
    title: "House Specials",
    bg: "var(--bg-warm)",
  },
  fresh: {
    icon: "\u2728",
    eyebrow: "Just Added",
    title: "Fresh Today",
  },
};

function Section({ sectionKey, mochis, browseHref }: { sectionKey: string; mochis: Mochi[]; browseHref: string }) {
  const ref = useScrollReveal<HTMLDivElement>();
  const style = SECTION_STYLES[sectionKey];
  if (!style || mochis.length === 0) return null;

  return (
    <div
      ref={ref}
      className="scroll-reveal"
      style={{
        padding: style.bg ? "32px 0 40px" : "16px 0 32px",
        background: style.bg,
        borderTop: style.bg ? "0.5px solid var(--sep)" : undefined,
        borderBottom: style.bg ? "0.5px solid var(--sep)" : undefined,
        marginLeft: style.bg ? -32 : 0,
        marginRight: style.bg ? -32 : 0,
        paddingLeft: style.bg ? 32 : 0,
        paddingRight: style.bg ? 32 : 0,
      }}
    >
      <div className="flex items-baseline justify-between" style={{ marginBottom: 20 }}>
        <div>
          <p style={{ fontSize: 13, fontWeight: 600, color: "var(--t3)", textTransform: "uppercase", letterSpacing: "0.02em", marginBottom: 6 }}>
            {style.icon} {style.eyebrow}
          </p>
          <h2 className="font-display" style={{ fontSize: 28, fontWeight: 400, letterSpacing: "-0.02em", color: "var(--t1)", fontStyle: "italic" }}>
            {style.title}
          </h2>
        </div>
        <Link href={browseHref} style={{ fontSize: 15, fontWeight: 600, color: "var(--pink-text)", padding: "10px 4px", minHeight: 44, display: "flex", alignItems: "center", textDecoration: "none", whiteSpace: "nowrap" }}>
          See All &rarr;
        </Link>
      </div>
      <div className="card-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
        {mochis.map((mochi, i) => (
          <div key={mochi.id} className="stagger-child" style={{ opacity: 0, animation: `hero-fade-up var(--t-spring) var(--ease-spring) forwards`, animationDelay: `${i * 60}ms` }}>
            <MochiCard mochi={mochi} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function FeaturedMochis({ hottest, houseSpecials, fresh }: FeaturedMochisProps) {
  return (
    <section style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
      <Section sectionKey="hottest" mochis={hottest} browseHref="/menu" />
      <Section sectionKey="houseSpecials" mochis={houseSpecials} browseHref="/menu" />
      <Section sectionKey="fresh" mochis={fresh} browseHref="/menu" />
    </section>
  );
}
