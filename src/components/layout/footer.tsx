import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--sep)",
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "24px 20px",
          paddingBottom: 100,
        }}
      >
        {/* Top row */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between"
          style={{ gap: 12, marginBottom: 12 }}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center"
            style={{
              fontWeight: 800,
              fontSize: 14,
              color: "var(--t1)",
              textDecoration: "none",
              letterSpacing: "-0.03em",
              gap: 6,
            }}
          >
            <div
              style={{
                width: 22,
                height: 22,
                borderRadius: 6,
                background: "var(--gradient-primary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 12,
              }}
            >
              <span aria-hidden="true">🍡</span>
            </div>
            mochi
          </Link>

          {/* Links */}
          <div className="flex items-center" style={{ gap: 20 }}>
            <Link
              href="/about"
              style={{
                fontSize: 12,
                fontWeight: 500,
                color: "var(--t2)",
                textDecoration: "none",
                minHeight: 44,
                display: "flex",
                alignItems: "center",
              }}
            >
              About
            </Link>
            <a
              href="https://github.com/tojjjjjjjjj/mochi"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 12,
                fontWeight: 500,
                color: "var(--t2)",
                textDecoration: "none",
                minHeight: 44,
                display: "flex",
                alignItems: "center",
              }}
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Tagline */}
        <p
          className="text-center"
          style={{
            fontSize: 12,
            color: "var(--t3)",
          }}
        >
          Feed your AI superpowers.
        </p>
      </div>
    </footer>
  );
}
