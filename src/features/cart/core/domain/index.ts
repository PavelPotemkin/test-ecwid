import type { IProductsList, ProductId } from "@/features/products";
import type { Cart, CartItem } from "../types";

const createCartItem = (productId: ProductId, quantity: number): CartItem => ({
    productId,
    quantity,
})

export const getCartItem = (cart: Cart, id: ProductId) => {
    return cart.items.find((item) => item.productId === id)
}

export const getInCartCount = (cart: Cart, id: ProductId) => {
    const item = cart.items.find((item) => item.productId === id)
    return item ? item.quantity : 0
}

export const changeQuantity = (cart: Cart, productId: ProductId, quantity: number): Cart => {
    const cartItem = getCartItem(cart, productId)

    const updatedItems = cartItem ? cart.items.map((item) => {
        if (item.productId === productId) {
            return createCartItem(productId, quantity)
        }

        return item
    }) : [
        ...cart.items,
        createCartItem(productId, quantity),
    ]

    return {
        ...cart,
        items: updatedItems.filter((item) => item.quantity > 0),
    }
}

export const plusOne = (cart: Cart, productId: ProductId): Cart => {
    return changeQuantity(cart, productId, getInCartCount(cart, productId) + 1)
}

export const minusOne = (cart: Cart, productId: ProductId): Cart => {
    return changeQuantity(cart, productId, getInCartCount(cart, productId) - 1)
}

export const removeItem = (cart: Cart, productId: ProductId): Cart => {
    return changeQuantity(cart, productId, 0)
}

export const getCartCount = (cart: Cart) => cart.items.length

export const filterProducts = (cart: Cart, products: IProductsList) => {
    return products.filter((product) => getInCartCount(cart, product.id) > 0)
}

export const getCartSum = (cart: Cart, products: IProductsList) => {
    return filterProducts(cart, products).reduce((sum, product) => {
        const item = getCartItem(cart, product.id)
        return sum + product.price * (item ? item.quantity : 0)
    }, 0)
}
