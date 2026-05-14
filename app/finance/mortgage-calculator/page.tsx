import type { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { softwareApplicationSchema, faqSchema } from "@/lib/seo/schema"
import CalculatorShell from "@/components/calculator/CalculatorShell"
import Breadcrumb from "@/components/layout/Breadcrumb"
import MortgageCalculatorWidget from "./CalculatorWidget"

const RATES = [
  [5.0, 30, 300000, 60000], [5.5, 30, 300000, 60000],
  [6.0, 30, 300000, 60000], [6.5, 30, 300000, 60000],
  [7.0, 30, 400000, 80000], [7.0, 15, 300000, 60000],
] as [number, number, number, number][]

function monthlyPmt(principal: number, annualRate: number, months: number) {
  const r = annualRate / 100 / 12
  if (r === 0) return principal / months
  return (principal * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1)
}

function RateTable() {
  return (
    <>
      <h2 className="text-lg font-bold text-gray-900 mb-3">Example Monthly Payments</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gray-50 text-gray-700">
            <tr>
              <th className="text-left px-3 py-2 font-medium">Home Price</th>
              <th className="text-left px-3 py-2 font-medium">Down (20%)</th>
              <th className="text-left px-3 py-2 font-medium">Rate</th>
              <th className="text-left px-3 py-2 font-medium">Term</th>
              <th className="text-right px-3 py-2 font-medium">Monthly</th>
            </tr>
          </thead>
          <tbody>
            {RATES.map(([rate, term, price, down]) => {
              const loan = price - down
              const pmt = monthlyPmt(loan, rate, term * 12)
              return (
                <tr key={`${rate}-${term}-${price}`} className="border-t border-gray-100">
                  <td className="px-3 py-2 text-gray-600">${price.toLocaleString()}</td>
                  <td className="px-3 py-2 text-gray-600">${down.toLocaleString()}</td>
                  <td className="px-3 py-2 text-gray-600">{rate}%</td>
                  <td className="px-3 py-2 text-gray-600">{term}yr</td>
                  <td className="px-3 py-2 text-right font-bold text-blue-700">${pmt.toFixed(2)}</td>
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
    question: "What is the monthly payment on a $300,000 mortgage at 6.5% for 30 years?",
    answer: "With a 20% down payment ($60,000), the loan is $240,000. At 6.5% over 30 years, the monthly payment is approximately $1,517. Total interest over the life of the loan is around $306,000.",
  },
  {
    question: "How much does a higher rate increase my monthly payment?",
    answer: "On a $240,000 loan over 30 years, moving from 6% to 7% increases the monthly payment from $1,439 to $1,597 — a $158 difference. Over 30 years that adds about $56,000 in total interest.",
  },
  {
    question: "Is it worth making a larger down payment?",
    answer: "A larger down payment reduces the loan amount and monthly payment, and you avoid PMI (private mortgage insurance) once you reach 20% equity. On a $300,000 home, raising the down payment from 10% to 20% saves roughly $150/month at 6.5%.",
  },
  {
    question: "How does a 15-year mortgage compare to a 30-year?",
    answer: "A 15-year term typically has a lower rate but higher monthly payment. On a $240,000 loan at 6% (30yr) vs 5.5% (15yr): 30-year = $1,439/month ($278,000 total interest); 15-year = $1,961/month ($113,000 total interest). You pay $522 more per month but save $165,000 in interest.",
  },
  {
    question: "Does this calculator include property tax and insurance?",
    answer: "No — this calculator shows principal and interest only (P&I). Your real monthly cost will be higher once you add property tax, homeowner's insurance, and PMI if applicable. Most lenders quote the full PITI (Principal, Interest, Tax, Insurance) payment.",
  },
  {
    question: "What credit score do I need for the best mortgage rate?",
    answer: <>A score of 740 or above typically qualifies for the best rates. Below 620 and most conventional loans are unavailable. Each 20-point score drop can raise your rate by 0.25–0.5%, which compounds significantly over a 30-year term. Use the <Link href="/finance/loan-payment-calculator/" className="text-blue-600 hover:underline">loan payment calculator</Link> to model the monthly impact of different rates.</>,
    schemaAnswer: "A score of 740 or above typically qualifies for the best rates. Below 620 and most conventional loans are unavailable. Each 20-point score drop can raise your rate by 0.25–0.5%, which adds up substantially over 30 years.",
  },
]

export const metadata: Metadata = generatePageMetadata({
  title: "Mortgage Calculator — Monthly Payment & Total Interest",
  description: "Calculate your monthly mortgage payment and total interest. Enter home price, down payment, interest rate, and loan term for instant results.",
  path: "/finance/mortgage-calculator/",
  keywords: ["mortgage calculator", "monthly mortgage payment", "home loan calculator", "mortgage payment calculator", "how much is my mortgage"],
})

export default function MortgageCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema("Mortgage Calculator", "Calculate monthly mortgage payment and total interest from home price, down payment, rate, and term.")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <div className="mx-auto max-w-2xl px-4 pt-8">
        <Breadcrumb crumbs={[
          { name: "Home", href: "/" },
          { name: "Finance Calculators", href: "/finance/" },
          { name: "Mortgage Calculator", href: "/finance/mortgage-calculator/" },
        ]} />
      </div>
      <CalculatorShell
        slug="mortgage-calculator"
        title="Mortgage Calculator"
        intro={<>Enter your home price, down payment, interest rate, and loan term to get the exact monthly payment and total interest over the life of the loan. The loan amount is calculated automatically (home price minus down payment). Most buyers focus on the monthly number — but total interest is equally important: a 30-year loan at 7% on a $240,000 balance costs over $335,000 in interest. For personal loans and car loans, use the <Link href="/finance/loan-payment-calculator/" className="text-blue-600 hover:underline">loan payment calculator</Link>.</>}
        whenToUse="Use this before making an offer to understand what you can actually afford monthly, when comparing loan terms (15 vs 30 years), or when evaluating the impact of different down payment amounts on your monthly commitment."
        calculator={<MortgageCalculatorWidget />}
        howTo={[
          "Enter the home price — the full purchase price.",
          "Enter your down payment in dollars.",
          "Enter the annual interest rate you've been quoted (or are estimating).",
          "Enter the loan term in years — 15 or 30 are most common.",
          "Monthly payment and total interest appear instantly.",
        ]}
        formula="Monthly Payment = L × r × (1 + r)^n / ((1 + r)^n − 1)"
        formulaExplained="L is the loan amount (home price minus down payment), r is the monthly rate (annual rate ÷ 12 ÷ 100), and n is the total months (years × 12). Multiply the monthly payment by n to get total paid; subtract the loan amount to find total interest."
        examples={[
          { input: "$300k home, $60k down, 6.5%, 30 years", output: "$1,517/month — $306,000 total interest" },
          { input: "$250k home, $50k down, 6%, 30 years", output: "$1,199/month — $231,000 total interest" },
          { input: "$300k home, $60k down, 5.5%, 15 years", output: "$1,961/month — $113,000 total interest" },
        ]}
        useCases={[
          "Checking affordability before making an offer on a home",
          "Comparing 15-year vs 30-year mortgage costs",
          "Estimating how much a rate change affects your payment",
          "Deciding how large a down payment to make",
          "Understanding total interest over the full loan term",
        ]}
        faqs={faqs}
        lookupTable={<RateTable />}
      />
    </>
  )
}
