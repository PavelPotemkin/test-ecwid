import { categoriesApi } from "../../infrastructure/api"
import { categoriesStore } from "../../infrastructure/store"

export const useGetList = () => {
    const fetchList = categoriesApi.useFetchList()

    return async () => {
        if (categoriesStore.readCategoriesList()) {
            return
        }

        const result = await fetchList()

        if (result.isRight()) {
            categoriesStore.saveCategoriesList(result.value)
        } else {
            throw result.value
        }
    }
}