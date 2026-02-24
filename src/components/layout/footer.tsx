import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ marginTop: 60, padding: 32, borderTop: "0.5px solid var(--sep)", textAlign: "center", fontSize: 13, color: "var(--t3)", paddingBottom: 100 }}>
      <div className="flex items-center justify-center flex-wrap" style={{ gap: 16, marginBottom: 8 }}>
        <Link href="/" className="flex items-center" style={{ fontWeight: 800, fontSize: 14, color: "var(--t1)", textDecoration: "none", letterSpacing: "-0.03em", gap: 6 }}>
          <div className="nav-mark" style={{ width: 22, height: 22, borderRadius: 6 }} aria-hidden="true" />
          mochi
        </Link>
        <Link href="/about" style={{ fontSize: 13, fontWeight: 500, color: "var(--t3)", textDecoration: "none", minHeight: 44, display: "flex", alignItems: "center" }}>About</Link>
        <a href="https://github.com/tojjjjjjjjj/mochi" target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, fontWeight: 500, color: "var(--t3)", textDecoration: "none", minHeight: 44, display: "flex", alignItems: "center" }}>GitHub</a>
      </div>
      <p>Feed your AI superpowers.</p>
    </footer>
  );
}
