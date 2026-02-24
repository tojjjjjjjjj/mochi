# Mochi Market Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build and deploy mochi.market — a curated, security-first AI skills & prompts catalog with 20-30 House Specials, ready to share on Twitter.

**Architecture:** Next.js 15 App Router with Supabase Postgres for data. Static generation for catalog pages (fast loads, SEO). Server components for data fetching, client components only where interactivity is needed (search, copy button, toasts). All mochis seeded via Supabase, rendered as static pages at build time.

**Tech Stack:** Next.js 15, Tailwind CSS v4, Supabase (Postgres + JS client), Vercel, TypeScript

---

## Task 1: Project Scaffolding

**Files:**
- Create: `package.json`, `next.config.ts`, `tailwind.config.ts`, `tsconfig.json`
- Create: `src/app/layout.tsx`, `src/app/page.tsx`
- Create: `src/lib/supabase.ts`
- Create: `.env.local` (gitignored)
- Create: `.gitignore`

**Step 1: Initialize Next.js project**

Run:
```bash
cd /Users/euphoria/Downloads/Projects/lucid
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm
```

**Step 2: Install dependencies**

Run:
```bash
npm install @supabase/supabase-js
npm install -D @types/node
```

**Step 3: Set up environment variables**

Create `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=<to-be-filled>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<to-be-filled>
```

**Step 4: Create Supabase client utility**

Create `src/lib/supabase.ts`:
```typescript
import { createClient } from '@supabase/supabase-js'
import type { Database } from '@/types/database'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)
```

**Step 5: Create database types**

Create `src/types/database.ts`:
```typescript
export type Mochi = {
  id: string
  title: string
  slug: string
  description: string
  tagline: string
  content: string
  type: 'prompt' | 'skill'
  flavor: string
  flavor_emoji: string
  tags: string[]
  compatible_with: string[]
  feed_count: number
  is_house_special: boolean
  preview_description: string | null
  created_at: string
  updated_at: string
}

export type Flavor = {
  name: string
  slug: string
  emoji: string
  color: string
  description: string
}

export interface Database {
  public: {
    Tables: {
      mochis: {
        Row: Mochi
        Insert: Omit<Mochi, 'id' | 'created_at' | 'updated_at' | 'feed_count'>
        Update: Partial<Mochi>
      }
    }
  }
}
```

**Step 6: Verify dev server starts**

Run: `npm run dev`
Expected: Server running at localhost:3000, default Next.js page renders

**Step 7: Initialize git and commit**

Run:
```bash
git init
git add -A
git commit -m "feat: initialize next.js project with supabase client"
```

---

## Task 2: Supabase Database Setup

**Files:**
- Create: `supabase/schema.sql`
- Create: `supabase/seed.sql` (placeholder — full seed in Task 8)

**Step 1: Create Supabase project**

Manual step: Go to supabase.com, create new project "mochi-market", copy URL and anon key into `.env.local`.

**Step 2: Write database schema**

Create `supabase/schema.sql`:
```sql
-- Mochis table
CREATE TABLE IF NOT EXISTS mochis (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT NOT NULL,
  tagline TEXT NOT NULL,
  content TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('prompt', 'skill')),
  flavor TEXT NOT NULL,
  flavor_emoji TEXT NOT NULL DEFAULT '🍡',
  tags TEXT[] DEFAULT '{}',
  compatible_with TEXT[] DEFAULT '{}',
  feed_count INTEGER DEFAULT 0,
  is_house_special BOOLEAN DEFAULT true,
  preview_description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_mochis_flavor ON mochis(flavor);
CREATE INDEX idx_mochis_slug ON mochis(slug);
CREATE INDEX idx_mochis_type ON mochis(type);

-- Row Level Security
ALTER TABLE mochis ENABLE ROW LEVEL SECURITY;

-- Public read access (no auth needed for Phase 1)
CREATE POLICY "Public read access" ON mochis
  FOR SELECT USING (true);

-- Updated at trigger
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER mochis_updated_at
  BEFORE UPDATE ON mochis
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

-- Feed count increment function (called via RPC)
CREATE OR REPLACE FUNCTION increment_feed_count(mochi_slug TEXT)
RETURNS VOID AS $$
BEGIN
  UPDATE mochis SET feed_count = feed_count + 1 WHERE slug = mochi_slug;
END;
$$ LANGUAGE plpgsql;
```

**Step 3: Run schema in Supabase**

Manual step: Run the SQL in Supabase SQL Editor.

**Step 4: Verify connection works**

