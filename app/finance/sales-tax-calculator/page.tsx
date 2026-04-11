import type { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { softwareApplicationSchema, faqSchema } from "@/lib/seo/schema"
import CalculatorShell from "@/components/calculator/CalculatorShell"
import Breadcrumb from "@/components/layout/Breadcrumb"
import SalesTaxWidget from "./CalculatorWidget"

const faqs = [
  {
    question: "What is 8% sales tax on $150?",
    answer: "8% tax on $150 is $12 — the total price is $162.",
  },
  {
    question: "What is 20% VAT on £85?",
    answer: "20% VAT on £85 is £17 — the total is £102. UK standard VAT rate is 20%, applied to most goods and services.",
  },
  {
    question: "How do you calculate sales tax?",
    answer: "Multiply the pre-tax price by the tax rate divided by 100. For example, 7.5% tax on $200: $200 × 0.075 = $15 tax, total = $215.",
  },
  {
    question: "How do I find the pre-tax price from a total that already includes tax?",
    answer: <>Divide the total by (1 + tax rate / 100). If the total is $108 with 8% tax: $108 / 1.08 = $100 pre-tax. Alternatively, use the <Link href="/percentage/reverse-percentage-calculator/" className="text-blue-600 hover:underline">reverse percentage calculator</Link> — enter 108% and $108 to get the same result.</>,
    schemaAnswer: "Divide the total by (1 + tax rate / 100). If the total is $108 with 8% tax: $108 / 1.08 = $100 pre-tax.",
  },
  {
    question: "What is the US average sales tax rate?",
    answer: "The average combined US state and local sales tax rate is around 7–8%, but it varies significantly. Some states (Oregon, Montana, New Hampshire) have no sales tax at all. Others (Tennessee, Louisiana) exceed 9% when local rates are included.",
  },
  {
    question: "Is sales tax the same as VAT?",
    answer: "No. Sales tax is charged only to the final consumer at the point of sale. VAT (Value Added Tax) is charged at each stage of production and distribution, with businesses reclaiming input VAT. The end consumer pays a similar amount either way, but the collection mechanism differs. This calculator works for both.",
  },
]

export const metadata: Metadata = generatePageMetadata({
  title: "Sales Tax Calculator",
  description: "Enter a price and tax rate to instantly see the tax amount and total cost. Works for US sales tax, UK VAT, or any rate worldwide.",
  path: "/finance/sales-tax-calculator/",
  keywords: ["sales tax calculator", "tax calculator", "calculate sales tax", "price with tax"],
})

export default function SalesTaxPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema("Sales Tax Calculator", "Calculate sales tax amount and total price including tax.")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <div className="mx-auto max-w-2xl px-4 pt-8">
        <Breadcrumb crumbs={[
          { name: "Home", href: "/" },
          { name: "Finance Calculators", href: "/finance/" },
          { name: "Sales Tax Calculator", href: "/finance/sales-tax-calculator/" },
        ]} />
      </div>
      <CalculatorShell
        slug="sales-tax-calculator"
        title="Sales Tax Calculator"
        intro={<>Enter the pre-tax price and your local tax rate to see the exact tax amount and final total. Works for US sales tax, UK VAT, EU VAT, or any percentage-based tax worldwide. If you need to work backwards from a price that already includes tax, the <Link href="/percentage/reverse-percentage-calculator/" className="text-blue-600 hover:underline">reverse percentage calculator</Link> can recover the pre-tax amount.</>}
        calculator={<SalesTaxWidget />}
        howTo={[
          "Enter the pre-tax price in the first field.",
          "Enter the tax rate as a percentage (e.g. 8.5 for 8.5%).",
          "The tax amount and total price are shown instantly.",
        ]}
        formula="Tax Amount = (Tax Rate / 100) × Price"
        formulaExplained="Divide the tax rate by 100 to convert to a decimal, then multiply by the pre-tax price. Add the result to the original price for the total amount due."
        examples={[
          { input: "$200 at 5% tax", output: "$10 tax — $210 total" },
          { input: "$85 at 8.875% tax", output: "$7.54 tax — $92.54 total" },
          { input: "£400 at 20% VAT", output: "£80 tax — £480 total" },
        ]}
        useCases={[
          "Checking the true cost of a purchase before reaching the checkout",
          "Preparing invoices with the correct tax amount",
          "Comparing prices across different tax jurisdictions",
          "Estimating VAT on business expenses for accounting purposes",
          "Budgeting for large purchases where tax significantly affects the total",
        ]}
        faqs={faqs}
      />
    </>
  )
}
