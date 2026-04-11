import type { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { softwareApplicationSchema, faqSchema } from "@/lib/seo/schema"
import CalculatorShell from "@/components/calculator/CalculatorShell"
import Breadcrumb from "@/components/layout/Breadcrumb"
import PercentageChangeWidget from "./CalculatorWidget"

const faqs = [
  {
    question: "What is the percentage change from 50 to 75?",
    answer: "The percentage change from 50 to 75 is +50%. Calculation: ((75 − 50) / 50) × 100 = 50.",
  },
  {
    question: "What is the percentage change from 100 to 80?",
    answer: "The percentage change from 100 to 80 is −20%. Calculation: ((80 − 100) / 100) × 100 = −20.",
  },
  {
    question: "What is the difference between percentage change and percentage difference?",
    answer: <>Percentage change is directional — it measures how much a value moved from a starting point to an end point, and whether it went up or down. <Link href="/percentage/percentage-difference-calculator/" className="text-blue-600 hover:underline">Percentage difference</Link> compares two values symmetrically with no concept of &quot;before&quot; or &quot;after&quot;. Use percentage change for time-series data; use percentage difference when neither value is the baseline.</>  ,
    schemaAnswer: "Percentage change is directional — it measures how much a value moved from a starting point to an end point. Percentage difference compares two values symmetrically with no concept of 'before' or 'after'.",
  },
  {
    question: "Can percentage change be negative?",
    answer: "Yes. A negative result means the value decreased. A positive result means it increased. The sign is the key indicator of direction.",
  },
  {
    question: "What is the percentage change from 200 to 200?",
    answer: "The percentage change is 0% — no change occurred.",
  },
  {
    question: "What is the percentage change from 0 to any number?",
    answer: "Technically undefined — you cannot divide by zero. If your starting value is zero, percentage change has no mathematical meaning. Use absolute difference (subtract the values) to describe the change instead.",
  },
]

export const metadata: Metadata = generatePageMetadata({
  title: "Percentage Change Calculator",
  description: "Calculate the percentage change between any two values. Shows direction (increase or decrease) and magnitude instantly.",
  path: "/percentage/percentage-change-calculator/",
  keywords: ["percentage change calculator", "percent change", "calculate percentage change"],
})

export default function PercentageChangePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema("Percentage Change Calculator", "Calculate the percentage change between two values.")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <div className="mx-auto max-w-2xl px-4 pt-8">
        <Breadcrumb crumbs={[
          { name: "Home", href: "/" },
          { name: "Percentage Calculators", href: "/percentage/" },
          { name: "Percentage Change Calculator", href: "/percentage/percentage-change-calculator/" },
        ]} />
      </div>
      <CalculatorShell
        slug="percentage-change-calculator"
        title="Percentage Change Calculator"
        intro="Enter a before value and an after value to find the percentage change — positive for an increase, negative for a decrease. Used in reporting, dashboards, and financial analysis whenever you need to show how much something moved and in which direction."
        calculator={<PercentageChangeWidget />}
        howTo={[
          "Enter the original (before) value in the first field.",
          "Enter the new (after) value in the second field.",
          "The percentage change and direction appear instantly.",
        ]}
        formula="Percentage Change = ((New − Original) / Original) × 100"
        formulaExplained="Subtract the original from the new value. Divide by the original, then multiply by 100. Positive = increase, negative = decrease."
        examples={[
          { input: "From 40 to 50", output: "+25%" },
          { input: "From 120 to 90", output: "−25%" },
          { input: "From 80 to 92", output: "+15%" },
        ]}
        useCases={[
          "Reporting monthly or quarterly revenue changes",
          "Measuring growth or decline in website traffic",
          "Comparing prices between two time periods",
          "Tracking KPI performance in business dashboards",
          "Calculating year-over-year financial changes",
        ]}
        faqs={faqs}
      />
    </>
  )
}
