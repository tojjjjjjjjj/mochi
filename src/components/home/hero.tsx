import Link from "next/link";

export function Hero() {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        minHeight: "100vh",
        padding: "80px 20px 60px",
      }}
    >
      {/* Ambient gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255, 107, 157, 0.06) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 20% 60%, rgba(184, 169, 232, 0.05) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 80% 80%, rgba(255, 176, 136, 0.06) 0%, transparent 50%),
            radial-gradient(ellipse 40% 30% at 60% 20%, rgba(126, 200, 227, 0.04) 0%, transparent 50%)
          `,
        }}
      />

      <div
        className="relative flex flex-col items-center text-center"
        style={{ maxWidth: 720 }}
      >
        {/* Mochi Mark */}
        <div className="hero-stagger-1">
          <div
            className="mochi-mark"
            style={{
              width: 80,
              height: 80,
              borderRadius: 22,
              background: "linear-gradient(135deg, #FF6B9D, #FFB088)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
              boxShadow:
                "0 8px 32px rgba(255, 107, 157, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.3)",
              marginBottom: 40,
              cursor: "default",
            }}
          >
            <span aria-hidden="true">&#x1F361;</span>
          </div>
        </div>

        {/* Headline */}
        <h1
          className="hero-stagger-2"
          style={{
            fontSize: "clamp(56px, 8vw, 80px)",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
            color: "var(--label-primary)",
            marginBottom: 20,
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
          className="hero-stagger-3"
          style={{
            fontSize: 21,
            fontWeight: 500,
            color: "var(--label-secondary)",
            lineHeight: 1.47,
            maxWidth: 540,
            marginBottom: 12,
          }}
        >
          Taste-tested skills and prompts for Claude, ChatGPT, Gemini, and more.
        </p>

        {/* Sub-meta */}
        <p
          className="hero-stagger-4"
          style={{
            fontSize: 14,
            fontWeight: 500,
            color: "var(--label-tertiary)",
            marginBottom: 40,
          }}
        >
          No malware. No garbage. Just the good stuff.
        </p>

        {/* CTA */}
        <div className="hero-stagger-5">
          <Link
            href="/menu"
            className="btn-bouncy inline-flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #FF6B9D, #FFB088)",
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
        </div>
      </div>
    </section>
  );
}
