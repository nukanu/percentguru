import type { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { softwareApplicationSchema, faqSchema } from "@/lib/seo/schema"
import CalculatorShell from "@/components/calculator/CalculatorShell"
import Breadcrumb from "@/components/layout/Breadcrumb"
import SavingsCalculatorWidget from "./CalculatorWidget"

function savingsFV(principal: number, monthly: number, annualRate: number, years: number) {
  const r = annualRate / 100 / 12
  const n = years * 12
  if (r === 0) return principal + monthly * n
  return principal * Math.pow(1 + r, n) + monthly * (Math.pow(1 + r, n) - 1) / r
}

const SCENARIOS = [
  { principal: 1000, monthly: 100, rate: 4, years: 10 },
  { principal: 5000, monthly: 200, rate: 5, years: 10 },
  { principal: 10000, monthly: 500, rate: 6, years: 20 },
  { principal: 0, monthly: 300, rate: 7, years: 30 },
] as const

function ScenariosTable() {
  return (
    <>
      <h2 className="text-lg font-bold text-gray-900 mb-3">Example Savings Scenarios</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gray-50 text-gray-700">
            <tr>
              <th className="text-left px-3 py-2 font-medium">Initial</th>
              <th className="text-left px-3 py-2 font-medium">Monthly</th>
              <th className="text-left px-3 py-2 font-medium">Rate</th>
              <th className="text-left px-3 py-2 font-medium">Years</th>
              <th className="text-right px-3 py-2 font-medium">Future Value</th>
            </tr>
          </thead>
          <tbody>
            {SCENARIOS.map((s) => {
              const fv = savingsFV(s.principal, s.monthly, s.rate, s.years)
              return (
                <tr key={`${s.principal}-${s.monthly}-${s.rate}-${s.years}`} className="border-t border-gray-100">
                  <td className="px-3 py-2 text-gray-600">${s.principal.toLocaleString()}</td>
                  <td className="px-3 py-2 text-gray-600">${s.monthly}/mo</td>
                  <td className="px-3 py-2 text-gray-600">{s.rate}%</td>
                  <td className="px-3 py-2 text-gray-600">{s.years}yr</td>
                  <td className="px-3 py-2 text-right font-bold text-blue-700">${fv.toFixed(2)}</td>
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
    question: "How much will $200/month at 5% grow over 10 years?",
    answer: "Starting from $0, saving $200/month at 5% annual rate gives you approximately $31,056 after 10 years. Of that, $24,000 is your own contributions — interest accounts for $7,056.",
  },
  {
    question: "What is the difference between this and a compound interest calculator?",
    answer: "The compound interest calculator assumes a single lump-sum deposit. This savings calculator also adds monthly contributions on top — which is more realistic for most people building savings over time through regular deposits.",
  },
  {
    question: "How does the interest rate affect long-term savings?",
    answer: "Dramatically. $500/month for 30 years: at 4% you accumulate $346,000; at 7% you accumulate $608,000. The extra 3% more than doubles the outcome because compounding accelerates over time.",
  },
  {
    question: "What if I start with nothing and just save monthly?",
    answer: "Set the initial deposit to 0 and enter only your monthly contribution. For example, $300/month at 7% for 30 years grows to approximately $364,000 — from just $108,000 in contributions.",
  },
  {
    question: "What annual return rate should I use for my savings?",
    answer: "High-yield savings accounts: 4–5%. Conservative bond funds: 4–6%. Balanced portfolio: 6–7%. Stock index funds (historical average): 7–10% before inflation. Use a conservative rate for planning — it's better to be pleasantly surprised than to undershoot your goal.",
  },
  {
    question: "How is interest earned calculated?",
    answer: <>Interest earned = Future Value − Total Contributions. Total contributions = initial deposit + (monthly × months). Use the <Link href="/finance/compound-interest-calculator/" className="text-blue-600 hover:underline">compound interest calculator</Link> if you want to model a one-time lump sum without ongoing contributions.</>,
    schemaAnswer: "Interest earned = Future Value − Total Contributions. Total contributions = initial deposit + (monthly contribution × number of months).",
  },
]

export const metadata: Metadata = generatePageMetadata({
  title: "Savings Calculator — Future Value with Monthly Contributions",
  description: "Calculate how much your savings will grow. Enter initial deposit, monthly contributions, interest rate, and years to see future value and interest earned.",
  path: "/finance/savings-calculator/",
  keywords: ["savings calculator", "how much will I save", "future value calculator", "savings growth calculator", "compound savings calculator"],
})

export default function SavingsCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema("Savings Calculator", "Calculate future savings value from initial deposit, monthly contributions, interest rate, and years.")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <div className="mx-auto max-w-2xl px-4 pt-8">
        <Breadcrumb crumbs={[
          { name: "Home", href: "/" },
          { name: "Finance Calculators", href: "/finance/" },
          { name: "Savings Calculator", href: "/finance/savings-calculator/" },
        ]} />
      </div>
      <CalculatorShell
        slug="savings-calculator"
        title="Savings Calculator"
        intro={<>Enter an initial deposit, monthly contribution amount, annual interest rate, and number of years to see exactly how much your savings will grow — broken down into total contributions and interest earned. This calculator uses monthly compounding, which matches how most savings accounts and investment accounts work. If you only have a lump sum to invest with no ongoing contributions, the <Link href="/finance/compound-interest-calculator/" className="text-blue-600 hover:underline">compound interest calculator</Link> is more appropriate.</>}
        whenToUse="Use this when planning a savings goal — whether that's an emergency fund, a house deposit, college funds, or retirement — to find out how long it will take to reach a target amount, or how much you need to save monthly to get there."
        calculator={<SavingsCalculatorWidget />}
        howTo={[
          "Enter your initial deposit — or 0 if starting from scratch.",
          "Enter the amount you plan to save each month.",
          "Enter the expected annual interest or return rate.",
          "Enter the number of years you'll be saving.",
          "Future value, total contributions, and interest earned appear instantly.",
        ]}
        formula="FV = P × (1 + r)^n + C × ((1 + r)^n − 1) / r"
        formulaExplained="P is the initial deposit, C is the monthly contribution, r is the monthly rate (annual rate ÷ 12 ÷ 100), and n is the total months (years × 12). The first term grows your initial deposit; the second term compounds your monthly contributions."
        examples={[
          { input: "$5,000 initial, $200/month, 5%, 10 years", output: "$39,818 total — $11,668 interest earned" },
          { input: "$0 initial, $500/month, 7%, 20 years", output: "$261,012 total — $141,012 interest earned" },
          { input: "$10,000 initial, $300/month, 4%, 15 years", output: "$84,696 total — $20,696 interest earned" },
        ]}
        useCases={[
          "Planning an emergency fund or house deposit",
          "Projecting retirement savings over decades",
          "Comparing the impact of saving $100 vs $300/month",
          "Seeing how much a higher return rate changes the outcome",
          "Calculating how long it takes to reach a savings goal",
        ]}
        faqs={faqs}
        lookupTable={<ScenariosTable />}
      />
    </>
  )
}
