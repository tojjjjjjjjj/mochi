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
        padding: "56px 20px 120px",
      }}
    >
      {/* ── Section 1: Hero ── */}
      <section style={{ marginBottom: 100 }}>
        {/* Accent bar */}
        <div
          style={{
            width: 48,
            height: 4,
            borderRadius: 2,
            background: "linear-gradient(135deg, #FF6B9D, #FFB088)",
            marginBottom: 24,
          }}
        />

        <h1
          style={{
            fontSize: "clamp(40px, 6vw, 56px)",
            fontWeight: 800,
            letterSpacing: "-0.035em",
            color: "var(--label-primary)",
            lineHeight: 1.1,
            marginBottom: 16,
          }}
        >
          Why mochi exists.
        </h1>

        <p
          style={{
            fontSize: 21,
            fontWeight: 500,
            color: "var(--label-secondary)",
            lineHeight: 1.47,
          }}
        >
          Because your AI deserves better than malware.
        </p>
      </section>

      {/* ── Section 2: The Problem ── */}
      <section style={{ marginBottom: 100 }}>
        <p
          style={{
            fontSize: 14,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--brand-pink)",
            marginBottom: 12,
          }}
        >
          The Problem
        </p>

        <h2
          style={{
            fontSize: "clamp(28px, 5vw, 40px)",
            fontWeight: 800,
            letterSpacing: "-0.035em",
            color: "var(--label-primary)",
            lineHeight: 1.15,
            marginBottom: 24,
          }}
        >
          Most AI &ldquo;skills&rdquo; are untested, unreviewed, and unsafe.
        </h2>

        {/* Stats card */}
        <div
          style={{
            background: "var(--bg-secondary)",
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
            <div>
              <p
                style={{
                  fontSize: "clamp(32px, 5vw, 40px)",
                  fontWeight: 800,
                  background: "linear-gradient(135deg, #FF6B9D, #FFB088)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  lineHeight: 1.1,
                  marginBottom: 6,
                }}
              >
                36%
              </p>
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: "var(--label-secondary)",
                  lineHeight: 1.4,
                }}
              >
                of AI skills have security flaws
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: "clamp(32px, 5vw, 40px)",
                  fontWeight: 800,
                  background: "linear-gradient(135deg, #FF6B9D, #FFB088)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  lineHeight: 1.1,
                  marginBottom: 6,
                }}
              >
                76
              </p>
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: "var(--label-secondary)",
                  lineHeight: 1.4,
                }}
              >
                confirmed malicious payloads found
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: "clamp(32px, 5vw, 40px)",
                  fontWeight: 800,
                  background: "linear-gradient(135deg, #FF6B9D, #FFB088)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  lineHeight: 1.1,
                  marginBottom: 6,
                }}
              >
                270k+
              </p>
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: "var(--label-secondary)",
                  lineHeight: 1.4,
                }}
              >
                unreviewed &ldquo;skills&rdquo; floating around
              </p>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <p
            style={{
              fontSize: 17,
              color: "var(--label-secondary)",
              lineHeight: 1.6,
            }}
          >
            Snyk research found that over a third of AI skills available online
            contain security vulnerabilities. Seventy-six of those were confirmed
            malicious &mdash; designed to steal your credentials and data.
          </p>
          <p
            style={{
              fontSize: 17,
              color: "var(--label-secondary)",
              lineHeight: 1.6,
            }}
          >
            The existing &ldquo;marketplaces&rdquo; are mostly GitHub scrapers
            with no quality control. Over 270,000 &ldquo;skills&rdquo; that
            nobody has reviewed &mdash; most are garbage, and some are genuinely
            dangerous.
          </p>
          <p
            style={{
              fontSize: 17,
              color: "var(--label-secondary)",
              lineHeight: 1.6,
            }}
          >
            That is the opposite of helpful.
          </p>
        </div>
      </section>

      {/* ── Section 3: The Solution ── */}
      <section style={{ marginBottom: 100 }}>
        <p
          style={{
            fontSize: 14,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--brand-pink)",
            marginBottom: 12,
          }}
        >
          Our Approach
        </p>

        <h2
          style={{
            fontSize: "clamp(28px, 5vw, 40px)",
            fontWeight: 800,
            letterSpacing: "-0.035em",
            color: "var(--label-primary)",
            lineHeight: 1.15,
            marginBottom: 24,
          }}
        >
          Every mochi is reviewed, tested, and safe to use.
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <p
            style={{
              fontSize: 17,
              color: "var(--label-secondary)",
              lineHeight: 1.6,
            }}
          >
            We started with 27 House Specials &mdash; prompts and skills we
            actually use ourselves, every day. Each one has been reviewed for
            quality, tested for safety, and written to be genuinely useful.
          </p>
          <p
            style={{
              fontSize: 17,
              color: "var(--label-secondary)",
              lineHeight: 1.6,
            }}
          >
            Built with the same mochis we serve. The prompts that helped create
            this site? They are on this site. We are not selling you something we
            do not use ourselves.
          </p>
          <p
            style={{
              fontSize: 17,
              color: "var(--label-secondary)",
              lineHeight: 1.6,
            }}
          >
            Quality over quantity, always. We would rather have 27 great mochis
            than 270,000 questionable ones.
          </p>
        </div>
      </section>

      {/* ── Section 4: What's Coming ── */}
      <section style={{ marginBottom: 100 }}>
        <p
          style={{
            fontSize: 14,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--brand-pink)",
            marginBottom: 12,
          }}
        >
          What&apos;s Next
        </p>

        <h2
          style={{
            fontSize: "clamp(28px, 5vw, 40px)",
            fontWeight: 800,
            letterSpacing: "-0.035em",
            color: "var(--label-primary)",
            lineHeight: 1.15,
            marginBottom: 24,
          }}
        >
          This is just the first batch.
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <p
            style={{
              fontSize: 17,
              color: "var(--label-secondary)",
              lineHeight: 1.6,
            }}
          >
            We are working on community submissions with autonomous security
            scanning &mdash; so anyone can contribute mochis, and every
            submission gets reviewed before it hits the menu.
          </p>
          <p
            style={{
              fontSize: 17,
              color: "var(--label-secondary)",
              lineHeight: 1.6,
            }}
          >
            Personal collections are coming too. Think of it as &ldquo;My
            Lunchbox&rdquo; &mdash; save your favorites, organize them however
            you want.
          </p>
          <p
            style={{
              fontSize: 17,
              color: "var(--label-secondary)",
              lineHeight: 1.6,
            }}
          >
            More flavors, more mochis, and always free. We believe the best AI
            tools should be accessible to everyone.
          </p>
        </div>
      </section>

      {/* ── Section 5: The Meta ── */}
      <section>
        <div
          style={{
            background: "var(--bg-secondary)",
            borderRadius: "var(--radius-xl)",
            padding: "32px",
          }}
        >
          <p
            style={{
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--brand-pink)",
              marginBottom: 12,
            }}
          >
            The Meta
          </p>
          <p
            style={{
              fontSize: 17,
              color: "var(--label-secondary)",
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
