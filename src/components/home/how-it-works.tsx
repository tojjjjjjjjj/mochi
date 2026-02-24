const STEPS = [
  { number: 1, label: "Browse", description: "Find prompts and skills across 7 flavors — all reviewed and tested." },
  { number: 2, label: "Feed", description: "Copy with one click and paste into your favorite AI assistant." },
  { number: 3, label: "Use", description: "Your AI instantly upgrades with new capabilities. That's it." },
];

export function HowItWorks() {
  return (
    <section style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
      <div className="flex flex-col md:flex-row" style={{ gap: 32, padding: "32px 0 40px", borderTop: "0.5px solid var(--sep)", borderBottom: "0.5px solid var(--sep)", marginBottom: 8 }}>
        {STEPS.map((step) => (
          <div key={step.number} className="flex items-start" style={{ flex: 1, gap: 14 }}>
            <div style={{ width: 36, height: 36, minWidth: 36, borderRadius: "50%", background: "var(--pink-light)", color: "var(--pink-text)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, fontWeight: 800, flexShrink: 0 }}>
              {step.number}
            </div>
            <div>
              <p style={{ fontSize: 15, fontWeight: 700, color: "var(--t1)", marginBottom: 2 }}>{step.label}</p>
              <p style={{ fontSize: 14, color: "var(--t2)", lineHeight: 1.45 }}>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
