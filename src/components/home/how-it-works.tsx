const STEPS = [
  {
    number: 1,
    label: "Browse",
    description: "Find prompts and skills across 7 flavors — all reviewed and tested.",
  },
  {
    number: 2,
    label: "Feed",
    description: "Copy with one click and paste into your favorite AI assistant.",
  },
  {
    number: 3,
    label: "Use",
    description: "Your AI instantly upgrades with new capabilities. That's it.",
  },
];

export function HowItWorks() {
  return (
    <section
      style={{
        background: "var(--bg2)",
        borderTop: "1px solid var(--sep)",
        borderBottom: "1px solid var(--sep)",
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "48px 20px",
        }}
      >
        <h2
          style={{
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--pink-text)",
            marginBottom: 32,
            textAlign: "center",
          }}
        >
          How it works
        </h2>

        <div
          className="flex flex-col md:flex-row items-start md:items-center justify-center"
          style={{ gap: 40 }}
        >
          {STEPS.map((step, i) => (
            <div
              key={step.number}
              className="flex md:flex-col items-start md:items-center"
              style={{
                gap: 16,
                flex: 1,
                maxWidth: 280,
                textAlign: "center",
              }}
            >
              {/* Number circle */}
              <div
                style={{
                  width: 44,
                  height: 44,
                  minWidth: 44,
                  borderRadius: "50%",
                  background: "var(--gradient-primary)",
                  color: "#FFFFFF",
                  fontSize: 18,
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {step.number}
              </div>

              <div className="md:text-center">
                <p
                  style={{
                    fontSize: 17,
                    fontWeight: 700,
                    color: "var(--t1)",
                    marginBottom: 4,
                  }}
                >
                  {step.label}
                </p>
                <p
                  style={{
                    fontSize: 14,
                    color: "var(--t2)",
                    lineHeight: 1.5,
                  }}
                >
                  {step.description}
                </p>
              </div>

              {/* Connector arrow (desktop only, not after last) */}
              {i < STEPS.length - 1 && (
                <div
                  className="hidden md:block"
                  style={{
                    position: "absolute",
                    right: -20,
                    top: "50%",
                    color: "var(--t4)",
                    fontSize: 18,
                  }}
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
