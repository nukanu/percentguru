"use client"

type InputFieldProps = {
  label: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
  suffix?: string
}

export default function InputField({
  label,
  value,
  onChange,
  placeholder = "0",
  suffix,
}: InputFieldProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="flex-1 px-3 py-2 text-gray-900 bg-white outline-none text-base"
        />
        {suffix && (
          <span className="px-3 py-2 bg-gray-50 border-l border-gray-300 text-gray-500 text-sm font-medium">
            {suffix}
          </span>
        )}
      </div>
    </div>
  )
}
