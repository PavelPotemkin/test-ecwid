import { cartStore } from "../../infrastructure/store"
import { cartApi } from "../../infrastructure/api"

export const useGetProducts = () => {
    const fetchProducts = cartApi.useFetchProducts()

    return async () => {
        const cart = cartStore.readCart()
        if (!cart) {
            return
        }

        if (!cart.items.length) {
            cartStore.saveProducts([])
            return
        }

        const ids = cart.items.map(item => item.productId)
        const result = await fetchProducts(ids)

        if (result.isRight()) {
            cartStore.saveProducts(result.value)
        }
    }
}