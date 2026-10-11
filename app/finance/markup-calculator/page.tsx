import type { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { softwareApplicationSchema, faqSchema } from "@/lib/seo/schema"
import CalculatorShell from "@/components/calculator/CalculatorShell"
import Breadcrumb from "@/components/layout/Breadcrumb"
import MarkupCalculatorWidget from "./CalculatorWidget"
import PricingComparisonWidget from "./PricingComparisonWidget"

const faqs = [
  {
    question: "How do you calculate markup percentage?",
    answer: "Markup % = ((Selling Price − Cost) / Cost) × 100. For a product that costs $40 and sells for $60: $20 / $40 × 100 = 50%. Enter cost and selling price above and leave markup empty to get it without the arithmetic.",
  },
  {
    question: "What markup do I need for a 40% profit margin?",
    answer: "66.67%. Convert with markup = margin / (1 − margin): 0.40 / 0.60 = 0.6667. Applying a 40% markup instead leaves you with a 28.57% margin, which is why prices set by \"adding 40%\" so often come up short.",
  },
  {
    question: "What is the difference between markup and margin?",
    answer: <>Markup is profit measured against cost. Margin is the same profit measured against the selling price. A 50% markup gives a 33.33% margin, not 50%. If you are starting from a sale you have already made, the <Link href="/finance/profit-margin-calculator/" className="text-blue-600 hover:underline">profit margin calculator</Link> is the quicker route.</>,
    schemaAnswer: "Markup is profit measured against cost. Margin is the same profit measured against the selling price. A 50% markup gives a 33.33% margin, not 50%.",
  },
  {
    question: "What is keystone pricing?",
    answer: "Keystone is retail shorthand for doubling the wholesale cost: a 100% markup, which is a 50% margin. It is a starting convention for gifts, clothing and homeware, not a rule — groceries and electronics sell on far thinner markups, jewellery and cosmetics on much higher ones.",
  },
  {
    question: "Can markup be more than 100%?",
    answer: "Yes. Markup has no upper limit because it is measured against cost. A $5 item sold for $20 carries a 300% markup. Margin on that same sale is 75%, and margin can never reach 100%.",
  },
  {
    question: "Which costs should I mark up — just the product, or shipping and packaging too?",
    answer: "Mark up the full cost of getting one unit ready to sell: the product, inbound shipping, packaging and any per-unit duties. A $8 product with $2 of freight and packaging costs you $10. Mark up only the $8 by 50% and you charge $12, which is a 20% markup on what you really spent.",
  },
  {
    question: "What is a 50% markup on $40?",
    answer: "A 50% markup on $40 adds $20, giving a selling price of $60.",
  },
  {
    question: "How does markup affect ROI?",
    answer: <>A higher markup increases the gross profit on each unit sold, which directly affects your return on inventory investment. If you want to measure the return on what you&apos;ve invested in stock, the <Link href="/finance/roi-calculator/" className="text-blue-600 hover:underline">ROI calculator</Link> can quantify that return once you know your selling price and cost.</>,
    schemaAnswer: "A higher markup increases the gross profit on each unit sold, which directly affects your return on inventory investment. Use the ROI calculator to quantify that return once you know your selling price and cost.",
  },
]

const conversionRows = [
  ["10%", "9.09%", "× 1.10"],
  ["20%", "16.67%", "× 1.20"],
  ["25%", "20%", "× 1.25"],
  ["30%", "23.08%", "× 1.30"],
  ["40%", "28.57%", "× 1.40"],
  ["50%", "33.33%", "× 1.50"],
  ["75%", "42.86%", "× 1.75"],
  ["100%", "50%", "× 2.00"],
  ["150%", "60%", "× 2.50"],
  ["200%", "66.67%", "× 3.00"],
]

export const metadata: Metadata = generatePageMetadata({
  title: "Markup Calculator — Selling Price, Markup % & Margin",
  description: "Enter any two of cost, markup percentage and selling price to get the third, plus profit and margin. Compare two pricing options side by side.",
  path: "/finance/markup-calculator/",
  keywords: ["markup calculator", "markup percentage calculator", "how to calculate markup", "percent markup calculator", "cost to selling price", "markup vs margin"],
})

export default function MarkupCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema("Markup Calculator", "Find selling price, markup percentage or cost from any two of the three, with profit and margin, and compare two pricing options.")) }}
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
        intro={<>Fill in any two of cost, markup percentage and selling price and the calculator finds the third, along with your profit per sale and the margin it leaves. Use it to set a price from what an item cost you, to find the markup hiding in a price you already charge, or to work back to the most you can pay a supplier. One trap to know before you start: markup is measured on cost and margin on price, so a 50% markup is a 33.33% margin, not 50%. The <Link href="/guides/markup-vs-margin/" className="text-blue-600 hover:underline">markup vs margin guide</Link> explains the difference in full.</>}
        whenToUse="Use this when pricing products you buy and resell or make yourself — retail, wholesale, market stalls, online shops, food service. It is also the quick way to check a supplier's price list, or to see what a cost increase does to your selling price if you hold the same markup."
        calculator={<MarkupCalculatorWidget />}
        secondaryTool={
          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Compare Two Pricing Options — Which Earns More?</h2>
            <p className="text-gray-700 mb-4 leading-relaxed text-sm">
              The highest markup is not always the most profitable price. Charging $25 for something that costs $10 earns $15 a sale; charging $20 earns $10 — but if the lower price sells 70 units instead of 40, it brings in $700 against $600. Enter two options below, with the number of units you expect each to sell, and see which leaves you with more money. Copy the link to share the comparison with a business partner.
            </p>
            <PricingComparisonWidget />
          </section>
        }
        howTo={[
          "Work out your cost per unit, including shipping and packaging you pay.",
          "Decide the markup percentage you want to add.",
          "Divide the markup percentage by 100 and add 1 — a 40% markup becomes 1.40.",
          "Multiply the cost by that number to get the selling price.",
          "To find markup from a price instead, subtract cost from price, divide by cost, and multiply by 100.",
        ]}
        formula="Selling Price = Cost × (1 + Markup % / 100)"
        formulaExplained="For a 40% markup on $50: $50 × 1.40 = $70. Reversed, Markup % = (Price − Cost) / Cost × 100, so ($70 − $50) / $50 × 100 = 40%."
        examples={[
          { input: "Cost $50, markup 40%", output: "$70 price — 28.57% margin" },
          { input: "Cost $18, sells for $45", output: "150% markup — $27 profit" },
          { input: "Sells for $120, markup 60%", output: "$75 cost — $45 profit" },
        ]}
        useCases={[
          "Setting retail prices from wholesale costs",
          "Finding the markup on a price you already charge",
          "Working out the most you can pay a supplier and still hit your price",
          "Determining menu prices from ingredient costs",
          "Repricing after a supplier raises costs",
        ]}
        faqs={faqs}
        lookupTable={
          <>
            <h2 className="text-lg font-bold text-gray-900 mb-3">Advanced Scenarios</h2>
            <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Leaving room for a sale</h3>
                <p>A $40 item marked up 50% sells for $60. Run a 20% promotion and the price drops to $48, which is only a 20% markup. To still earn 50% after a 20% discount, set the list price at $60 / 0.80 = $75. Check any promotion with the <Link href="/finance/discount-calculator/" className="text-blue-600 hover:underline">discount calculator</Link> before you announce it.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Fees that are a percentage of the price</h3>
                <p>Marketplace and card fees are taken from the selling price, so they cannot simply be added to cost. At a $60 price with 10% in fees you keep $54, which is a 35% markup on a $40 cost. To keep $60 after a 10% fee, charge $60 / 0.90 = $66.67.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">When your supplier raises prices</h3>
                <p>Holding the same markup percentage passes on more than the increase. If cost rises from $40 to $44 at a 50% markup, the price goes from $60 to $66: the customer pays $6 more for a $4 increase. Holding the same dollar profit instead gives $64. Decide which one you are protecting.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Prices that include VAT or sales tax</h3>
                <p>Markup is worked out on the price before tax. If your shelf price must include 20% VAT, calculate the marked-up price first, then add the tax with the <Link href="/finance/vat-calculator/" className="text-blue-600 hover:underline">VAT calculator</Link>. Marking up a tax-inclusive figure overstates your profit.</p>
              </div>
            </div>

            <h2 className="text-lg font-bold text-gray-900 mt-8 mb-3">Markup to Margin Conversion Table</h2>
            <p className="text-sm text-gray-600 mb-3">What each markup leaves as margin. Margin = markup / (1 + markup).</p>
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="text-left px-4 py-2 font-semibold">Markup on cost</th>
                  <th className="text-left px-4 py-2 font-semibold">Profit margin</th>
                  <th className="text-left px-4 py-2 font-semibold">Multiply cost by</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {conversionRows.map(([markup, margin, multiplier]) => (
                  <tr key={markup} className="border-t border-gray-200">
                    <td className="px-4 py-2">{markup}</td>
                    <td className="px-4 py-2">{margin}</td>
                    <td className="px-4 py-2">{multiplier}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        }
      />
    </>
  )
}
