import type { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/seo/schema"
import Breadcrumb from "@/components/layout/Breadcrumb"
import { guides } from "@/lib/content/guides"

const meta = guides.find((g) => g.slug === "how-to-price-handmade-items")!

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Guides", href: "/guides/" },
  { name: "How to Price Handmade Items", href: "/guides/how-to-price-handmade-items/" },
]

const faqs = [
  {
    question: "I am still learning and slow. Do I charge for all my hours?",
    answer: "Charge for the time a practised maker would take, not the time you take today. If a bag takes you two hours now and will take fifty minutes once you have made thirty, price on fifty. The extra time is the cost of learning, and customers will not pay for it. It also means your early pieces earn less per hour, which is normal.",
  },
  {
    question: "Do I include the cost of pieces that go wrong?",
    answer: "Yes. Work out how often a piece fails or ends up as a second, and spread that cost over the good ones. If one in twenty is unsellable, divide your cost by 0.95: a $30.50 bag really costs $32.11. Makers in crafts with higher failure rates, such as ceramics or glass, need a bigger allowance.",
  },
  {
    question: "Should friends and family get a discount?",
    answer: "Decide once and apply it to everyone, so you never have to negotiate with people you know. A fixed percentage that still leaves your cost and wage covered is the usual answer. Selling at materials cost as a favour is fine occasionally, but it sets a price those buyers will mention to others.",
  },
  {
    question: "How do I price a set or bundle?",
    answer: "Add up the single prices, then take off no more than you save by selling them together. One parcel instead of two saves postage and packaging, and on most marketplaces one order pays the fixed fee once. That saving is the discount you can give without earning less than you would on separate sales.",
  },
  {
    question: "How often should I re-price?",
    answer: "Re-cost each product whenever a material goes up noticeably, and review everything once a year even if nothing obvious has changed. Time yourself again at the same point: most makers get faster, which is the one input that tends to move in your favour.",
  },
]

const formulas = [
  ["Materials × 3", "$10.40 × 3", "$31.20"],
  ["Cost build-up (this guide)", "(materials + time + overheads) + 30%, then fees", "$45.00"],
  ["Double then double", "(materials + time) × 2 × 2", "$111.60"],
]

export const metadata: Metadata = generatePageMetadata({
  title: "How to Price Handmade Items: From Materials and Time to a Price",
  description: meta.description,
  path: "/guides/how-to-price-handmade-items/",
  keywords: [
    "how to price handmade items",
    "pricing handmade items",
    "how to price crafts",
    "handmade pricing formula",
    "how to price handmade products",
  ],
})

export default function HowToPriceHandmadeItemsGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema({ headline: meta.title, description: meta.description, path: "/guides/how-to-price-handmade-items/", datePublished: meta.published, dateModified: meta.updated })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      <article className="mx-auto max-w-2xl px-4 pb-16">
        <div className="pt-8">
          <Breadcrumb crumbs={crumbs} />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-3">How to Price Handmade Items: From Materials and Time to a Price</h1>
        <p className="text-sm text-gray-500 mb-6">Selling guide · Updated October 2026</p>

        <p className="text-gray-700 leading-relaxed mb-4">
          Ask ten makers how they price and you will hear ten formulas, most of them passed on
          without anyone checking what they produce. Apply three of the most popular to the same tote
          bag and you get $31, $45 and $112. They cannot all be right. This guide builds a price from
          the ground up for one product, shows where each number comes from, then explains why those
          formulas disagree and what to do when the honest answer is higher than you hoped. The{" "}
          <Link href="/finance/handmade-pricing-calculator/" className="text-blue-600 hover:underline">handmade pricing calculator</Link>{" "}
          does the arithmetic if you want to follow along with your own item.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">A handmade price has four parts</h2>
        <div className="bg-gray-100 rounded-lg px-4 py-3 font-mono text-sm text-gray-800 mb-3">
          Price = Materials + Your time + Overheads + Profit, then adjusted for fees
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          Most underpricing comes from stopping after the first part. The example here is a lined
          canvas tote bag, made in a spare room and sold online.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Materials: count everything that leaves with the customer</h2>
        <ul className="space-y-1 text-gray-700 list-disc list-inside mb-4">
          <li>Canvas and lining: $7.20</li>
          <li>Webbing for the straps: $1.60</li>
          <li>Thread and woven label: $0.70</li>
          <li>Mailer bag and care card: $0.90</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          That is <strong>$10.40</strong>. Two things are easy to miss. Fabric is bought by the length,
          not by the bag: if a yard and a half makes four bags, the cost per bag is the whole length
          divided by four, offcuts included. And packaging belongs here, because the customer takes it
          with them.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Time: measure it, then put a rate on it</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Guessing your making time almost always comes out low. Time five bags from first cut to
          final press and take the average. Here that is 50 minutes. Choose an hourly rate you would
          accept from an employer for the same work; this maker uses $21.
        </p>
        <ul className="space-y-1 text-gray-700 list-disc list-inside mb-4">
          <li>50 ÷ 60 × $21 = <strong>$17.50</strong> of labour per bag</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          Notice that labour is the largest part of the price, well ahead of materials. That is true
          of most handmade goods, and it is why formulas based only on materials fail.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Overheads: the costs that belong to no single item</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Machine servicing, needles, a website subscription, photo backdrops, market insurance. Add
          up a typical month and divide by the number of items you sell in it. With $156 of monthly
          costs and 60 bags sold, each bag carries <strong>$2.60</strong>. Time spent photographing,
          listing and answering messages can go in here too, priced at your hourly rate.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The bag now costs $10.40 + $17.50 + $2.60 = <strong>$30.50</strong> to produce.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Profit is not your wage</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The $17.50 pays you for the work. Profit is what the business keeps on top: it funds new
          equipment, covers a slow month, and gives you room to discount or sell wholesale. Leave it
          out and the business can only ever pay you an hourly rate, with nothing behind it. A 30%
          markup on the cost gives $30.50 × 1.30 = <strong>$39.65</strong>.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Add selling fees last, by dividing</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          If a marketplace and card processor together keep about 10% of the price, adding 10% to
          $39.65 is not enough, because the fee is taken from the higher figure. Divide instead:
        </p>
        <ul className="space-y-1 text-gray-700 list-disc list-inside mb-4">
          <li>$39.65 ÷ 0.90 = $44.06, rounded to <strong>$45</strong></li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          At $45 the fees are $4.50, you receive $40.50, and after the $30.50 cost there is $10.00 of
          profit. Wage and profit together come to $33 for each hour at the sewing machine. Fees vary
          by where you sell; the{" "}
          <Link href="/guides/ebay-vs-etsy-vs-own-website/" className="text-blue-600 hover:underline">eBay, Etsy or own website guide</Link>{" "}
          sets out what each takes.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Three formulas, one bag, three prices</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-50 text-gray-700">
              <tr>
                <th className="text-left px-3 py-2 font-medium">Formula</th>
                <th className="text-left px-3 py-2 font-medium">Working</th>
                <th className="text-right px-3 py-2 font-medium">Price</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {formulas.map(([name, working, price]) => (
                <tr key={name} className="border-t border-gray-100">
                  <td className="px-3 py-2">{name}</td>
                  <td className="px-3 py-2">{working}</td>
                  <td className="px-3 py-2 text-right font-semibold text-gray-900">{price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Materials × 3</strong> ignores time. At $31.20 this bag sells for barely more than
          it costs to produce, before fees. The shortcut only suits items that take a few minutes.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Double then double</strong> is a wholesale formula: the first doubling gives the
          price a shop pays, the second the price on the shelf. It is the right structure if shops are
          your main route, but for labour-heavy work it lands far above what direct buyers expect.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The build-up method sits between them because it charges for what the item actually
          consumed. Use the others as a cross-check, not as the answer.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Compare with the market, in the right way</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Now look at what similar handmade bags sell for. Similar means made the same way, at the
          same quality, by sellers who are still in business. Factory-made bags are not the
          comparison. Three outcomes are possible:
        </p>
        <ul className="space-y-1 text-gray-700 list-disc list-inside mb-4">
          <li><strong>Your price is lower.</strong> Raise it. You have found room you did not know about.</li>
          <li><strong>Your price is close.</strong> You are done.</li>
          <li><strong>Your price is higher.</strong> Do not simply cut it. Work through the next section.</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">When the honest price is too high</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Lowering the price means paying the difference yourself. Changing the inputs is better, and
          time is the one with the most give.
        </p>
        <div className="border-l-4 border-amber-300 bg-amber-50 px-4 py-3 mb-4">
          <p className="text-gray-800 text-sm leading-relaxed">
            <strong>Batching is the biggest lever.</strong> Cutting six bags at once and sewing them
            in stages brings the time per bag from 50 minutes to 38. Labour falls to $13.30, the cost
            to $26.30, and the same 30% and 10% give a price of $38. That is $7 off without earning a
            cent less per hour.
          </p>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          Other routes: simplify the design, buy materials in larger quantities, or go the opposite
          way and make the piece clearly premium with better fabric and photography, so that the
          higher price is expected. If none of those close the gap, the product may not be worth
          making to sell. That is useful to learn from a calculation and not from a year of work.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Check whether it can ever be sold wholesale</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          A shop will want to pay about half the retail price. Half of $45 is $22.50, which is below
          the $30.50 this bag costs to make. At this price it is a direct-only product. To wholesale
          it with even a small profit, the retail price would need to be around $70, or the making
          time would have to fall sharply. The{" "}
          <Link href="/finance/wholesale-price-calculator/" className="text-blue-600 hover:underline">wholesale price calculator</Link>{" "}
          shows both prices side by side, and it is worth running before you approach a shop.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The same thinking applies to fairs: a stall fee is a fixed cost you have to earn back in
          sales on the day, which the{" "}
          <Link href="/finance/break-even-calculator/" className="text-blue-600 hover:underline">break-even calculator</Link>{" "}
          will size for you. Once prices are set, the{" "}
          <Link href="/finance/profit-margin-calculator/" className="text-blue-600 hover:underline">profit margin calculator</Link>{" "}
          is the quick way to check any single sale, and when costs rise the{" "}
          <Link href="/guides/how-to-raise-your-prices/" className="text-blue-600 hover:underline">guide to raising your prices</Link>{" "}
          covers the next step.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">Frequently asked questions</h2>
        <div className="space-y-4">
          {faqs.map((f) => (
            <div key={f.question}>
              <h3 className="font-semibold text-gray-900 mb-1">{f.question}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{f.answer}</p>
            </div>
          ))}
        </div>
      </article>
    </>
  )
}
