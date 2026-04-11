import type { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { softwareApplicationSchema, faqSchema } from "@/lib/seo/schema"
import CalculatorShell from "@/components/calculator/CalculatorShell"
import Breadcrumb from "@/components/layout/Breadcrumb"
import LoanPaymentCalculatorWidget from "./CalculatorWidget"

const faqs = [
  {
    question: "What is the monthly payment on a $10,000 loan at 6% for 60 months?",
    answer: "The monthly payment is approximately $193.33. Over 60 months that totals $11,599.68 — $1,599.68 in interest.",
  },
  {
    question: "What is the monthly payment on a $20,000 loan at 5% for 36 months?",
    answer: "The monthly payment is approximately $599.42. Total paid over 36 months is $21,579.12 — $1,579.12 in interest.",
  },
  {
    question: "What is the loan payment formula?",
    answer: "Monthly Payment = P × r × (1 + r)^n / ((1 + r)^n − 1), where P is the loan amount, r is the monthly rate (annual rate ÷ 12 ÷ 100), and n is the total number of monthly payments.",
  },
  {
    question: "How does the interest rate affect my monthly payment?",
    answer: "Even a 1% rate difference compounds significantly. On a $10,000 loan over 60 months, raising the rate from 5% to 8% increases monthly payments by about $15 and costs roughly $900 more in total interest.",
  },
  {
    question: "What happens if I enter 0% interest?",
    answer: "At 0% interest, the monthly payment is simply the loan amount divided by the number of months — no interest added. For example, $6,000 at 0% over 24 months = $250/month.",
  },
  {
    question: "How can I reduce total interest paid?",
    answer: <>Two main levers: lower the interest rate (better credit, refinancing, or negotiation) or shorten the loan term. A shorter term increases monthly payments but reduces total interest substantially. You can also use the <Link href="/finance/roi-calculator/" className="text-blue-600 hover:underline">ROI calculator</Link> to evaluate whether it makes more financial sense to pay down a loan early versus investing the same cash.</>,
    schemaAnswer: "Two main levers: lower the interest rate or shorten the loan term. A shorter term increases monthly payments but reduces total interest. You can also evaluate whether it makes more financial sense to pay down a loan early versus investing the same cash.",
  },
]

export const metadata: Metadata = generatePageMetadata({
  title: "Loan Payment Calculator — Monthly Payment & Total Interest",
  description: "Calculate your monthly loan payment and total interest. Enter loan amount, annual rate, and term in months for instant results.",
  path: "/finance/loan-payment-calculator/",
  keywords: ["loan payment calculator", "monthly payment calculator", "loan calculator", "calculate loan repayment"],
})

export default function LoanPaymentCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema("Loan Payment Calculator", "Calculate monthly loan payment and total interest from loan amount, rate, and term.")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <div className="mx-auto max-w-2xl px-4 pt-8">
        <Breadcrumb crumbs={[
          { name: "Home", href: "/" },
          { name: "Finance Calculators", href: "/finance/" },
          { name: "Loan Payment Calculator", href: "/finance/loan-payment-calculator/" },
        ]} />
      </div>
      <CalculatorShell
        slug="loan-payment-calculator"
        title="Loan Payment Calculator"
        intro={<>Enter the loan amount, annual interest rate, and term in months to see the exact monthly payment and total interest paid over the life of the loan. Works for personal loans, car loans, or any fixed-rate instalment loan. Most people focus only on the monthly payment — but total interest is equally important: a longer term lowers the monthly cost while significantly increasing what you pay overall. For a quick estimate without monthly compounding, the <Link href="/finance/interest-calculator/" className="text-blue-600 hover:underline">simple interest calculator</Link> gives a rough approximation.</>}
        whenToUse="Use this before applying for a loan to understand the real monthly commitment and total cost, when comparing two loan offers with different rates or terms, or when evaluating whether to pay off a loan early by seeing how much remaining interest you would avoid."
        calculator={<LoanPaymentCalculatorWidget />}
        howTo={[
          "Enter the loan amount — the total you are borrowing.",
          "Enter the annual interest rate as a percentage.",
          "Enter the loan term in months (e.g. 36 for 3 years, 60 for 5 years).",
          "Monthly payment and total interest appear instantly.",
        ]}
        formula="PMT = P × r × (1 + r)^n / ((1 + r)^n − 1)"
        formulaExplained="P is the loan amount, r is the monthly rate (annual rate ÷ 12 ÷ 100), and n is the number of monthly payments. Multiply the monthly payment by n to get total amount paid; subtract principal to find total interest."
        examples={[
          { input: "$15,000 at 7% over 48 months", output: "$358.74/month — $2,219.52 total interest" },
          { input: "$5,000 at 10% over 24 months", output: "$230.72/month — $537.28 total interest" },
          { input: "$30,000 at 4.5% over 72 months", output: "$468.19/month — $3,709.68 total interest" },
        ]}
        useCases={[
          "Planning a personal or car loan before applying",
          "Comparing loan offers with different rates and terms",
          "Understanding total interest cost before signing",
          "Budgeting for a new fixed monthly debt obligation",
          "Evaluating the financial impact of refinancing",
        ]}
        faqs={faqs}
      />
    </>
  )
}
