<script setup lang="ts">
import { ProductsList } from '../core/types';
import ListItem from './ListItem.vue';

defineProps<{
  items: ProductsList
}>()
</script>

<template>
  <div
    class="grid sm:grid-cols-3 gap-4"
  >
    <ListItem
      v-for="product in items"
      :key="product.id"
      v-bind="product"
    />
  </div>
</template>
