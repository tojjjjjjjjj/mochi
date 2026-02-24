import Link from "next/link";
import { FLAVORS } from "@/lib/constants";

export function FlavorGrid() {
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
        Flavors
      </p>

      {/* Heading */}
      <h2
        style={{
          fontSize: "clamp(32px, 5vw, 48px)",
          fontWeight: 800,
          letterSpacing: "-0.035em",
          color: "var(--label-primary)",
          lineHeight: 1.1,
          marginBottom: 48,
        }}
      >
        Browse by flavor.
      </h2>

      {/* Grid */}
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
                backgroundColor: "var(--bg-primary)",
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
                    color: "var(--label-primary)",
                  }}
                >
                  {flavor.name}
                </span>
              </div>
              <p
                style={{
                  fontSize: 15,
                  color: "var(--label-secondary)",
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
