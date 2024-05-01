<script setup lang="ts">
import { UiButton, UiPlusMinusButton } from '@/shared/ui';
import type { ProductListItem } from '@/features/products';
import { cartApplication } from '../core/application';
import { useAsyncState, useAsyncStateStatus } from '@/shared/hooks';

const props = defineProps<ProductListItem>()

const inCartCount = cartApplication.useInCartCount(props.id)
const addToCartCommand = useAsyncState(cartApplication.useAddToCart())
const plusCartItemCommand = useAsyncState(cartApplication.usePlusCartItem())
const minusCartItemCommand = useAsyncState(cartApplication.useMinusCartItem())

const { pending } = useAsyncStateStatus([
  addToCartCommand,
  plusCartItemCommand,
  minusCartItemCommand,
])
</script>

<template>
  <UiPlusMinusButton
    v-if="inCartCount"
    :value="inCartCount"
    :disabled="pending"
    @plus="plusCartItemCommand.execute(id)"
    @minus="minusCartItemCommand.execute(id)"
  />

  <UiButton
    v-else
    text="В корзину"
    :disabled="pending"
    @click="addToCartCommand.execute(id)"
  />
</template>
