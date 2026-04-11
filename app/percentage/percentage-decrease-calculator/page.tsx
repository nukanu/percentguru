import type { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { softwareApplicationSchema, faqSchema } from "@/lib/seo/schema"
import CalculatorShell from "@/components/calculator/CalculatorShell"
import Breadcrumb from "@/components/layout/Breadcrumb"
import PercentageDecreaseWidget from "./CalculatorWidget"

const faqs = [
  {
    question: "What is the percentage decrease from 100 to 80?",
    answer: "The percentage decrease from 100 to 80 is 20%. Calculation: ((100 − 80) / 100) × 100 = 20.",
  },
  {
    question: "What is the percentage decrease from 200 to 130?",
    answer: "The percentage decrease from 200 to 130 is 35%. Calculation: ((200 − 130) / 200) × 100 = 35.",
  },
  {
    question: "What is the percentage decrease from 500 to 400?",
    answer: "The percentage decrease from 500 to 400 is 20%. This comes up in pricing — if a product drops from £500 to £400, that's a 20% price cut.",
  },
  {
    question: "Is a 50% decrease the same as halving a value?",
    answer: "Yes. A 50% decrease produces exactly half the original. Important to remember: a 50% decrease followed by a 50% increase does not return to the original — it results in 75% of the starting value.",
  },
  {
    question: "What if my new value is higher than the original?",
    answer: <>The result will be negative — meaning the value actually went up, not down. Use the <Link href="/percentage/percentage-increase-calculator/" className="text-blue-600 hover:underline">percentage increase calculator</Link> if you&apos;re measuring growth.</>,
    schemaAnswer: "The result will be negative — meaning the value actually went up, not down. Use the percentage increase calculator if you're measuring growth.",
  },
  {
    question: "How does this differ from a sale discount?",
    answer: <>A percentage decrease tells you by how much a value fell. A discount expresses that same drop as a saving on a price. The maths is identical — if you want to calculate the final price after a percentage off, the <Link href="/finance/discount-calculator/" className="text-blue-600 hover:underline">discount calculator</Link> shows both the saving and the sale price in one step.</>,
    schemaAnswer: "A percentage decrease tells you by how much a value fell. A discount expresses that same drop as a saving on a price. The maths is identical — if you want to calculate the final price after a percentage off, the discount calculator shows both the saving and the sale price in one step.",
  },
]

export const metadata: Metadata = generatePageMetadata({
  title: "Percentage Decrease Calculator",
  description: "Calculate the percentage decrease between two values. Enter before and after — works for price drops, budget cuts, and falling metrics.",
  path: "/percentage/percentage-decrease-calculator/",
  keywords: ["percentage decrease calculator", "percent decrease", "how to calculate percentage decrease"],
})

export default function PercentageDecreasePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema("Percentage Decrease Calculator", "Calculate the percentage decrease between two values.")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <div className="mx-auto max-w-2xl px-4 pt-8">
        <Breadcrumb crumbs={[
          { name: "Home", href: "/" },
          { name: "Percentage Calculators", href: "/percentage/" },
          { name: "Percentage Decrease Calculator", href: "/percentage/percentage-decrease-calculator/" },
        ]} />
      </div>
      <CalculatorShell
        slug="percentage-decrease-calculator"
        title="Percentage Decrease Calculator"
        intro="Enter the original value and the new, lower value to find the percentage it fell by. Useful for measuring price cuts, revenue drops, weight loss, reduced costs, or any time a number has gone down and you need to express the change as a percentage. Worth noting: a 50% decrease followed by a 50% increase does not return to the original value — it lands at 75%."
        whenToUse="Use this when a value has gone down and you need to quantify the drop — for example, a product price falling from $180 to $135, headcount reducing from 40 to 32, or website traffic dropping from 12,000 to 9,000 visits."
        calculator={<PercentageDecreaseWidget />}
        howTo={[
          "Enter the original (starting) value in the first field.",
          "Enter the new (lower) value in the second field.",
          "The percentage decrease is shown instantly.",
        ]}
        formula="Percentage Decrease = ((Original − New) / Original) × 100"
        formulaExplained="Subtract the new value from the original to get the drop. Divide by the original value, then multiply by 100. The result is always expressed as a positive percentage."
        examples={[
          { input: "From 80 to 60", output: "25% decrease" },
          { input: "From 1000 to 750", output: "25% decrease" },
          { input: "From 45 to 27", output: "40% decrease" },
        ]}
        useCases={[
          "Measuring a price reduction on a product",
          "Tracking weight loss as a percentage of starting weight",
          "Reporting a drop in revenue or website traffic",
          "Calculating the size of a budget cut",
          "Measuring an energy or emissions reduction",
        ]}
        faqs={faqs}
      />
    </>
  )
}
