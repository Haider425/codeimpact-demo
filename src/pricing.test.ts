import { describe, expect, it } from 'vitest'
import { applyDiscount } from './pricing'

describe('applyDiscount', () => {
  it('caps the discount at 100 percent', () => {
    expect(applyDiscount(80, 150)).toBe(0)
  })
})
