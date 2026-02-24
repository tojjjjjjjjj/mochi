export const FLAVORS = [
  { name: 'Design', slug: 'design', emoji: '🟦', color: '#6366f1', bgLight: '#eef2ff', description: 'UI/UX, visual design, design systems' },
  { name: 'Development', slug: 'development', emoji: '🟧', color: '#f97316', bgLight: '#fff7ed', description: 'Frontend, backend, architecture' },
  { name: 'Marketing', slug: 'marketing', emoji: '🟨', color: '#eab308', bgLight: '#fefce8', description: 'Growth, social, launch strategy' },
  { name: 'Writing', slug: 'writing', emoji: '🟩', color: '#22c55e', bgLight: '#f0fdf4', description: 'Copywriting, content, documentation' },
  { name: 'Strategy', slug: 'strategy', emoji: '🟪', color: '#a855f7', bgLight: '#faf5ff', description: 'Business, product, planning' },
  { name: 'Productivity', slug: 'productivity', emoji: '🟥', color: '#ef4444', bgLight: '#fef2f2', description: 'Workflows, automation, organization' },
  { name: 'Branding', slug: 'branding', emoji: '🩷', color: '#ec4899', bgLight: '#fdf2f8', description: 'Identity, naming, brand voice' },
] as const

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
