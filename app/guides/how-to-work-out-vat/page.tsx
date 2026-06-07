import type { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/seo/schema"
import Breadcrumb from "@/components/layout/Breadcrumb"
import { guides } from "@/lib/content/guides"

const meta = guides.find((g) => g.slug === "how-to-work-out-vat")!

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Guides", href: "/guides/" },
  { name: "How to Work Out VAT", href: "/guides/how-to-work-out-vat/" },
]

const faqs = [
  {
    question: "How do I add 20% VAT to a price?",
    answer: "Multiply the net price by 1.2. A £50 net price becomes £50 × 1.2 = £60 gross, of which £10 is VAT. For the 5% reduced rate, multiply by 1.05 instead.",
  },
  {
    question: "How do I remove VAT from a gross price?",
    answer: "Divide the gross price by 1.2 (for 20% VAT). £60 ÷ 1.2 = £50 net, so the VAT was £10. Do not subtract 20% — that gives the wrong answer.",
  },
  {
    question: "Why can't I just subtract 20% to remove VAT?",
    answer: "Because the 20% was added to the smaller net figure, not the larger gross figure. Subtracting 20% of the gross removes too much. On a £60 gross price, subtracting 20% gives £48, but the correct net price is £50. Always divide by 1.2.",
  },
  {
    question: "What are the current UK VAT rates?",
    answer: "The standard rate is 20% and applies to most goods and services. The reduced rate of 5% covers things like domestic energy and children's car seats. The zero rate (0%) applies to most food, children's clothing, and books. Some items, such as financial services and education, are exempt entirely.",
  },
  {
    question: "Is VAT the same as sales tax?",
    answer: "No. Sales tax is added once, at the final sale to the customer. VAT is collected at every stage of the supply chain, with businesses reclaiming the VAT they pay on purchases. The everyday arithmetic of adding the rate is the same, but the systems differ.",
  },
]

export const metadata: Metadata = generatePageMetadata({
  title: "How to Work Out VAT — Add, Remove & Avoid the Common Mistake",
  description: meta.description,
  path: "/guides/how-to-work-out-vat/",
  keywords: [
    "how to work out vat",
    "how to calculate vat",
    "remove vat from a price",
    "add vat to a price",
    "uk vat rates",
    "reverse vat calculation",
  ],
})

