import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/seo/metadata"
import Breadcrumb from "@/components/layout/Breadcrumb"
import ContactForm from "./ContactForm"

export const metadata: Metadata = generatePageMetadata({
  title: "Contact — PercentGuru",
  description: "Get in touch with the PercentGuru team for corrections, suggestions, or general enquiries.",
  path: "/contact/",
})

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 pt-8 pb-16">
      <Breadcrumb crumbs={[
        { name: "Home", href: "/" },
        { name: "Contact", href: "/contact/" },
      ]} />
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Contact</h1>
      <p className="text-gray-600 mb-8">
        Found a calculation error? Have a suggestion for a new calculator? Get in touch — we read every message.
      </p>

      <ContactForm />

      <p className="mt-8 text-sm text-gray-500">
        Or email us directly at{" "}
        <a href="mailto:hello@percentguru.com" className="text-blue-600 hover:underline">
          hello@percentguru.com
        </a>
        . We aim to respond within a few business days.
      </p>
    </div>
  )
}
