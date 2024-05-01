import { computed } from "vue"
import { cartStore } from "../../infrastructure/store"
import { getCartCount } from "../domain"

export const useCartCount = () => {
    return computed(() => {
        const cart = cartStore.readCart()
        if (!cart) {
            return 0
        }

        return getCartCount(cart)
    })
}