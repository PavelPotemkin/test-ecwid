import type { ProductId } from "@/features/products";

export interface CartItem {
    productId: ProductId
    quantity: number
}

export interface Cart {
    items: Array<CartItem>
}