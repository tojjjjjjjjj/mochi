export const FLAVORS = [
  { name: 'Design', slug: 'design', emoji: '🟦', color: '#B8A9E8', bgLight: '#F3F0FF', description: 'UI/UX, visual design, design systems' },
  { name: 'Development', slug: 'development', emoji: '🟧', color: '#FFB088', bgLight: '#FFF3EC', description: 'Frontend, backend, architecture' },
  { name: 'Marketing', slug: 'marketing', emoji: '🟨', color: '#FFE066', bgLight: '#FFFCEB', description: 'Growth, social, launch strategy' },
  { name: 'Writing', slug: 'writing', emoji: '🟩', color: '#7ED6A8', bgLight: '#EDFAF3', description: 'Copywriting, content, documentation' },
  { name: 'Strategy', slug: 'strategy', emoji: '🟪', color: '#7EC8E3', bgLight: '#ECF7FC', description: 'Business, product, planning' },
  { name: 'Productivity', slug: 'productivity', emoji: '🟥', color: '#FF8A80', bgLight: '#FFF0EF', description: 'Workflows, automation, organization' },
  { name: 'Branding', slug: 'branding', emoji: '🩷', color: '#FF6B9D', bgLight: '#FFF0F5', description: 'Identity, naming, brand voice' },
] as const

export const BRAND = {
  pink: '#FF6B9D',
  pinkText: '#C93D6A',
  pinkHover: '#E8558A',
  pinkLight: '#FFF0F5',
  pinkTint: 'rgba(255, 107, 157, 0.08)',
  peach: '#FFB088',
  mint: '#7ED6A8',
  lavender: '#B8A9E8',
  sky: '#7EC8E3',
  lemon: '#FFE066',
  coral: '#FF8A80',
  labelPrimary: '#1D1D1F',
  labelSecondary: '#6E6E73',
  labelTertiary: '#AEAEB2',
  bgPrimary: '#FFFFFF',
  bgSecondary: '#F5F5F7',
  bgTertiary: '#FBFBFD',
} as const

export type FlavorType = typeof FLAVORS[number]

export const AGENTS = [
  { id: 'claude', name: 'Claude', icon: '🟤', squareColor: '#D4A574', letter: 'C' },
  { id: 'chatgpt', name: 'ChatGPT', icon: '🟢', squareColor: '#10A37F', letter: 'G' },
  { id: 'gemini', name: 'Gemini', icon: '🔵', squareColor: '#4285F4', letter: 'Ge' },
  { id: 'codex', name: 'Codex CLI', icon: '⚪', squareColor: '#6E6E73', letter: 'Cx' },
  { id: 'copilot', name: 'Copilot', icon: '🟣', squareColor: '#8B5CF6', letter: 'Co' },
] as const

export type InstallStep = {
  text: string
  command?: string
}

export type InstallMethod = {
  label: string
  steps: InstallStep[]
}

