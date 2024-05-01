import type { ProductListItem } from "@/features/products";
import type { ApiCategoryListItem, ApiProduct } from "./types";
import type { CategoryListItem } from "@/features/categories";
import type { ProductDetail } from "@/features/product-detail";


const adapters = {
    mapApiProductsListItem: (dto: ApiProduct): ProductListItem => ({
        id: dto.id,
        name: dto.name,
        image: dto.imageUrl,
        price: dto.price
    }),
    mapApiProductDetail: (dto: ApiProduct): ProductDetail => ({
        id: dto.id,
        name: dto.name,
        description: dto.description,
        image: dto.imageUrl,
        price: dto.price
    }),
    mapApiCategoryListItem: (dto: ApiCategoryListItem): CategoryListItem => ({
        id: dto.id,
        name: dto.name,
        image: dto.imageUrl
    })
}

export default adapters
