import type { ProductId } from '@/features/products';
import { useApi } from '@/services/network';
import adapters from '@/shared/adapters';
import type { ApiProduct } from '@/shared/types';

export interface ApiProductsData {
    items: Array<ApiProduct>
}

export const useFetchProducts = () => {
    const api = useApi()
    return async (ids: Array<ProductId>) => (await api<ApiProductsData>('/products', {
        params: {
            productId: ids.join(',')
        }
    })).mapRight(data => data.data.items.map(adapters.mapApiProductsListItem))
}