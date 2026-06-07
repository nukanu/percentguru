// Registry of long-form guide articles (content, not calculators). Drives the
// /guides/ index and the sitemap. Add a new entry when a guide page ships.

export type GuideMeta = {
  slug: string
  title: string
  description: string
  // Short label shown on the index card.
  category: string
  // ISO date for display + Article schema.
  published: string
  updated: string
}

export const guides: GuideMeta[] = [
  {
    slug: "how-to-work-out-vat",
    title: "How to Work Out VAT: A Plain-English UK Guide",
    description:
      "Add VAT, remove VAT, and avoid the most common mistake — with the exact formulas, the UK 20%/5%/0% rates, and worked examples for every step.",
    category: "Tax",
    published: "2026-06-07",
    updated: "2026-06-07",
  },
]
