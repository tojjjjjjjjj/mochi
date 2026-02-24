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
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "48px 20px 0",
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
          Browse the Menu
        </h1>

        <p
          style={{
            fontSize: 18,
            fontWeight: 500,
            color: "var(--t2)",
            lineHeight: 1.47,
            maxWidth: 560,
          }}
        >
          Every mochi. Every flavor. Taste-tested and ready to feed.
        </p>
      </div>

      <MochiGrid mochis={mochiList} flavors={FLAVORS} />
    </>
  );
}
