<script setup lang="ts">
import { AppFetchWrapper } from '@/features/app';
import { useAsyncState } from '@/shared/hooks';
import { productDetailApplication } from '../core/application';
import { productDetailStore } from '../infrastructure/store';
import { type ProductId } from '@/features/products';
import { CartProductAddToCartButton } from '@/features/cart';

const props = defineProps<{
    id: ProductId
}>()

const { pending } = useAsyncState(() => productDetailApplication.useGetProduct()(props.id), { immediate: true });

const product = productDetailStore.useProduct()
</script>

<template>
  <AppFetchWrapper :pending="pending">
    <div
      v-if="product"
      class="flex flex-col sm:flex-row gap-8"
    >
      <img
        :src="product.image"
        alt=""
        class="w-full sm:w-[400px] h-[400px] object-cover"
      >

      <div class="flex flex-col gap-4">
        <h1 class="text-3xl">
          {{ product.name }}
        </h1>

        <p
          class="text-base"
          v-html="product.description"
        />

        <CartProductAddToCartButton
          v-bind="props"
          class="sm:max-w-[200px]"
        />
      </div>
    </div>
  </AppFetchWrapper>
</template>
