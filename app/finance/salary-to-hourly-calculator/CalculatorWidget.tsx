"use client"

import { useState } from "react"
import { inputError, isValid, fmtMoney } from "@/lib/calculators/utils"
import InputField from "@/components/calculator/InputField"
import ResultBlock from "@/components/calculator/ResultBlock"
import QuickAnswer from "@/components/calculator/QuickAnswer"

export default function SalaryToHourlyWidget() {
  const [salary, setSalary] = useState("")
  const [hoursPerWeek, setHoursPerWeek] = useState("40")
  const [weeksPerYear, setWeeksPerYear] = useState("52")

  const salaryError = inputError(salary)
  const hoursError = inputError(hoursPerWeek)
  const weeksError = inputError(weeksPerYear)

  const hasInput = isValid(salary) && isValid(hoursPerWeek) && isValid(weeksPerYear)

  const annualSalary = hasInput ? parseFloat(salary) : null
  const hours = hasInput ? parseFloat(hoursPerWeek) : null
  const weeks = hasInput ? parseFloat(weeksPerYear) : null

  const hourly = annualSalary !== null && hours !== null && weeks !== null && hours * weeks > 0
    ? annualSalary / (hours * weeks)
    : null

  const daily = hourly !== null && hours !== null ? hourly * hours : null
  const weekly = annualSalary !== null && weeks !== null ? annualSalary / weeks : null
  const monthly = annualSalary !== null ? annualSalary / 12 : null

  const quickAnswer =
    hourly !== null
      ? `$${parseFloat(salary).toLocaleString()} salary = $${fmtMoney(hourly)}/hr, $${fmtMoney(daily!)}/day, $${fmtMoney(weekly!)}/week, $${fmtMoney(monthly!)}/month`
      : null

  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
      <div className="grid sm:grid-cols-3 gap-4">
        <InputField
          label="Annual Salary ($)"
          value={salary}
          onChange={setSalary}
          placeholder="e.g. 60000"
          suffix="$"
          autoFocus
          error={salaryError}
        />
        <InputField
          label="Hours per Week"
          value={hoursPerWeek}
          onChange={setHoursPerWeek}
          placeholder="40"
          error={hoursError}
        />
        <InputField
          label="Weeks per Year"
          value={weeksPerYear}
          onChange={setWeeksPerYear}
          placeholder="52"
          error={weeksError}
        />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5">
        <ResultBlock label="Hourly Rate" value={hourly !== null ? `$${fmtMoney(hourly)}` : null} />
        <ResultBlock label="Daily Pay" value={daily !== null ? `$${fmtMoney(daily)}` : null} />
        <ResultBlock label="Weekly Pay" value={weekly !== null ? `$${fmtMoney(weekly)}` : null} />
        <ResultBlock label="Monthly Pay" value={monthly !== null ? `$${fmtMoney(monthly)}` : null} />
      </div>
      <QuickAnswer text={quickAnswer} />
    </div>
  )
}