Temporarily add to `src/app/page.tsx`:
```typescript
import { supabase } from '@/lib/supabase'

export default async function Home() {
  const { data, error } = await supabase.from('mochis').select('*')
  return <pre>{JSON.stringify({ data, error }, null, 2)}</pre>
}
```

Run: `npm run dev`, visit localhost:3000
Expected: `{ "data": [], "error": null }`

**Step 5: Commit**

```bash
git add supabase/ src/
git commit -m "feat: add supabase schema and verify connection"
```

---

## Task 3: Design System & Core Components

**Files:**
- Create: `src/lib/constants.ts` (flavors, colors, brand constants)
- Create: `src/components/ui/mochi-card.tsx`
- Create: `src/components/ui/feed-button.tsx`
- Create: `src/components/ui/flavor-badge.tsx`
- Create: `src/components/ui/agent-badge.tsx`
- Create: `src/components/ui/search-bar.tsx`
- Create: `src/components/ui/toast.tsx`
- Modify: `src/app/globals.css` (design tokens, custom styles)
- Modify: `src/app/layout.tsx` (fonts, base layout)

> **For Claude:** Use the frontend-design skill for all component design. The visual direction is: Nintendo meets candy shop. Soft rounded shapes, warm pastels with bold accents, bouncy micro-interactions. NOT dark-mode-first. Light, warm, inviting. Rounded sans-serif typography. Everything should feel squishy and delightful. Think: if Nintendo made a marketplace website. Reference the design doc at `docs/plans/2026-02-24-lucid-marketplace-design.md` for brand language.

**Step 1: Define brand constants and flavor config**

Create `src/lib/constants.ts`:
```typescript
export const FLAVORS = [
  { name: 'Design', slug: 'design', emoji: '🟦', color: '#6366f1', bgLight: '#eef2ff', description: 'UI/UX, visual design, design systems' },
  { name: 'Development', slug: 'development', emoji: '🟧', color: '#f97316', bgLight: '#fff7ed', description: 'Frontend, backend, architecture' },
  { name: 'Marketing', slug: 'marketing', emoji: '🟨', color: '#eab308', bgLight: '#fefce8', description: 'Growth, social, launch strategy' },
  { name: 'Writing', slug: 'writing', emoji: '🟩', color: '#22c55e', bgLight: '#f0fdf4', description: 'Copywriting, content, documentation' },
  { name: 'Strategy', slug: 'strategy', emoji: '🟪', color: '#a855f7', bgLight: '#faf5ff', description: 'Business, product, planning' },
  { name: 'Productivity', slug: 'productivity', emoji: '🟥', color: '#ef4444', bgLight: '#fef2f2', description: 'Workflows, automation, organization' },
  { name: 'Branding', slug: 'branding', emoji: '🩷', color: '#ec4899', bgLight: '#fdf2f8', description: 'Identity, naming, brand voice' },
] as const

export const AGENTS = [
  { id: 'claude', name: 'Claude', icon: '🟤' },
  { id: 'chatgpt', name: 'ChatGPT', icon: '🟢' },
  { id: 'gemini', name: 'Gemini', icon: '🔵' },
  { id: 'codex', name: 'Codex CLI', icon: '⚪' },
  { id: 'copilot', name: 'Copilot', icon: '🟣' },
] as const

export const SITE = {
  name: 'Mochi',
  tagline: 'Feed your AI superpowers.',
  description: 'A curated marketplace of taste-tested AI skills and prompts. No malware, no garbage, no bullshit.',
  url: 'https://mochi.market',
} as const
```

**Step 2: Set up global styles and fonts**

Update `src/app/globals.css` with candy-shop design tokens — warm palette, rounded defaults, soft shadows.

Update `src/app/layout.tsx` with:
- Rounded, friendly font (e.g., DM Sans, Plus Jakarta Sans, or Nunito)
- Base metadata for SEO
- Toast provider wrapper
- Light warm background

**Step 3: Build MochiCard component**

Create `src/components/ui/mochi-card.tsx`:
- Displays: emoji, title, tagline, flavor badge, compatible agent icons, feed count
- Rounded corners, soft shadow, hover animation (slight lift + shadow increase)
- Links to `/mochi/[slug]`
- Responsive: works in grid layouts

**Step 4: Build FeedButton component**

Create `src/components/ui/feed-button.tsx`:
- Client component (needs clipboard API + state)
- "Feed to Claude" / "Feed to ChatGPT" dropdown or primary button
- Copies prompt content to clipboard
- For skills: shows install command (`claude plugin add mochi-market/<slug>`)
- Shows success toast on copy ("Copied! Paste into Claude 🍡")
- Increments feed_count via Supabase RPC
- Bouncy press animation

