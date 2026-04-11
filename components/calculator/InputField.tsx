"use client"

type InputFieldProps = {
  label: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
  suffix?: string
  autoFocus?: boolean
  error?: string
}

export default function InputField({
  label,
  value,
  onChange,
  placeholder = "e.g. 100",
  suffix,
  autoFocus,
  error,
}: InputFieldProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <div
        className={`flex items-center border rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 transition-colors ${
          error
            ? "border-red-400 focus-within:ring-red-400"
            : "border-gray-300 focus-within:border-blue-500"
        }`}
      >
        <input
          type="text"
          inputMode="decimal"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          autoFocus={autoFocus}
          className="flex-1 px-3 py-2.5 text-gray-900 bg-white outline-none text-base min-w-0"
        />
        {suffix && (
          <span className="px-3 py-2.5 bg-gray-50 border-l border-gray-200 text-gray-500 text-sm font-medium shrink-0">
            {suffix}
          </span>
        )}
      </div>
      {error && (
        <p className="text-xs text-red-500 mt-0.5">{error}</p>
      )}
    </div>
  )
}
