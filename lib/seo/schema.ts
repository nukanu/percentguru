const BASE_URL = "https://percentguru.com"

export function softwareApplicationSchema(name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  }
}

// schemaAnswer is the plain-text fallback for FAQs whose display answer contains JSX
export function faqSchema(
  faqs: { question: string; answer: unknown; schemaAnswer?: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer, schemaAnswer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: schemaAnswer ?? (typeof answer === "string" ? answer : ""),
      },
    })),
  }
}

export function articleSchema({
  headline,
  description,
  path,
  datePublished,
  dateModified,
}: {
  headline: string
  description: string
  path: string
  datePublished: string
  dateModified: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    datePublished,
    dateModified,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${BASE_URL}${path}` },
    author: { "@type": "Organization", name: "PercentGuru", url: BASE_URL },
    publisher: { "@type": "Organization", name: "PercentGuru", url: BASE_URL },
  }
}

export function breadcrumbSchema(
  crumbs: { name: string; href: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map(({ name, href }, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
      item: `${BASE_URL}${href}`,
    })),
  }
}
