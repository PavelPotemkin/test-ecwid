import { defineStore, storeToRefs } from 'pinia'
import { computed, ref } from 'vue'
import type { Cart } from '../../core/types'
import type { IProductsList } from '@/features/products'

const useCartStore = defineStore('cart', () => {
    const cart = ref<Cart | null>(null)
    const products = ref<IProductsList | null>(null)

    return {
        cart,
        products
    }
})

const saveCart = (updatedCart: Cart) => {
    const { cart } = storeToRefs(useCartStore())
    cart.value = updatedCart
}

const readCart = () => {
    const { cart } = storeToRefs(useCartStore())
    return cart.value
}

const useCartItems = () => {
    const { cart } = storeToRefs(useCartStore())
    return computed(() => cart.value?.items || [])
}

const saveProducts = (updatedProducts: IProductsList) => {
    const { products } = storeToRefs(useCartStore())
    products.value = updatedProducts
}

const readProducts = () => {
    const { products } = storeToRefs(useCartStore())
    return products.value
}

const useProducts = () => {
    const { products } = storeToRefs(useCartStore())
    return computed(() => products.value || [])
}

export const cartStore = {
    saveCart,
    readCart,
    useCartItems,
    saveProducts,
    readProducts,
    useProducts
}
