import type { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { softwareApplicationSchema, faqSchema } from "@/lib/seo/schema"
import CalculatorShell from "@/components/calculator/CalculatorShell"
import Breadcrumb from "@/components/layout/Breadcrumb"
import WholesalePriceWidget from "./CalculatorWidget"
import RetailToWholesaleWidget from "./RetailToWholesaleWidget"

const faqs = [
  {
    question: "Is the wholesale price always half the retail price?",
    answer: "Half is the usual starting point, because many independent shops expect to keep about 50% of the retail price. It is not a rule. Some shops and larger chains ask for more, and low-priced or fast-selling goods are often sold on less. Ask a buyer what margin they work to before you quote.",
  },
  {
    question: "How do I calculate the wholesale price from a retail price?",
    answer: "Multiply the retail price by one minus the shop's margin. For a $48 retail price and a 50% margin: $48 × 0.50 = $24 wholesale. At a 55% margin the same item wholesales at $48 × 0.45 = $21.60.",
  },
  {
    question: "What if my cost is too high to double twice?",
    answer: "Doubling twice only works when your cost is about a quarter of the retail price. If an item costs you $12 and the market will pay $30, a shop keeping 50% pays $15 and you keep $3, a 25% markup. Your options are to cut the cost, raise the retail price, offer that product direct only, or agree a smaller margin with the shop.",
  },
  {
    question: "Should I sell cheaper on my own website than shops do?",
    answer: "No. Keep your own price at the suggested retail price. Undercutting the shops that stock you gives them a reason to drop the line, and the extra you earn selling direct at full price is what pays for your own marketing and shipping.",
  },
  {
    question: "What is the difference between cost price and wholesale price?",
    answer: "Cost price is what a unit costs you to make or buy. Wholesale price is what you charge a shop for it, so it already includes your profit. The shop then adds its own markup to reach the retail price.",
  },
  {
    question: "Is a 50% shop margin the same as a 50% markup?",
    answer: <>No. A shop that keeps 50% of the retail price has doubled what it paid, which is a 100% markup. A 50% markup on a $15 wholesale price gives $22.50, where the shop keeps only 33.33%. Buyers usually talk in margin, so check which one is meant; the <Link href="/guides/markup-vs-margin/" className="text-blue-600 hover:underline">markup vs margin guide</Link> has a conversion table.</>,
    schemaAnswer: "No. A shop that keeps 50% of the retail price has doubled what it paid, which is a 100% markup. A 50% markup on a $15 wholesale price gives $22.50, where the shop keeps only 33.33%. Buyers usually talk in margin, so check which one is meant.",
  },
]

const tableRows = [
  ["$10", "$6.00", "$5.00", "$4.50"],
  ["$20", "$12.00", "$10.00", "$9.00"],
  ["$25", "$15.00", "$12.50", "$11.25"],
  ["$40", "$24.00", "$20.00", "$18.00"],
  ["$50", "$30.00", "$25.00", "$22.50"],
  ["$100", "$60.00", "$50.00", "$45.00"],
]

export const metadata: Metadata = generatePageMetadata({
  title: "Wholesale Price Calculator — Cost to Wholesale to Retail",
  description: "Set a wholesale and suggested retail price from your cost, or work back from a retail price to what a shop will pay and what you keep.",
  path: "/finance/wholesale-price-calculator/",
  keywords: ["wholesale price calculator", "wholesale to retail price calculator", "how to calculate wholesale price", "how to calculate retail price from wholesale", "wholesale price from retail price"],
})

export default function WholesalePriceCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema("Wholesale Price Calculator", "Calculate wholesale and suggested retail prices from cost, or work back from a retail price to the wholesale price and your profit.")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <div className="mx-auto max-w-2xl px-4 pt-8">
        <Breadcrumb crumbs={[
          { name: "Home", href: "/" },
          { name: "Finance Calculators", href: "/finance/" },
          { name: "Wholesale Price Calculator", href: "/finance/wholesale-price-calculator/" },
        ]} />
      </div>
      <CalculatorShell
        slug="wholesale-price-calculator"
        title="Wholesale Price Calculator"
        intro={<>Selling through shops means one product needs three numbers that fit together: what it costs you, what the shop pays, and what the customer pays. Enter your cost and the markup you add to get a wholesale price, then the markup a shop adds to see the retail price it leads to. If the retail price is already set by the market, the second tool on this page works backwards from it. For pricing a product you only sell direct, the <Link href="/finance/markup-calculator/" className="text-blue-600 hover:underline">markup calculator</Link> is simpler. Once the numbers work, the guide on <Link href="/guides/how-to-get-your-products-into-shops/" className="text-blue-600 hover:underline">getting your products into shops</Link> covers who to approach and what to send.</>}
        whenToUse="Use this before you send a line sheet or answer a shop's first enquiry, when a stockist asks for a bigger margin, or when you are deciding whether a product you already sell direct can support a wholesale price at all."
        calculator={<WholesalePriceWidget />}
        secondaryTool={
          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Work Back from a Retail Price</h2>
            <p className="text-gray-700 mb-4 leading-relaxed text-sm">
              Often the retail price comes first: similar products sell for about $30, so yours has to as well. Enter that price and the share of it the shop expects to keep, and you get the wholesale price they will pay. Add your cost to see whether what is left is worth it. Copy the link to send the numbers to a stockist or a business partner.
            </p>
            <RetailToWholesaleWidget />
          </section>
        }
        howTo={[
          "Work out your cost per unit, including materials, packaging and your time.",
          "Multiply the cost by (1 + your wholesale markup ÷ 100) to get the wholesale price.",
          "Multiply the wholesale price by (1 + the shop's markup ÷ 100) to get the retail price.",
          "Going the other way, multiply the retail price by (1 − the shop's margin ÷ 100) to get the wholesale price.",
          "Subtract your cost from the wholesale price to see what you keep on each unit.",
        ]}
        formula="Wholesale = Cost × (1 + Markup % / 100)  ·  Wholesale = Retail × (1 − Shop margin % / 100)"
        formulaExplained="From cost: $7.50 with a 100% markup wholesales at $15. From retail: a $30 price where the shop keeps 50% also gives $15. When both routes land on the same number, the product works for wholesale."
        examples={[
          { input: "Cost $7.50, 100% then 100%", output: "$15 wholesale — $30 retail" },
          { input: "Cost $4, 150% then 100%", output: "$10 wholesale — $20 retail" },
          { input: "Retail $48, shop keeps 50%", output: "$24 wholesale" },
        ]}
        useCases={[
          "Building a wholesale price list or line sheet",
          "Checking whether a product can be sold through shops at all",
          "Answering a stockist who asks for a 55% or 60% margin",
          "Setting a suggested retail price that matches your own website",
          "Pricing a new product so it works both direct and wholesale",
        ]}
        faqs={faqs}
        lookupTable={
          <>
            <h2 className="text-lg font-bold text-gray-900 mb-3">Advanced Scenarios</h2>
            <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Volume discounts for bigger orders</h3>
                <p>Offering 10% off orders over 50 units turns a $15 wholesale price into $13.50. With a $7.50 cost, your profit per unit falls from $7.50 to $6.00, a 20% drop for a 10% discount. Make sure the larger order really does make up the difference, and test tiers with the <Link href="/finance/discount-calculator/" className="text-blue-600 hover:underline">discount calculator</Link> first.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Selling through a distributor</h3>
                <p>A distributor sits between you and the shop and takes a share too. On a $30 retail price, the shop pays $15. If the distributor keeps 25% of that, they pay you $11.25. Against a $7.50 cost you keep $3.75, a 50% markup instead of 100%. Three-step chains need a lower cost or a higher retail price.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Minimum orders and the cost of a small sale</h3>
                <p>Packing and invoicing a wholesale order costs about the same whether it holds 6 units or 60. If each order takes $20 of your time and postage, a 6-unit order at $7.50 profit per unit earns $45 and nets $25. A minimum order of 24 units earns $180 and nets $160. The <Link href="/finance/break-even-calculator/" className="text-blue-600 hover:underline">break-even calculator</Link> helps you find a sensible minimum.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Tax on wholesale prices</h3>
                <p>Wholesale prices are normally quoted before sales tax or VAT, and the retail price a customer sees may include it. Compare like with like: take the tax off the shelf price before working back to wholesale, or you will overstate what the shop can pay.</p>
              </div>
            </div>

            <h2 className="text-lg font-bold text-gray-900 mt-8 mb-3">Retail to Wholesale Price Table</h2>
            <p className="text-sm text-gray-600 mb-3">What a shop pays at three common margins. To check what each wholesale price leaves you, use the <Link href="/finance/profit-margin-calculator/" className="text-blue-600 hover:underline">profit margin calculator</Link>.</p>
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="text-left px-4 py-2 font-semibold">Retail price</th>
                  <th className="text-left px-4 py-2 font-semibold">Shop keeps 40%</th>
                  <th className="text-left px-4 py-2 font-semibold">Shop keeps 50%</th>
                  <th className="text-left px-4 py-2 font-semibold">Shop keeps 55%</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {tableRows.map(([retail, m40, m50, m55]) => (
                  <tr key={retail} className="border-t border-gray-200">
                    <td className="px-4 py-2">{retail}</td>
                    <td className="px-4 py-2">{m40}</td>
                    <td className="px-4 py-2">{m50}</td>
                    <td className="px-4 py-2">{m55}</td>
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
