import Link from "next/link"

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-4xl px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-blue-600 hover:text-blue-700">
          PercentGuru
        </Link>
        <nav className="flex gap-6 text-sm font-medium text-gray-600">
          <Link href="/percentage/" className="hover:text-blue-600 transition-colors">
            Percentage
          </Link>
          <Link href="/finance/" className="hover:text-blue-600 transition-colors">
            Finance
          </Link>
        </nav>
      </div>
    </header>
  )
}
