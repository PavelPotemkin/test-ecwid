import type { CategoryId } from "@/features/categories"
import { categoryDetailApi } from "../../infrastructure/api"
import { categoryDetailStore } from "../../infrastructure/store"

export const useGetProducts = () => {
    const fetchProducts = categoryDetailApi.useFetchProducts()

    return async (id: CategoryId) => {
        const result = await fetchProducts(id)

        if (result.isRight()) {
            categoryDetailStore.saveProducts(result.value)
        }
    }
}