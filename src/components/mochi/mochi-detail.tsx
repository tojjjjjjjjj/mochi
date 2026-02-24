"use client";

import FlavorBadge from "@/components/ui/flavor-badge";
import AgentBadge from "@/components/ui/agent-badge";
import FeedButton from "@/components/ui/feed-button";
import type { Mochi } from "@/types/database";

type MochiDetailProps = {
  mochi: Mochi;
};

/**
 * Highlight text in [BRACKETS] with pink color
 */
function highlightBrackets(text: string) {
  const parts = text.split(/(\[[^\]]*\])/g);
  return parts.map((part, i) => {
    if (part.startsWith("[") && part.endsWith("]")) {
      return (
        <span key={i} style={{ color: "var(--brand-pink)", fontWeight: 600 }}>
          {part}
        </span>
      );
    }
    return part;
  });
}

export default function MochiDetail({ mochi }: MochiDetailProps) {
  return (
    <div
      style={{
        maxWidth: 980,
        margin: "0 auto",
        padding: "48px 20px 80px",
      }}
    >
      {/* Back link */}
      <div style={{ marginBottom: 32 }}>
        <span
          style={{
            fontSize: 14,
            color: "var(--label-tertiary)",
            marginRight: 8,
          }}
        >
          &larr; Back to
        </span>
        <FlavorBadge flavor={mochi.flavor} size="sm" />
      </div>

      {/* Title */}
      <h1
        style={{
          fontSize: "clamp(32px, 5vw, 48px)",
          fontWeight: 800,
          letterSpacing: "-0.035em",
          color: "var(--label-primary)",
          lineHeight: 1.1,
          marginBottom: 12,
        }}
      >
        {mochi.title}
      </h1>

      {/* Tagline */}
      <p
        style={{
          fontSize: 21,
          fontWeight: 500,
          color: "var(--label-secondary)",
          lineHeight: 1.47,
          marginBottom: 24,
        }}
      >
        {mochi.tagline}
      </p>

      {/* Metadata row */}
      <div
        className="flex flex-wrap items-center"
        style={{ gap: 10, marginBottom: 12 }}
      >
        <FlavorBadge flavor={mochi.flavor} />

        {mochi.compatible_with.map((agentId) => (
          <AgentBadge key={agentId} agentId={agentId} />
        ))}

        <span
          style={{
            fontSize: 14,
            fontWeight: 500,
            color: "var(--label-tertiary)",
          }}
        >
          &#x1F361; {mochi.feed_count.toLocaleString()} fed
        </span>
      </div>

      {/* House Special badge */}
      {mochi.is_house_special && (
        <div style={{ marginBottom: 24 }}>
          <span
            className="inline-flex items-center gap-1"
            style={{
              padding: "4px 14px",
              borderRadius: "9999px",
              fontSize: 13,
              fontWeight: 600,
              backgroundColor: "#FFFCEB",
              color: "#D4A017",
              border: "1px solid #FFE066",
            }}
          >
            <span aria-hidden="true">&#9733;</span> House Special
          </span>
        </div>
      )}

      {/* Feed Button */}
      <div style={{ marginBottom: 48 }}>
        <FeedButton
          content={mochi.content}
          type={mochi.type}
          slug={mochi.slug}
        />
      </div>

      {/* Content section */}
      <div>
        <h2
          style={{
            fontSize: 22,
            fontWeight: 700,
            color: "var(--label-primary)",
            marginBottom: 16,
          }}
        >
          {mochi.type === "prompt" ? "The Prompt" : "The Skill"}
        </h2>

        <pre
          style={{
            backgroundColor: "var(--bg-secondary)",
            borderRadius: "var(--radius-lg)",
            padding: 32,
            fontFamily:
              '"JetBrains Mono", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace',
            fontSize: 14,
            lineHeight: 1.6,
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
            color: "var(--label-primary)",
            overflowX: "auto",
          }}
        >
          {highlightBrackets(mochi.content)}
        </pre>
      </div>

      {/* Preview description */}
      {mochi.preview_description && (
        <div style={{ marginTop: 48 }}>
          <h2
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: "var(--label-primary)",
              marginBottom: 16,
            }}
          >
            About this {mochi.type}
          </h2>
          <p
            style={{
              fontSize: 17,
              color: "var(--label-secondary)",
              lineHeight: 1.6,
            }}
          >
            {mochi.preview_description}
          </p>
        </div>
      )}
    </div>
  );
}
