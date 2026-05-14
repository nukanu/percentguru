export function whatIsXPercentOfY(x: number, y: number): number {
  return (x / 100) * y
}

export function xIsWhatPercentOfY(x: number, y: number): number {
  if (y === 0) return 0
  return (x / y) * 100
}

export function percentageIncrease(original: number, newValue: number): number {
  if (original === 0) return 0
  return ((newValue - original) / original) * 100
}

export function percentageDecrease(original: number, newValue: number): number {
  if (original === 0) return 0
  return ((original - newValue) / original) * 100
}

export function percentageChange(original: number, newValue: number): number {
  if (original === 0) return 0
  return ((newValue - original) / original) * 100
}

export function percentageDifference(a: number, b: number): number {
  if (a === 0 && b === 0) return 0
  return (Math.abs(a - b) / ((a + b) / 2)) * 100
}

export function reversePercentage(percentage: number, result: number): number {
  if (percentage === 0) return 0
  return (result / percentage) * 100
}

export function percentageError(
  experimental: number,
  theoretical: number
): number {
  if (theoretical === 0) return 0
  return Math.abs((experimental - theoretical) / theoretical) * 100
}

export function salaryRaiseAmount(current: number, raisePct: number): number {
  return (raisePct / 100) * current
}

export function newSalary(current: number, raisePct: number): number {
  return current + salaryRaiseAmount(current, raisePct)
}

export function cagr(startValue: number, endValue: number, years: number): number {
  if (startValue <= 0 || years <= 0) return 0
  return (Math.pow(endValue / startValue, 1 / years) - 1) * 100
}

export function totalPercentageChange(startValue: number, endValue: number): number {
  if (startValue === 0) return 0
  return ((endValue - startValue) / startValue) * 100
}

export function costReductionPct(originalCost: number, newCost: number): number {
  if (originalCost === 0) return 0
  return ((originalCost - newCost) / originalCost) * 100
}

export function percentagePointChange(oldPct: number, newPct: number): number {
  return newPct - oldPct
}

export function gradePercentage(score: number, total: number): number {
  if (total === 0) return 0
  return (score / total) * 100
}

export function letterGrade(percentage: number): string {
  if (percentage >= 97) return "A+"
  if (percentage >= 93) return "A"
  if (percentage >= 90) return "A−"
  if (percentage >= 87) return "B+"
  if (percentage >= 83) return "B"
  if (percentage >= 80) return "B−"
  if (percentage >= 77) return "C+"
  if (percentage >= 73) return "C"
  if (percentage >= 70) return "C−"
  if (percentage >= 67) return "D+"
  if (percentage >= 60) return "D"
  return "F"
}
