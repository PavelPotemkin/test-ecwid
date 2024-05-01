import { useApi } from '@/services/network';
import type { CategoryId } from '@/features/categories';
import adapters from '@/shared/adapters';
import type { ApiProduct } from '@/shared/types';

export interface ApiProductsData {
    items: Array<ApiProduct>
}

export const useFetchProducts = () => {
    const api = useApi()
    return async (categoryId: CategoryId) => (await api<ApiProductsData>('/products', {
        params: {
            categories: categoryId
        }
    })).mapRight(data => data.data.items.map(adapters.mapApiProductsListItem))
}