**Step 5: Build FlavorBadge component**

Create `src/components/ui/flavor-badge.tsx`:
- Pill-shaped badge with flavor color + emoji
- Used on cards and detail pages
- Links to `/flavor/[slug]`

**Step 6: Build AgentBadge component**

Create `src/components/ui/agent-badge.tsx`:
- Small badge showing compatible agent (icon + name)
- Used in rows on cards and detail pages

**Step 7: Build SearchBar component**

Create `src/components/ui/search-bar.tsx`:
- Client component with controlled input
- Rounded pill shape, search icon, clear button
- Debounced search (300ms)
- Calls parent onChange with search term
- Placeholder: "Search the menu..."

**Step 8: Build Toast component**

Create `src/components/ui/toast.tsx`:
- Simple toast notification system
- Appears bottom-center, auto-dismisses after 3s
- Soft rounded style, success/info variants
- Context provider pattern for global access

**Step 9: Verify all components render**

Create a temporary test page at `src/app/test/page.tsx` that renders every component with mock data. Visually verify in browser.

**Step 10: Commit**

```bash
git add src/
git commit -m "feat: add design system and core UI components"
```

---

## Task 4: Layout — Header, Footer, Navigation

**Files:**
- Create: `src/components/layout/header.tsx`
- Create: `src/components/layout/footer.tsx`
- Modify: `src/app/layout.tsx`

**Step 1: Build Header**

Create `src/components/layout/header.tsx`:
- Mochi logo/wordmark (left) — text-based for now, stylized "🍡 mochi"
- Navigation: Menu (browse all), Flavors dropdown, About
- Search bar (integrated or expandable)
- Mobile: hamburger menu
- Sticky top, slight blur backdrop

**Step 2: Build Footer**

Create `src/components/layout/footer.tsx`:
- "Made with 🍡 by Mochi" or similar
- Links: About, GitHub (if applicable), Twitter
- "Feed your AI superpowers."
- Simple, not heavy

**Step 3: Integrate into layout**

Update `src/app/layout.tsx` to include Header and Footer wrapping `{children}`.

**Step 4: Verify navigation works on mobile and desktop**

Run: `npm run dev`, test at various viewport sizes.

**Step 5: Commit**

```bash
git add src/
git commit -m "feat: add header, footer, and responsive layout"
```

---

## Task 5: Home Page

**Files:**
- Modify: `src/app/page.tsx`
- Create: `src/components/home/hero.tsx`
- Create: `src/components/home/flavor-grid.tsx`
- Create: `src/components/home/featured-mochis.tsx`

**Step 1: Build Hero section**

Create `src/components/home/hero.tsx`:
- Large headline: "Feed your AI superpowers."
- Subtitle: "Taste-tested skills and prompts for Claude, ChatGPT, Gemini, and more. No malware. No garbage. Just the good stuff."
- Primary CTA: "Browse the Menu"
- Visual: playful illustration or animated mochi character (CSS-only for now, can upgrade later)
- Full-width, generous padding, warm gradient background

**Step 2: Build Flavor Grid**

Create `src/components/home/flavor-grid.tsx`:
- Grid of flavor cards (one per flavor from constants)
- Each card: emoji, name, description, mochi count
- Links to `/flavor/[slug]`
- Responsive: 2 cols mobile, 3-4 cols desktop

**Step 3: Build Featured Mochis section**

Create `src/components/home/featured-mochis.tsx`:
- "🔥 Sweetest Mochis" or "🍡 House Specials" heading
- Grid of MochiCards (top 6-8 by feed_count)
- Fetched server-side from Supabase
- "See all" link to browse page

**Step 4: Compose Home page**

Update `src/app/page.tsx`:
```typescript
import { supabase } from '@/lib/supabase'
import { Hero } from '@/components/home/hero'
import { FlavorGrid } from '@/components/home/flavor-grid'
import { FeaturedMochis } from '@/components/home/featured-mochis'

export default async function Home() {
  const { data: mochis } = await supabase
    .from('mochis')
    .select('*')
    .eq('is_house_special', true)
    .order('feed_count', { ascending: false })
    .limit(8)

  return (
    <main>
      <Hero />
      <FeaturedMochis mochis={mochis ?? []} />
      <FlavorGrid />
    </main>
  )
}
```

**Step 5: Verify home page renders with empty state**

Run: `npm run dev`
Expected: Hero, empty featured section (no mochis yet), flavor grid all render.

