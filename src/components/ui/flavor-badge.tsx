import Link from "next/link";
import { FLAVORS } from "@/lib/constants";

type FlavorBadgeProps = {
  flavor: string;
  size?: "sm" | "md";
};

export default function FlavorBadge({ flavor, size = "md" }: FlavorBadgeProps) {
  const flavorData = FLAVORS.find((f) => f.slug === flavor);

  if (!flavorData) return null;

  const sizeClasses =
    size === "sm"
      ? "px-2 py-0.5 text-xs gap-1"
      : "px-3 py-1 text-sm gap-1.5";

  return (
    <Link
      href={`/flavor/${flavorData.slug}`}
      className={`inline-flex items-center rounded-full font-medium ${sizeClasses}`}
      style={{
        backgroundColor: flavorData.bgLight,
        color: flavorData.color,
      }}
    >
      <span aria-hidden="true">{flavorData.emoji}</span>
      {flavorData.name}
    </Link>
  );
}
