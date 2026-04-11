import type { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { softwareApplicationSchema, faqSchema } from "@/lib/seo/schema"
import CalculatorShell from "@/components/calculator/CalculatorShell"
import Breadcrumb from "@/components/layout/Breadcrumb"
import PercentageIncreaseWidget from "./CalculatorWidget"

const faqs = [
  {
    question: "What is the percentage increase from 80 to 100?",
    answer: "The percentage increase from 80 to 100 is 25%. Calculation: ((100 − 80) / 80) × 100 = 25.",
  },
  {
    question: "What is the percentage increase from 50 to 75?",
    answer: "The percentage increase from 50 to 75 is 50%. Calculation: ((75 − 50) / 50) × 100 = 50.",
  },
  {
    question: "What is the percentage increase from 160 to 200?",
    answer: "The percentage increase from 160 to 200 is 25%. Calculation: ((200 − 160) / 160) × 100 = 25. This is a common scenario — a salary increase from £160 to £200 per day.",
  },
  {
    question: "Can the result be more than 100%?",
    answer: "Yes. If a value doubles, the percentage increase is 100%. If it triples, the increase is 200%. Prices, traffic, and subscriber counts can all grow beyond 100% of the original.",
  },
  {
    question: "What if my new value is lower than the original?",
    answer: <>The result will be negative, meaning the value fell rather than rose. If you&apos;re specifically measuring a drop, the <Link href="/percentage/percentage-decrease-calculator/" className="text-blue-600 hover:underline">percentage decrease calculator</Link> is more explicit about direction.</>,
    schemaAnswer: "The result will be negative, meaning the value fell rather than rose. If you're specifically measuring a drop, the percentage decrease calculator is more explicit about direction.",
  },
  {
    question: "How does percentage increase relate to ROI?",
    answer: <>Return on investment measures a very similar concept — how much a financial outlay grew. If you invested £500 and it grew to £700, the <Link href="/finance/roi-calculator/" className="text-blue-600 hover:underline">ROI calculator</Link> gives you the same maths (40%) but labels it as a return rather than an increase.</>,
    schemaAnswer: "Return on investment measures a very similar concept — how much a financial outlay grew. If you invested £500 and it grew to £700, the ROI calculator gives you the same maths (40%) but labels it as a return rather than an increase.",
  },
]

export const metadata: Metadata = generatePageMetadata({
  title: "Percentage Increase Calculator",
  description: "Calculate the percentage increase between two values. Enter before and after — works for salaries, prices, scores, and revenue growth.",
  path: "/percentage/percentage-increase-calculator/",
  keywords: ["percentage increase calculator", "percent increase", "how to calculate percentage increase"],
})

export default function PercentageIncreasePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema("Percentage Increase Calculator", "Calculate the percentage increase between two values.")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <div className="mx-auto max-w-2xl px-4 pt-8">
        <Breadcrumb crumbs={[
          { name: "Home", href: "/" },
          { name: "Percentage Calculators", href: "/percentage/" },
          { name: "Percentage Increase Calculator", href: "/percentage/percentage-increase-calculator/" },
        ]} />
      </div>
      <CalculatorShell
        slug="percentage-increase-calculator"
        title="Percentage Increase Calculator"
        intro="Enter the original value and the new value to find by what percentage it increased. Used for checking pay rises, measuring revenue growth, tracking price increases, or comparing any two numbers where one is larger than the other. A common mistake is confusing a percentage point change with a percentage change — if interest rates go from 2% to 3%, that's a 1 percentage-point rise but a 50% percentage increase."
        whenToUse="Use this when a value has gone up and you need to express the growth as a percentage — for example, a salary rising from $45,000 to $51,750, revenue climbing from $80,000 to $96,000 month-on-month, or a product price increasing from $12 to $15."
        calculator={<PercentageIncreaseWidget />}
        howTo={[
          "Enter the original (starting) value in the first field.",
          "Enter the new (final) value in the second field.",
          "The percentage increase is shown instantly.",
        ]}
        formula="Percentage Increase = ((New − Original) / Original) × 100"
        formulaExplained="Subtract the original from the new value to get the change. Divide by the original value, then multiply by 100. A positive result confirms it's an increase."
        examples={[
          { input: "From 40 to 60", output: "50% increase" },
          { input: "From 120 to 138", output: "15% increase" },
          { input: "From 9 to 12", output: "33.3333% increase" },
        ]}
        useCases={[
          "Calculating the exact size of a pay rise",
          "Measuring year-over-year revenue growth",
          "Tracking price increases on supplier quotes",
          "Comparing exam score improvements over time",
          "Measuring follower or subscriber growth",
        ]}
        faqs={faqs}
      />
    </>
  )
}
