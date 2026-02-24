import Link from "next/link";
import MochiCard from "@/components/ui/mochi-card";
import type { Mochi } from "@/types/database";

type FeaturedMochisProps = { hottest: Mochi[]; houseSpecials: Mochi[]; fresh: Mochi[] };

function Section({ title, mochis, browseHref }: { title: string; mochis: Mochi[]; browseHref: string }) {
  if (mochis.length === 0) return null;
  return (
    <div style={{ paddingBottom: 16 }}>
      <div className="sec-head">
        <h2 className="sec-title">{title}</h2>
        <Link href={browseHref} style={{ fontSize: 15, fontWeight: 600, color: "var(--pink-text)", padding: "10px 4px", minHeight: 44, display: "flex", alignItems: "center", textDecoration: "none" }}>
          See All
        </Link>
      </div>
      <div className="card-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
        {mochis.map((mochi) => (<MochiCard key={mochi.id} mochi={mochi} />))}
      </div>
    </div>
  );
}

export function FeaturedMochis({ hottest, houseSpecials, fresh }: FeaturedMochisProps) {
  return (
    <section style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
      <Section title="Trending Right Now" mochis={hottest} browseHref="/menu" />
      <Section title="House Specials" mochis={houseSpecials} browseHref="/menu" />
      <Section title="Fresh Today" mochis={fresh} browseHref="/menu" />
    </section>
  );
}
