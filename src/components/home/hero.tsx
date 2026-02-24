import Link from "next/link";

export function Hero() {
  return (
    <section
      style={{
        maxWidth: 720,
        margin: "0 auto",
        padding: "48px 20px 60px",
      }}
    >
      {/* Eyebrow */}
      <p
        style={{
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--pink-text)",
          marginBottom: 12,
        }}
      >
        The curated AI marketplace
      </p>

      {/* Headline */}
      <h1
        style={{
          fontSize: 42,
          fontWeight: 800,
          letterSpacing: "-0.035em",
          lineHeight: 1.1,
          color: "var(--t1)",
          marginBottom: 16,
        }}
      >
        Feed your AI{" "}
        <span
          style={{
            background: "linear-gradient(135deg, #FF6B9D, #FFB088, #FF8A80)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          superpowers.
        </span>
      </h1>

      {/* Subtitle */}
      <p
        style={{
          fontSize: 18,
          fontWeight: 500,
          color: "var(--t2)",
          lineHeight: 1.47,
          maxWidth: 480,
          marginBottom: 32,
        }}
      >
        Taste-tested skills and prompts for Claude, ChatGPT, Gemini, and more.
      </p>

      {/* CTA */}
      <Link
        href="/menu"
        className="btn-bouncy inline-flex items-center justify-center"
        style={{
          background: "var(--gradient-primary)",
          color: "#FFFFFF",
          fontWeight: 600,
          fontSize: 17,
          borderRadius: "9999px",
          padding: "14px 40px",
          textDecoration: "none",
          minHeight: 44,
          boxShadow: "0 4px 14px rgba(255, 107, 157, 0.3)",
        }}
      >
        Browse the Menu
      </Link>
    </section>
  );
}
