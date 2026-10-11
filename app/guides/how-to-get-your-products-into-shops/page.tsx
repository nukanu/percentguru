import type { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/seo/schema"
import Breadcrumb from "@/components/layout/Breadcrumb"
import { guides } from "@/lib/content/guides"

const meta = guides.find((g) => g.slug === "how-to-get-your-products-into-shops")!

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Guides", href: "/guides/" },
  { name: "How to Get Your Products into Shops", href: "/guides/how-to-get-your-products-into-shops/" },
]

const faqs = [
  {
    question: "Should I agree to sale or return?",
    answer: "Sale or return, also called consignment, means the shop pays you only for what sells and hands back the rest. It lowers the shop's risk, so it can open a door that a normal order would not. The cost is that your stock and cash are tied up on someone else's shelf. If you try it, put a time limit on it, keep a signed list of what you left, agree who pays for damaged items, and review after two or three months.",
  },
  {
    question: "Do I need barcodes?",
    answer: "Many small independent shops do not ask for them and price items by hand. Larger retailers and shops with stock systems usually do. Ask each buyer what they need before you print packaging, and do not let the question delay your first approaches.",
  },
  {
    question: "What does pro forma mean on a first order?",
    answer: "It means the shop pays before you send the goods. It is a normal request for a first order between two businesses that do not know each other, and no reasonable buyer is offended by it. Once a shop has ordered and paid a couple of times, you can decide whether to offer payment after delivery.",
  },
  {
    question: "Can I tell a shop what price to charge?",
    answer: "You can give a suggested retail price, and most shops will follow it because it matches how they work out their own margin. The final price is normally the shop's decision, and the rules on insisting otherwise differ from country to country. What you fully control is your own price: keep it at the suggested retail price so you never undercut your stockists.",
  },
  {
    question: "Is a trade show worth it for a beginner?",
    answer: "Usually not yet. Stands, travel and samples are expensive, and buyers at shows expect a tested range and reliable supply. Approach a handful of shops directly first. When several are reordering and you can describe what sells, a show becomes a way to multiply something that already works.",
  },
]

export const metadata: Metadata = generatePageMetadata({
  title: "How to Get Your Products into Shops: A Wholesale Starter Guide",
  description: meta.description,
  path: "/guides/how-to-get-your-products-into-shops/",
  keywords: [
    "how to get your products into shops",
    "how to sell to retailers",
    "how to wholesale handmade products",
    "wholesale line sheet",
    "how to approach shops to stock your product",
  ],
})

