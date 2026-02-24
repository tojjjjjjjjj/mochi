import { AGENTS } from "@/lib/constants";

type AgentBadgeProps = {
  agentId: string;
  variant?: "pill" | "dot";
};

export default function AgentBadge({ agentId, variant = "pill" }: AgentBadgeProps) {
  const agent = AGENTS.find((a) => a.id === agentId);

  if (!agent) return null;

  if (variant === "dot") {
    return (
      <span
        title={agent.name}
        aria-label={agent.name}
        style={{
          width: 22,
          height: 22,
          borderRadius: 6,
          backgroundColor: agent.squareColor,
          color: "#FFFFFF",
          fontSize: 10,
          fontWeight: 700,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          lineHeight: 1,
        }}
      >
        {agent.letter}
      </span>
    );
  }

  return (
    <span
      className="inline-flex items-center"
      style={{
        gap: 4,
        padding: "4px 10px",
        borderRadius: "9999px",
        fontSize: 12,
        fontWeight: 500,
        backgroundColor: "var(--bg2)",
        color: "var(--t2)",
      }}
    >
      <span aria-hidden="true">{agent.icon}</span>
      {agent.name}
    </span>
  );
}
