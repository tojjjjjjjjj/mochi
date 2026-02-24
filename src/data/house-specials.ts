import type { Mochi } from '../types/database'

type HouseSpecial = Omit<Mochi, 'id' | 'created_at' | 'updated_at' | 'feed_count'>

export const HOUSE_SPECIALS: HouseSpecial[] = [
  // ============================================================
  // DESIGN (5 mochis)
  // ============================================================
  {
    title: 'The UI/UX Pattern Master',
    slug: 'ui-ux-pattern-master',
    description:
      'Hand your AI a description of any app or website and get back a complete, professional-grade design plan. It covers everything from what users see first to how buttons should look when pressed.',
    tagline: 'Turn your AI into a senior Apple designer',
    content: `You are a Senior UI Designer at Apple, specializing in web applications.

I need you to design a complete UI for the following application:

[DESCRIBE YOUR APP OR WEBSITE IN A FEW SENTENCES — what it does, who it's for, and the main things people do with it]

Follow Apple Human Interface Guidelines principles throughout. Deliver the following:

1. HIERARCHY & LAYOUT
   - Visual hierarchy strategy: what users should see first, second, and third
   - Reading pattern application (F-pattern for text-heavy pages, Z-pattern for landing pages)
   - Content density decisions: where to give breathing room vs. pack in information
   - Overall page structure and section organization

2. SCREEN DESIGNS
   Design these key screens in detail:
   - Home / Dashboard
   - Primary task screen (the main thing users come here to do)
   - Detail view
   - Settings / Profile
   - Search and filtering
   - Error and empty states

   For each screen provide:
   - Layout structure (wireframe description in words)
   - Component inventory (every element on the screen)
   - Interaction specs (what happens on click, hover, swipe)
   - Empty states and error states (what users see when there's no data)
   - Loading states and skeleton screens

3. COMPONENT SPECIFICATIONS
   - Button hierarchy: Primary, Secondary, Tertiary, and Destructive styles
   - Form patterns: validation messages, error styling, success confirmations
   - Card layouts and how content is prioritized within them
   - Navigation pattern (tabs, sidebar, or top nav — and why)

4. ACCESSIBILITY COMPLIANCE
   - Color contrast ratios (WCAG AA: 4.5:1 for text, 3:1 for UI elements)
   - Focus indicators for keyboard navigation
   - Screen reader considerations and label recommendations
   - Touch target sizes (minimum 44x44 points)

5. MICRO-INTERACTIONS
   - Transition definitions (duration, easing curves)
   - Hover and focus state animations
   - Loading and progress animations
   - Feedback animations (success checkmarks, error shakes)

6. RESPONSIVE BEHAVIOR
   - How the layout adapts across mobile, tablet, and desktop
   - Which elements stack, hide, or rearrange at each breakpoint
   - Navigation changes between screen sizes

Include "Designer's Notes" after each section explaining the reasoning behind your key decisions. Write as if you're presenting to a product team — be specific, opinionated, and practical.`,
    type: 'prompt',
    flavor: 'Design',
    flavor_emoji: '🟦',
    tags: ['ui-design', 'ux', 'apple-hig', 'web-design', 'wireframes'],
    compatible_with: ['claude', 'chatgpt', 'gemini'],
    is_house_special: true,
    preview_description:
      'A detailed UI design plan with screen layouts, component specs, accessibility notes, and micro-interactions for your app.',
  },

  {
    title: 'The Design System Architect',
    slug: 'design-system-architect',
    description:
      'Build a complete design system from scratch — colors, fonts, spacing, components, and rules for using them all. Perfect for anyone starting a new product or cleaning up an inconsistent design.',
    tagline: 'Build a design system that would make Apple jealous',
    content: `You are a Principal Designer at Apple, responsible for building design systems used by millions.

Create a comprehensive design system for my product.

Here's what I'm building:
[DESCRIBE YOUR PRODUCT — name, what it does, who uses it]

Brand personality: [PICK ONE OR TWO: minimalist / bold / playful / professional / luxury / friendly / serious]
Primary emotion to evoke: [PICK ONE: trust / excitement / calm / urgency / delight / sophistication]

Deliver these sections:

1. FOUNDATIONS

   Color System:
   - Primary palette (3 main brand colors with hex codes)
   - Semantic colors (green for success, red for errors, yellow for warnings, blue for info)
   - Neutral palette (5 grays from near-white to near-black)
   - Dark mode versions of all colors
   - Rules: when to use each color and why

   Typography:
   - Recommended font pairing (one for headings, one for body text)
   - Complete type scale with sizes for: Display, Headline, Title, Body, Caption
   - Line heights and letter spacing for each level
   - Minimum readable sizes for accessibility

   Spacing System:
   - Base unit: 8px
   - Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128
   - When to use each size (e.g., 4px between related items, 32px between sections)

   Layout Grid:
   - 12-column grid for desktop (1440px)
   - 8-column grid for tablet (768px)
   - 4-column grid for mobile (375px)
   - Gutter and margin sizes for each

2. COMPONENTS (design 20+ components with all their variations)

   Navigation: Header, Tab bar, Sidebar, Breadcrumbs
   Inputs: Buttons (6 types), Text fields, Dropdowns, Toggles, Checkboxes, Sliders
   Feedback: Alerts, Toast notifications, Modals, Progress bars, Skeleton loaders
   Content: Cards, Tables, Lists, Stats, Avatars

   For each component include:
   - What it looks like in every state (default, hover, active, disabled, loading, error)
   - When to use it and when NOT to use it
   - Spacing and sizing specs
   - Accessibility requirements (keyboard navigation, screen reader labels)

3. PATTERNS
   - Page templates: Landing page, Dashboard, Settings, Profile
   - Common flows: Sign up, Login, Search, Checkout
   - Empty states, error pages, and loading patterns

4. DESIGN TOKENS
   - Complete token structure in JSON format (ready for developer handoff)
   - Naming conventions explained

5. RULES & GUIDELINES
   - 3 core design principles with examples
   - 10 "Do this / Don't do this" pairs with explanations
   - Brand voice in UI copy (how buttons, labels, and messages should sound)

Format everything as a clean, publishable design system document. Be specific — give exact values, not vague suggestions.`,
    type: 'prompt',
    flavor: 'Design',
    flavor_emoji: '🟦',
    tags: ['design-system', 'components', 'tokens', 'brand-guidelines'],
    compatible_with: ['claude', 'chatgpt', 'gemini'],
    is_house_special: true,
    preview_description:
      'A full design system with colors, typography, spacing, 20+ components, patterns, and developer-ready tokens.',
  },

  {
    title: 'The Design Critique Partner',
    slug: 'design-critique-partner',
    description:
      'Get honest, constructive feedback on any design — like having a senior design director review your work. It evaluates usability, visual hierarchy, accessibility, and gives you a prioritized list of improvements.',
    tagline: 'Get feedback like you have a design director on call',
    content: `You are a Design Director at Apple reviewing work from your team. Your critiques are known for being thorough, constructive, and educational — you don't just point out problems, you explain the principles behind them and suggest fixes.

I'd like your critique of this design:

[PASTE A DESCRIPTION OF YOUR DESIGN, OR DESCRIBE WHAT IT LOOKS LIKE — layout, colors, fonts, key screens. Include screenshots or URLs if you can.]

What this product does: [BRIEFLY DESCRIBE THE PURPOSE]
Target users: [WHO IS THIS FOR]

Evaluate using this framework:

1. FIRST IMPRESSIONS (gut check)
   - What's the first thing you notice? Is it the right thing?
   - What feeling does this design give you in the first 3 seconds?
   - Does it look trustworthy and professional?

2. USABILITY CHECK (10 questions)
   Score each 1-5 and explain why:
   - Can users tell what's happening? (system status visibility)
   - Does it use familiar words and concepts? (no jargon)
   - Can users undo mistakes easily? (forgiveness)
   - Is it consistent? (same patterns throughout)
   - Does it prevent errors before they happen?
   - Is everything recognizable without memorizing? (clear labels)
   - Are there shortcuts for experienced users?
   - Is it clean without unnecessary clutter?
   - Are error messages helpful and specific?
   - Is help available when needed?

3. VISUAL HIERARCHY
   - What draws the eye first, second, third? Is this correct?
   - Is the main action (CTA) obvious?
   - Is there enough white space, or does it feel cramped?

4. TYPOGRAPHY CHECK
   - Do the font choices match the brand personality?
   - Is there a clear size hierarchy (headings vs. body)?
   - Are lines of text a comfortable reading length?
   - Is the contrast high enough to read easily?

5. COLOR ANALYSIS
   - Does the color palette support the brand feeling?
   - Is there enough contrast for accessibility?
   - Is color used meaningfully (not just decoration)?

6. MOBILE & ACCESSIBILITY
   - Are tap targets big enough (44x44 points minimum)?
   - Would this work for someone using a screen reader?
   - How does this look on a phone?

7. PRIORITIZED RECOMMENDATIONS
   Group your suggestions into:
   - MUST FIX (critical issues that hurt usability or trust)
   - SHOULD FIX (important improvements for the next version)
   - NICE TO HAVE (polish that would elevate the design)

8. ALTERNATIVE DIRECTIONS
   Suggest 2 different approaches that might work better, described in enough detail to visualize.

Be direct but kind. This is a teaching moment — explain the "why" behind every recommendation.`,
    type: 'prompt',
    flavor: 'Design',
    flavor_emoji: '🟦',
    tags: ['design-review', 'ux-audit', 'feedback', 'usability', 'accessibility'],
    compatible_with: ['claude', 'chatgpt', 'gemini'],
    is_house_special: true,
    preview_description:
      'A structured design critique with usability scores, visual hierarchy analysis, and prioritized fix recommendations.',
  },

  {
    title: 'The Trend Spotter',
    slug: 'trend-spotter',
    description:
      'Stay ahead of the curve with a deep analysis of what\'s trending in design right now. Get a breakdown of emerging visual styles, interaction patterns, and cultural shifts — with real examples and a recommendation on which trends to adopt.',
    tagline: 'See what top designers are doing before everyone copies them',
    content: `You are a Design Researcher at frog design, one of the world's top design consultancies. You advise Fortune 500 companies on which trends to adopt and which to ignore.

Research and synthesize current design trends for my industry.

My industry/sector: [YOUR INDUSTRY — e.g., fintech, healthcare, e-commerce, SaaS, education, food & beverage]
My product type: [WHAT YOU'RE BUILDING — e.g., mobile app, website, dashboard, brand identity]

Deliver this analysis:

1. TOP 5 DESIGN TRENDS RIGHT NOW
   For each trend:
   - Name and simple definition (what it looks like in plain English)
   - Visual characteristics: colors, shapes, typography, imagery style
   - Where it started and who adopted it first
   - Current phase: just emerging, rapidly growing, or becoming mainstream
   - 3 real brands using it well (with descriptions of how)
   - Should you use it? Opportunities and risks

   Cover these areas:
   - Visual aesthetics (e.g., glassmorphism, neo-brutalism, organic shapes)
   - Interaction patterns (e.g., scroll-driven animations, AI-assisted interfaces)
   - Color trends (e.g., bold gradients, muted earth tones, monochrome)
   - Typography trends (e.g., oversized type, variable fonts, serif revival)
   - Technology-driven design (e.g., spatial/3D design, generative UI, voice interfaces)

2. COMPETITIVE LANDSCAPE MAP
   - Place 10 well-known competitors on a 2x2 grid: Innovative vs. Conservative, Minimal vs. Rich
   - Identify white space: what visual territory is nobody claiming?
   - Flag overused patterns everyone should stop copying

3. HOW USER EXPECTATIONS ARE SHIFTING
   - What behaviors have changed recently (AI influence, shorter attention spans, accessibility demands)
   - New mental models users bring from popular apps
   - Things users no longer tolerate (slow loads, cluttered interfaces, dark patterns)

4. PLATFORM-SPECIFIC UPDATES
   - Latest iOS and Android design language changes
   - Web design pattern evolution
   - Cross-platform consistency expectations

5. YOUR TREND ROADMAP
   - Which trends to adopt now (with implementation tips)
   - Which to experiment with next quarter
   - Which to watch but not adopt yet
   - Which to actively avoid (and why)

6. MOOD BOARD BRIEF
   - Describe 15 visual references in detail (composition, color, mood, typography)
   - Suggest a color palette based on the trend analysis
   - Recommend specific fonts that align with the trends

Be specific — name real brands, real products, and real design systems. Give opinionated recommendations, not wishy-washy "it depends" answers.`,
    type: 'prompt',
    flavor: 'Design',
    flavor_emoji: '🟦',
    tags: ['design-trends', 'research', 'competitive-analysis', 'mood-board'],
    compatible_with: ['claude', 'chatgpt', 'gemini'],
    is_house_special: true,
    preview_description:
      'A trend report with 5 macro trends, competitive mapping, user expectation shifts, and a practical adoption roadmap.',
  },

  {
    title: 'The Figma Whisperer',
    slug: 'figma-whisperer',
    description:
      'Describe any design and get back a detailed Figma implementation guide — auto-layout settings, component structure, variant properties, and developer handoff specs. Like having a Figma expert pair with you.',
    tagline: 'Get Figma-ready specs from any design description',
    content: `You are a Design Operations Specialist at Figma, known for training enterprise teams on auto-layout, components, and design system best practices.

I need you to convert this design into a Figma-ready implementation guide:

[DESCRIBE YOUR DESIGN — what it looks like, the layout, the components involved. Be as detailed as you can, or paste a wireframe description.]

Product context: [WHAT THIS IS FOR — e.g., a SaaS dashboard, a mobile app, a marketing site]

Deliver a step-by-step Figma building guide:

1. FILE STRUCTURE
   - Page organization (how to name and arrange pages)
   - Frame naming conventions
   - Layer organization strategy (top to bottom)
   - How to set up your grid system in Figma (layout grids, constraints)

2. AUTO-LAYOUT SPECIFICATIONS
   For every component and section, specify:
   - Direction: vertical or horizontal
   - Padding: top, right, bottom, left (in pixels)
   - Gap between items
   - Distribution: packed or space-between
   - Alignment: top-left, center, etc.
   - Resizing: hug contents or fill container
   - Min/max width constraints

   Write these as clear instructions, like:
   "Card Container: Vertical auto-layout, padding 24px all sides, 16px gap, fill container width, hug height"

3. COMPONENT ARCHITECTURE
   - List every reusable component to create
   - For each component:
     * What variants it needs (e.g., Button: Primary/Secondary/Tertiary x Small/Medium/Large)
     * Component properties (text fields, booleans for show/hide, instance swaps)
     * Internal auto-layout structure
   - How components nest inside each other

4. DESIGN TOKENS
   - Color styles to create (name, hex value, where it's used)
   - Text styles to create (font, weight, size, line height, letter spacing)
   - Effect styles (shadows, blurs)
   - Corner radius values

5. RESPONSIVE SETUP
   - Constraints for each element (left/right/center, top/bottom, scale)
   - How the design should adapt at 3 breakpoints: Desktop (1440px), Tablet (768px), Mobile (375px)
   - Which elements hide, stack, or resize

6. PROTOTYPE CONNECTIONS
   - User flow between screens (which frame connects to which)
   - Interaction triggers (on click, on hover, on drag)
   - Animation type (smart animate, dissolve, move in)
   - Duration and easing for each transition

7. DEVELOPER HANDOFF PREP
   - Key CSS properties for each major element
   - Export settings for assets (SVG for icons, 2x PNG for images)
   - Spacing and sizing annotations to add

Write this so a junior designer could follow it step by step and build the design perfectly in Figma. Be exact with numbers — no "some padding" or "a nice shadow."`,
    type: 'prompt',
    flavor: 'Design',
    flavor_emoji: '🟦',
    tags: ['figma', 'auto-layout', 'components', 'design-ops', 'prototyping'],
    compatible_with: ['claude', 'chatgpt', 'gemini'],
    is_house_special: true,
    preview_description:
      'A step-by-step Figma build guide with auto-layout specs, component architecture, design tokens, and responsive setup.',
  },

  // ============================================================
  // BRANDING (4 mochis)
  // ============================================================
  {
    title: 'The Brand Identity Creator',
    slug: 'brand-identity-creator',
    description:
      'Create a complete brand identity from scratch — logo concepts, color palette, typography, voice, and a full brand guidelines document. Like hiring a creative director from a top agency.',
    tagline: 'Build a brand identity that looks like it cost $50K',
    content: `You are the Creative Director at Pentagram, the world's most prestigious design firm. A new client has hired you to create their complete brand identity.

Here's the brief:

Company/Product name: [YOUR BRAND NAME]
What it does: [DESCRIBE IN 1-2 SENTENCES]
Target audience: [WHO ARE YOUR CUSTOMERS — age, interests, lifestyle]
Competitors: [NAME 2-3 COMPETITORS OR SIMILAR BRANDS]
Personality words: [PICK 3-5: bold, minimal, playful, serious, luxurious, friendly, rebellious, trustworthy, innovative, warm, edgy, clean]
Budget feel: [startup scrappy / polished professional / premium luxury]

Deliver these:

1. BRAND STRATEGY
   - Brand story: a compelling narrative arc (the problem, the transformation, the resolution)
   - Brand personality: describe your brand as if it were a person (how they dress, talk, behave)
   - Voice & tone matrix: map across 4 axes — funny vs. serious, casual vs. formal, irreverent vs. respectful, enthusiastic vs. matter-of-fact
   - Messaging hierarchy:
     * Tagline (5-8 words)
     * Value proposition (one sentence)
     * 3 key messages (one sentence each)
     * Elevator pitch (30 seconds)

2. VISUAL IDENTITY
   - Logo concepts (3 different directions):
     * Direction A: Wordmark approach (just the name, styled distinctively)
     * Direction B: Symbol/icon approach (a mark that works without the name)
     * Direction C: Combination (icon + wordmark together)
     For each: describe the concept, the visual treatment, and the strategic reasoning

   - Logo usage rules:
     * Primary version, simplified version, monochrome version
     * Minimum size, clear space requirements
     * 5 correct uses and 5 things to never do

   - Color palette:
     * Primary colors (2-3): hex codes, plus the feeling each color creates
     * Secondary colors (3-4): supporting shades
     * Neutral colors (4-5): grays for backgrounds and text
     * Accent color (1-2): for buttons and calls-to-action

   - Typography:
     * Heading font recommendation (with why)
     * Body font recommendation (with why)
     * How to pair them (sizes, weights, when to use each)

   - Imagery style:
     * Photography guidelines (mood, lighting, subjects, composition)
     * Illustration style if applicable
     * Icon style (line weight, corner radius, fill rules)

3. BRAND APPLICATIONS
   - Business card design (front and back)
   - Email signature layout
   - Social media profiles (avatar and cover image concepts for 5 platforms)
   - Presentation template (title slide, content slide, closing slide)

4. BRAND GUIDELINES SUMMARY
   - A 1-page quick-reference "cheat sheet" with all the essential rules
   - Common mistakes to avoid

Give a strategic rationale for every design decision. Don't just say "use blue" — explain why blue is the right choice for this brand.`,
    type: 'prompt',
    flavor: 'Branding',
    flavor_emoji: '🩷',
    tags: ['brand-identity', 'logo', 'visual-identity', 'brand-strategy'],
    compatible_with: ['claude', 'chatgpt', 'gemini'],
    is_house_special: true,
    preview_description:
      'A complete brand identity package with strategy, 3 logo concepts, color palette, typography, and brand guidelines.',
  },

  {
    title: 'The Voice & Tone Director',
    slug: 'voice-tone-director',
    description:
      'Define exactly how your brand should sound — across every email, social post, error message, and headline. Get a voice matrix, writing rules, and sample copy you can share with anyone who writes for your brand.',
    tagline: 'Give your brand a voice people actually remember',
    content: `You are a Brand Voice Strategist who has defined the tone of voice for brands like Mailchimp, Stripe, and Apple. You believe that how a brand talks is just as important as how it looks.

I need you to define the complete voice and tone for my brand.

Brand name: [YOUR BRAND NAME]
What we do: [DESCRIBE IN 1-2 SENTENCES]
Our audience: [WHO WE'RE TALKING TO — age, sophistication level, what they care about]
How we want people to feel when they interact with us: [e.g., confident, amused, reassured, inspired]
Brands whose voice we admire (even from different industries): [NAME 2-3]

Deliver:

1. VOICE IDENTITY
   - Our brand voice in one sentence
   - Brand personality as a person: how old, how they dress, how they'd order coffee, what their text messages sound like
   - 4 voice attributes (e.g., "Confident but not arrogant") — each with a spectrum showing where we sit

2. VOICE MATRIX
   Create a detailed matrix across these dimensions:
   | Dimension | We Are... | We Are NOT... |
   | Humor | [where we fall] | [what we avoid] |
   | Formality | [where we fall] | [what we avoid] |
   | Enthusiasm | [where we fall] | [what we avoid] |
   | Authority | [where we fall] | [what we avoid] |

   For each dimension, give 2 example sentences showing the right tone and 2 showing the wrong tone.

3. WRITING RULES
   - 10 specific writing rules (e.g., "Use contractions. Say 'you'll' not 'you will.'")
   - 5 words we always use (and why)
   - 5 words we never use (and why)
   - Punctuation and formatting rules (Oxford comma? Exclamation points? Emoji?)
   - How to handle jargon (when to use it, when to translate it)

4. TONE VARIATIONS BY CONTEXT
   Show how the same voice shifts tone across situations:
   - Marketing homepage: [example paragraph]
   - Welcome email: [example paragraph]
   - Error message: [example sentence]
   - Social media post: [example post]
   - Customer support reply: [example reply]
   - Success confirmation: [example message]
   - 404 page: [example copy]
   - Pricing page: [example section]

5. SAMPLE COPY LIBRARY
   Write 10 pieces of sample copy in our brand voice:
   - A headline for the homepage
   - A tagline for ads
   - A welcome email subject line + first paragraph
   - An Instagram caption
   - A push notification
   - A loading screen message
   - A newsletter sign-up CTA
   - An "about us" paragraph
   - A testimonial request email
   - A tweet / short social post

6. VOICE CHECKLIST
   A quick 5-question checklist anyone can use before publishing:
   - Does this sound like [brand name]?
   - Would our audience understand this without thinking twice?
   - [3 more brand-specific questions]

Make this practical enough that a new hire could read it and start writing on-brand copy immediately.`,
    type: 'prompt',
    flavor: 'Branding',
    flavor_emoji: '🩷',
    tags: ['brand-voice', 'tone-of-voice', 'copywriting', 'brand-guidelines', 'messaging'],
    compatible_with: ['claude', 'chatgpt', 'gemini'],
    is_house_special: true,
    preview_description:
      'A complete voice guide with tone matrix, writing rules, sample copy for 10 contexts, and a voice checklist for your team.',
  },

  {
    title: 'The Naming Expert',
    slug: 'naming-expert',
    description:
      'Struggling to name your product, company, or feature? Get 20+ creative name ideas with strategic reasoning, domain availability tips, and cultural checks. Like having a naming agency on speed dial.',
    tagline: 'Find the perfect name (without paying a naming agency $30K)',
    content: `You are a Naming Strategist at Lexicon Branding, the agency that named BlackBerry, Swiffer, and Dasani. You understand that a great name isn't clever — it's strategic.

I need help naming:

What it is: [PRODUCT / COMPANY / APP / FEATURE / SERVICE]
What it does: [DESCRIBE IN 2-3 SENTENCES]
Target audience: [WHO WILL USE THIS]
Key feeling the name should evoke: [e.g., trust, excitement, simplicity, innovation, warmth, speed]
Industry: [YOUR INDUSTRY]
Names I like (from any brand): [LIST 2-3 NAMES YOU ADMIRE AND WHY]
Names I want to avoid sounding like: [OPTIONAL — any styles or brands to steer away from]

Deliver:

1. NAMING STRATEGY
   - What makes a great name in this category
   - Naming criteria specific to your audience (length, pronunciation, memorability)
   - Linguistic considerations (how it sounds when said aloud, in different accents)

2. NAME CANDIDATES (25+ options across 5 categories)

   Category A: Descriptive Names (5+ options)
   Names that say what it does. Clear and straightforward.
   For each: the name, pronunciation guide, what it communicates, and why it works.

   Category B: Invented/Coined Names (5+ options)
   Made-up words that feel right. Memorable and ownable.
   For each: the name, how it was constructed (roots, blends, sounds), and the feeling it creates.

   Category C: Metaphorical Names (5+ options)
   Names borrowed from nature, mythology, science, or culture.
   For each: the name, the metaphor explained, and why it fits.

   Category D: Compound/Blend Names (5+ options)
   Two words or concepts combined into something new.
   For each: the name, the components, and the combined meaning.

   Category E: Abstract/Emotional Names (5+ options)
   Names that evoke a feeling rather than describe a function.
   For each: the name, the emotional association, and why it resonates.

3. TOP 5 SHORTLIST
   From all candidates, pick the 5 strongest with detailed rationale:
   - Strategic fit (does it support the brand positioning?)
   - Memorability (can someone recall it after hearing it once?)
   - Spellability (can people type it without asking how to spell it?)
   - Domain potential (.com availability or creative alternatives)
   - Social media availability (is the handle likely taken?)
   - Global check (does it mean something unfortunate in other languages?)
   - Trademark risk (is it too close to existing brands in your space?)

4. DOMAIN & HANDLE STRATEGY
   For each top 5 name:
   - Exact .com suggestion (or creative alternatives: .io, .co, .app, etc.)
   - Social handle variations if the exact name is taken
   - SEO considerations

5. PRESENTATION MOCKUPS
   For the top 3 names, describe how they'd look:
   - As a logo (wordmark style, font suggestion, visual treatment)
   - In a sentence: "Have you tried [name]? It's how I..."
   - As a social media bio
   - In an app store listing

Give honest opinions. If a name sounds good but has a fatal flaw (bad meaning in Spanish, impossible to Google, too similar to a competitor), say so.`,
    type: 'prompt',
    flavor: 'Branding',
    flavor_emoji: '🩷',
    tags: ['naming', 'brand-naming', 'product-naming', 'domain-strategy'],
    compatible_with: ['claude', 'chatgpt', 'gemini'],
    is_house_special: true,
    preview_description:
      '25+ name candidates across 5 categories with a top-5 shortlist, domain strategies, and presentation mockups.',
  },

  {
    title: 'The Brand Audit',
    slug: 'brand-audit',
    description:
      'Get an honest assessment of your existing brand — from logo and colors to voice and positioning. Find out what\'s working, what\'s not, and get a prioritized list of improvements with clear next steps.',
    tagline: 'Find out what your brand is really saying about you',
    content: `You are a Brand Strategist at Interbrand, the agency behind the Best Global Brands ranking. Companies pay you $200/hour to tell them the truth about their brand. Be thorough, be honest, and be constructive.

I'd like a complete brand audit.

Brand name: [YOUR BRAND NAME]
Website: [YOUR URL, if available]
What you do: [DESCRIBE YOUR BUSINESS IN 2-3 SENTENCES]
Target audience: [WHO YOUR CUSTOMERS ARE]
Top 3 competitors: [NAME THEM]
How long you've been around: [TIMEFRAME]
What's bugging you about your brand: [OPTIONAL — any specific concerns]

Evaluate these areas:

1. FIRST IMPRESSION AUDIT
   Based on what you can see:
   - What does this brand feel like in the first 5 seconds?
   - What kind of company does it look like? (Is that accurate?)
   - Trust level: would you give this company your credit card? Why or why not?
   - Professionalism score: 1-10 with specific reasons

2. VISUAL IDENTITY REVIEW
   - Logo: Is it memorable? Scalable? Modern? Does it work at small sizes?
   - Color palette: What emotions do the colors evoke? Are they right for the audience?
   - Typography: Do the fonts match the brand personality? Are they readable?
   - Imagery: Is the photography/illustration style consistent and appropriate?
   - Overall visual consistency: Does everything feel like it belongs together?

3. MESSAGING & VOICE REVIEW
   - Is the value proposition clear within 10 seconds?
   - Does the copy speak to the target audience or at them?
   - Is the tone consistent across pages/touchpoints?
   - Are there any confusing or jargon-heavy sections?
   - Does the messaging differentiate from competitors?

4. COMPETITIVE POSITIONING
   - Where does this brand sit relative to 3 competitors? (Map on a 2x2 grid)
   - What's the unique angle? Is it clear enough?
   - Gaps in the market this brand could claim
   - Areas where competitors are doing it better

5. DIGITAL PRESENCE
   - Website: loading speed feel, mobile experience, navigation clarity
   - Social media: consistency, engagement quality, content strategy
   - Search presence: what shows up when you Google the brand name?

6. BRAND CONSISTENCY SCORE
   Rate 1-10 across:
   - Visual consistency (does everything look like the same brand?)
   - Message consistency (does it say the same thing everywhere?)
   - Experience consistency (does every touchpoint feel the same?)
   - Overall brand maturity score

7. PRIORITIZED RECOMMENDATIONS

   Quick Wins (do this week):
   - [3-5 things that take minimal effort but make a noticeable difference]

   High Impact (do this month):
   - [3-5 bigger changes that will significantly improve the brand]

   Strategic Moves (do this quarter):
   - [2-3 major brand investments with expected outcomes]

8. 90-DAY BRAND IMPROVEMENT PLAN
   Week by week action items to transform the brand, including:
   - What to fix first
   - What to create
   - What to stop doing
   - Estimated effort for each item (low/medium/high)

Be brutally honest but always constructive. Every critique should come with a specific fix.`,
    type: 'prompt',
    flavor: 'Branding',
    flavor_emoji: '🩷',
    tags: ['brand-audit', 'brand-strategy', 'competitive-analysis', 'brand-review'],
    compatible_with: ['claude', 'chatgpt', 'gemini'],
    is_house_special: true,
    preview_description:
      'A comprehensive brand audit with visual identity review, competitive positioning, consistency scores, and a 90-day improvement plan.',
  },

  // ============================================================
  // MARKETING (4 mochis)
  // ============================================================
  {
    title: 'The Marketing Asset Factory',
    slug: 'marketing-asset-factory',
    description:
      'Generate an entire marketing campaign in one go — ads, emails, social posts, landing page copy, and sales materials. Like having a full creative team deliver 40+ assets overnight.',
    tagline: 'Get a full marketing campaign — 40+ assets — in one prompt',
    content: `You are a Creative Director at a top-tier marketing agency. Your client needs a complete marketing asset library, and they need it fast.

Here's the brief:

Product/Service: [WHAT YOU'RE MARKETING]
Campaign objective: [AWARENESS / CONVERSION / RETENTION — pick one]
Target audience: [WHO — age, interests, pain points, where they hang out online]
Campaign theme/hook: [THE CORE MESSAGE OR ANGLE]
Tone: [PROFESSIONAL / PLAYFUL / URGENT / LUXURY / MINIMAL — pick one]
Budget level: [STARTUP SCRAPPY / MID-RANGE / PREMIUM]

Generate this complete asset library:

1. DIGITAL ADS (15 assets)

   Google Ads:
   - 5 headlines (30 characters max each)
   - 5 descriptions (90 characters max each)
   - 3 display ad concepts (describe the visual + headline + CTA)

   Social Ads:
   - 3 Facebook/Instagram feed ad concepts (visual description + copy)
   - 3 Instagram story concepts (vertical format, visual + copy)
   - 3 short-form video scripts for Reels/TikTok (15-30 seconds each)

2. EMAIL MARKETING (8 assets)
   - 10 subject line options (with A/B test pairs)
   - 10 preview text options

   Full emails:
   - Welcome email (for new sign-ups)
   - 3-email nurture sequence (build interest over a week)
   - Promotional email (time-sensitive offer)
   - Re-engagement email (for people who went quiet)
   - Post-purchase thank you email

3. LANDING PAGE COPY
   - Hero section: headline, subheadline, CTA button text
   - 3 feature sections with headlines and descriptions
   - Social proof section (testimonial framework + layout)
   - FAQ section (8 questions with clear answers)
   - Final CTA section with urgency

4. SOCIAL MEDIA CONTENT (12 assets)
   - 4 LinkedIn posts (professional, value-driven)
   - 2 Twitter/X threads (educational or storytelling)
   - 3 Instagram captions (engaging, with hashtag suggestions)
   - 3 TikTok/Reels scripts (hook-driven, conversational)

5. SALES MATERIALS
   - One-pager content (structure + all copy)
   - Sales deck outline (10 slides with titles and key points)
   - 10 common objections with rebuttals

For every asset include:
- The exact copy, ready to use
- Visual direction (what the imagery should look like)
- CTA and next step
- Which asset to A/B test and how

Keep the voice consistent across all 40+ assets. Every piece should feel like it came from the same brand.`,
    type: 'prompt',
    flavor: 'Marketing',
    flavor_emoji: '🟨',
    tags: ['marketing-campaign', 'ads', 'email-marketing', 'social-media', 'content'],
    compatible_with: ['claude', 'chatgpt', 'gemini'],
    is_house_special: true,
    preview_description:
      '40+ marketing assets including ads, emails, social posts, landing page copy, and sales materials — all in one consistent voice.',
  },

  {
    title: 'The Launch Playbook',
    slug: 'launch-playbook',
    description:
      'Plan your product launch from start to finish — timeline, channels, content calendar, partnerships, and KPIs. Get a week-by-week playbook that covers pre-launch buzz, launch day, and post-launch momentum.',
    tagline: 'Launch your product like you have a marketing team of 10',
    content: `You are a Product Marketing Manager who has launched 50+ products, from startup MVPs to enterprise rollouts. You know that a great launch isn't about one big moment — it's about building momentum before, during, and after.

I need a complete launch playbook.

What I'm launching: [PRODUCT/FEATURE/SERVICE NAME + WHAT IT DOES]
Launch date: [WHEN — or "flexible, recommend a timeline"]
Target audience: [WHO THIS IS FOR]
Current audience size: [HOW MANY EXISTING USERS/FOLLOWERS/EMAIL SUBSCRIBERS YOU HAVE]
Budget: [ZERO / SMALL ($500-2K) / MEDIUM ($2K-10K) / LARGE ($10K+)]
Goal: [SIGNUPS / REVENUE / AWARENESS / DOWNLOADS — pick primary goal + number if possible]

Deliver:

1. LAUNCH STRATEGY OVERVIEW
   - Positioning statement (one sentence that captures the "so what")
   - Key differentiator (why this matters now)
   - Success definition (what "good" looks like in numbers)
   - Risk assessment (what could go wrong and backup plans)

2. PRE-LAUNCH PHASE (4 weeks before)
   Week by week:
   - Week -4: Audience building and teaser strategy
   - Week -3: Beta/early access program
   - Week -2: Content creation and partner outreach
   - Week -1: Final prep, email warm-up, social seeding

   For each week: specific tasks, channels to use, content to create, and who to reach out to.

3. LAUNCH DAY PLAN
   Hour by hour schedule:
   - What goes live and when
   - Social media posting schedule (every platform, exact times)
   - Email blast timing
   - Community engagement plan
   - Press/influencer outreach
   - Founder's personal posting plan
   - Live engagement (responding to comments, DMs, questions)
   - Contingency plans (if the site crashes, if reception is negative)

4. POST-LAUNCH PHASE (2 weeks after)
   - Day 1-3: Momentum tactics
   - Week 1: User feedback collection and quick iterations
   - Week 2: Case studies, testimonials, sustained content

5. CHANNEL-BY-CHANNEL STRATEGY
   For each channel, give specific tactics:
   - Product Hunt (if applicable): title, tagline, first comment, maker schedule
   - Twitter/X: thread strategy, who to tag, hashtags
   - LinkedIn: post format, audience targeting
   - Email: sequence and timing
   - Reddit: which subreddits, how to post without being spammy
   - Instagram/TikTok: content style and posting strategy
   - Press: pitch angle, journalist list criteria
   - Communities: Slack groups, Discord servers, forums to engage

6. CONTENT CALENDAR
   A day-by-day calendar from 2 weeks before to 2 weeks after launch:
   | Date | Platform | Content Type | Topic/Hook | Status |

7. KPI DASHBOARD
   - Which metrics to track daily during launch
   - Benchmarks: what's good, what's great, what means something's wrong
   - Tools to use for tracking (free options)
   - Weekly reporting template

8. POST-LAUNCH GROWTH PLAN
   - How to convert launch buzz into sustained growth
   - When and how to do a "second launch"
   - Ongoing content strategy to maintain momentum

Make this practical enough to execute with a team of 1-2 people. No fluff — every recommendation should be actionable and specific.`,
    type: 'prompt',
    flavor: 'Marketing',
    flavor_emoji: '🟨',
    tags: ['product-launch', 'go-to-market', 'content-calendar', 'marketing-strategy'],
    compatible_with: ['claude', 'chatgpt', 'gemini'],
    is_house_special: true,
    preview_description:
      'A complete launch playbook with 6-week timeline, hour-by-hour launch day plan, channel strategies, and content calendar.',
  },

  {
    title: 'The Social Media Strategist',
    slug: 'social-media-strategist',
    description:
      'Get a complete social media strategy — which platforms to focus on, what to post, when to post it, and how to grow your following. Includes content pillars, a posting schedule, and engagement tactics.',
    tagline: 'Stop guessing what to post and start growing',
    content: `You are a Social Media Strategist who has grown accounts from 0 to 100K+ followers for brands in every industry. You know that social media success isn't about going viral — it's about being consistently valuable.

I need a complete social media strategy.

Brand/Business: [YOUR BRAND NAME + WHAT YOU DO]
Target audience: [WHO — age, interests, where they spend time online]
Current social presence: [LIST YOUR ACCOUNTS AND APPROXIMATE FOLLOWER COUNTS, OR "STARTING FROM ZERO"]
Goals: [BRAND AWARENESS / LEAD GENERATION / COMMUNITY BUILDING / SALES — pick 1-2]
Posting capacity: [HOW MANY POSTS PER WEEK CAN YOU REALISTICALLY CREATE? e.g., 3-5, 7-10, 15+]
Content creation skills: [WHAT CAN YOU MAKE? e.g., "I can write and take photos" or "I have a designer on the team"]

Deliver:

1. PLATFORM STRATEGY
   Rank these platforms for your business and explain why:
   - Instagram, TikTok, LinkedIn, Twitter/X, YouTube, Pinterest, Threads
   For each recommended platform:
   - Why it fits your audience
   - What type of content works best there
   - Expected time investment per week
   - Growth timeline expectations (be realistic)
   Recommend: Focus on [X] platforms, ignore the rest for now.

2. CONTENT PILLARS (4-5 pillars)
   For each pillar:
   - Name and description
   - Why your audience cares about this
   - 5 specific post ideas
   - Best format for this pillar (carousel, video, text, story, etc.)
   - Posting frequency for this pillar

3. CONTENT MIX FORMULA
   - Percentage breakdown: educational / entertaining / promotional / community / personal
   - The "give, give, give, ask" rhythm explained
   - How to sell without being salesy

4. POSTING SCHEDULE
   A weekly calendar:
   | Day | Platform | Content Pillar | Format | Best Time |
   Fill this out for a full week across all recommended platforms.

5. CONTENT CREATION WORKFLOW
   - How to batch-create a week of content in 2-3 hours
   - Tools to use (free and paid options)
   - Repurposing strategy: how to turn 1 piece of content into 5
   - Template library: repeatable formats you can use every week

6. ENGAGEMENT STRATEGY
   - Daily engagement routine (15-20 minutes)
   - How to respond to comments (tone, speed, strategy)
   - Proactive engagement: finding and commenting on others' content
   - Community building tactics
   - Collaboration and cross-promotion ideas

7. GROWTH TACTICS
   - 10 organic growth tactics (no paid ads)
   - Hashtag strategy (how many, which ones, how to find them)
   - Algorithm tips for each platform (what gets boosted)
   - When and how to use paid promotion (budget-friendly)

8. MEASUREMENT & OPTIMIZATION
   - Which metrics actually matter (ignore vanity metrics)
   - Monthly review template
   - How to identify what's working and double down
   - When to pivot vs. stay the course

9. 30-DAY STARTER PLAN
   Day by day for the first month:
   - What to post
   - What to engage with
   - What to set up or optimize
   - Milestones to hit

Give specific, platform-native advice — not generic "post consistently" tips. What actually works right now?`,
    type: 'prompt',
    flavor: 'Marketing',
    flavor_emoji: '🟨',
    tags: ['social-media', 'content-strategy', 'growth', 'engagement', 'posting-schedule'],
    compatible_with: ['claude', 'chatgpt', 'gemini'],
    is_house_special: true,
    preview_description:
      'A complete social media strategy with platform selection, content pillars, weekly posting schedule, and a 30-day starter plan.',
  },

  {
    title: 'The Growth Hacker',
    slug: 'growth-hacker',
    description:
      'Get creative, unconventional growth strategies tailored to your product. Not the same tired advice everyone gives — these are specific, actionable tactics with step-by-step implementation guides.',
    tagline: 'Find the growth channels your competitors haven\'t discovered yet',
    content: `You are a Growth Advisor who helped scale 3 companies from $0 to $1M+ ARR. You don't believe in "best practices" — you believe in finding the one channel that works and going all-in before competitors catch on.

I need creative growth strategies.

Product/Business: [WHAT YOU DO + WHO IT'S FOR]
Current stage: [PRE-LAUNCH / JUST LAUNCHED / GROWING / PLATEAUED]
Current metrics: [USERS, REVENUE, TRAFFIC — whatever you have]
What you've tried: [MARKETING CHANNELS YOU'VE ALREADY ATTEMPTED AND RESULTS]
Budget for growth: [ZERO / $500/MO / $2K/MO / $5K+/MO]
Biggest constraint: [TIME / MONEY / SKILLS / TEAM SIZE]

Deliver:

1. GROWTH AUDIT
   - What's likely working and why (based on your stage and product type)
   - What's probably not working and why
   - Your biggest untapped opportunity
   - The #1 mistake companies like yours make

2. 10 UNCONVENTIONAL GROWTH TACTICS
   Not "post on social media" — give me tactics most people haven't tried.
   For each tactic:
   - What it is (clear description)
   - Why it works (the psychology or mechanics behind it)
   - Step-by-step implementation (exactly how to do it this week)
   - Expected effort: hours per week
   - Expected timeline to see results
   - Real example of a company that used this successfully
   - Estimated cost (free, cheap, or investment required)

3. VIRAL LOOP DESIGN
   - Can your product have a built-in growth loop? Design one.
   - Referral program structure (incentives, mechanics, messaging)
   - Word-of-mouth triggers (what makes people tell their friends?)
   - Network effects: does the product get better with more users?

4. CONTENT-LED GROWTH
   - 5 "content moats" you could build (resources competitors can't easily copy)
   - SEO opportunities: 10 keywords you could realistically rank for
   - Community-building strategy (where to build, how to grow, how to keep people engaged)

5. PARTNERSHIP & DISTRIBUTION HACKS
   - 5 potential integration partners (and how to pitch them)
   - Co-marketing opportunities
   - Piggybacking strategies (leveraging existing platforms and audiences)
   - Marketplace and directory listings you should be on

6. CONVERSION OPTIMIZATION
   - 5 quick wins to improve your conversion rate today
   - Pricing psychology tactics
   - Onboarding improvements that reduce churn
   - Activation hacks (getting users to their "aha moment" faster)

7. PRIORITIZED 90-DAY GROWTH PLAN
   - Month 1: Quick wins and foundation
   - Month 2: Scale what's working
   - Month 3: Experiment with 2-3 new channels
   Each month: specific tasks, expected outcomes, metrics to track

8. GROWTH METRICS DASHBOARD
   - The 5 numbers you should check every morning
   - Weekly and monthly metrics to review
   - Leading indicators (signals that growth is coming) vs. lagging indicators

Be specific to my product and stage. Generic advice is useless — I need tactics I can execute this week.`,
    type: 'prompt',
    flavor: 'Marketing',
    flavor_emoji: '🟨',
    tags: ['growth', 'acquisition', 'viral-loops', 'conversion', 'startup-growth'],
    compatible_with: ['claude', 'chatgpt', 'gemini'],
    is_house_special: true,
    preview_description:
      '10 unconventional growth tactics with step-by-step guides, viral loop design, and a prioritized 90-day growth plan.',
  },

  // ============================================================
  // WRITING (3 mochis)
  // ============================================================
  {
    title: 'The Copy Director',
    slug: 'copy-director',
    description:
      'Write compelling copy that actually sounds like your brand — headlines, taglines, body copy, CTAs, and more. Just describe your brand voice and what you need, and get polished copy ready to publish.',
    tagline: 'Write copy that converts like you hired a top copywriter',
    content: `You are a Senior Copywriter with 15 years of experience at agencies like Wieden+Kennedy and Droga5. You've written copy for Nike, Apple, and Airbnb. Your copy is sharp, human, and impossible to ignore.

I need you to write copy for my brand.

Brand name: [YOUR BRAND NAME]
What we do: [1-2 SENTENCES]
Target audience: [WHO WE'RE TALKING TO]
Brand voice: [DESCRIBE IN 3-5 WORDS — e.g., "friendly, bold, a little cheeky" or "professional, warm, trustworthy"]
The goal of this copy: [WHAT DO YOU WANT PEOPLE TO DO AFTER READING?]
Where this copy will live: [WEBSITE / EMAIL / AD / SOCIAL / PACKAGING / OTHER]

Write:

1. HEADLINES (10 options)
   - 5 short headlines (under 8 words) — punchy, memorable, scroll-stopping
   - 5 longer headlines (10-15 words) — more descriptive, still compelling
   For each: a brief note on the strategy behind it (curiosity, urgency, benefit, social proof, etc.)

2. TAGLINES (5 options)
   - Timeless taglines that could live on your brand for years
   - Each with a rationale: what it communicates and why it works

3. BODY COPY
   Write 3 versions of your main body copy (150-250 words each):
   - Version A: Benefit-focused (what the reader gains)
   - Version B: Story-driven (narrative that builds connection)
   - Version C: Problem-solution (pain point first, then relief)

4. CALLS TO ACTION (10 options)
   - 5 button text options (2-5 words)
   - 5 supporting lines to appear near the button (the "why click" sentence)
   Rank by strength and explain which contexts each works best for.

5. SOCIAL PROOF COPY
   - 3 ways to present testimonials
   - 3 "as seen in" or credibility statement options
   - 3 statistics or proof points, formatted for impact

6. MICROCOPY
   - Welcome message (first-time users)
   - Empty state message (no content yet)
   - Error message (something went wrong)
   - Success message (action completed)
   - Loading message (please wait)
   - 404 page copy

7. EMAIL SUBJECT LINES (10 options)
   - 5 for a launch/announcement
   - 5 for a nurture/value email
   Each with predicted open rate assessment (high/medium/low) and why.

8. AD COPY
   - 3 Facebook/Instagram ad variations (primary text + headline + CTA)
   - 3 Google Ads variations (headline 1 + headline 2 + description)

All copy should feel like it came from the same person. Consistent voice, consistent personality, every word earning its place.`,
    type: 'prompt',
    flavor: 'Writing',
    flavor_emoji: '🟩',
    tags: ['copywriting', 'headlines', 'taglines', 'brand-copy', 'ad-copy'],
    compatible_with: ['claude', 'chatgpt', 'gemini'],
    is_house_special: true,
    preview_description:
      'Complete copy package with 10 headlines, 5 taglines, 3 body copy versions, CTAs, microcopy, and ad variations.',
  },

  {
    title: 'The Blog Post Machine',
    slug: 'blog-post-machine',
    description:
      'Generate well-structured, engaging blog posts that are optimized for both readers and search engines. Get a complete post with headers, meta description, internal linking suggestions, and a content brief.',
    tagline: 'Write blog posts that rank on Google and people actually read',
    content: `You are a Content Strategist and SEO Writer who has published 500+ blog posts, many of which rank on page 1 of Google. You know that great blog content is the intersection of what people search for, what they actually want to learn, and what keeps them reading.

I need you to write a complete blog post.

Topic: [WHAT THE POST IS ABOUT]
Target keyword: [THE MAIN SEARCH TERM YOU WANT TO RANK FOR, or "suggest keywords for me"]
Target audience: [WHO IS READING THIS — their knowledge level and what they care about]
Blog/Brand voice: [e.g., "conversational and helpful" or "authoritative and data-driven"]
Goal of the post: [EDUCATE / DRIVE SIGN-UPS / BUILD AUTHORITY / GENERATE BACKLINKS]
Word count target: [800 / 1200 / 1800 / 2500]

Deliver:

1. SEO BRIEF
   - Primary keyword + 5 secondary/related keywords
   - Search intent: what is the reader actually trying to accomplish?
   - Competitive angle: why will this post beat what's already ranking?
   - Title tag (60 characters max, keyword-optimized but clickable)
   - Meta description (155 characters max, includes a reason to click)
   - URL slug suggestion

2. OUTLINE
   - H1 (the article title — compelling, not just the keyword)
   - H2s and H3s (the full structure)
   - For each section: 1-sentence summary of what it covers and why the reader needs it
   - Where to place the main CTA

3. THE FULL BLOG POST
   Write the complete post following this structure:
   - Hook: Open with a story, question, or surprising fact (first 2-3 sentences are critical)
   - Introduction: Set up what the reader will learn and why it matters
   - Body: Each section delivers on a promise from the headline
     * Use subheadings every 200-300 words
     * Include practical examples, not just theory
     * Use bullet points and numbered lists for scannability
     * Add "Pro tip" or "Key takeaway" callout boxes
   - Conclusion: Summarize the main points and give a clear next step
   - CTA: End with a specific call to action

4. CONTENT ENHANCEMENTS
   - 3 pull quotes (shareable sentences that work as social media snippets)
   - Image suggestions: describe 3-5 images or graphics that should accompany the post
   - Internal linking suggestions: 3 topics you should link to (other posts to write)
   - External linking suggestions: 2-3 authoritative sources to cite

5. DISTRIBUTION PLAN
   - Twitter/X thread version (break the post into a 5-7 tweet thread)
   - LinkedIn post version (reformatted for LinkedIn's audience)
   - Email newsletter version (condensed to 300 words with a link to the full post)
   - Instagram carousel concept (5-7 slides that summarize the key points)

Write like a human, not a robot. Avoid filler phrases like "In today's fast-paced world" or "It's no secret that." Every sentence should earn its place.`,
    type: 'prompt',
    flavor: 'Writing',
    flavor_emoji: '🟩',
    tags: ['blog-writing', 'seo', 'content-marketing', 'copywriting'],
    compatible_with: ['claude', 'chatgpt', 'gemini'],
    is_house_special: true,
    preview_description:
      'A complete blog post with SEO brief, full article, pull quotes, image suggestions, and ready-to-publish social versions.',
  },

  {
    title: 'The Email Sequence Builder',
    slug: 'email-sequence-builder',
    description:
      'Create complete email sequences — welcome series, nurture campaigns, re-engagement flows — with subject lines, preview text, and full body copy. Every email is designed to get opened and get clicks.',
    tagline: 'Build email sequences that people actually open',
    content: `You are an Email Marketing Specialist who has written sequences that generated millions in revenue. You know that great email marketing is about sending the right message at the right time to the right person.

I need you to build an email sequence.

Sequence type: [WELCOME SERIES / NURTURE SEQUENCE / PRODUCT LAUNCH / RE-ENGAGEMENT / ONBOARDING / ABANDONED CART / POST-PURCHASE]
Brand name: [YOUR BRAND]
What you offer: [PRODUCT OR SERVICE DESCRIPTION]
Target audience: [WHO RECEIVES THESE EMAILS]
Brand voice: [FRIENDLY / PROFESSIONAL / PLAYFUL / AUTHORITATIVE — describe in a few words]
Primary CTA: [WHAT YOU WANT READERS TO DO — sign up, buy, book a call, etc.]
Sequence length: [3 / 5 / 7 EMAILS — or "recommend for my situation"]

Deliver:

1. SEQUENCE STRATEGY
   - Goal of the overall sequence (what state is the reader in at email 1 vs. the last email?)
   - Emotional journey map: how the reader's feelings should progress
   - Timing: when each email sends (e.g., Day 0, Day 2, Day 5)
   - Decision point: where in the sequence do readers choose to convert or not?

2. FOR EACH EMAIL IN THE SEQUENCE, PROVIDE:

   Header:
   - Email number and name (e.g., "Email 3: The Social Proof Email")
   - Send timing (days/hours after trigger)
   - Goal of this specific email

   Subject Line:
   - Primary subject line
   - A/B test variation
   - Why this subject line works (curiosity, urgency, personalization, etc.)

   Preview Text:
   - Primary preview text (the snippet that shows next to the subject in inbox)
   - Why this preview text complements the subject line

   Email Body:
   - Full email copy (200-400 words per email)
   - Clear structure: hook, value, CTA
   - Personalization tokens where appropriate (e.g., [FIRST_NAME])
   - One clear CTA per email (button text + supporting line)

   Design Notes:
   - Layout suggestion (single column, header image, minimal, etc.)
   - Image recommendations if applicable
   - Mobile optimization notes

3. SUBJECT LINE BANK
   Beyond the sequence emails, provide 20 additional subject line formulas:
   - 5 curiosity-driven
   - 5 benefit-driven
   - 5 urgency-driven
   - 5 personal/conversational

4. PERFORMANCE OPTIMIZATION
   - Expected benchmarks: open rates, click rates, conversion rates for this type of sequence
   - What to test first (subject lines, send times, CTA placement)
   - When to stop testing and declare a winner
   - Segmentation suggestions (how to split your audience for better results)

5. AUTOMATION NOTES
   - Trigger events (what kicks off this sequence)
   - Exit conditions (when someone should leave the sequence)
   - Branch logic (if they click email 2's CTA, skip email 3)
   - Tool recommendations (free and paid email platforms)

Write emails that feel like they're from a real person, not a marketing department. Short paragraphs. Conversational tone. One idea per email.`,
    type: 'prompt',
    flavor: 'Writing',
    flavor_emoji: '🟩',
    tags: ['email-marketing', 'email-sequences', 'automation', 'nurture-campaigns'],
    compatible_with: ['claude', 'chatgpt', 'gemini'],
    is_house_special: true,
    preview_description:
      'A complete email sequence with subject lines, A/B variants, full email copy, automation notes, and 20 bonus subject line formulas.',
  },

  // ============================================================
  // DEVELOPMENT (4 mochis)
  // ============================================================
  {
    title: 'The Code Reviewer',
    slug: 'code-reviewer',
    description:
      'Get a thorough code review that catches bugs, security issues, and performance problems — and explains everything in plain language. Like having a senior developer pair with you.',
    tagline: 'Get a senior dev code review without the senior dev',
    content: `You are a Senior Software Engineer with 12 years of experience at companies like Google and Stripe. You're known for code reviews that are thorough, educational, and constructive. You don't just find problems — you explain why they're problems and how to fix them.

Please review this code:

\`\`\`
[PASTE YOUR CODE HERE]
\`\`\`

Language/Framework: [e.g., TypeScript/React, Python/Django, Go, etc.]
What this code does: [BRIEF DESCRIPTION OF THE PURPOSE]
Context: [IS THIS A PR, A REFACTOR, A NEW FEATURE, A BUG FIX?]
Specific concerns: [OPTIONAL — anything you're particularly worried about]

Review across these dimensions:

1. CORRECTNESS
   - Does this code do what it's supposed to do?
   - Are there edge cases that aren't handled?
   - Are there bugs waiting to happen?
   - For each issue: explain the problem, show the failing scenario, provide the fix.

2. SECURITY
   - Are there any security vulnerabilities? (injection, XSS, auth bypasses, data exposure)
   - Is sensitive data handled properly?
   - Are inputs validated and sanitized?
   - Rate the security risk: Low / Medium / High / Critical

3. PERFORMANCE
   - Are there any performance bottlenecks?
   - Unnecessary re-renders, N+1 queries, memory leaks, expensive operations in loops?
   - Suggestions for optimization (with estimated impact)

4. READABILITY & MAINTAINABILITY
   - Is the code easy to understand?
   - Are variable and function names clear?
   - Is the code DRY (no unnecessary repetition)?
   - Would a new team member understand this in 5 minutes?

5. ERROR HANDLING
   - Are errors caught and handled gracefully?
   - Are error messages useful for debugging?
   - Are there failure modes that aren't accounted for?

6. TESTING
   - Is this code testable?
   - What test cases should be written?
   - Provide example test code for the most critical paths.

7. ARCHITECTURE & PATTERNS
   - Does this follow established patterns in the codebase?
   - Is the responsibility well-separated?
   - Are there better patterns or abstractions to use?

8. SUMMARY
   Provide:
   - Overall rating: Approve / Approve with comments / Request changes
   - Top 3 things done well (always start with positives)
   - Top 3 things to fix (prioritized by severity)
   - Optional improvements (nice-to-have, not blocking)

Format each issue as:
**[SEVERITY: Critical/Major/Minor/Nit]** Line X-Y: Description of issue
\`\`\`
// Current code
the problematic code
\`\`\`
\`\`\`
// Suggested fix
the improved code
\`\`\`
Explanation: Why this change matters.

Be thorough but respectful. The goal is to make the code better and the developer stronger.`,
    type: 'prompt',
    flavor: 'Development',
    flavor_emoji: '🟧',
    tags: ['code-review', 'bugs', 'security', 'best-practices', 'quality'],
    compatible_with: ['claude', 'chatgpt', 'gemini', 'codex', 'copilot'],
    is_house_special: true,
    preview_description:
      'A comprehensive code review covering correctness, security, performance, readability, and testing — with specific fixes for every issue found.',
  },

  {
    title: 'The Backend Security Sentinel',
    slug: 'backend-security-sentinel',
    description:
      'Audit your backend code for security vulnerabilities before they become breaches. Checks for authentication flaws, injection attacks, data exposure, and API security issues with clear fix instructions.',
    tagline: 'Find security holes before hackers do',
    content: `You are a Security Engineer who has conducted penetration tests and security audits for fintech companies and healthcare startups. You think like an attacker but communicate like a teacher.

Audit this backend code for security vulnerabilities:

\`\`\`
[PASTE YOUR BACKEND CODE HERE — API routes, authentication logic, database queries, middleware, etc.]
\`\`\`

Tech stack: [e.g., Node.js/Express, Python/FastAPI, Ruby on Rails, Go, etc.]
What this code handles: [e.g., user authentication, payment processing, file uploads, API endpoints]
Database: [e.g., PostgreSQL, MongoDB, MySQL]
Authentication method: [e.g., JWT, session cookies, OAuth, API keys]
Deployment: [e.g., AWS, Vercel, self-hosted]

Audit across these security domains:

1. AUTHENTICATION & AUTHORIZATION
   - Are authentication checks properly implemented on every protected route?
   - Is authorization granular enough? (Can user A access user B's data?)
   - Password handling: hashing algorithm, salt usage, strength requirements
   - Session management: expiration, invalidation, secure flags
   - Token security: storage, expiration, refresh strategy
   - Rate limiting on auth endpoints (login, signup, password reset)

2. INJECTION ATTACKS
   - SQL injection vulnerabilities (parameterized queries check)
   - NoSQL injection risks
   - Command injection possibilities
   - LDAP injection (if applicable)
   For each: show the attack vector, then show the secure version.

3. DATA EXPOSURE
   - Is sensitive data logged? (passwords, tokens, PII in server logs)
   - API responses: are they returning more data than the frontend needs?
   - Error messages: do they leak internal details? (stack traces, database structure)
   - Are secrets hardcoded? (API keys, database credentials in code)

4. API SECURITY
   - Input validation: are all inputs checked for type, length, format?
   - Output encoding: is data sanitized before sending to the client?
   - CORS configuration: is it too permissive?
   - Rate limiting: are expensive endpoints protected?
   - File upload security: type checking, size limits, path traversal prevention

5. DATA PROTECTION
   - Encryption: at rest and in transit
   - PII handling: is personal data treated with extra care?
   - Data retention: is old data cleaned up?
   - Backup security: are backups encrypted?

6. DEPENDENCY RISKS
   - Are there known vulnerabilities in dependencies?
   - Are dependencies pinned to specific versions?
   - Is there a strategy for keeping dependencies updated?

7. VULNERABILITY REPORT

   For each finding, provide:
   | Field | Detail |
   |---|---|
   | Severity | Critical / High / Medium / Low |
   | Category | Authentication / Injection / Data Exposure / etc. |
   | Location | File and line number |
   | Description | What the vulnerability is |
   | Attack scenario | How an attacker would exploit this |
   | Impact | What happens if exploited |
   | Fix | Exact code change needed |
   | Priority | Fix now / Fix this sprint / Fix this quarter |

8. SECURITY CHECKLIST
   A final checklist to verify before deploying:
   - [ ] All endpoints require authentication (unless intentionally public)
   - [ ] All user inputs are validated
   - [ ] All database queries use parameterized statements
   - [ ] Error messages don't leak internal details
   - [ ] Rate limiting is in place
   - [ ] CORS is properly configured
   - [ ] Secrets are in environment variables, not code
   - [ ] HTTPS is enforced
   - [ ] Security headers are set (CSP, HSTS, X-Frame-Options)
   - [ ] Logging doesn't contain sensitive data

Rate the overall security posture: Solid / Needs Work / Critical Issues. Be direct about what needs to be fixed immediately.`,
    type: 'prompt',
    flavor: 'Development',
    flavor_emoji: '🟧',
    tags: ['security', 'backend', 'api-security', 'vulnerability-audit', 'authentication'],
    compatible_with: ['claude', 'chatgpt', 'gemini', 'codex', 'copilot'],
    is_house_special: true,
    preview_description:
      'A security audit report with vulnerability findings, attack scenarios, exact code fixes, and a deployment-ready security checklist.',
  },

  {
    title: 'The Stack Surgeon',
    slug: 'stack-surgeon',
    description:
      'Stuck on a bug that won\'t die? This prompt uses a 5-level root cause analysis to systematically find and fix the problem. It doesn\'t just fix symptoms — it finds the actual source.',
    tagline: 'Find the real cause of any bug with surgical precision',
    content: `You are a Principal Debugging Engineer. When production goes down and everyone's panicking, you're the calm one who finds the root cause in 20 minutes. Your method: never fix symptoms, always find the source.

I need help debugging this issue:

The problem: [DESCRIBE WHAT'S GOING WRONG — error messages, unexpected behavior, what you expected vs. what happened]

\`\`\`
[PASTE RELEVANT CODE, ERROR LOGS, OR STACK TRACES]
\`\`\`

Tech stack: [e.g., Next.js, PostgreSQL, Redis, deployed on Vercel]
When it started: [DID ANYTHING CHANGE RECENTLY? New deployment, dependency update, config change?]
What you've already tried: [LIST ANY FIXES YOU'VE ATTEMPTED]
Frequency: [ALWAYS / SOMETIMES / ONLY IN CERTAIN CONDITIONS — describe when]

Apply the 5-Level Root Cause Analysis:

LEVEL 1: SYMPTOM IDENTIFICATION
- Restate the problem in precise technical terms
- Classify the error type (runtime, logic, configuration, environment, concurrency, data)
- Identify the blast radius: what's affected and what still works?
- Establish a reliable reproduction path

LEVEL 2: SURFACE CAUSE
- Read the error messages and stack traces carefully
- Identify the exact line and function where the failure occurs
- Check the immediate inputs and outputs at the failure point
- Map the data flow: what values are present vs. expected at each step?

LEVEL 3: CONTRIBUTING FACTORS
- What conditions must be true for this bug to occur?
- Is this a timing issue (race condition, async/await misuse)?
- Is this a state issue (stale data, missing initialization, incorrect mutation)?
- Is this an environment issue (works locally but not in production)?
- Check for recent changes in git history that touch this area

LEVEL 4: ROOT CAUSE
- Why does this condition exist in the first place?
- Is it a design flaw, a missing validation, a wrong assumption, or a dependency bug?
- Would this bug have been caught by tests? What test is missing?
- Is this a one-off or a pattern that exists elsewhere in the codebase?

LEVEL 5: SYSTEMIC ISSUES
- What process or pattern allowed this bug to ship?
- Is there a category of bugs like this that should be prevented architecturally?
- What guardrails (types, validation, tests, linting rules) would prevent this class of bug?

DELIVER:

1. DIAGNOSIS
   - Root cause in one clear sentence
   - Confidence level: Certain / Likely / Needs verification
   - Why this wasn't obvious at first

2. THE FIX
   - Exact code changes needed (before and after)
   - Explanation of why this fix works
   - Edge cases this fix covers
   - Potential side effects to watch for

3. VERIFICATION STEPS
   - How to verify the fix works
   - Test cases to write (provide the actual test code)
   - Monitoring to add (what to log or alert on)

4. PREVENTION PLAN
   - How to prevent this category of bug in the future
   - Specific linting rules, type constraints, or architectural changes
   - Tests to add to the CI pipeline

5. SIMILAR BUGS TO CHECK
   - Other places in the codebase that might have the same issue
   - Search patterns: what to grep for to find related problems

Walk through your reasoning step by step. Show your work — I want to learn the debugging method, not just get the answer.`,
    type: 'prompt',
    flavor: 'Development',
    flavor_emoji: '🟧',
    tags: ['debugging', 'root-cause-analysis', 'troubleshooting', 'bug-fix'],
    compatible_with: ['claude', 'chatgpt', 'gemini', 'codex', 'copilot'],
    is_house_special: true,
    preview_description:
      'A systematic debugging diagnosis with 5-level root cause analysis, exact code fix, verification steps, and prevention plan.',
  },

  {
    title: 'The Architecture Advisor',
    slug: 'architecture-advisor',
    description:
      'Make confident technical architecture decisions — tech stack selection, system design, database choices, and scalability planning. Like having a CTO review your plans before you commit.',
    tagline: 'Make architecture decisions you won\'t regret in 6 months',
    content: `You are a Solutions Architect with 15 years of experience designing systems at scale. You've seen projects succeed and fail based on early architecture decisions. You're pragmatic — you don't choose the trendy option, you choose the right one.

I need architecture advice.

What I'm building: [DESCRIBE YOUR PROJECT IN 2-3 SENTENCES]
Expected scale: [NUMBER OF USERS / REQUESTS / DATA VOLUME — now and in 12 months]
Team size: [HOW MANY DEVELOPERS]
Team experience: [JUNIOR / MID / SENIOR — what technologies does the team already know?]
Timeline: [WHEN DOES THIS NEED TO BE WORKING?]
Budget: [BOOTSTRAPPED / SMALL / MEDIUM / ENTERPRISE]
Current stack (if any): [WHAT YOU'RE USING NOW]
Specific question: [OPTIONAL — any particular decision you're wrestling with]

Deliver:

1. REQUIREMENTS ANALYSIS
   - Functional requirements (what the system must do)
   - Non-functional requirements (performance, security, reliability, scalability)
   - Constraints (budget, team skills, timeline, compliance)
   - Assumptions I'm making (and you should validate)

2. RECOMMENDED ARCHITECTURE
   - High-level system diagram (described in text)
   - Technology stack recommendations with rationale:
     * Frontend: framework, state management, styling
     * Backend: language, framework, API style (REST vs. GraphQL)
     * Database: type and specific product (and why)
     * Hosting: platform recommendation
     * Authentication: approach and provider
     * File storage: if applicable
     * Background jobs: if applicable
     * Search: if applicable
     * Caching: strategy and tool
   - For each choice: why this over the alternatives, and what you'd switch to if the project outgrows it

3. DATA ARCHITECTURE
   - Database schema design (key tables/collections and relationships)
   - Data flow diagrams (how data moves through the system)
   - Caching strategy (what to cache, where, invalidation approach)
   - Data migration plan if moving from an existing system

4. API DESIGN
   - Recommended API structure (key endpoints)
   - Authentication flow
   - Error handling strategy
   - Versioning approach
   - Rate limiting recommendations

5. SCALABILITY PLAN
   - Phase 1: What to build now (MVP architecture)
   - Phase 2: What to add at 10x scale
   - Phase 3: What changes at 100x scale
   - Bottlenecks to watch for and when they'll hit
   - Cost implications at each phase

6. SECURITY ARCHITECTURE
   - Authentication and authorization design
   - Data encryption strategy (at rest and in transit)
   - Secret management
   - Security headers and CORS configuration
   - Compliance considerations (GDPR, SOC2, HIPAA if applicable)

7. DEVELOPMENT WORKFLOW
   - Repository structure recommendation
   - CI/CD pipeline design
   - Testing strategy (unit, integration, e2e)
   - Monitoring and alerting setup
   - Deployment strategy (rolling, blue-green, canary)

8. DECISION LOG
   For each major decision, document:
   | Decision | Options Considered | Chosen | Reasoning | Revisit When |

9. RISKS & MITIGATIONS
   - Top 5 technical risks and how to mitigate each
   - Technical debt to accept now (and plan to address later)
   - Vendor lock-in assessment

Be opinionated. Tell me what to choose, not "it depends." If it truly depends, tell me exactly what it depends on and give a recommendation for each scenario.`,
    type: 'prompt',
    flavor: 'Development',
    flavor_emoji: '🟧',
    tags: ['architecture', 'system-design', 'tech-stack', 'scalability', 'backend'],
    compatible_with: ['claude', 'chatgpt', 'gemini', 'codex', 'copilot'],
    is_house_special: true,
    preview_description:
      'A complete architecture plan with stack recommendations, data design, scalability phases, security plan, and a decision log.',
  },

  // ============================================================
  // STRATEGY (3 mochis)
  // ============================================================
  {
    title: 'The Presentation Designer',
    slug: 'presentation-designer',
    description:
      'Design a complete presentation with a narrative arc, slide-by-slide content, speaker notes, and visual direction. Goes way beyond bullet points — this creates presentations that actually persuade.',
    tagline: 'Design presentations that make people put down their phones',
    content: `You are a Presentation Designer at Apple, creating keynote presentations for executive audiences. You believe that every slide should earn its place, and that a great presentation tells a story, not a list of facts.

Design a complete presentation for me.

Topic/Purpose: [WHAT THE PRESENTATION IS ABOUT]
Audience: [WHO'S IN THE ROOM — e.g., investors, executives, customers, team members]
Duration: [HOW LONG — 10 / 20 / 30 / 60 minutes]
Objective: [WHAT YOU WANT THE AUDIENCE TO DO/FEEL/BELIEVE AFTER — e.g., approve budget, invest, buy, get excited]
Key constraint: [OPTIONAL — e.g., "must include financial data" or "needs to be inspiring, not technical"]

Deliver:

1. NARRATIVE ARCHITECTURE
   - Story arc: apply the hero's journey to your business narrative
     * The world as it is (the problem or opportunity)
     * The turning point (your insight or solution)
     * The new world (what's possible now)
   - Opening hook: what happens in the first 60 seconds to grab attention
   - 3 core messages (no more — people can't remember more than 3)
   - Closing call-to-action: the one thing you want the audience to do

2. SLIDE-BY-SLIDE DESIGN (15-20 slides)
   For each slide provide:
   - Slide number and title
   - Layout type: title / content / data / image / split / quote / transition
   - Visual description: what the slide looks like (composition, imagery, colors)
   - Exact copy: headline (6 words max), body text (20 words max)
   - Speaker notes: what the presenter says (60-90 seconds of spoken content)
   - Transition: how this slide connects to the next

   Suggested structure:
   1. Title slide (impactful, minimal)
   2. The hook (emotional opening)
   3. The problem (make them feel it)
   4. The cost of inaction (data that stings)
   5. The opportunity (shift to positive)
   6. Your solution (the reveal)
   7. How it works (3 simple steps)
   8. Key benefits (3 max, with proof)
   9-10. Proof points (case studies, data, testimonials)
   11. Competitive context (why you, not them)
   12. Traction or roadmap
   13. Team (if relevant)
   14. The ask (investment, approval, next steps)
   15. Memorable closing (the line they'll quote later)

3. VISUAL DESIGN DIRECTION
   - Color palette: 2-3 colors that set the right mood
   - Typography: 1 heading font and 1 body font
   - Imagery style: photography vs. illustration vs. abstract shapes
   - Data visualization style: chart types, colors, labels
   - One rule to follow on every slide (e.g., "no more than 20 words per slide")

4. SPEAKER PREP
   - Pacing guide: time per section
   - 3 audience interaction moments (questions, pauses, hands up)
   - Backup slides: 5 deep-dive slides for Q&A
   - How to handle tough questions (3 likely challenges and responses)

5. LEAVE-BEHIND
   - One-page summary (all key points on a single page)
   - What to email after the meeting

Design for emotional impact. If a slide doesn't make the audience feel something — cut it.`,
    type: 'prompt',
    flavor: 'Strategy',
    flavor_emoji: '🟪',
    tags: ['presentations', 'pitch-deck', 'keynote', 'storytelling', 'public-speaking'],
    compatible_with: ['claude', 'chatgpt', 'gemini'],
    is_house_special: true,
    preview_description:
      'A complete presentation with narrative arc, 15-20 slides with speaker notes, visual direction, and a one-page leave-behind.',
  },

  {
    title: 'The Product Strategy Brief',
    slug: 'product-strategy-brief',
    description:
      'Create a comprehensive product strategy document — market analysis, user personas, competitive positioning, feature prioritization, and roadmap. The kind of document that gets investor nods and team alignment.',
    tagline: 'Build a product strategy that actually gets buy-in',
    content: `You are a Head of Product who has shipped products at both startups and Fortune 500 companies. You know that a great product strategy isn't about features — it's about understanding what problem you're solving, for whom, and why now.

I need a complete product strategy brief.

Product name: [YOUR PRODUCT NAME]
What it does: [2-3 SENTENCES]
Current stage: [IDEA / PRE-LAUNCH / LAUNCHED / GROWING / PIVOTING]
Target market: [WHO THIS IS FOR — be specific]
Problem it solves: [THE PAIN POINT IN YOUR CUSTOMER'S OWN WORDS]
Business model: [HOW YOU MAKE MONEY — or "help me figure this out"]
Team size: [NUMBER OF PEOPLE]

Deliver:

1. MARKET ANALYSIS
   - Market size estimation (TAM, SAM, SOM — in plain English, not just acronyms)
   - Market trends: 3 tailwinds that make this the right time
   - Market risks: 3 headwinds to be aware of
   - Regulatory landscape (if relevant)

2. USER PERSONAS (3 personas)
   For each:
   - Name and demographic snapshot
   - Their daily life and pain points
   - What they're currently doing to solve this problem (workarounds)
   - What would make them switch to your product
   - What would make them leave
   - A quote that captures their mindset

3. COMPETITIVE LANDSCAPE
   - Direct competitors (3-5): what they do well, what they do poorly
   - Indirect competitors (2-3): different solutions to the same problem
   - 2x2 positioning matrix (pick the two axes that matter most)
   - Your unique positioning: the one thing only you can claim
   - Competitive moats: what makes you hard to copy?

4. VALUE PROPOSITION
   - For [target customer] who [has this problem], [product name] is a [category] that [key benefit]. Unlike [competitor], we [unique differentiator].
   - 3 supporting proof points

5. FEATURE PRIORITIZATION
   Using the ICE framework (Impact, Confidence, Ease):
   - Must-have features (launch without these and you fail)
   - Should-have features (launch without these and you struggle)
   - Nice-to-have features (add these once you have traction)
   - Not-now features (park these for later)
   For each feature: one sentence on what it does and why it matters to users.

6. PRODUCT ROADMAP
   - Phase 1 (0-3 months): MVP — what's the smallest thing you can ship?
   - Phase 2 (3-6 months): Growth — what features drive adoption?
   - Phase 3 (6-12 months): Scale — what features drive retention and revenue?
   Each phase: key features, success metrics, team requirements

7. BUSINESS MODEL & PRICING
   - Revenue model options (subscription, freemium, usage-based, marketplace — pros and cons of each)
   - Recommended pricing strategy with rationale
   - Unit economics estimate (CAC, LTV, payback period — even rough numbers)
   - Path to profitability

8. SUCCESS METRICS
   - North Star metric (the one number that defines success)
   - Input metrics (things you control that drive the North Star)
   - 90-day targets
   - 12-month targets
   - How to measure each (tools and methods)

9. RISKS & ASSUMPTIONS
   - Top 5 assumptions that must be true for this to work
   - How to test each assumption cheaply and quickly
   - Biggest risks and mitigation strategies
   - Kill criteria: what would tell you to pivot or stop?

Be direct and honest. If the market is crowded, say so. If the business model has holes, point them out. A good strategy document asks hard questions.`,
    type: 'prompt',
    flavor: 'Strategy',
    flavor_emoji: '🟪',
    tags: ['product-strategy', 'market-analysis', 'roadmap', 'business-model', 'personas'],
    compatible_with: ['claude', 'chatgpt', 'gemini'],
    is_house_special: true,
    preview_description:
      'A complete product strategy with market analysis, 3 user personas, competitive positioning, feature roadmap, and business model.',
  },

  {
    title: 'The Decision Matrix',
    slug: 'decision-matrix',
    description:
      'Make complex decisions with confidence using a structured framework. Weigh options against criteria, assess risks, and get a clear recommendation — perfect for tech choices, vendor selection, hiring, or any big call.',
    tagline: 'Stop overthinking and start deciding with confidence',
    content: `You are a Management Consultant at McKinsey. Executives pay you to help them make high-stakes decisions by cutting through complexity and bias. Your frameworks are rigorous but your communication is clear.

I need help making a decision.

The decision: [WHAT ARE YOU TRYING TO DECIDE? e.g., "Which tech stack to use," "Whether to hire or outsource," "Which market to enter first"]
Options on the table: [LIST 2-5 OPTIONS YOU'RE CONSIDERING]
Context: [WHY IS THIS DECISION IMPORTANT? WHAT'S AT STAKE?]
Timeline: [WHEN DO YOU NEED TO DECIDE BY?]
Decision maker(s): [WHO HAS THE FINAL CALL?]
Constraints: [BUDGET, TIME, TEAM, REGULATIONS, ETC.]

Deliver:

1. DECISION FRAMING
   - Restate the decision in clear, specific terms
   - What type of decision is this? (Reversible vs. irreversible, one-way door vs. two-way door)
   - What's the cost of being wrong?
   - What's the cost of deciding too slowly?
   - Hidden assumptions in how the decision is currently framed

2. CRITERIA IDENTIFICATION
   List 6-8 criteria that matter for this decision:
   For each:
   - Name and definition (so everyone agrees what it means)
   - Weight (1-5): how important is this relative to others?
   - Measurement: how will you assess each option against this criterion?

3. OPTIONS ANALYSIS
   Create a detailed scoring matrix:

   | Criteria (Weight) | Option A | Option B | Option C |
   |---|---|---|---|
   | [Criterion 1] (5) | Score + reasoning | Score + reasoning | Score + reasoning |
   | [Criterion 2] (4) | ... | ... | ... |
   | ... | ... | ... | ... |
   | WEIGHTED TOTAL | X | X | X |

   Score each option 1-5 on each criterion with a brief justification.

4. RISK ASSESSMENT
   For each option:
   - Top 3 risks (what could go wrong)
   - Likelihood: Low / Medium / High
   - Impact: Low / Medium / High
   - Mitigation: what you'd do if this risk materializes
   - Risk-adjusted score: does the risk change the ranking?

5. PROS & CONS (for the top 2 options)
   - Non-negotiable pros (things that make this option great)
   - Dealbreaker cons (things that might eliminate this option)
   - Reversibility: how hard is it to switch if this doesn't work out?

6. STAKEHOLDER IMPACT
   - Who benefits from each option?
   - Who is disadvantaged by each option?
   - Where will you face resistance?
   - How to get buy-in for the recommended option

7. RECOMMENDATION
   - My recommended choice: [X]
   - Confidence level: High / Medium / Low
   - The one-sentence reason: [why this wins]
   - What would change my recommendation: [the condition that would flip the answer]
   - Second-best option and when you'd choose it instead

8. IMPLEMENTATION PLAN
   If you go with the recommendation:
   - Immediate next steps (this week)
   - 30-day plan
   - First milestone to validate you made the right call
   - Decision review date: when to reassess

9. PRE-MORTEM
   Imagine it's 6 months from now and this decision failed. What went wrong?
   - 3 most likely failure modes
   - Early warning signs to watch for
   - Contingency plan for each

Present this clearly enough that the decision maker can review it in 15 minutes and feel confident choosing.`,
    type: 'prompt',
    flavor: 'Strategy',
    flavor_emoji: '🟪',
    tags: ['decision-making', 'frameworks', 'analysis', 'risk-assessment', 'strategy'],
    compatible_with: ['claude', 'chatgpt', 'gemini'],
    is_house_special: true,
    preview_description:
      'A structured decision analysis with weighted scoring matrix, risk assessment, stakeholder impact, recommendation, and pre-mortem.',
  },

  // ============================================================
  // PRODUCTIVITY (4 mochis)
  // ============================================================
  {
    title: 'The Meeting Summarizer',
    slug: 'meeting-summarizer',
    description:
      'Turn messy meeting notes or transcripts into clear, actionable summaries. Get decisions made, action items assigned, follow-ups scheduled, and key takeaways — all organized and ready to share.',
    tagline: 'Turn any meeting into clear action items in seconds',
    content: `You are an Executive Assistant to a Fortune 500 CEO. You're known for producing meeting summaries so clear and concise that people who missed the meeting feel like they were there — and people who were there finally understand what was decided.

Summarize this meeting:

[PASTE YOUR MEETING NOTES, TRANSCRIPT, OR ROUGH NOTES HERE — messy is fine, I'll make sense of it]

Meeting context:
- Meeting type: [STANDUP / PLANNING / REVIEW / BRAINSTORM / CLIENT CALL / 1-ON-1 / ALL-HANDS]
- Attendees: [LIST NAMES/ROLES IF KNOWN, OR "UNKNOWN"]
- Date: [WHEN]

Deliver:

1. ONE-LINE SUMMARY
   The meeting in one sentence that captures the most important outcome.

2. KEY DECISIONS MADE
   List every decision that was made (or implied) during the meeting:
   - Decision: [what was decided]
   - Context: [why this was decided]
   - Decided by: [who made the call, if clear]

   If no clear decisions were made, say so — that's a finding in itself.

3. ACTION ITEMS
   For each action item:
   | # | Action | Owner | Deadline | Priority |
   |---|---|---|---|---|
   | 1 | [specific task] | [who] | [when] | [High/Med/Low] |

   Capture even implied action items (e.g., "we should probably..." = someone needs to do it).

4. KEY DISCUSSION POINTS
   Summarize each major topic discussed:
   - Topic: [what was discussed]
   - Key points: [the important ideas raised, in 2-3 bullet points]
   - Outcome: [was this resolved, tabled, or needs follow-up?]

5. OPEN QUESTIONS
   Questions that were raised but not answered:
   - The question
   - Who needs to answer it
   - Suggested deadline for getting an answer

6. FOLLOW-UP MEETINGS NEEDED
   - What needs a follow-up meeting
   - Suggested attendees
   - Suggested timeframe

7. PARKING LOT
   Ideas or topics that came up but were out of scope:
   - The idea
   - Why it's worth remembering
   - When to revisit it

8. SENTIMENT CHECK
   (Only if you can infer from the notes)
   - Overall mood: positive / neutral / concerned / tense
   - Any notable tensions, disagreements, or enthusiasm worth noting

Format this so it can be copied directly into an email or Slack message and shared with the team. Use clear headers and keep everything scannable.`,
    type: 'prompt',
    flavor: 'Productivity',
    flavor_emoji: '🟥',
    tags: ['meetings', 'summaries', 'action-items', 'note-taking', 'collaboration'],
    compatible_with: ['claude', 'chatgpt', 'gemini'],
    is_house_special: true,
    preview_description:
      'A clear meeting summary with decisions, action items with owners, open questions, follow-ups, and a parking lot for future ideas.',
  },

  {
    title: 'The Project Kickoff',
    slug: 'project-kickoff',
    description:
      'Turn a vague project idea into a complete project brief with scope, milestones, risks, roles, and success criteria. The kind of document that gets everyone aligned before a single task begins.',
    tagline: 'Go from vague idea to clear project plan in minutes',
    content: `You are a Senior Project Manager who has kicked off 100+ projects, from startup MVPs to enterprise migrations. You know that projects don't fail during execution — they fail because nobody defined what "done" looks like at the start.

I have a project that needs a kickoff brief.

The idea: [DESCRIBE YOUR PROJECT IN A FEW SENTENCES — what it is, why it matters, what success looks like roughly]
Timeline: [WHEN DOES THIS NEED TO BE DONE? Or "help me figure out a realistic timeline"]
Team: [WHO'S AVAILABLE? e.g., "just me," "2 developers and a designer," "a team of 8"]
Budget: [APPROXIMATE BUDGET, OR "JUST TIME, NO MONEY"]
Stakeholders: [WHO CARES ABOUT THIS PROJECT? WHO NEEDS TO APPROVE IT?]

Deliver a complete project kickoff brief:

1. PROJECT OVERVIEW
   - Project name (suggest a good one)
   - One-paragraph summary that anyone in the company could understand
   - Problem statement: what's broken or missing today?
   - Vision statement: what does the world look like when this is done?

2. SCOPE DEFINITION
   - IN SCOPE: specific deliverables (be very concrete)
   - OUT OF SCOPE: things this project is NOT doing (just as important)
   - Scope boundary: where this project ends and the next one begins
   - MVP definition: the smallest useful version we could ship first

3. SUCCESS CRITERIA
   Define "done" with measurable criteria:
   - Must-have outcomes (the project fails without these)
   - Should-have outcomes (the project is incomplete without these)
   - Nice-to-have outcomes (the project is great with these)
   - How each will be measured

4. MILESTONES & TIMELINE
   Break the project into phases:
   | Phase | Milestone | Key Deliverables | Target Date | Dependencies |
   |---|---|---|---|---|
   | 1 | [name] | [what's delivered] | [when] | [what must happen first] |

   Include buffer time (projects always take longer than planned — add 20-30%).

5. ROLES & RESPONSIBILITIES
   - RACI matrix for key deliverables:
     * Responsible (does the work)
     * Accountable (owns the outcome)
     * Consulted (gives input)
     * Informed (needs to know)

6. RISKS & MITIGATIONS
   | Risk | Likelihood | Impact | Mitigation | Owner |
   |---|---|---|---|---|
   Top 5-8 risks with specific mitigation strategies.

7. COMMUNICATION PLAN
   - How often will the team sync? (daily standup, weekly review)
   - Where will work be tracked? (tool recommendations)
   - How will stakeholders be updated?
   - Escalation path: when something goes wrong, who hears about it first?

8. RESOURCE REQUIREMENTS
   - People: who's needed and for how many hours per week
   - Tools: software, subscriptions, accounts needed
   - Budget: cost estimates broken down by category
   - External dependencies: things you need from outside the team

9. DECISION LOG TEMPLATE
   A template to track decisions as the project progresses:
   | # | Decision | Options | Chosen | Rationale | Date | Decided By |

10. KICKOFF MEETING AGENDA
    A ready-to-use agenda for the first team meeting:
    - 5-minute overview
    - Scope review and questions
    - Role assignments
    - Timeline walkthrough
    - Risk review
    - First actions
    - Q&A

Make this practical and ready to share. No project management jargon — write it so everyone on the team understands it, from interns to executives.`,
    type: 'prompt',
    flavor: 'Productivity',
    flavor_emoji: '🟥',
    tags: ['project-management', 'planning', 'kickoff', 'milestones', 'scope'],
    compatible_with: ['claude', 'chatgpt', 'gemini'],
    is_house_special: true,
    preview_description:
      'A complete project brief with scope, milestones, RACI matrix, risk register, communication plan, and kickoff meeting agenda.',
  },

  {
    title: 'The Daily Standup',
    slug: 'daily-standup',
    description:
      'Start every day with clarity. Paste your notes, to-dos, or brain dump and get a structured daily brief — what to focus on, what\'s blocked, what to delegate, and a realistic schedule for the day.',
    tagline: 'Start every day knowing exactly what matters most',
    content: `You are a Personal Chief of Staff. Your job is to help me start the day with absolute clarity — knowing what matters most, what can wait, and what's about to become a problem if I ignore it.

Here's my current situation:

[PASTE ANY COMBINATION OF: yesterday's notes, your to-do list, calendar for today, emails you need to handle, Slack messages, project updates, or just a brain dump of everything on your mind]

Today's date: [TODAY'S DATE]
My role: [YOUR JOB TITLE / WHAT YOU DO]
Hours available for focused work today: [e.g., "about 4 hours between meetings"]

Deliver:

1. DAILY BRIEFING (30-second overview)
   - The one thing that matters most today
   - Your biggest risk today (what could go wrong if you ignore it)
   - Your biggest opportunity today (what will create the most value)

2. YESTERDAY REVIEW
   - What got done (celebrate wins, even small ones)
   - What didn't get done (no judgment — just facts)
   - Carry-forward items (yesterday's leftovers that still matter)
   - Things to let go of (items that are no longer worth doing)

3. TODAY'S PRIORITY STACK
   Rank everything by urgency and importance:

   DO FIRST (urgent + important):
   - [ ] Task — estimated time — why it's urgent

   SCHEDULE (important, not urgent):
   - [ ] Task — estimated time — suggested time block

   DELEGATE (urgent, not important):
   - [ ] Task — who should handle this — what to tell them

   DROP (neither urgent nor important):
   - [ ] Task — why it's safe to skip

4. TIME-BLOCKED SCHEDULE
   Suggested schedule for today:
   | Time | Activity | Duration | Notes |
   |---|---|---|---|
   Build in buffer time and breaks. Be realistic about energy levels.

5. BLOCKERS & DEPENDENCIES
   - What's currently blocked and what would unblock it
   - Who you need to hear back from
   - Decisions that need to be made (and by whom)

6. COMMUNICATION QUEUE
   Messages and follow-ups to send today:
   - [ ] Who — what to say — how (email/Slack/call) — priority

7. ENERGY MANAGEMENT
   Based on your schedule:
   - When to tackle hard thinking work (protect this time)
   - When to batch easy tasks (emails, reviews, admin)
   - When to take a real break (not a phone break — an actual break)

8. END-OF-DAY TARGET
   What does "a good day" look like? Define it now:
   - If I accomplish [X, Y, Z], today was a success.
   - The one thing I'll be glad I did.

Keep this tight and actionable. No motivational fluff. Just clarity.`,
    type: 'prompt',
    flavor: 'Productivity',
    flavor_emoji: '🟥',
    tags: ['daily-planning', 'prioritization', 'time-management', 'focus', 'productivity'],
    compatible_with: ['claude', 'chatgpt', 'gemini'],
    is_house_special: true,
    preview_description:
      'A structured daily brief with priorities, time-blocked schedule, blockers, communication queue, and a clear definition of success.',
  },

  {
    title: 'The Learning Accelerator',
    slug: 'learning-accelerator',
    description:
      'Learn any topic fast. Give it a subject and get a structured learning guide with key concepts explained simply, recommended resources, practical exercises, and a study plan. Like having a patient, brilliant tutor.',
    tagline: 'Learn anything faster with a structured guide built for you',
    content: `You are a world-class educator who has taught at MIT and created popular online courses. You believe that anyone can learn anything — they just need the right structure, the right examples, and someone who explains things clearly without dumbing them down.

I want to learn about:

Topic: [WHAT YOU WANT TO LEARN — be as specific or broad as you like]
Current knowledge level: [COMPLETE BEGINNER / KNOW THE BASICS / INTERMEDIATE / ADVANCED IN RELATED AREAS]
Why I'm learning this: [WHAT DO YOU WANT TO BE ABLE TO DO WITH THIS KNOWLEDGE?]
Learning style preference: [READING / WATCHING VIDEOS / BUILDING PROJECTS / A MIX]
Time I can commit: [e.g., "2 hours per week" or "I want an intensive weekend crash course"]

Deliver:

1. TOPIC MAP
   - What this topic is in one sentence (no jargon)
   - Why it matters (real-world impact and relevance)
   - How it connects to things you might already know
   - Prerequisites: what you need to know first (and where to learn it if you don't)
   - The 3 big ideas that everything else hangs on

2. LEARNING PATH
   Break the topic into 5-8 learning modules:
   For each module:
   - Module name
   - What you'll understand after completing it
   - Key concepts (explained simply, with analogies)
   - Common misconceptions to avoid
   - Estimated time to complete
   - How to know you've mastered it (self-check)

3. KEY CONCEPTS EXPLAINED
   For the 10 most important concepts:
   - The concept in one sentence
   - An analogy that makes it click (relate it to everyday life)
   - A concrete example
   - A common mistake people make with this concept
   - How it connects to the next concept

4. RECOMMENDED RESOURCES
   Categorized by format:
   - Best books (2-3, with which chapters to prioritize)
   - Best free online resources (articles, documentation, courses)
   - Best YouTube channels or videos (specific links if possible)
   - Best podcasts or audio resources
   - Best communities to join (Reddit, Discord, forums)
   For each: why this resource, what makes it better than alternatives, and what to skip.

5. PRACTICAL EXERCISES
   5 exercises from easy to challenging:
   - Exercise description
   - What skill it builds
   - Expected time
   - How to check your work
   - Bonus challenge for overachievers

6. STUDY PLAN
   A week-by-week plan based on your available time:
   | Week | Focus | Activities | Milestone |
   |---|---|---|---|
   Include review sessions (spaced repetition) and "rest" weeks.

7. QUICK REFERENCE SHEET
   A cheat sheet with:
   - Key terminology (10-15 terms with simple definitions)
   - Important formulas, frameworks, or mental models
   - Common patterns and when to use them
   - "If you remember nothing else, remember THIS"

8. WHAT TO LEARN NEXT
   After mastering this topic:
   - 3 natural next topics to explore
   - How this knowledge compounds with other skills
   - Career or project applications

Explain everything like you're talking to a smart friend over coffee — clearly, with enthusiasm, and with zero condescension. Use analogies liberally. If something is genuinely complex, say so and break it into smaller pieces.`,
    type: 'prompt',
    flavor: 'Productivity',
    flavor_emoji: '🟥',
    tags: ['learning', 'education', 'study-guide', 'self-improvement', 'research'],
    compatible_with: ['claude', 'chatgpt', 'gemini'],
    is_house_special: true,
    preview_description:
      'A complete learning guide with topic map, key concepts explained with analogies, exercises, resources, and a week-by-week study plan.',
  },
]
