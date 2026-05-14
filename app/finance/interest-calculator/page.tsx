import type { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { softwareApplicationSchema, faqSchema } from "@/lib/seo/schema"
import CalculatorShell from "@/components/calculator/CalculatorShell"
import Breadcrumb from "@/components/layout/Breadcrumb"
import InterestCalculatorWidget from "./CalculatorWidget"

const faqs = [
  {
    question: "What is simple interest?",
    answer: "Simple interest is calculated only on the principal — not on previously accumulated interest. It grows linearly: $1,000 at 5% for 3 years earns the same $50/year each year, totalling $150.",
  },
  {
    question: "How much interest on $5,000 at 4% for 3 years?",
    answer: "Simple interest = $5,000 × 4% × 3 = $600. Total amount = $5,600.",
  },
  {
    question: "How much interest on $10,000 at 6% for 5 years?",
    answer: "Simple interest = $10,000 × 6% × 5 = $3,000. Total = $13,000.",
  },
  {
    question: "What is the simple interest formula?",
    answer: "Interest = Principal × Rate × Time / 100. For example, $2,000 at 5% for 4 years: $2,000 × 5 × 4 / 100 = $400 interest.",
  },
  {
    question: "What is the difference between simple and compound interest?",
    answer: "Simple interest is calculated on the principal only. Compound interest is calculated on the principal plus any previously earned interest — so interest earns interest. Over time, compound interest produces significantly higher returns or costs.",
  },
  {
    question: "When is simple interest used?",
    answer: <>Simple interest applies to many short-term personal loans, car loans, and basic bonds. Most savings accounts and mortgages use compound interest. If you&apos;re evaluating a loan, the <Link href="/finance/loan-payment-calculator/" className="text-blue-600 hover:underline">loan payment calculator</Link> uses the compound formula to give you the actual monthly payment.</>  ,
    schemaAnswer: "Simple interest applies to many short-term personal loans, car loans, and basic bonds. Most savings accounts and mortgages use compound interest. The loan payment calculator uses the compound formula for actual monthly repayments.",
  },
]

export const metadata: Metadata = generatePageMetadata({
  title: "Simple Interest Calculator",
  description: "Calculate simple interest on any principal amount. Enter principal, annual rate, and time in years to see interest earned and total amount.",
  path: "/finance/interest-calculator/",
  keywords: ["simple interest calculator", "interest calculator", "calculate interest", "principal rate time"],
})

export default function InterestCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema("Simple Interest Calculator", "Calculate simple interest and total amount from principal, rate, and time.")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <div className="mx-auto max-w-2xl px-4 pt-8">
        <Breadcrumb crumbs={[
          { name: "Home", href: "/" },
          { name: "Finance Calculators", href: "/finance/" },
          { name: "Simple Interest Calculator", href: "/finance/interest-calculator/" },
        ]} />
      </div>
      <CalculatorShell
        slug="interest-calculator"
        title="Simple Interest Calculator"
        intro={<>Enter the principal, annual interest rate, and number of years to see how much interest accrues and the total at the end. Uses the simple interest formula — interest on the original principal only, with no compounding. This tends to underestimate the cost of most real-world loans, which compound monthly, but it&apos;s accurate for short-term loans, some bonds, and quick estimates. For loans with monthly repayments, the <Link href="/finance/loan-payment-calculator/" className="text-blue-600 hover:underline">loan payment calculator</Link> applies the compound formula used by most lenders. If you&apos;re evaluating whether borrowing makes sense for a business, combine this with the <Link href="/finance/break-even-calculator/" className="text-blue-600 hover:underline">break-even calculator</Link> to see how long until you cover the interest cost.</>}
        whenToUse="Use this for a quick interest estimate, for short-term personal or informal loans, for fixed-rate savings bonds that pay simple interest, or when doing coursework that specifically requires the simple interest formula."
        calculator={<InterestCalculatorWidget />}
        howTo={[
          "Enter the principal — the starting amount of money.",
          "Enter the annual interest rate as a percentage.",
          "Enter the time period in years.",
          "Interest earned and total amount appear instantly.",
        ]}
        formula="Interest = Principal × Rate × Time / 100"
        formulaExplained="Multiply the principal by the annual rate percentage and the number of years, then divide by 100. Add the interest to the principal to get the total amount."
        examples={[
          { input: "Principal $2,000, Rate 5%, Time 4 years", output: "$400 interest — $2,400 total" },
          { input: "Principal $500, Rate 8%, Time 2 years", output: "$80 interest — $580 total" },
          { input: "Principal $15,000, Rate 3%, Time 10 years", output: "$4,500 interest — $19,500 total" },
        ]}
        useCases={[
          "Estimating interest on a short-term personal loan",
          "Calculating returns on a fixed-rate savings bond",
          "Understanding the basic cost of borrowing before applying",
          "Comparing different rate and term combinations quickly",
          "Finance coursework and exam preparation",
        ]}
        faqs={faqs}
      />
    </>
  )
}
