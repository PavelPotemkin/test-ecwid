import type { ProductId } from "@/features/products"
import { cartStore } from "../../infrastructure/store"
import { filterProducts, minusOne, plusOne, removeItem } from "../domain"
import { wait } from "@/shared/utils"
import type { Cart } from "../types"
import { cartStorage } from "../../infrastructure/storage"

const useSaveCart = () => {
    return (cart: Cart) => {
        const current = cartStore.readCart()
        cartStore.saveCart(cart)
        cartStorage.saveCart(cart)

        if (current && current.items.length > cart.items.length) {
            const updatedProducts = filterProducts(cart, cartStore.readProducts() || [])
            cartStore.saveProducts(updatedProducts)
        }
    }
}

export const usePlusCartItem = () => {
    const saveCart = useSaveCart()

    return async (productId: ProductId) => {
        await wait(200)

        const cart = cartStore.readCart()
        if (!cart) {
            return
        }

        const updatedCart = plusOne(cart, productId)
        saveCart(updatedCart)
    }
}

export const useMinusCartItem = () => {
    const saveCart = useSaveCart()

    return async (productId: ProductId) => {
        await wait(200)

        const cart = cartStore.readCart()
        if (!cart) {
            return
        }

        const updatedCart = minusOne(cart, productId)
        saveCart(updatedCart)
    }
}

export const useRemoveCartItem = () => {
    const saveCart = useSaveCart()

    return async (productId: ProductId) => {
        await wait(200)

        const cart = cartStore.readCart()
        if (!cart) {
            return
        }

        const updatedCart = removeItem(cart, productId)
        saveCart(updatedCart)
    }
}

export const useAddToCart = usePlusCartItem