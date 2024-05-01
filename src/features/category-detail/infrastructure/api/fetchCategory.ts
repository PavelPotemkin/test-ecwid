import { useApi } from '@/services/network';
import type { CategoryId } from '@/features/categories';
import adapters from '@/shared/adapters';
import type { ApiCategoryListItem } from '@/shared/types';

export interface ApiCategoryDetailData extends ApiCategoryListItem { }

export const useFetchCategory = () => {
    const api = useApi()
    return async (categoryId: CategoryId) => (await api<ApiCategoryDetailData>(`/categories/${categoryId}`)).mapRight(data => adapters.mapApiCategoryListItem(data.data))
}