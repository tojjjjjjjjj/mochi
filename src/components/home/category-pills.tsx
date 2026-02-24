import Link from "next/link";
import { FLAVORS } from "@/lib/constants";

export function CategoryPills() {
  return (
    <section style={{ maxWidth: 1200, margin: "0 auto", padding: "16px 32px 24px" }}>
      <div className="flex flex-wrap items-center" style={{ gap: 8 }}>
        {FLAVORS.map((flavor) => (
          <Link key={flavor.slug} href={`/flavor/${flavor.slug}`} className="btn-bouncy"
            style={{ padding: "10px 20px", minHeight: 44, display: "inline-flex", alignItems: "center", borderRadius: 100, fontSize: 14, fontWeight: 600, backgroundColor: flavor.bgLight, color: flavor.color, textDecoration: "none", whiteSpace: "nowrap", gap: 6, transition: "all 0.15s ease" }}>
            <span aria-hidden="true">{flavor.emoji}</span>
            {flavor.name}
          </Link>
        ))}
      </div>
    </section>
  );
}
