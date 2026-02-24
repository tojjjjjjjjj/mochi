import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "0.5px solid rgba(60, 60, 67, 0.06)",
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: 24,
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
            style={{
              fontWeight: 800,
              fontSize: 14,
              color: "var(--label-primary)",
              textDecoration: "none",
              letterSpacing: "-0.03em",
            }}
          >
            <span aria-hidden="true" style={{ marginRight: 3 }}>🍡</span>
            mochi
          </Link>

          {/* Links */}
          <div className="flex items-center" style={{ gap: 20 }}>
            <Link
              href="/about"
              style={{
                fontSize: 12,
                fontWeight: 500,
                color: "var(--label-secondary)",
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
                color: "var(--label-secondary)",
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
            color: "var(--label-tertiary)",
          }}
        >
          Feed your AI superpowers.
        </p>
      </div>
    </footer>
  );
}
