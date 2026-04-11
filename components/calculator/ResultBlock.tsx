type ResultBlockProps = {
  label: string
  value: string | null
}

export default function ResultBlock({ label, value }: ResultBlockProps) {
  return (
    <div className="mt-4 p-5 bg-blue-600 rounded-xl">
      <p className="text-xs font-semibold text-blue-200 uppercase tracking-wide mb-1">{label}</p>
      <p className="text-4xl font-bold text-white">
        {value ?? <span className="text-blue-300">—</span>}
      </p>
    </div>
  )
}
