"use client"

import { useState } from "react"
import { GPA_GRADES, calculateGpa, gradeToGpaPoints } from "@/lib/calculators/percentage"
import ResultBlock from "@/components/calculator/ResultBlock"
import QuickAnswer from "@/components/calculator/QuickAnswer"

type Course = { grade: string; credits: string }

const EMPTY_COURSE: Course = { grade: "A", credits: "" }

export default function GpaCalculatorWidget() {
  const [courses, setCourses] = useState<Course[]>([
    { grade: "A", credits: "" },
    { grade: "B+", credits: "" },
    { grade: "B", credits: "" },
    { grade: "A-", credits: "" },
  ])

  function updateCourse(i: number, field: keyof Course, value: string) {
    setCourses((prev) => prev.map((c, idx) => (idx === i ? { ...c, [field]: value } : c)))
  }

  function addCourse() {
    setCourses((prev) => [...prev, { ...EMPTY_COURSE }])
  }

  function removeCourse(i: number) {
    setCourses((prev) => prev.filter((_, idx) => idx !== i))
  }

  const parsed = courses
    .map((c) => ({ grade: c.grade, credits: parseFloat(c.credits) }))
    .filter((c) => !isNaN(c.credits) && c.credits > 0)

  const gpa = parsed.length > 0 ? calculateGpa(parsed) : null
  const totalCredits = parsed.reduce((s, c) => s + c.credits, 0)

  const gpaLabel =
    gpa === null ? null
    : gpa >= 3.7 ? "Dean's List range"
    : gpa >= 3.0 ? "Good standing"
    : gpa >= 2.0 ? "Satisfactory"
    : "Below average"

  const quickAnswer =
    gpa !== null
      ? `GPA: ${gpa.toFixed(2)} over ${totalCredits} credit hours`
      : null

  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
      <div className="space-y-2 mb-4">
        <div className="grid grid-cols-[1fr_100px_32px] gap-2 text-xs font-semibold text-gray-500 uppercase tracking-wide px-1">
          <span>Letter Grade</span>
          <span>Credit Hours</span>
          <span />
        </div>
        {courses.map((course, i) => (
          <div key={i} className="grid grid-cols-[1fr_100px_32px] gap-2 items-center">
            <select
              value={course.grade}
              onChange={(e) => updateCourse(i, "grade", e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2.5 text-gray-900 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {GPA_GRADES.map((g) => (
                <option key={g} value={g}>
                  {g} — {gradeToGpaPoints(g).toFixed(1)}
                </option>
              ))}
            </select>
            <input
              type="text"
              inputMode="decimal"
              value={course.credits}
              onChange={(e) => updateCourse(i, "credits", e.target.value)}
              placeholder="e.g. 3"
              className="border border-gray-300 rounded-lg px-3 py-2.5 text-gray-900 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={() => removeCourse(i)}
              disabled={courses.length <= 1}
              className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-red-500 disabled:opacity-30 transition-colors"
              aria-label="Remove course"
            >
              ×
            </button>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={addCourse}
        className="text-sm text-blue-600 hover:text-blue-700 font-medium mb-5"
      >
        + Add course
      </button>

      <div className="grid sm:grid-cols-3 gap-3 mt-2">
        <ResultBlock label="GPA (4.0 scale)" value={gpa !== null ? gpa.toFixed(2) : null} />
        <ResultBlock label="Total Credits" value={totalCredits > 0 ? String(totalCredits) : null} />
        <ResultBlock label="Standing" value={gpaLabel} />
      </div>
      <QuickAnswer text={quickAnswer} />
    </div>
  )
}
