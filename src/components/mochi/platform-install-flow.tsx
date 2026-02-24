"use client";

import { useState, useCallback } from "react";
import { AGENTS, INSTALL_INSTRUCTIONS } from "@/lib/constants";
import type { InstallMethod } from "@/lib/constants";
import { useToast } from "@/components/ui/toast";
import { supabase } from "@/lib/supabase";

type PlatformInstallFlowProps = {
  content: string;
  type: "prompt" | "skill";
  slug: string;
  compatibleWith: string[];
};

export default function PlatformInstallFlow({
  content,
  type,
  slug,
  compatibleWith,
}: PlatformInstallFlowProps) {
  const { showToast } = useToast();
  const [selectedPlatform, setSelectedPlatform] = useState(
    compatibleWith[0] ?? "claude"
  );
  const [selectedMethodIdx, setSelectedMethodIdx] = useState(0);
  // Key to force re-mount of steps for animation replay
  const [animKey, setAnimKey] = useState(0);

  const platformInstructions = INSTALL_INSTRUCTIONS[selectedPlatform];
  const methods: InstallMethod[] = platformInstructions
    ? platformInstructions[type]
    : [];
  const activeMethod = methods[selectedMethodIdx] ?? methods[0];

  const platformName =
    AGENTS.find((a) => a.id === selectedPlatform)?.name ?? selectedPlatform;

  const handlePlatformChange = useCallback(
    (platformId: string) => {
      setSelectedPlatform(platformId);
      setSelectedMethodIdx(0);
      setAnimKey((k) => k + 1);
    },
    []
  );

  const handleMethodChange = useCallback((idx: number) => {
    setSelectedMethodIdx(idx);
    setAnimKey((k) => k + 1);
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      showToast(`Copied! Now follow the steps for ${platformName} \u{1F361}`);
    } catch {
      showToast("Couldn't copy — try manually!");
    }

    // Fire-and-forget: increment feed count
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (supabase.rpc as any)("increment_feed_count", {
      mochi_slug: slug,
    }).then();
  };

  return (
    <div
      style={{
        backgroundColor: "var(--bg-secondary)",
        borderRadius: "var(--radius-lg)",
        padding: "28px 24px",
      }}
    >
      {/* Label */}
      <p
        style={{
          fontSize: 11,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: "var(--label-tertiary)",
          marginBottom: 14,
        }}
      >
        Set up on
      </p>

      {/* Platform selector pills */}
      <div className="flex flex-wrap" style={{ gap: 8, marginBottom: 16 }}>
        {compatibleWith.map((platformId) => {
          const agent = AGENTS.find((a) => a.id === platformId);
          if (!agent) return null;
          const isActive = platformId === selectedPlatform;

          return (
            <button
              key={platformId}
              onClick={() => handlePlatformChange(platformId)}
              className={isActive ? "platform-pill-selected" : ""}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "8px 16px",
                borderRadius: "9999px",
                fontSize: 14,
                fontWeight: 600,
                border: isActive
                  ? "2px solid var(--brand-pink)"
                  : "2px solid transparent",
                backgroundColor: isActive
                  ? "var(--bg-primary)"
                  : "var(--bg-primary)",
                color: isActive
                  ? "var(--label-primary)"
                  : "var(--label-secondary)",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              <span aria-hidden="true">{agent.icon}</span>
              {agent.name}
            </button>
          );
        })}
      </div>

      {/* Method tabs — only if >1 method */}
      {methods.length > 1 && (
        <div className="flex flex-wrap" style={{ gap: 6, marginBottom: 18 }}>
          {methods.map((method, idx) => {
            const isActive = idx === selectedMethodIdx;
            return (
              <button
                key={method.label}
                onClick={() => handleMethodChange(idx)}
                style={{
                  padding: "5px 14px",
                  borderRadius: "9999px",
                  fontSize: 13,
                  fontWeight: 500,
                  border: "none",
                  backgroundColor: isActive
                    ? "var(--label-primary)"
                    : "transparent",
                  color: isActive
                    ? "var(--bg-primary)"
                    : "var(--label-tertiary)",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                {method.label}
              </button>
            );
          })}
        </div>
      )}

      {/* Numbered steps */}
      {activeMethod && (
        <ol
          key={animKey}
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            marginBottom: 20,
          }}
        >
          {activeMethod.steps.map((step, idx) => (
            <li
              key={idx}
              className="install-step"
              style={{
                display: "flex",
                gap: 12,
                alignItems: "flex-start",
                marginBottom: step.command ? 8 : 14,
              }}
            >
              {/* Step number */}
              <span
                style={{
                  flexShrink: 0,
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  background: "var(--gradient-primary)",
                  color: "#fff",
                  fontSize: 13,
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 1,
                }}
              >
                {idx + 1}
              </span>

              <div style={{ flex: 1, minWidth: 0 }}>
                <p
                  style={{
                    fontSize: 15,
                    fontWeight: 500,
                    color: "var(--label-primary)",
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  {step.text}
                </p>

                {/* CLI command block */}
                {step.command && (
                  <div
                    style={{
                      marginTop: 8,
                      marginBottom: 6,
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      backgroundColor: "var(--label-primary)",
                      borderRadius: "var(--radius-sm)",
                      padding: "10px 14px",
                    }}
                  >
                    <code
                      style={{
                        flex: 1,
                        fontFamily:
                          '"JetBrains Mono", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace',
                        fontSize: 13,
                        color: "var(--bg-primary)",
                        wordBreak: "break-all",
                      }}
                    >
                      {step.command.replace("{slug}", slug)}
                    </code>
                    <button
                      onClick={async () => {
                        try {
                          await navigator.clipboard.writeText(
                            step.command!.replace("{slug}", slug)
                          );
                          showToast("Command copied!");
                        } catch {
                          showToast("Couldn't copy — try manually!");
                        }
                      }}
                      style={{
                        flexShrink: 0,
                        padding: "4px 10px",
                        borderRadius: 8,
                        fontSize: 12,
                        fontWeight: 600,
                        border: "1px solid rgba(255,255,255,0.2)",
                        backgroundColor: "transparent",
                        color: "var(--bg-primary)",
                        cursor: "pointer",
                      }}
                    >
                      Copy
                    </button>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      )}

      {/* Full-width copy button */}
      <button
        onClick={handleCopy}
        className="btn-bouncy"
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          background: "linear-gradient(135deg, #FF6B9D, #FFB088)",
          color: "#FFFFFF",
          fontWeight: 600,
          fontSize: 15,
          borderRadius: "9999px",
          padding: "14px 32px",
          border: "none",
          minHeight: 48,
          boxShadow: "0 4px 14px rgba(255, 107, 157, 0.3)",
          cursor: "pointer",
        }}
      >
        <span aria-hidden="true">
          {type === "prompt" ? "\u{1F4CB}" : "\u{26A1}"}
        </span>
        {type === "prompt" ? "Copy Prompt" : "Copy Skill"}
      </button>
    </div>
  );
}
