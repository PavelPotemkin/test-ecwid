import { categoriesApplication } from './core/application'

export { CategoriesList } from './ui'
export type { CategoryListItem, CategoryId, CategoriesList as ICategoriesList } from './core/types'
export const useGetCategoriesList = categoriesApplication.useGetList
