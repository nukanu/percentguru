import type { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { softwareApplicationSchema, faqSchema } from "@/lib/seo/schema"
import CalculatorShell from "@/components/calculator/CalculatorShell"
import Breadcrumb from "@/components/layout/Breadcrumb"
import PercentageIncreaseWidget from "./CalculatorWidget"

const faqs = [
  {
    question: "How do I figure out the percentage increase between two numbers?",
    answer: "Subtract the original from the new value to get the change. Divide that change by the original, then multiply by 100. For example, from 80 to 100: (100 − 80) ÷ 80 × 100 = 25%. Enter the two numbers above and the result appears instantly.",
  },
  {
    question: "What is the percentage increase from 80 to 100?",
    answer: "The percentage increase from 80 to 100 is 25%. Calculation: (100 − 80) ÷ 80 × 100 = 25%.",
  },
  {
    question: "What is the percentage increase from 50 to 75?",
    answer: "The percentage increase from 50 to 75 is 50%. Calculation: (75 − 50) ÷ 50 × 100 = 50%.",
  },
  {
    question: "How do I calculate a price increase as a percentage?",
    answer: "Use the same formula: (New Price − Old Price) ÷ Old Price × 100. For example, a product going from $40 to $52 is a 30% price increase. This applies to supplier quotes, rent increases, subscription renewals, or any cost that has gone up.",
  },
  {
    question: "How do I calculate a salary increase as a percentage?",
    answer: <>Divide the raise amount by the original salary and multiply by 100. If your salary goes from $52,000 to $56,160, that&apos;s ($56,160 − $52,000) ÷ $52,000 × 100 = 8% increase. Use the <Link href="/percentage/salary-increase-calculator/" className="text-blue-600 hover:underline">salary increase calculator</Link> if you want to work from the percentage and find the new salary instead.</>,
    schemaAnswer: "Divide the raise amount by the original salary and multiply by 100. If your salary goes from $52,000 to $56,160, that's ($56,160 − $52,000) ÷ $52,000 × 100 = 8% increase.",
  },
  {
    question: "Can the result be more than 100%?",
    answer: "Yes. If a value doubles, the percentage increase is 100%. If it triples, the increase is 200%. Prices, traffic, and subscriber counts can all grow beyond 100% of the original value.",
  },
  {
    question: "What if my new value is lower than the original?",
    answer: <>The result will be negative, meaning the value fell rather than rose. If you&apos;re specifically measuring a drop, the <Link href="/percentage/percentage-decrease-calculator/" className="text-blue-600 hover:underline">percentage decrease calculator</Link> is more explicit about direction.</>,
    schemaAnswer: "The result will be negative, meaning the value fell rather than rose. If you're specifically measuring a drop, the percentage decrease calculator is more explicit about direction.",
  },
  {
    question: "What is the difference between percentage increase and percentage points?",
    answer: "These are frequently confused. If a rate goes from 4% to 6%, that is a 2 percentage-point increase — but it is a 50% percentage increase (because 6 is 50% more than 4). Percentage points measure the absolute difference; percentage increase measures the relative change.",
  },
  {
    question: "How does percentage increase relate to ROI?",
    answer: <>Return on investment is the same calculation applied to money. If you invested $500 and it grew to $700, the <Link href="/finance/roi-calculator/" className="text-blue-600 hover:underline">ROI calculator</Link> returns 40% — identical to the percentage increase formula, just labelled differently.</>,
    schemaAnswer: "Return on investment is the same calculation applied to money. If you invested $500 and it grew to $700, the ROI calculator returns 40% — identical to the percentage increase formula.",
  },
]

export const metadata: Metadata = generatePageMetadata({
  title: "Percentage Increase Calculator — Instant % Increase Formula",
  description: "Find the percentage increase between two numbers instantly — formula, step-by-step working, and examples included. Free, no sign-up.",
  path: "/percentage/percentage-increase-calculator/",
  keywords: ["percentage increase calculator", "percent increase calculator", "calculate percentage increase", "how to calculate percentage increase", "figure out percentage increase"],
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
        intro={<>Enter the original value and the new value to see the percentage increase instantly — no formula needed. Used for checking pay rises, measuring revenue growth, tracking price increases, or comparing any two numbers where one is larger than the other. A common mistake is confusing percentage points with percentage change: if interest rates go from 2% to 3%, that is a 1 percentage-point rise but a 50% percentage increase. To work in the opposite direction — entering a percentage to find a new value — use the <Link href="/percentage/salary-increase-calculator/" className="text-blue-600 hover:underline">salary increase calculator</Link> or the <Link href="/percentage/what-is-x-percent-of-y/" className="text-blue-600 hover:underline">percentage of a number calculator</Link>.</>}
        whenToUse="Use this when a value has gone up and you need to express the growth as a percentage — a salary rising from $45,000 to $51,750, revenue climbing from $80,000 to $96,000, a product price going from $12 to $15, or a test score improving from 64 to 80."
        calculator={<PercentageIncreaseWidget />}
        howTo={[
          "Enter the original (starting) value in the first field.",
          "Enter the new (final) value in the second field.",
          "The percentage increase is shown instantly.",
        ]}
        formula="Percentage Increase = ((New − Original) / Original) × 100"
        formulaExplained="Subtract the original from the new value to get the change. Divide by the original value, then multiply by 100. A positive result confirms it's an increase."
        examples={[
          { input: "Salary: $45,000 → $51,750", output: "15% increase" },
          { input: "Revenue: $80,000 → $96,000", output: "20% increase" },
          { input: "Price: $40 → $52", output: "30% increase" },
          { input: "Score: 64 → 80", output: "25% increase" },
        ]}
        useCases={[
          "Calculating the exact percentage of a pay rise or salary negotiation",
          "Measuring month-over-month or year-over-year revenue growth",
          "Tracking price increases on supplier quotes or renewal invoices",
          "Comparing exam score or performance improvements over time",
          "Measuring follower, subscriber, or user growth rates",
          "Calculating how much a product or property value has risen",
        ]}
        faqs={faqs}
        lookupTable={
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-3">Common Percentage Increases — Quick Reference</h2>
            <p className="text-sm text-gray-600 mb-4">Common value pairs and their exact percentage increase, calculated with the formula above.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 pr-4 text-gray-600 font-semibold">Original</th>
                    <th className="text-left py-2 pr-4 text-gray-600 font-semibold">New Value</th>
                    <th className="text-left py-2 text-gray-600 font-semibold">% Increase</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    [80, 100, "25%"],
                    [50, 75, "50%"],
                    [100, 110, "10%"],
                    [100, 125, "25%"],
                    [100, 150, "50%"],
                    [100, 200, "100%"],
                    [200, 250, "25%"],
                    [40, 52, "30%"],
                    [60, 80, "33.33%"],
                    [1000, 1200, "20%"],
                    [500, 600, "20%"],
                    [25, 30, "20%"],
                  ].map(([orig, nv, pct], i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="py-2 pr-4 text-gray-700">{orig}</td>
                      <td className="py-2 pr-4 text-gray-700">{nv}</td>
                      <td className="py-2 font-semibold text-blue-700">{pct}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        }
      />
    </>
  )
}
