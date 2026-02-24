import Link from "next/link";
import { FLAVORS } from "@/lib/constants";

export function CategoryPills() {
  return (
    <section
      style={{
        maxWidth: 1120,
        margin: "0 auto",
        padding: "40px 20px 0",
      }}
    >
      <div
        className="flex items-center overflow-x-auto"
        style={{
          gap: 10,
          paddingBottom: 4,
          scrollbarWidth: "none",
        }}
      >
        {FLAVORS.map((flavor) => (
          <Link
            key={flavor.slug}
            href={`/flavor/${flavor.slug}`}
            className="btn-bouncy"
            style={{
              padding: "8px 18px",
              borderRadius: "9999px",
              fontSize: 14,
              fontWeight: 600,
              backgroundColor: flavor.bgLight,
              color: flavor.color,
              textDecoration: "none",
              whiteSpace: "nowrap",
              minHeight: 36,
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <span aria-hidden="true">{flavor.emoji}</span>
            {flavor.name}
          </Link>
        ))}
      </div>
    </section>
  );
}
