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
    slug: "tip-calculator",
    hub: "percentage",
    title: "Tip Calculator",
    description: "Calculate tip amounts and split the bill between any number of people.",
    keywords: ["tip calculator", "restaurant tip calculator", "how much to tip", "split bill calculator"],
  },
  {
    slug: "percent-off-calculator",
    hub: "percentage",
    title: "Percent Off Calculator",
    description: "Find the sale price and savings for any percent off deal instantly.",
    keywords: ["percent off calculator", "percentage off calculator", "how much is x% off"],
  },
  {
    slug: "salary-increase-calculator",
    hub: "percentage",
    title: "Salary Increase Calculator",
    description: "Calculate your raise amount and new salary from a percentage increase.",
    keywords: ["salary increase calculator", "raise calculator", "percentage raise calculator", "calculate salary increase"],
  },
  {
    slug: "annual-change-calculator",
    hub: "percentage",
    title: "Annual Percentage Change Calculator",
    description: "Calculate CAGR and total percentage change between two values over any number of years.",
    keywords: ["annual percentage change calculator", "CAGR calculator", "annual growth rate calculator"],
  },
  {
    slug: "percentage-points-calculator",
    hub: "percentage",
    title: "Percentage Points Calculator",
    description: "Calculate the percentage point change and relative percentage change between two rates.",
    keywords: ["percentage points calculator", "percentage points vs percentage", "percentage point change"],
  },
  {
    slug: "grade-calculator",
    hub: "percentage",
    title: "Grade Calculator",
    description: "Convert any test score to a percentage and letter grade instantly.",
    keywords: ["grade calculator", "test score percentage calculator", "what grade is x out of y"],
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
  {
    slug: "roi-calculator",
    hub: "finance",
    title: "ROI Calculator",
    description: "Calculate return on investment percentage and net gain or loss.",
    keywords: ["ROI calculator", "return on investment calculator", "calculate ROI"],
  },
  {
    slug: "interest-calculator",
    hub: "finance",
    title: "Simple Interest Calculator",
    description: "Calculate simple interest and total amount from principal, rate, and time.",
    keywords: ["simple interest calculator", "interest calculator", "calculate interest"],
  },
  {
    slug: "loan-payment-calculator",
    hub: "finance",
    title: "Loan Payment Calculator",
    description: "Calculate monthly loan payment and total interest for any fixed-rate loan.",
    keywords: ["loan payment calculator", "monthly payment calculator", "loan calculator"],
  },
  {
    slug: "weighted-average-calculator",
    hub: "finance",
    title: "Weighted Average Calculator",
    description: "Calculate the weighted average from values and their corresponding weights.",
    keywords: ["weighted average calculator", "weighted mean calculator", "calculate weighted average"],
  },
  {
    slug: "compound-interest-calculator",
    hub: "finance",
    title: "Compound Interest Calculator",
    description: "Calculate total amount and interest earned with daily, monthly, quarterly, or annual compounding.",
    keywords: ["compound interest calculator", "compound interest formula", "daily monthly annual compounding"],
  },
  {
    slug: "break-even-calculator",
    hub: "finance",
    title: "Break-Even Calculator",
    description: "Calculate break-even point in units and revenue from fixed costs and pricing.",
    keywords: ["break-even calculator", "breakeven point calculator", "break even analysis"],
  },
  {
    slug: "cost-reduction-calculator",
    hub: "finance",
    title: "Cost Reduction Calculator",
    description: "Calculate savings amount and percentage cost reduction between two costs.",
    keywords: ["cost reduction calculator", "cost savings calculator", "cost savings percentage calculator"],
  },
  {
    slug: "gpa-calculator",
    hub: "percentage",
    title: "GPA Calculator",
    description: "Calculate your GPA on the 4.0 scale from letter grades and credit hours.",
    keywords: ["GPA calculator", "grade point average calculator", "college GPA calculator", "how to calculate GPA"],
  },
  {
    slug: "fraction-to-percent-calculator",
    hub: "percentage",
    title: "Fraction to Percent Calculator",
    description: "Convert any fraction to a percentage instantly. Enter numerator and denominator.",
    keywords: ["fraction to percent calculator", "fraction to percentage", "convert fraction to percent"],
  },
  {
    slug: "vat-calculator",
    hub: "finance",
    title: "VAT Calculator",
    description: "Add or remove VAT from any amount. Works for any VAT rate including UK 20%, EU rates, and custom rates.",
    keywords: ["VAT calculator", "add VAT calculator", "remove VAT calculator", "VAT inclusive exclusive"],
  },
  {
    slug: "decimal-to-percent-calculator",
    hub: "percentage",
    title: "Decimal to Percent Calculator",
    description: "Convert any decimal to a percentage instantly. Enter 0.75 to get 75%.",
    keywords: ["decimal to percent calculator", "convert decimal to percentage", "decimal to percent"],
  },
  {
    slug: "percent-to-decimal-calculator",
    hub: "percentage",
    title: "Percent to Decimal Calculator",
    description: "Convert any percentage to a decimal instantly. Enter 75 to get 0.75.",
    keywords: ["percent to decimal calculator", "convert percentage to decimal", "percent to decimal"],
  },
]

export function getCalculatorsByHub(hub: "percentage" | "finance"): CalculatorConfig[] {
  return calculators.filter((c) => c.hub === hub)
}

export function getCalculator(slug: string): CalculatorConfig | undefined {
  return calculators.find((c) => c.slug === slug)
}
