import { defineStore, storeToRefs } from 'pinia'
import { computed, ref } from 'vue'
import type { ProductDetail } from '../../core/types'

const useProductDetailStore = defineStore('product-detail', () => {
    const product = ref<ProductDetail | null>(null)

    return {
        product,
    }
})

const saveProduct = (updatedProduct: ProductDetail) => {
    const { product } = storeToRefs(useProductDetailStore())
    product.value = updatedProduct
}

const useProduct = () => {
    const { product } = storeToRefs(useProductDetailStore())
    return computed(() => product.value)
}

export const productDetailStore = {
    saveProduct,
    useProduct,
}
