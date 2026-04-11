import type { Metadata } from "next"
import Link from "next/link"
import { getCalculatorsByHub } from "@/lib/content/calculators"
import { generateHubMetadata } from "@/lib/seo/metadata"
import Breadcrumb from "@/components/layout/Breadcrumb"

export const metadata: Metadata = generateHubMetadata({
  hub: "percentage",
  title: "Percentage Calculators — Find, Change, Compare, and Reverse Percentages",
  description:
    "Free percentage calculators for every use case. Find what percent of a number is, calculate percentage increases and decreases, reverse a percentage, measure error, and more.",
})

export default function PercentagePage() {
  const calculators = getCalculatorsByHub("percentage")

  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      <Breadcrumb
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Percentage Calculators", href: "/percentage/" },
        ]}
      />

      <h1 className="text-3xl font-bold text-gray-900 mb-3">Percentage Calculators</h1>
      <p className="text-gray-600 mb-5 text-lg">
        Eight percentage tools covering every common calculation — from finding{" "}
        <Link href="/percentage/what-is-x-percent-of-y/" className="text-blue-600 hover:underline">what 15% of a number is</Link>{" "}
        to tracking{" "}
        <Link href="/percentage/percentage-change-calculator/" className="text-blue-600 hover:underline">how much a value changed</Link>{" "}
        or working backwards with the{" "}
        <Link href="/percentage/reverse-percentage-calculator/" className="text-blue-600 hover:underline">reverse percentage tool</Link>.
        Results appear as you type — no calculation needed on your end.
      </p>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-3">What these percentage tools help you with</h2>
        <ul className="space-y-1.5 text-sm text-gray-600 list-disc list-inside">
          <li><strong>Tips and commissions</strong> — find exactly what 18% of $47.50 is (answer: $8.55) without mental math</li>
          <li><strong>Discounts and tax</strong> — work out a percentage of any price, e.g. 20% off $65 = $13 off, $52 final</li>
          <li><strong>Year-over-year comparisons</strong> — measure how much revenue, traffic, or costs rose or fell as a percentage change</li>
          <li><strong>Test scores and grades</strong> — convert raw marks to a percentage, or find what score equals 80% on a 45-question test</li>
          <li><strong>Measurement error</strong> — express the gap between an estimated and actual value as a percentage (e.g. predicted 200, got 185 → 7.5% error)</li>
          <li><strong>Original prices</strong> — reverse a percentage to recover the value before a discount or markup was applied</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-3">All percentage calculators</h2>
        <p className="text-sm text-gray-500 mb-4">
          Each tool handles a distinct type of percentage question. Choose based on what you&apos;re starting with — a rate, a result, or two values to compare.
        </p>
        <ul className="space-y-3">
          {calculators.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/percentage/${c.slug}/`}
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
        <p className="text-xs text-gray-400 mt-4">All tools run instantly in your browser — no sign-up, no data stored.</p>
      </section>

      <section className="mt-10 border-t border-gray-100 pt-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-1">Common questions</h2>
        <p className="text-sm text-gray-500 mb-4">Not sure which tool to use? These answers cover the most common points of confusion.</p>
        <div className="space-y-5 text-sm text-gray-600">
          <div>
            <p className="font-medium text-gray-800 mb-1">What&apos;s the difference between percentage change and percentage difference?</p>
            <p>
              <Link href="/percentage/percentage-change-calculator/" className="text-blue-600 hover:underline">Percentage change</Link>{" "}
              requires a clear &ldquo;before&rdquo; and &ldquo;after&rdquo; — for example, sales going from $400 to $500 is a 25% increase.{" "}
              <Link href="/percentage/percentage-difference-calculator/" className="text-blue-600 hover:underline">Percentage difference</Link>{" "}
              has no direction — it just measures how far apart two values are, without implying one came first.
            </p>
          </div>
          <div>
            <p className="font-medium text-gray-800 mb-1">How do I find the original price before a discount?</p>
            <p>
              Use the{" "}
              <Link href="/percentage/reverse-percentage-calculator/" className="text-blue-600 hover:underline">reverse percentage calculator</Link>.
              If a price is $85 after a 15% discount, divide $85 by 0.85 to get $100 — the original. The tool does this automatically.
            </p>
          </div>
          <div>
            <p className="font-medium text-gray-800 mb-1">Which tool works for tips, tax, and commissions?</p>
            <p>
              <Link href="/percentage/what-is-x-percent-of-y/" className="text-blue-600 hover:underline">What is X% of Y?</Link>{" "}
              covers all three — enter the rate and the base. For sales tax, the{" "}
              <Link href="/finance/sales-tax-calculator/" className="text-blue-600 hover:underline">sales tax calculator</Link>{" "}
              also returns the tax-inclusive total in one step.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}
