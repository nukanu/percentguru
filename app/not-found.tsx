import Link from "next/link"

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
      <p className="text-gray-500 mb-8">
        The calculator or page you&apos;re looking for doesn&apos;t exist.
      </p>
      <div className="flex justify-center gap-4">
        <Link
          href="/"
          className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Go Home
        </Link>
        <Link
          href="/percentage/"
          className="px-5 py-2 border border-gray-300 text-gray-700 rounded-lg hover:border-blue-400 hover:text-blue-600 transition-colors"
        >
          Percentage Calculators
        </Link>
      </div>
    </div>
  )
}
