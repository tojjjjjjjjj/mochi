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
        maxWidth: 1200,
        margin: "0 auto",
        padding: "32px 32px 80px",
      }}
    >
      <h1
        style={{
          fontSize: 28,
          fontWeight: 800,
          letterSpacing: "-0.03em",
          color: "var(--t1)",
          marginBottom: 4,
        }}
      >
        My Lunchbox
      </h1>
      <p
        style={{
          fontSize: 15,
          color: "var(--t2)",
          marginBottom: 32,
        }}
      >
        Your saved mochis, ready to go.
      </p>

      {loading ? (
        <div style={{ padding: "64px 20px", textAlign: "center", color: "var(--t3)" }}>
          Loading...
        </div>
      ) : items.length === 0 ? (
        <div style={{ textAlign: "center", padding: "100px 32px" }}>
          <p style={{ fontSize: 64, marginBottom: 20 }} aria-hidden="true">
            &#x1F371;
          </p>
          <p
            style={{
              fontSize: 24,
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
              lineHeight: 1.5,
              marginBottom: 28,
              maxWidth: 320,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Browse the menu and tap the heart on any mochi to save it here.
          </p>
          <Link
            href="/menu"
            className="feed-btn btn-bouncy"
            style={{
              padding: "14px 32px",
              fontSize: 17,
              minHeight: 52,
              textDecoration: "none",
            }}
          >
            Browse the Menu
          </Link>
        </div>
      ) : (
        <div
          className="card-grid"
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
