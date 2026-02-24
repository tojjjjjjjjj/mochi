import Link from "next/link";
import { FLAVORS } from "@/lib/constants";

type FlavorBadgeProps = {
  flavor: string;
  size?: "sm" | "md";
};

export default function FlavorBadge({ flavor, size = "md" }: FlavorBadgeProps) {
  const flavorData = FLAVORS.find((f) => f.slug === flavor);

  if (!flavorData) return null;

  const isSmall = size === "sm";

  return (
    <Link
      href={`/flavor/${flavorData.slug}`}
      className="inline-flex items-center"
      style={{
        borderRadius: "9999px",
        fontSize: isSmall ? 12 : 14,
        fontWeight: 600,
        padding: isSmall ? "2px 10px" : "4px 14px",
        gap: isSmall ? 4 : 6,
        backgroundColor: flavorData.bgLight,
        color: flavorData.color,
        minHeight: 44,
        display: "inline-flex",
        alignItems: "center",
        textDecoration: "none",
      }}
    >
      <span aria-hidden="true">{flavorData.emoji}</span>
      {flavorData.name}
    </Link>
  );
}
