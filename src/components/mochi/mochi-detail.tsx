"use client";

import { useState } from "react";
import Link from "next/link";
import FlavorBadge from "@/components/ui/flavor-badge";
import AgentBadge from "@/components/ui/agent-badge";
import PlatformInstallFlow from "@/components/mochi/platform-install-flow";
import type { Mochi } from "@/types/database";
import { FLAVORS } from "@/lib/constants";

type MochiDetailProps = {
  mochi: Mochi;
};

function highlightBrackets(text: string) {
  const parts = text.split(/(\[[^\]]*\])/g);
  return parts.map((part, i) => {
    if (part.startsWith("[") && part.endsWith("]")) {
      return (
        <span key={i} style={{ color: "var(--pink)", fontWeight: 600 }}>
          {part}
        </span>
      );
    }
    return part;
  });
}

export default function MochiDetail({ mochi }: MochiDetailProps) {
  const [showFull, setShowFull] = useState(false);
  const flavor = FLAVORS.find((f) => f.slug === mochi.flavor);
  const contentLines = mochi.content.split("\n");
  const isLong = contentLines.length > 20;
  const displayContent = isLong && !showFull
    ? contentLines.slice(0, 20).join("\n") + "\n..."
    : mochi.content;

  const updatedDate = new Date(mochi.updated_at).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div
      style={{
        maxWidth: 1120,
        margin: "0 auto",
        padding: "32px 20px 80px",
      }}
    >
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        style={{ marginBottom: 32 }}
      >
        <ol className="flex items-center flex-wrap" style={{ gap: 8, listStyle: "none", padding: 0, margin: 0 }}>
          <li>
            <Link
              href="/menu"
              style={{
                fontSize: 13,
                fontWeight: 500,
                color: "var(--t3)",
                textDecoration: "none",
              }}
            >
              Menu
            </Link>
          </li>
          <li style={{ color: "var(--t4)", fontSize: 12 }} aria-hidden="true">/</li>
          <li>
            <Link
              href={`/flavor/${mochi.flavor}`}
              style={{
                fontSize: 13,
                fontWeight: 500,
                color: "var(--t3)",
                textDecoration: "none",
              }}
            >
              {flavor?.name ?? mochi.flavor}
            </Link>
          </li>
          <li style={{ color: "var(--t4)", fontSize: 12 }} aria-hidden="true">/</li>
          <li>
            <span
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: "var(--t1)",
              }}
            >
              {mochi.title}
            </span>
          </li>
        </ol>
      </nav>

      {/* 2-column layout */}
      <div
        className="detail-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 40,
        }}
      >
        {/* Left column */}
        <div style={{ minWidth: 0 }}>
          {/* Hero emoji */}
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: 20,
              background: flavor
                ? `linear-gradient(135deg, ${flavor.bgLight}, ${flavor.color}22)`
                : "var(--bg2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
              marginBottom: 24,
            }}
          >
            <span aria-hidden="true">{mochi.flavor_emoji}</span>
          </div>

          {/* Content section */}
          <div>
            <h2
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: "var(--t1)",
                marginBottom: 16,
              }}
            >
              {mochi.type === "prompt" ? "The Prompt" : "The Skill"}
            </h2>

            <pre
              style={{
                backgroundColor: "var(--bg2)",
                borderRadius: "var(--radius-lg)",
                padding: 24,
                fontFamily:
                  '"JetBrains Mono", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace',
                fontSize: 13,
                lineHeight: 1.6,
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
                color: "var(--t1)",
                overflowX: "auto",
                position: "relative",
              }}
            >
              {highlightBrackets(displayContent)}
            </pre>

            {isLong && (
              <button
                onClick={() => setShowFull(!showFull)}
                className="btn-bouncy cursor-pointer"
                style={{
                  marginTop: 12,
                  padding: "8px 20px",
                  borderRadius: "9999px",
                  fontSize: 13,
                  fontWeight: 600,
                  background: "var(--bg2)",
                  color: "var(--t2)",
                  border: "1px solid var(--sep)",
                  minHeight: 36,
                }}
              >
                {showFull ? "Show less" : "Show more"}
              </button>
            )}
          </div>

          {/* Preview description */}
          {mochi.preview_description && (
            <div style={{ marginTop: 40 }}>
              <h2
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "var(--t1)",
                  marginBottom: 12,
                }}
              >
                About this {mochi.type}
              </h2>
              <p
                style={{
                  fontSize: 16,
                  color: "var(--t2)",
                  lineHeight: 1.6,
                }}
              >
                {mochi.preview_description}
              </p>
            </div>
          )}

          {/* Taste test checks */}
          <div style={{ marginTop: 40 }}>
            <h3
              style={{
                fontSize: 15,
                fontWeight: 700,
                color: "var(--t1)",
                marginBottom: 12,
              }}
            >
              Taste-test checklist
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
              {["Reviewed for quality", "Tested for safety", "No malicious content", "Works as described"].map((check) => (
                <li
                  key={check}
                  className="flex items-center"
                  style={{ gap: 8, fontSize: 14, color: "var(--t2)" }}
                >
                  <span style={{ color: "var(--success)", fontSize: 16 }}>&#10003;</span>
                  {check}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right sidebar */}
        <div>
          <div
            className="md:sticky"
            style={{ top: 80 }}
          >
            {/* Title */}
            <h1
              style={{
                fontSize: 28,
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: "var(--t1)",
                lineHeight: 1.15,
                marginBottom: 12,
              }}
            >
              {mochi.title}
            </h1>

            {/* Tagline */}
            <p
              style={{
                fontSize: 16,
                fontWeight: 500,
                color: "var(--t2)",
                lineHeight: 1.47,
                marginBottom: 20,
              }}
            >
              {mochi.tagline}
            </p>

            {/* Badges row */}
            <div
              className="flex flex-wrap items-center"
              style={{ gap: 8, marginBottom: 20 }}
            >
              <FlavorBadge flavor={mochi.flavor} size="sm" />
              {mochi.is_house_special && (
                <span
                  className="inline-flex items-center gap-1"
                  style={{
                    padding: "3px 10px",
                    borderRadius: "9999px",
                    fontSize: 12,
                    fontWeight: 600,
                    backgroundColor: "#FFFCEB",
                    color: "#D4A017",
                    border: "1px solid #FFE066",
                  }}
                >
                  <span aria-hidden="true">&#9733;</span> Chef&apos;s Pick
                </span>
              )}
            </div>

            {/* Stats grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 1,
                background: "var(--sep)",
                borderRadius: "var(--radius-md)",
                overflow: "hidden",
                marginBottom: 20,
              }}
            >
              <div style={{ background: "var(--bg2)", padding: "14px 12px", textAlign: "center" }}>
                <p style={{ fontSize: 20, fontWeight: 800, color: "var(--t1)", lineHeight: 1 }}>
                  {mochi.feed_count.toLocaleString()}
                </p>
                <p style={{ fontSize: 11, fontWeight: 500, color: "var(--t3)", marginTop: 4 }}>Fed</p>
              </div>
              <div style={{ background: "var(--bg2)", padding: "14px 12px", textAlign: "center" }}>
                <p style={{ fontSize: 20, fontWeight: 800, color: "var(--t1)", lineHeight: 1 }}>
                  v1
                </p>
                <p style={{ fontSize: 11, fontWeight: 500, color: "var(--t3)", marginTop: 4 }}>Version</p>
              </div>
              <div style={{ background: "var(--bg2)", padding: "14px 12px", textAlign: "center" }}>
                <p style={{ fontSize: 14, fontWeight: 700, color: "var(--t1)", lineHeight: 1 }}>
                  {updatedDate}
                </p>
                <p style={{ fontSize: 11, fontWeight: 500, color: "var(--t3)", marginTop: 4 }}>Updated</p>
              </div>
            </div>

            {/* Agent dots */}
            <div style={{ marginBottom: 24 }}>
              <p style={{ fontSize: 12, fontWeight: 600, color: "var(--t3)", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Works with
              </p>
              <div className="flex flex-wrap items-center" style={{ gap: 6 }}>
                {mochi.compatible_with.map((agentId) => (
                  <AgentBadge key={agentId} agentId={agentId} />
                ))}
              </div>
            </div>

            {/* Install flow */}
            <PlatformInstallFlow
              content={mochi.content}
              type={mochi.type}
              slug={mochi.slug}
              compatibleWith={mochi.compatible_with}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
