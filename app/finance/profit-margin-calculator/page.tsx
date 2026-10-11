import type { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { softwareApplicationSchema, faqSchema } from "@/lib/seo/schema"
import CalculatorShell from "@/components/calculator/CalculatorShell"
import Breadcrumb from "@/components/layout/Breadcrumb"
import ProfitMarginWidget from "./CalculatorWidget"

const faqs = [
  {
    question: "Is percent profit the same as profit margin?",
    answer: "Only if you divide by the selling price. \"Percent profit\" is used loosely for two different numbers: profit as a share of the selling price (margin) and profit as a share of what you paid (markup). Buy for $12, sell for $20 and the $8 profit is a 40% margin but a 66.67% markup. Accountants and marketplaces report margin; suppliers and price lists usually quote markup. This calculator shows both so you can see which one a figure refers to.",
  },
  {
    question: "What selling price gives me a 40% profit margin?",
    answer: "Divide your cost by (1 − 0.40). An item that costs $30 needs to sell for $30 / 0.60 = $50. Adding 40% to the cost gives only $42, which is a 28.57% margin — the most common pricing mistake among new sellers.",
  },
  {
    question: "What is the profit margin if revenue is $150 and cost is $100?",
    answer: "The profit margin is 33.33%. Calculation: ($150 − $100) / $150 × 100 = 33.33%.",
  },
  {
    question: "What is a good profit margin?",
    answer: "It varies by industry. Grocery retail typically runs 2–5%. SaaS companies often target 60–80%. As a rough guide: 10% is average, 20% is healthy, 30%+ is strong for most businesses. Compare against your industry benchmark rather than a universal standard.",
  },
  {
    question: "What is the difference between gross and net profit margin?",
    answer: "Gross profit margin subtracts only the cost of goods sold (COGS) from revenue. Net profit margin also subtracts operating expenses, taxes, and interest. This calculator computes gross margin — the starting point for profitability analysis.",
  },
  {
    question: "Should I include selling fees and shipping in the cost?",
    answer: "Yes, if you want a number you can act on. Marketplace commission, payment processing, packaging and postage you pay are all costs of making that sale. A $40 item that cost $22 looks like a 45% margin; add $4 of fees and it is 35%. Leave out overheads such as rent or software — those belong in net margin, not gross.",
  },
  {
    question: "Do I calculate margin on the price with or without VAT or sales tax?",
    answer: <>Without. Tax you collect is passed on to the government, so it is not revenue. Strip it out first with the <Link href="/finance/vat-calculator/" className="text-blue-600 hover:underline">VAT calculator</Link>, then use the net price here. Calculating on the tax-inclusive price overstates your margin.</>,
    schemaAnswer: "Without. Tax you collect is passed on to the government, so it is not revenue. Remove VAT or sales tax first, then calculate margin on the net price. Using the tax-inclusive price overstates your margin.",
  },
  {
    question: "How is profit margin different from markup?",
    answer: <>Margin is profit divided by <em>revenue</em>. Markup is profit divided by <em>cost</em>. A 50% markup equals a 33.33% margin — never the same value (unless margin is 0%). If you&apos;re setting prices from cost, the <Link href="/finance/markup-calculator/" className="text-blue-600 hover:underline">markup calculator</Link> is the right starting point.</>,
    schemaAnswer: "Margin is profit divided by revenue. Markup is profit divided by cost. A 50% markup equals a 33.33% margin. If you're setting prices from cost, the markup calculator is the right starting point.",
  },
  {
    question: "How does profit margin relate to break-even?",
    answer: <>Your gross margin must exceed your operating cost percentage for the business to be profitable. The <Link href="/finance/break-even-calculator/" className="text-blue-600 hover:underline">break-even calculator</Link> shows how many units you need to sell to cover fixed costs — which depends on the contribution margin (selling price minus variable cost) at the core.</>,
    schemaAnswer: "Your gross margin must exceed your operating cost percentage to be profitable. The break-even calculator shows how many units you need to sell to cover fixed costs, based on the contribution margin.",
  },
]

const conversionRows = [
  ["10%", "11.11%", "$11.11"],
  ["20%", "25%", "$12.50"],
  ["25%", "33.33%", "$13.33"],
  ["30%", "42.86%", "$14.29"],
  ["40%", "66.67%", "$16.67"],
  ["50%", "100%", "$20.00"],
  ["60%", "150%", "$25.00"],
  ["75%", "300%", "$40.00"],
]

export const metadata: Metadata = generatePageMetadata({
  title: "Profit Margin & Percent Profit Calculator",
  description: "Enter selling price and cost to get profit, profit margin and percent profit on cost. Includes the formula, worked examples and the price needed to hit a target margin.",
  path: "/finance/profit-margin-calculator/",
  keywords: ["profit margin calculator", "percent profit calculator", "percentage of profit calculator", "margin percentage calculator", "how to calculate percent profit", "gross margin calculator"],
})

export default function ProfitMarginPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema("Profit Margin Calculator", "Calculate gross profit, profit margin and percent profit on cost from selling price and cost.")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <div className="mx-auto max-w-2xl px-4 pt-8">
        <Breadcrumb crumbs={[
          { name: "Home", href: "/" },
          { name: "Finance Calculators", href: "/finance/" },
          { name: "Profit Margin Calculator", href: "/finance/profit-margin-calculator/" },
        ]} />
      </div>
      <CalculatorShell
        slug="profit-margin-calculator"
        title="Profit Margin & Percent Profit Calculator"
        intro={<>Enter what you sold something for and what it cost you. You get the profit in dollars and your percent profit two ways: as a share of the selling price (profit margin) and as a share of the cost (markup). Sellers use it to price a product, to check a supplier quote, and to see whether a <Link href="/finance/discount-calculator/" className="text-blue-600 hover:underline">discounted price</Link> still leaves enough to be worth the sale. This is gross margin — it leaves out overheads like rent and software, so net margin will be lower.</>}
        whenToUse="Use this when evaluating a product or service's profitability — before setting a price, after closing a deal, or when reviewing a product line to see which items carry the best margins. Also useful when you need to report gross margin to investors or in financial statements."
        calculator={<ProfitMarginWidget />}
        secondaryTool={
          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900 mb-2">How to Calculate Percent Profit</h2>
            <p className="text-gray-700 mb-3 leading-relaxed text-sm">
              Percent profit starts with one subtraction: selling price minus cost. What you divide that profit by decides which percentage you get, and the two answers are never the same.
            </p>
            <p className="text-gray-700 mb-3 leading-relaxed text-sm">
              Say you buy a mug for $12 and sell it for $20. Profit is $20 − $12 = <strong>$8</strong>.
            </p>
            <ul className="space-y-1.5 text-gray-700 list-disc list-inside text-sm mb-3">
              <li><strong>Profit margin</strong> = $8 / $20 × 100 = <strong>40%</strong>. Forty cents of every dollar a customer pays you is profit.</li>
              <li><strong>Profit on cost (markup)</strong> = $8 / $12 × 100 = <strong>66.67%</strong>. You earned two thirds of what you spent.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed text-sm">
              Both describe the same $8. Margin can never reach 100%, because profit is always smaller than the price; markup has no ceiling. If a supplier or a pricing guide quotes a percentage without saying which one, ask — a &quot;50% profit&quot; could mean selling a $10 item for $15 or for $20. The <Link href="/guides/markup-vs-margin/" className="text-blue-600 hover:underline">markup vs margin guide</Link> covers how to convert between them.
            </p>
          </section>
        }
        howTo={[
          "Enter the selling price — what the customer paid, before sales tax or VAT.",
          "Enter the cost — what you paid to make or buy the item, plus any fees for that sale.",
          "Subtract cost from selling price to get the profit.",
          "Divide profit by the selling price and multiply by 100 for profit margin.",
          "Divide profit by the cost instead if you want percent profit on cost (markup).",
        ]}
        formula="Profit Margin = ((Revenue − Cost) / Revenue) × 100"
        formulaExplained="Subtract cost from revenue to get gross profit. Divide by revenue, then multiply by 100 to express as a percentage."
        examples={[
          { input: "Sold for $20, cost $12", output: "40% margin — $8 profit" },
          { input: "Sold for $250, cost $200", output: "20% margin — $50 profit" },
          { input: "Sold for $45, cost $18", output: "60% margin — $27 profit" },
        ]}
        useCases={[
          "Evaluating the profitability of a product or service",
          "Setting prices to hit a target gross margin",
          "Comparing margins across a product range",
          "Reporting gross profit in financial statements",
          "Checking whether a discounted price still leaves adequate margin",
        ]}
        faqs={faqs}
        lookupTable={
          <>
            <h2 className="text-lg font-bold text-gray-900 mb-3">Advanced Scenarios</h2>
            <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Pricing to a target margin</h3>
                <p>To price from a margin you want, divide cost by (1 − margin). A product that costs $30 with a 40% target margin needs a price of $30 / 0.60 = $50. If you would rather work from a percentage added to cost, the <Link href="/finance/markup-calculator/" className="text-blue-600 hover:underline">markup calculator</Link> does that directly.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">What a discount does to your margin</h3>
                <p>A discount comes straight out of profit, not out of cost. Sell that $50 item at 20% off and the price drops to $40 while the cost stays $30. Profit falls from $20 to $10 and margin from 40% to 25%. You would need to sell twice as many units just to earn the same money.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Margin after selling fees</h3>
                <p>A $40 sale on a $22 item is a 45% margin on paper. If the marketplace and payment processor keep 10% of the price, add $4 to your cost: profit is $14 and the real margin is 35%. Run the numbers with fees included before you decide a product is worth stocking.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">From margin to covering your overheads</h3>
                <p>Gross margin tells you what each sale contributes; it does not tell you whether the business makes money. Divide your monthly fixed costs by the profit per unit to see how many sales you need — the <Link href="/finance/break-even-calculator/" className="text-blue-600 hover:underline">break-even calculator</Link> does this for you.</p>
              </div>
            </div>

            <h2 className="text-lg font-bold text-gray-900 mt-8 mb-3">Margin to Markup Conversion Table</h2>
            <p className="text-sm text-gray-600 mb-3">The same profit expressed both ways. Markup = margin / (1 − margin).</p>
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="text-left px-4 py-2 font-semibold">Profit margin</th>
                  <th className="text-left px-4 py-2 font-semibold">Markup on cost</th>
                  <th className="text-left px-4 py-2 font-semibold">Price for a $10 cost</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {conversionRows.map(([margin, markup, price]) => (
                  <tr key={margin} className="border-t border-gray-200">
                    <td className="px-4 py-2">{margin}</td>
                    <td className="px-4 py-2">{markup}</td>
                    <td className="px-4 py-2">{price}</td>
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
