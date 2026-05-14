import type { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { softwareApplicationSchema, faqSchema } from "@/lib/seo/schema"
import CalculatorShell from "@/components/calculator/CalculatorShell"
import Breadcrumb from "@/components/layout/Breadcrumb"
import SalaryToHourlyWidget from "./CalculatorWidget"

const SALARIES = [30000, 40000, 50000, 60000, 75000, 80000, 100000, 120000, 150000]

function SalaryTable() {
  return (
    <>
      <h2 className="text-lg font-bold text-gray-900 mb-3">Common Salary Conversions (40hr/week)</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gray-50 text-gray-700">
            <tr>
              <th className="text-left px-3 py-2 font-medium">Annual</th>
              <th className="text-right px-3 py-2 font-medium">Hourly</th>
              <th className="text-right px-3 py-2 font-medium">Daily</th>
              <th className="text-right px-3 py-2 font-medium">Weekly</th>
              <th className="text-right px-3 py-2 font-medium">Monthly</th>
            </tr>
          </thead>
          <tbody>
            {SALARIES.map((s) => {
              const hourly = s / (40 * 52)
              const daily = hourly * 8
              const weekly = s / 52
              const monthly = s / 12
              return (
                <tr key={s} className="border-t border-gray-100">
                  <td className="px-3 py-2 font-medium text-gray-700">${s.toLocaleString()}</td>
                  <td className="px-3 py-2 text-right text-blue-700 font-bold">${hourly.toFixed(2)}</td>
                  <td className="px-3 py-2 text-right text-gray-600">${daily.toFixed(2)}</td>
                  <td className="px-3 py-2 text-right text-gray-600">${weekly.toFixed(2)}</td>
                  <td className="px-3 py-2 text-right text-gray-600">${monthly.toFixed(2)}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

const faqs = [
  {
    question: "How much is $50,000 a year hourly?",
    answer: "$50,000 a year is $24.04 per hour based on a standard 40-hour week and 52 weeks per year (2,080 total hours). Daily pay is $192.31, weekly is $961.54, and monthly is $4,166.67.",
  },
  {
    question: "How much is $30 an hour annually?",
    answer: "$30 per hour × 2,080 hours (40hr/week × 52 weeks) = $62,400 per year. If you work fewer weeks due to unpaid leave, enter the actual weeks per year in the calculator.",
  },
  {
    question: "What if I don't work 52 weeks a year?",
    answer: "Adjust the weeks per year field. If you take 2 weeks unpaid leave, use 50. Contractors often use 48–50 to account for gaps between contracts. This is especially important for accurate hourly rate negotiations.",
  },
  {
    question: "Does this include taxes or deductions?",
    answer: "No — this converts gross salary to gross hourly rate. Actual take-home pay will be lower after income tax, social security, health insurance, and other deductions. Tax rates vary significantly by location and income level.",
  },
  {
    question: "How do I convert hourly rate to annual salary?",
    answer: "Hourly × hours per week × weeks per year. For example: $25/hr × 40 hours × 52 weeks = $52,000/year. To check if a raise changes your rate meaningfully, use the salary increase calculator first, then convert.",
  },
  {
    question: "Why would I need to know my hourly rate if I'm salaried?",
    answer: <>Knowing your effective hourly rate helps when comparing two job offers with different salaries and hours, evaluating freelance or consulting work against your salaried income, or calculating whether overtime pay is fairly compensated. Use the <Link href="/percentage/salary-increase-calculator/" className="text-blue-600 hover:underline">salary increase calculator</Link> to see how a raise affects your annual total, then convert back to hourly here.</>,
    schemaAnswer: "Knowing your effective hourly rate helps when comparing two job offers with different salaries and hours, evaluating freelance work against salaried income, or determining if overtime is fairly compensated.",
  },
]

export const metadata: Metadata = generatePageMetadata({
  title: "Salary to Hourly Calculator — Annual Salary to Hourly Rate",
  description: "Convert annual salary to hourly rate instantly. Enter your yearly salary and hours per week to get hourly, daily, weekly, and monthly pay breakdowns.",
  path: "/finance/salary-to-hourly-calculator/",
  keywords: ["salary to hourly calculator", "annual salary to hourly", "convert salary to hourly rate", "how much is my hourly rate", "salary hourly wage calculator"],
})

export default function SalaryToHourlyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema("Salary to Hourly Calculator", "Convert annual salary to hourly, daily, weekly, and monthly pay rates.")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <div className="mx-auto max-w-2xl px-4 pt-8">
        <Breadcrumb crumbs={[
          { name: "Home", href: "/" },
          { name: "Finance Calculators", href: "/finance/" },
          { name: "Salary to Hourly Calculator", href: "/finance/salary-to-hourly-calculator/" },
        ]} />
      </div>
      <CalculatorShell
        slug="salary-to-hourly-calculator"
        title="Salary to Hourly Calculator"
        intro={<>Enter your annual salary and the number of hours you work per week to instantly convert it into hourly, daily, weekly, and monthly pay rates. The default assumes a standard 40-hour week and 52 weeks per year (2,080 total working hours). Adjust the hours or weeks if your schedule differs. This is useful for comparing a salaried job to hourly contract work, or for understanding exactly what you earn per hour. For seeing how a raise changes your annual total, use the <Link href="/percentage/salary-increase-calculator/" className="text-blue-600 hover:underline">salary increase calculator</Link>. To see how your income could grow if invested over time, try the <Link href="/finance/savings-calculator/" className="text-blue-600 hover:underline">savings calculator</Link>.</>}
        whenToUse="Use this when comparing a salary offer to an hourly contract rate, when evaluating whether to take on freelance work alongside a salaried role, or when you want to understand the real hourly cost of your time."
        calculator={<SalaryToHourlyWidget />}
        howTo={[
          "Enter your annual salary in dollars.",
          "Enter hours per week — 40 is the standard full-time schedule.",
          "Enter weeks per year — 52 for full year, fewer if you take unpaid leave.",
          "Hourly, daily, weekly, and monthly rates appear instantly.",
        ]}
        formula="Hourly = Annual Salary ÷ (Hours per Week × Weeks per Year)"
        formulaExplained="For a standard 40hr/52wk year: 2,080 total hours. $60,000 ÷ 2,080 = $28.85/hr. Daily = hourly × hours per day (default 8). Weekly = annual ÷ weeks. Monthly = annual ÷ 12."
        examples={[
          { input: "$60,000/year, 40hr/week", output: "$28.85/hr — $230.77/day — $1,153.85/week — $5,000/month" },
          { input: "$80,000/year, 40hr/week", output: "$38.46/hr — $307.69/day — $1,538.46/week — $6,666.67/month" },
          { input: "$45,000/year, 37.5hr/week", output: "$23.08/hr — $184.62/day — $865.38/week — $3,750/month" },
        ]}
        useCases={[
          "Comparing a salaried job to an hourly or contract rate",
          "Evaluating freelance work versus employment income",
          "Understanding how many hours of work a purchase represents",
          "Negotiating an hourly consulting rate based on your salary",
          "Calculating pay for part-time or reduced-hours arrangements",
        ]}
        faqs={faqs}
        lookupTable={<SalaryTable />}
      />
    </>
  )
}
