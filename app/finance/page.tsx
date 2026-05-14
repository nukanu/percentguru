import type { Metadata } from "next"
import Link from "next/link"
import { getCalculatorsByHub } from "@/lib/content/calculators"
import { generateHubMetadata } from "@/lib/seo/metadata"
import { faqSchema } from "@/lib/seo/schema"
import Breadcrumb from "@/components/layout/Breadcrumb"

export const metadata: Metadata = generateHubMetadata({
  hub: "finance",
  title: "Finance Calculators — Pricing, Margins, Loans, and Returns",
  description:
    "Free finance calculators for discounts, profit margin, markup, sales tax, loan payments, ROI, simple interest, weighted averages, and break-even analysis.",
})

const faqs = [
  {
    question: "What's the difference between markup and profit margin?",
    answer: "Markup is based on cost — a 25% markup on an $80 item adds $20, selling for $100. Profit margin is based on revenue — that $20 profit on $100 revenue is a 20% margin. Same transaction, different denominators. Markup is always higher than the equivalent margin.",
  },
  {
    question: "How do I find total interest paid on a loan?",
    answer: "Enter the principal, annual rate, and term into the loan payment calculator. It shows both the monthly repayment and total interest — for example, $10,000 at 6% over 60 months costs $1,600 in interest. The simple interest calculator gives a faster estimate without monthly compounding.",
  },
  {
    question: "Can I use the ROI calculator for ad spend or projects?",
    answer: "Yes — the ROI calculator works for any investment with a measurable return. Enter what you spent and what you got back. It returns the percentage gain and net profit regardless of asset type — ad spend, equipment, a project, or a financial investment.",
  },
  {
    question: "What is break-even point and how do I calculate it?",
    answer: "Break-even is the number of units you need to sell to cover your fixed costs. Formula: Fixed Costs ÷ (Selling Price − Variable Cost per Unit). For example: $5,000 fixed costs, $30 selling price, $10 variable cost → break-even at 250 units.",
  },
  {
    question: "How is the discount calculator different from the percent off calculator?",
    answer: "The percent off calculator is designed for shoppers — enter a price tag and a discount label to find savings. The discount calculator is oriented towards businesses — it also shows the discount amount but is better suited for invoice discounts and trade pricing contexts.",
  },
]

const decisionGuide = [
  { question: "Setting a product price from cost", tool: "Markup Calculator", href: "/finance/markup-calculator/" },
  { question: "Measuring profit as % of revenue", tool: "Profit Margin Calculator", href: "/finance/profit-margin-calculator/" },
  { question: "Calculating a sale or coupon price", tool: "Percent Off Calculator", href: "/percentage/percent-off-calculator/" },
  { question: "Adding sales tax to a price", tool: "Sales Tax Calculator", href: "/finance/sales-tax-calculator/" },
  { question: "Estimating monthly loan repayment", tool: "Loan Payment Calculator", href: "/finance/loan-payment-calculator/" },
  { question: "Measuring return on investment", tool: "ROI Calculator", href: "/finance/roi-calculator/" },
  { question: "Finding units needed to cover costs", tool: "Break-Even Calculator", href: "/finance/break-even-calculator/" },
  { question: "Tracking cost savings from a supplier", tool: "Cost Reduction Calculator", href: "/finance/cost-reduction-calculator/" },
]

export default function FinancePage() {
  const calculators = getCalculatorsByHub("finance")

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <div className="mx-auto max-w-2xl px-4 py-10">
        <Breadcrumb
          crumbs={[
            { name: "Home", href: "/" },
            { name: "Finance Calculators", href: "/finance/" },
          ]}
        />

        <h1 className="text-3xl font-bold text-gray-900 mb-3">Finance Calculators</h1>
        <p className="text-gray-600 mb-5 text-lg">
          Free tools for real financial decisions — check a{" "}
          <Link href="/finance/discount-calculator/" className="text-blue-600 hover:underline">sale price</Link>,
          set a{" "}
          <Link href="/finance/profit-margin-calculator/" className="text-blue-600 hover:underline">product margin</Link>,
          plan a{" "}
          <Link href="/finance/loan-payment-calculator/" className="text-blue-600 hover:underline">monthly loan cost</Link>,
          or find the{" "}
          <Link href="/finance/break-even-calculator/" className="text-blue-600 hover:underline">break-even point</Link>{" "}
          before you commit. All calculators are free and run instantly in your browser. For percentage-based calculations without a financial context, see the{" "}
          <Link href="/percentage/" className="text-blue-600 hover:underline">percentage calculators</Link>.
        </p>

        <section className="mb-8 bg-gray-50 border border-gray-200 rounded-xl px-5 py-5">
          <h2 className="text-base font-semibold text-gray-800 mb-3">Which calculator do you need?</h2>
          <p className="text-sm text-gray-500 mb-3">Find the right tool based on your question.</p>
          <div className="space-y-2">
            {decisionGuide.map(({ question, tool, href }) => (
              <div key={href} className="flex items-center justify-between text-sm gap-3">
                <span className="text-gray-600">{question}</span>
                <Link href={href} className="text-blue-600 hover:underline shrink-0 font-medium">
                  {tool} →
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">What these tools help you with</h2>
          <ul className="space-y-1.5 text-sm text-gray-600 list-disc list-inside">
            <li><strong>Pricing and margins</strong> — work out gross profit as % of revenue, e.g. $30 cost, $50 price → 40% margin</li>
            <li><strong>Discounts and sale prices</strong> — find exact savings and final price, e.g. 25% off $80 → $20 off, $60 final</li>
            <li><strong>Monthly loan cost</strong> — calculate repayments and total interest before signing</li>
            <li><strong>Investment returns</strong> — measure ROI as a percentage and net gain, e.g. $5,000 invested, $6,200 returned → 24% ROI</li>
            <li><strong>Break-even analysis</strong> — find units needed to cover fixed costs before a product launch</li>
            <li><strong>Cost savings</strong> — quantify supplier or operational savings as a percentage with the <Link href="/finance/cost-reduction-calculator/" className="text-blue-600 hover:underline">cost reduction calculator</Link></li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">All finance calculators</h2>
          <p className="text-sm text-gray-500 mb-4">
            Each tool answers a specific financial question. Choose based on what you&apos;re trying to find — a price, a payment, a return, or a cost threshold.
          </p>
          <ul className="space-y-3">
            {calculators.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/finance/${c.slug}/`}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors group"
                >
                  <div>
                    <p className="font-semibold text-gray-800 group-hover:text-blue-700">{c.title}</p>
                    <p className="text-sm text-gray-500 mt-0.5">{c.description}</p>
                  </div>
                  <span className="text-gray-400 group-hover:text-blue-400 text-xl ml-4">&rarr;</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-xs text-gray-500 mt-4">All calculators run instantly in your browser — no sign-up, no data stored.</p>
        </section>

        <section className="mt-10 border-t border-gray-100 pt-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Common questions</h2>
          <div className="space-y-5 text-sm text-gray-600">
            {faqs.map((faq, i) => (
              <div key={i}>
                <p className="font-medium text-gray-800 mb-1">{faq.question}</p>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
