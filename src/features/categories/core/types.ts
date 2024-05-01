export type CategoryId = Branded<number, 'CategoryId'>

export interface CategoryListItem {
    id: CategoryId
    name: string
    image: Url
}

export type CategoriesList = Array<CategoryListItem>
