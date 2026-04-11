import type { Metadata } from "next"
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
    answer: "The percentage difference between 10 and 20 is 66.6667%. Calculation: |10 − 20| / ((10 + 20) / 2) × 100 = 10 / 15 × 100 ≈ 66.67.",
  },
  {
    question: "What is the difference between percentage difference and percentage change?",
    answer: "Percentage difference is symmetric — it compares two values without a defined 'before' and 'after'. Percentage change has a direction: it measures how much one value shifted relative to a starting point.",
  },
  {
    question: "Why does percentage difference use the average of the two values?",
    answer: "Using the average as the denominator treats both values equally. This avoids giving different results depending on which value you call the 'original'.",
  },
  {
    question: "What is the percentage difference between 100 and 100?",
    answer: "The percentage difference is 0% — both values are identical.",
  },
  {
    question: "Can percentage difference exceed 100%?",
    answer: "Yes. If the two values are very different relative to their average, the result can exceed 100%. For example, 0 and 200 gives a 200% difference.",
  },
]

export const metadata: Metadata = generatePageMetadata({
  title: "Percentage Difference Calculator",
  description: "Find the percentage difference between two numbers. Symmetric comparison — no 'before' or 'after' required.",
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
        intro="Enter two values to find the percentage difference between them. Unlike percentage change, this is symmetric — neither value is treated as the starting point."
        calculator={<PercentageDifferenceWidget />}
        howTo={[
          "Enter the first value in the Value A field.",
          "Enter the second value in the Value B field.",
          "The percentage difference between them is shown instantly.",
        ]}
        formula="Percentage Difference = (|A − B| / ((A + B) / 2)) × 100"
        formulaExplained="Take the absolute difference between A and B, divide by their average, then multiply by 100."
        examples={[
          { input: "Between 30 and 50", output: "50%" },
          { input: "Between 70 and 90", output: "25%" },
          { input: "Between 5 and 15", output: "100%" },
        ]}
        useCases={[
          "Comparing prices from two different suppliers",
          "Measuring the spread between two data points",
          "Comparing survey results from two groups",
          "Analysing differences between two measurements",
          "Checking variance between two estimates",
        ]}
        faqs={faqs}
      />
    </>
  )
}
