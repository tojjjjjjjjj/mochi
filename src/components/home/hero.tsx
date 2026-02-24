import Link from "next/link";

export function Hero() {
  return (
    <section style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 32px 20px" }}>
      <p style={{ fontSize: 14, fontWeight: 700, color: "var(--pink-text)", marginBottom: 8, letterSpacing: "0.01em" }}>
        The curated AI marketplace
      </p>

      <h1 style={{ fontSize: 42, fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.08, color: "var(--t1)", marginBottom: 12 }}>
        Feed your AI{" "}
        <span style={{ background: "linear-gradient(135deg, var(--pink), #FFB088)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
          superpowers.
        </span>
      </h1>

      <p style={{ fontSize: 17, color: "var(--t2)", lineHeight: 1.5, maxWidth: 480, marginBottom: 24 }}>
        Taste-tested skills and prompts for Claude, ChatGPT, Gemini, and more. No malware, no garbage.
      </p>

      <div className="flex items-center flex-wrap" style={{ gap: 12 }}>
        <Link href="/menu" className="feed-btn btn-bouncy" style={{ padding: "14px 32px", fontSize: 17, minHeight: 52, textDecoration: "none" }}>
          Browse the Menu
        </Link>
        <Link href="/about" className="btn-bouncy" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 600, borderRadius: 100, background: "none", color: "var(--pink-text)", boxShadow: "inset 0 0 0 2px var(--pink)", padding: "14px 32px", fontSize: 17, minHeight: 52, textDecoration: "none", transition: "background 0.15s ease" }}>
          Learn More
        </Link>
      </div>
    </section>
  );
}
