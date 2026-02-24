import Link from "next/link";
import { FLAVORS } from "@/lib/constants";

export function FlavorGrid() {
  return (
    <section
      style={{
        maxWidth: 1120,
        margin: "0 auto",
        padding: "60px 20px 80px",
      }}
    >
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
        Flavors
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
        Browse by flavor.
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: 20,
        }}
      >
        {FLAVORS.map((flavor) => (
          <Link
            key={flavor.slug}
            href={`/flavor/${flavor.slug}`}
            className="block"
            style={{ textDecoration: "none" }}
          >
            <div
              className="mochi-card"
              style={{
                backgroundColor: "var(--bg)",
                borderRadius: "var(--radius-xl)",
                boxShadow: "var(--elevation-1)",
                padding: 24,
                borderTop: `3px solid ${flavor.color}`,
                height: "100%",
              }}
            >
              <div
                className="flex items-center"
                style={{ gap: 10, marginBottom: 10 }}
              >
                <span style={{ fontSize: 28 }} aria-hidden="true">
                  {flavor.emoji}
                </span>
                <span
                  style={{
                    fontSize: 22,
                    fontWeight: 700,
                    color: "var(--t1)",
                  }}
                >
                  {flavor.name}
                </span>
              </div>
              <p
                style={{
                  fontSize: 15,
                  color: "var(--t2)",
                  lineHeight: 1.47,
                }}
              >
                {flavor.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
