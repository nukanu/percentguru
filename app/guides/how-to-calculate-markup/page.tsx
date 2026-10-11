import type { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/seo/schema"
import Breadcrumb from "@/components/layout/Breadcrumb"
import { guides } from "@/lib/content/guides"

const meta = guides.find((g) => g.slug === "how-to-calculate-markup")!

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Guides", href: "/guides/" },
  { name: "How to Calculate Markup", href: "/guides/how-to-calculate-markup/" },
]

const faqs = [
  {
    question: "Should I count my own time as a cost before marking up?",
    answer: "Yes, if you make the product yourself. Give your hours a rate you would have to pay someone else, add it to materials, and mark up the total. If you leave labour out, the markup has to pay your wages as well as your profit, and the first time you hire help the price stops working.",
  },
  {
    question: "Does every product need the same markup?",
    answer: "No, and most shops do not work that way. Low-priced items usually carry a higher percentage because the dollars per sale are small, while expensive items sell on a lower percentage that still brings in more money. What matters is the blend across everything you sell, so check a few products at each end of your range.",
  },
  {
    question: "How do I set a wholesale price and a retail price from one cost?",
    answer: "A common starting point is to double twice. A product that costs you $7.50 wholesales at $15 and retails at $30. Selling to a shop, your markup is 100% and so is theirs. Selling direct at $30, yours is 300%. Keep your own retail price at the full $30 so you are not undercutting the shops that stock you.",
  },
  {
    question: "My cost changes with every order. Which cost do I mark up?",
    answer: "Use the most recent cost when prices are rising, because that is what the next unit will cost you to replace. If costs bounce around, use a weighted average: 100 units at $4 and 100 at $5 average $4.50. Re-check the price whenever your cost moves by more than a few percent.",
  },
  {
    question: "Is my markup the profit I take home?",
    answer: "No. Markup produces gross profit, the money left after the product itself is paid for. Rent, software, advertising, payment fees and tax all come out of that. A product with a 120% markup can still lose money if you sell too few of them to cover what the business costs to run.",
  },
]

export const metadata: Metadata = generatePageMetadata({
  title: "How to Calculate Markup: From Real Cost to a Price You Can Charge",
  description: meta.description,
  path: "/guides/how-to-calculate-markup/",
  keywords: [
    "how to calculate markup",
    "how to calculate markup percentage",
    "how do you calculate markup",
    "markup formula",
    "calculate markup from cost and selling price",
  ],
})

