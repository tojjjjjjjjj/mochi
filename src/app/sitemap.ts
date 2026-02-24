import { supabase } from '@/lib/supabase'
import { FLAVORS } from '@/lib/constants'
import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { data: mochis } = await supabase
    .from('mochis')
    .select('slug, updated_at') as { data: { slug: string; updated_at: string }[] | null }

  const mochiUrls = (mochis ?? []).map((mochi) => ({
    url: `https://mochi.market/mochi/${mochi.slug}`,
    lastModified: new Date(mochi.updated_at),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const flavorUrls = FLAVORS.map((flavor) => ({
    url: `https://mochi.market/flavor/${flavor.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [
    {
      url: 'https://mochi.market',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://mochi.market/menu',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: 'https://mochi.market/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...flavorUrls,
    ...mochiUrls,
  ]
}
