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
    slug: "markup-vs-margin",
    title: "Markup vs. Margin: The Difference Every Business Owner Should Know",
    description:
      "Markup and margin use the same two numbers but divide by different things — and confusing them quietly erodes profit. Here's the distinction, the formulas, a conversion table, and worked examples.",
    category: "Business",
    published: "2026-06-07",
    updated: "2026-06-07",
  },
  {
    slug: "how-to-calculate-percentages",
    title: "How to Calculate Percentages: The Complete Guide",
    description:
      "The three percentage problems that cover almost everything — finding a percent of a number, working out one number as a percent of another, and percentage change — explained with plain-English methods and worked examples.",
    category: "Maths",
    published: "2026-06-07",
    updated: "2026-06-07",
  },
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
