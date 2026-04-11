import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { softwareApplicationSchema, faqSchema } from "@/lib/seo/schema"
import CalculatorShell from "@/components/calculator/CalculatorShell"
import Breadcrumb from "@/components/layout/Breadcrumb"
import PercentageDecreaseWidget from "./CalculatorWidget"

const faqs = [
  {
    question: "What is the percentage decrease from 100 to 80?",
    answer: "The percentage decrease from 100 to 80 is 20%. Calculation: ((100 - 80) / 100) × 100 = 20.",
  },
  {
    question: "What is the percentage decrease from 200 to 150?",
    answer: "The percentage decrease from 200 to 150 is 25%. Calculation: ((200 - 150) / 200) × 100 = 25.",
  },
  {
    question: "How do you calculate percentage decrease?",
    answer: "Subtract the new value from the original, divide by the original value, then multiply by 100. Formula: ((Original - New) / Original) × 100.",
  },
  {
    question: "What if my new value is higher than the original?",
    answer: "The result will be negative, which means the value actually increased. Use the percentage increase calculator in that case.",
  },
  {
    question: "What is the percentage decrease from 500 to 400?",
    answer: "The percentage decrease from 500 to 400 is 20%. Calculation: ((500 - 400) / 500) × 100 = 20.",
  },
  {
    question: "Is a 50% decrease the same as halving a value?",
    answer: "Yes. A 50% decrease means the new value is exactly half the original. For example, 200 decreased by 50% = 100.",
  },
]

export const metadata: Metadata = generatePageMetadata({
  title: "Percentage Decrease Calculator",
  description: "Calculate the percentage decrease between two values instantly. Enter the original and new value to get the result.",
  path: "/percentage/percentage-decrease-calculator/",
  keywords: ["percentage decrease calculator", "percent decrease", "how to calculate percentage decrease"],
})

export default function PercentageDecreasePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema("Percentage Decrease Calculator", "Calculate the percentage decrease between two values.")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <div className="mx-auto max-w-2xl px-4 pt-8">
        <Breadcrumb crumbs={[
          { name: "Home", href: "/" },
          { name: "Percentage Calculators", href: "/percentage/" },
          { name: "Percentage Decrease Calculator", href: "/percentage/percentage-decrease-calculator/" },
        ]} />
      </div>
      <CalculatorShell
        slug="percentage-decrease-calculator"
        title="Percentage Decrease Calculator"
        intro="Enter the original value and the new (lower) value to find out by what percentage it has decreased. Useful for price drops, weight loss, budget cuts, or any reduction."
        calculator={<PercentageDecreaseWidget />}
        howTo={[
          "Enter the original (starting) value in the first field.",
          "Enter the new (lower) value in the second field.",
          "The percentage decrease is calculated instantly.",
        ]}
        formula="Percentage Decrease = ((Original - New) / Original) × 100"
        formulaExplained="Find the difference between the original and new values, divide by the original, then multiply by 100."
        examples={[
          { input: "From 80 to 60", output: "25%" },
          { input: "From 1000 to 850", output: "15%" },
          { input: "From 45 to 36", output: "20%" },
        ]}
        useCases={[
          "Calculating a sale price reduction",
          "Tracking weight loss progress as a percentage",
          "Measuring a drop in revenue or traffic",
          "Finding the percentage cut in a budget",
          "Comparing energy usage reductions",
        ]}
        faqs={faqs}
      />
    </>
  )
}
