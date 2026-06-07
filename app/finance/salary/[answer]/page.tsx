import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

const SALARIES = [
  25000, 30000, 35000, 40000, 45000, 50000, 55000,
  60000, 65000, 70000, 75000, 80000, 85000, 90000,
  95000, 100000, 110000, 120000, 130000, 140000,
  150000, 175000, 200000,
]

function parseSlug(answer: string): number | null {
  const m = answer.match(/^(\d+)-a-year-is-how-much-an-hour$/)
  if (!m) return null
  const salary = parseInt(m[1])
  return SALARIES.includes(salary) ? salary : null
}

function fmt2(n: number) {
  return n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

export async function generateStaticParams() {
  return SALARIES.map((s) => ({ answer: `${s}-a-year-is-how-much-an-hour` }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ answer: string }>
}): Promise<Metadata> {
  const { answer } = await params
  const salary = parseSlug(answer)
  if (!salary) return {}
  const hourly = salary / 2080
  return {
    title: `$${salary.toLocaleString()} a Year is How Much an Hour? | PercentGuru`,
    description: `$${salary.toLocaleString()} a year is $${fmt2(hourly)} per hour based on a 40-hour week. See daily, weekly, and monthly breakdowns.`,
    alternates: { canonical: `https://percentguru.com/finance/salary/${answer}/` },
    robots: { index: false, follow: true },
  }
}

export default async function SalaryAnswerPage({
  params,
}: {
  params: Promise<{ answer: string }>
}) {
  const { answer } = await params
  const salary = parseSlug(answer)
  if (!salary) notFound()

  const hourly = salary / 2080
  const daily = hourly * 8
  const weekly = salary / 52
  const monthly = salary / 12

  const salaryFmt = salary.toLocaleString()

  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      <nav className="text-xs text-gray-400 mb-6 flex gap-1.5 flex-wrap">
        <Link href="/" className="hover:text-blue-500">Home</Link>
        <span>/</span>
        <Link href="/finance/" className="hover:text-blue-500">Finance Calculators</Link>
        <span>/</span>
        <Link href="/finance/salary-to-hourly-calculator/" className="hover:text-blue-500">Salary to Hourly</Link>
        <span>/</span>
        <span className="text-gray-500">${salaryFmt} a year</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        ${salaryFmt} a Year is How Much an Hour?
      </h1>
      <p className="text-gray-500 text-sm mb-8">Based on 40 hours/week, 52 weeks/year (2,080 working hours)</p>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
        <p className="text-sm text-gray-500 mb-1">Hourly rate</p>
        <p className="text-5xl font-bold text-blue-700">${fmt2(hourly)}</p>
        <p className="text-sm text-gray-500 mt-2">per hour</p>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-10">
        <div className="border border-gray-200 rounded-lg px-4 py-3 text-center bg-white">
          <p className="text-xs text-gray-500 mb-1">Daily (8hr)</p>
          <p className="font-bold text-gray-800 text-lg">${fmt2(daily)}</p>
        </div>
        <div className="border border-gray-200 rounded-lg px-4 py-3 text-center bg-white">
          <p className="text-xs text-gray-500 mb-1">Weekly</p>
          <p className="font-bold text-gray-800 text-lg">${fmt2(weekly)}</p>
        </div>
        <div className="border border-gray-200 rounded-lg px-4 py-3 text-center bg-white">
          <p className="text-xs text-gray-500 mb-1">Monthly</p>
          <p className="font-bold text-gray-800 text-lg">${fmt2(monthly)}</p>
        </div>
      </div>

      <section className="mb-8 text-sm text-gray-600 space-y-3">
        <h2 className="text-base font-semibold text-gray-800">How this is calculated</h2>
        <p>
          A standard full-time year is 40 hours per week × 52 weeks = <strong>2,080 hours</strong>.
          Dividing the annual salary by 2,080 gives the hourly rate:
        </p>
        <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 font-mono text-gray-700">
          ${salaryFmt} ÷ 2,080 = ${fmt2(hourly)}/hr
        </div>
        <p>
          The daily rate assumes an 8-hour working day. The weekly rate divides by 52 weeks.
          Monthly divides by 12. If you work different hours or take unpaid weeks off, use the{" "}
          <Link href="/finance/salary-to-hourly-calculator/" className="text-blue-600 hover:underline">
            salary to hourly calculator
          </Link>{" "}
          to enter your exact schedule.
        </p>
      </section>

      <section className="mb-8 text-sm text-gray-600">
        <h2 className="text-base font-semibold text-gray-800 mb-3">Before and after tax</h2>
        <p>
          These figures are <strong>gross pay</strong> — before income tax, social security,
          health insurance, and other deductions. Your actual take-home will be lower. Tax rates
          vary by country, state, and filing status. As a rough guide for US residents, federal
          income tax on ${salaryFmt} is typically in the 22–24% bracket, with additional state
          taxes varying by location.
        </p>
      </section>

      {SALARIES.filter((s) => s !== salary).length > 0 && (
        <section className="mb-8">
          <h2 className="text-base font-semibold text-gray-800 mb-3">Other common salaries</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {SALARIES.filter((s) => s !== salary)
              .slice(0, 6)
              .map((s) => (
                <Link
                  key={s}
                  href={`/finance/salary/${s}-a-year-is-how-much-an-hour/`}
                  className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm hover:border-blue-300 hover:bg-blue-50 transition-colors group"
                >
                  <p className="text-gray-500 text-xs group-hover:text-blue-500">${s.toLocaleString()}/year</p>
                  <p className="font-bold text-gray-800 mt-0.5">${fmt2(s / 2080)}/hr</p>
                </Link>
              ))}
          </div>
        </section>
      )}

      <div className="border border-blue-100 bg-blue-50 rounded-xl p-5 text-sm">
        <p className="font-semibold text-blue-800 mb-1">Need a custom calculation?</p>
        <p className="text-blue-700 mb-3">
          Enter your exact hours per week and weeks per year in the full calculator.
        </p>
        <Link
          href="/finance/salary-to-hourly-calculator/"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Open salary to hourly calculator →
        </Link>
      </div>
    </div>
  )
}
