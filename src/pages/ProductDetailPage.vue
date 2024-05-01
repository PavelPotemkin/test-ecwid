<script setup lang="ts">
import { AppPage } from '@/features/app';
import { ProductDetailPage } from '@/features/product-detail';
import type { ProductId } from '@/features/products';
import { useRoute } from 'vue-router';

const productId = +useRoute().params.id as ProductId;
</script>

<template>
  <AppPage>
    <ProductDetailPage :id="productId" />
  </AppPage>
</template>