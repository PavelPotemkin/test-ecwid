import { productsApplication } from './core/application'
import { productsStore } from './infrastructure/store'

export { ProductsList, ProductsListItem } from './ui'
export type { ProductListItem, ProductId, ProductsList as IProductsList } from './core/types'

export const useGetProductsList = productsApplication.useGetList
export const useProductsList = productsStore.useProductsList
