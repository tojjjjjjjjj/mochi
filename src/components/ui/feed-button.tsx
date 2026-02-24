"use client";

import { useToast } from "@/components/ui/toast";
import { supabase } from "@/lib/supabase";

type FeedButtonProps = {
  content: string;
  type: "prompt" | "skill";
  slug: string;
};

export default function FeedButton({ content, type, slug }: FeedButtonProps) {
  const { showToast } = useToast();

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(content);
      showToast("Copied! Paste into your AI \u{1F361}");
    } catch {
      showToast("Couldn't copy — try manually!");
    }

    // Fire-and-forget: increment feed count
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (supabase.rpc as any)("increment_feed_count", { mochi_slug: slug }).then();
  };

  return (
    <button
      onClick={handleClick}
      className="btn-bouncy inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#2D2424] text-white font-semibold text-sm cursor-pointer hover:bg-[#3D3434] active:scale-95"
      style={{
        boxShadow: "0 4px 14px rgba(45, 36, 36, 0.25)",
      }}
    >
      <span aria-hidden="true">
        {type === "prompt" ? "\u{1F4CB}" : "\u{26A1}"}
      </span>
      {type === "prompt" ? "Copy Prompt" : "Copy Skill"}
    </button>
  );
}
