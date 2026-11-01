import { checkout } from './cart'
import type { Item } from './cart'

export function invoiceTotal(items: Item[], coupon = 0): string {
  return `$${checkout(items, coupon).toFixed(2)}`
}
