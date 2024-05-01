import { defineStore, storeToRefs } from 'pinia'
import type { ProductsList } from '../../core/types'
import { computed, ref } from 'vue'

const useProductsStore = defineStore('products', () => {
    const list = ref<ProductsList | null>(null)
    const listByCategory = ref<ProductsList | null>(null)

    return {
        list,
        listByCategory
    }
})

const saveProductsList = (products: ProductsList) => {
    const { list } = storeToRefs(useProductsStore())
    list.value = products
}

const useProductsList = () => {
    const { list } = storeToRefs(useProductsStore())
    return computed(() => list.value || [])
}

const saveProductsListByCategory = (products: ProductsList) => {
    const { listByCategory } = storeToRefs(useProductsStore())
    listByCategory.value = products
}

const useProductsListByCategory = () => {
    const { listByCategory } = storeToRefs(useProductsStore())
    return computed(() => listByCategory.value || [])
}

export const productsStore = {
    saveProductsList,
    useProductsList,
    saveProductsListByCategory,
    useProductsListByCategory
}
