<script setup lang="ts">
import { computed } from "vue"
import { RouterLink, useRouter } from "vue-router"
import routes from '@/shared/routes';
import { cartApplication } from "../core/application";

const router = useRouter()
const link = computed(() => router.resolve({ name: routes.cart.name }).href)

const cartCount = cartApplication.useCartCount()
</script>

<template>
  <RouterLink
    :to="link"
    class="relative flex w-10 h-10"
  >
    <svg
      id="cart"
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 200 200"
    ><path d="M75 71.09v-10c0-14.28 11.15-25.93 25-25.93s25 11.65 25 25.93v10h17.28A3.13 3.13 0 0 1 145.4 74l5.94 87.5a3.14 3.14 0 0 1-2.91 3.33H51.78a3.12 3.12 0 0 1-3.12-3.12v-.21L54.6 74a3.13 3.13 0 0 1 3.12-2.92Zm9.38 0h31.25v-10c0-9.19-7-16.56-15.63-16.56S84.38 51.9 84.38 61.09Zm-25.91 84.38h83.06l-5.08-75H63.56Z" /></svg>

    <span
      v-if="cartCount > 0"
      class="absolute w-4 h-4 top-0 flex items-center justify-center -right-1 bg-green-800 text-white rounded-full px-1 text-xs"
    >
      {{ cartCount }}
    </span>
  </RouterLink>
</template>
