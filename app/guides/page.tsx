import type { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata } from "@/lib/seo/metadata"
import Breadcrumb from "@/components/layout/Breadcrumb"
import { guides } from "@/lib/content/guides"

export const metadata: Metadata = generatePageMetadata({
  title: "Guides — Percentages, Tax & Money, Explained",
  description:
    "Plain-English guides to percentages, VAT, tax, pricing, and everyday money maths — with formulas, worked examples, and the calculators to do it instantly.",
  path: "/guides/",
})

export default function GuidesPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      <Breadcrumb
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/guides/" },
        ]}
      />

      <h1 className="text-3xl font-bold text-gray-900 mb-3">Guides</h1>
      <p className="text-gray-600 mb-8 text-lg">
        Clear, practical explanations of the maths behind everyday money decisions — how to add and
        remove VAT, work out a percentage, price a product, and more. Each guide shows the method
        and links to the calculator that does it for you.
      </p>

      <ul className="space-y-3">
        {guides.map((g) => (
          <li key={g.slug}>
            <Link
              href={`/guides/${g.slug}/`}
              className="block p-5 border border-gray-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-colors group"
            >
              <span className="text-xs font-medium text-blue-600 uppercase tracking-wide">{g.category}</span>
              <p className="font-semibold text-gray-900 group-hover:text-blue-700 mt-1">{g.title}</p>
              <p className="text-sm text-gray-600 mt-1">{g.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
