import Link from "next/link"
import { breadcrumbSchema } from "@/lib/seo/schema"

type Crumb = {
  name: string
  href: string
}

export default function Breadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  const schema = breadcrumbSchema(crumbs)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
        <ol className="flex flex-wrap items-center gap-1">
          {crumbs.map((crumb, index) => (
            <li key={crumb.href} className="flex items-center gap-1">
              {index < crumbs.length - 1 ? (
                <>
                  <Link href={crumb.href} className="hover:text-blue-600 transition-colors">
                    {crumb.name}
                  </Link>
                  <span aria-hidden="true">/</span>
                </>
              ) : (
                <span className="text-gray-800 font-medium">{crumb.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
