import type { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { softwareApplicationSchema, faqSchema } from "@/lib/seo/schema"
import CalculatorShell from "@/components/calculator/CalculatorShell"
import Breadcrumb from "@/components/layout/Breadcrumb"
import PercentageDifferenceWidget from "./CalculatorWidget"

const faqs = [
  {
    question: "What is the percentage difference between 40 and 60?",
    answer: "The percentage difference between 40 and 60 is 40%. Calculation: |40 − 60| / ((40 + 60) / 2) × 100 = 20 / 50 × 100 = 40.",
  },
  {
    question: "What is the percentage difference between 10 and 20?",
    answer: "The percentage difference between 10 and 20 is 66.67%. Calculation: |10 − 20| / ((10 + 20) / 2) × 100 = 10 / 15 × 100 ≈ 66.67.",
  },
  {
    question: "What is the difference between percentage difference and percentage change?",
    answer: <>Percentage difference is symmetric — neither value is the &quot;original&quot;. If order matters (a value went from X to Y), use the <Link href="/percentage/percentage-change-calculator/" className="text-blue-600 hover:underline">percentage change calculator</Link> instead, which tracks direction.</>  ,
    schemaAnswer: "Percentage difference is symmetric — neither value is the 'original'. If order matters (a value went from X to Y), use the percentage change calculator instead, which tracks direction.",
  },
  {
    question: "Why does percentage difference use the average of the two values?",
    answer: "Using the average as the denominator treats both values equally and avoids giving a different answer depending on which you call 'first'. Without this, 40 vs 60 and 60 vs 40 would produce different percentages — which would be misleading for a symmetric comparison.",
  },
  {
    question: "What is the percentage difference between 100 and 100?",
    answer: "0% — both values are identical.",
  },
  {
    question: "Can percentage difference exceed 100%?",
    answer: <>Yes. When one value is much larger than the other relative to their average, the result exceeds 100%. For example, 10 and 90: |10−90| / ((10+90)/2) × 100 = 80/50 × 100 = 160%. If both values are treated as measurements of the same thing, consider whether <Link href="/percentage/percentage-error-calculator/" className="text-blue-600 hover:underline">percentage error</Link> is a better fit — it applies when one value is the known correct reference.</>,
    schemaAnswer: "Yes. When one value is much larger than the other relative to their average, the result exceeds 100%. For example: |10−90| / ((10+90)/2) × 100 = 80/50 × 100 = 160%.",
  },
]

export const metadata: Metadata = generatePageMetadata({
  title: "Percentage Difference Calculator",
  description: "Find the percentage difference between any two numbers. No 'before' or 'after' needed — useful for comparing prices, measurements, or data points.",
  path: "/percentage/percentage-difference-calculator/",
  keywords: ["percentage difference calculator", "percent difference", "difference between two numbers percentage"],
})

export default function PercentageDifferencePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema("Percentage Difference Calculator", "Find the percentage difference between two numbers.")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <div className="mx-auto max-w-2xl px-4 pt-8">
        <Breadcrumb crumbs={[
          { name: "Home", href: "/" },
          { name: "Percentage Calculators", href: "/percentage/" },
          { name: "Percentage Difference Calculator", href: "/percentage/percentage-difference-calculator/" },
        ]} />
      </div>
      <CalculatorShell
        slug="percentage-difference-calculator"
        title="Percentage Difference Calculator"
        intro={<>Enter two values to find the percentage difference between them. Unlike <Link href="/percentage/percentage-change-calculator/" className="text-blue-600 hover:underline">percentage change</Link>, this is symmetric — neither value is treated as the starting point. Used when comparing two equivalent measurements, two supplier quotes, or two data points where neither is the baseline. The formula uses the average of both values as the denominator, which is what makes it order-independent.</>}
        whenToUse="Use this when comparing two values that are on equal footing — two supplier prices for the same item, two lab measurements of the same substance, or two estimates for a project where neither is the 'correct' reference."
        calculator={<PercentageDifferenceWidget />}
        howTo={[
          "Enter the first value in the Value A field.",
          "Enter the second value in the Value B field.",
          "The percentage difference between them is shown instantly.",
        ]}
        formula="Percentage Difference = (|A − B| / ((A + B) / 2)) × 100"
        formulaExplained="Take the absolute difference between A and B, divide by their average, then multiply by 100. The average as the denominator ensures the result is the same regardless of input order."
        examples={[
          { input: "Between 30 and 50", output: "50%" },
          { input: "Between 70 and 91", output: "26.09%" },
          { input: "Between 5 and 15", output: "100%" },
        ]}
        useCases={[
          "Comparing prices from two different suppliers",
          "Measuring the spread between two data points",
          "Comparing survey results from two groups",
          "Checking variance between two estimates or measurements",
          "Analysing differences in performance benchmarks",
        ]}
        faqs={faqs}
      />
    </>
  )
}
