import Link from "next/link";
import { FLAVORS } from "@/lib/constants";

export function FlavorGrid() {
  return (
    <section style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px 80px" }}>
      <div className="sec-head">
        <h2 className="sec-title">Browse by Flavor</h2>
      </div>
      <div className="card-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 20 }}>
        {FLAVORS.map((flavor) => (
          <Link key={flavor.slug} href={`/flavor/${flavor.slug}`} className="block" style={{ textDecoration: "none" }}>
            <div className="mochi-card" style={{ padding: 24, height: "100%" }}>
              <div className="flex items-center" style={{ gap: 12, marginBottom: 10 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: flavor.bgLight, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>
                  <span aria-hidden="true">{flavor.emoji}</span>
                </div>
                <span style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.02em", color: "var(--t1)" }}>{flavor.name}</span>
              </div>
              <p style={{ fontSize: 15, color: "var(--t2)", lineHeight: 1.47 }}>{flavor.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
