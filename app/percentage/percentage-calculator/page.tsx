import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { softwareApplicationSchema, faqSchema } from "@/lib/seo/schema"
import CalculatorShell from "@/components/calculator/CalculatorShell"
import Breadcrumb from "@/components/layout/Breadcrumb"
import PercentageCalculatorWidget from "./CalculatorWidget"

const faqs = [
  {
    question: "What is 25% of 80?",
    answer: "25% of 80 is 20. Calculation: (25 / 100) × 80 = 20.",
  },
  {
    question: "What is 10% of 350?",
    answer: "10% of 350 is 35. A quick shortcut: to find 10% of any number, move the decimal point one place to the left.",
  },
  {
    question: "How do I calculate a percentage of a number?",
    answer: "Divide the percentage by 100 to convert it to a decimal, then multiply by the number. For example, 30% of 90 = 0.30 × 90 = 27.",
  },
  {
    question: "What is 1% of a large number?",
    answer: "1% is always the number divided by 100. So 1% of 8,500 is 85. From there, multiply to get any other percentage — 7% of 8,500 = 85 × 7 = 595.",
  },
  {
    question: "Can I enter decimal percentages like 12.5%?",
    answer: "Yes. Enter 12.5 in the percentage field and the calculator handles it exactly. Useful for things like 6.5% tax or 2.75% interest.",
  },
  {
    question: "What is the difference between percent and percentage points?",
    answer: "Percent expresses a ratio (e.g. 20% of 100 = 20). Percentage points measure the arithmetic difference between two percentages — if an interest rate goes from 3% to 5%, that's a 2 percentage-point rise, not a 2% rise.",
  },
]

export const metadata: Metadata = generatePageMetadata({
  title: "Percentage Calculator — Find Any Percent of a Number",
  description: "Enter a percentage and a number to get the answer instantly. Works for tax, tips, discounts, grades, and more.",
  path: "/percentage/percentage-calculator/",
  keywords: ["percentage calculator", "percent calculator", "calculate percentage of number"],
})

export default function PercentageCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema("Percentage Calculator", "Calculate what percentage of any number is instantly.")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <div className="mx-auto max-w-2xl px-4 pt-8">
        <Breadcrumb crumbs={[
          { name: "Home", href: "/" },
          { name: "Percentage Calculators", href: "/percentage/" },
          { name: "Percentage Calculator", href: "/percentage/percentage-calculator/" },
        ]} />
      </div>
      <CalculatorShell
        slug="percentage-calculator"
        title="Percentage Calculator"
        intro="The fastest way to find a percentage of any number. Enter the percentage and the number — the answer appears before you finish typing. Works for tips, taxes, discounts, grades, or anything else."
        calculator={<PercentageCalculatorWidget />}
        howTo={[
          "Enter the percentage in the first field (e.g. 25 for 25%).",
          "Enter the number you want to take the percentage of.",
          "The result appears instantly.",
        ]}
        formula="Result = (Percentage / 100) × Number"
        formulaExplained="Convert the percentage to a decimal by dividing by 100, then multiply by the number."
        examples={[
          { input: "What is 25% of 200?", output: "50" },
          { input: "What is 8% of 75?", output: "6" },
          { input: "What is 33.3% of 90?", output: "29.97" },
        ]}
        useCases={[
          "Calculating a percentage of a budget",
          "Finding how much tax is owed on a price",
          "Working out a percentage share of a total",
          "Scoring grades as a percentage",
          "Splitting costs by ownership percentage",
        ]}
        faqs={faqs}
      />
    </>
  )
}
