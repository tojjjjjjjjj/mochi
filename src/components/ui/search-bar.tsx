"use client";

import { useState, useEffect, useRef, useCallback } from "react";

type SearchBarProps = {
  onSearch: (query: string) => void;
  placeholder?: string;
};

export default function SearchBar({
  onSearch,
  placeholder = "Search the menu...",
}: SearchBarProps) {
  const [value, setValue] = useState("");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const debouncedSearch = useCallback(
    (query: string) => {
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        onSearch(query);
      }, 300);
    },
    [onSearch]
  );

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    debouncedSearch(newValue);
  };

  const handleClear = () => {
    setValue("");
    onSearch("");
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  return (
    <div className="relative w-full max-w-md">
      {/* Search icon */}
      <svg
        className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4"
        style={{ color: "var(--label-tertiary)" }}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>

      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        style={{
          width: "100%",
          paddingLeft: 44,
          paddingRight: 44,
          paddingTop: 12,
          paddingBottom: 12,
          borderRadius: "9999px",
          backgroundColor: "var(--bg-secondary)",
          border: "1px solid rgba(60, 60, 67, 0.06)",
          fontSize: 15,
          color: "var(--label-primary)",
          outline: "none",
          boxShadow: "var(--elevation-1)",
          minHeight: 44,
        }}
      />

      {/* Clear button */}
      {value && (
        <button
          onClick={handleClear}
          className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer"
          aria-label="Clear search"
          style={{
            width: 24,
            height: 24,
            borderRadius: "9999px",
            backgroundColor: "var(--bg-secondary)",
            color: "var(--label-tertiary)",
            border: "none",
          }}
        >
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
