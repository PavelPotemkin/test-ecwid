<script setup lang="ts">
import { categoriesStore } from '../infrastructure/store';
import ListItem from './ListItem.vue';

const categories = categoriesStore.useCategoriesList()
</script>

<template>
  <div
    class="grid sm:grid-cols-3 gap-4"
  >
    <ListItem
      v-for="category in categories"
      :key="category.id"
      v-bind="category"
    />
  </div>
</template>
