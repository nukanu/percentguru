import type { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/seo/schema"
import Breadcrumb from "@/components/layout/Breadcrumb"
import { guides } from "@/lib/content/guides"

const meta = guides.find((g) => g.slug === "ebay-vs-etsy-vs-own-website")!

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Guides", href: "/guides/" },
  { name: "eBay, Etsy or Your Own Website", href: "/guides/ebay-vs-etsy-vs-own-website/" },
]

const faqs = [
  {
    question: "Can I list the same item on eBay and Etsy at the same time?",
    answer: "Yes, and many sellers do. The risk is selling a one-off twice. If you have a single piece, either list it in one place or be ready to end the other listing the moment it sells. For items you hold several of, keep a simple stock count that you update after every order, wherever it came from.",
  },
  {
    question: "Should I charge the same price on every channel?",
    answer: "Keep them the same or very close. Buyers compare, and a shop that finds you cheaper elsewhere loses trust quickly. Set the price so that it works on your most expensive channel. On the cheaper ones you keep the difference, which is your reward for bringing those buyers yourself.",
  },
  {
    question: "Which is cheapest for items under $10?",
    answer: "Fixed fees dominate at low prices. On an $8 item with free shipping, eBay keeps about $1.39 (17%), Etsy about $1.21 (15%) and a card processor on your own site about 53 cents (7%). Selling cheap items in bundles or multi-packs is usually the better answer than choosing a platform, because the fixed part of the fee is paid once per order.",
  },
  {
    question: "Is Etsy only for things I make myself?",
    answer: "Etsy is built around handmade goods, vintage items and craft supplies, and it has rules about what counts as each. Ordinary new products that you buy in and resell generally do not belong there. Read Etsy's seller policy before you open a shop, because listings that break it can be removed.",
  },
  {
    question: "When is it worth opening my own website?",
    answer: "When you have a way to send buyers to it. That usually means repeat customers, a mailing list, a social following, or people searching for your shop by name. If none of those exist yet, a website will sit empty however low its fees are. Build the audience on a marketplace first, then give them somewhere of your own to return to.",
  },
]

const rows = [
  ["eBay", "13.6% + $0.40", "$6.66", "$39.34", "14.5%"],
  ["Etsy", "$0.20 + 6.5% + 3% + $0.25", "$4.82", "$41.18", "10.5%"],
  ["Etsy, sale from an Offsite Ad", "as above + 15%", "$11.72", "$34.28", "25.5%"],
  ["Own website", "2.9% + $0.30", "$1.63", "$44.37", "3.5%"],
]

export const metadata: Metadata = generatePageMetadata({
  title: "eBay, Etsy or Your Own Website: Where Should You Sell?",
  description: meta.description,
  path: "/guides/ebay-vs-etsy-vs-own-website/",
  keywords: [
    "ebay vs etsy",
    "etsy vs ebay fees",
    "etsy vs own website",
    "where to sell online",
    "selling on ebay vs etsy",
  ],
})

