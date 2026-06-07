type ResultBlockProps = {
  label: string
  value: string | null
}

export default function ResultBlock({ label, value }: ResultBlockProps) {
  return (
    <div className="p-5 bg-blue-600 rounded-xl">
      <p className="text-xs font-semibold text-blue-200 uppercase tracking-wide mb-1">{label}</p>
      <p
        key={value ?? "__empty"}
        className="text-3xl sm:text-4xl font-bold text-white result-animate break-words leading-tight tabular-nums"
      >
        {value ?? <span className="text-blue-300 text-4xl">—</span>}
      </p>
    </div>
  )
}
