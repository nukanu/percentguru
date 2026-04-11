import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { softwareApplicationSchema, faqSchema } from "@/lib/seo/schema"
import CalculatorShell from "@/components/calculator/CalculatorShell"
import Breadcrumb from "@/components/layout/Breadcrumb"
import InterestCalculatorWidget from "./CalculatorWidget"

const faqs = [
  {
    question: "What is simple interest?",
    answer: "Simple interest is calculated only on the principal (original) amount — not on accumulated interest. It grows linearly over time, making it straightforward to calculate but less common than compound interest for savings accounts.",
  },
  {
    question: "How much interest on $5,000 at 4% for 3 years?",
    answer: "Simple interest = $5,000 × 4% × 3 = $600. Total amount = $5,600.",
  },
  {
    question: "What is the simple interest formula?",
    answer: "Interest = Principal × Rate × Time / 100. For example, $1,000 at 5% for 2 years: Interest = $1,000 × 5 × 2 / 100 = $100.",
  },
  {
    question: "What is the difference between simple and compound interest?",
    answer: "Simple interest is calculated only on the principal each period. Compound interest is calculated on the principal plus any previously earned interest — so interest earns interest. Over time, compound interest produces significantly higher returns.",
  },
  {
    question: "How much interest on $10,000 at 6% for 5 years?",
    answer: "Simple interest = $10,000 × 6% × 5 = $3,000. Total = $13,000.",
  },
  {
    question: "When is simple interest used?",
    answer: "Simple interest is used for short-term loans, car loans, some personal loans, and basic savings calculations. Most bank savings accounts and mortgages use compound interest, which grows faster.",
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
        intro="Enter the principal amount, annual interest rate, and time in years — the calculator shows how much interest is earned and the total amount at the end of the period. Uses the simple interest formula (interest on principal only, not compounded)."
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
          "Estimating interest on a personal loan",
          "Calculating returns on short-term savings",
          "Understanding loan cost before borrowing",
          "Comparing different rate and term combinations",
          "Finance homework and exam preparation",
        ]}
        faqs={faqs}
      />
    </>
  )
}
