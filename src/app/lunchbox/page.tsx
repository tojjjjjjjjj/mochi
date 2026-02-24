"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLunchbox } from "@/lib/use-lunchbox";
import { supabase } from "@/lib/supabase";
import MochiCard from "@/components/ui/mochi-card";
import type { Mochi } from "@/types/database";

export default function LunchboxPage() {
  const { items } = useLunchbox();
  const [mochis, setMochis] = useState<Mochi[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function fetchMochis() {
      if (items.length === 0) {
        if (!cancelled) {
          setMochis([]);
          setLoading(false);
        }
        return;
      }

      setLoading(true);
      const { data } = await supabase
        .from("mochis")
        .select("*")
        .in("slug", items);
      if (!cancelled) {
        setMochis(data ?? []);
        setLoading(false);
      }
    }

    fetchMochis();
    return () => { cancelled = true; };
  }, [items]);

  return (
    <div
      style={{
        maxWidth: 1120,
        margin: "0 auto",
        padding: "48px 20px 80px",
      }}
    >
      <h1
        style={{
          fontSize: "clamp(32px, 5vw, 48px)",
          fontWeight: 800,
          letterSpacing: "-0.035em",
          color: "var(--t1)",
          lineHeight: 1.1,
          marginBottom: 12,
        }}
      >
        My Lunchbox
      </h1>

      <p
        style={{
          fontSize: 18,
          fontWeight: 500,
          color: "var(--t2)",
          lineHeight: 1.47,
          marginBottom: 40,
        }}
      >
        Your saved mochis, ready to go.
      </p>

      {loading ? (
        <div
          className="flex items-center justify-center"
          style={{ padding: "80px 20px", color: "var(--t3)" }}
        >
          Loading...
        </div>
      ) : items.length === 0 ? (
        <div
          className="flex flex-col items-center justify-center"
          style={{
            padding: "80px 20px",
            textAlign: "center",
          }}
        >
          <span style={{ fontSize: 64, marginBottom: 16 }} aria-hidden="true">
            🍱
          </span>
          <p
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: "var(--t1)",
              marginBottom: 8,
            }}
          >
            Your lunchbox is empty
          </p>
          <p
            style={{
              fontSize: 16,
              color: "var(--t2)",
              marginBottom: 24,
              maxWidth: 360,
            }}
          >
            Browse the menu and tap the heart on any mochi to save it here.
          </p>
          <Link
            href="/menu"
            className="btn-bouncy inline-flex items-center justify-center"
            style={{
              background: "var(--gradient-primary)",
              color: "#FFFFFF",
              fontWeight: 600,
              fontSize: 16,
              borderRadius: "9999px",
              padding: "12px 32px",
              textDecoration: "none",
              minHeight: 44,
              boxShadow: "0 4px 14px rgba(255, 107, 157, 0.3)",
            }}
          >
            Browse the Menu
          </Link>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {mochis.map((mochi) => (
            <MochiCard key={mochi.id} mochi={mochi} />
          ))}
        </div>
      )}
    </div>
  );
}
