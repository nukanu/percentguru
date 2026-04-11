import type { Metadata } from "next"
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
    answer: "Markup is calculated on cost — it's how much you add on top. Margin is calculated on revenue — it's how much of the selling price is profit. A 50% markup does not equal a 50% margin.",
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
  description: "Calculate the selling price and markup amount from a cost price and markup percentage. Free and instant.",
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
        intro="Enter the cost price and your desired markup percentage to find the selling price and the exact amount added. Used for pricing products, setting wholesale rates, and calculating margins."
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
