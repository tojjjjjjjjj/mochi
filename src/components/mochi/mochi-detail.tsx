"use client";

import { useState } from "react";
import Link from "next/link";
import FlavorBadge from "@/components/ui/flavor-badge";
import AgentBadge from "@/components/ui/agent-badge";
import PlatformInstallFlow from "@/components/mochi/platform-install-flow";
import type { Mochi } from "@/types/database";
import { FLAVORS } from "@/lib/constants";

type MochiDetailProps = { mochi: Mochi };

function highlightBrackets(text: string) {
  const parts = text.split(/(\[[^\]]*\])/g);
  return parts.map((part, i) => {
    if (part.startsWith("[") && part.endsWith("]")) {
      return <span key={i} style={{ color: "var(--pink)", fontWeight: 600 }}>{part}</span>;
    }
    return part;
  });
}

export default function MochiDetail({ mochi }: MochiDetailProps) {
  const [showFull, setShowFull] = useState(false);
  const flavor = FLAVORS.find((f) => f.slug === mochi.flavor);
  const contentLines = mochi.content.split("\n");
  const isLong = contentLines.length > 12;
  const displayContent = isLong && !showFull ? contentLines.slice(0, 12).join("\n") + "\n..." : mochi.content;
  const updatedDate = new Date(mochi.updated_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px 60px" }}>
      <nav aria-label="Breadcrumb" className="flex items-center flex-wrap" style={{ gap: 6, padding: "16px 0 8px", fontSize: 14, color: "var(--t3)" }}>
        <Link href="/menu" style={{ color: "var(--pink-text)", fontWeight: 500, textDecoration: "none", padding: "4px 0" }}>Menu</Link>
        <span style={{ color: "var(--t4)" }} aria-hidden="true">/</span>
        <Link href={`/flavor/${mochi.flavor}`} style={{ color: "var(--pink-text)", fontWeight: 500, textDecoration: "none", padding: "4px 0" }}>{flavor?.name ?? mochi.flavor}</Link>
        <span style={{ color: "var(--t4)" }} aria-hidden="true">/</span>
        <span style={{ color: "var(--t2)", fontWeight: 500 }}>{mochi.title}</span>
      </nav>

      <div className="detail-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 48, padding: "24px 0" }}>
        <div style={{ minWidth: 0 }}>
          <div style={{ height: 280, borderRadius: 24, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 80, marginBottom: 28, background: flavor ? `linear-gradient(135deg, ${flavor.bgLight}, ${flavor.color}22)` : "var(--bg2)" }}>
            <span aria-hidden="true">{mochi.flavor_emoji}</span>
          </div>

          <h1 style={{ fontSize: 32, fontWeight: 800, letterSpacing: "-0.03em", color: "var(--t1)", marginBottom: 8 }}>{mochi.title}</h1>
          <p style={{ fontSize: 17, color: "var(--t2)", lineHeight: 1.5, marginBottom: 20, maxWidth: 580 }}>{mochi.tagline}</p>

          <div className="flex flex-wrap items-center" style={{ gap: 8, marginBottom: 24 }}>
            <FlavorBadge flavor={mochi.flavor} size="sm" />
            {mochi.is_house_special && <span style={{ padding: "6px 14px", borderRadius: 100, fontSize: 13, fontWeight: 600, background: "#FFFCEB", color: "#D4A017" }}>&#9733; Chef&apos;s Pick</span>}
            <span style={{ padding: "6px 14px", borderRadius: 100, fontSize: 13, fontWeight: 600, background: "var(--bg2)", color: "var(--t2)" }}>{mochi.type === "prompt" ? "Prompt" : "Skill"}</span>
          </div>

          <h2 style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.01em", marginBottom: 12 }}>{mochi.type === "prompt" ? "The Prompt" : "The Skill"}</h2>

          <div className="det-code-block" style={{ position: "relative", background: "var(--t1)", borderRadius: 16, padding: 20, maxHeight: showFull ? "none" : 180, overflow: "hidden" }}>
            <pre style={{ fontFamily: "var(--mono)", fontSize: 13, color: "rgba(255,255,255,0.7)", lineHeight: 1.6, whiteSpace: "pre-wrap", wordBreak: "break-word", margin: 0 }}>
              {highlightBrackets(displayContent)}
            </pre>
            {isLong && !showFull && <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 60, background: "linear-gradient(transparent, var(--t1))" }} />}
          </div>

          {isLong && (
            <button onClick={() => setShowFull(!showFull)} className="cursor-pointer" style={{ fontSize: 14, fontWeight: 600, color: "var(--pink-text)", padding: "12px 0", minHeight: 44, display: "inline-flex", alignItems: "center", background: "none", border: "none" }}>
              {showFull ? "Show less" : "Show more"}
            </button>
          )}

          {mochi.preview_description && (
            <div style={{ marginTop: 28 }}>
              <h2 style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.01em", marginBottom: 12 }}>About this {mochi.type}</h2>
              <p style={{ fontSize: 16, color: "var(--t2)", lineHeight: 1.6 }}>{mochi.preview_description}</p>
            </div>
          )}

          <div style={{ marginTop: 28, background: "var(--bg2)", borderRadius: 16, padding: 20 }}>
            <p style={{ fontWeight: 600, color: "var(--success)", marginBottom: 8, fontSize: 15 }}>&#x2713; Taste-test checklist</p>
            <div style={{ fontSize: 14, color: "var(--t2)", lineHeight: 1.7 }}>Reviewed for quality &bull; Tested for safety &bull; No malicious content &bull; Works as described</div>
          </div>
        </div>

        <div>
          <div className="md:sticky" style={{ top: 80, alignSelf: "start" }}>
            <div style={{ background: "var(--bg)", borderRadius: 20, padding: 28, boxShadow: "0 2px 12px rgba(0,0,0,0.06), 0 8px 28px rgba(0,0,0,0.04)", marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginBottom: 24 }}>
                {[{ value: mochi.feed_count.toLocaleString(), label: "Fed" }, { value: "v1", label: "Version" }, { value: updatedDate, label: "Updated" }].map((stat) => (
                  <div key={stat.label} style={{ textAlign: "center", padding: "14px 8px", background: "var(--bg2)", borderRadius: 14 }}>
                    <p style={{ fontSize: stat.label === "Updated" ? 14 : 24, fontWeight: 800, letterSpacing: "-0.02em", color: "var(--t1)", lineHeight: 1 }}>{stat.value}</p>
                    <p style={{ fontSize: 12, color: "var(--t3)", marginTop: 2, fontWeight: 500 }}>{stat.label}</p>
                  </div>
                ))}
              </div>

              <div style={{ marginBottom: 24 }}>
                <p style={{ fontSize: 13, fontWeight: 600, color: "var(--t3)", textTransform: "uppercase", letterSpacing: "0.02em", marginBottom: 10 }}>Works with</p>
                <div className="flex flex-wrap items-center" style={{ gap: 8 }}>
                  {mochi.compatible_with.map((agentId) => (<AgentBadge key={agentId} agentId={agentId} />))}
                </div>
              </div>

              <PlatformInstallFlow content={mochi.content} type={mochi.type} slug={mochi.slug} compatibleWith={mochi.compatible_with} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
