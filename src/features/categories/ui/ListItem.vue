<script setup lang="ts">
import { computed } from 'vue';
import type { CategoryListItem } from '../core/types';
import routes from '@/shared/routes';
import { RouterLink, useRouter } from 'vue-router';

const props = defineProps<CategoryListItem>()

const router = useRouter()
const detailLink = computed(() => router.resolve({ name: routes.category.name, params: { id: props.id } }).path)
</script>

<template>
  <RouterLink
    :to="detailLink"
    class="flex flex-col gap-2 ring-1 ring-gray-200 rounded-lg p-2"
  >
    <img
      :src="image"
      class="aspect-square rounded-tl-lg rounded-tr-lg w-full object-cover"
    >

    <h4 class="text-lg line-clamp-1">
      {{ name }}
    </h4>
  </RouterLink>
</template>
