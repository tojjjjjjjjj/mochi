"use client";

import { useState, useCallback } from "react";
import MochiCard from "@/components/ui/mochi-card";
import SearchBar from "@/components/ui/search-bar";
import type { Mochi } from "@/types/database";

type MochiGridProps = {
  mochis: Mochi[];
  initialFlavor?: string;
};

const FILTER_OPTIONS = ["All", "Prompts", "Skills"] as const;
type FilterType = (typeof FILTER_OPTIONS)[number];

export default function MochiGrid({ mochis, initialFlavor }: MochiGridProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");

  const handleSearch = useCallback((query: string) => {
    setSearchTerm(query.toLowerCase());
  }, []);

  const filteredMochis = mochis.filter((mochi) => {
    // Type filter
    if (activeFilter === "Prompts" && mochi.type !== "prompt") return false;
    if (activeFilter === "Skills" && mochi.type !== "skill") return false;

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

  // Suppress unused variable warning — initialFlavor is accepted for future use
  void initialFlavor;

  return (
    <div
      style={{
        maxWidth: 1120,
        margin: "0 auto",
        padding: "40px 20px 80px",
      }}
    >
      {/* Controls row */}
      <div
        className="flex flex-col sm:flex-row items-start sm:items-center"
        style={{ gap: 16, marginBottom: 32 }}
      >
        <SearchBar onSearch={handleSearch} placeholder="Search mochis..." />

        {/* Filter pills */}
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
