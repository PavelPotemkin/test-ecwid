<script setup lang="ts">
import { AppPage } from '@/features/app';
import type { CategoryId } from '@/features/categories';
import { CategoryDetailPage } from '@/features/category-detail';
import { useRoute } from 'vue-router';

const categoryId = +useRoute().params.id as CategoryId;
</script>

<template>
  <AppPage>
    <CategoryDetailPage :id="categoryId" />
  </AppPage>
</template>