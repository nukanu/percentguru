import type { Metadata } from "next"
import Link from "next/link"
import { getCalculatorsByHub, getCalculator } from "@/lib/content/calculators"

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

function CalcLink({ href, title }: { href: string; title: string }) {
  return (
    <Link
      href={href}
      className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors group"
    >
      <span className="text-gray-700 group-hover:text-blue-700 font-medium">{title}</span>
      <span className="text-gray-400 group-hover:text-blue-400 text-lg">&rarr;</span>
    </Link>
  )
}

export default function Home() {
  const percentageCalcs = getCalculatorsByHub("percentage")
  const financeCalcs = getCalculatorsByHub("finance")
  const featured = FEATURED.map(({ slug, hub }) => {
    const calc = getCalculator(slug)
    return calc ? { title: calc.title, href: `/${hub}/${slug}/` } : null
  }).filter(Boolean) as { title: string; href: string }[]

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">

      {/* Hero */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Calculate Discounts, Margins, Loans &amp; Percentages
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-3">
          Work out discounts, profit margins, loan payments, percentage changes, ROI, and more — results appear as you type.
        </p>
        <p className="text-sm text-gray-400">
          Every calculator runs instantly in your browser — no account or install needed.
        </p>
      </section>

      {/* Most Used */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Most Used Calculators</h2>
        <div className="grid sm:grid-cols-2 gap-2">
          {featured.map((c) => (
            <CalcLink key={c.href} href={c.href} title={c.title} />
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
                <CalcLink href={`/percentage/${c.slug}/`} title={c.title} />
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
                <CalcLink href={`/finance/${c.slug}/`} title={c.title} />
              </li>
            ))}
          </ul>
        </section>
      </div>

    </div>
  )
}
