import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { softwareApplicationSchema, faqSchema } from "@/lib/seo/schema"
import CalculatorShell from "@/components/calculator/CalculatorShell"
import Breadcrumb from "@/components/layout/Breadcrumb"
import SalesTaxWidget from "./CalculatorWidget"

const faqs = [
  {
    question: "What is 8% sales tax on $100?",
    answer: "8% tax on $100 is $8 — the total price is $108.",
  },
  {
    question: "What is 10% sales tax on $250?",
    answer: "10% tax on $250 is $25 — the total price is $275.",
  },
  {
    question: "How do you calculate sales tax?",
    answer: "Multiply the pre-tax price by the tax rate divided by 100. For example, 7% tax on $50 = $50 × 0.07 = $3.50 tax, total = $53.50.",
  },
  {
    question: "How do I find the pre-tax price from a total that includes tax?",
    answer: "Divide the total price by (1 + tax rate / 100). For example, if the total is $108 with 8% tax, the pre-tax price = $108 / 1.08 = $100.",
  },
  {
    question: "What is the US average sales tax rate?",
    answer: "The average combined US state and local sales tax rate is around 7–8%, though it varies by state and city. Some states have no sales tax at all.",
  },
  {
    question: "Is sales tax the same as VAT?",
    answer: "No. Sales tax is charged only at the final point of sale to the consumer. VAT (Value Added Tax) is charged at each stage of production and distribution, and is common in Europe.",
  },
]

export const metadata: Metadata = generatePageMetadata({
  title: "Sales Tax Calculator",
  description: "Enter a price and tax rate to instantly see the tax amount and total cost. Works for US sales tax, VAT, or any rate worldwide.",
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
        intro="Enter the pre-tax price and your local tax rate to see the tax amount and the total you'll pay. Works for US sales tax, UK VAT, or any other rate worldwide."
        calculator={<SalesTaxWidget />}
        howTo={[
          "Enter the pre-tax price in the first field.",
          "Enter the tax rate as a percentage (e.g. 8.5 for 8.5%).",
          "The tax amount and total price are shown instantly.",
        ]}
        formula="Tax Amount = (Tax Rate / 100) × Price"
        formulaExplained="Divide the tax rate by 100 to convert it to a decimal, then multiply by the pre-tax price. Add that to the original price to get the total."
        examples={[
          { input: "$200 at 5% tax", output: "$10 tax — $210 total" },
          { input: "$85 at 8% tax", output: "$6.80 tax — $91.80 total" },
          { input: "$500 at 20% VAT", output: "$100 tax — $600 total" },
        ]}
        useCases={[
          "Calculating the true cost of a purchase before checkout",
          "Preparing invoices with the correct tax amount",
          "Comparing prices across different tax jurisdictions",
          "Estimating VAT on business expenses",
          "Budgeting for large purchases with known tax rates",
        ]}
        faqs={faqs}
      />
    </>
  )
}
