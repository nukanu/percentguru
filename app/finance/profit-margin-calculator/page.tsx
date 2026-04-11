import type { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { softwareApplicationSchema, faqSchema } from "@/lib/seo/schema"
import CalculatorShell from "@/components/calculator/CalculatorShell"
import Breadcrumb from "@/components/layout/Breadcrumb"
import ProfitMarginWidget from "./CalculatorWidget"

const faqs = [
  {
    question: "What is the profit margin if revenue is $150 and cost is $100?",
    answer: "The profit margin is 33.33%. Calculation: ($150 − $100) / $150 × 100 = 33.33%.",
  },
  {
    question: "What is a good profit margin?",
    answer: "It varies by industry. Retail typically sees 2–5%. SaaS businesses often target 60–80%. A general rule: 10% is average, 20% is good, 30%+ is excellent for most businesses.",
  },
  {
    question: "What is the difference between gross and net profit margin?",
    answer: "Gross profit margin only subtracts the cost of goods sold (COGS) from revenue. Net profit margin also subtracts operating expenses, taxes, and interest. This calculator computes gross margin.",
  },
  {
    question: "What is the profit margin if I sell something for $80 that cost $60?",
    answer: "The profit margin is 25%. Calculation: ($80 − $60) / $80 × 100 = 25%.",
  },
  {
    question: "How is profit margin different from markup?",
    answer: <>Margin is profit divided by revenue. Markup is profit divided by cost. They&apos;re related but never equal (unless margin is 0%). A 50% markup equals a 33.33% margin. If you&apos;re setting prices from cost, the <Link href="/finance/markup-calculator/" className="text-blue-600 hover:underline">markup calculator</Link> is the right starting point.</>,
    schemaAnswer: "Margin is profit divided by revenue. Markup is profit divided by cost. They're related but never equal (unless margin is 0%). A 50% markup equals a 33.33% margin.",
  },
  {
    question: "What profit margin do I need to cover operating costs?",
    answer: "It depends on your overhead. If your operating costs (rent, salaries, software) equal 20% of revenue, you need at least a 20% gross margin to break even after those expenses. Most businesses aim for gross margin well above their operating cost percentage to ensure net profit.",
  },
]

export const metadata: Metadata = generatePageMetadata({
  title: "Profit Margin Calculator",
  description: "Enter revenue and cost to instantly calculate gross profit margin and profit amount. Useful for pricing, financial reporting, and margin analysis.",
  path: "/finance/profit-margin-calculator/",
  keywords: ["profit margin calculator", "gross margin calculator", "profit percentage", "calculate profit margin"],
})

export default function ProfitMarginPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema("Profit Margin Calculator", "Calculate gross profit margin and profit amount from revenue and cost.")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <div className="mx-auto max-w-2xl px-4 pt-8">
        <Breadcrumb crumbs={[
          { name: "Home", href: "/" },
          { name: "Finance Calculators", href: "/finance/" },
          { name: "Profit Margin Calculator", href: "/finance/profit-margin-calculator/" },
        ]} />
      </div>
      <CalculatorShell
        slug="profit-margin-calculator"
        title="Profit Margin Calculator"
        intro="Enter what you charged (revenue) and what it cost you to deliver — the calculator shows your gross profit and profit margin percentage. Used for pricing products, evaluating deals, and reporting financials."
        calculator={<ProfitMarginWidget />}
        howTo={[
          "Enter the revenue — the price you sold the product or service for.",
          "Enter the cost — what it cost you to produce or acquire it.",
          "The gross profit and profit margin percentage appear instantly.",
        ]}
        formula="Profit Margin = ((Revenue − Cost) / Revenue) × 100"
        formulaExplained="Subtract cost from revenue to get gross profit, divide by revenue, then multiply by 100 to express it as a percentage."
        examples={[
          { input: "Revenue $200, Cost $140", output: "30% margin — $60 profit" },
          { input: "Revenue $500, Cost $400", output: "20% margin — $100 profit" },
          { input: "Revenue $80, Cost $20", output: "75% margin — $60 profit" },
        ]}
        useCases={[
          "Evaluating product or service profitability",
          "Setting prices to hit a target margin",
          "Comparing margins across a product range",
          "Reporting gross profit in financial statements",
          "Analysing business health and pricing strategy",
        ]}
        faqs={faqs}
      />
    </>
  )
}
