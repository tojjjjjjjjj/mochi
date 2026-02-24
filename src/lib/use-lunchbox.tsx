"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useRef,
  type ReactNode,
} from "react";

const STORAGE_KEY = "mochi-lunchbox";

type LunchboxContextType = {
  items: string[];
  isInLunchbox: (slug: string) => boolean;
  add: (slug: string) => void;
  remove: (slug: string) => void;
  toggle: (slug: string) => boolean;
  count: number;
};

const LunchboxContext = createContext<LunchboxContextType | null>(null);

function readStorage(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function LunchboxProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<string[]>([]);
  const hydrated = useRef(false);

  useEffect(() => {
    if (!hydrated.current) {
      hydrated.current = true;
      const stored = readStorage();
      if (stored.length > 0) {
        setItems(stored); // eslint-disable-line react-hooks/set-state-in-effect
      }
    }
  }, []);

  const persist = useCallback((next: string[]) => {
    setItems(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // ignore
    }
  }, []);

  const isInLunchbox = useCallback(
    (slug: string) => items.includes(slug),
    [items]
  );

  const add = useCallback(
    (slug: string) => {
      if (!items.includes(slug)) {
        persist([...items, slug]);
      }
    },
    [items, persist]
  );

  const remove = useCallback(
    (slug: string) => {
      persist(items.filter((s) => s !== slug));
    },
    [items, persist]
  );

  const toggle = useCallback(
    (slug: string): boolean => {
      if (items.includes(slug)) {
        remove(slug);
        return false;
      } else {
        add(slug);
        return true;
      }
    },
    [items, add, remove]
  );

  return (
    <LunchboxContext.Provider
      value={{ items, isInLunchbox, add, remove, toggle, count: items.length }}
    >
      {children}
    </LunchboxContext.Provider>
  );
}

export function useLunchbox() {
  const context = useContext(LunchboxContext);
  if (!context) {
    throw new Error("useLunchbox must be used within a LunchboxProvider");
  }
  return context;
}
