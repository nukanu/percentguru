import type { MetadataRoute } from "next"
import { calculators } from "@/lib/content/calculators"
import { CURATED_ANSWER_SLUGS } from "@/lib/content/curated-answers"

const BASE_URL = "https://percentguru.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const calculatorPages = calculators.map((c) => ({
    url: `${BASE_URL}/${c.hub}/${c.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  // Only the curated answer pages stay in the index; the rest are noindexed,
  // so they are intentionally excluded from the sitemap. Salary pages are
  // noindexed too and likewise excluded.
  const answerPages = [...CURATED_ANSWER_SLUGS].map((slug) => ({
    url: `${BASE_URL}/percentage/${slug}/`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }))

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/percentage/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/finance/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...calculatorPages,
    ...answerPages,
    {
      url: `${BASE_URL}/about/`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/contact/`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/privacy-policy/`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms/`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ]
}
