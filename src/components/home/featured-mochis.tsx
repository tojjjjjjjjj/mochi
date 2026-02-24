import Link from "next/link";
import MochiCard from "@/components/ui/mochi-card";
import type { Mochi } from "@/types/database";

type FeaturedMochisProps = {
  hottest: Mochi[];
  houseSpecials: Mochi[];
  fresh: Mochi[];
};

function Section({
  eyebrow,
  heading,
  mochis,
  browseHref,
}: {
  eyebrow: string;
  heading: string;
  mochis: Mochi[];
  browseHref: string;
}) {
  if (mochis.length === 0) return null;

  return (
    <div style={{ marginBottom: 64 }}>
      <p
        style={{
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--pink-text)",
          marginBottom: 8,
        }}
      >
        {eyebrow}
      </p>

      <h2
        style={{
          fontSize: "clamp(28px, 4vw, 40px)",
          fontWeight: 800,
          letterSpacing: "-0.035em",
          color: "var(--t1)",
          lineHeight: 1.1,
          marginBottom: 32,
        }}
      >
        {heading}
      </h2>

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

      <div
        className="flex justify-center"
        style={{ marginTop: 32 }}
      >
        <Link
          href={browseHref}
          style={{
            fontSize: 15,
            fontWeight: 600,
            color: "var(--pink-text)",
            textDecoration: "none",
            minHeight: 44,
            display: "inline-flex",
            alignItems: "center",
          }}
        >
          Browse all &rarr;
        </Link>
      </div>
    </div>
  );
}

export function FeaturedMochis({ hottest, houseSpecials, fresh }: FeaturedMochisProps) {
  return (
    <section
      style={{
        maxWidth: 1120,
        margin: "0 auto",
        padding: "60px 20px 20px",
      }}
    >
      <Section
        eyebrow="Hottest"
        heading="Trending right now."
        mochis={hottest}
        browseHref="/menu"
      />
      <Section
        eyebrow="House Specials"
        heading="The sweetest mochis."
        mochis={houseSpecials}
        browseHref="/menu"
      />
      <Section
        eyebrow="Fresh Today"
        heading="Just added to the menu."
        mochis={fresh}
        browseHref="/menu"
      />
    </section>
  );
}
