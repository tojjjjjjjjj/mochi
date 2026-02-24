import { AGENTS } from "@/lib/constants";

type AgentBadgeProps = {
  agentId: string;
};

export default function AgentBadge({ agentId }: AgentBadgeProps) {
  const agent = AGENTS.find((a) => a.id === agentId);

  if (!agent) return null;

  return (
    <span
      className="inline-flex items-center"
      style={{
        gap: 4,
        padding: "4px 10px",
        borderRadius: "9999px",
        fontSize: 12,
        fontWeight: 500,
        backgroundColor: "var(--bg-secondary)",
        color: "var(--label-secondary)",
      }}
    >
      <span aria-hidden="true">{agent.icon}</span>
      {agent.name}
    </span>
  );
}
