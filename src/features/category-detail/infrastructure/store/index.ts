import type { IProductsList } from '@/features/products'
import { defineStore, storeToRefs } from 'pinia'
import { computed, ref } from 'vue'
import type { CategoryDetail } from '../../core/types'

const useCategoryDetailStore = defineStore('category-detail', () => {
    const products = ref<IProductsList | null>(null)
    const category = ref<CategoryDetail | null>(null)

    return {
        products,
        category
    }
})

const saveProducts = (updatedProducts: IProductsList) => {
    const { products } = storeToRefs(useCategoryDetailStore())
    products.value = updatedProducts
}

const useProducts = () => {
    const { products } = storeToRefs(useCategoryDetailStore())
    return computed(() => products.value || [])
}

const saveCategory = (updatedCategory: CategoryDetail) => {
    const { category } = storeToRefs(useCategoryDetailStore())
    category.value = updatedCategory
}

const useCategory = () => {
    const { category } = storeToRefs(useCategoryDetailStore())
    return computed(() => category.value)
}

export const categoryDetailStore = {
    saveProducts,
    useProducts,
    saveCategory,
    useCategory
}
