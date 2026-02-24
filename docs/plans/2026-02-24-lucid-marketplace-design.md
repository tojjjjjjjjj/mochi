# Mochi — Feed Your AI Superpowers

## Design Document

**Date:** 2026-02-24
**Status:** Draft — awaiting approval
**Domain:** mochi.market

---

## Vision

Mochi is a security-first, agent-agnostic marketplace for AI skills and prompts — disguised as a candy store. It's the curated, trustworthy alternative to the current Wild West of scattered Twitter threads, Notion docs, and GitHub scrapers full of malware masquerading as marketplaces.

**Core promise:** If it's on Mochi, it's safe, it's delicious, and it works.

**One thing we do better than everyone:** Trust.

**Brand energy:** Nintendo meets LEGO meets candy shop. Playful, warm, modular, delightful. Not a developer tool — a toy store for AI power-ups.

---

## Brand Language

Everything stays in the metaphor. No tech jargon.

| Traditional         | Mochi                          |
|---------------------|--------------------------------|
| Install             | Feed                           |
| Browse              | Browse the Menu                |
| Categories          | Flavors                        |
| Popular / Trending  | Sweetest / Hottest             |
| New                 | Fresh (out the kitchen)        |
| Install count       | "2,400 fed"                    |
| Author profile      | Chef / Kitchen                 |
| Curated collection  | Mochi Box                      |
| Personal collection | My Lunchbox                    |
| Lucid Originals     | House Specials                 |
| Security verified   | Taste-tested                   |
| Premium / Featured  | Chef's Pick                    |
| Skill / Prompt      | Mochi (a single mochi)         |

**Tagline:** "Feed your AI superpowers."

**CTA language:**
- "Feed to Claude" / "Feed to ChatGPT"
- "Preview the flavor"
- "Browse the menu"
- "What's fresh today?"

---

## Phase 1 — Launch (48 hours)

### What We're Building

A curated catalog site with 20-30 "House Specials" — battle-tested mochis across major flavors. Beautiful UI, instant feed-to-clipboard, shareable links with gorgeous OG cards.

**Not** a full marketplace yet. No submissions, no accounts, no scanning pipeline. Just an incredible collection on a beautiful site that's worth tweeting about.

### Content Types

**1. Skills** (SKILL.md format)
- Structured agent instructions for Claude Code, Codex CLI, Gemini CLI, OpenCode
- "Feed to Claude" button generates install command
- Plugin registry integration: `claude plugin add mochi-market/<skill-name>`

**2. Prompts**
- Standalone prompt templates anyone can use
- "Feed to Claude" / "Feed to ChatGPT" copies to clipboard with smooth UX
- Variable placeholders highlighted (e.g., `[APP TYPE]`, `[PERSONA]`)

**Both are just "mochis" to the user.** The technical distinction is invisible.

### Flavors (Categories)

- 🟦 Design — UI/UX, visual design, design systems
- 🟧 Development — frontend, backend, architecture
- 🟨 Marketing — growth, social, launch strategy
- 🟩 Writing — copywriting, content, documentation
- 🟪 Strategy — business, product, planning
- 🟥 Productivity — workflows, automation, organization
- 🩷 Branding — identity, naming, brand voice

### Pages

1. **Home / Menu** — Hero ("Feed your AI superpowers"), featured House Specials, flavor grid, sweetest mochis
2. **Flavor page** — Filterable grid of mochis within a flavor (e.g., all Design mochis)
3. **Mochi detail page** — Full mochi view: description, preview, compatible agents, feed count, "Feed to [Agent]" button
4. **About / Story** — What Mochi is, why it exists, the trust story, the malware problem we're solving

### Key Features (48h scope)

- Search across all mochis
- Filter by flavor, content type (skill vs prompt), compatible agent
- "Feed to [Agent]" on every detail page (copies command or prompt)
- OG meta tags for beautiful Twitter/social cards (critical for viral sharing)
- Mobile responsive
- Playful, warm visual design — rounded shapes, soft gradients, candy palette
- Micro-interactions (subtle animations on hover, feed confirmation toast)

### Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Database:** Supabase (Postgres + Row Level Security)
- **Hosting:** Vercel
- **Domain:** mochi.market

