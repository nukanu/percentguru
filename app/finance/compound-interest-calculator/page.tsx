import type { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { softwareApplicationSchema, faqSchema } from "@/lib/seo/schema"
import CalculatorShell from "@/components/calculator/CalculatorShell"
import Breadcrumb from "@/components/layout/Breadcrumb"
import CompoundInterestWidget from "./CalculatorWidget"

const faqs = [
  {
    question: "What is the difference between compound and simple interest?",
    answer: "Simple interest is calculated only on the original principal each period. Compound interest is calculated on the principal plus any interest already earned — so your interest earns interest. Over long periods this makes a large difference: $10,000 at 7% for 20 years earns $14,000 in simple interest but $28,697 compounded monthly.",
  },
  {
    question: "How often should interest compound for the best return?",
    answer: "More frequent compounding always produces a higher return. Daily compounding slightly beats monthly, which beats quarterly, which beats annual. In practice the difference between monthly and daily is small — the bigger lever is the interest rate and the length of time.",
  },
  {
    question: "What is the compound interest formula?",
    answer: "A = P(1 + r/n)^(nt). Where A is the final amount, P is the principal, r is the annual rate as a decimal, n is the number of times interest compounds per year, and t is the number of years. For $5,000 at 6% compounded monthly for 5 years: A = 5000 × (1 + 0.06/12)^(12×5) = $6,744.25.",
  },
  {
    question: "How much does $10,000 grow at 7% compounded monthly for 10 years?",
    answer: "At 7% compounded monthly for 10 years, $10,000 grows to $20,097 — doubling in roughly 10 years. The interest earned is $10,097, which is more than the original principal.",
  },
  {
    question: "What is the Rule of 72?",
    answer: "The Rule of 72 is a quick estimate for how long it takes money to double: divide 72 by the annual interest rate. At 6% it takes roughly 12 years (72 ÷ 6). At 9% it takes 8 years. It's an approximation — this calculator gives the exact figure.",
  },
  {
    question: "How is compound interest different from ROI?",
    answer: <>ROI measures the total return on a one-time investment. Compound interest specifically models growth where returns are reinvested each period. For a single-period or non-reinvested return, use the <Link href="/finance/roi-calculator/" className="text-blue-600 hover:underline">ROI calculator</Link>. For savings accounts, bonds, or any reinvested growth, compound interest is the right model.</>,
    schemaAnswer: "ROI measures the total return on a one-time investment. Compound interest specifically models growth where returns are reinvested each period.",
  },
]

export const metadata: Metadata = generatePageMetadata({
  title: "Compound Interest Calculator — Daily, Monthly & Annual",
  description: "Calculate how much your money grows with compound interest. Enter principal, rate, compounding frequency, and years to see total amount and interest earned.",
  path: "/finance/compound-interest-calculator/",
  keywords: ["compound interest calculator", "compound interest formula", "how to calculate compound interest", "daily compound interest calculator", "monthly compound interest"],
})

export default function CompoundInterestPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema("Compound Interest Calculator", "Calculate total amount and interest earned with compound interest over any period.")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <div className="mx-auto max-w-2xl px-4 pt-8">
        <Breadcrumb crumbs={[
          { name: "Home", href: "/" },
          { name: "Finance Calculators", href: "/finance/" },
          { name: "Compound Interest Calculator", href: "/finance/compound-interest-calculator/" },
        ]} />
      </div>
      <CalculatorShell
        slug="compound-interest-calculator"
        title="Compound Interest Calculator"
        intro={<>Enter a principal, annual interest rate, compounding frequency, and number of years to see the total amount and interest earned. Compound interest — where interest earns interest — is the mechanism behind savings accounts, investment portfolios, and long-term debt. The difference between monthly and annual compounding becomes significant over decades. For a basic interest estimate without compounding, use the <Link href="/finance/interest-calculator/" className="text-blue-600 hover:underline">simple interest calculator</Link>.</>}
        whenToUse="Use this to model savings account growth, estimate how an investment portfolio compounds over time, or understand how loan interest accumulates when it compounds. Choose the compounding frequency to match your account — most savings accounts compound daily or monthly."
        calculator={<CompoundInterestWidget />}
        howTo={[
          "Enter the starting amount (principal).",
          "Enter the annual interest rate as a percentage.",
          "Select how often interest compounds — monthly is typical for savings accounts.",
          "Enter the number of years.",
          "See the total amount, interest earned, and total growth percentage.",
        ]}
        formula="A = P × (1 + r ÷ n) ^ (n × t)"
        formulaExplained="P is the principal, r is the annual rate as a decimal, n is compounding periods per year, t is years. For $10,000 at 7% compounded monthly for 10 years: 10000 × (1 + 0.07/12)^(12×10) = $20,097."
        examples={[
          { input: "$10,000 at 7% monthly for 10 years", output: "$20,097 (+$10,097)" },
          { input: "$5,000 at 5% annually for 20 years", output: "$13,266 (+$8,266)" },
          { input: "$1,000 at 10% quarterly for 5 years", output: "$1,639 (+$639)" },
        ]}
        useCases={[
          "Projecting how a savings account or ISA grows over time",
          "Estimating long-term investment portfolio value",
          "Comparing annual vs monthly compounding for the same rate",
          "Understanding how credit card or loan debt compounds when unpaid",
          "Illustrating the time value of money for financial planning",
        ]}
        faqs={faqs}
      />
    </>
  )
}
