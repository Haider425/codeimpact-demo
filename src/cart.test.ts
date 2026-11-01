import { describe, expect, it } from 'vitest'
import { checkout } from './cart'

describe('checkout', () => {
  it('applies the coupon to the subtotal', () => {
    expect(checkout([{ price: 50, quantity: 2 }], 10)).toBe(90)
  })

  it('ignores negative coupons', () => {
    expect(checkout([{ price: 20, quantity: 1 }], -5)).toBe(20)
  })
})
