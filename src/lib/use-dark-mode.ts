"use client";

import { useState, useEffect, useCallback, useRef } from "react";

const STORAGE_KEY = "mochi-dark-mode";

export function useDarkMode() {
  const [isDark, setIsDark] = useState(false);
  const hydrated = useRef(false);

  useEffect(() => {
    if (!hydrated.current) {
      hydrated.current = true;
      const stored = localStorage.getItem(STORAGE_KEY);
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const dark = stored === "true" || (stored === null && prefersDark);
      setIsDark(dark); // eslint-disable-line react-hooks/set-state-in-effect
      document.documentElement.classList.toggle("dark", dark);
    }
  }, []);

  const toggle = useCallback(() => {
    setIsDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem(STORAGE_KEY, String(next));
      return next;
    });
  }, []);

  return { isDark, toggle };
}
