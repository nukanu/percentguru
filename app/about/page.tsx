import type { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata } from "@/lib/seo/metadata"
import Breadcrumb from "@/components/layout/Breadcrumb"

export const metadata: Metadata = generatePageMetadata({
  title: "About PercentGuru — Free Percentage & Finance Calculators",
  description: "PercentGuru provides free, accurate percentage and finance calculators with full explanations. Learn how we build and verify every calculator on the site.",
  path: "/about/",
})

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 pt-8 pb-16">
      <Breadcrumb crumbs={[
        { name: "Home", href: "/" },
        { name: "About", href: "/about/" },
      ]} />
      <h1 className="text-3xl font-bold text-gray-900 mb-6">About PercentGuru</h1>
      <div className="space-y-8 text-gray-700 leading-relaxed">

        <p className="text-lg">
          PercentGuru is a free calculator site for percentage and finance maths. Every calculator
          shows the answer instantly, explains the formula, and walks through worked examples — so
          you understand the result, not just get a number.
        </p>

        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-3">What we cover</h2>
          <p className="mb-3">
            Two calculator hubs with 28 tools across everyday and financial maths:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-xl p-4 bg-gray-50">
              <p className="font-semibold text-gray-800 mb-2"><Link href="/percentage/" className="text-blue-600 hover:underline">Percentage Calculators</Link></p>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>Percentage increase, decrease, and change</li>
                <li>Percentage difference and error</li>
                <li>Reverse percentage (find the original)</li>
                <li>Percent off, tip, and grade calculators</li>
                <li>GPA, fraction-to-percent, salary raise</li>
                <li>Annual change (CAGR) and percentage points</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-xl p-4 bg-gray-50">
              <p className="font-semibold text-gray-800 mb-2"><Link href="/finance/" className="text-blue-600 hover:underline">Finance Calculators</Link></p>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>Discount, markup, and profit margin</li>
                <li>ROI, break-even, and cost reduction</li>
                <li>Sales tax and VAT (add or remove)</li>
                <li>Simple and compound interest</li>
                <li>Loan payment and weighted average</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-3">How we build each calculator</h2>
          <p className="mb-3">
            Every calculator page on PercentGuru follows the same standard:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-sm">
            <li><strong>Formula sourced from authoritative references</strong> — standard mathematical definitions, accounting standards, or established textbook formulas. No approximations unless disclosed.</li>
            <li><strong>Results verified with manual calculations</strong> — every formula is checked against hand-calculated examples before the page is published.</li>
            <li><strong>Worked examples use real-world numbers</strong> — not abstract variables, but concrete scenarios (a £80 product, a $50,000 salary, a 3-credit university course).</li>
            <li><strong>Edge cases documented</strong> — zero denominators, negative results, values over 100%, and other non-obvious situations are addressed in the FAQ of each calculator.</li>
            <li><strong>Internal links connect related tools</strong> — every page links to 3–5 related calculators so you can move naturally between tools without searching.</li>
          </ol>
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-3">Accuracy and limitations</h2>
          <p className="mb-3">
            All calculations run entirely in your browser using standard mathematical formulas.
            No data is sent to any server. No account is required.
          </p>
          <p className="mb-3">
            Results are accurate to the formula definitions used. Rounding follows standard
            conventions (two decimal places for monetary values, up to four decimal places for
            percentages where relevant).
          </p>
          <p>
            PercentGuru calculators are for informational and educational purposes. For decisions
            involving significant financial commitments — loans, investments, tax filings, legal
            obligations — verify results with a qualified accountant, financial adviser, or solicitor.
            The site does not provide financial or legal advice.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-3">Why this site exists</h2>
          <p>
            Most calculator sites are built for quantity, not quality — thin pages with minimal
            explanation, buried under ads or slow to load. PercentGuru was built to answer the
            question behind the calculation, not just produce a number. When someone searches
            &quot;how do I calculate percentage change&quot;, they need to understand the formula
            well enough to apply it themselves next time — not just get the answer to one specific
            instance. Every page is written with that in mind.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-3">Contact and corrections</h2>
          <p>
            Found an error in a formula, a broken calculator, or a page that could be clearer?
            {" "}<Link href="/contact/" className="text-blue-600 hover:underline">Get in touch</Link>.
            We read and respond to every message. Corrections are treated as priority fixes —
            accuracy matters more than any individual page.
          </p>
        </div>

      </div>
    </div>
  )
}
