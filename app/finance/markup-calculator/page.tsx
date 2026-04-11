import type { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { softwareApplicationSchema, faqSchema } from "@/lib/seo/schema"
import CalculatorShell from "@/components/calculator/CalculatorShell"
import Breadcrumb from "@/components/layout/Breadcrumb"
import MarkupCalculatorWidget from "./CalculatorWidget"

const faqs = [
  {
    question: "What is a 50% markup on $40?",
    answer: "A 50% markup on $40 adds $20, giving a selling price of $60.",
  },
  {
    question: "What is the difference between markup and margin?",
    answer: <>Markup is based on cost — it&apos;s what you add on top. Margin is based on revenue — it&apos;s the share of the selling price that&apos;s profit. A 50% markup gives a 33.3% margin, not 50%. If you need to work backwards from a target margin, use the <Link href="/finance/profit-margin-calculator/" className="text-blue-600 hover:underline">profit margin calculator</Link>.</>,
    schemaAnswer: "Markup is based on cost — it's what you add on top. Margin is based on revenue — it's the share of the selling price that's profit. A 50% markup gives a 33.3% margin, not 50%.",
  },
  {
    question: "What markup percentage gives a 50% profit margin?",
    answer: "A 100% markup gives a 50% profit margin. Example: cost $50, markup 100% → selling price $100 → margin = ($100 − $50) / $100 = 50%.",
  },
  {
    question: "How do you calculate markup percentage?",
    answer: "Markup % = ((Selling Price − Cost) / Cost) × 100. For example, if cost is $40 and selling price is $60, markup = ($20 / $40) × 100 = 50%.",
  },
  {
    question: "What is a 30% markup on $100?",
    answer: "A 30% markup on $100 adds $30, giving a selling price of $130.",
  },
  {
    question: "Is markup the same as profit?",
    answer: "Not exactly. Markup is the percentage added to cost to reach the selling price. Profit margin is the percentage of the selling price that is profit. They use different denominators.",
  },
]

export const metadata: Metadata = generatePageMetadata({
  title: "Markup Calculator — Calculate Selling Price from Cost",
  description: "Enter a cost price and markup percentage to get the selling price and profit amount instantly. Essential for retail pricing and margin planning.",
  path: "/finance/markup-calculator/",
  keywords: ["markup calculator", "markup percentage calculator", "cost to selling price", "price markup"],
})

export default function MarkupCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema("Markup Calculator", "Calculate selling price and markup amount from cost and markup percentage.")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <div className="mx-auto max-w-2xl px-4 pt-8">
        <Breadcrumb crumbs={[
          { name: "Home", href: "/" },
          { name: "Finance Calculators", href: "/finance/" },
          { name: "Markup Calculator", href: "/finance/markup-calculator/" },
        ]} />
      </div>
      <CalculatorShell
        slug="markup-calculator"
        title="Markup Calculator"
        intro="Enter what something costs you and the markup percentage you want to apply — the calculator gives you the selling price and the exact profit added. Used by retailers, freelancers, and anyone setting prices."
        calculator={<MarkupCalculatorWidget />}
        howTo={[
          "Enter the cost price — what you paid for the item or service.",
          "Enter the markup percentage you want to apply.",
          "The markup amount and final selling price appear instantly.",
        ]}
        formula="Selling Price = Cost × (1 + Markup % / 100)"
        formulaExplained="Divide the markup percentage by 100 to convert it to a decimal, add 1, then multiply by the cost price."
        examples={[
          { input: "Cost $50, markup 40%", output: "$20 added — $70 selling price" },
          { input: "Cost $200, markup 25%", output: "$50 added — $250 selling price" },
          { input: "Cost $12, markup 100%", output: "$12 added — $24 selling price" },
        ]}
        useCases={[
          "Setting retail prices from wholesale costs",
          "Pricing freelance work or services",
          "Calculating trade margins for resellers",
          "Determining menu prices from ingredient costs",
          "Applying a standard markup across a product range",
        ]}
        faqs={faqs}
      />
    </>
  )
}
