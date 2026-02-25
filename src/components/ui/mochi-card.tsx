"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/toast";
import { useLunchbox } from "@/lib/use-lunchbox";
import { supabase } from "@/lib/supabase";
import type { Mochi } from "@/types/database";
import { FLAVORS, AGENTS } from "@/lib/constants";

type MochiCardProps = { mochi: Mochi };

export default function MochiCard({ mochi }: MochiCardProps) {
  const router = useRouter();
  const { showToast } = useToast();
  const { isInLunchbox, toggle: toggleLunchbox } = useLunchbox();
  const heartRef = useRef<HTMLButtonElement>(null);
  const flavor = FLAVORS.find((f) => f.slug === mochi.flavor);
  const compatibleAgents = AGENTS.filter((a) => mochi.compatible_with.includes(a.id));

  const handleCardClick = () => {
    router.push(`/mochi/${mochi.slug}`);
  };

  const handleFeed = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(mochi.content);
      showToast("Copied! Paste into your AI");
    } catch {
      showToast("Couldn't copy — try manually!");
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (supabase.rpc as any)("increment_feed_count", { mochi_slug: mochi.slug }).then();
  };

  const saved = isInLunchbox(mochi.slug);
  const handleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation();
    const added = toggleLunchbox(mochi.slug);
    showToast(added ? "Added to your Lunchbox!" : "Removed from Lunchbox");
    if (heartRef.current) {
      heartRef.current.classList.remove("heart-pop");
      void heartRef.current.offsetWidth;
      heartRef.current.classList.add("heart-pop");
    }
  };

  const heroBg = flavor
    ? `linear-gradient(135deg, ${flavor.bgLight}, ${flavor.color}18)`
    : "linear-gradient(135deg, var(--bg2), var(--bg3))";

  return (
    <article
      className="mochi-card"
      onClick={handleCardClick}
      role="link"
      tabIndex={0}
      aria-label={`${mochi.title} — ${mochi.tagline}`}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); handleCardClick(); } }}
      style={{ display: "flex", flexDirection: "column", height: "100%" }}
    >
      {/* Hero */}
      <div style={{ height: 140, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 48, position: "relative", background: heroBg }}>
        <button
          ref={heartRef}
          onClick={handleBookmark}
          aria-label={saved ? "Remove from Lunchbox" : "Save to Lunchbox"}
          aria-pressed={saved}
          className="cursor-pointer"
          style={{
            position: "absolute", top: 8, left: 8,
            width: 44, height: 44, borderRadius: 12,
            background: "rgba(255,255,255,0.85)", backdropFilter: "blur(8px)",
            border: "none", display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 17, zIndex: 2,
            transition: "transform var(--t-fast) ease",
          }}
        >
          {saved ? "\u2764\uFE0F" : "\uD83E\uDD0D"}
        </button>
        <span aria-hidden="true" style={{ transition: "transform var(--t-normal) var(--ease-spring)" }}>{mochi.flavor_emoji}</span>
        <span style={{
          position: "absolute", top: 12, right: 12,
          padding: "5px 12px", borderRadius: 100, fontSize: 12, fontWeight: 700,
          background: "rgba(255,255,255,0.92)", backdropFilter: "blur(8px)",
          color: mochi.is_house_special ? "var(--warning)" : "var(--success)",
        }}>
          {mochi.is_house_special ? "\u2B50 Chef\u2019s Pick" : "\u2713 Taste-tested"}
        </span>
      </div>

      {/* Body */}
      <div style={{ padding: "16px 20px 18px", flex: 1, display: "flex", flexDirection: "column" }}>
        <h3 style={{
          fontWeight: 700, fontSize: 18, letterSpacing: "-0.02em", lineHeight: 1.3,
          color: "var(--t1)", overflow: "hidden", textOverflow: "ellipsis",
          whiteSpace: "nowrap", marginBottom: 4,
        }}>
          {mochi.title}
        </h3>
        <p style={{
          fontSize: 14, color: "var(--t2)",
          display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical",
          overflow: "hidden", lineHeight: 1.45, marginBottom: 14,
        }}>
          {mochi.tagline}
        </p>

        <div className="flex items-center justify-between" style={{ marginTop: "auto" }}>
          <div className="flex items-center" style={{ gap: 4 }}>
            {compatibleAgents.map((agent) => (
              <span
                key={agent.id}
                title={agent.name}
                aria-label={agent.name}
                style={{
                  width: 22, height: 22, borderRadius: 6,
                  backgroundColor: agent.squareColor, color: "#FFF",
                  fontSize: 10, fontWeight: 800,
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  lineHeight: 1,
                }}
              >
                {agent.letter}
              </span>
            ))}
            <span style={{ fontSize: 13, fontWeight: 500, color: "var(--t3)", marginLeft: 6 }}>
              {mochi.feed_count.toLocaleString()} fed
            </span>
          </div>
        </div>
      </div>

      {/* Feed button */}
      <button
        onClick={handleFeed}
        className="feed-btn btn-bouncy cursor-pointer"
        aria-label={`Copy ${mochi.type === "prompt" ? "prompt" : "skill"}: ${mochi.title}`}
        style={{
          position: "absolute", bottom: 14, right: 14,
          padding: "10px 18px", minHeight: 44, fontSize: 13,
        }}
      >
        Feed
      </button>
    </article>
  );
}