### Data Model

```
mochis
  - id (uuid)
  - title (text)
  - slug (text, unique)
  - description (text — short, punchy, what it does)
  - tagline (text — the one-liner, e.g., "Turns Claude into a senior Apple designer")
  - content (text — the actual prompt/skill content)
  - type (enum: 'prompt' | 'skill')
  - flavor (text — category/flavor)
  - tags (text[])
  - compatible_with (text[] — e.g., ['claude', 'chatgpt', 'codex', 'gemini'])
  - feed_count (int, default 0)
  - is_house_special (bool, default true — House Special badge for Phase 1)
  - preview_description (text — what the output looks like / example result)
  - created_at (timestamp)
  - updated_at (timestamp)
```

### Dogfooding Strategy

Every prompt we use to build Mochi becomes a House Special:

- UI/UX design prompt → 🟦 Design flavor
- Branding/identity prompt → 🩷 Branding flavor
- Landing page copy prompt → 🟩 Writing flavor
- Component architecture prompt → 🟧 Development flavor
- Launch marketing prompt → 🟨 Marketing flavor
- Visual design system prompt → 🟦 Design flavor

"Built with the same mochis we serve."

---

## Phase 2 — Marketplace (Weeks 2-3)

### Community Submissions ("Open Kitchen")
- Simple web form: paste your prompt or link a GitHub repo
- Chef profiles (sign in with GitHub or email)
- Submission queue with autonomous review

### Autonomous Security Pipeline ("Taste Testing")
- **Layer 1 — Static Scan** (<5s): Pattern matching for known malicious signatures, exfiltration attempts, prompt injection
- **Layer 2 — AI Agent Review** (~30s): Claude reviews as security auditor, plain-english safety report
- **Layer 3 — Sandboxed Execution** (~2-5min): Skills only, run in isolated container, monitor file/network access
- Safety grade: displayed on each mochi's page
- Public safety report ("Taste Test Results")

### Reputation & Social
- Chef profiles with submission history and reputation score
- Upvotes / "Yum" reactions
- Feed counts (social proof)
- "Sweetest this week" / "Fresh today" sections
- Mochi Boxes — curated collections by Chefs (public, followable)

### My Lunchbox (Personal Collections)
- Save mochis to personal collections
- Organize by project, workflow, or however you want
- Share your lunchbox — public link, Twitter card
- Follow other people's lunchboxes

---

## Phase 3 — Growth (Month 2+)

- MCP server support (new content type)
- CLI tool (`mochi feed <name>`)
- API access for tool integrations
- Paid tier for teams / private lunchboxes / enterprise
- Chef monetization (optional premium mochis)
- "Mochi Box" bundles — curated packs for specific workflows
- Plugin registry so Claude Code can install directly from mochi.market

---

## Design Principles

1. **Trust over quantity** — 30 taste-tested mochis beats 270,000 scraped ones
2. **Delightful by default** — Every page should feel like it was designed by someone who gives a shit
3. **Zero friction** — See it, feed it, use it. No signup required for Phase 1
4. **Dogfood everything** — If we used a mochi to build Mochi, it goes on the menu
5. **Agent-agnostic** — Not a Claude store. Feed any AI.
6. **Stay in the metaphor** — No "install," no "deploy," no "configure." Feed. Menu. Flavor. Mochi.

---

## Visual Identity (Direction)

- **Palette:** Warm, candy-inspired. Soft pastels + bold accents. Not dark mode by default (contrast with every dev tool). Option for dark mode.
- **Typography:** Rounded, friendly sans-serif. Nothing sharp or corporate.
- **Shapes:** Soft rounded rectangles, pill shapes, circles. Nothing with hard corners.
- **Illustrations:** Simple, playful character or mascot potential. Mochi character?
- **Motion:** Soft bouncy micro-interactions. Things feel squishy, not snappy.
- **Overall vibe:** If Nintendo made a marketplace website.

---

## Success Metrics (48h launch)

- Site is live at mochi.market
- 20-30 high-quality House Specials across all flavors
- Every mochi is feedable and shareable
- OG cards render beautifully on Twitter
- Mobile experience is polished
- The site itself makes people want to tweet about it
- "Built with the same mochis we serve" story is visible
