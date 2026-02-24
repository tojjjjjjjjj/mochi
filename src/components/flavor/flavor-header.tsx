import { FLAVORS } from "@/lib/constants";

type FlavorHeaderProps = { slug: string; mochiCount: number };

export default function FlavorHeader({ slug, mochiCount }: FlavorHeaderProps) {
  const flavor = FLAVORS.find((f) => f.slug === slug);
  if (!flavor) return null;

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 32px 0" }}>
      <span style={{ fontSize: 48, lineHeight: 1, display: "block", marginBottom: 16 }} aria-hidden="true">
        {flavor.emoji}
      </span>
      <h1 style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-0.03em", color: "var(--t1)", marginBottom: 4 }}>
        {flavor.name}
      </h1>
      <p style={{ fontSize: 15, color: "var(--t2)", marginBottom: 4 }}>
        {flavor.description}
      </p>
      <p style={{ fontSize: 13, fontWeight: 500, color: "var(--t3)" }}>
        {mochiCount} {mochiCount === 1 ? "mochi" : "mochis"}
      </p>
    </div>
  );
}