export default function HowToCalculateMarkupGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema({ headline: meta.title, description: meta.description, path: "/guides/how-to-calculate-markup/", datePublished: meta.published, dateModified: meta.updated })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      <article className="mx-auto max-w-2xl px-4 pb-16">
        <div className="pt-8">
          <Breadcrumb crumbs={crumbs} />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-3">How to Calculate Markup: From Real Cost to a Price You Can Charge</h1>
        <p className="text-sm text-gray-500 mb-6">Business guide · Updated October 2026</p>

        <p className="text-gray-700 leading-relaxed mb-4">
          The markup formula takes ten seconds to learn. Getting a price out of it that actually pays
          you takes a little longer, because the answer is only as good as the cost you feed in. This
          guide follows one product, a batch of 24 soy candles, from a pile of receipts to a price on
          the label, then shows how to run the sum backwards and where a markup tends to leak. To skip
          the arithmetic, the{" "}
          <Link href="/finance/markup-calculator/" className="text-blue-600 hover:underline">markup calculator</Link>{" "}
          works out any one of cost, markup or price from the other two.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">The markup formula</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Markup is the amount you add to cost, written as a percentage of that cost. There are two
          versions of the same sum, depending on which number you are missing.
        </p>
        <div className="bg-gray-100 rounded-lg px-4 py-3 font-mono text-sm text-gray-800 mb-3">
          Selling price = Cost × (1 + Markup % ÷ 100)
        </div>
        <div className="bg-gray-100 rounded-lg px-4 py-3 font-mono text-sm text-gray-800 mb-3">
          Markup % = (Selling price − Cost) ÷ Cost × 100
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          Everything is measured against cost. That is what separates markup from margin, which
          measures the same profit against the selling price. The{" "}
          <Link href="/guides/markup-vs-margin/" className="text-blue-600 hover:underline">markup vs margin guide</Link>{" "}
          covers that difference; here we stay on the markup side.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Step 1: find what one unit really costs</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Most pricing errors happen before any percentage is applied. Add up everything it takes to
          get one unit ready to sell, not just the headline material.
        </p>
        <ul className="space-y-1 text-gray-700 list-disc list-inside mb-4">
          <li>Wax, wicks and fragrance oil: $66</li>
          <li>Jars and lids: $30</li>
          <li>Labels and boxes: $12</li>
          <li>Shipping on those supplies: $12</li>
          <li>Three hours of making, at $20 an hour: $60</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          That is $180 for 24 candles, or <strong>$7.50 each</strong>. Materials alone come to $5.00,
          which is the figure many makers mark up. The other $2.50 is real money too.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Step 2: turn the markup into a price</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Say you settle on a 120% markup. Divide by 100 and add 1 to get the multiplier: 2.20. Then
          multiply.
        </p>
        <ul className="space-y-1 text-gray-700 list-disc list-inside mb-4">
          <li>$7.50 × 2.20 = <strong>$16.50</strong> selling price</li>
          <li>$16.50 − $7.50 = <strong>$9.00</strong> gross profit per candle</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          The multiplier is worth remembering on its own. A 50% markup is × 1.5, 100% is × 2, 150% is
          × 2.5. Once you know yours, pricing a new product is a single multiplication.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Finding the markup in a price you already charge</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Plenty of sellers set prices by feel and never check what markup they ended up with. To find
          out, subtract cost from price and divide by cost. An art print that sells for $28 and costs
          $11.20 to print and pack:
        </p>
        <ul className="space-y-1 text-gray-700 list-disc list-inside mb-4">
          <li>$28.00 − $11.20 = $16.80 profit</li>
          <li>$16.80 ÷ $11.20 = 1.5, so a <strong>150% markup</strong></li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          Run this across your whole range and the weak products show up quickly. If you want the same
          sale expressed as a share of the price instead, the{" "}
          <Link href="/finance/profit-margin-calculator/" className="text-blue-600 hover:underline">profit margin calculator</Link>{" "}
          gives both figures at once.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Working back to the most you can pay</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Sometimes the price is fixed by the market and the cost is the thing you can change. Divide
          the price by your multiplier. If similar mugs sell for $18 and you need an 80% markup, the
          most a mug can cost you is $18 ÷ 1.80 = <strong>$10.00</strong>. A supplier quoting $11.50
          is not a slightly worse deal; at that cost your markup falls to 57%.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Choosing the percentage</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          There is no correct markup, only one that covers your running costs at the volume you can
          realistically sell. Retailers often start by doubling cost, and cafés commonly price a dish
          at around three times its ingredients, but those are habits, not laws. A better test is your
          own overheads. If the candle business costs $600 a month to run and sells 200 candles, each
          one has to contribute $3.00 before you have earned anything. At $9.00 gross profit, $6.00 is
          left. At a 50% markup the gross profit would be $3.75, leaving 75 cents. The{" "}
          <Link href="/finance/break-even-calculator/" className="text-blue-600 hover:underline">break-even calculator</Link>{" "}
          shows how many units a given price needs to sell.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Three mistakes that shrink a markup</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Marking up the wrong base.</strong> Apply 120% to the $5.00 of materials and you
          charge $11.00. Against the true $7.50 cost, that is a 46.67% markup, well under half of what
          you intended.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Forgetting fees that come off the price.</strong> A marketplace that keeps 10% takes
          $1.65 of the $16.50. You receive $14.85, and your markup is 98%, not 120%. To be left with
          $16.50, the listing price needs to be $16.50 ÷ 0.90 = $18.33.
        </p>
        <div className="border-l-4 border-amber-300 bg-amber-50 px-4 py-3 mb-4">
          <p className="text-gray-800 text-sm leading-relaxed">
            <strong>Discounting without redoing the sum.</strong> A 20% sale on the $16.50 candle
            brings it to $13.20. The discount was 20% of the price, but profit drops from $9.00 to
            $5.70, a fall of 37%, and the markup is now 76%. Test a promotion in the{" "}
            <Link href="/finance/discount-calculator/" className="text-blue-600 hover:underline">discount calculator</Link>{" "}
            before you run it.
          </p>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Rounding to a price point</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Nobody lists a candle at $16.50 if $16.99 looks the same to a shopper. Rounding is fine, as
          long as you recalculate afterwards. At $16.99 the markup is 126.53%. Rounded down to $15.99
          it is 113.2%. The dollar between them looks trivial on one candle and is $200 a month across
          200 of them, a third of the overheads.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">A two-minute check before the price goes live</h2>
        <ul className="space-y-1 text-gray-700 list-disc list-inside mb-4">
          <li>Does the cost include shipping in, packaging and your time?</li>
          <li>Have you allowed for fees taken as a percentage of the price?</li>
          <li>Is the price before sales tax or VAT, not after?</li>
          <li>After rounding, what is the markup now?</li>
          <li>If you ran your usual discount, would the sale still be worth making?</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          If all five have an answer, the price is doing what you think it is. Put the final cost and
          price into the{" "}
          <Link href="/finance/markup-calculator/" className="text-blue-600 hover:underline">markup calculator</Link>{" "}
          once more to confirm the percentage, and you are done.
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
