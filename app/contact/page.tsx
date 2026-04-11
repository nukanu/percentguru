import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/seo/metadata"
import Breadcrumb from "@/components/layout/Breadcrumb"

export const metadata: Metadata = generatePageMetadata({
  title: "Contact — PercentGuru",
  description: "Get in touch with PercentGuru for corrections, suggestions, or general enquiries.",
  path: "/contact/",
})

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 pt-8 pb-16">
      <Breadcrumb crumbs={[
        { name: "Home", href: "/" },
        { name: "Contact", href: "/contact/" },
      ]} />
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Contact</h1>
      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          Found a calculation error? Have a suggestion for a new calculator? Get in touch.
        </p>

        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-2">Email</h2>
          <p>
            <a href="mailto:hello@percentguru.com" className="text-blue-600 hover:underline">
              hello@percentguru.com
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-2">What to include</h2>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
            <li>The URL of the calculator page</li>
            <li>What you entered and what result you expected</li>
            <li>Any relevant context (e.g. the formula you were comparing against)</li>
          </ul>
        </div>

        <p className="text-sm text-gray-500">
          We aim to respond within a few business days. For mathematical corrections, we verify
          before updating any page.
        </p>
      </div>
    </div>
  )
}
