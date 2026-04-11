import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { softwareApplicationSchema, faqSchema } from "@/lib/seo/schema"
import CalculatorShell from "@/components/calculator/CalculatorShell"
import Breadcrumb from "@/components/layout/Breadcrumb"
import PercentageChangeWidget from "./CalculatorWidget"

const faqs = [
  {
    question: "What is the percentage change from 50 to 75?",
    answer: "The percentage change from 50 to 75 is +50%. Calculation: ((75 - 50) / 50) × 100 = 50.",
  },
  {
    question: "What is the percentage change from 100 to 80?",
    answer: "The percentage change from 100 to 80 is −20%. Calculation: ((80 - 100) / 100) × 100 = −20.",
  },
  {
    question: "What is the difference between percentage change and percentage difference?",
    answer: "Percentage change measures the relative shift from one value to another in a specific direction (increase or decrease). Percentage difference compares two values symmetrically with no direction implied.",
  },
  {
    question: "Can percentage change be negative?",
    answer: "Yes. A negative result means the value decreased. A positive result means it increased.",
  },
  {
    question: "What is the percentage change from 200 to 200?",
    answer: "The percentage change is 0% — no change occurred.",
  },
  {
    question: "What is the percentage change from 0 to any number?",
    answer: "Percentage change from zero is undefined because you'd be dividing by zero. This calculator returns 0% in that case as a safe default.",
  },
]

export const metadata: Metadata = generatePageMetadata({
  title: "Percentage Change Calculator",
  description: "Calculate the percentage change between two values. Shows whether the change is an increase or decrease.",
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
        intro="Enter any two values to find the percentage change between them. A positive result means an increase; a negative result means a decrease."
        calculator={<PercentageChangeWidget />}
        howTo={[
          "Enter the original (before) value in the first field.",
          "Enter the new (after) value in the second field.",
          "The percentage change — and whether it increased or decreased — appears instantly.",
        ]}
        formula="Percentage Change = ((New − Original) / Original) × 100"
        formulaExplained="Subtract the original from the new value, divide by the original, and multiply by 100. A positive result is an increase; negative is a decrease."
        examples={[
          { input: "From 40 to 50", output: "25%" },
          { input: "From 120 to 90", output: "-25%" },
          { input: "From 1 to 1.5", output: "50%" },
        ]}
        useCases={[
          "Tracking monthly sales or revenue changes",
          "Comparing prices between two time periods",
          "Measuring growth or decline in website traffic",
          "Reporting performance changes in dashboards",
          "Calculating year-over-year financial changes",
        ]}
        faqs={faqs}
      />
    </>
  )
}
