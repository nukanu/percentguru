import type { Metadata } from "next"
import Link from "next/link"
import { calculators, getCalculator } from "@/lib/content/calculators"

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
  title: "PercentGuru — Free Percentage & Finance Calculators",
  description:
    "Free percentage and finance calculators — percentage increase, discount, profit margin, VAT, GPA, loan payments, ROI, and more. Instant results, no account needed.",
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
    title: "PercentGuru — Free Percentage & Finance Calculators",
    description:
      "Free percentage and finance calculators — percentage increase, discount, profit margin, VAT, GPA, loan payments, ROI, and more. Instant results, no account needed.",
  },
}

const FEATURED = [
  { slug: "discount-calculator", hub: "finance" },
  { slug: "what-is-x-percent-of-y", hub: "percentage" },
  { slug: "mortgage-calculator", hub: "finance" },
  { slug: "percentage-increase-calculator", hub: "percentage" },
  { slug: "savings-calculator", hub: "finance" },
  { slug: "gpa-calculator", hub: "percentage" },
  { slug: "salary-to-hourly-calculator", hub: "finance" },
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
  "gpa-calculator": "Letter grades + credit hours → GPA on the 4.0 scale",
  "fraction-to-percent-calculator": "Enter any fraction (3/8, 2/3) — get the percentage",
  "vat-calculator": "Add or remove VAT — works for UK 20%, 5%, or any rate",
  "percent-off-calculator": "Enter any price and % off — see sale price and savings",
  "grade-calculator": "Score out of total → percentage and letter grade instantly",
  "percentage-points-calculator": "PP change vs relative % change — explained clearly",
  // Personal finance
  "mortgage-calculator": "Monthly payment and total interest from home price, rate, and term",
  "savings-calculator": "Project savings growth from contributions and interest over time",
  "salary-to-hourly-calculator": "Annual salary → hourly, daily, weekly, and monthly rates",
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
  const percentageCount = calculators.filter((c) => c.hub === "percentage").length
  const financeCount = calculators.filter((c) => c.hub === "finance").length
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
          Free Percentage &amp; Finance Calculators
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-3">
          {calculators.length} free calculators for{" "}
          <Link href="/percentage/percentage-increase-calculator/" className="text-blue-600 hover:underline">percentage increase</Link>,{" "}
          <Link href="/finance/discount-calculator/" className="text-blue-600 hover:underline">discounts</Link>,{" "}
          <Link href="/finance/vat-calculator/" className="text-blue-600 hover:underline">VAT</Link>,{" "}
          <Link href="/percentage/gpa-calculator/" className="text-blue-600 hover:underline">GPA</Link>,{" "}
          <Link href="/finance/profit-margin-calculator/" className="text-blue-600 hover:underline">profit margins</Link>,{" "}
          <Link href="/finance/loan-payment-calculator/" className="text-blue-600 hover:underline">loan payments</Link>, and more.
          Results appear instantly as you type — no account, no ads blocking the answer.
        </p>
        <p className="text-sm text-gray-500 max-w-xl mx-auto">
          Each calculator shows the formula, worked examples, and explains the result — not just the number.
        </p>
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

      {/* Hub cards */}
      <div className="grid sm:grid-cols-2 gap-6 mb-2">
        <Link
          href="/percentage/"
          className="group border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:bg-blue-50 transition-colors"
        >
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-gray-800 group-hover:text-blue-700">Percentage Calculators</h2>
            <span className="text-xs font-medium bg-gray-100 group-hover:bg-blue-100 text-gray-500 group-hover:text-blue-600 px-2 py-1 rounded-full">{percentageCount} tools</span>
          </div>
          <ul className="space-y-1 text-sm text-gray-600 mb-5">
            <li>Percentage increase, decrease &amp; change</li>
            <li>Grade, GPA &amp; fraction converters</li>
            <li>Decimal ↔ percent, tip &amp; percent off</li>
            <li>Reverse percentage, error &amp; more</li>
          </ul>
          <span className="text-sm font-medium text-blue-600 group-hover:text-blue-700">
            Browse all percentage calculators &rarr;
          </span>
        </Link>

        <Link
          href="/finance/"
          className="group border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:bg-blue-50 transition-colors"
        >
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-gray-800 group-hover:text-blue-700">Finance Calculators</h2>
            <span className="text-xs font-medium bg-gray-100 group-hover:bg-blue-100 text-gray-500 group-hover:text-blue-600 px-2 py-1 rounded-full">{financeCount} tools</span>
          </div>
          <ul className="space-y-1 text-sm text-gray-600 mb-5">
            <li>Discount, markup &amp; profit margin</li>
            <li>VAT, sales tax &amp; cost reduction</li>
            <li>ROI, break-even &amp; loan payment</li>
            <li>Compound interest, weighted average &amp; more</li>
          </ul>
          <span className="text-sm font-medium text-blue-600 group-hover:text-blue-700">
            Browse all finance calculators &rarr;
          </span>
        </Link>
      </div>

      {/* Quick answers */}
      <section className="mt-14">
        <h2 className="text-xl font-bold text-gray-800 mb-3">Quick answers</h2>
        <p className="text-sm text-gray-500 mb-4">Common percentage questions — tap for the full calculation.</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {[
            { href: "/percentage/what-is-3-percent-of-400/", label: "3% of 400?" },
            { href: "/percentage/what-is-15-percent-of-350/", label: "15% of 350?" },
            { href: "/percentage/what-is-25-percent-of-40/", label: "25% of 40?" },
            { href: "/percentage/what-is-80-percent-of-70/", label: "80% of 70?" },
            { href: "/percentage/what-is-75-percent-of-45/", label: "75% of 45?" },
            { href: "/percentage/what-is-33-percent-of-50/", label: "33% of 50?" },
            { href: "/percentage/what-is-30-percent-of-175/", label: "30% of 175?" },
            { href: "/percentage/what-is-15-percent-off-150/", label: "15% off 150?" },
          ].map(({ href, label }) => (
            <Link key={href} href={href} className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 hover:border-blue-400 hover:text-blue-600 transition-colors text-center">
              {label}
            </Link>
          ))}
        </div>
      </section>

      {/* What you can calculate */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-gray-800 mb-4">What you can calculate</h2>
        <ul className="space-y-2 text-gray-600 text-sm list-disc list-inside">
          <li><strong>Discounts and sale prices</strong> — see exactly how much you save and what you pay (e.g. 25% off £80 = £20 off, £60 final)</li>
          <li><strong>VAT and sales tax</strong> — add or remove VAT at any rate, or calculate US sales tax on a purchase</li>
          <li><strong>Percentage increase and decrease</strong> — measure how much a value rose or fell as a percentage</li>
          <li><strong>Profit margin and markup</strong> — gross margin from revenue and cost, or selling price from cost and markup</li>
          <li><strong>GPA and grades</strong> — calculate GPA on the 4.0 scale or convert any score to a percentage and letter grade</li>
          <li><strong>Return on investment (ROI)</strong> — find the gain or loss percentage on any investment or project</li>
          <li><strong>Loan repayments</strong> — monthly payment and total interest on any fixed-rate loan</li>
          <li><strong>Fractions and ratios</strong> — convert fractions to percentages, or express one number as a percentage of another</li>
        </ul>
      </section>

      {/* Popular calculators */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Popular calculators</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-3">
          For home buyers, the{" "}
          <Link href="/finance/mortgage-calculator/" className="text-blue-600 hover:underline">mortgage calculator</Link>{" "}
          shows the exact monthly payment and total interest before you make an offer. The{" "}
          <Link href="/finance/savings-calculator/" className="text-blue-600 hover:underline">savings calculator</Link>{" "}
          projects how any combination of initial deposit and monthly contributions grows over time. For shopping, the{" "}
          <Link href="/finance/discount-calculator/" className="text-blue-600 hover:underline">discount calculator</Link>{" "}
          shows exact savings and final price.
        </p>
        <p className="text-sm text-gray-600 leading-relaxed">
          For business pricing, the{" "}
          <Link href="/finance/profit-margin-calculator/" className="text-blue-600 hover:underline">profit margin calculator</Link>{" "}
          and{" "}
          <Link href="/finance/markup-calculator/" className="text-blue-600 hover:underline">markup calculator</Link>{" "}
          cover both sides. For students, the{" "}
          <Link href="/percentage/gpa-calculator/" className="text-blue-600 hover:underline">GPA calculator</Link>{" "}
          and{" "}
          <Link href="/percentage/grade-calculator/" className="text-blue-600 hover:underline">grade calculator</Link>{" "}
          convert marks to percentages and grade point averages. For everyday questions, the{" "}
          <Link href="/percentage/what-is-x-percent-of-y/" className="text-blue-600 hover:underline">what is X% of Y calculator</Link>{" "}
          handles tips, tax amounts, and commissions.
        </p>
      </section>

      {/* Why PercentGuru */}
      <section className="mt-12 border-t border-gray-100 pt-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Why PercentGuru</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-3">
          Most calculators just hand you a number. PercentGuru shows the working: every tool
          displays the formula it uses, walks through worked examples, and explains what the
          result means — so you can check it, learn the method, and do it yourself next time.
          The answer updates instantly as you type, and there are no pop-ups or pay-walls
          between you and the result.
        </p>
        <p className="text-sm text-gray-600 leading-relaxed">
          Every calculator is built in-house, uses the standard formula shown on its page, and
          is verified against worked examples. The tools are completely free, run entirely in
          your browser, need no account, and store none of the numbers you enter. You can read
          more about how we build and check each one on the{" "}
          <Link href="/about/" className="text-blue-600 hover:underline">about page</Link>, or
          send a correction or request through the{" "}
          <Link href="/contact/" className="text-blue-600 hover:underline">contact page</Link>.
        </p>
      </section>

    </div>
    </>
  )
}
