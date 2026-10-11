import type { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { softwareApplicationSchema, faqSchema } from "@/lib/seo/schema"
import { EBAY_CATEGORIES, EBAY_FEES_CHECKED } from "@/lib/calculators/ebay"
import CalculatorShell from "@/components/calculator/CalculatorShell"
import Breadcrumb from "@/components/layout/Breadcrumb"
import EbayFeeWidget from "./CalculatorWidget"
import TargetPriceWidget from "./TargetPriceWidget"

const EBAY_FEE_PAGE = "https://www.ebay.com/help/selling/fees-credits-invoices/selling-fees?id=4822"

const faqs = [
  {
    question: "What percentage does eBay take from a sale?",
    answer: "For a US seller without an eBay Store, 13.6% of the total sale in most categories, plus a per-order fee of $0.40 ($0.30 on orders of $10 or less). Books, movies and music are 15.3%; trading cards and coins 13.25%; guitars 6.7%. On a typical $50 sale with $8 shipping that comes to roughly 14% of what the buyer pays you.",
  },
  {
    question: "Does eBay charge fees on shipping and sales tax?",
    answer: "Yes to both. The percentage is applied to the total amount of the sale: the item price, the shipping the buyer pays, and the sales tax added at checkout. You never receive the tax, but it still raises your fee. On a $58 order, 7% sales tax adds about 55 cents to what eBay keeps.",
  },
  {
    question: "Is there a separate PayPal or payment processing fee?",
    answer: "No. eBay handles payments itself and the cost of processing is included in the final value fee. The per-order fee is the only fixed amount added on top.",
  },
  {
    question: "Do I pay anything if my item does not sell?",
    answer: "Not a final value fee. Listing is free for your first 250 listings each month; after that eBay charges a $0.35 insertion fee per listing, which is not refunded if the item goes unsold. Optional listing upgrades are charged whether it sells or not.",
  },
  {
    question: "Are fees lower with an eBay Store?",
    answer: "Usually. Store subscribers on Basic and above pay 12.7% instead of 13.6% in most categories, and less in some, such as electronics. Against that you pay a monthly subscription, so it only makes sense once your sales are large enough for the saving to cover it.",
  },
  {
    question: "Does this work for eBay UK or other countries?",
    answer: "No. These are the rates for sellers on eBay.com in the US. Other eBay sites have their own fee structures, and some treat private and business sellers differently, so check the fee page for the site you sell on.",
  },
]

export const metadata: Metadata = generatePageMetadata({
  title: "eBay Fee Calculator — Fees, Payout & Profit (US)",
  description: "See what eBay keeps from a US sale by category, including fees on shipping and sales tax, what you receive, and the price needed to hit a profit target.",
  path: "/finance/ebay-fee-calculator/",
  keywords: ["ebay fee calculator", "ebay price calculator", "ebay profit calculator", "ebay final value fee calculator", "ebay selling fees calculator"],
})

export default function EbayFeeCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema("eBay Fee Calculator", "Estimate eBay.com final value fees, per-order fee, payout and profit for a US sale by category, and find the listing price for a target profit.")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <div className="mx-auto max-w-2xl px-4 pt-8">
        <Breadcrumb crumbs={[
          { name: "Home", href: "/" },
          { name: "Finance Calculators", href: "/finance/" },
          { name: "eBay Fee Calculator", href: "/finance/ebay-fee-calculator/" },
        ]} />
      </div>
      <CalculatorShell
        slug="ebay-fee-calculator"
        title="eBay Fee Calculator"
        intro={<>Enter what an item sold for and its category to see what eBay keeps and what reaches you. Add your own costs and it shows the profit as well. It uses eBay&apos;s published rates for US sellers without a Store, and it counts the two things most quick estimates miss: the fee on shipping and the fee on the buyer&apos;s sales tax. Rates were last checked against <a href={EBAY_FEE_PAGE} target="_blank" rel="nofollow noopener noreferrer" className="text-blue-600 hover:underline">eBay&apos;s selling fees page</a> on {EBAY_FEES_CHECKED}. PercentGuru is not affiliated with eBay, and the result is an estimate — your invoice is the final word. To see the same sale as a margin, use the <Link href="/finance/profit-margin-calculator/" className="text-blue-600 hover:underline">profit margin calculator</Link>.</>}
        whenToUse="Use this before you list, to check an item is worth selling at the price it is likely to fetch; when deciding whether to accept an offer; or when comparing eBay with another place to sell. It covers a single item in a single order on eBay.com."
        calculator={<EbayFeeWidget />}
        secondaryTool={
          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900 mb-2">What Price Do I Need to List At?</h2>
            <p className="text-gray-700 mb-4 leading-relaxed text-sm">
              Working forwards from a guess wastes time. Enter what the item cost you, what postage will cost, and the profit you want, and this finds the lowest price that delivers it after fees. An item that cost $20, with $8 of postage and a $15 profit target, needs to list at $50.23 with free shipping.
            </p>
            <TargetPriceWidget />
          </section>
        }
        howTo={[
          "Add the item price, the shipping the buyer pays and the sales tax to get the total amount of the sale.",
          "Multiply that total by the rate for your category — 13.6% in most.",
          "Add the per-order fee: $0.40, or $0.30 if the order is $10 or less.",
          "Add the promoted listing fee if the sale came through an ad: your ad rate times the same total.",
          "Subtract all fees from the item price plus shipping to get what you receive.",
        ]}
        formula="Fees = Total sale × Category rate + Per-order fee  ·  Total sale = (Price + Shipping) × (1 + Sales tax %)"
        formulaExplained="A $50 item with $8 shipping and 7% sales tax has a total of $62.06. At 13.6% the final value fee is $8.44; with the $0.40 per-order fee, eBay keeps $8.84 and you receive $49.16 of the $58 the buyer paid you."
        examples={[
          { input: "$50 item, $8 shipping, 7% tax, most categories", output: "$8.84 fees — $49.16 received" },
          { input: "$9 book, free shipping, no tax", output: "$1.68 fees — $7.32 received" },
          { input: "$180 athletic shoes, no tax", output: "$14.40 fees — $165.60 received" },
        ]}
        useCases={[
          "Checking an item is worth listing before you photograph it",
          "Deciding whether to accept a best offer",
          "Setting a price that still pays after fees and postage",
          "Comparing what you would keep on eBay against another marketplace",
          "Working out the real cost of promoting a listing",
        ]}
        faqs={faqs}
        lookupTable={
          <>
            <h2 className="text-lg font-bold text-gray-900 mb-3">eBay Final Value Fees by Category</h2>
            <p className="text-sm text-gray-600 mb-3">
              US sellers without an eBay Store, as published on eBay&apos;s selling fees page and checked on {EBAY_FEES_CHECKED}. A per-order fee of $0.40 ($0.30 on orders of $10 or less) is added to each.
            </p>
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="text-left px-4 py-2 font-semibold">Category</th>
                  <th className="text-left px-4 py-2 font-semibold">Final value fee</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {EBAY_CATEGORIES.map((c) => (
                  <tr key={c.id} className="border-t border-gray-200">
                    <td className="px-4 py-2">{c.label}</td>
                    <td className="px-4 py-2">{c.rateText}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs text-gray-500 mt-2">
              A few specialist categories, such as heavy equipment and bullion, have their own rates and are not included here.
            </p>

            <h2 className="text-lg font-bold text-gray-900 mt-8 mb-3">Advanced Scenarios</h2>
            <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Free shipping does not avoid the fee</h3>
                <p>eBay charges on the total either way. A $50 item with $8 shipping and a $58 item with free shipping both pay $8.29 before tax. Choose between them for how the listing looks to buyers, not to save on fees.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Promoted listings</h3>
                <p>The ad rate you set is charged on the same total, tax and shipping included, when a buyer purchases after clicking the ad. At a 5% rate the $62.06 sale above costs another $3.10, taking eBay&apos;s share from $8.84 to $11.94. Enter the rate in the calculator to see whether the item still pays.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Low-priced items</h3>
                <p>The fixed per-order fee weighs heavily on cheap items. A $6 sale pays $0.82 plus $0.30, which is 18.7% of the price. Two $6 items bought in one order pay the per-order fee once, so bundles and multi-buy offers lower the fee per item.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Athletic shoes around $150</h3>
                <p>eBay&apos;s rate for athletic shoes drops to 8% with no per-order fee once the sale reaches $150. A pair sold for $140 pays $19.44 in fees; a pair sold for $180 pays $14.40. If you are pricing close to the line, it is worth knowing which side you will land on.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Selling to buyers abroad and seller standards</h3>
                <p>If you ship internationally yourself, eBay adds an international fee of 1.65% of the total sale; sales through eBay International Shipping are exempt. Sellers rated Below Standard pay a surcharge on their final value fees. Neither is included in the calculator, so allow for them if they apply to you.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">From payout to a real price</h3>
                <p>Fees are one cost among several. Once you know what you receive, the <Link href="/finance/markup-calculator/" className="text-blue-600 hover:underline">markup calculator</Link> shows what that is against the item&apos;s cost, the <Link href="/finance/break-even-calculator/" className="text-blue-600 hover:underline">break-even calculator</Link> tells you how many sales cover your monthly overheads, and the seller section of the <Link href="/finance/discount-calculator/" className="text-blue-600 hover:underline">discount calculator</Link> shows what accepting a lower offer costs you.</p>
              </div>
            </div>
          </>
        }
      />
    </>
  )
}
