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
      <div className="mochi-card relative bg-white rounded-2xl p-5 cursor-pointer border border-gray-100"
        style={{
          boxShadow: "0 2px 12px rgba(0, 0, 0, 0.04), 0 1px 4px rgba(0, 0, 0, 0.02)",
        }}
      >
        {/* House Special Badge */}
        {mochi.is_house_special && (
          <span className="absolute top-3 right-3 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-600 border border-amber-200">
            <span aria-hidden="true">&#9733;</span> House Special
          </span>
        )}

        {/* Flavor Emoji + Title */}
        <div className="flex items-start gap-3 mb-2">
          <span className="text-2xl leading-none mt-0.5" aria-hidden="true">
            {mochi.flavor_emoji}
          </span>
          <div className="min-w-0 flex-1">
            <h3 className="font-bold text-base text-[#2D2424] leading-snug truncate">
              {mochi.title}
            </h3>
            <p className="text-sm text-gray-500 mt-0.5 line-clamp-2">
              {mochi.tagline}
            </p>
          </div>
        </div>

        {/* Flavor tag */}
        {flavor && (
          <span
            className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium mb-3"
            style={{
              backgroundColor: flavor.bgLight,
              color: flavor.color,
            }}
          >
            {flavor.emoji} {flavor.name}
          </span>
        )}

        {/* Bottom row: agents + feed count */}
        <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-50">
          <div className="flex items-center gap-1">
            {compatibleAgents.map((agent) => (
              <span
                key={agent.id}
                className="text-sm"
                title={agent.name}
                aria-label={agent.name}
              >
                {agent.icon}
              </span>
            ))}
          </div>
          <span className="text-xs text-gray-400 font-medium">
            {mochi.feed_count.toLocaleString()} fed
          </span>
        </div>
      </div>
    </Link>
  );
}
