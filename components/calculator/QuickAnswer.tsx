type QuickAnswerProps = {
  text: string | null
}

export default function QuickAnswer({ text }: QuickAnswerProps) {
  if (!text) return null

  return (
    <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
      <p className="text-sm font-semibold text-green-700 mb-1">Quick Answer</p>
      <p className="text-green-900">{text}</p>
    </div>
  )
}
