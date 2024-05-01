import { getEmptyCart } from "../../core/data"
import type { Cart } from "../../core/types"

const CART_KEY = 'cart'

export const cartStorage = {
    saveCart: (cart: Cart) => {
        localStorage.setItem(CART_KEY, JSON.stringify(cart))
    },
    clearCart: () => {
        localStorage.removeItem(CART_KEY)
    },
    getCart: () => {

        try {
            const cart = localStorage.getItem(CART_KEY)
            if (!cart) {
                return getEmptyCart()
            } else {
                return JSON.parse(cart) as Cart
            }
        } catch {
            return getEmptyCart()
        }
    }
}