export const INSTALL_INSTRUCTIONS: Record<string, { prompt: InstallMethod[]; skill: InstallMethod[] }> = {
  claude: {
    prompt: [
      {
        label: 'Paste into chat',
        steps: [
          { text: 'Copy the prompt using the button below' },
          { text: 'Go to claude.ai and start a new chat' },
          { text: 'Paste the prompt and hit Enter — Claude will follow it immediately' },
        ],
      },
      {
        label: 'Save to a Project',
        steps: [
          { text: 'Copy the prompt using the button below' },
          { text: 'Go to claude.ai and open (or create) a Project' },
          { text: 'Click the gear icon → "Set custom instructions"' },
          { text: 'Paste the prompt and save — Claude will use it in every conversation in this Project' },
        ],
      },
    ],
    skill: [
      {
        label: 'Paste into chat',
        steps: [
          { text: 'Copy the skill using the button below' },
          { text: 'Go to claude.ai and start a new chat' },
          { text: 'Paste the skill and hit Enter — Claude will activate this mode immediately' },
        ],
      },
      {
        label: 'Save to a Project',
        steps: [
          { text: 'Copy the skill using the button below' },
          { text: 'Go to claude.ai and open (or create) a Project' },
          { text: 'Click the gear icon → "Set custom instructions"' },
          { text: 'Paste the skill and save — Claude will use this mode in every conversation in this Project' },
        ],
      },
      {
        label: 'Add to Claude Code (advanced)',
        steps: [
          { text: 'Copy the skill using the button below' },
          { text: 'Create or open CLAUDE.md in your project root' },
          { text: 'Paste the skill content and save — Claude Code will pick it up automatically' },
        ],
      },
    ],
  },
  chatgpt: {
    prompt: [
      {
        label: 'Paste into chat',
        steps: [
          { text: 'Copy the prompt using the button below' },
          { text: 'Go to chatgpt.com and start a new chat' },
          { text: 'Paste the prompt and hit Enter — ChatGPT will follow it immediately' },
        ],
      },
      {
        label: 'Save to Custom Instructions',
        steps: [
          { text: 'Copy the prompt using the button below' },
          { text: 'Go to chatgpt.com → click your profile picture → Settings → Personalization → Custom Instructions' },
          { text: 'Paste into "How would you like ChatGPT to respond?" and save' },
          { text: 'ChatGPT will use it in every new conversation automatically' },
        ],
      },
      {
        label: 'Create a GPT',
        steps: [
          { text: 'Copy the prompt using the button below' },
          { text: 'Go to chatgpt.com → Explore GPTs → Create' },
          { text: 'Paste the prompt into the Instructions field' },
          { text: 'Name your GPT and hit Save — you can share it or keep it private' },
        ],
      },
    ],
    skill: [
      {
        label: 'Paste into chat',
        steps: [
          { text: 'Copy the skill using the button below' },
          { text: 'Go to chatgpt.com and start a new chat' },
          { text: 'Paste the skill and hit Enter — ChatGPT will activate this mode immediately' },
        ],
      },
      {
        label: 'Save to Custom Instructions',
        steps: [
          { text: 'Copy the skill using the button below' },
          { text: 'Go to chatgpt.com → click your profile picture → Settings → Personalization → Custom Instructions' },
          { text: 'Paste into "How would you like ChatGPT to respond?" and save' },
          { text: 'ChatGPT will use this mode in every new conversation automatically' },
        ],
      },
      {
        label: 'Create a GPT',
        steps: [
          { text: 'Copy the skill using the button below' },
          { text: 'Go to chatgpt.com → Explore GPTs → Create' },
          { text: 'Paste the skill into the Instructions field' },
          { text: 'Name your GPT and hit Save — you can share it or keep it private' },
        ],
      },
    ],
  },
  gemini: {
    prompt: [
      {
        label: 'Paste into chat',
        steps: [
          { text: 'Copy the prompt using the button below' },
          { text: 'Go to gemini.google.com and start a new chat' },
          { text: 'Paste the prompt and hit Enter — Gemini will follow it immediately' },
        ],
      },
      {
        label: 'Create a Gem',
        steps: [
          { text: 'Copy the prompt using the button below' },
          { text: 'Go to gemini.google.com → Gem manager → New Gem' },
          { text: 'Paste the prompt into the instructions field' },
          { text: 'Name your Gem and save — it shows up in your sidebar for one-click access' },
        ],
      },
    ],
    skill: [
      {
        label: 'Paste into chat',
        steps: [
          { text: 'Copy the skill using the button below' },
          { text: 'Go to gemini.google.com and start a new chat' },
          { text: 'Paste the skill and hit Enter — Gemini will activate this mode immediately' },
        ],
      },
      {
        label: 'Create a Gem',
        steps: [
          { text: 'Copy the skill using the button below' },
          { text: 'Go to gemini.google.com → Gem manager → New Gem' },
          { text: 'Paste the skill into the instructions field' },
          { text: 'Name your Gem and save — it shows up in your sidebar for one-click access' },
        ],
      },
    ],
  },
  codex: {
    prompt: [
      {
        label: 'Save as AGENTS.md file',
        steps: [
          { text: 'Copy the prompt using the button below' },
          { text: 'Create or open AGENTS.md in your project root' },
          { text: 'Paste the prompt content and save' },
          { text: 'Codex CLI will pick it up automatically' },
        ],
      },
    ],
    skill: [
      {
        label: 'Save as rule file',
        steps: [
          { text: 'Copy the skill using the button below' },
          { text: 'Create or open AGENTS.md in your project root' },
          { text: 'Paste the skill content and save' },
          { text: 'Codex CLI will pick it up automatically' },
        ],
      },
    ],
  },
  copilot: {
    prompt: [
      {
        label: 'Paste into Copilot Chat',
        steps: [
          { text: 'Copy the prompt using the button below' },
          { text: 'Open VS Code and start a Copilot Chat (Ctrl+Shift+I or Cmd+Shift+I)' },
          { text: 'Paste the prompt and hit Enter — Copilot will follow it immediately' },
        ],
      },
      {
        label: 'Add to custom instructions',
        steps: [
          { text: 'Copy the prompt using the button below' },
          { text: 'Open VS Code → Copilot Chat → click the gear icon → Custom Instructions' },
          { text: 'Paste the prompt and save — Copilot will use it in every chat in this workspace' },
        ],
      },
    ],
    skill: [
      {
        label: 'Paste into Copilot Chat',
        steps: [
          { text: 'Copy the skill using the button below' },
          { text: 'Open VS Code and start a Copilot Chat (Ctrl+Shift+I or Cmd+Shift+I)' },
          { text: 'Paste the skill and hit Enter — Copilot will activate this mode immediately' },
        ],
      },
      {
        label: 'Add to custom instructions',
        steps: [
          { text: 'Copy the skill using the button below' },
          { text: 'Open VS Code → Copilot Chat → click the gear icon → Custom Instructions' },
          { text: 'Paste the skill and save — Copilot will use this mode in every chat in this workspace' },
        ],
      },
    ],
  },
} as const

export const SITE = {
  name: 'Mochi',
  tagline: 'Feed your AI superpowers.',
  description: 'A curated marketplace of taste-tested AI skills and prompts. No malware, no garbage, no bullshit.',
  url: 'https://mochi.market',
} as const
