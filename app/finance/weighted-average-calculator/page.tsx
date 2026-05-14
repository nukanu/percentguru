import type { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { softwareApplicationSchema, faqSchema } from "@/lib/seo/schema"
import CalculatorShell from "@/components/calculator/CalculatorShell"
import Breadcrumb from "@/components/layout/Breadcrumb"
import WeightedAverageCalculatorWidget from "./CalculatorWidget"

const faqs = [
  {
    question: "What is a weighted average?",
    answer: "A weighted average is an average where each value contributes proportionally to its assigned weight. Values with higher weights have more influence on the result than values with lower weights.",
  },
  {
    question: "What is the weighted average of 80 (weight 2) and 90 (weight 3)?",
    answer: "Weighted average = (80 × 2 + 90 × 3) / (2 + 3) = (160 + 270) / 5 = 430 / 5 = 86. The result is closer to 90 because it has the higher weight.",
  },
  {
    question: "What is the weighted average formula?",
    answer: "Weighted Average = Σ(Value × Weight) / Σ(Weight). Multiply each value by its weight, sum all those products, then divide by the total of all weights.",
  },
  {
    question: "How is weighted average different from a regular average?",
    answer: "A regular average treats all values equally. A weighted average lets some values count more — useful when items have different significance, size, or contribution. If all weights are equal, the result is identical to a regular average.",
  },
  {
    question: "How do I calculate a weighted GPA?",
    answer: "Enter each course grade as the value and the credit hours as the weight. For example: a 4.0 in a 4-credit course and a 3.0 in a 2-credit course gives a weighted GPA of (4.0 × 4 + 3.0 × 2) / (4 + 2) = 22 / 6 ≈ 3.67.",
  },
  {
    question: "How is weighted average used in investing?",
    answer: <>In a portfolio, you weight each asset&apos;s return by its allocation percentage. For example, 60% in stocks returning 10% and 40% in bonds returning 4%: (10 × 60 + 4 × 40) / (60 + 40) = 7.6% portfolio return. You can also use the <Link href="/finance/roi-calculator/" className="text-blue-600 hover:underline">ROI calculator</Link> to measure the return on each individual position.</>  ,
    schemaAnswer: "In a portfolio, weight each asset's return by its allocation percentage. For example, 60% in stocks at 10% and 40% in bonds at 4% gives a weighted return of 7.6%. Use the ROI calculator to measure each individual position.",
  },
]

export const metadata: Metadata = generatePageMetadata({
  title: "Weighted Average Calculator",
  description: "Calculate the weighted average of up to 4 values. Enter each value and its weight — results update instantly. Useful for GPA, grades, portfolio returns, and more.",
  path: "/finance/weighted-average-calculator/",
  keywords: ["weighted average calculator", "weighted mean calculator", "calculate weighted average", "weighted GPA calculator"],
})

export default function WeightedAverageCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema("Weighted Average Calculator", "Calculate the weighted average from values and their corresponding weights.")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <div className="mx-auto max-w-2xl px-4 pt-8">
        <Breadcrumb crumbs={[
          { name: "Home", href: "/" },
          { name: "Finance Calculators", href: "/finance/" },
          { name: "Weighted Average Calculator", href: "/finance/weighted-average-calculator/" },
        ]} />
      </div>
      <CalculatorShell
        slug="weighted-average-calculator"
        title="Weighted Average Calculator"
        intro={<>Enter each value alongside its weight — the calculator computes the weighted average instantly. Used for GPA calculations, blended portfolio returns, weighted scores from assignments with different point values, and any situation where values contribute unequally to a final result. If all weights are equal, a weighted average is identical to a regular average — the weights only matter when items carry different significance. Once you have a blended return, you can measure it further with the <Link href="/finance/roi-calculator/" className="text-blue-600 hover:underline">ROI calculator</Link> or assess overall business performance with the <Link href="/finance/profit-margin-calculator/" className="text-blue-600 hover:underline">profit margin calculator</Link>.</>}
        whenToUse="Use this when you're averaging values that don't all count equally — GPA from courses with different credit hours, a portfolio return blended by asset allocation, or an overall score from assessments worth different percentages of the total grade."
        calculator={<WeightedAverageCalculatorWidget />}
        howTo={[
          "Enter a value in the left column and its corresponding weight in the right column.",
          "Fill in at least 2 rows — blank rows are automatically excluded.",
          "The weighted average updates instantly as you type.",
        ]}
        formula="Weighted Average = Σ(Value × Weight) / Σ(Weight)"
        formulaExplained="Multiply each value by its weight, sum all those products, then divide by the total sum of weights. Blank or zero-weight rows do not affect the result."
        examples={[
          { input: "85 (w:3), 90 (w:4), 78 (w:2)", output: "Weighted average: 85.89" },
          { input: "4.0 (w:4), 3.0 (w:3), 3.7 (w:4)", output: "Weighted GPA: 3.60" },
          { input: "100 (w:1), 200 (w:3), 150 (w:2)", output: "Weighted average: 170.83" },
        ]}
        useCases={[
          "Calculating a weighted GPA from course grades and credit hours",
          "Blending portfolio asset returns weighted by allocation percentage",
          "Computing a final grade from assignments with different point values",
          "Weighting survey responses by sample size across groups",
          "Averaging unit costs from batches of different sizes",
        ]}
        faqs={faqs}
      />
    </>
  )
}
