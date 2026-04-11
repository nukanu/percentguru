import type { Metadata } from "next"
import Link from "next/link"
import { getCalculatorsByHub } from "@/lib/content/calculators"
import { generateHubMetadata } from "@/lib/seo/metadata"
import Breadcrumb from "@/components/layout/Breadcrumb"

export const metadata: Metadata = generateHubMetadata({
  hub: "finance",
  title: "Finance Calculators — Pricing, Margins, Loans, and Returns",
  description:
    "Free finance calculators for discounts, profit margin, markup, sales tax, loan payments, ROI, simple interest, weighted averages, and break-even analysis.",
})

export default function FinancePage() {
  const calculators = getCalculatorsByHub("finance")

  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      <Breadcrumb
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Finance Calculators", href: "/finance/" },
        ]}
      />

      <h1 className="text-3xl font-bold text-gray-900 mb-3">Finance Calculators</h1>
      <p className="text-gray-600 mb-5 text-lg">
        Nine finance tools for real decisions — check a{" "}
        <Link href="/finance/discount-calculator/" className="text-blue-600 hover:underline">sale price</Link>,
        set a{" "}
        <Link href="/finance/profit-margin-calculator/" className="text-blue-600 hover:underline">product margin</Link>,
        plan a{" "}
        <Link href="/finance/loan-payment-calculator/" className="text-blue-600 hover:underline">monthly loan cost</Link>,
        or find the{" "}
        <Link href="/finance/break-even-calculator/" className="text-blue-600 hover:underline">break-even point</Link>{" "}
        before you commit. Enter your numbers and results appear immediately.
      </p>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-3">What these finance tools help you with</h2>
        <ul className="space-y-1.5 text-sm text-gray-600 list-disc list-inside">
          <li><strong>Pricing and margins</strong> — work out gross profit as a % of revenue, e.g. $30 cost, $50 price → 40% margin</li>
          <li><strong>Discounts and sale prices</strong> — find exact savings and final price, e.g. 25% off $80 → $20 off, $60 final</li>
          <li><strong>Monthly loan cost</strong> — calculate repayments and total interest before signing, e.g. $10,000 at 6% over 60 months → $193/month</li>
          <li><strong>Investment returns</strong> — measure ROI as a percentage and net gain, e.g. $5,000 invested, $6,200 returned → 24% ROI</li>
          <li><strong>Break-even analysis</strong> — find units needed to cover fixed costs before a product launch</li>
          <li><strong>Weighted averages</strong> — blend values by their relative importance, e.g. GPA from courses with different credit hours</li>
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
        <p className="text-xs text-gray-400 mt-4">All calculators run instantly in your browser — no sign-up, no data stored.</p>
      </section>

      <section className="mt-10 border-t border-gray-100 pt-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-1">Common questions</h2>
        <p className="text-sm text-gray-500 mb-4">Quick answers to the most common points of confusion between these tools.</p>
        <div className="space-y-5 text-sm text-gray-600">
          <div>
            <p className="font-medium text-gray-800 mb-1">What&apos;s the difference between markup and profit margin?</p>
            <p>
              <Link href="/finance/markup-calculator/" className="text-blue-600 hover:underline">Markup</Link>{" "}
              is based on cost — a 25% markup on an $80 item adds $20, selling for $100.{" "}
              <Link href="/finance/profit-margin-calculator/" className="text-blue-600 hover:underline">Profit margin</Link>{" "}
              is based on revenue — that $20 profit on $100 revenue is a 20% margin. Same transaction, different denominators.
            </p>
          </div>
          <div>
            <p className="font-medium text-gray-800 mb-1">How do I find total interest paid on a loan?</p>
            <p>
              Enter the principal, annual rate, and term into the{" "}
              <Link href="/finance/loan-payment-calculator/" className="text-blue-600 hover:underline">loan payment calculator</Link>.
              It shows both the monthly repayment and total interest — for example, $10,000 at 6% over 60 months costs $1,600 in interest.
              The{" "}
              <Link href="/finance/interest-calculator/" className="text-blue-600 hover:underline">simple interest calculator</Link>{" "}
              gives a faster estimate without monthly compounding.
            </p>
          </div>
          <div>
            <p className="font-medium text-gray-800 mb-1">Can I use the ROI calculator for ad spend or projects?</p>
            <p>
              Yes — the{" "}
              <Link href="/finance/roi-calculator/" className="text-blue-600 hover:underline">ROI calculator</Link>{" "}
              works for any investment with a measurable return. Enter what you spent and what you got back — it returns the percentage gain and net profit regardless of the asset type.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}
