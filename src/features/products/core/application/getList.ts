import { productsApi } from "../../infrastructure/api"
import { productsStore } from "../../infrastructure/store"

export const useGetList = () => {
    const fetchList = productsApi.useFetchList()

    return async () => {
        const result = await fetchList()

        if (result.isRight()) {
            productsStore.saveProductsList(result.value)
        }
    }
}