type ResultBlockProps = {
  label: string
  value: string | null
}

export default function ResultBlock({ label, value }: ResultBlockProps) {
  return (
    <div className="col-span-full flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4 px-5 py-4 bg-blue-600 rounded-xl">
      <p className="text-xs font-semibold text-blue-200 uppercase tracking-wide sm:shrink-0">{label}</p>
      <p
        key={value ?? "__empty"}
        className="text-2xl sm:text-3xl font-bold text-white result-animate whitespace-nowrap leading-tight tabular-nums sm:text-right"
      >
        {value ?? <span className="text-blue-300 text-4xl">—</span>}
      </p>
    </div>
  )
}
