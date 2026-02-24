import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Mochi",
  description:
    "Why mochi exists — a curated AI marketplace built on trust, not volume. Every prompt reviewed, every skill tested.",
  openGraph: {
    title: "About | Mochi",
    description:
      "Why mochi exists — a curated AI marketplace built on trust, not volume. Every prompt reviewed, every skill tested.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <article
      style={{
        maxWidth: 720,
        margin: "0 auto",
        padding: "48px 20px 120px",
      }}
    >
      {/* Section 1: Hero */}
      <section style={{ marginBottom: 80 }}>
        <h1
          style={{
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 800,
            letterSpacing: "-0.035em",
            color: "var(--t1)",
            lineHeight: 1.1,
            marginBottom: 16,
          }}
        >
          Why mochi exists.
        </h1>

        <p
          style={{
            fontSize: 18,
            fontWeight: 500,
            color: "var(--t2)",
            lineHeight: 1.47,
          }}
        >
          Because your AI deserves better than malware.
        </p>
      </section>

      {/* Section 2: The Problem */}
      <section style={{ marginBottom: 80 }}>
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
          The Problem
        </p>

        <h2
          style={{
            fontSize: "clamp(24px, 4vw, 36px)",
            fontWeight: 800,
            letterSpacing: "-0.035em",
            color: "var(--t1)",
            lineHeight: 1.15,
            marginBottom: 24,
          }}
        >
          Most AI &ldquo;skills&rdquo; are untested, unreviewed, and unsafe.
        </h2>

        {/* Stats card */}
        <div
          style={{
            background: "var(--bg2)",
            borderRadius: "var(--radius-xl)",
            padding: "32px",
            marginBottom: 32,
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: 24,
            }}
          >
            {[
              { stat: "36%", label: "of AI skills have security flaws" },
              { stat: "76", label: "confirmed malicious payloads found" },
              { stat: "270k+", label: 'unreviewed "skills" floating around' },
            ].map((item) => (
              <div key={item.stat}>
                <p
                  style={{
                    fontSize: "clamp(28px, 4vw, 36px)",
                    fontWeight: 800,
                    background: "var(--gradient-primary)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    lineHeight: 1.1,
                    marginBottom: 6,
                  }}
                >
                  {item.stat}
                </p>
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: "var(--t2)",
                    lineHeight: 1.4,
                  }}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <p style={{ fontSize: 16, color: "var(--t2)", lineHeight: 1.6 }}>
            Snyk research found that over a third of AI skills available online
            contain security vulnerabilities. Seventy-six of those were confirmed
            malicious &mdash; designed to steal your credentials and data.
          </p>
          <p style={{ fontSize: 16, color: "var(--t2)", lineHeight: 1.6 }}>
            The existing &ldquo;marketplaces&rdquo; are mostly GitHub scrapers
            with no quality control. Over 270,000 &ldquo;skills&rdquo; that
            nobody has reviewed &mdash; most are garbage, and some are genuinely
            dangerous.
          </p>
          <p style={{ fontSize: 16, color: "var(--t2)", lineHeight: 1.6 }}>
            That is the opposite of helpful.
          </p>
        </div>
      </section>

      {/* Section 3: The Solution */}
      <section style={{ marginBottom: 80 }}>
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
          Our Approach
        </p>

        <h2
          style={{
            fontSize: "clamp(24px, 4vw, 36px)",
            fontWeight: 800,
            letterSpacing: "-0.035em",
            color: "var(--t1)",
            lineHeight: 1.15,
            marginBottom: 24,
          }}
        >
          Every mochi is reviewed, tested, and safe to use.
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <p style={{ fontSize: 16, color: "var(--t2)", lineHeight: 1.6 }}>
            We started with 27 House Specials &mdash; prompts and skills we
            actually use ourselves, every day. Each one has been reviewed for
            quality, tested for safety, and written to be genuinely useful.
          </p>
          <p style={{ fontSize: 16, color: "var(--t2)", lineHeight: 1.6 }}>
            Built with the same mochis we serve. The prompts that helped create
            this site? They are on this site. We are not selling you something we
            do not use ourselves.
          </p>
          <p style={{ fontSize: 16, color: "var(--t2)", lineHeight: 1.6 }}>
            Quality over quantity, always. We would rather have 27 great mochis
            than 270,000 questionable ones.
          </p>
        </div>
      </section>

      {/* Section 4: What's Coming */}
      <section style={{ marginBottom: 80 }}>
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
          What&apos;s Next
        </p>

        <h2
          style={{
            fontSize: "clamp(24px, 4vw, 36px)",
            fontWeight: 800,
            letterSpacing: "-0.035em",
            color: "var(--t1)",
            lineHeight: 1.15,
            marginBottom: 24,
          }}
        >
          This is just the first batch.
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <p style={{ fontSize: 16, color: "var(--t2)", lineHeight: 1.6 }}>
            We are working on community submissions with autonomous security
            scanning &mdash; so anyone can contribute mochis, and every
            submission gets reviewed before it hits the menu.
          </p>
          <p style={{ fontSize: 16, color: "var(--t2)", lineHeight: 1.6 }}>
            Personal collections are here. Think of it as &ldquo;My
            Lunchbox&rdquo; &mdash; save your favorites, organize them however
            you want.
          </p>
          <p style={{ fontSize: 16, color: "var(--t2)", lineHeight: 1.6 }}>
            More flavors, more mochis, and always free. We believe the best AI
            tools should be accessible to everyone.
          </p>
        </div>
      </section>

      {/* Section 5: The Meta */}
      <section>
        <div
          style={{
            background: "var(--bg2)",
            borderRadius: "var(--radius-xl)",
            padding: "32px",
          }}
        >
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
            The Meta
          </p>
          <p
            style={{
              fontSize: 16,
              color: "var(--t2)",
              lineHeight: 1.6,
            }}
          >
            mochi.market was built by a human and Claude in 48 hours. Every
            prompt, every design decision, every line of copy &mdash; all created
            with the same AI tools you will find on this site. We are not selling
            you something we do not use ourselves.
          </p>
        </div>
      </section>
    </article>
  );
}
