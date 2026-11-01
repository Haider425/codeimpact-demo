import { applyDiscount } from './pricing'

export interface Item {
  price: number
  quantity: number
}

export function subtotal(items: Item[]): number {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0)
}

export function checkout(items: Item[], coupon: number): number {
  return applyDiscount(subtotal(items), coupon)
}
