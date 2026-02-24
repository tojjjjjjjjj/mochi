import { createClient } from '@supabase/supabase-js'
import { readFileSync } from 'fs'
import { resolve } from 'path'
import { HOUSE_SPECIALS } from '../src/data/house-specials'

// Load .env.local manually (no dotenv dependency needed)
try {
  const envPath = resolve(process.cwd(), '.env.local')
  const envContent = readFileSync(envPath, 'utf-8')
  for (const line of envContent.split('\n')) {
    const trimmed = line.trim()
    if (trimmed && !trimmed.startsWith('#')) {
      const eqIndex = trimmed.indexOf('=')
      if (eqIndex !== -1) {
        const key = trimmed.slice(0, eqIndex)
        const value = trimmed.slice(eqIndex + 1)
        if (!process.env[key]) {
          process.env[key] = value
        }
      }
    }
  }
} catch {
  // .env.local not found, rely on environment variables
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://kmmvdktndcjhscsizlfl.supabase.co'
const supabaseKey = process.env.SUPABASE_SERVICE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

const supabase = createClient(supabaseUrl, supabaseKey)

async function seed() {
  console.log(`Seeding ${HOUSE_SPECIALS.length} mochis...`)

  const { data, error } = await supabase
    .from('mochis')
    .upsert(
      HOUSE_SPECIALS.map(m => ({
        ...m,
        feed_count: Math.floor(Math.random() * 500) + 100, // Initial social proof
      })),
      { onConflict: 'slug' }
    )

  if (error) {
    console.error('Seed error:', error)
    process.exit(1)
  }

  console.log(`Successfully seeded ${HOUSE_SPECIALS.length} mochis!`)
}

seed()
