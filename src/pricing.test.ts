import { describe, expect, it } from 'vitest'
import { applyDiscount } from './pricing'

describe('applyDiscount', () => {
  it('caps the discount at 100 percent', () => {
    expect(applyDiscount(80, 150, 100)).toBe(0)
  })

  it('caps the discount at the maximum amount', () => {
    expect(applyDiscount(100, 50, 20)).toBe(80)
  })
})
