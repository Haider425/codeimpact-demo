/** Apply a percentage discount, clamped to 0–100%, rounded to cents. */
export function applyDiscount(total: number, percent: number): number {
  const bounded = Math.min(Math.max(percent, 0), 100)
  return Math.round(total * (100 - bounded)) / 100
}
