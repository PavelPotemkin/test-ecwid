<script setup lang="ts">
import { RouterLink } from 'vue-router'
import routes from '@/shared/routes'
import { CartToCartButton } from '@/features/cart'
import { computed } from 'vue';

const navItems = computed(() => [
  { text: 'Home', to: routes.home },
])
</script>

<template>
  <header class="border-b border-gray-200 shadow">
    <div class="app-container">
      <nav class="py-4 flex justify-between items-center">
        <ul class="flex gap-2">
          <li
            v-for="item in navItems"
            :key="item.text"
          >
            <RouterLink
              :to="item.to"
              class="text-gray-700 hover:underline"
              exact-active-class="text-gray-900"
            >
              {{ item.text }}
            </RouterLink>
          </li>
        </ul>

        <CartToCartButton />
      </nav>
    </div>
  </header>
</template>
