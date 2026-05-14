import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/seo/metadata"
import Breadcrumb from "@/components/layout/Breadcrumb"

export const metadata: Metadata = generatePageMetadata({
  title: "Privacy Policy — PercentGuru",
  description: "PercentGuru privacy policy. Covers data collection, cookies, Google Analytics, and advertising.",
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
      <p className="text-sm text-gray-400 mb-8">Last updated: May 2026</p>
      <div className="space-y-8 text-gray-700 leading-relaxed">

        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-2">What we collect</h2>
          <p>
            PercentGuru does not collect personal data directly. There are no accounts, no login,
            and no forms that capture your personal information. All calculator inputs run entirely
            in your browser — your numbers are never sent to any server.
          </p>
          <p className="mt-2">
            We do collect anonymous usage data through Google Analytics (see below), which
            includes pages visited, time on site, browser type, and approximate location (city level).
            This data is aggregated and cannot be used to identify you personally.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-2">Cookies</h2>
          <p className="mb-2">
            PercentGuru uses cookies in the following ways:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>
              <strong>Analytics cookies (Google Analytics)</strong> — We use Google Analytics to
              understand how visitors use the site (which pages are most visited, how long people
              stay, where they come from). Google Analytics sets cookies such as <code className="bg-gray-100 px-1 rounded">_ga</code> and{" "}
              <code className="bg-gray-100 px-1 rounded">_gid</code> to track sessions. This data
              is anonymous and aggregated.
            </li>
            <li>
              <strong>Advertising cookies (Google AdSense)</strong> — We display ads through
              Google AdSense. Google may use cookies such as the DoubleClick cookie to serve ads
              based on your previous visits to this and other websites. You can opt out of
              personalised advertising by visiting{" "}
              <a
                href="https://www.google.com/settings/ads"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Ad Settings
              </a>
              .
            </li>
            <li>
              <strong>Preference cookies</strong> — A small cookie is set locally to remember
              your cookie consent choice.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-2">Third-party services</h2>
          <ul className="space-y-3 text-sm">
            <li>
              <strong>Google Analytics</strong> — Provides anonymous traffic statistics.
              Governed by{" "}
              <a
                href="https://policies.google.com/privacy"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google&apos;s Privacy Policy
              </a>
              . You can opt out using the{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Analytics Opt-out Browser Add-on
              </a>
              .
            </li>
            <li>
              <strong>Google AdSense</strong> — Serves advertisements. Google may use data about
              your browsing activity to personalise ads. Governed by{" "}
              <a
                href="https://policies.google.com/technologies/ads"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google&apos;s Advertising Policies
              </a>
              . Opt out of personalised ads at{" "}
              <a
                href="https://www.google.com/settings/ads"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                google.com/settings/ads
              </a>
              .
            </li>
            <li>
              <strong>Vercel (hosting)</strong> — The site is hosted on Vercel, which may log
              standard server request metadata (IP address, browser type, page URL) as part of
              infrastructure operation. Governed by{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vercel&apos;s Privacy Policy
              </a>
              .
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-2">Your choices</h2>
          <p className="mb-2">
            You can control cookies through your browser settings or by using the opt-out links above.
            Note that disabling cookies may affect how some parts of the site function.
          </p>
          <p>
            EU and UK residents have additional rights under GDPR and UK GDPR, including the right
            to access, correct, or delete data held about you. Because we do not collect personal
            data directly, most of these rights apply to data held by Google rather than PercentGuru.
            Contact Google or use their{" "}
            <a
              href="https://myaccount.google.com/data-and-privacy"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Data &amp; Privacy dashboard
            </a>
            {" "}to manage your data with Google.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-2">Children</h2>
          <p>
            PercentGuru does not knowingly collect information from anyone under 13.
            The site contains no interactive features that would allow personal data submission
            from any age group.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-2">Changes to this policy</h2>
          <p>
            This policy may be updated when we add new services or as legal requirements change.
            The &quot;Last updated&quot; date at the top reflects the most recent revision.
            Continued use of the site after any update constitutes acceptance of the revised policy.
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
