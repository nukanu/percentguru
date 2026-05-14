import type { Metadata } from "next"
import Link from "next/link"
import { generateHubMetadata } from "@/lib/seo/metadata"
import { faqSchema } from "@/lib/seo/schema"
import Breadcrumb from "@/components/layout/Breadcrumb"

export const metadata: Metadata = generateHubMetadata({
  hub: "finance",
  title: "Finance Calculators — Pricing, Loans, Savings & Returns",
  description:
    "Free finance calculators for mortgages, savings, salary, discounts, profit margin, VAT, loan payments, ROI, and more. Instant results, no sign-up.",
})

const faqs = [
  {
    question: "What's the difference between markup and profit margin?",
    answer: "Markup is based on cost — a 25% markup on an $80 item adds $20, selling for $100. Profit margin is based on revenue — that $20 profit on $100 revenue is a 20% margin. Same transaction, different denominators. Markup is always higher than the equivalent margin.",
  },
  {
    question: "How do I find total interest paid on a loan?",
    answer: "Enter the principal, annual rate, and term into the loan payment calculator. It shows both the monthly repayment and total interest — for example, $10,000 at 6% over 60 months costs $1,600 in interest. The mortgage calculator does the same for home loans.",
  },
  {
    question: "Can I use the ROI calculator for ad spend or projects?",
    answer: "Yes — the ROI calculator works for any investment with a measurable return. Enter what you spent and what you got back. It returns the percentage gain and net profit regardless of asset type — ad spend, equipment, a project, or a financial investment.",
  },
  {
    question: "What is break-even point and how do I calculate it?",
    answer: "Break-even is the number of units you need to sell to cover your fixed costs. Formula: Fixed Costs ÷ (Selling Price − Variable Cost per Unit). For example: $5,000 fixed costs, $30 selling price, $10 variable cost → break-even at 250 units.",
  },
  {
    question: "How is the discount calculator different from the percent off calculator?",
    answer: "The percent off calculator is designed for shoppers — enter a price tag and a discount label to find savings. The discount calculator is oriented towards businesses — it also shows the discount amount but is better suited for invoice discounts and trade pricing contexts.",
  },
]

const decisionGuide = [
  { question: "Setting a product price from cost", tool: "Markup Calculator", href: "/finance/markup-calculator/" },
  { question: "Measuring profit as % of revenue", tool: "Profit Margin Calculator", href: "/finance/profit-margin-calculator/" },
  { question: "Calculating monthly mortgage payment", tool: "Mortgage Calculator", href: "/finance/mortgage-calculator/" },
  { question: "Projecting savings growth over time", tool: "Savings Calculator", href: "/finance/savings-calculator/" },
  { question: "Converting annual salary to hourly rate", tool: "Salary to Hourly", href: "/finance/salary-to-hourly-calculator/" },
  { question: "Adding sales tax to a price", tool: "Sales Tax Calculator", href: "/finance/sales-tax-calculator/" },
  { question: "Estimating monthly loan repayment", tool: "Loan Payment Calculator", href: "/finance/loan-payment-calculator/" },
  { question: "Measuring return on investment", tool: "ROI Calculator", href: "/finance/roi-calculator/" },
  { question: "Finding units needed to cover costs", tool: "Break-Even Calculator", href: "/finance/break-even-calculator/" },
]

type CalcEntry = { slug: string; title: string; description: string }

const PERSONAL_FINANCE: CalcEntry[] = [
  { slug: "mortgage-calculator", title: "Mortgage Calculator", description: "Monthly payment and total interest from home price, down payment, rate, and term." },
  { slug: "savings-calculator", title: "Savings Calculator", description: "Future savings balance from initial deposit, monthly contributions, and interest rate." },
  { slug: "salary-to-hourly-calculator", title: "Salary to Hourly Calculator", description: "Annual salary → hourly, daily, weekly, and monthly pay breakdown." },
  { slug: "loan-payment-calculator", title: "Loan Payment Calculator", description: "Monthly repayment and total interest for any fixed-rate loan." },
  { slug: "compound-interest-calculator", title: "Compound Interest Calculator", description: "Total amount and interest earned with monthly, quarterly, or annual compounding." },
  { slug: "interest-calculator", title: "Simple Interest Calculator", description: "Simple interest earned or owed from principal, rate, and time." },
]

const BUSINESS_PRICING: CalcEntry[] = [
  { slug: "discount-calculator", title: "Discount Calculator", description: "Savings amount and final price from an original price and discount percentage." },
  { slug: "markup-calculator", title: "Markup Calculator", description: "Selling price from cost and a target markup percentage." },
  { slug: "profit-margin-calculator", title: "Profit Margin Calculator", description: "Gross margin as a percentage from revenue and cost." },
  { slug: "sales-tax-calculator", title: "Sales Tax Calculator", description: "Add any tax rate to a price — works for US sales tax." },
  { slug: "vat-calculator", title: "VAT Calculator", description: "Add or remove VAT at any rate, including UK 20%, 5%, and custom rates." },
  { slug: "cost-reduction-calculator", title: "Cost Reduction Calculator", description: "Savings amount and percentage cost reduction between two costs." },
  { slug: "weighted-average-calculator", title: "Weighted Average Calculator", description: "Average for values that don't carry equal weight." },
]

const INVESTMENT: CalcEntry[] = [
  { slug: "roi-calculator", title: "ROI Calculator", description: "Return percentage and net gain on any investment or project." },
  { slug: "break-even-calculator", title: "Break-Even Calculator", description: "Units needed to cover fixed costs before turning a profit." },
]

function CalcList({ items, hub = "finance" }: { items: CalcEntry[]; hub?: string }) {
  return (
    <ul className="space-y-2">
      {items.map((c) => (
        <li key={c.slug}>
          <Link
            href={`/${hub}/${c.slug}/`}
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

export default function FinancePage() {
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
            { name: "Finance Calculators", href: "/finance/" },
          ]}
        />

        <h1 className="text-3xl font-bold text-gray-900 mb-3">Finance Calculators</h1>
        <p className="text-gray-600 mb-5 text-lg">
          Free tools for real financial decisions — check a{" "}
          <Link href="/finance/mortgage-calculator/" className="text-blue-600 hover:underline">mortgage payment</Link>,
          project{" "}
          <Link href="/finance/savings-calculator/" className="text-blue-600 hover:underline">savings growth</Link>,
          set a{" "}
          <Link href="/finance/profit-margin-calculator/" className="text-blue-600 hover:underline">product margin</Link>,
          or find the{" "}
          <Link href="/finance/break-even-calculator/" className="text-blue-600 hover:underline">break-even point</Link>{" "}
          before you commit. All calculators run instantly in your browser. For percentage-only calculations, see the{" "}
          <Link href="/percentage/" className="text-blue-600 hover:underline">percentage calculators</Link>.
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
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Personal Finance</h2>
          <p className="text-sm text-gray-500 mb-4">Mortgages, savings, salary, and loans — planning your own money.</p>
          <CalcList items={PERSONAL_FINANCE} />
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Business &amp; Pricing</h2>
          <p className="text-sm text-gray-500 mb-4">Pricing, margins, tax, discounts — for products and services.</p>
          <CalcList items={BUSINESS_PRICING} />
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Investment &amp; Analysis</h2>
          <p className="text-sm text-gray-500 mb-4">ROI and break-even — measuring returns and viability.</p>
          <CalcList items={INVESTMENT} />
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
