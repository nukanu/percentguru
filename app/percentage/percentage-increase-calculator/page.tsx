import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { softwareApplicationSchema, faqSchema } from "@/lib/seo/schema"
import CalculatorShell from "@/components/calculator/CalculatorShell"
import Breadcrumb from "@/components/layout/Breadcrumb"
import PercentageIncreaseWidget from "./CalculatorWidget"

const faqs = [
  {
    question: "What is the percentage increase from 80 to 100?",
    answer: "The percentage increase from 80 to 100 is 25%. Calculation: ((100 - 80) / 80) × 100 = 25.",
  },
  {
    question: "What is the percentage increase from 50 to 75?",
    answer: "The percentage increase from 50 to 75 is 50%. Calculation: ((75 - 50) / 50) × 100 = 50.",
  },
  {
    question: "How do you calculate percentage increase?",
    answer: "Subtract the original value from the new value, divide by the original value, then multiply by 100. Formula: ((New - Original) / Original) × 100.",
  },
  {
    question: "Can the result be more than 100%?",
    answer: "Yes. If a value doubles, the percentage increase is 100%. If it triples, it's 200%. There is no upper limit.",
  },
  {
    question: "What if my new value is lower than the original?",
    answer: "The result will be negative, indicating a percentage decrease rather than an increase. Use the percentage decrease calculator if you know the value has fallen.",
  },
  {
    question: "What is the percentage increase from 200 to 250?",
    answer: "The percentage increase from 200 to 250 is 25%. Calculation: ((250 - 200) / 200) × 100 = 25.",
  },
]

export const metadata: Metadata = generatePageMetadata({
  title: "Percentage Increase Calculator",
  description: "Calculate the percentage increase between two values instantly. Enter the original and new value to get the result.",
  path: "/percentage/percentage-increase-calculator/",
  keywords: ["percentage increase calculator", "percent increase", "how to calculate percentage increase"],
})

export default function PercentageIncreasePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema("Percentage Increase Calculator", "Calculate the percentage increase between two values.")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <div className="mx-auto max-w-2xl px-4 pt-8">
        <Breadcrumb crumbs={[
          { name: "Home", href: "/" },
          { name: "Percentage Calculators", href: "/percentage/" },
          { name: "Percentage Increase Calculator", href: "/percentage/percentage-increase-calculator/" },
        ]} />
      </div>
      <CalculatorShell
        slug="percentage-increase-calculator"
        title="Percentage Increase Calculator"
        intro="Enter the original value and the new value to find out by what percentage it has increased. Works for prices, salaries, scores, or any numeric change."
        calculator={<PercentageIncreaseWidget />}
        howTo={[
          "Enter the original (starting) value in the first field.",
          "Enter the new (final) value in the second field.",
          "The percentage increase is calculated instantly.",
        ]}
        formula="Percentage Increase = ((New - Original) / Original) × 100"
        formulaExplained="Find the difference between the new and original values, divide by the original, then multiply by 100 to express it as a percentage."
        examples={[
          { input: "From 40 to 60", output: "50%" },
          { input: "From 120 to 150", output: "25%" },
          { input: "From 9 to 12", output: "33.3333%" },
        ]}
        useCases={[
          "Calculating a pay rise as a percentage",
          "Measuring revenue growth year-over-year",
          "Tracking price increases on products",
          "Comparing exam score improvements",
          "Measuring follower or subscriber growth",
        ]}
        faqs={faqs}
      />
    </>
  )
}
