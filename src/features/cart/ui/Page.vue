<script setup lang="ts">
import { AppFetchWrapper } from '@/features/app';
import { useAsyncState, useAsyncStateStatus } from '@/shared/hooks';
import { cartApplication } from '../core/application';
import { cartStore } from '../infrastructure/store';
import { UiButton } from '@/shared/ui';
import { cartBus } from '../infrastructure/bus';
import { computed, ref } from 'vue';
import ProductItem from './ProductItem.vue';

const getProductsCommand = useAsyncState(cartApplication.useGetProducts(), { immediate: true });
const orderCommand = useAsyncState(cartApplication.useOrder());

const { pending } = useAsyncStateStatus([
  getProductsCommand,
  orderCommand,
])

const products = cartStore.useProducts()
const cartSum = cartApplication.useCartSum()

const formatedPrice = computed(() => 
  new Intl.NumberFormat('ru-RU', { 
    style: 'currency', 
    currency: 'RUB', 
    minimumFractionDigits: 0
  }).format(cartSum.value))
  
const isSuccess = ref(false)
cartBus.useOnCartSuccess(() => {
  isSuccess.value = true
})
</script>

<template>
  <AppFetchWrapper :pending="pending">
    <div
      v-if="isSuccess"
      class="text-2xl"
    >
      Order placed successfully
    </div>

    <div
      v-else
      class="flex flex-col gap-6 sm:flex-row"
    >
      <div class="flex flex-col gap-8">
        <h1 class="text-3xl">
          Cart
        </h1>

        <div
          v-if="!products.length"
          class="text-base"
        >
          No products in the cart
        </div>

        <div
          v-else
          class="grid grid-cols-2 gap-6"
        >
          <ProductItem
            v-for="product in products"
            :key="product.id"
            v-bind="product"
          />
        </div>
      </div>

      <div
        v-if="products.length"
        class="flex flex-col gap-2 p-6 w-[200px] flex-none"
      >
        <p class="text-base">
          Sum: {{ formatedPrice }}
        </p>

        <UiButton
          text="Place order"
          class="w-full"
          @click="orderCommand.execute"
        />
      </div>
    </div>
  </AppFetchWrapper>
</template>
