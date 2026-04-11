export type CalculatorConfig = {
  slug: string
  hub: "percentage" | "finance"
  title: string
  description: string
  keywords: string[]
}

export const calculators: CalculatorConfig[] = [
  {
    slug: "percentage-calculator",
    hub: "percentage",
    title: "Percentage Calculator",
    description: "Calculate percentages quickly and easily.",
    keywords: ["percentage calculator", "percent calculator", "calculate percentage"],
  },
  {
    slug: "what-is-x-percent-of-y",
    hub: "percentage",
    title: "What is X% of Y?",
    description: "Find out what any percentage of a number is instantly.",
    keywords: ["what is x percent of y", "percent of a number", "percentage of number calculator"],
  },
  {
    slug: "x-is-what-percent-of-y",
    hub: "percentage",
    title: "X is What Percent of Y?",
    description: "Find what percentage one number is of another.",
    keywords: ["x is what percent of y", "what percent of", "percentage calculator"],
  },
  {
    slug: "percentage-increase-calculator",
    hub: "percentage",
    title: "Percentage Increase Calculator",
    description: "Calculate the percentage increase between two values.",
    keywords: ["percentage increase calculator", "percent increase", "increase by percentage"],
  },
  {
    slug: "percentage-decrease-calculator",
    hub: "percentage",
    title: "Percentage Decrease Calculator",
    description: "Calculate the percentage decrease between two values.",
    keywords: ["percentage decrease calculator", "percent decrease", "decrease by percentage"],
  },
  {
    slug: "percentage-change-calculator",
    hub: "percentage",
    title: "Percentage Change Calculator",
    description: "Calculate the percentage change between two values.",
    keywords: ["percentage change calculator", "percent change", "percentage difference"],
  },
  {
    slug: "percentage-difference-calculator",
    hub: "percentage",
    title: "Percentage Difference Calculator",
    description: "Find the percentage difference between two numbers.",
    keywords: ["percentage difference calculator", "percent difference", "difference between two numbers"],
  },
  {
    slug: "reverse-percentage-calculator",
    hub: "percentage",
    title: "Reverse Percentage Calculator",
    description: "Work backwards from a percentage to find the original value.",
    keywords: ["reverse percentage calculator", "reverse percent", "find original value from percentage"],
  },
  {
    slug: "percentage-error-calculator",
    hub: "percentage",
    title: "Percentage Error Calculator",
    description: "Calculate the percentage error between experimental and theoretical values.",
    keywords: ["percentage error calculator", "percent error", "calculate percentage error"],
  },
  {
    slug: "discount-calculator",
    hub: "finance",
    title: "Discount Calculator",
    description: "Calculate discounted prices and savings instantly.",
    keywords: ["discount calculator", "percent off calculator", "sale price calculator"],
  },
  {
    slug: "markup-calculator",
    hub: "finance",
    title: "Markup Calculator",
    description: "Calculate selling price from cost and markup percentage.",
    keywords: ["markup calculator", "markup percentage", "price markup calculator"],
  },
  {
    slug: "profit-margin-calculator",
    hub: "finance",
    title: "Profit Margin Calculator",
    description: "Calculate gross profit margin for any product or service.",
    keywords: ["profit margin calculator", "gross margin calculator", "profit percentage"],
  },
  {
    slug: "sales-tax-calculator",
    hub: "finance",
    title: "Sales Tax Calculator",
    description: "Calculate sales tax and total price including tax.",
    keywords: ["sales tax calculator", "tax calculator", "calculate sales tax"],
  },
]

export function getCalculatorsByHub(hub: "percentage" | "finance"): CalculatorConfig[] {
  return calculators.filter((c) => c.hub === hub)
}

export function getCalculator(slug: string): CalculatorConfig | undefined {
  return calculators.find((c) => c.slug === slug)
}
