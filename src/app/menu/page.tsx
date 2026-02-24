import type { Metadata } from "next";
import { supabase } from "@/lib/supabase";
import { FLAVORS } from "@/lib/constants";
import MochiGrid from "@/components/flavor/mochi-grid";

export const metadata: Metadata = {
  title: "Browse the Menu | Mochi",
  description: "Browse every mochi on the menu — curated AI prompts and skills, taste-tested and ready to feed your favorite AI.",
  openGraph: {
    title: "Browse the Menu | Mochi",
    description: "Browse every mochi on the menu — curated AI prompts and skills, taste-tested and ready to feed your favorite AI.",
    type: "website",
  },
};

export default async function MenuPage() {
  const { data: mochis } = await supabase
    .from("mochis")
    .select("*")
    .order("feed_count", { ascending: false });

  return (
    <>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 32px 0" }}>
        <h1 style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-0.03em", color: "var(--t1)", marginBottom: 4 }}>
          Browse the Menu
        </h1>
        <p style={{ fontSize: 15, color: "var(--t2)", marginBottom: 0 }}>
          Every mochi. Every flavor. Taste-tested and ready to feed.
        </p>
      </div>
      <MochiGrid mochis={mochis ?? []} flavors={FLAVORS} />
    </>
  );
}
