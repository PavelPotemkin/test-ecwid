<script setup lang="ts">
import { AppPage } from '@/features/app';
import { ProductsList, useProductsList } from '@/features/products';
import { CategoriesList } from '@/features/categories';
import { AppFetchWrapper } from '@/features/app';
import { useGetProductsList } from '@/features/products';
import { useGetCategoriesList } from '@/features/categories';
import { useAsyncState, useAsyncStateStatus } from '@/shared/hooks';

const getCategoriesListCommand = useAsyncState(useGetCategoriesList(), { immediate: true });
const getProductsListCommand = useAsyncState(useGetProductsList(), { immediate: true });

const { pending } = useAsyncStateStatus([
  getCategoriesListCommand,
  getProductsListCommand,
])

const products = useProductsList()
</script>

<template>
  <AppPage>
    <AppFetchWrapper :pending="pending">
      <div class="flex flex-col gap-20">
        <CategoriesList />

        <ProductsList :items="products" />
      </div>
    </AppFetchWrapper>
  </AppPage>
</template>
