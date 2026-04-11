import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/seo/metadata"
import Breadcrumb from "@/components/layout/Breadcrumb"

export const metadata: Metadata = generatePageMetadata({
  title: "Privacy Policy — PercentGuru",
  description: "PercentGuru privacy policy. We do not collect personal data or require accounts.",
  path: "/privacy-policy/",
})

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 pt-8 pb-16">
      <Breadcrumb crumbs={[
        { name: "Home", href: "/" },
        { name: "Privacy Policy", href: "/privacy-policy/" },
      ]} />
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-400 mb-8">Last updated: April 2026</p>
      <div className="space-y-8 text-gray-700 leading-relaxed">
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-2">What we collect</h2>
          <p>
            PercentGuru does not collect personal data. There are no accounts, no login, and
            no forms that capture your information. All calculations run entirely in your browser —
            your inputs are never sent to any server.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-2">Cookies</h2>
          <p>
            We do not use tracking cookies or advertising cookies. If we add analytics in future
            (such as basic page-view counts), this policy will be updated to reflect that.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-2">Third-party services</h2>
          <p>
            PercentGuru is hosted on Vercel. Vercel may log standard server request metadata
            (IP address, browser type, page URL) as part of infrastructure operation. This is
            governed by{" "}
            <a
              href="https://vercel.com/legal/privacy-policy"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vercel&apos;s privacy policy
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-2">Children</h2>
          <p>
            PercentGuru does not knowingly collect information from anyone under 13.
            The site contains no interactive features that would allow data submission from any age group.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-2">Contact</h2>
          <p>
            Questions about this policy:{" "}
            <a href="mailto:hello@percentguru.com" className="text-blue-600 hover:underline">
              hello@percentguru.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
