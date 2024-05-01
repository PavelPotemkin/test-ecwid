import { useApi } from '@/services/network';
import adapters from '@/shared/adapters';
import type { ApiProduct } from '@/shared/types';

export interface ApiProductsData {
    items: Array<ApiProduct>
}

export const useFetchList = () => {
    const api = useApi()
    return async () => (await api<ApiProductsData>('/products')).mapRight(data => data.data.items.map(adapters.mapApiProductsListItem))
}