<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './Header.vue'
import { CartWithCart } from '@/features/cart';
</script>

<template>
  <CartWithCart>
    <AppHeader />

    <RouterView />
  </CartWithCart>
</template>
