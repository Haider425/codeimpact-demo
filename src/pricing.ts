/** Apply a percentage discount, clamped to 0–100% and to at most `maxDiscount`, rounded to cents. */
export function applyDiscount(total: number, percent: number, maxDiscount: number): number {
  const bounded = Math.min(Math.max(percent, 0), 100)
  const discount = Math.min((total * bounded) / 100, maxDiscount)
  return Math.round((total - discount) * 100) / 100
}
