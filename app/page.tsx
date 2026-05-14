import type { Metadata } from "next"
import Link from "next/link"
import { getCalculatorsByHub, getCalculator } from "@/lib/content/calculators"

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "PercentGuru",
  url: "https://percentguru.com",
  description: "Free percentage and finance calculators — instant results, no sign-up required.",
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PercentGuru",
  url: "https://percentguru.com",
  description: "Free online percentage and finance calculators.",
}

export const metadata: Metadata = {
  title: "PercentGuru — Percentage & Finance Calculators",
  description:
    "Calculate percentages, discounts, profit margins, loan payments, ROI, and more. Instant results, no account needed.",
  alternates: { canonical: "https://percentguru.com/" },
  openGraph: {
    title: "PercentGuru — Percentage & Finance Calculators",
    description:
      "Calculate percentages, discounts, profit margins, loan payments, ROI, and more. Instant results, no account needed.",
    url: "https://percentguru.com/",
    siteName: "PercentGuru",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "PercentGuru — Percentage & Finance Calculators",
    description:
      "Calculate percentages, discounts, profit margins, loan payments, ROI, and more. Instant results, no account needed.",
  },
}

const FEATURED = [
  { slug: "discount-calculator", hub: "finance" },
  { slug: "what-is-x-percent-of-y", hub: "percentage" },
  { slug: "profit-margin-calculator", hub: "finance" },
  { slug: "percentage-increase-calculator", hub: "percentage" },
  { slug: "loan-payment-calculator", hub: "finance" },
  { slug: "percentage-change-calculator", hub: "percentage" },
] as const

const DESCRIPTIONS: Record<string, string> = {
  // Percentage
  "percentage-calculator": "Find X% of any number — tips, tax, commissions",
  "what-is-x-percent-of-y": "Enter a % and a number — get the amount instantly",
  "x-is-what-percent-of-y": "Express one number as a percentage of another",
  "percentage-increase-calculator": "How much did a value go up?",
  "percentage-decrease-calculator": "How much did a value drop?",
  "percentage-change-calculator": "Track increases and decreases as a percentage",
  "percentage-difference-calculator": "Compare two values with no 'before' or 'after'",
  "percentage-error-calculator": "How accurate was a measurement vs expected?",
  "reverse-percentage-calculator": "Find the original before a % was applied",
  // Finance
  "discount-calculator": "See how much you save and what you'll pay",
  "markup-calculator": "Price from cost with a target markup",
  "profit-margin-calculator": "Revenue and cost — into a margin percentage",
  "sales-tax-calculator": "Add any tax rate to a price — works for VAT too",
  "roi-calculator": "Return % and net gain on any investment",
  "interest-calculator": "Simple interest earned or owed over time",
  "loan-payment-calculator": "Monthly repayment and total interest on any loan",
  "weighted-average-calculator": "Average values that don't carry equal weight",
  "break-even-calculator": "How many units to sell before you cover costs?",
  "tip-calculator": "Bill amount + tip % — instant total and per-person split",
  "salary-increase-calculator": "See how much a raise adds in dollars and new total",
  "annual-change-calculator": "CAGR and total change over any number of years",
  "cost-reduction-calculator": "Savings amount and % reduction between two costs",
}

function CalcLink({ href, title, description }: { href: string; title: string; description?: string }) {
  return (
    <Link
      href={href}
      className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors group"
    >
      <span className="min-w-0">
        <span className="block text-gray-700 group-hover:text-blue-700 font-medium">{title}</span>
        {description && (
          <span className="block text-xs text-gray-500 group-hover:text-blue-400 mt-0.5 truncate">{description}</span>
        )}
      </span>
      <span className="text-gray-400 group-hover:text-blue-400 text-lg ml-3 shrink-0">&rarr;</span>
    </Link>
  )
}

