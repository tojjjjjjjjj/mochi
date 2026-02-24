import { AGENTS } from "@/lib/constants";

type AgentBadgeProps = {
  agentId: string;
};

export default function AgentBadge({ agentId }: AgentBadgeProps) {
  const agent = AGENTS.find((a) => a.id === agentId);

  if (!agent) return null;

  return (
    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-500">
      <span aria-hidden="true">{agent.icon}</span>
      {agent.name}
    </span>
  );
}
