"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import MochiCard from "@/components/ui/mochi-card";
import type { Mochi } from "@/types/database";
import type { FlavorType } from "@/lib/constants";

type MochiGridProps = {
  mochis: Mochi[];
  initialFlavor?: string;
  initialSearch?: string;
  flavors?: readonly FlavorType[];
};

export default function MochiGrid(props: MochiGridProps) {
  return (
    <Suspense fallback={<div style={{ padding: "40px 20px", textAlign: "center", color: "var(--t3)" }}>Loading...</div>}>
      <MochiGridInner {...props} />
    </Suspense>
  );
}

const FILTER_OPTIONS = ["All", "Prompts", "Skills"] as const;
type FilterType = (typeof FILTER_OPTIONS)[number];

function MochiGridInner({ mochis, initialFlavor, initialSearch, flavors }: MochiGridProps) {
  const searchParams = useSearchParams();
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");
  const [activeFlavor, setActiveFlavor] = useState<string | null>(
    initialFlavor ?? null
  );

  const searchTerm = (initialSearch ?? searchParams.get("q") ?? "").toLowerCase();

  const filteredMochis = mochis.filter((mochi) => {
    if (activeFilter === "Prompts" && mochi.type !== "prompt") return false;
    if (activeFilter === "Skills" && mochi.type !== "skill") return false;
    if (activeFlavor && mochi.flavor !== activeFlavor) return false;

    if (searchTerm) {
      const searchable = [
        mochi.title,
        mochi.description,
        mochi.tagline,
        ...(mochi.tags ?? []),
      ]
        .join(" ")
        .toLowerCase();
      return searchable.includes(searchTerm);
    }

    return true;
  });

  return (
    <div
      style={{
        maxWidth: 1120,
        margin: "0 auto",
        padding: "40px 20px 80px",
      }}
    >
      {/* Flavor filter pills */}
      {flavors && flavors.length > 0 && (
        <div
          className="flex flex-wrap items-center"
          style={{ gap: 8, marginBottom: 20 }}
        >
          <button
            onClick={() => setActiveFlavor(null)}
            aria-pressed={activeFlavor === null}
            className="btn-bouncy cursor-pointer"
            style={{
              padding: "6px 16px",
              borderRadius: "9999px",
              fontSize: 14,
              fontWeight: 600,
              border: "none",
              minHeight: 36,
              background: activeFlavor === null
                ? "var(--gradient-primary)"
                : "var(--bg2)",
              color: activeFlavor === null
                ? "#FFFFFF"
                : "var(--t2)",
              boxShadow: activeFlavor === null
                ? "0 2px 8px rgba(255, 107, 157, 0.2)"
                : "none",
            }}
          >
            All Flavors
          </button>
          {flavors.map((flavor) => (
            <button
              key={flavor.slug}
              onClick={() =>
                setActiveFlavor(activeFlavor === flavor.slug ? null : flavor.slug)
              }
              aria-pressed={activeFlavor === flavor.slug}
              className="btn-bouncy cursor-pointer"
              style={{
                padding: "6px 16px",
                borderRadius: "9999px",
                fontSize: 14,
                fontWeight: 600,
                border: "none",
                minHeight: 36,
                background:
                  activeFlavor === flavor.slug
                    ? flavor.bgLight
                    : "var(--bg2)",
                color:
                  activeFlavor === flavor.slug
                    ? flavor.color
                    : "var(--t2)",
                boxShadow:
                  activeFlavor === flavor.slug
                    ? `0 2px 8px ${flavor.color}33`
                    : "none",
              }}
            >
              {flavor.emoji} {flavor.name}
            </button>
          ))}
        </div>
      )}

      {/* Type filter pills */}
      <div
        className="flex items-center"
        style={{ gap: 8, marginBottom: 32 }}
      >
        {FILTER_OPTIONS.map((option) => (
          <button
            key={option}
            onClick={() => setActiveFilter(option)}
            aria-pressed={activeFilter === option}
            className="btn-bouncy cursor-pointer"
            style={{
              padding: "6px 18px",
              borderRadius: "9999px",
              fontSize: 14,
              fontWeight: 600,
              border: "none",
              minHeight: 36,
              background:
                activeFilter === option
                  ? "var(--gradient-primary)"
                  : "var(--bg2)",
              color:
                activeFilter === option
                  ? "#FFFFFF"
                  : "var(--t2)",
              boxShadow:
                activeFilter === option
                  ? "0 2px 8px rgba(255, 107, 157, 0.2)"
                  : "none",
            }}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filteredMochis.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {filteredMochis.map((mochi) => (
            <MochiCard key={mochi.id} mochi={mochi} />
          ))}
        </div>
      ) : (
        <div
          className="flex flex-col items-center justify-center"
          style={{
            padding: "80px 20px",
            textAlign: "center",
          }}
        >
          <span style={{ fontSize: 48, marginBottom: 16 }} aria-hidden="true">
            &#x1F361;
          </span>
          <p
            style={{
              fontSize: 19,
              fontWeight: 600,
              color: "var(--t2)",
              marginBottom: 8,
            }}
          >
            No mochis found
          </p>
          <p
            style={{
              fontSize: 15,
              color: "var(--t3)",
            }}
          >
            Try a different search or filter.
          </p>
        </div>
      )}
    </div>
  );
}
