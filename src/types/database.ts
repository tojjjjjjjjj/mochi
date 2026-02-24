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
  bgLight: string
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
