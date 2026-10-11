import type { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { breadcrumbSchema, faqSchema } from "@/lib/seo/schema"
import Breadcrumb from "@/components/layout/Breadcrumb"

export const metadata: Metadata = generatePageMetadata({
  title: "Pricing & Profit Calculators for Small Sellers",
  description:
    "Free tools for pricing a product and checking it pays: markup, profit margin, wholesale, handmade pricing, break-even and discounts, with step-by-step guides.",
  path: "/pricing/",
})

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Pricing & Profit", href: "/pricing/" },
]

const steps = [
  { step: "Find your real cost", text: "Materials, packaging, inbound shipping and your own time. If you make the product yourself, start here.", tool: "Handmade Pricing Calculator", href: "/finance/handmade-pricing-calculator/" },
  { step: "Turn cost into a price", text: "Add a markup, or find the markup hiding in a price you already charge.", tool: "Markup Calculator", href: "/finance/markup-calculator/" },
  { step: "Check what you keep", text: "See the same sale as a margin — the share of the price that is profit.", tool: "Profit Margin Calculator", href: "/finance/profit-margin-calculator/" },
  { step: "Price for shops", text: "Work out a wholesale price and the retail price it leads to, or work back from retail.", tool: "Wholesale Price Calculator", href: "/finance/wholesale-price-calculator/" },
  { step: "Count the sales you need", text: "How many units cover your running costs, and how many reach a profit target.", tool: "Break-Even Calculator", href: "/finance/break-even-calculator/" },
  { step: "Test a promotion", text: "What a discount leaves per sale and how many extra sales it needs to pay for itself.", tool: "Discount Calculator", href: "/finance/discount-calculator/" },
]

const more = [
  { title: "eBay Fee Calculator", href: "/finance/ebay-fee-calculator/", description: "What eBay keeps from a US sale, what you receive, and the price that hits a profit target." },
  { title: "VAT Calculator", href: "/finance/vat-calculator/", description: "Add or remove VAT so you price on the figure before tax." },
  { title: "Sales Tax Calculator", href: "/finance/sales-tax-calculator/", description: "Add US sales tax to a price, or see the tax in a total." },
  { title: "ROI Calculator", href: "/finance/roi-calculator/", description: "Return on the money tied up in stock, tools or advertising." },
  { title: "Cost Reduction Calculator", href: "/finance/cost-reduction-calculator/", description: "What a cheaper supplier or material saves, in dollars and percent." },
]

const guideLinks = [
  { title: "How to Calculate Markup", href: "/guides/how-to-calculate-markup/", description: "One batch of candles from receipts to a price on the label, and the mistakes that shrink a markup." },
  { title: "How to Calculate Profit Margin", href: "/guides/how-to-calculate-profit-margin/", description: "A shop's month worked through gross, operating and net margin." },
  { title: "Markup vs. Margin", href: "/guides/markup-vs-margin/", description: "Why a 50% markup is a 33% margin, with a conversion table." },
]

const faqs = [
  {
    question: "Which calculator should I start with?",
    answer: "If you make what you sell, start with the handmade pricing calculator so your time is counted. If you buy stock and resell it, start with the markup calculator. If you already have a price and want to know whether it works, go straight to the profit margin calculator.",
  },
  {
    question: "Should I price with markup or with margin?",
    answer: "Use markup to build a price, because you start from a cost you know. Use margin to judge the result, because it shows what share of each sale you keep. They describe the same profit from two sides: a 100% markup is a 50% margin.",
  },
  {
    question: "Do these tools include marketplace and card fees?",
    answer: "The handmade pricing calculator has a field for fees and raises the price to absorb them. For the others, add per-sale fees to your cost before you enter it. Fees charged as a percentage of the price are worked through in the advanced section of the markup and break-even pages.",
  },
  {
    question: "Are the calculators free, and do they save my numbers?",
    answer: "They are free, need no account, and run in your browser. Nothing you type is stored. Several tools have a copy-link button that puts your figures into the link itself, so you can reopen or share a calculation.",
  },
]

export default function PricingHubPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <div className="mx-auto max-w-2xl px-4 py-10">
        <Breadcrumb crumbs={crumbs} />

        <h1 className="text-3xl font-bold text-gray-900 mb-3">Pricing &amp; Profit Calculators</h1>
        <p className="text-gray-700 leading-relaxed mb-3">
          A price has to do three jobs: cover what the product cost you, pay for the business around
          it, and leave something over. These tools take you through that in order, whether you run
          a shop, sell online, or make things by hand. Each one shows its formula and worked examples,
          and several let you compare two options side by side before you commit.
        </p>
        <p className="text-sm text-gray-500 mb-8">
          Pick the step you are on, or work down the list for a new product.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mb-4">Price a product, step by step</h2>
        <ol className="space-y-3 mb-10">
          {steps.map((s, i) => (
            <li key={s.href}>
              <Link
                href={s.href}
                className="block p-5 border border-gray-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-colors group"
              >
                <span className="text-xs font-medium text-blue-600 uppercase tracking-wide">Step {i + 1} · {s.step}</span>
                <p className="font-semibold text-gray-900 group-hover:text-blue-700 mt-1">{s.tool}</p>
                <p className="text-sm text-gray-600 mt-1">{s.text}</p>
              </Link>
            </li>
          ))}
        </ol>

        <h2 className="text-xl font-bold text-gray-900 mb-4">Guides</h2>
        <ul className="space-y-3 mb-10">
          {guideLinks.map((g) => (
            <li key={g.href}>
              <Link
                href={g.href}
                className="block p-5 border border-gray-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-colors group"
              >
                <p className="font-semibold text-gray-900 group-hover:text-blue-700">{g.title}</p>
                <p className="text-sm text-gray-600 mt-1">{g.description}</p>
              </Link>
            </li>
          ))}
        </ul>

        <h2 className="text-xl font-bold text-gray-900 mb-4">Fees, tax, returns and costs</h2>
        <ul className="space-y-2 mb-10">
          {more.map((m) => (
            <li key={m.href} className="text-sm text-gray-700">
              <Link href={m.href} className="font-medium text-blue-600 hover:underline">{m.title}</Link>
              {" — "}{m.description}
            </li>
          ))}
        </ul>

        <h2 className="text-xl font-bold text-gray-900 mb-3">Three numbers worth knowing by heart</h2>
        <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside mb-10">
          <li><strong>Your cost per unit, all in.</strong> Every other figure is built on it, and it is the one most often understated.</li>
          <li><strong>Your gross margin.</strong> It is also the largest discount you can give before a sale loses money.</li>
          <li><strong>Your break-even units per month.</strong> It turns a vague sense of &quot;busy enough&quot; into a target you can check.</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-900 mb-4">Frequently asked questions</h2>
        <div className="space-y-4">
          {faqs.map((f) => (
            <div key={f.question}>
              <h3 className="font-semibold text-gray-900 mb-1">{f.question}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{f.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
