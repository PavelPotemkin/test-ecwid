import { productDetailApi } from "../../infrastructure/api"
import { productDetailStore } from "../../infrastructure/store"
import type { ProductId } from "@/features/products"

export const useGetProduct = () => {
    const fetchProduct = productDetailApi.useFetchProduct()

    return async (id: ProductId) => {
        const result = await fetchProduct(id)

        if (result.isRight()) {
            productDetailStore.saveProduct(result.value)
        }
    }
}