import { wait } from "@/shared/utils"
import { cartBus } from "../../infrastructure/bus"
import { cartStorage } from "../../infrastructure/storage"
import { cartStore } from "../../infrastructure/store"
import { getEmptyCart } from "../data"

export const useOrder = () => {
    const triggerCartSuccess = cartBus.useTriggerCartSuccess()

    return async () => {
        await wait(400)
        const cart = cartStore.readCart()
        console.log('Ordering cart:', cart);

        triggerCartSuccess()
        cartStore.saveCart(getEmptyCart())
        cartStore.saveProducts([])
        cartStorage.clearCart()
    }
}