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
    answer: "It varies by industry. Grocery retail typically runs 2–5%. SaaS companies often target 60–80%. As a rough guide: 10% is average, 20% is healthy, 30%+ is strong for most businesses. Compare against your industry benchmark rather than a universal standard.",
  },
  {
    question: "What is the difference between gross and net profit margin?",
    answer: "Gross profit margin subtracts only the cost of goods sold (COGS) from revenue. Net profit margin also subtracts operating expenses, taxes, and interest. This calculator computes gross margin — the starting point for profitability analysis.",
  },
  {
    question: "What is the profit margin if I sell something for $80 that cost $60?",
    answer: "The profit margin is 25%. Calculation: ($80 − $60) / $80 × 100 = 25%.",
  },
  {
    question: "How is profit margin different from markup?",
    answer: <>Margin is profit divided by <em>revenue</em>. Markup is profit divided by <em>cost</em>. A 50% markup equals a 33.33% margin — never the same value (unless margin is 0%). If you&apos;re setting prices from cost, the <Link href="/finance/markup-calculator/" className="text-blue-600 hover:underline">markup calculator</Link> is the right starting point.</>,
    schemaAnswer: "Margin is profit divided by revenue. Markup is profit divided by cost. A 50% markup equals a 33.33% margin. If you're setting prices from cost, the markup calculator is the right starting point.",
  },
  {
    question: "How does profit margin relate to break-even?",
    answer: <>Your gross margin must exceed your operating cost percentage for the business to be profitable. The <Link href="/finance/break-even-calculator/" className="text-blue-600 hover:underline">break-even calculator</Link> shows how many units you need to sell to cover fixed costs — which depends on the contribution margin (selling price minus variable cost) at the core.</>,
    schemaAnswer: "Your gross margin must exceed your operating cost percentage to be profitable. The break-even calculator shows how many units you need to sell to cover fixed costs, based on the contribution margin.",
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
        intro={<>Enter what you charged (revenue) and what it cost you to deliver — the calculator shows your gross profit and margin percentage instantly. Used for pricing products, evaluating deals, reporting financials, and checking whether a <Link href="/finance/discount-calculator/" className="text-blue-600 hover:underline">discounted price</Link> still leaves a workable margin. This calculates gross margin only — it doesn&apos;t factor in operating expenses, so net margin will always be lower in practice.</>}
        whenToUse="Use this when evaluating a product or service's profitability — before setting a price, after closing a deal, or when reviewing a product line to see which items carry the best margins. Also useful when you need to report gross margin to investors or in financial statements."
        calculator={<ProfitMarginWidget />}
        howTo={[
          "Enter the revenue — the price you sold the product or service for.",
          "Enter the cost — what it cost you to produce or acquire it.",
          "Gross profit and profit margin percentage appear instantly.",
        ]}
        formula="Profit Margin = ((Revenue − Cost) / Revenue) × 100"
        formulaExplained="Subtract cost from revenue to get gross profit. Divide by revenue, then multiply by 100 to express as a percentage."
        examples={[
          { input: "Revenue $200, Cost $140", output: "30% margin — $60 profit" },
          { input: "Revenue $500, Cost $400", output: "20% margin — $100 profit" },
          { input: "Revenue $80, Cost $20", output: "75% margin — $60 profit" },
        ]}
        useCases={[
          "Evaluating the profitability of a product or service",
          "Setting prices to hit a target gross margin",
          "Comparing margins across a product range",
          "Reporting gross profit in financial statements",
          "Checking whether a discounted price still leaves adequate margin",
        ]}
        faqs={faqs}
      />
    </>
  )
}
