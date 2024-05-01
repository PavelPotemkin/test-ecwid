import { useApi } from '@/services/network';
import adapters from '@/shared/adapters';
import type { ApiProduct } from '@/shared/types';
import type { ProductId } from '@/features/products';

export interface ApiCategoryDetailData extends ApiProduct { }

export const useFetchProduct = () => {
    const api = useApi()
    return async (productId: ProductId) => (await api<ApiCategoryDetailData>(`/products/${productId}`)).mapRight(data => adapters.mapApiProductDetail(data.data))
}