import type { Metadata } from "next"
import Link from "next/link"
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
    answer: "A reverse percentage works backwards from a known result and a known percentage to find the original value. For example: if 40 is 20% of something, the original is 200.",
  },
  {
    question: "How do I find the original price before a discount?",
    answer: <>If an item costs £80 after a 20% discount, 80% of the original remains. Enter 80 as the percentage and 80 as the result — the calculator returns £100. Do not enter the discount (20%); enter the <em>remaining</em> percentage (80%). For the full discount and final price in one step, use the <Link href="/finance/discount-calculator/" className="text-blue-600 hover:underline">discount calculator</Link> instead.</>,
    schemaAnswer: "If an item costs £80 after a 20% discount, 80% of the original remains. Enter 80 as the percentage and 80 as the result — the calculator returns £100. Do not enter the discount percentage (20); enter the remaining percentage (80).",
  },
  {
    question: "50 is 10% of what number?",
    answer: "50 is 10% of 500. Calculation: (50 / 10) × 100 = 500.",
  },
  {
    question: "How do I find a pre-tax price from a total that includes tax?",
    answer: <>If a total of £108 includes 8% tax, then 108% of the original price = £108. Enter 108 as the percentage and 108 as the result — the original pre-tax price is £100. You can also use the <Link href="/finance/sales-tax-calculator/" className="text-blue-600 hover:underline">sales tax calculator</Link> to verify the tax amount and total.</>  ,
    schemaAnswer: "If a total of £108 includes 8% tax, then 108% of the original price = £108. Enter 108 as the percentage and 108 as the result — the original pre-tax price is £100.",
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
        intro="Know the percentage that was applied and the result, but not the original number? This calculator works backwards to find it. Common uses: finding the pre-discount price of a sale item, the pre-tax price from a receipt total, or the original value before a percentage increase was applied."
        calculator={<ReversePercentageWidget />}
        howTo={[
          "Enter the percentage in the first field — the percentage that was applied to the original.",
          "Enter the known result — the value that represents that percentage of the original.",
          "The original value is calculated instantly.",
        ]}
        formula="Original = (Result / Percentage) × 100"
        formulaExplained="Divide the known result by the percentage, then multiply by 100. For example: 30 is 15% of what? (30 / 15) × 100 = 200."
        examples={[
          { input: "30 is 15% of what?", output: "200" },
          { input: "45 is 90% of what?", output: "50" },
          { input: "63 is 70% of what?", output: "90" },
        ]}
        useCases={[
          "Finding the original price before a percentage discount",
          "Calculating pre-tax prices from post-tax receipt totals",
          "Working out the original salary before a pay cut",
          "Reversing a percentage change to find the starting value",
          "Determining total marks from a percentage score",
        ]}
        faqs={faqs}
      />
    </>
  )
}
