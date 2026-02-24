"use client";

import { useState, useCallback } from "react";
import MochiCard from "@/components/ui/mochi-card";
import SearchBar from "@/components/ui/search-bar";
import type { Mochi } from "@/types/database";
import type { FlavorType } from "@/lib/constants";

type MochiGridProps = {
  mochis: Mochi[];
  initialFlavor?: string;
  /** When provided, renders flavor filter pills above the type filters */
  flavors?: readonly FlavorType[];
};

const FILTER_OPTIONS = ["All", "Prompts", "Skills"] as const;
type FilterType = (typeof FILTER_OPTIONS)[number];

export default function MochiGrid({ mochis, initialFlavor, flavors }: MochiGridProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");
  const [activeFlavor, setActiveFlavor] = useState<string | null>(
    initialFlavor ?? null
  );

  const handleSearch = useCallback((query: string) => {
    setSearchTerm(query.toLowerCase());
  }, []);

  const filteredMochis = mochis.filter((mochi) => {
    // Type filter
    if (activeFilter === "Prompts" && mochi.type !== "prompt") return false;
    if (activeFilter === "Skills" && mochi.type !== "skill") return false;

    // Flavor filter
    if (activeFlavor && mochi.flavor !== activeFlavor) return false;

    // Search filter
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
            className="btn-bouncy cursor-pointer"
            style={{
              padding: "6px 16px",
              borderRadius: "9999px",
              fontSize: 14,
              fontWeight: 600,
              border: "none",
              minHeight: 36,
              background: activeFlavor === null
                ? "linear-gradient(135deg, #FF6B9D, #FFB088)"
                : "var(--bg-secondary)",
              color: activeFlavor === null
                ? "#FFFFFF"
                : "var(--label-secondary)",
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
                    : "var(--bg-secondary)",
                color:
                  activeFlavor === flavor.slug
                    ? flavor.color
                    : "var(--label-secondary)",
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

      {/* Controls row */}
      <div
        className="flex flex-col sm:flex-row items-start sm:items-center"
        style={{ gap: 16, marginBottom: 32 }}
      >
        <SearchBar onSearch={handleSearch} placeholder="Search mochis..." />

        {/* Type filter pills */}
        <div className="flex items-center" style={{ gap: 8 }}>
          {FILTER_OPTIONS.map((option) => (
            <button
              key={option}
              onClick={() => setActiveFilter(option)}
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
                    ? "linear-gradient(135deg, #FF6B9D, #FFB088)"
                    : "var(--bg-secondary)",
                color:
                  activeFilter === option
                    ? "#FFFFFF"
                    : "var(--label-secondary)",
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
      </div>

      {/* Grid */}
      {filteredMochis.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
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
              color: "var(--label-secondary)",
              marginBottom: 8,
            }}
          >
            No mochis found
          </p>
          <p
            style={{
              fontSize: 15,
              color: "var(--label-tertiary)",
            }}
          >
            Try a different search or filter.
          </p>
        </div>
      )}
    </div>
  );
}
