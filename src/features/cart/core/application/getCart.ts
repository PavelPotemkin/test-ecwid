import { cartStorage } from "../../infrastructure/storage"
import { cartStore } from "../../infrastructure/store"

export const useGetCart = () => {
    return async () => {
        const cart = cartStorage.getCart()
        cartStore.saveCart(cart)
    }
}