export default function ProductsIntoShopsGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema({ headline: meta.title, description: meta.description, path: "/guides/how-to-get-your-products-into-shops/", datePublished: meta.published, dateModified: meta.updated })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      <article className="mx-auto max-w-2xl px-4 pb-16">
        <div className="pt-8">
          <Breadcrumb crumbs={crumbs} />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-3">How to Get Your Products into Shops: A Wholesale Starter Guide</h1>
        <p className="text-sm text-gray-500 mb-6">Selling guide · Updated October 2026</p>

        <p className="text-gray-700 leading-relaxed mb-4">
          Selling to shops is a different business from selling to customers. One conversation can
          bring an order of forty items instead of one, and a good stockist reorders for years without
          you finding a single new buyer. In exchange you give up about half the retail price and
          take on a buyer who expects you to be organised. This guide covers what to have in place
          first, how to choose shops, what to send, and how to handle the questions a buyer will ask.
          The running example is a small greeting card range.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Three things that must be true first</h2>
        <ul className="space-y-1 text-gray-700 list-disc list-inside mb-4">
          <li><strong>The price works at half.</strong> Shops generally expect to pay around 50% of the retail price. If that is below your cost, stop here and fix the product.</li>
          <li><strong>You can make it again.</strong> A shop that sells out wants more within weeks, the same as before.</li>
          <li><strong>It is ready for a shelf.</strong> Packaging that survives handling, a clear price point, your name on it.</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Run the numbers before you send anything</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          A card retails at $4.50, so the wholesale price is $2.25. Printed, with an envelope and a
          sleeve, it costs 70 cents. That leaves $1.55 a card, against about $3.80 when the maker
          sells it herself. Less per card, but look at the volume: ten shops each reordering $120 a
          quarter is $4,800 a year, about 2,100 cards, and roughly $3,300 of profit without a single
          market stall. The{" "}
          <Link href="/finance/wholesale-price-calculator/" className="text-blue-600 hover:underline">wholesale price calculator</Link>{" "}
          checks whether your own product survives the halving. If you make it by hand and have not
          costed your time, do that first with the{" "}
          <Link href="/guides/how-to-price-handmade-items/" className="text-blue-600 hover:underline">guide to pricing handmade items</Link>.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Choose shops the way a buyer would</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The most common mistake is approaching every shop that sells roughly the right kind of
          thing. Buyers say yes to products that fit what is already working for them. Before adding
          a shop to your list, check three things, in person if you can:
        </p>
        <ul className="space-y-1 text-gray-700 list-disc list-inside mb-4">
          <li><strong>Price range.</strong> Do the cards on their shelves sell for about what yours would?</li>
          <li><strong>Customers.</strong> Are the people in the shop the people who buy from you already?</li>
          <li><strong>Gaps.</strong> Is there something your range adds, instead of duplicating what they stock?</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          Start with around twenty independent shops. Independents decide quickly and one person
          usually does the buying. Avoid pitching two shops on the same street: stockists value
          having something their neighbour does not, and offering that is one of the few things a
          small supplier can give that a big one cannot.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">What to have ready: the line sheet</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          A line sheet is a one- or two-page document that lets a buyer place an order without
          asking you anything. It is plainer than a brochure. It should show:
        </p>
        <ul className="space-y-1 text-gray-700 list-disc list-inside mb-4">
          <li>A clear photo, name and code for each product</li>
          <li>The wholesale price and the suggested retail price, side by side</li>
          <li>How items are packed, for example cards in sixes per design</li>
          <li>Your minimum order, lead time and how to order</li>
          <li>Your name, email and phone number</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          Have samples you can post or drop off, and decide your terms before anyone asks. Buyers
          notice hesitation.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">The terms buyers ask about</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Minimum order.</strong> Set one, so small orders are worth packing. For the cards, a
          $90 minimum is 40 cards and $62 of profit. Too high and a new shop will not risk it; too low
          and postage eats the order. The{" "}
          <Link href="/finance/break-even-calculator/" className="text-blue-600 hover:underline">break-even calculator</Link>{" "}
          helps you find the smallest order that pays.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Payment.</strong> Asking for payment before dispatch on a first order is standard.
          Paying after delivery, often within 30 days, is something to offer once a shop has a record
          with you.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Lead time.</strong> Say how long an order takes and then beat it. Reliability is
          what a buyer remembers.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Exclusivity.</strong> A shop may ask to be your only stockist nearby. That is
          reasonable for a defined area if they order regularly, so tie it to a minimum amount of
          business.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Damages and slow sellers.</strong> Decide whether you will replace damaged stock or
          swap designs that do not move. A swap costs little and makes a second order far more likely.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Making the approach</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Find out who does the buying; in a small shop it is usually the owner. Email first, or call
          at a quiet time and ask when would suit. Do not pitch across the counter on a busy Saturday.
          Keep the message short, make it about their shop, and attach the line sheet.
        </p>
        <div className="border border-gray-200 bg-gray-50 rounded-lg px-4 py-3 mb-4 text-sm text-gray-800 leading-relaxed">
          Hi [name], I make [one-line description] and I think they would sit well alongside
          [something specific they stock]. I was in the shop last week and noticed [a real
          observation]. Wholesale prices start at [price], with a suggested retail of [price], and
          the minimum first order is [amount]. My line sheet is attached. I would be glad to drop off
          samples if that is useful. Thank you for your time. [Your name, phone number]
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          The detail about their shop does more work than anything else in that message. It shows
          you have chosen them, and buyers can tell when they are one of two hundred.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Following up, and hearing no</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Most first emails get no reply, and that is rarely a decision. Follow up once after a week
          or so, briefly, then leave it for a season. A &quot;not right now&quot; is worth asking
          about: timing and budget are common reasons, and both change. Keep a simple list of who you
          contacted, when, and what they said. Come back with something new, such as a seasonal
          design or a best-seller you can point to.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">After the first order: make reordering easy</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The first order proves little. The second is what makes a stockist. Deliver on time and
          well packed, with an invoice that matches the order. A few weeks later, ask what is selling
          and offer to top up the best lines; the shop is busy and will not always remember to
          reorder. Tell them which designs do well elsewhere. If a display stand or a small sign helps
          the product sell, consider supplying one. All of this costs less than finding a new shop.
        </p>
        <div className="border-l-4 border-amber-300 bg-amber-50 px-4 py-3 mb-4">
          <p className="text-gray-800 text-sm leading-relaxed">
            <strong>Do not undercut your stockists.</strong> If your website or market stall sells the
            same card for less than the shop does, the shop will find out, and you will lose the
            account. Keep your own price at the suggested retail price. The gap between that and your
            wholesale price is what you earn for doing the selling yourself.
          </p>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Know when wholesale is not the right move</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Wholesale suits products that are quick to make, easy to repeat and cheap to post. It suits
          one-off or very labour-heavy pieces badly, because half the price rarely covers the hours.
          For those, selling direct is the better route, and the{" "}
          <Link href="/guides/ebay-vs-etsy-vs-own-website/" className="text-blue-600 hover:underline">guide to where to sell online</Link>{" "}
          compares the options. It is fine to wholesale part of a range and keep the rest for your
          own customers. Check each product separately with the{" "}
          <Link href="/finance/profit-margin-calculator/" className="text-blue-600 hover:underline">profit margin calculator</Link>,
          or work forward from cost with the{" "}
          <Link href="/finance/markup-calculator/" className="text-blue-600 hover:underline">markup calculator</Link>,
          before it goes on the line sheet.
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
