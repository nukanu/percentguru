import type { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/seo/schema"
import Breadcrumb from "@/components/layout/Breadcrumb"
import { guides } from "@/lib/content/guides"

const meta = guides.find((g) => g.slug === "how-to-raise-your-prices")!

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Guides", href: "/guides/" },
  { name: "How to Raise Your Prices", href: "/guides/how-to-raise-your-prices/" },
]

const faqs = [
  {
    question: "How big an increase is too big to make in one go?",
    answer: "There is no safe percentage that applies to everyone, so work it out from your own numbers. Calculate how many sales you could lose at the new price and still earn what you earn now. If that figure is far above any drop you can realistically imagine, the rise is safe. If it is close, split the increase into two smaller steps a few months apart.",
  },
  {
    question: "Should existing customers keep the old price?",
    answer: "For one-off purchases, no: the price is simply the price on the day. For anything ongoing, such as a subscription, a standing wholesale account or a commission already quoted, honour what was agreed and give a clear date when the new price starts. Letting regulars order once more at the old price costs little and buys a lot of goodwill.",
  },
  {
    question: "When in the year should I raise prices?",
    answer: "Before your busy season, not in the middle of it. Changing prices during a rush causes mismatched listings, confused repeat buyers and awkward conversations at the worst time. For wholesale, tell shops before they place their seasonal orders, so the new price is already in their planning.",
  },
  {
    question: "A competitor is cheaper than me. Can I still put my prices up?",
    answer: "Usually, yes. You rarely know a competitor's costs, and matching a price you cannot afford only copies their problem. What matters is whether your own customers see enough difference in quality, service, speed or style to pay yours. If your product is truly identical to a cheaper one, the answer is to change the product or the audience, not to give up the margin.",
  },
  {
    question: "What if sales drop more than I planned for?",
    answer: "Give it long enough to judge, at least a full month and ideally two, and compare profit rather than the number of orders. If profit is clearly down, do not quietly put the old price back. Run a time-limited offer, add a smaller or simpler version at the old price point, or improve what the customer gets. Each of those keeps the new price as the reference.",
  },
]

export const metadata: Metadata = generatePageMetadata({
  title: "How to Raise Your Prices (and What to Tell Customers)",
  description: meta.description,
  path: "/guides/how-to-raise-your-prices/",
  keywords: [
    "how to raise prices",
    "how to raise your prices",
    "price increase letter",
    "how to tell customers about a price increase",
    "price increase announcement",
  ],
})

export default function HowToRaiseYourPricesGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema({ headline: meta.title, description: meta.description, path: "/guides/how-to-raise-your-prices/", datePublished: meta.published, dateModified: meta.updated })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      <article className="mx-auto max-w-2xl px-4 pb-16">
        <div className="pt-8">
          <Breadcrumb crumbs={crumbs} />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-3">How to Raise Your Prices (and What to Tell Customers)</h1>
        <p className="text-sm text-gray-500 mb-6">Business guide · Updated October 2026</p>

        <p className="text-gray-700 leading-relaxed mb-4">
          Most small sellers put off raising prices for far longer than they should. The worry is
          always the same: customers will leave. Some might. The useful question is how many would
          have to leave before you were worse off, and for most products the answer is a lot more
          than people expect. This guide covers when a rise is due, how to pick the number, who needs
          to hear about it, and what to say, with wording you can copy at the end.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Five signs a price rise is overdue</h2>
        <ul className="space-y-1 text-gray-700 list-disc list-inside mb-4">
          <li>Your costs have gone up and your prices have not. Every sale now earns less than it did.</li>
          <li>You regularly sell out, or your order book is full weeks ahead.</li>
          <li>You have not changed a price in over a year.</li>
          <li>Nobody ever questions your prices. If no one at all hesitates, there is usually room.</li>
          <li>The business is busy but there is little left at the end of the month.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          One of these is a prompt to look. Two or more and you are probably already paying for the
          delay.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Decide what the new price has to do</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Take a potter who sells a mug for $24. It used to cost $9 to make; clay, glaze and firing
          have pushed that to $10.50. There are three possible aims, and they give three different
          prices.
        </p>
        <ul className="space-y-1 text-gray-700 list-disc list-inside mb-4">
          <li><strong>Absorb it.</strong> Stay at $24. Profit per mug falls from $15.00 to $13.50, a 10% pay cut.</li>
          <li><strong>Keep the same dollars.</strong> $25.50 restores the $15.00.</li>
          <li><strong>Keep the same markup.</strong> The mug was priced at about 2.67 times cost, which now gives $28.00.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          None is automatically right, but you should know which one you are choosing. The{" "}
          <Link href="/finance/markup-calculator/" className="text-blue-600 hover:underline">markup calculator</Link>{" "}
          gives the price for any cost and markup, and the{" "}
          <Link href="/finance/profit-margin-calculator/" className="text-blue-600 hover:underline">profit margin calculator</Link>{" "}
          shows what each option leaves you. Say the potter settles on $27.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Work out how many customers you can afford to lose</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          This is the calculation that takes the fear out of it. At $24 each mug now earns $13.50. At
          $27 it earns $16.50. Divide the old profit by the new one:
        </p>
        <ul className="space-y-1 text-gray-700 list-disc list-inside mb-4">
          <li>$13.50 ÷ $16.50 = 0.818</li>
          <li>So the potter can sell 18.2% fewer mugs and earn exactly the same.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          If she sells 100 mugs a month, that is $1,350 of profit today. At $27 she needs only 82
          sales to match it. If the rise costs her five customers instead of eighteen, she makes
          $1,567.50, about $217 more, for less work. The &quot;What if I change my price?&quot; tool
          on the{" "}
          <Link href="/finance/break-even-calculator/" className="text-blue-600 hover:underline">break-even calculator</Link>{" "}
          runs this for your own figures.
        </p>
        <div className="border-l-4 border-amber-300 bg-amber-50 px-4 py-3 mb-4">
          <p className="text-gray-800 text-sm leading-relaxed">
            <strong>The same sum explains why discounts hurt.</strong> It works in reverse: cut the
            price and you need a surprisingly large jump in sales just to stand still. If you are
            tempted to soften a rise with a permanent coupon, check it in the seller section of the{" "}
            <Link href="/finance/discount-calculator/" className="text-blue-600 hover:underline">discount calculator</Link>{" "}
            first.
          </p>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Ways to raise prices without touching the main number</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          A higher sticker price is not the only route. Depending on what you sell, one of these may
          be easier to introduce:
        </p>
        <ul className="space-y-1 text-gray-700 list-disc list-inside mb-4">
          <li>Run fewer sales, or make them smaller. Ending a habitual 15% off is a price rise.</li>
          <li>Start charging for something you give away: gift wrap, rush orders, customisation.</li>
          <li>Raise the free-shipping threshold, or set a minimum order.</li>
          <li>Launch new products at the new level and leave old ones until they are restocked.</li>
          <li>Raise the best-seller and the most labour-heavy items first, not everything by the same percentage.</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Who needs to be told, and who does not</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          People buying a single item from a listing do not need an announcement. They see today&apos;s
          price and decide; drawing attention to the change only invites comparison. Three groups do
          need to hear from you directly, and before it happens:
        </p>
        <ul className="space-y-1 text-gray-700 list-disc list-inside mb-4">
          <li><strong>Shops that stock you.</strong> They set their own prices from yours and need time to adjust.</li>
          <li><strong>Subscribers and anyone on a recurring order.</strong></li>
          <li><strong>Regulars and customers with a quote outstanding.</strong></li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          A few weeks of notice is courteous for wholesale accounts, and a month is common. Remember
          what the change does on their side: if the mug&apos;s retail price goes from $24 to $27, a shop
          paying half now pays $13.50 instead of $12. For the potter, that takes her wholesale profit
          from $1.50 a mug back to $3.00, where it was before her costs rose. The{" "}
          <Link href="/finance/wholesale-price-calculator/" className="text-blue-600 hover:underline">wholesale price calculator</Link>{" "}
          shows both prices together.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">What to say: four rules</h2>
        <ul className="space-y-1 text-gray-700 list-disc list-inside mb-4">
          <li><strong>Keep it short.</strong> Three or four sentences. Long explanations read as doubt.</li>
          <li><strong>Give one honest reason,</strong> in a line. Rising material costs is enough.</li>
          <li><strong>State the new price and the date.</strong> No vague &quot;adjustments&quot;.</li>
          <li><strong>Do not apologise.</strong> Thank people for their custom instead.</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Wording you can copy</h2>
        <p className="text-gray-700 leading-relaxed mb-2"><strong>To a shop that stocks you</strong></p>
        <div className="border border-gray-200 bg-gray-50 rounded-lg px-4 py-3 mb-4 text-sm text-gray-800 leading-relaxed">
          Hi [name], a quick note on pricing. From [date], the wholesale price of [product] will be
          [new price], up from [old price]. My material costs have risen over the past year and this
          brings the price back in line. The suggested retail price moves to [new retail]. Any order
          placed before [date] will be at the current price. Thank you for stocking my work.
        </div>
        <p className="text-gray-700 leading-relaxed mb-2"><strong>To regular customers or a mailing list</strong></p>
        <div className="border border-gray-200 bg-gray-50 rounded-lg px-4 py-3 mb-4 text-sm text-gray-800 leading-relaxed">
          From [date], prices on [product or range] will go up slightly, to [new price]. It is the
          first change in [period], and it lets me keep using the same materials and making everything
          the same way. If you have had your eye on something, the current prices stay until then.
        </div>
        <p className="text-gray-700 leading-relaxed mb-2"><strong>Replying to someone who objects</strong></p>
        <div className="border border-gray-200 bg-gray-50 rounded-lg px-4 py-3 mb-4 text-sm text-gray-800 leading-relaxed">
          Thanks for telling me, and I understand. The new price reflects what it now costs to make
          each piece properly, and I would rather charge a fair price than cut corners. I hope you
          will stay, and I am grateful for your orders so far.
        </div>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">After the change: what to watch</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Expect a quieter week or two. Then compare a full month at the new price with a normal month
          before it, looking at three figures: units sold, revenue and profit. Units may well be down.
          That is fine as long as profit is level or up, which is the whole point of the earlier sum.
          The{" "}
          <Link href="/guides/how-to-calculate-profit-margin/" className="text-blue-600 hover:underline">profit margin guide</Link>{" "}
          sets out a monthly routine for tracking this. Resist the urge to launch a discount in the
          first fortnight; it tells customers the new price was never serious.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Small and regular beats large and rare</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          A seller who adds a little every year rarely has to have a difficult conversation. One who
          holds prices for four years and then needs 25% at once does. Put a date in your calendar,
          once a year, to recheck every product&apos;s cost and decide deliberately whether its price
          still works. Deciding to leave a price alone is a good outcome too, as long as it was a
          decision.
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
