"use client";

import { ToastProvider } from "@/components/ui/toast";
import MochiCard from "@/components/ui/mochi-card";
import FeedButton from "@/components/ui/feed-button";
import FlavorBadge from "@/components/ui/flavor-badge";
import AgentBadge from "@/components/ui/agent-badge";
import SearchBar from "@/components/ui/search-bar";
import type { Mochi } from "@/types/database";

const mockMochis: Mochi[] = [
  {
    id: "1",
    title: "Landing Page Roast",
    slug: "landing-page-roast",
    description: "Get brutally honest feedback on your landing page.",
    tagline: "Brutally honest landing page feedback in seconds",
    content: "You are an expert UX critic. Roast this landing page...",
    type: "prompt",
    flavor: "design",
    flavor_emoji: "\u{1F7E6}",
    tags: ["ux", "design", "feedback"],
    compatible_with: ["claude", "chatgpt", "gemini"],
    feed_count: 342,
    is_house_special: true,
    preview_description: null,
    created_at: "2025-01-01",
    updated_at: "2025-01-01",
  },
  {
    id: "2",
    title: "Code Review Sensei",
    slug: "code-review-sensei",
    description: "Deep code review with architectural insights.",
    tagline: "Senior-engineer-level code reviews on demand",
    content: "You are a senior staff engineer. Review this code...",
    type: "skill",
    flavor: "development",
    flavor_emoji: "\u{1F7E7}",
    tags: ["code", "review", "engineering"],
    compatible_with: ["claude", "codex", "copilot"],
    feed_count: 1204,
    is_house_special: false,
    preview_description: null,
    created_at: "2025-01-02",
    updated_at: "2025-01-02",
  },
  {
    id: "3",
    title: "Tweet Thread Generator",
    slug: "tweet-thread-generator",
    description: "Turn any idea into a viral tweet thread.",
    tagline: "Viral threads from a single idea",
    content: "You are a social media strategist...",
    type: "prompt",
    flavor: "marketing",
    flavor_emoji: "\u{1F7E8}",
    tags: ["twitter", "social", "content"],
    compatible_with: ["chatgpt", "claude"],
    feed_count: 89,
    is_house_special: true,
    preview_description: null,
    created_at: "2025-01-03",
    updated_at: "2025-01-03",
  },
  {
    id: "4",
    title: "Blog Post Polisher",
    slug: "blog-post-polisher",
    description: "Turn rough drafts into publish-ready posts.",
    tagline: "From rough draft to polished prose",
    content: "You are an expert editor...",
    type: "prompt",
    flavor: "writing",
    flavor_emoji: "\u{1F7E9}",
    tags: ["writing", "editing", "blog"],
    compatible_with: ["claude", "chatgpt", "gemini"],
    feed_count: 567,
    is_house_special: false,
    preview_description: null,
    created_at: "2025-01-04",
    updated_at: "2025-01-04",
  },
  {
    id: "5",
    title: "Startup Pitch Deck Pro",
    slug: "startup-pitch-deck-pro",
    description: "Create investor-ready pitch decks from scratch.",
    tagline: "Investor-ready pitch decks in minutes",
    content: "You are a startup advisor...",
    type: "skill",
    flavor: "strategy",
    flavor_emoji: "\u{1F7EA}",
    tags: ["startup", "pitch", "fundraising"],
    compatible_with: ["claude", "chatgpt"],
    feed_count: 203,
    is_house_special: false,
    preview_description: null,
    created_at: "2025-01-05",
    updated_at: "2025-01-05",
  },
  {
    id: "6",
    title: "Brand Voice Finder",
    slug: "brand-voice-finder",
    description: "Discover and define your brand's unique voice.",
    tagline: "Find the voice your brand was born with",
    content: "You are a branding expert...",
    type: "prompt",
    flavor: "branding",
    flavor_emoji: "\u{1FA77}",
    tags: ["brand", "voice", "identity"],
    compatible_with: ["claude", "chatgpt", "gemini"],
    feed_count: 445,
    is_house_special: true,
    preview_description: null,
    created_at: "2025-01-06",
    updated_at: "2025-01-06",
  },
];

export default function TestPage() {
  return (
    <ToastProvider>
      <div className="min-h-screen p-8 max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-2">Mochi Design System</h1>
          <p className="text-gray-500">Component test page for visual verification</p>
        </div>

        {/* SearchBar */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">SearchBar</h2>
          <SearchBar onSearch={(q) => console.log("Search:", q)} />
        </section>

        {/* FlavorBadges */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">FlavorBadges</h2>
          <div className="flex flex-wrap gap-3 mb-4">
            <FlavorBadge flavor="design" size="md" />
            <FlavorBadge flavor="development" size="md" />
            <FlavorBadge flavor="marketing" size="md" />
            <FlavorBadge flavor="writing" size="md" />
            <FlavorBadge flavor="strategy" size="md" />
            <FlavorBadge flavor="productivity" size="md" />
            <FlavorBadge flavor="branding" size="md" />
          </div>
          <div className="flex flex-wrap gap-2">
            <FlavorBadge flavor="design" size="sm" />
            <FlavorBadge flavor="development" size="sm" />
            <FlavorBadge flavor="marketing" size="sm" />
            <FlavorBadge flavor="writing" size="sm" />
            <FlavorBadge flavor="strategy" size="sm" />
            <FlavorBadge flavor="productivity" size="sm" />
            <FlavorBadge flavor="branding" size="sm" />
          </div>
        </section>

        {/* AgentBadges */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">AgentBadges</h2>
          <div className="flex flex-wrap gap-2">
            <AgentBadge agentId="claude" />
            <AgentBadge agentId="chatgpt" />
            <AgentBadge agentId="gemini" />
            <AgentBadge agentId="codex" />
            <AgentBadge agentId="copilot" />
          </div>
        </section>

        {/* FeedButton */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">FeedButton</h2>
          <div className="flex flex-wrap gap-4">
            <FeedButton
              content="You are an expert UX critic. Roast this landing page..."
              type="prompt"
              slug="landing-page-roast"
            />
            <FeedButton
              content="You are a senior staff engineer..."
              type="skill"
              slug="code-review-sensei"
            />
          </div>
        </section>

        {/* MochiCards Grid */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">MochiCards</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {mockMochis.map((mochi) => (
              <MochiCard key={mochi.id} mochi={mochi} />
            ))}
          </div>
        </section>
      </div>
    </ToastProvider>
  );
}
