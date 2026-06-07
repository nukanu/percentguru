import type { Metadata } from "next"
import Link from "next/link"
import { generateHubMetadata } from "@/lib/seo/metadata"
import { faqSchema } from "@/lib/seo/schema"
import Breadcrumb from "@/components/layout/Breadcrumb"

export const metadata: Metadata = generateHubMetadata({
  hub: "percentage",
  title: "Percentage Calculators — Find, Change, Compare, and Convert",
  description:
    "Free percentage calculators for every use case — find X% of a number, calculate percentage increases and decreases, convert fractions and decimals, calculate grades and GPA, and more.",
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

const decisionGuide = [
  { question: "Find X% of a number (tip, tax, commission)", tool: "What is X% of Y?", href: "/percentage/what-is-x-percent-of-y/" },
  { question: "Express one number as a % of another", tool: "X is What % of Y?", href: "/percentage/x-is-what-percent-of-y/" },
  { question: "Find the original before a % was applied", tool: "Reverse Percentage", href: "/percentage/reverse-percentage-calculator/" },
  { question: "Measure how much a value rose or fell", tool: "Percentage Change", href: "/percentage/percentage-change-calculator/" },
  { question: "Calculate a sale price or discount", tool: "Percent Off Calculator", href: "/percentage/percent-off-calculator/" },
  { question: "Convert a test score to a letter grade", tool: "Grade Calculator", href: "/percentage/grade-calculator/" },
  { question: "Calculate GPA from letter grades and credits", tool: "GPA Calculator", href: "/percentage/gpa-calculator/" },
  { question: "Convert a fraction or decimal to %", tool: "Fraction to Percent", href: "/percentage/fraction-to-percent-calculator/" },
]

type CalcEntry = { slug: string; title: string; description: string }

const CORE: CalcEntry[] = [
  { slug: "percentage-calculator", title: "Percentage Calculator", description: "Find X% of a number, or find what % one number is of another." },
  { slug: "what-is-x-percent-of-y", title: "What is X% of Y?", description: "Enter a rate and a number — get the result. Works for tips, tax, commissions." },
  { slug: "x-is-what-percent-of-y", title: "X is What Percent of Y?", description: "Express one number as a percentage of another." },
  { slug: "reverse-percentage-calculator", title: "Reverse Percentage Calculator", description: "Work backwards from a result to find the original value before a % was applied." },
]

const CHANGE: CalcEntry[] = [
  { slug: "percentage-increase-calculator", title: "Percentage Increase Calculator", description: "How much did a value go up, expressed as a percentage?" },
  { slug: "percentage-decrease-calculator", title: "Percentage Decrease Calculator", description: "How much did a value drop, expressed as a percentage?" },
  { slug: "percentage-change-calculator", title: "Percentage Change Calculator", description: "Track any increase or decrease between two values as a percentage." },
  { slug: "percentage-difference-calculator", title: "Percentage Difference Calculator", description: "Compare two values without a 'before' or 'after' — just how far apart they are." },
  { slug: "percentage-error-calculator", title: "Percentage Error Calculator", description: "How accurate was a measurement vs expected? Express the gap as a percentage." },
  { slug: "percentage-points-calculator", title: "Percentage Points Calculator", description: "Percentage point change vs relative % change — when each one applies." },
]

const GRADES: CalcEntry[] = [
  { slug: "grade-calculator", title: "Grade Calculator", description: "Score out of total → percentage and letter grade instantly." },
  { slug: "gpa-calculator", title: "GPA Calculator", description: "Letter grades + credit hours → GPA on the 4.0 scale." },
]

const CONVERSIONS: CalcEntry[] = [
  { slug: "fraction-to-percent-calculator", title: "Fraction to Percent Calculator", description: "Enter any fraction (3/8, 2/3) — get the percentage instantly." },
  { slug: "decimal-to-percent-calculator", title: "Decimal to Percent Calculator", description: "Convert any decimal to a percentage. Enter 0.75 to get 75%." },
  { slug: "percent-to-decimal-calculator", title: "Percent to Decimal Calculator", description: "Convert any percentage to a decimal. Enter 75 to get 0.75." },
]

const EVERYDAY: CalcEntry[] = [
  { slug: "tip-calculator", title: "Tip Calculator", description: "Bill amount + tip % — instant total and per-person split." },
  { slug: "percent-off-calculator", title: "Percent Off Calculator", description: "Enter a price and % off — see sale price and savings instantly." },
  { slug: "salary-increase-calculator", title: "Salary Increase Calculator", description: "See how much a raise adds in dollars and new annual total." },
  { slug: "annual-change-calculator", title: "Annual Percentage Change Calculator", description: "CAGR and total change over any number of years." },
]

function CalcList({ items }: { items: CalcEntry[] }) {
  return (
    <ul className="space-y-2">
      {items.map((c) => (
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
  )
}

// Only link to curated (indexed, full-content) answer pages — never to the
// noindexed long-tail filler pages.
const quickLookups = [
  { p: 3, n: 400 }, { p: 15, n: 350 }, { p: 25, n: 40 },
  { p: 80, n: 70 }, { p: 75, n: 45 }, { p: 30, n: 175 },
]

export default function PercentagePage() {
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
          work backwards with the{" "}
          <Link href="/percentage/reverse-percentage-calculator/" className="text-blue-600 hover:underline">reverse percentage tool</Link>,
          or convert{" "}
          <Link href="/percentage/fraction-to-percent-calculator/" className="text-blue-600 hover:underline">fractions</Link>{" "}
          and{" "}
          <Link href="/percentage/decimal-to-percent-calculator/" className="text-blue-600 hover:underline">decimals</Link>{" "}
          to percentages. For financial applications like discounts and profit margins, see the{" "}
          <Link href="/finance/" className="text-blue-600 hover:underline">finance calculators</Link>.
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
          <h2 className="text-base font-semibold text-gray-800 mb-3">How percentages work</h2>
          <p className="text-sm text-gray-600 mb-3">
            A percentage expresses one number as a fraction of 100. Every percentage problem reduces to one of three fundamental calculations:
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
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Core Calculations</h2>
          <p className="text-sm text-gray-500 mb-4">The fundamental operations — finding a part, a rate, or reversing a percentage.</p>
          <CalcList items={CORE} />
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Change &amp; Comparison</h2>
          <p className="text-sm text-gray-500 mb-4">Measuring how much something increased, decreased, or differs between two values.</p>
          <CalcList items={CHANGE} />
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Grades &amp; Education</h2>
          <p className="text-sm text-gray-500 mb-4">Convert scores to letter grades or calculate GPA from course results.</p>
          <CalcList items={GRADES} />
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Conversions</h2>
          <p className="text-sm text-gray-500 mb-4">Convert between fractions, decimals, and percentages.</p>
          <CalcList items={CONVERSIONS} />
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Everyday Use</h2>
          <p className="text-sm text-gray-500 mb-4">Tips, discounts, salary raises, and year-over-year changes.</p>
          <CalcList items={EVERYDAY} />
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
