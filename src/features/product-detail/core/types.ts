import type { ProductListItem } from "@/features/products";

export interface ProductDetail extends ProductListItem {
    description: string
}