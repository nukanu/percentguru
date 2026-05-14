import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 mt-16">
      <div className="mx-auto max-w-4xl px-4 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm text-gray-500">
          <div>
            <p className="font-semibold text-gray-700 mb-2">Percentage</p>
            <ul className="space-y-1">
              <li><Link href="/percentage/tip-calculator/" className="hover:text-blue-600">Tip Calculator</Link></li>
              <li><Link href="/percentage/grade-calculator/" className="hover:text-blue-600">Grade Calculator</Link></li>
              <li><Link href="/percentage/what-is-x-percent-of-y/" className="hover:text-blue-600">What is X% of Y?</Link></li>
              <li><Link href="/percentage/percentage-increase-calculator/" className="hover:text-blue-600">Percentage Increase</Link></li>
              <li><Link href="/percentage/percentage-points-calculator/" className="hover:text-blue-600">Percentage Points</Link></li>
              <li><Link href="/percentage/reverse-percentage-calculator/" className="hover:text-blue-600">Reverse Percentage</Link></li>
              <li><Link href="/percentage/gpa-calculator/" className="hover:text-blue-600">GPA Calculator</Link></li>
              <li><Link href="/percentage/fraction-to-percent-calculator/" className="hover:text-blue-600">Fraction to Percent</Link></li>
              <li><Link href="/percentage/decimal-to-percent-calculator/" className="hover:text-blue-600">Decimal to Percent</Link></li>
              <li><Link href="/percentage/percent-to-decimal-calculator/" className="hover:text-blue-600">Percent to Decimal</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-gray-700 mb-2">Finance</p>
            <ul className="space-y-1">
              <li><Link href="/finance/discount-calculator/" className="hover:text-blue-600">Discount Calculator</Link></li>
              <li><Link href="/finance/profit-margin-calculator/" className="hover:text-blue-600">Profit Margin</Link></li>
              <li><Link href="/finance/roi-calculator/" className="hover:text-blue-600">ROI Calculator</Link></li>
              <li><Link href="/finance/loan-payment-calculator/" className="hover:text-blue-600">Loan Payment</Link></li>
              <li><Link href="/finance/markup-calculator/" className="hover:text-blue-600">Markup Calculator</Link></li>
              <li><Link href="/finance/break-even-calculator/" className="hover:text-blue-600">Break-Even</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-gray-700 mb-2">More Finance</p>
            <ul className="space-y-1">
              <li><Link href="/finance/compound-interest-calculator/" className="hover:text-blue-600">Compound Interest</Link></li>
              <li><Link href="/finance/sales-tax-calculator/" className="hover:text-blue-600">Sales Tax</Link></li>
              <li><Link href="/finance/interest-calculator/" className="hover:text-blue-600">Simple Interest</Link></li>
              <li><Link href="/finance/weighted-average-calculator/" className="hover:text-blue-600">Weighted Average</Link></li>
              <li><Link href="/finance/vat-calculator/" className="hover:text-blue-600">VAT Calculator</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-gray-700 mb-2">PercentGuru</p>
            <ul className="space-y-1">
              <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
              <li><Link href="/about/" className="hover:text-blue-600">About</Link></li>
              <li><Link href="/contact/" className="hover:text-blue-600">Contact</Link></li>
              <li><Link href="/privacy-policy/" className="hover:text-blue-600">Privacy Policy</Link></li>
              <li><Link href="/terms/" className="hover:text-blue-600">Terms of Use</Link></li>
            </ul>
          </div>
        </div>
        <p className="mt-8 text-xs text-gray-600 text-center">
          © {new Date().getFullYear()} PercentGuru. Free calculators for percentages, discounts, taxes, and financial calculations.
        </p>
      </div>
    </footer>
  )
}
