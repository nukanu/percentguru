import type { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { softwareApplicationSchema, faqSchema } from "@/lib/seo/schema"
import CalculatorShell from "@/components/calculator/CalculatorShell"
import Breadcrumb from "@/components/layout/Breadcrumb"
import XIsWhatPercentOfYWidget from "./CalculatorWidget"

const faqs = [
  {
    question: "30 is what percent of 200?",
    answer: "30 is 15% of 200. Calculation: (30 / 200) × 100 = 15.",
  },
  {
    question: "45 is what percent of 180?",
    answer: "45 is 25% of 180. Calculation: (45 / 180) × 100 = 25.",
  },
  {
    question: "How do you find what percent one number is of another?",
    answer: "Divide the part by the whole, then multiply by 100. Example: 18 is what percent of 72? (18 / 72) × 100 = 25%.",
  },
  {
    question: "What if the result is more than 100%?",
    answer: "That's valid — it means the part is larger than the whole you're comparing against. For example, 150 is what percent of 100? The answer is 150%. This comes up when tracking values that have grown beyond a baseline.",
  },
  {
    question: "12 is what percent of 80?",
    answer: "12 is 15% of 80. Calculation: (12 / 80) × 100 = 15.",
  },
  {
    question: "How is this different from percentage change?",
    answer: <>This calculator answers &quot;what proportion is X of Y?&quot; — a static ratio. If you need to measure how much a value changed between two points in time, use the <Link href="/percentage/percentage-change-calculator/" className="text-blue-600 hover:underline">percentage change calculator</Link> instead, which accounts for direction (increase or decrease).</>,
    schemaAnswer: "This calculator answers 'what proportion is X of Y?' — a static ratio. If you need to measure how much a value changed between two points in time, use the percentage change calculator instead, which accounts for direction (increase or decrease).",
  },
]

export const metadata: Metadata = generatePageMetadata({
  title: "X is What Percent of Y? Calculator",
  description: "Find what percentage one number is of another. Enter any two numbers — works for test scores, budget shares, survey results, and more.",
  path: "/percentage/x-is-what-percent-of-y/",
  keywords: ["x is what percent of y", "what percent of", "percentage ratio calculator"],
})

export default function XIsWhatPercentOfYPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema("X is What Percent of Y Calculator", "Find what percentage one number is of another.")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <div className="mx-auto max-w-2xl px-4 pt-8">
        <Breadcrumb crumbs={[
          { name: "Home", href: "/" },
          { name: "Percentage Calculators", href: "/percentage/" },
          { name: "X is What % of Y?", href: "/percentage/x-is-what-percent-of-y/" },
        ]} />
      </div>
      <CalculatorShell
        slug="x-is-what-percent-of-y"
        title="X is What Percent of Y?"
        intro={<>Enter two numbers to find what percentage the first is of the second. Used for expressing test scores as a grade percentage, showing what share of a budget was spent, calculating <Link href="/finance/profit-margin-calculator/" className="text-blue-600 hover:underline">profit as a percentage of revenue</Link>, or comparing a part to a whole in any context.</>}
        calculator={<XIsWhatPercentOfYWidget />}
        howTo={[
          "Enter the value (X) in the first field — the part you want to express as a percentage.",
          "Enter the total (Y) in the second field — the whole you are comparing against.",
          "The percentage appears instantly.",
        ]}
        formula="Percentage = (X / Y) × 100"
        formulaExplained="Divide X by Y to get the decimal proportion, then multiply by 100 to express it as a percentage. If X is larger than Y, the result will exceed 100%."
        examples={[
          { input: "40 is what percent of 160?", output: "25%" },
          { input: "9 is what percent of 60?", output: "15%" },
          { input: "3 is what percent of 8?", output: "37.5%" },
        ]}
        useCases={[
          "Expressing a test score as a grade percentage",
          "Showing what share of a budget has been spent",
          "Calculating profit as a percentage of revenue",
          "Comparing survey responses to total respondents",
          "Determining what percentage of a target has been reached",
        ]}
        faqs={faqs}
      />
    </>
  )
}
