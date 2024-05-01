<script setup lang="ts">
import { computed } from 'vue';
import type { ProductListItem } from '../core/types';
import routes from '@/shared/routes';
import { RouterLink, useRouter } from 'vue-router';
import { CartProductAddToCartButton } from '@/features/cart';

const props = defineProps<ProductListItem>()

const router = useRouter()
const detailLink = computed(() => router.resolve({ name: routes.product.name, params: { id: props.id } }).path)

const formatedPrice = computed(() => 
  new Intl.NumberFormat('ru-RU', { 
    style: 'currency', 
    currency: 'RUB', 
    minimumFractionDigits: 0
  }).format(props.price))
</script>

<template>
  <div class="flex flex-col ring-1 ring-gray-200 rounded-tl-lg rounded-tr-lg">
    <RouterLink
      :to="detailLink"
      class="flex flex-col gap-2"
    >
      <img
        :src="image"
        class="aspect-square rounded-tl-lg rounded-tr-lg w-full object-cover"
      >

      <div class="flex justify-between items-center p-2">
        <h4 class="text-lg line-clamp-1">
          {{ name }}
        </h4>

        <div class="text-base">
          {{ formatedPrice }}
        </div>
      </div>
    </RouterLink>

    <CartProductAddToCartButton v-bind="props" />
  </div>
</template>
