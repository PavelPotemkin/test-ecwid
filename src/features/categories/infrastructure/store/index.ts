import { defineStore, storeToRefs } from 'pinia'
import type { CategoryListItem } from '../../core/types'
import { computed, ref } from 'vue'

const useCategoriesStore = defineStore('categories', () => {
    const list = ref<Array<CategoryListItem> | null>(null)

    return {
        list,
    }
})

const saveCategoriesList = (products: Array<CategoryListItem>) => {
    const { list } = storeToRefs(useCategoriesStore())
    list.value = products
}

const readCategoriesList = () => {
    const { list } = storeToRefs(useCategoriesStore())
    return list.value
}

const useCategoriesList = () => {
    const { list } = storeToRefs(useCategoriesStore())
    return computed(() => list.value || [])
}

export const categoriesStore = {
    saveCategoriesList,
    readCategoriesList,
    useCategoriesList,
}
