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
    question: "What is a 30% markup on $100?",
    answer: "A 30% markup on $100 adds $30, giving a selling price of $130.",
  },
  {
    question: "What is the difference between markup and margin?",
    answer: <>Markup is based on cost — it&apos;s the amount added on top. Margin is based on revenue — it&apos;s the share of the selling price that is profit. A 50% markup gives a 33.3% margin, not 50%. If you need to target a specific profit margin rather than markup, use the <Link href="/finance/profit-margin-calculator/" className="text-blue-600 hover:underline">profit margin calculator</Link>.</>,
    schemaAnswer: "Markup is based on cost — it's the amount added on top. Margin is based on revenue — it's the share of the selling price that is profit. A 50% markup gives a 33.3% margin, not 50%.",
  },
  {
    question: "What markup percentage gives a 50% profit margin?",
    answer: "A 100% markup gives a 50% profit margin. Example: cost $50 → markup 100% → selling price $100 → margin = ($100 − $50) / $100 = 50%.",
  },
  {
    question: "How do you calculate markup percentage?",
    answer: "Markup % = ((Selling Price − Cost) / Cost) × 100. For example, cost $40, selling price $60: ($20 / $40) × 100 = 50%.",
  },
  {
    question: "How does markup affect ROI?",
    answer: <>A higher markup increases the gross profit on each unit sold, which directly affects your return on inventory investment. If you want to measure the return on what you&apos;ve invested in stock, the <Link href="/finance/roi-calculator/" className="text-blue-600 hover:underline">ROI calculator</Link> can quantify that return once you know your selling price and cost.</>,
    schemaAnswer: "A higher markup increases the gross profit on each unit sold, which directly affects your return on inventory investment. Use the ROI calculator to quantify that return once you know your selling price and cost.",
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
        intro={<>Enter the cost and the markup percentage — the calculator returns the selling price and exact profit amount. The right tool when you&apos;re pricing from a known cost. One thing many people get wrong: a 50% markup does not equal a 50% profit margin — markup is on cost, margin is on revenue, so a 50% markup gives a 33.3% margin. If you&apos;re working backwards from a target margin instead, the <Link href="/finance/profit-margin-calculator/" className="text-blue-600 hover:underline">profit margin calculator</Link> is more direct.</>}
        whenToUse="Use this when setting prices for products you buy and resell — retail, wholesale, food service, or freelance work where you need a consistent margin over your cost. Also useful for quickly testing how a change in cost or markup affects the final selling price."
        calculator={<MarkupCalculatorWidget />}
        howTo={[
          "Enter the cost price — what you paid for the item or service.",
          "Enter the markup percentage you want to apply.",
          "The markup amount and final selling price appear instantly.",
        ]}
        formula="Selling Price = Cost × (1 + Markup % / 100)"
        formulaExplained="Divide the markup percentage by 100, add 1, then multiply by the cost. For a 40% markup on $50: $50 × 1.40 = $70."
        examples={[
          { input: "Cost $50, markup 40%", output: "$20 added — $70 selling price" },
          { input: "Cost $200, markup 25%", output: "$50 added — $250 selling price" },
          { input: "Cost $18, markup 150%", output: "$27 added — $45 selling price" },
        ]}
        useCases={[
          "Setting retail prices from wholesale costs",
          "Pricing freelance work or professional services",
          "Calculating trade margins for resellers and distributors",
          "Determining menu prices from ingredient costs",
          "Applying a consistent markup across a product catalogue",
        ]}
        faqs={faqs}
      />
    </>
  )
}
