import type { Metadata } from "next"

const BASE_URL = "https://percentguru.com"
const SITE_NAME = "PercentGuru"

export function generatePageMetadata({
  title,
  description,
  path,
  keywords = [],
}: {
  title: string
  description: string
  path: string
  keywords?: string[]
}): Metadata {
  const url = `${BASE_URL}${path}`

  return {
    title: `${title} | ${SITE_NAME}`,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
    },
    twitter: {
      card: "summary",
      title: `${title} | ${SITE_NAME}`,
      description,
    },
  }
}

export function generateHubMetadata({
  hub,
  title,
  description,
}: {
  hub: string
  title: string
  description: string
}): Metadata {
  return generatePageMetadata({
    title,
    description,
    path: `/${hub}/`,
  })
}
