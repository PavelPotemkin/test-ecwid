<script setup lang="ts">
import { AppFetchWrapper } from '@/features/app';
import { useAsyncState, useAsyncStateStatus } from '@/shared/hooks';
import { categoryDetailApplication } from '../core/application';
import { categoryDetailStore } from '../infrastructure/store';
import { ProductsList } from '@/features/products';
import type { CategoryId } from '@/features/categories';

const props = defineProps<{
    id: CategoryId
}>()

const getProductsCommand = useAsyncState(() => categoryDetailApplication.useGetProducts()(props.id), { immediate: true });
const getCategoryCommand = useAsyncState(() => categoryDetailApplication.useGetCategory()(props.id), { immediate: true });

const { pending } = useAsyncStateStatus([
    getProductsCommand,
    getCategoryCommand
])

const products = categoryDetailStore.useProducts()
const category = categoryDetailStore.useCategory()
</script>

<template>
  <AppFetchWrapper :pending="pending">
    <div
      v-if="category"
      class="flex flex-col gap-8"
    >
      <h1 class="text-4xl">
        {{ category.name }}
      </h1>

      <ProductsList :items="products" />
    </div>
  </AppFetchWrapper>
</template>
