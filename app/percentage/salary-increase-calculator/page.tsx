import type { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { softwareApplicationSchema, faqSchema } from "@/lib/seo/schema"
import CalculatorShell from "@/components/calculator/CalculatorShell"
import Breadcrumb from "@/components/layout/Breadcrumb"
import SalaryIncreaseWidget from "./CalculatorWidget"
import RaiseComparisonWidget from "./RaiseComparisonWidget"

const faqs = [
  {
    question: "How do I calculate a 5% raise on a $60,000 salary?",
    answer: "Multiply $60,000 by 0.05 to get the raise amount: $3,000. Add that to your current salary for a new salary of $63,000.",
  },
  {
    question: "What is a good salary increase percentage?",
    answer: "Cost-of-living adjustments are typically 2–4%. Merit-based raises usually range from 3–7%. Promotions or job changes often carry 10–20% increases. If inflation is running at 5% and you receive a 3% raise, your real purchasing power has declined.",
  },
  {
    question: "How much is a 10% raise on $50,000?",
    answer: "10% of $50,000 is $5,000. Your new salary would be $55,000 per year, or roughly $416 more per month before tax.",
  },
  {
    question: "Is a 3% raise good if inflation is 4%?",
    answer: "In real terms, no — it's a pay cut. A 3% raise against 4% inflation works out to a real change of about −0.96% per year: your salary number goes up, but it buys less than it did. Use the scenario comparison on this page with the inflation field filled in to see the real value of any offer.",
  },
  {
    question: "How much difference does a 2% bigger annual raise make over 5 years?",
    answer: "Far more than it sounds, because raises compound. On a $60,000 salary, 5% annual raises reach $76,577 after 5 years, while 3% raises reach $69,556 — a gap of about $7,000 per year, and roughly $20,000 in extra total pay accumulated along the way. This is why negotiating even one extra percentage point matters.",
  },
  {
    question: "How do I ask for a raise using a specific percentage?",
    answer: "Know the market rate for your role first, then calculate what percentage increase you need to match it. For example, if market rate is $75,000 and you earn $68,000, that's roughly a 10.3% gap — that number makes a concrete, data-driven request.",
  },
  {
    question: "Does this work for hourly pay?",
    answer: "Yes — enter your hourly rate as the current salary and the result will be your new hourly rate and the raise per hour. For example, going from $22/hr to a 6% raise: $22 × 0.06 = $1.32 raise, new rate $23.32/hr.",
  },
]

export const metadata: Metadata = generatePageMetadata({
  title: "Salary Increase Calculator — Raise Amount & Scenario Comparison",
  description: "See what a raise adds to your pay, then compare two raise scenarios over multiple years — with inflation adjustment — to know what an offer is really worth.",
  path: "/percentage/salary-increase-calculator/",
  keywords: ["salary increase calculator", "raise calculator", "percentage raise calculator", "compare raise offers", "real raise after inflation", "salary raise percentage"],
})

export default function SalaryIncreasePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema("Salary Increase Calculator", "Calculate how much a percentage raise adds to your annual salary, and compare two raise scenarios over time with inflation adjustment.")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <div className="mx-auto max-w-2xl px-4 pt-8">
        <Breadcrumb crumbs={[
          { name: "Home", href: "/" },
          { name: "Percentage Calculators", href: "/percentage/" },
          { name: "Salary Increase Calculator", href: "/percentage/salary-increase-calculator/" },
        ]} />
      </div>
      <CalculatorShell
        slug="salary-increase-calculator"
        title="Salary Increase Calculator"
        intro={<>Enter your current salary and raise percentage to instantly see the dollar amount of your raise and your new annual salary. Useful before a performance review, when comparing job offers, or when checking whether a raise keeps pace with inflation. For context on how your raise compares to the starting point, see the <Link href="/percentage/percentage-increase-calculator/" className="text-blue-600 hover:underline">percentage increase calculator</Link>.</>}
        whenToUse="Use this before a salary negotiation to set a concrete target, or after receiving a raise offer to see what it means in actual dollars. Also handy for HR professionals calculating team compensation changes."
        calculator={<SalaryIncreaseWidget />}
        secondaryTool={
          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Compare Two Raise Scenarios Over Time</h2>
            <p className="text-gray-700 mb-4 leading-relaxed text-sm">
              A single-year raise number hides what actually matters: raises compound. The difference between 3% and 5% looks like pocket change in year one, but repeated annually it becomes a five-figure gap. Enter two scenarios — a raise you were offered vs the one you&apos;re asking for, or two competing job offers — and see the salaries side by side after any number of years. Add expected inflation to see each raise in real purchasing-power terms, which is the honest way to judge whether an offer is a raise at all. The copy-link button gives you a URL that reopens this exact comparison — useful mid-negotiation.
            </p>
            <RaiseComparisonWidget />
          </section>
        }
        howTo={[
          "Enter your current salary (annual, monthly, or hourly — any unit works).",
          "Enter the raise percentage — for example, 5 for a 5% raise.",
          "See your raise amount and new salary instantly.",
        ]}
        formula="New Salary = Current Salary × (1 + Raise% ÷ 100)"
        formulaExplained="Divide the raise percentage by 100 to convert to a decimal, add 1, then multiply by your current salary. For a 7% raise on $55,000: 1 + 0.07 = 1.07, then $55,000 × 1.07 = $58,850."
        examples={[
          { input: "5% raise on $60,000", output: "+$3,000 → $63,000" },
          { input: "10% raise on $45,000", output: "+$4,500 → $49,500" },
          { input: "3% raise on $85,000", output: "+$2,550 → $87,550" },
        ]}
        useCases={[
          "Evaluating a job offer where salary is expressed as a % increase over current pay",
          "Checking whether a cost-of-living adjustment keeps up with inflation",
          "Calculating team payroll impact for managers approving multiple raises",
          "Comparing two job offers that use different raise structures",
          "Setting a target number before a performance review conversation",
        ]}
        faqs={faqs}
      />
    </>
  )
}