**Step 6: Commit**

```bash
git add src/
git commit -m "feat: build home page with hero, flavor grid, featured mochis"
```

---

## Task 6: Flavor (Category) Page

**Files:**
- Create: `src/app/flavor/[slug]/page.tsx`
- Create: `src/components/flavor/mochi-grid.tsx`
- Create: `src/components/flavor/flavor-header.tsx`

**Step 1: Build Flavor Header**

Create `src/components/flavor/flavor-header.tsx`:
- Flavor emoji + name as large heading
- Flavor description
- Mochi count
- Colored accent matching flavor

**Step 2: Build Mochi Grid with filters**

Create `src/components/flavor/mochi-grid.tsx`:
- Client component (needs search + filter state)
- SearchBar at top
- Filter pills: All, Prompts, Skills
- Filter pills: compatible agent filter
- Grid of MochiCards
- Empty state: "No mochis in this flavor yet 🍡"

**Step 3: Build Flavor page**

Create `src/app/flavor/[slug]/page.tsx`:
```typescript
import { supabase } from '@/lib/supabase'
import { FLAVORS } from '@/lib/constants'
import { FlavorHeader } from '@/components/flavor/flavor-header'
import { MochiGrid } from '@/components/flavor/mochi-grid'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return FLAVORS.map((f) => ({ slug: f.slug }))
}

export default async function FlavorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const flavor = FLAVORS.find((f) => f.slug === slug)
  if (!flavor) notFound()

  const { data: mochis } = await supabase
    .from('mochis')
    .select('*')
    .eq('flavor', flavor.name)
    .order('feed_count', { ascending: false })

  return (
    <main>
      <FlavorHeader flavor={flavor} count={mochis?.length ?? 0} />
      <MochiGrid mochis={mochis ?? []} />
    </main>
  )
}
```

**Step 4: Add metadata for SEO**

Add `generateMetadata` function for dynamic page titles and descriptions per flavor.

**Step 5: Verify flavor pages render**

Run: `npm run dev`, visit `/flavor/design`, `/flavor/marketing`, etc.
Expected: Headers render with correct flavor info, empty grids.

**Step 6: Commit**

```bash
git add src/
git commit -m "feat: add flavor category pages with filterable mochi grid"
```

---

## Task 7: Mochi Detail Page

**Files:**
- Create: `src/app/mochi/[slug]/page.tsx`
- Create: `src/components/mochi/mochi-detail.tsx`
- Create: `src/components/mochi/mochi-content.tsx`
- Create: `src/components/mochi/copy-content.tsx`

**Step 1: Build Mochi Content display**

Create `src/components/mochi/mochi-content.tsx`:
- Renders the actual prompt/skill content in a styled code block
- Syntax highlighting or at minimum a monospace styled container
- Line numbers optional but nice
- Variable placeholders (`[LIKE THIS]`) highlighted in a distinct color

**Step 2: Build Copy Content component**

Create `src/components/mochi/copy-content.tsx`:
- Client component
- "Copy full prompt" button above the content block
- Copies raw content to clipboard
- Toast confirmation

**Step 3: Build Mochi Detail layout**

Create `src/components/mochi/mochi-detail.tsx`:
- Title (large)
- Tagline (subtitle)
- Flavor badge + agent badges row
- Feed count: "🍡 2,400 fed"
- "House Special" badge if applicable
- FeedButton (prominent, primary CTA)
- Mochi content block (the actual prompt)
- Preview description section (what the output looks like)
- Back link to flavor page

**Step 4: Build Detail page**

Create `src/app/mochi/[slug]/page.tsx`:
- Fetch mochi by slug from Supabase
- 404 if not found
- Render MochiDetail
- generateMetadata for SEO + OG tags (critical for Twitter sharing)

**Step 5: Add OG image generation (stretch but important)**

Create `src/app/mochi/[slug]/opengraph-image.tsx`:
- Next.js OG image generation using `ImageResponse`
- Shows: mochi title, tagline, flavor color accent, "mochi.market" branding
- Clean, shareable card that looks great on Twitter

**Step 6: Verify detail page renders**

Will need seed data (Task 8), but verify the route structure works.

**Step 7: Commit**

```bash
git add src/
git commit -m "feat: add mochi detail page with feed button and OG image"
```

---

## Task 8: Seed Content — House Specials

**Files:**
- Create: `supabase/seed.ts` (TypeScript seed script)
- Create: `src/data/house-specials.ts` (mochi content)

**Step 1: Create House Specials data file**

