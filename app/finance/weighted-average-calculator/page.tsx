import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { softwareApplicationSchema, faqSchema } from "@/lib/seo/schema"
import CalculatorShell from "@/components/calculator/CalculatorShell"
import Breadcrumb from "@/components/layout/Breadcrumb"
import WeightedAverageCalculatorWidget from "./CalculatorWidget"

const faqs = [
  {
    question: "What is a weighted average?",
    answer: "A weighted average is an average where each value contributes proportionally to its weight. Values with higher weights have more influence on the result than values with lower weights.",
  },
  {
    question: "What is the weighted average of 80 (weight 2) and 90 (weight 3)?",
    answer: "Weighted average = (80 × 2 + 90 × 3) / (2 + 3) = (160 + 270) / 5 = 430 / 5 = 86. The result is closer to 90 because it has the higher weight.",
  },
  {
    question: "What is the weighted average formula?",
    answer: "Weighted Average = (v1 × w1 + v2 × w2 + ... + vn × wn) / (w1 + w2 + ... + wn). Multiply each value by its weight, sum the products, then divide by the sum of all weights.",
  },
  {
    question: "How is weighted average different from a regular average?",
    answer: "A regular average treats all values equally. A weighted average lets some values count more than others — useful when items have different significance, size, or frequency.",
  },
  {
    question: "How do I calculate a weighted GPA?",
    answer: "Enter your grade for each course as the value and the course credit hours as the weight. For example: an A (4.0) in a 4-credit course and a B (3.0) in a 2-credit course gives a weighted GPA of (4.0 × 4 + 3.0 × 2) / (4 + 2) = 22 / 6 ≈ 3.67.",
  },
  {
    question: "Can all weights be equal?",
    answer: "Yes — if all weights are the same (e.g. all 1), the weighted average equals the regular arithmetic mean. The weighting only makes a difference when the weights differ from each other.",
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
        intro="Enter each value alongside its weight — the calculator computes the weighted average instantly. Used for GPA calculations, portfolio returns, weighted scores, and any situation where values carry different levels of importance."
        calculator={<WeightedAverageCalculatorWidget />}
        howTo={[
          "Enter a value in the left column and its corresponding weight in the right column.",
          "Fill in at least 2 rows — blank rows are automatically ignored.",
          "The weighted average is calculated instantly as you type.",
        ]}
        formula="Weighted Average = Σ(Value × Weight) / Σ(Weight)"
        formulaExplained="Multiply each value by its weight, sum all those products, then divide by the total sum of weights."
        examples={[
          { input: "85 (w:3), 90 (w:4), 78 (w:2)", output: "Weighted average: 85.89" },
          { input: "4.0 (w:4), 3.0 (w:3), 3.7 (w:4)", output: "Weighted average: 3.60 (GPA)" },
          { input: "100 (w:1), 200 (w:2), 150 (w:1)", output: "Weighted average: 162.50" },
        ]}
        useCases={[
          "Calculating a weighted GPA from course grades and credit hours",
          "Averaging portfolio asset returns by allocation percentage",
          "Computing a final grade from assignments with different point values",
          "Weighting survey responses by sample size",
          "Blending unit costs from different batch sizes",
        ]}
        faqs={faqs}
      />
    </>
  )
}
