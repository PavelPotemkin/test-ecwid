import type { ProductId } from "@/features/products"
import { cartStore } from "../../infrastructure/store"
import { getInCartCount } from "../domain"
import { computed } from "vue"

export const useInCartCount = (id: ProductId) => {
    return computed(() => {
        const cart = cartStore.readCart()
        if (!cart) {
            return 0
        }

        return getInCartCount(cart, id)
    })
}
