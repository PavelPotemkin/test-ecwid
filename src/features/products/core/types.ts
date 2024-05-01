export type ProductId = Branded<number, 'ProductId'>

export interface ProductListItem {
    id: ProductId
    name: string
    price: number
    image: Url
}

export type ProductsList = Array<ProductListItem>
