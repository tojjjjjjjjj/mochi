import { FLAVORS } from "@/lib/constants";

type FlavorHeaderProps = {
  slug: string;
  mochiCount: number;
};

export default function FlavorHeader({ slug, mochiCount }: FlavorHeaderProps) {
  const flavor = FLAVORS.find((f) => f.slug === slug);

  if (!flavor) return null;

  return (
    <div
      style={{
        maxWidth: 1120,
        margin: "0 auto",
        padding: "48px 20px 0",
      }}
    >
      <span
        style={{ fontSize: 48, lineHeight: 1, display: "block", marginBottom: 16 }}
        aria-hidden="true"
      >
        {flavor.emoji}
      </span>

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
        {flavor.name}
      </h1>

      <p
        style={{
          fontSize: 18,
          fontWeight: 500,
          color: "var(--t2)",
          lineHeight: 1.47,
          marginBottom: 8,
        }}
      >
        {flavor.description}
      </p>

      <p
        style={{
          fontSize: 14,
          fontWeight: 500,
          color: "var(--t3)",
        }}
      >
        {mochiCount} {mochiCount === 1 ? "mochi" : "mochis"}
      </p>
    </div>
  );
}