export default function Home() {
  const percentageCalcs = getCalculatorsByHub("percentage")
  const financeCalcs = getCalculatorsByHub("finance")
  const featured = FEATURED.map(({ slug, hub }) => {
    const calc = getCalculator(slug)
    return calc ? { slug, title: calc.title, href: `/${hub}/${slug}/` } : null
  }).filter(Boolean) as { slug: string; title: string; href: string }[]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
    <div className="mx-auto max-w-4xl px-4 py-12">

      {/* Hero */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Percentage &amp; Finance Calculators
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-3">
          Work out <Link href="/finance/discount-calculator/" className="text-blue-600 hover:underline">discounts</Link>,{" "}
          <Link href="/finance/profit-margin-calculator/" className="text-blue-600 hover:underline">profit margins</Link>,{" "}
          <Link href="/finance/loan-payment-calculator/" className="text-blue-600 hover:underline">loan payments</Link>,{" "}
          percentage changes, ROI, and more — results appear as you type.
        </p>
        <p className="text-sm text-gray-600 max-w-xl mx-auto mb-4">
          Whether you&apos;re checking a sale price, working out gross margin on a product,
          figuring out a loan&apos;s monthly cost, or measuring year-over-year revenue growth —
          there&apos;s a calculator here for it.
        </p>
        <p className="text-sm text-gray-500">Choose a calculator below to get started.</p>
      </section>

      {/* Most Used */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Top Calculators</h2>
        <div className="grid sm:grid-cols-2 gap-2">
          {featured.map((c) => (
            <CalcLink key={c.href} href={c.href} title={c.title} description={DESCRIPTIONS[c.slug]} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <div className="grid sm:grid-cols-2 gap-10">
        <section>
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-bold text-gray-800">Percentage Calculators</h2>
            <Link href="/percentage/" className="text-sm text-blue-600 hover:underline">
              View all
            </Link>
          </div>
          <p className="text-sm text-gray-500 mb-4">
            Percentage increase and decrease, reverse percentage, percentage error, and more.
          </p>
          <ul className="space-y-2">
            {percentageCalcs.map((c) => (
              <li key={c.slug}>
                <CalcLink
                  href={`/percentage/${c.slug}/`}
                  title={c.title}
                  description={DESCRIPTIONS[c.slug]}
                />
              </li>
            ))}
          </ul>
        </section>

        <section>
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-bold text-gray-800">Finance Calculators</h2>
            <Link href="/finance/" className="text-sm text-blue-600 hover:underline">
              View all
            </Link>
          </div>
          <p className="text-sm text-gray-500 mb-4">
            Profit margins, discounts, markup, loan repayments, ROI, interest, and break-even analysis.
          </p>
          <ul className="space-y-2">
            {financeCalcs.map((c) => (
              <li key={c.slug}>
                <CalcLink
                  href={`/finance/${c.slug}/`}
                  title={c.title}
                  description={DESCRIPTIONS[c.slug]}
                />
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* What you can calculate */}
      <section className="mt-14">
        <h2 className="text-xl font-bold text-gray-800 mb-4">What you can calculate</h2>
        <ul className="space-y-2 text-gray-600 text-sm list-disc list-inside">
          <li><strong>Discounts and sale prices</strong> — see exactly how much you save and what you pay (e.g. 25% off $80 = $20 off, $60 final)</li>
          <li><strong>Sales tax and VAT</strong> — add any tax rate to a price, or reverse from a tax-inclusive total</li>
          <li><strong>Percentage increase and decrease</strong> — measure how much a value rose or fell</li>
          <li><strong>Profit margin and markup</strong> — gross margin from revenue and cost, or selling price from markup</li>
          <li><strong>Return on investment (ROI)</strong> — find the gain or loss on any investment or project</li>
          <li><strong>Loan repayments</strong> — monthly payment and total interest on any fixed-rate loan</li>
          <li><strong>Comparisons and ratios</strong> — express ratios as percentages or compare two values</li>
        </ul>
      </section>

      {/* Popular calculators */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Popular calculators</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-3">
          If you&apos;re shopping a sale, the{" "}
          <Link href="/finance/discount-calculator/" className="text-blue-600 hover:underline">Discount Calculator</Link>{" "}
          shows your exact savings and final price. For business pricing, the{" "}
          <Link href="/finance/profit-margin-calculator/" className="text-blue-600 hover:underline">Profit Margin Calculator</Link>{" "}
          and{" "}
          <Link href="/finance/markup-calculator/" className="text-blue-600 hover:underline">Markup Calculator</Link>{" "}
          cover both sides — what you keep as profit and what to charge from cost.
        </p>
        <p className="text-sm text-gray-600 leading-relaxed">
          For investments and projects, the{" "}
          <Link href="/finance/roi-calculator/" className="text-blue-600 hover:underline">ROI Calculator</Link>{" "}
          gives you the return percentage and net gain instantly. For everyday percentage questions, the{" "}
          <Link href="/percentage/what-is-x-percent-of-y/" className="text-blue-600 hover:underline">What is X% of Y?</Link>{" "}
          calculator handles tips, tax amounts, commissions, and more.
          Pick the one that fits your situation and get your answer in seconds.
        </p>
      </section>

    </div>
    </>
  )
}
