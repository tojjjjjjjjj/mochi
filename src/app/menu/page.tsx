import type { Metadata } from "next";
import { supabase } from "@/lib/supabase";
import { FLAVORS } from "@/lib/constants";
import MochiGrid from "@/components/flavor/mochi-grid";

export const metadata: Metadata = {
  title: "Browse the Menu | Mochi",
  description:
    "Browse every mochi on the menu — curated AI prompts and skills, taste-tested and ready to feed your favorite AI.",
  openGraph: {
    title: "Browse the Menu | Mochi",
    description:
      "Browse every mochi on the menu — curated AI prompts and skills, taste-tested and ready to feed your favorite AI.",
    type: "website",
  },
};

export default async function MenuPage() {
  const { data: mochis } = await supabase
    .from("mochis")
    .select("*")
    .order("feed_count", { ascending: false });

  const mochiList = mochis ?? [];

  return (
    <>
      {/* Hero header */}
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "56px 20px 0",
        }}
      >
        {/* Accent bar */}
        <div
          style={{
            width: 48,
            height: 4,
            borderRadius: 2,
            background: "linear-gradient(135deg, #FF6B9D, #FFB088)",
            marginBottom: 24,
          }}
        />

        <h1
          style={{
            fontSize: "clamp(40px, 6vw, 56px)",
            fontWeight: 800,
            letterSpacing: "-0.035em",
            color: "var(--label-primary)",
            lineHeight: 1.1,
            marginBottom: 12,
          }}
        >
          Browse the Menu
        </h1>

        <p
          style={{
            fontSize: 19,
            fontWeight: 500,
            color: "var(--label-secondary)",
            lineHeight: 1.47,
            maxWidth: 560,
          }}
        >
          Every mochi. Every flavor. Taste-tested and ready to feed.
        </p>
      </div>

      {/* Grid with flavor filters */}
      <MochiGrid mochis={mochiList} flavors={FLAVORS} />
    </>
  );
}
