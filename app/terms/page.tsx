import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/seo/metadata"
import Breadcrumb from "@/components/layout/Breadcrumb"

export const metadata: Metadata = generatePageMetadata({
  title: "Terms of Use — PercentGuru",
  description: "PercentGuru terms of use. Calculators are for informational purposes only.",
  path: "/terms/",
})

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 pt-8 pb-16">
      <Breadcrumb crumbs={[
        { name: "Home", href: "/" },
        { name: "Terms of Use", href: "/terms/" },
      ]} />
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms of Use</h1>
      <p className="text-sm text-gray-400 mb-8">Last updated: April 2026</p>
      <div className="space-y-8 text-gray-700 leading-relaxed">
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-2">Informational use only</h2>
          <p>
            All calculators on PercentGuru are provided for informational and educational purposes.
            They are not a substitute for professional financial, tax, legal, or accounting advice.
            Do not rely solely on these results for significant financial decisions.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-2">Accuracy</h2>
          <p>
            We make reasonable efforts to ensure calculations are correct. However, PercentGuru
            makes no warranty — express or implied — as to the accuracy, completeness, or
            suitability of any result for any specific purpose. Use results at your own risk.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-2">Limitations</h2>
          <p>
            PercentGuru is not liable for any loss or damage arising from use of this site,
            including errors in calculations, reliance on results, or interruption of service.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-2">Intellectual property</h2>
          <p>
            The content on PercentGuru — including text, formulas, and examples — is original
            and may not be reproduced at scale without permission. Linking to any page is
            always welcome.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-2">Changes</h2>
          <p>
            These terms may be updated without notice. Continued use of the site constitutes
            acceptance of any changes.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-2">Contact</h2>
          <p>
            <a href="mailto:hello@percentguru.com" className="text-blue-600 hover:underline">
              hello@percentguru.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
