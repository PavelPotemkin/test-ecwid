import { computed } from "vue"
import { getCartSum } from "../domain"
import { cartStore } from "../../infrastructure/store"

export const useCartSum = () => {
    return computed(() => {
        const cart = cartStore.readCart()
        const products = cartStore.readProducts()

        if (!cart || !products) {
            return 0
        }

        return getCartSum(cart, products)
    })
}