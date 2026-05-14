import type { Metadata } from "next"
import Link from "next/link"
import { getCalculatorsByHub } from "@/lib/content/calculators"
import { generateHubMetadata } from "@/lib/seo/metadata"
import { faqSchema } from "@/lib/seo/schema"
import Breadcrumb from "@/components/layout/Breadcrumb"

export const metadata: Metadata = generateHubMetadata({
  hub: "percentage",
  title: "Percentage Calculators — Find, Change, Compare, and Reverse Percentages",
  description:
    "Free percentage calculators for every use case. Find what percent of a number is, calculate percentage increases and decreases, reverse a percentage, measure error, and more.",
})

const faqs = [
  {
    question: "What is the basic percentage formula?",
    answer: "Percentage = (Part ÷ Whole) × 100. For example, if 30 out of 150 students passed, the pass rate is (30 ÷ 150) × 100 = 20%. To find a percentage of a number, use: Result = (Percentage ÷ 100) × Number.",
  },
  {
    question: "What's the difference between percentage change and percentage difference?",
    answer: "Percentage change requires a 'before' and 'after' — for example, sales rising from $400 to $500 is a 25% increase. Percentage difference has no direction — it just measures how far apart two values are, without implying one came first.",
  },
  {
    question: "How do I find the original price before a discount?",
    answer: "Use the reverse percentage calculator. If a price is $85 after a 15% discount, divide $85 by 0.85 to get $100 — the original. The tool does this automatically.",
  },
  {
    question: "Which calculator works for tips, tax, and commissions?",
    answer: "The 'What is X% of Y?' calculator covers all three — enter the rate and the base. For example: 18% tip on $47.50, 7% tax on $200, or 5% commission on $3,000.",
  },
  {
    question: "How do I calculate a percentage increase in my head?",
    answer: "For 10%, move the decimal one place left (10% of $80 = $8). For 20%, double that ($16). For 5%, halve the 10% figure ($4). For 25%, divide by 4 ($20). These shortcuts work for any round percentage on any base.",
  },
]

export default function PercentagePage() {
  const calculators = getCalculatorsByHub("percentage")

  const quickLookups = [
    { p: 10, n: 100 }, { p: 20, n: 100 }, { p: 25, n: 200 },
    { p: 15, n: 50 }, { p: 30, n: 150 }, { p: 50, n: 80 },
  ]

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
            { name: "Percentage Calculators", href: "/percentage/" },
          ]}
        />

        <h1 className="text-3xl font-bold text-gray-900 mb-3">Percentage Calculators</h1>
        <p className="text-gray-600 mb-5 text-lg">
          Free tools for every percentage question — find{" "}
          <Link href="/percentage/what-is-x-percent-of-y/" className="text-blue-600 hover:underline">what 15% of a number is</Link>,
          track{" "}
          <Link href="/percentage/percentage-change-calculator/" className="text-blue-600 hover:underline">how much a value changed</Link>,
          or work backwards with the{" "}
          <Link href="/percentage/reverse-percentage-calculator/" className="text-blue-600 hover:underline">reverse percentage tool</Link>.
          Results appear as you type. For financial applications like{" "}
          <Link href="/finance/discount-calculator/" className="text-blue-600 hover:underline">discounts</Link>{" "}
          and{" "}
          <Link href="/finance/profit-margin-calculator/" className="text-blue-600 hover:underline">profit margins</Link>,
          see the finance calculators.
        </p>

        <section className="mb-8 bg-gray-50 border border-gray-200 rounded-xl px-5 py-5">
          <h2 className="text-base font-semibold text-gray-800 mb-3">How percentages work</h2>
          <p className="text-sm text-gray-600 mb-3">
            A percentage expresses one number as a fraction of 100. The word comes from the Latin <em>per centum</em> — "per hundred." There are three fundamental calculations, and every percentage problem reduces to one of them:
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex gap-3">
              <span className="font-mono bg-white border border-gray-200 rounded px-2 py-1 text-gray-800 shrink-0">P% of N</span>
              <span className="text-gray-600">Finding a part — e.g. 20% of $150 = $30. Use: N × (P ÷ 100).</span>
            </div>
            <div className="flex gap-3">
              <span className="font-mono bg-white border border-gray-200 rounded px-2 py-1 text-gray-800 shrink-0">X of Y = ?%</span>
              <span className="text-gray-600">Finding the rate — e.g. 30 out of 120 = 25%. Use: (X ÷ Y) × 100.</span>
            </div>
            <div className="flex gap-3">
              <span className="font-mono bg-white border border-gray-200 rounded px-2 py-1 text-gray-800 shrink-0">Change %</span>
              <span className="text-gray-600">Finding the change — e.g. $80 → $100 = 25% increase. Use: ((New − Old) ÷ Old) × 100.</span>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">What these tools help you with</h2>
          <ul className="space-y-1.5 text-sm text-gray-600 list-disc list-inside">
            <li><strong>Tips and commissions</strong> — find exactly what 18% of $47.50 is without mental math</li>
            <li><strong>Discounts and tax</strong> — work out a percentage of any price, e.g. 20% off $65 = $13 off, $52 final</li>
            <li><strong>Year-over-year comparisons</strong> — measure how much revenue, traffic, or costs rose or fell</li>
            <li><strong>Test scores and grades</strong> — convert raw marks to a percentage, or find the score for 80% on a 45-question test</li>
            <li><strong>Measurement error</strong> — express the gap between an estimate and an actual value as a percentage</li>
            <li><strong>Original prices</strong> — reverse a percentage to recover the value before a discount or markup was applied</li>
            <li><strong>Salary raises</strong> — calculate how much a 5% raise adds to your annual pay with the <Link href="/percentage/salary-increase-calculator/" className="text-blue-600 hover:underline">salary increase calculator</Link></li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">All percentage calculators</h2>
          <p className="text-sm text-gray-500 mb-4">
            Each tool handles a distinct type of question. Choose based on what you&apos;re starting with — a rate, a result, or two values to compare.
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
          <p className="text-xs text-gray-500 mt-4">All tools run instantly in your browser — no sign-up, no data stored.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Common lookups</h2>
          <p className="text-sm text-gray-500 mb-3">Quick answers for the most searched percentage questions.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {quickLookups.map(({ p, n }) => {
              const result = (p / 100) * n
              return (
                <Link
                  key={`${p}-${n}`}
                  href={`/percentage/what-is-${p}-percent-of-${n}/`}
                  className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm hover:border-blue-300 hover:bg-blue-50 transition-colors group"
                >
                  <p className="text-gray-500 text-xs group-hover:text-blue-500">{p}% of {n}</p>
                  <p className="font-bold text-gray-900 mt-0.5">{result % 1 === 0 ? result : result.toFixed(2)}</p>
                </Link>
              )
            })}
          </div>
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
