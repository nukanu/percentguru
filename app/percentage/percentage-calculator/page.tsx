import type { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { softwareApplicationSchema, faqSchema } from "@/lib/seo/schema"
import CalculatorShell from "@/components/calculator/CalculatorShell"
import Breadcrumb from "@/components/layout/Breadcrumb"
import PercentageCalculatorWidget from "./CalculatorWidget"

const faqs = [
  {
    question: "What is 25% of 80?",
    answer: "25% of 80 is 20. Calculation: (25 / 100) × 80 = 20. A quick shortcut: 25% is always a quarter, so divide the number by 4.",
  },
  {
    question: "What is 10% of 350?",
    answer: "10% of 350 is 35. To find 10% of any number, move the decimal one place left. From there, multiply or divide to reach any other percentage — 5% is half of that (17.5), 20% is double (70).",
  },
  {
    question: "What is 1% of a large number?",
    answer: "1% is always the number divided by 100. So 1% of 8,500 is 85. Multiply by any whole number to reach other percentages: 7% of 8,500 = 85 × 7 = 595.",
  },
  {
    question: "Can I enter decimal percentages like 12.5%?",
    answer: "Yes. Enter 12.5 in the percentage field. Useful for 6.5% tax rates, 2.75% savings interest, or any non-round rate.",
  },
  {
    question: "What is the difference between percent and percentage points?",
    answer: "Percent expresses a ratio (20% of 100 = 20). Percentage points measure the arithmetic difference between two percentages — if an interest rate rises from 3% to 5%, that's a 2 percentage-point rise. As a percentage change, it's actually a 66.7% increase.",
  },
  {
    question: "I know the result but not the original — what do I do?",
    answer: <>If you know the result and the percentage, but need the original number, use the <Link href="/percentage/reverse-percentage-calculator/" className="text-blue-600 hover:underline">reverse percentage calculator</Link>. For example: 30 is the result of applying 15% to some number — the answer is 200.</>,
    schemaAnswer: "If you know the result and the percentage, but need the original number, use the reverse percentage calculator. For example: 30 is the result of applying 15% to some number — the answer is 200.",
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
        intro={<>Enter a percentage and a number — the result appears instantly. Used daily for calculating VAT on invoices, tips on restaurant bills, commission on sales, and percentage shares of a budget. If you need to find <Link href="/percentage/what-is-x-percent-of-y/" className="text-blue-600 hover:underline">what X% of Y is</Link>, or work out <Link href="/percentage/x-is-what-percent-of-y/" className="text-blue-600 hover:underline">what percentage one number is of another</Link>, those calculators handle the specific framing. If you know the result but not the original, the <Link href="/percentage/reverse-percentage-calculator/" className="text-blue-600 hover:underline">reverse percentage calculator</Link> handles that.</>}
        whenToUse="Use this when you have a percentage and a number and need to find the actual amount — for example, 18% of $240, 5% of 1,800, or 12.5% of a $50,000 budget. It covers any situation where you're applying a rate to a base value."
        calculator={<PercentageCalculatorWidget />}
        howTo={[
          "Enter the percentage in the first field (e.g. 25 for 25%).",
          "Enter the number you want to take the percentage of.",
          "The result appears instantly.",
        ]}
        formula="Result = (Percentage / 100) × Number"
        formulaExplained="Divide the percentage by 100 to convert it to a decimal, then multiply by the number. To find 15% of 200: 0.15 × 200 = 30."
        examples={[
          { input: "What is 25% of 200?", output: "50" },
          { input: "What is 8% of 75?", output: "6" },
          { input: "What is 17.5% of 120?", output: "21" },
        ]}
        useCases={[
          "Calculating VAT or sales tax on a purchase",
          "Working out commission on a sale amount",
          "Finding a percentage share of a budget or total",
          "Calculating a tip based on a bill total",
          "Converting a grade percentage to marks",
        ]}
        faqs={faqs}
      />
    </>
  )
}
