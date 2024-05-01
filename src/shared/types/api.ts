import type { CategoryId } from "@/features/categories";
import type { ProductId } from "@/features/products";

export interface ApiProduct {
    id: ProductId;
    name: string
    description: string
    imageUrl: Url
    price: number
}

export interface ApiCategoryListItem {
    id: CategoryId;
    name: string
    imageUrl: Url
}