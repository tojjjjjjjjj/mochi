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
      className="btn-bouncy inline-flex items-center justify-center gap-2 cursor-pointer"
      style={{
        background: "linear-gradient(135deg, #FF6B9D, #FFB088)",
        color: "#FFFFFF",
        fontWeight: 600,
        fontSize: 15,
        borderRadius: "9999px",
        padding: "12px 32px",
        border: "none",
        minHeight: 44,
        boxShadow: "0 4px 14px rgba(255, 107, 157, 0.3)",
      }}
    >
      <span aria-hidden="true">
        {type === "prompt" ? "\u{1F4CB}" : "\u{26A1}"}
      </span>
      {type === "prompt" ? "Copy Prompt" : "Copy Skill"}
    </button>
  );
}