export default function HowToWorkOutVatGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema({ headline: meta.title, description: meta.description, path: "/guides/how-to-work-out-vat/", datePublished: meta.published, dateModified: meta.updated })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      <article className="mx-auto max-w-2xl px-4 pb-16">
        <div className="pt-8">
          <Breadcrumb crumbs={crumbs} />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-3">How to Work Out VAT: A Plain-English Guide</h1>
        <p className="text-sm text-gray-500 mb-6">Tax guide · Updated June 2026</p>

        <p className="text-gray-700 leading-relaxed mb-4">
          VAT (Value Added Tax) is a tax added to most things you buy in the UK and across the EU.
          Working it out comes down to two jobs: <strong>adding</strong> VAT to a price that does not
          include it yet, and <strong>removing</strong> VAT from a price that already does. Both are
          simple once you know the trick — and there is one mistake almost everyone makes when
          removing it, which this guide will help you avoid. If you just want the number now, the{" "}
          <Link href="/finance/vat-calculator/" className="text-blue-600 hover:underline">VAT calculator</Link>{" "}
          does both directions instantly; read on to understand the method.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">The two numbers: net and gross</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Every VAT calculation involves two prices. The <strong>net</strong> price (also called
          "ex-VAT") is the amount before VAT is added. The <strong>gross</strong> price (or "inc-VAT")
          is the total you actually pay, including the VAT. The VAT itself is simply the difference
          between them. Shops in the UK must show gross prices to consumers, while business-to-business
          invoices often show the net price with VAT listed separately.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">UK VAT rates</h2>
        <p className="text-gray-700 leading-relaxed mb-3">There are three rates, plus an exempt category:</p>
        <ul className="space-y-1.5 text-gray-700 list-disc list-inside mb-4">
          <li><strong>Standard rate — 20%.</strong> Most goods and services.</li>
          <li><strong>Reduced rate — 5%.</strong> Domestic energy, children's car seats, some home-energy work.</li>
          <li><strong>Zero rate — 0%.</strong> Most food, children's clothing, books, newspapers, and most public transport.</li>
          <li><strong>Exempt.</strong> Financial services, insurance, education, and healthcare are outside VAT entirely.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          Zero-rated and exempt sound similar but are different in the paperwork: zero-rated items are
          still "taxable" at 0%, while exempt items are not in the VAT system at all. For everyday
          maths, both mean no VAT is added.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">How to add VAT to a price</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          To add VAT, multiply the net price by 1 plus the rate as a decimal. For the standard 20%
          rate, that means multiplying by <strong>1.2</strong>.
        </p>
        <div className="bg-gray-100 rounded-lg px-4 py-3 font-mono text-sm text-gray-800 mb-3">
          Gross = Net × 1.20&nbsp;&nbsp;·&nbsp;&nbsp;VAT = Net × 0.20
        </div>
        <p className="text-gray-700 leading-relaxed mb-2"><strong>Example.</strong> A product has a net price of £50.</p>
        <ul className="space-y-1 text-gray-700 list-disc list-inside mb-4">
          <li>VAT: £50 × 0.20 = <strong>£10</strong></li>
          <li>Gross price: £50 × 1.20 = <strong>£60</strong></li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          For the 5% reduced rate, multiply by 1.05 instead (a £50 net price becomes £52.50). Adding
          VAT is just a percentage increase — the same maths as the{" "}
          <Link href="/percentage/percentage-increase-calculator/" className="text-blue-600 hover:underline">percentage increase calculator</Link>.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">How to remove VAT (and the mistake to avoid)</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          This is where most people slip up. To find the net price from a gross price, you{" "}
          <strong>divide by 1.2</strong> — you do <em>not</em> subtract 20%.
        </p>
        <div className="bg-gray-100 rounded-lg px-4 py-3 font-mono text-sm text-gray-800 mb-3">
          Net = Gross ÷ 1.20&nbsp;&nbsp;·&nbsp;&nbsp;VAT = Gross − Net
        </div>
        <p className="text-gray-700 leading-relaxed mb-2"><strong>Example.</strong> A gross price is £60.</p>
        <ul className="space-y-1 text-gray-700 list-disc list-inside mb-4">
          <li>Net: £60 ÷ 1.20 = <strong>£50</strong></li>
          <li>VAT: £60 − £50 = <strong>£10</strong></li>
        </ul>
        <div className="border-l-4 border-amber-300 bg-amber-50 px-4 py-3 mb-4">
          <p className="text-gray-800 text-sm leading-relaxed">
            <strong>The common mistake:</strong> subtracting 20% from the gross price. On a £60 gross
            price that gives £48 — but the correct net price is £50. The 20% was added to the smaller
            net figure, so taking 20% off the larger gross figure removes too much. Always divide by
            1.2 to go backwards.
          </p>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Quick reference</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-50 text-gray-700">
              <tr>
                <th className="text-left px-3 py-2 font-medium">Net</th>
                <th className="text-right px-3 py-2 font-medium">VAT (20%)</th>
                <th className="text-right px-3 py-2 font-medium">Gross</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {[100, 250, 500, 1000].map((net) => (
                <tr key={net} className="border-t border-gray-100">
                  <td className="px-3 py-2">£{net.toFixed(2)}</td>
                  <td className="px-3 py-2 text-right">£{(net * 0.2).toFixed(2)}</td>
                  <td className="px-3 py-2 text-right font-semibold text-gray-900">£{(net * 1.2).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">VAT vs. sales tax</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          If you are used to US prices, VAT can feel unfamiliar. Sales tax is added once, at the
          checkout, and is shown on top of the ticket price. VAT is collected at every stage of
          production, and the price on the shelf already includes it. The arithmetic of adding the
          rate is identical, so for a one-off calculation you can use the{" "}
          <Link href="/finance/sales-tax-calculator/" className="text-blue-600 hover:underline">sales tax calculator</Link>{" "}
          the same way — the difference is who collects the tax and when.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Do it instantly</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Once you understand the method, you rarely need to do it by hand. The{" "}
          <Link href="/finance/vat-calculator/" className="text-blue-600 hover:underline">VAT calculator</Link>{" "}
          adds or removes VAT at 20%, 5%, or any custom rate and shows the net, gross, and VAT amount
          together. To find what one figure is as a percentage of another — useful for checking an
          invoice — the{" "}
          <Link href="/percentage/x-is-what-percent-of-y/" className="text-blue-600 hover:underline">X is what percent of Y calculator</Link>{" "}
          comes in handy.
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
