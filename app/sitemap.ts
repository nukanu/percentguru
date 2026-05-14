import type { MetadataRoute } from "next"
import { calculators } from "@/lib/content/calculators"

const BASE_URL = "https://percentguru.com"

const ANSWER_PERCENTS = [5, 10, 15, 20, 25, 30, 33, 40, 50, 60, 66, 75, 80, 90]
const ANSWER_NUMBERS = [20, 25, 30, 40, 50, 60, 75, 80, 100, 120, 150, 200, 250, 300, 400, 500, 750, 1000]
const ANSWER_PARTS = [5, 10, 12, 15, 18, 20, 25, 30, 40, 50, 60, 75, 80, 100]
const ANSWER_WHOLES = [20, 25, 40, 50, 75, 100, 120, 150, 200, 250, 300, 400, 500, 1000]
const INCREASE_PERCENTS = [3, 5, 10, 15, 20, 25, 30, 40, 50]
const INCREASE_BASES = [10, 20, 25, 50, 100, 150, 200, 250, 300, 400, 500, 1000]
const DECREASE_PERCENTS = [5, 10, 15, 20, 25, 30, 40, 50]
const DECREASE_BASES = [10, 20, 25, 50, 100, 150, 200, 250, 300, 400, 500, 1000]
const OFF_PERCENTS = [5, 10, 15, 20, 25, 30, 40, 50, 60, 70, 75]
const OFF_PRICES = [10, 20, 25, 30, 40, 50, 60, 75, 80, 100, 120, 150, 200, 250, 300, 400, 500, 750, 1000]

export default function sitemap(): MetadataRoute.Sitemap {
  const calculatorPages = calculators.map((c) => ({
    url: `${BASE_URL}/${c.hub}/${c.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  const answerPages = [
    ...ANSWER_PERCENTS.flatMap((p) =>
      ANSWER_NUMBERS.map((n) => ({
        url: `${BASE_URL}/percentage/what-is-${p}-percent-of-${n}/`,
        lastModified: new Date(),
        changeFrequency: "yearly" as const,
        priority: 0.5,
      }))
    ),
    ...ANSWER_PARTS.flatMap((part) =>
      ANSWER_WHOLES.map((whole) => ({
        url: `${BASE_URL}/percentage/${part}-is-what-percent-of-${whole}/`,
        lastModified: new Date(),
        changeFrequency: "yearly" as const,
        priority: 0.5,
      }))
    ),
    ...INCREASE_PERCENTS.flatMap((p) =>
      INCREASE_BASES.map((base) => ({
        url: `${BASE_URL}/percentage/what-is-${p}-percent-increase-from-${base}/`,
        lastModified: new Date(),
        changeFrequency: "yearly" as const,
        priority: 0.5,
      }))
    ),
    ...DECREASE_PERCENTS.flatMap((p) =>
      DECREASE_BASES.map((base) => ({
        url: `${BASE_URL}/percentage/what-is-${p}-percent-decrease-from-${base}/`,
        lastModified: new Date(),
        changeFrequency: "yearly" as const,
        priority: 0.5,
      }))
    ),
    ...OFF_PERCENTS.flatMap((p) =>
      OFF_PRICES.map((price) => ({
        url: `${BASE_URL}/percentage/what-is-${p}-percent-off-${price}/`,
        lastModified: new Date(),
        changeFrequency: "yearly" as const,
        priority: 0.5,
      }))
    ),
  ]

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
