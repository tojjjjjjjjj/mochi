"use client";

import Link from "next/link";
import { useToast } from "@/components/ui/toast";
import { useLunchbox } from "@/lib/use-lunchbox";
import { supabase } from "@/lib/supabase";
import type { Mochi } from "@/types/database";
import { FLAVORS, AGENTS } from "@/lib/constants";

type MochiCardProps = {
  mochi: Mochi;
};

export default function MochiCard({ mochi }: MochiCardProps) {
  const { showToast } = useToast();
  const { isInLunchbox, toggle: toggleLunchbox } = useLunchbox();
  const flavor = FLAVORS.find((f) => f.slug === mochi.flavor);
  const compatibleAgents = AGENTS.filter((a) =>
    mochi.compatible_with.includes(a.id)
  );

  const handleFeed = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(mochi.content);
      showToast("Copied! Paste into your AI 🍡");
    } catch {
      showToast("Couldn't copy — try manually!");
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (supabase.rpc as any)("increment_feed_count", { mochi_slug: mochi.slug }).then();
  };

  const saved = isInLunchbox(mochi.slug);

  const handleBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const added = toggleLunchbox(mochi.slug);
    showToast(added ? "Added to your Lunchbox!" : "Removed from Lunchbox");
  };

  const heroGradient = flavor
    ? `linear-gradient(135deg, ${flavor.bgLight}, ${flavor.color}18)`
    : "linear-gradient(135deg, var(--bg2), var(--bg3))";

  return (
    <Link href={`/mochi/${mochi.slug}`} className="block" style={{ textDecoration: "none" }}>
      <div
        className="mochi-card relative cursor-pointer"
        style={{
          borderRadius: "var(--radius-xl)",
          overflow: "hidden",
          boxShadow: "var(--elevation-1)",
          background: "var(--bg)",
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        {/* Hero area */}
        <div
          style={{
            height: 140,
            background: heroGradient,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* Bookmark */}
          <button
            onClick={handleBookmark}
            aria-label={saved ? "Remove from Lunchbox" : "Save to Lunchbox"}
            className="cursor-pointer"
            style={{
              position: "absolute",
              top: 10,
              left: 10,
              width: 32,
              height: 32,
              borderRadius: 8,
              background: "rgba(255,255,255,0.85)",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 16,
              zIndex: 2,
            }}
          >
            {saved ? "❤️" : "🤍"}
          </button>

          <span style={{ fontSize: 48 }} aria-hidden="true">
            {mochi.flavor_emoji}
          </span>

          {/* Badge */}
          <span
            style={{
              position: "absolute",
              top: 12,
              right: 12,
              padding: "3px 10px",
              borderRadius: "9999px",
              fontSize: 11,
              fontWeight: 600,
              backgroundColor: mochi.is_house_special ? "#FFFCEB" : "var(--bg)",
              color: mochi.is_house_special ? "#D4A017" : "var(--t3)",
              border: mochi.is_house_special
                ? "1px solid #FFE066"
                : "1px solid var(--sep)",
            }}
          >
            {mochi.is_house_special ? "⭐ Chef's Pick" : "Taste-tested"}
          </span>
        </div>

        {/* Body */}
        <div
          style={{
            padding: "16px 20px 16px",
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h3
            style={{
              fontWeight: 700,
              fontSize: 18,
              lineHeight: 1.3,
              color: "var(--t1)",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              marginBottom: 4,
            }}
          >
            {mochi.title}
          </h3>
          <p
            style={{
              fontSize: 14,
              fontWeight: 400,
              color: "var(--t2)",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              lineHeight: 1.47,
              marginBottom: 16,
            }}
          >
            {mochi.tagline}
          </p>

          {/* Footer: agent dots + fed stat + feed button */}
          <div
            className="flex items-center justify-between"
            style={{
              marginTop: "auto",
              paddingTop: 12,
              borderTop: "1px solid var(--sep)",
            }}
          >
            <div className="flex items-center" style={{ gap: 6 }}>
              {compatibleAgents.map((agent) => (
                <span
                  key={agent.id}
                  title={agent.name}
                  aria-label={agent.name}
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: 6,
                    backgroundColor: agent.squareColor,
                    color: "#FFFFFF",
                    fontSize: 10,
                    fontWeight: 700,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    lineHeight: 1,
                  }}
                >
                  {agent.letter}
                </span>
              ))}
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 500,
                  color: "var(--t3)",
                  marginLeft: 4,
                }}
              >
                {mochi.feed_count.toLocaleString()} fed
              </span>
            </div>

            {/* Inline feed button */}
            <button
              onClick={handleFeed}
              className="btn-bouncy cursor-pointer"
              aria-label={`Copy ${mochi.type === "prompt" ? "prompt" : "skill"}: ${mochi.title}`}
              style={{
                padding: "5px 14px",
                borderRadius: "9999px",
                fontSize: 12,
                fontWeight: 600,
                background: "var(--gradient-primary)",
                color: "#FFFFFF",
                border: "none",
                minHeight: 30,
              }}
            >
              Feed
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
