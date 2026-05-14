import type { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { softwareApplicationSchema, faqSchema } from "@/lib/seo/schema"
import CalculatorShell from "@/components/calculator/CalculatorShell"
import Breadcrumb from "@/components/layout/Breadcrumb"
import CostReductionWidget from "./CalculatorWidget"

const faqs = [
  {
    question: "How do I calculate percentage cost reduction?",
    answer: "Subtract the new cost from the original cost to get savings. Then divide savings by the original cost and multiply by 100. Formula: (Original − New) ÷ Original × 100. For example: ($5,000 − $3,800) ÷ $5,000 × 100 = 24% reduction.",
  },
  {
    question: "What is a good cost reduction percentage?",
    answer: "It depends on the context. In supply chain negotiations, 5–15% is considered a strong result. Operational efficiency projects often target 10–20%. Software or SaaS consolidation can achieve 30–50%. There is no universal benchmark — compare against your industry and the effort required.",
  },
  {
    question: "Can I use this to compare two supplier quotes?",
    answer: "Yes. Enter the higher quote as the original cost and the lower quote as the new cost. The result shows both the dollar savings and the percentage difference — useful when presenting cost justifications to stakeholders.",
  },
  {
    question: "What if my new cost is higher than the original?",
    answer: "The calculator will return a negative reduction percentage, indicating a cost increase. For example, if costs went from $4,000 to $4,600, that is a −15% reduction (a 15% increase). This is useful for tracking cost creep over time.",
  },
  {
    question: "How is cost reduction different from profit margin improvement?",
    answer: <>Cost reduction measures the decrease in an input expense. Profit margin measures how much of revenue remains as profit after all costs. Reducing costs improves margin, but the relationship depends on your revenue level. Use the <Link href="/finance/profit-margin-calculator/" className="text-blue-600 hover:underline">profit margin calculator</Link> to see how a cost reduction flows through to your margin.</>,
    schemaAnswer: "Cost reduction measures the decrease in an input expense. Profit margin measures how much of revenue remains as profit after all costs. Reducing costs improves margin, but the relationship depends on your revenue level.",
  },
]

export const metadata: Metadata = generatePageMetadata({
  title: "Cost Reduction Calculator — Savings & Percentage Decrease",
  description: "Enter your original and new costs to instantly calculate the savings amount and percentage cost reduction. Use for supplier comparisons, budgeting, and efficiency tracking.",
  path: "/finance/cost-reduction-calculator/",
  keywords: ["cost reduction calculator", "cost savings calculator", "cost savings percentage calculator", "how to calculate cost reduction", "cost decrease percentage"],
})

export default function CostReductionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema("Cost Reduction Calculator", "Calculate the savings and percentage reduction between an original and new cost.")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <div className="mx-auto max-w-2xl px-4 pt-8">
        <Breadcrumb crumbs={[
          { name: "Home", href: "/" },
          { name: "Finance Calculators", href: "/finance/" },
          { name: "Cost Reduction Calculator", href: "/finance/cost-reduction-calculator/" },
        ]} />
      </div>
      <CalculatorShell
        slug="cost-reduction-calculator"
        title="Cost Reduction Calculator"
        intro={<>Enter an original cost and a new (reduced) cost to instantly see the savings amount and percentage reduction. Useful for supplier negotiations, budget reviews, or reporting efficiency improvements to stakeholders. For the reverse — calculating a discount applied to a price — the <Link href="/finance/discount-calculator/" className="text-blue-600 hover:underline">discount calculator</Link> works from the percentage rather than the final number.</>}
        whenToUse="Use this when comparing two quotes, after renegotiating a contract, or when you need to report cost savings as a percentage to management. It works for any cost: software subscriptions, operational expenses, supplier invoices, or project budgets."
        calculator={<CostReductionWidget />}
        howTo={[
          "Enter the original (higher) cost in the first field.",
          "Enter the new (reduced) cost in the second field.",
          "See your savings and the percentage reduction instantly.",
        ]}
        formula="Cost Reduction % = (Original − New) ÷ Original × 100"
        formulaExplained="Subtract the new cost from the original to find savings. Divide by the original cost, then multiply by 100 to express it as a percentage. For $5,000 reduced to $3,800: ($5,000 − $3,800) ÷ $5,000 × 100 = 24%."
        examples={[
          { input: "$5,000 → $3,800", output: "$1,200 saved (24.0% reduction)" },
          { input: "$12,000 → $9,600", output: "$2,400 saved (20.0% reduction)" },
          { input: "$850 → $720", output: "$130 saved (15.3% reduction)" },
        ]}
        useCases={[
          "Documenting procurement savings after renegotiating a supplier contract",
          "Showing the ROI of switching from one software vendor to another",
          "Reporting operational efficiency gains to management or investors",
          "Comparing competing quotes before selecting a supplier",
          "Measuring the impact of a process improvement initiative over time",
        ]}
        faqs={faqs}
      />
    </>
  )
}
