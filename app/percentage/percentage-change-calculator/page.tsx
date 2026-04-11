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
    answer: "The percentage change from 50 to 75 is +50%. Calculation: ((75 - 50) / 50) × 100 = 50.",
  },
  {
    question: "What is the percentage change from 100 to 80?",
    answer: "The percentage change from 100 to 80 is −20%. Calculation: ((80 - 100) / 100) × 100 = −20.",
  },
  {
    question: "What is the difference between percentage change and percentage difference?",
    answer: <>Percentage change measures a directional shift — from a starting value to an ending value. <Link href="/percentage/percentage-difference-calculator/" className="text-blue-600 hover:underline">Percentage difference</Link> compares two values symmetrically, with no concept of &quot;before&quot; or &quot;after&quot;. Use percentage change when order matters; use percentage difference when it doesn&apos;t.</>,
    schemaAnswer: "Percentage change measures a directional shift — from a starting value to an ending value. Percentage difference compares two values symmetrically, with no concept of 'before' or 'after'. Use percentage change when order matters; use percentage difference when it doesn't.",
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
    answer: "Technically undefined — you can't divide by zero. In practice, if your starting value is zero, percentage change isn't a meaningful measure. Use absolute difference instead.",
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
        intro="Enter a before value and an after value to find out how much it changed as a percentage. Works for any direction — the calculator will tell you whether it went up or down, and by how much."
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
