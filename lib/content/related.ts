const relatedMap: Record<string, string[]> = {
  "what-is-x-percent-of-y": [
    "x-is-what-percent-of-y",
    "percentage-calculator",
    "reverse-percentage-calculator",
  ],
  "x-is-what-percent-of-y": [
    "what-is-x-percent-of-y",
    "percentage-difference-calculator",
    "percentage-change-calculator",
  ],
  "percentage-calculator": [
    "what-is-x-percent-of-y",
    "x-is-what-percent-of-y",
    "percentage-change-calculator",
  ],
  "percentage-increase-calculator": [
    "percentage-decrease-calculator",
    "percentage-change-calculator",
    "percentage-difference-calculator",
  ],
  "percentage-decrease-calculator": [
    "percentage-increase-calculator",
    "percentage-change-calculator",
    "reverse-percentage-calculator",
  ],
  "percentage-change-calculator": [
    "percentage-increase-calculator",
    "percentage-decrease-calculator",
    "percentage-difference-calculator",
  ],
  "percentage-difference-calculator": [
    "percentage-change-calculator",
    "x-is-what-percent-of-y",
    "percentage-error-calculator",
  ],
  "reverse-percentage-calculator": [
    "what-is-x-percent-of-y",
    "percentage-calculator",
    "percentage-change-calculator",
  ],
  "percentage-error-calculator": [
    "percentage-difference-calculator",
    "percentage-change-calculator",
    "x-is-what-percent-of-y",
  ],
  "discount-calculator": [
    "markup-calculator",
    "profit-margin-calculator",
    "sales-tax-calculator",
  ],
  "markup-calculator": [
    "discount-calculator",
    "profit-margin-calculator",
    "sales-tax-calculator",
  ],
  "profit-margin-calculator": [
    "markup-calculator",
    "discount-calculator",
    "sales-tax-calculator",
  ],
  "sales-tax-calculator": [
    "discount-calculator",
    "profit-margin-calculator",
    "markup-calculator",
  ],
}

export function getRelatedSlugs(slug: string): string[] {
  return relatedMap[slug] ?? []
}
