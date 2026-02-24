import Link from "next/link";
import MochiCard from "@/components/ui/mochi-card";
import type { Mochi } from "@/types/database";

type FeaturedMochisProps = {
  mochis: Mochi[];
};

export function FeaturedMochis({ mochis }: FeaturedMochisProps) {
  if (mochis.length === 0) {
    return null;
  }

  return (
    <section
      style={{
        maxWidth: 1120,
        margin: "0 auto",
        padding: "80px 20px",
      }}
    >
      {/* Eyebrow */}
      <p
        style={{
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--brand-pink)",
          marginBottom: 8,
        }}
      >
        House Specials
      </p>

      {/* Heading */}
      <h2
        style={{
          fontSize: "clamp(32px, 5vw, 48px)",
          fontWeight: 800,
          letterSpacing: "-0.035em",
          color: "var(--label-primary)",
          lineHeight: 1.1,
          marginBottom: 8,
        }}
      >
        The sweetest mochis.
      </h2>

      {/* Subtitle */}
      <p
        style={{
          fontSize: 19,
          fontWeight: 500,
          color: "var(--label-secondary)",
          marginBottom: 48,
          lineHeight: 1.47,
        }}
      >
        Hand-picked. Taste-tested. Ready to feed.
      </p>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: 20,
        }}
      >
        {mochis.map((mochi) => (
          <MochiCard key={mochi.id} mochi={mochi} />
        ))}
      </div>

      {/* Browse all link */}
      <div
        className="flex justify-center"
        style={{ marginTop: 48 }}
      >
        <Link
          href="/menu"
          style={{
            fontSize: 15,
            fontWeight: 600,
            color: "var(--brand-pink)",
            textDecoration: "none",
            minHeight: 44,
            display: "inline-flex",
            alignItems: "center",
          }}
        >
          Browse all &rarr;
        </Link>
      </div>
    </section>
  );
}
