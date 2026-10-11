import Link from "next/link"

function LogoMark() {
  return (
    <svg width="28" height="28" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="36" cy="36" r="22" fill="#2B5BFF" />
      <rect x="68" y="-2" width="24" height="164" rx="12" ry="12" transform="rotate(35 80 80)" fill="#2B5BFF" />
      <circle cx="124" cy="124" r="22" fill="#2B5BFF" />
    </svg>
  )
}

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-4xl px-4 py-4 flex flex-wrap items-center justify-between gap-y-2">
        <Link href="/" className="flex items-center gap-2.5 hover:opacity-90 transition-opacity">
          <LogoMark />
          <span className="text-xl font-semibold tracking-tight text-gray-900">
            percent<span className="text-blue-600">guru</span>
          </span>
        </Link>
        <nav className="flex gap-4 sm:gap-6 text-sm font-medium text-gray-600">
          <Link href="/pricing/" className="hover:text-blue-600 transition-colors">
            Pricing
          </Link>
          <Link href="/percentage/" className="hover:text-blue-600 transition-colors">
            Percentage
          </Link>
          <Link href="/finance/" className="hover:text-blue-600 transition-colors">
            Finance
          </Link>
          <Link href="/guides/" className="hover:text-blue-600 transition-colors">
            Guides
          </Link>
        </nav>
      </div>
    </header>
  )
}
