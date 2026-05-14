const relatedMap: Record<string, string[]> = {
  "what-is-x-percent-of-y": [
    "tip-calculator",
    "x-is-what-percent-of-y",
    "percentage-calculator",
  ],
  "x-is-what-percent-of-y": [
    "grade-calculator",
    "what-is-x-percent-of-y",
    "percentage-difference-calculator",
  ],
  "percentage-calculator": [
    "what-is-x-percent-of-y",
    "x-is-what-percent-of-y",
    "percentage-change-calculator",
  ],
  "percentage-increase-calculator": [
    "percentage-decrease-calculator",
    "percentage-change-calculator",
    "salary-increase-calculator",
  ],
  "percentage-decrease-calculator": [
    "percentage-increase-calculator",
    "percentage-change-calculator",
    "reverse-percentage-calculator",
  ],
  "percentage-change-calculator": [
    "percentage-increase-calculator",
    "percentage-decrease-calculator",
    "annual-change-calculator",
  ],
  "percentage-difference-calculator": [
    "percentage-change-calculator",
    "x-is-what-percent-of-y",
    "percentage-error-calculator",
  ],
  "reverse-percentage-calculator": [
    "percent-off-calculator",
    "what-is-x-percent-of-y",
    "percentage-calculator",
  ],
  "percentage-error-calculator": [
    "percentage-difference-calculator",
    "percentage-change-calculator",
    "x-is-what-percent-of-y",
  ],
  "tip-calculator": [
    "what-is-x-percent-of-y",
    "percent-off-calculator",
    "sales-tax-calculator",
  ],
  "percent-off-calculator": [
    "tip-calculator",
    "discount-calculator",
    "sales-tax-calculator",
  ],
  "discount-calculator": [
    "percent-off-calculator",
    "markup-calculator",
    "cost-reduction-calculator",
  ],
  "markup-calculator": [
    "discount-calculator",
    "profit-margin-calculator",
    "sales-tax-calculator",
  ],
  "profit-margin-calculator": [
    "markup-calculator",
    "cost-reduction-calculator",
    "roi-calculator",
  ],
  "sales-tax-calculator": [
    "discount-calculator",
    "vat-calculator",
    "markup-calculator",
  ],
  "roi-calculator": [
    "profit-margin-calculator",
    "break-even-calculator",
    "interest-calculator",
  ],
  "interest-calculator": [
    "compound-interest-calculator",
    "loan-payment-calculator",
    "roi-calculator",
  ],
  "loan-payment-calculator": [
    "interest-calculator",
    "roi-calculator",
    "break-even-calculator",
  ],
  "weighted-average-calculator": [
    "profit-margin-calculator",
    "discount-calculator",
    "markup-calculator",
  ],
  "break-even-calculator": [
    "profit-margin-calculator",
    "roi-calculator",
    "markup-calculator",
  ],
  "compound-interest-calculator": [
    "interest-calculator",
    "roi-calculator",
    "loan-payment-calculator",
  ],
  "percentage-points-calculator": [
    "percentage-change-calculator",
    "percentage-increase-calculator",
    "percentage-difference-calculator",
  ],
  "grade-calculator": [
    "what-is-x-percent-of-y",
    "weighted-average-calculator",
    "gpa-calculator",
  ],
  "salary-increase-calculator": [
    "percentage-increase-calculator",
    "percentage-change-calculator",
    "annual-change-calculator",
  ],
  "annual-change-calculator": [
    "percentage-change-calculator",
    "salary-increase-calculator",
    "percentage-increase-calculator",
  ],
  "cost-reduction-calculator": [
    "percentage-decrease-calculator",
    "profit-margin-calculator",
    "discount-calculator",
  ],
  "gpa-calculator": [
    "grade-calculator",
    "weighted-average-calculator",
    "x-is-what-percent-of-y",
  ],
  "fraction-to-percent-calculator": [
    "what-is-x-percent-of-y",
    "x-is-what-percent-of-y",
    "percentage-calculator",
  ],
  "vat-calculator": [
    "sales-tax-calculator",
    "discount-calculator",
    "profit-margin-calculator",
  ],
  "decimal-to-percent-calculator": [
    "percent-to-decimal-calculator",
    "fraction-to-percent-calculator",
    "percentage-calculator",
  ],
  "percent-to-decimal-calculator": [
    "decimal-to-percent-calculator",
    "fraction-to-percent-calculator",
    "percentage-calculator",
  ],
}

export function getRelatedSlugs(slug: string): string[] {
  return relatedMap[slug] ?? []
}
