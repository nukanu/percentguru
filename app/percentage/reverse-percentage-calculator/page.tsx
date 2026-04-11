import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { softwareApplicationSchema, faqSchema } from "@/lib/seo/schema"
import CalculatorShell from "@/components/calculator/CalculatorShell"
import Breadcrumb from "@/components/layout/Breadcrumb"
import ReversePercentageWidget from "./CalculatorWidget"

const faqs = [
  {
    question: "20 is 25% of what number?",
    answer: "20 is 25% of 80. Calculation: (20 / 25) × 100 = 80.",
  },
  {
    question: "15 is 30% of what number?",
    answer: "15 is 30% of 50. Calculation: (15 / 30) × 100 = 50.",
  },
  {
    question: "What is a reverse percentage?",
    answer: "A reverse percentage works backwards from a known result and a known percentage to find the original value. For example: if 40 is 20% of something, what is that something? Answer: 200.",
  },
  {
    question: "How do I find the original price before a discount?",
    answer: "This depends on what you know. If an item is $80 after a 20% discount, the remaining price is 80% of the original. Enter 80 as the percentage and 80 as the result — the calculator gives $100. Don't enter the discount percentage (20); enter the remaining percentage (80).",
  },
  {
    question: "50 is 10% of what number?",
    answer: "50 is 10% of 500. Calculation: (50 / 10) × 100 = 500.",
  },
  {
    question: "When would I use a reverse percentage calculator?",
    answer: "Whenever you know a result and the percentage that was applied, but not the original value. Common examples: finding pre-tax prices, pre-discount prices, or original values before a percentage change.",
  },
]

export const metadata: Metadata = generatePageMetadata({
  title: "Reverse Percentage Calculator",
  description: "Work backwards from a percentage and a known result to find the original value. Useful for finding pre-discount prices, pre-tax amounts, and original values.",
  path: "/percentage/reverse-percentage-calculator/",
  keywords: ["reverse percentage calculator", "reverse percent", "find original value from percentage", "percentage backwards"],
})

export default function ReversePercentagePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema("Reverse Percentage Calculator", "Find the original value from a known percentage and result.")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <div className="mx-auto max-w-2xl px-4 pt-8">
        <Breadcrumb crumbs={[
          { name: "Home", href: "/" },
          { name: "Percentage Calculators", href: "/percentage/" },
          { name: "Reverse Percentage Calculator", href: "/percentage/reverse-percentage-calculator/" },
        ]} />
      </div>
      <CalculatorShell
        slug="reverse-percentage-calculator"
        title="Reverse Percentage Calculator"
        intro="Know the percentage and the result, but not the original number? Enter them here to work backwards and find the original value."
        calculator={<ReversePercentageWidget />}
        howTo={[
          "Enter the percentage in the first field (e.g. 20 for 20%).",
          "Enter the known result — the value that is that percentage of the original.",
          "The original value is calculated instantly.",
        ]}
        formula="Original = (Result / Percentage) × 100"
        formulaExplained="Divide the known result by the percentage, then multiply by 100 to find the original value."
        examples={[
          { input: "30 is 15% of what?", output: "200" },
          { input: "45 is 90% of what?", output: "50" },
          { input: "7 is 35% of what?", output: "20" },
        ]}
        useCases={[
          "Finding the original price before a percentage discount",
          "Calculating pre-tax prices from post-tax amounts",
          "Reversing a percentage increase to find the starting value",
          "Determining the original salary before a pay cut",
          "Working backwards from a test score to find total marks",
        ]}
        faqs={faqs}
      />
    </>
  )
}
