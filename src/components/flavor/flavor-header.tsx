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
        maxWidth: 980,
        margin: "0 auto",
        padding: "48px 20px 0",
      }}
    >
      {/* Colored accent bar */}
      <div
        style={{
          width: 48,
          height: 4,
          borderRadius: 2,
          backgroundColor: flavor.color,
          marginBottom: 24,
        }}
      />

      {/* Emoji */}
      <span
        style={{ fontSize: 48, lineHeight: 1, display: "block", marginBottom: 16 }}
        aria-hidden="true"
      >
        {flavor.emoji}
      </span>

      {/* Name */}
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
        {flavor.name}
      </h1>

      {/* Description */}
      <p
        style={{
          fontSize: 19,
          fontWeight: 500,
          color: "var(--label-secondary)",
          lineHeight: 1.47,
          marginBottom: 8,
        }}
      >
        {flavor.description}
      </p>

      {/* Mochi count */}
      <p
        style={{
          fontSize: 14,
          fontWeight: 500,
          color: "var(--label-tertiary)",
        }}
      >
        {mochiCount} {mochiCount === 1 ? "mochi" : "mochis"}
      </p>
    </div>
  );
}
