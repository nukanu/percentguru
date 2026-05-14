import type { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { softwareApplicationSchema, faqSchema } from "@/lib/seo/schema"
import CalculatorShell from "@/components/calculator/CalculatorShell"
import Breadcrumb from "@/components/layout/Breadcrumb"
import VatCalculatorWidget from "./CalculatorWidget"

const faqs = [
  {
    question: "What is the difference between net and gross?",
    answer: "Net (or ex-VAT) is the amount before VAT is added. Gross (or inc-VAT) is the total you actually pay, including VAT. For example, a £100 net price at 20% VAT has a gross price of £120 — you pay £120 and £20 of that goes to HMRC.",
  },
  {
    question: "How do I remove VAT from a price?",
    answer: "To reverse VAT and find the net price, divide the gross price by (1 + VAT rate). For 20% VAT: £120 ÷ 1.20 = £100 net. A common mistake is just subtracting 20% — that gives £96, not £100. Dividing by 1.20 is the correct method.",
  },
  {
    question: "What are the UK VAT rates?",
    answer: "The UK has three VAT rates: Standard rate (20%) applies to most goods and services. Reduced rate (5%) applies to domestic energy, children's car seats, and some home renovations. Zero rate (0%) applies to food, children's clothes, books, and most public transport. Some items are VAT-exempt entirely (financial services, education, healthcare).",
  },
  {
    question: "How much VAT is on a £100 item at 20%?",
    answer: "£20 VAT — giving a gross (inc-VAT) price of £120. Calculation: £100 × 0.20 = £20 VAT, £100 + £20 = £120 total.",
  },
  {
    question: "Is VAT the same as sales tax?",
    answer: <>VAT (Value Added Tax) and sales tax are both consumption taxes, but they work differently. Sales tax is collected only at the final sale to the consumer. VAT is collected at every stage of production and distribution, with businesses reclaiming VAT on purchases. For US sales tax calculations, use the <Link href="/finance/sales-tax-calculator/" className="text-blue-600 hover:underline">sales tax calculator</Link> instead.</>,
    schemaAnswer: "VAT and sales tax are both consumption taxes but work differently. Sales tax is collected only at the final sale. VAT is collected at every stage, with businesses reclaiming VAT on purchases. Use a sales tax calculator for US tax rates.",
  },
  {
    question: "What is a VAT-inclusive price?",
    answer: "A VAT-inclusive price (gross price) already includes VAT — it's what the customer pays. A VAT-exclusive price (net price) has no VAT included and is typically used for B2B invoicing where the buyer will reclaim the VAT. Prices shown in shops in the UK must include VAT by law; prices on B2B invoices are often shown net with VAT listed separately.",
  },
]

export const metadata: Metadata = generatePageMetadata({
  title: "VAT Calculator — Add or Remove VAT Instantly",
  description: "Add VAT to a net price or remove VAT from a gross price. Works for UK 20%, reduced 5%, and any custom VAT rate. Shows VAT amount, net, and gross.",
  path: "/finance/vat-calculator/",
  keywords: ["VAT calculator", "add VAT calculator", "remove VAT calculator", "VAT inclusive exclusive", "UK VAT calculator", "reverse VAT calculator"],
})

export default function VatCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema("VAT Calculator", "Add or remove VAT from any amount. Works for any VAT rate.")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <div className="mx-auto max-w-2xl px-4 pt-8">
        <Breadcrumb crumbs={[
          { name: "Home", href: "/" },
          { name: "Finance Calculators", href: "/finance/" },
          { name: "VAT Calculator", href: "/finance/vat-calculator/" },
        ]} />
      </div>
      <CalculatorShell
        slug="vat-calculator"
        title="VAT Calculator"
        intro={<>Switch between Add VAT (net → gross) and Remove VAT (gross → net), enter the amount and rate, and see the VAT amount and both prices instantly. Presets for the most common UK and EU rates — 5%, 10%, 20%, 25% — or enter any custom rate. The critical distinction: to remove VAT from a gross price you must divide by (1 + rate), not subtract the percentage — see the formula below. For US sales tax, the <Link href="/finance/sales-tax-calculator/" className="text-blue-600 hover:underline">sales tax calculator</Link> handles state and local rates.</>}
        whenToUse="Use this for any VAT calculation: quoting prices to customers, checking a supplier invoice, working out the net cost of a purchase for expense reclaiming, or verifying that a VAT return figure is correct. The remove-VAT mode is the most-misunderstood calculation in UK business accounting."
        calculator={<VatCalculatorWidget />}
        howTo={[
          "Choose 'Add VAT' to calculate a gross price from a net amount, or 'Remove VAT' to find the net from a gross.",
          "Enter the amount — net if adding, gross if removing.",
          "Select a preset rate or enter a custom VAT rate.",
          "VAT amount, net price, and gross price appear instantly.",
        ]}
        formula="Add VAT: Gross = Net × (1 + Rate/100)   |   Remove VAT: Net = Gross ÷ (1 + Rate/100)"
        formulaExplained="Adding 20% VAT: £100 × 1.20 = £120. Removing 20% VAT: £120 ÷ 1.20 = £100. The remove step uses division — not subtraction. Subtracting 20% from £120 gives £96 (wrong), because 20% of the gross is more than 20% of the net."
        examples={[
          { input: "Add 20% VAT to £150", output: "£30 VAT — £180 gross" },
          { input: "Remove 20% VAT from £240", output: "£40 VAT — £200 net" },
          { input: "Add 5% VAT to £800", output: "£40 VAT — £840 gross" },
          { input: "Remove 5% VAT from £420", output: "£20 VAT — £400 net" },
        ]}
        useCases={[
          "Writing customer invoices with VAT broken out",
          "Calculating VAT to reclaim on business purchases",
          "Verifying supplier invoices and expense receipts",
          "Pricing products for VAT-registered customers vs consumers",
          "Completing quarterly VAT returns",
        ]}
        faqs={faqs}
      />
    </>
  )
}
