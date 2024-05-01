import type { CategoryId } from "@/features/categories"
import { categoryDetailApi } from "../../infrastructure/api"
import { categoryDetailStore } from "../../infrastructure/store"

export const useGetCategory = () => {
    const fetchCategory = categoryDetailApi.useFetchCategory()

    return async (id: CategoryId) => {
        const result = await fetchCategory(id)

        if (result.isRight()) {
            categoryDetailStore.saveCategory(result.value)
        }
    }
}