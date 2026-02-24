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