export default function WhereToSellGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema({ headline: meta.title, description: meta.description, path: "/guides/ebay-vs-etsy-vs-own-website/", datePublished: meta.published, dateModified: meta.updated })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      <article className="mx-auto max-w-2xl px-4 pb-16">
        <div className="pt-8">
          <Breadcrumb crumbs={crumbs} />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-3">eBay, Etsy or Your Own Website: Where Should You Sell?</h1>
        <p className="text-sm text-gray-500 mb-6">Selling guide · Fees checked October 12, 2026 · US sellers</p>

        <p className="text-gray-700 leading-relaxed mb-4">
          The usual way to compare places to sell is to line up the fees and pick the lowest. That
          gets the answer wrong surprisingly often, because the cheapest option per order is also the
          one that sends you no customers. This guide puts the same order through eBay, Etsy and a
          website of your own, shows what each keeps, and then looks at the three things fees leave
          out: who brings the buyers, what kind of product fits, and what you actually own at the end.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">The short answer</h2>
        <ul className="space-y-1 text-gray-700 list-disc list-inside mb-4">
          <li><strong>eBay</strong> if you sell used, collectable, branded or one-off items that people search for by name.</li>
          <li><strong>Etsy</strong> if you make what you sell, or deal in vintage or craft supplies.</li>
          <li><strong>Your own website</strong> once you can bring buyers yourself, usually as a second step and not the first.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          Most small sellers end up with a marketplace and a website together. The order you add them
          in matters more than which is &quot;best&quot;.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">The same order, three ways</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Take a $40 item with $6 shipping charged to the buyer: a $46 order, before sales tax. These
          are the published US rates for a seller with no store subscription, from{" "}
          <a href="https://www.ebay.com/help/selling/fees-credits-invoices/selling-fees?id=4822" target="_blank" rel="nofollow noopener noreferrer" className="text-blue-600 hover:underline">eBay&apos;s selling fees page</a>,{" "}
          <a href="https://www.etsy.com/legal/fees/" target="_blank" rel="nofollow noopener noreferrer" className="text-blue-600 hover:underline">Etsy&apos;s fees policy</a>{" "}
          and a standard online card rate of 2.9% plus 30 cents for your own site.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-50 text-gray-700">
              <tr>
                <th className="text-left px-3 py-2 font-medium">Where</th>
                <th className="text-left px-3 py-2 font-medium">Fees charged</th>
                <th className="text-right px-3 py-2 font-medium">Total</th>
                <th className="text-right px-3 py-2 font-medium">You keep</th>
                <th className="text-right px-3 py-2 font-medium">Share</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {rows.map(([where, charged, total, keep, share]) => (
                <tr key={where} className="border-t border-gray-100">
                  <td className="px-3 py-2">{where}</td>
                  <td className="px-3 py-2">{charged}</td>
                  <td className="px-3 py-2 text-right">{total}</td>
                  <td className="px-3 py-2 text-right font-semibold text-gray-900">{keep}</td>
                  <td className="px-3 py-2 text-right">{share}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          eBay&apos;s rate here is for most categories; some are higher or lower, and eBay also charges
          its percentage on the sales tax the buyer pays, which nudges the real figure up. The{" "}
          <Link href="/finance/ebay-fee-calculator/" className="text-blue-600 hover:underline">eBay fee calculator</Link>{" "}
          handles both. Etsy&apos;s 20-cent listing fee is paid when you list and again every four
          months, whether or not the item sells.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">The Etsy fee that changes the answer</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          On ordinary sales Etsy is cheaper than eBay. The exception is Offsite Ads. Etsy advertises
          listings on other sites, and when a buyer clicks one of those ads and orders from your shop
          within 30 days, you pay an extra 15% of the order, capped at $100. On the $46 order that is
          another $6.90, and Etsy&apos;s share goes from 10.5% to over 25%.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Shops with under $10,000 of sales in the past year can opt out. Once a shop passes $10,000
          the rate drops to 12%, but taking part becomes compulsory for the life of the shop. You
          cannot know in advance which orders will carry the fee, so price as though some will. If
          one order in five comes through an ad, the average Etsy fee on this item is about $6.20,
          not far below eBay.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Your own website: cheapest per order, most expensive per customer</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          A card processor takes $1.63 of the $46. Nothing else is charged per sale, which is why a
          website looks unbeatable in a fee table. Two costs are missing from it.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The first is the subscription. A hosted store builder runs from roughly $20 to $30 a month
          on an entry plan; take $27. Against Etsy, where you would save $3.19 an order, you need nine
          orders a month before the site has paid for itself. Against eBay it is six.
        </p>
        <div className="border-l-4 border-amber-300 bg-amber-50 px-4 py-3 mb-4">
          <p className="text-gray-800 text-sm leading-relaxed">
            <strong>The second is the customer.</strong> Marketplaces charge high fees because they
            supply the buyers. On your own site, you do. Suppose you get 30 orders a month and spend
            just $5 in advertising to win each one. After the subscription and the ads you keep
            $38.47 an order, less than on either marketplace. A website pays when buyers arrive for
            free: returning customers, a mailing list, people searching for your name.
          </p>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Who brings the buyers</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          This is the real difference between the three. On eBay, people arrive already searching for
          a specific thing, often by brand or model, and compare listings on price and condition. On
          Etsy, they browse for a kind of thing, a gift or a style, and choose on photos and feel. On
          your own site nobody arrives unless something sent them. A new seller with no audience is
          really choosing between two marketplaces. The website becomes an option later.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">What sells where</h2>
        <ul className="space-y-1 text-gray-700 list-disc list-inside mb-4">
          <li><strong>eBay suits</strong> second-hand goods, collectables, electronics, parts, clearance stock and anything unusual enough to need an auction to find its price.</li>
          <li><strong>Etsy suits</strong> handmade work, personalised items, vintage pieces and supplies for other makers.</li>
          <li><strong>Your own site suits</strong> a consistent range under one name that people come back for: consumables, a signature product line, subscriptions.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          If your product could sit in two of those lists, it can probably sell in two places.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">What you own at the end</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          On a marketplace, the customers belong to the marketplace. You generally cannot market to
          them afterwards, the rules and fees can change with little notice, and an account problem
          can stop your sales overnight. On your own site you keep the customer list, set the rules
          and decide how the shop looks. That is worth something even at the same profit per order,
          and it is the main reason established sellers add a site once they have regulars.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">A sensible order to do it in</h2>
        <ul className="space-y-1 text-gray-700 list-disc list-inside mb-4">
          <li><strong>Start on the one marketplace that fits your product.</strong> You will learn what sells and at what price with almost no fixed cost.</li>
          <li><strong>Collect what you are allowed to.</strong> A card in each parcel with your shop name gives buyers a way to find you again.</li>
          <li><strong>Add a second channel when the first is steady,</strong> not when it is struggling. Two half-run shops do worse than one good one.</li>
          <li><strong>Open your own site when repeat buyers appear,</strong> and send them there first.</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Run it for your own product</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The table above is one order at one price. Yours will differ, especially if your items are
          cheap, heavy or sold in a category with its own rate. Start from what the item costs you:
          the{" "}
          <Link href="/finance/handmade-pricing-calculator/" className="text-blue-600 hover:underline">handmade pricing calculator</Link>{" "}
          has a field for selling fees and raises the price to cover them, and the{" "}
          <Link href="/finance/markup-calculator/" className="text-blue-600 hover:underline">markup calculator</Link>{" "}
          does the same job for goods you buy in. Then check what is left with the{" "}
          <Link href="/finance/profit-margin-calculator/" className="text-blue-600 hover:underline">profit margin calculator</Link>,
          and use the{" "}
          <Link href="/finance/break-even-calculator/" className="text-blue-600 hover:underline">break-even calculator</Link>{" "}
          to see how many orders a month would cover a website subscription. Fees change, so confirm
          the current rates on each platform&apos;s own page before you commit.
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
