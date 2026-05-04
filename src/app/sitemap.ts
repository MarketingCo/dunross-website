import { MetadataRoute } from 'next'
import { neighborhoods } from '@/lib/neighborhoods'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dunross.co'

  const routes = [
    '',
    'purpose',
    'heritage',
    'operations',
    'contact',
  ]

  const mainEntries = routes.map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const neighborhoodEntries = neighborhoods.map((n) => ({
    url: `${baseUrl}/${n.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...mainEntries, ...neighborhoodEntries]
}
