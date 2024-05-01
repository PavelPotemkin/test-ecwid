import { useApi } from '@/services/network';
import type { CategoryId } from '@/features/categories';
import type { ApiProduct } from '@/shared/types';
import adapters from '@/shared/adapters';

export interface ApiProductsData {
    items: Array<ApiProduct>
}

export const useFetchListByCategory = () => {
    const api = useApi()
    return async (categoryId: CategoryId) => (await api<ApiProductsData>('/products', {
        params: {
            categories: categoryId
        }
    })).mapRight(data => data.data.items.map(adapters.mapApiProductsListItem))
}