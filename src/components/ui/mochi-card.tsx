import Link from "next/link";
import type { Mochi } from "@/types/database";
import { FLAVORS, AGENTS } from "@/lib/constants";

type MochiCardProps = {
  mochi: Mochi;
};

export default function MochiCard({ mochi }: MochiCardProps) {
  const flavor = FLAVORS.find((f) => f.slug === mochi.flavor);
  const compatibleAgents = AGENTS.filter((a) =>
    mochi.compatible_with.includes(a.id)
  );

  return (
    <Link href={`/mochi/${mochi.slug}`} className="block">
      <div
        className="mochi-card relative bg-white cursor-pointer"
        style={{
          borderRadius: "var(--radius-xl)",
          padding: "24px",
          boxShadow: "var(--elevation-1)",
          borderTop: `3px solid ${flavor?.color ?? "var(--label-tertiary)"}`,
        }}
      >
        {/* House Special Badge */}
        {mochi.is_house_special && (
          <span
            className="absolute inline-flex items-center gap-1 font-semibold"
            style={{
              top: 16,
              right: 16,
              padding: "2px 10px",
              borderRadius: "9999px",
              fontSize: 12,
              backgroundColor: "#FFFCEB",
              color: "#D4A017",
              border: "1px solid #FFE066",
            }}
          >
            <span aria-hidden="true">&#9733;</span> House Special
          </span>
        )}

        {/* Flavor Emoji + Title */}
        <div className="flex items-start gap-3" style={{ marginBottom: 12 }}>
          <span className="leading-none" style={{ fontSize: 28, marginTop: 2 }} aria-hidden="true">
            {mochi.flavor_emoji}
          </span>
          <div className="min-w-0 flex-1">
            <h3
              style={{
                fontWeight: 700,
                fontSize: 22,
                lineHeight: 1.27,
                color: "var(--label-primary)",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {mochi.title}
            </h3>
            <p
              style={{
                fontSize: 15,
                fontWeight: 400,
                color: "var(--label-secondary)",
                marginTop: 4,
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                lineHeight: 1.47,
              }}
            >
              {mochi.tagline}
            </p>
          </div>
        </div>

        {/* Flavor tag */}
        {flavor && (
          <span
            className="inline-block"
            style={{
              padding: "3px 12px",
              borderRadius: "9999px",
              fontSize: 14,
              fontWeight: 600,
              backgroundColor: flavor.bgLight,
              color: flavor.color,
              marginBottom: 16,
            }}
          >
            {flavor.emoji} {flavor.name}
          </span>
        )}

        {/* Bottom row: agents + feed count */}
        <div
          className="flex items-center justify-between"
          style={{
            paddingTop: 12,
            marginTop: "auto",
            borderTop: "1px solid rgba(60, 60, 67, 0.06)",
          }}
        >
          <div className="flex items-center gap-1">
            {compatibleAgents.map((agent) => (
              <span
                key={agent.id}
                style={{ fontSize: 15 }}
                title={agent.name}
                aria-label={agent.name}
              >
                {agent.icon}
              </span>
            ))}
          </div>
          <span
            style={{
              fontSize: 12,
              fontWeight: 500,
              color: "var(--label-tertiary)",
            }}
          >
            {mochi.feed_count.toLocaleString()} fed
          </span>
        </div>
      </div>
    </Link>
  );
}
