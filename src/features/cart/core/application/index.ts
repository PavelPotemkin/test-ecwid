import { useGetCart } from './getCart'
import { useAddToCart, useMinusCartItem, usePlusCartItem, useRemoveCartItem } from './changeQuantity'
import { useInCartCount } from './inCartCount'
import { useCartCount } from './cartCount'
import { useGetProducts } from './getProducts'
import { useOrder } from './order'
import { useCartSum } from './cartSum'

export const cartApplication = {
    useGetCart,
    useAddToCart,
    useInCartCount,
    useCartCount,
    useMinusCartItem,
    usePlusCartItem,
    useGetProducts,
    useRemoveCartItem,
    useOrder,
    useCartSum
}