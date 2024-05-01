import { useApi } from '@/services/network';
import type { ApiCategoryListItem } from '@/shared/types';
import adapters from '@/shared/adapters';

interface ApiData {
    items: Array<ApiCategoryListItem>
}

export const useFetchList = () => {
    const api = useApi()

    return async () => (await api<ApiData>('/categories')).mapRight(data => data.data.items.map(adapters.mapApiCategoryListItem))
}