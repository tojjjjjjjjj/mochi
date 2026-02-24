import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Mochi",
  description: "Why mochi exists — a curated AI marketplace built on trust, not volume.",
  openGraph: { title: "About | Mochi", description: "Why mochi exists — a curated AI marketplace built on trust, not volume.", type: "website" },
};

export default function AboutPage() {
  return (
    <article style={{ maxWidth: 720, margin: "0 auto", padding: "32px 32px 120px" }}>
      <section style={{ marginBottom: 64 }}>
        <h1 style={{ fontSize: 32, fontWeight: 800, letterSpacing: "-0.03em", color: "var(--t1)", lineHeight: 1.1, marginBottom: 12 }}>
          Why mochi exists.
        </h1>
        <p style={{ fontSize: 17, color: "var(--t2)", lineHeight: 1.5 }}>
          Because your AI deserves better than malware.
        </p>
      </section>

      <section style={{ marginBottom: 64 }}>
        <p style={{ fontSize: 13, fontWeight: 600, color: "var(--t3)", textTransform: "uppercase", letterSpacing: "0.02em", marginBottom: 12 }}>The Problem</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em", color: "var(--t1)", lineHeight: 1.15, marginBottom: 20 }}>
          Most AI &ldquo;skills&rdquo; are untested, unreviewed, and unsafe.
        </h2>

        <div style={{ background: "var(--bg2)", borderRadius: 20, padding: 28, marginBottom: 24 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 20 }}>
            {[
              { stat: "36%", label: "of AI skills have security flaws" },
              { stat: "76", label: "confirmed malicious payloads found" },
              { stat: "270k+", label: 'unreviewed "skills" floating around' },
            ].map((item) => (
              <div key={item.stat}>
                <p style={{ fontSize: 28, fontWeight: 800, background: "var(--gradient-primary)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", lineHeight: 1.1, marginBottom: 4 }}>{item.stat}</p>
                <p style={{ fontSize: 14, color: "var(--t2)", lineHeight: 1.4 }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <p style={{ fontSize: 16, color: "var(--t2)", lineHeight: 1.6 }}>Snyk research found that over a third of AI skills available online contain security vulnerabilities. Seventy-six of those were confirmed malicious &mdash; designed to steal your credentials and data.</p>
          <p style={{ fontSize: 16, color: "var(--t2)", lineHeight: 1.6 }}>The existing &ldquo;marketplaces&rdquo; are mostly GitHub scrapers with no quality control. Over 270,000 &ldquo;skills&rdquo; that nobody has reviewed.</p>
        </div>
      </section>

      <section style={{ marginBottom: 64 }}>
        <p style={{ fontSize: 13, fontWeight: 600, color: "var(--t3)", textTransform: "uppercase", letterSpacing: "0.02em", marginBottom: 12 }}>Our Approach</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em", color: "var(--t1)", lineHeight: 1.15, marginBottom: 20 }}>
          Every mochi is reviewed, tested, and safe to use.
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <p style={{ fontSize: 16, color: "var(--t2)", lineHeight: 1.6 }}>We started with 27 House Specials &mdash; prompts and skills we actually use ourselves, every day. Each one has been reviewed for quality, tested for safety, and written to be genuinely useful.</p>
          <p style={{ fontSize: 16, color: "var(--t2)", lineHeight: 1.6 }}>Quality over quantity, always. We would rather have 27 great mochis than 270,000 questionable ones.</p>
        </div>
      </section>

      <section style={{ marginBottom: 64 }}>
        <p style={{ fontSize: 13, fontWeight: 600, color: "var(--t3)", textTransform: "uppercase", letterSpacing: "0.02em", marginBottom: 12 }}>What&apos;s Next</p>
        <h2 style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em", color: "var(--t1)", lineHeight: 1.15, marginBottom: 20 }}>
          This is just the first batch.
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <p style={{ fontSize: 16, color: "var(--t2)", lineHeight: 1.6 }}>Community submissions with autonomous security scanning are coming &mdash; so anyone can contribute mochis, and every submission gets reviewed before it hits the menu.</p>
          <p style={{ fontSize: 16, color: "var(--t2)", lineHeight: 1.6 }}>More flavors, more mochis, and always free.</p>
        </div>
      </section>

      <div style={{ background: "var(--bg2)", borderRadius: 20, padding: 28 }}>
        <p style={{ fontSize: 13, fontWeight: 600, color: "var(--t3)", textTransform: "uppercase", letterSpacing: "0.02em", marginBottom: 8 }}>The Meta</p>
        <p style={{ fontSize: 16, color: "var(--t2)", lineHeight: 1.6 }}>
          mochi.market was built by a human and Claude in 48 hours. Every prompt, every design decision, every line of copy &mdash; all created with the same AI tools you will find on this site.
        </p>
      </div>
    </article>
  );
}