Create `src/data/house-specials.ts` with 20-30 mochis across all flavors.

Include the prompts used during the build process (dogfooding) plus additional high-quality prompts. Each mochi needs:
- title, slug, description, tagline
- content (the actual prompt text)
- type ('prompt' or 'skill')
- flavor, flavor_emoji
- tags, compatible_with
- preview_description

**Flavor distribution target:**
- 🟦 Design: 4-5 mochis
- 🟧 Development: 4-5 mochis
- 🟨 Marketing: 3-4 mochis
- 🟩 Writing: 3-4 mochis
- 🟪 Strategy: 3-4 mochis
- 🟥 Productivity: 3-4 mochis
- 🩷 Branding: 3-4 mochis

**Step 2: Create seed script**

Create `supabase/seed.ts`:
- Imports house specials data
- Upserts all mochis into Supabase
- Can be run repeatedly without duplicates (upsert on slug)

**Step 3: Run seed script**

Run: `npx tsx supabase/seed.ts`
Expected: "Seeded X mochis successfully"

**Step 4: Verify mochis appear on site**

Run: `npm run dev`
Expected: Home page shows featured mochis, flavor pages show mochis, detail pages work.

**Step 5: Commit**

```bash
git add src/data/ supabase/
git commit -m "feat: seed 20-30 house special mochis across all flavors"
```

---

## Task 9: Browse All / Menu Page

**Files:**
- Create: `src/app/menu/page.tsx`

**Step 1: Build Menu page**

Create `src/app/menu/page.tsx`:
- "Browse the Menu" heading
- Reuses MochiGrid component from Task 6
- Shows ALL mochis across all flavors
- Flavor filter pills at top
- Search bar
- Type filter (prompts / skills / all)

**Step 2: Add to navigation**

Update header nav to link to `/menu`.

**Step 3: Verify**

Run: `npm run dev`, browse `/menu`
Expected: All mochis displayed, filters work.

**Step 4: Commit**

```bash
git add src/
git commit -m "feat: add browse all menu page"
```

---

## Task 10: About Page

**Files:**
- Create: `src/app/about/page.tsx`

**Step 1: Build About page**

Create `src/app/about/page.tsx`:
- The trust story: why Mochi exists
- The problem: 36% of skills have security flaws, 76 confirmed malicious payloads
- The solution: taste-tested, curated, safe
- "Built with the same mochis we serve" section
- Coming soon: community submissions, autonomous security pipeline
- Keep it concise, warm, on-brand

**Step 2: Commit**

```bash
git add src/
git commit -m "feat: add about page with trust story"
```

---

## Task 11: Polish & Micro-interactions

**Files:**
- Various component files
- Modify: `src/app/globals.css`

**Step 1: Add hover animations to MochiCard**

Subtle lift on hover, shadow increase, smooth transition.

**Step 2: Add bouncy FeedButton press animation**

Scale down slightly on press, bounce back.

**Step 3: Add page transitions**

Subtle fade-in on page content.

**Step 4: Add loading states**

Skeleton loaders for mochi grids while data loads (mostly for client-side filtered views).

**Step 5: Mobile polish**

Test all pages on mobile viewport, fix any layout issues.

**Step 6: Commit**

```bash
git add src/
git commit -m "feat: add micro-interactions and mobile polish"
```

---

## Task 12: Deploy to Vercel + Domain

**Step 1: Push to GitHub**

```bash
git remote add origin <github-repo-url>
git push -u origin main
```

**Step 2: Deploy to Vercel**

- Connect GitHub repo to Vercel
- Add environment variables (NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY)
- Deploy

**Step 3: Connect mochi.market domain**

- Add custom domain in Vercel dashboard
- Update DNS records at registrar
- Verify SSL certificate

**Step 4: Verify production**

- All pages load
- OG cards render on Twitter card validator
- Feed buttons work
- Mobile looks good
- Search works

**Step 5: Commit any production fixes**

```bash
git add -A
git commit -m "feat: production deployment and domain setup"
```

---

## Execution Notes

- **Tasks 1-2** are setup — must be sequential
- **Tasks 3-4** are design system + layout — sequential (layout depends on components)
- **Tasks 5, 6, 7** are pages — can be parallelized after Task 4
- **Task 8** is seed data — can start anytime but pages need it to verify
- **Tasks 9-10** are secondary pages — after core pages work
- **Task 11** is polish — after everything functional
- **Task 12** is deploy — last

**Total estimated tasks for subagents:** 12 tasks, most with 4-6 steps each.
