"use client";

import { useScrollReveal } from "@/lib/use-scroll-reveal";

const STEPS = [
  { number: 1, label: "Browse", description: "Find prompts and skills across 7 flavors — all reviewed and tested." },
  { number: 2, label: "Feed", description: "Copy with one click and paste into your favorite AI assistant." },
  { number: 3, label: "Use", description: "Your AI instantly upgrades with new capabilities. That's it." },
];

export function HowItWorks() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="scroll-reveal" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
      <div className="flex flex-col md:flex-row" style={{ gap: 32, padding: "40px 0 48px", borderTop: "0.5px solid var(--sep)", borderBottom: "0.5px solid var(--sep)", marginBottom: 8 }}>
        {STEPS.map((step, i) => (
          <div key={step.number} className="flex items-start stagger-child" style={{ flex: 1, gap: 16 }}>
            <div style={{
              width: 48, height: 48, minWidth: 48, borderRadius: "50%",
              background: "var(--gradient-primary)",
              color: "#FFF", display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 20, fontWeight: 800, flexShrink: 0,
              boxShadow: "0 4px 12px rgba(255, 107, 157, 0.25)",
              opacity: 0,
              animation: `hero-fade-up var(--t-spring) var(--ease-spring) forwards`,
              animationDelay: `${i * 100}ms`,
            }}>
              {step.number}
            </div>
            <div>
              <p style={{ fontSize: 17, fontWeight: 700, color: "var(--t1)", marginBottom: 4, letterSpacing: "-0.01em" }}>{step.label}</p>
              <p style={{ fontSize: 15, color: "var(--t2)", lineHeight: 1.5 }}>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
