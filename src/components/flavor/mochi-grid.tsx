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
        maxWidth: 1200,
        margin: "0 auto",
        padding: "0 32px 80px",
      }}
    >
      {/* Flavor filter pills */}
      {flavors && flavors.length > 0 && (
        <div
          className="flex flex-wrap items-center"
          style={{ gap: 8, marginBottom: 12 }}
        >
          <button
            onClick={() => setActiveFlavor(null)}
            aria-pressed={activeFlavor === null}
            className={`filter-pill cursor-pointer ${activeFlavor === null ? "active" : ""}`}
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
              className={`filter-pill cursor-pointer ${activeFlavor === flavor.slug ? "active" : ""}`}
              style={
                activeFlavor === flavor.slug
                  ? { background: flavor.color, color: "#FFFFFF" }
                  : undefined
              }
            >
              {flavor.emoji} {flavor.name}
            </button>
          ))}
        </div>
      )}

      {/* Type filter pills */}
      <div
        className="flex items-center"
        style={{ gap: 8, marginBottom: 24 }}
      >
        {FILTER_OPTIONS.map((option) => (
          <button
            key={option}
            onClick={() => setActiveFilter(option)}
            aria-pressed={activeFilter === option}
            className={`filter-pill cursor-pointer ${activeFilter === option ? "active" : ""}`}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filteredMochis.length > 0 ? (
        <div
          className="card-grid"
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
          style={{
            textAlign: "center",
            padding: "64px 20px",
          }}
        >
          <p style={{ fontSize: 48, marginBottom: 12 }} aria-hidden="true">
            &#x1F361;
          </p>
          <p
            style={{
              fontSize: 18,
              fontWeight: 700,
              marginBottom: 6,
              color: "var(--t1)",
            }}
          >
            No mochis found
          </p>
          <p
            style={{
              fontSize: 15,
              color: "var(--t2)",
            }}
          >
            Try a different search or filter.
          </p>
        </div>
      )}
    </div>
  );
}
