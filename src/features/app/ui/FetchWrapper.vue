<script setup lang="ts">
import { UiLoader } from '@/shared/ui';

defineProps<{
    pending: boolean
}>()
</script>

<template>
  <div
    v-if="pending"
    class="flex w-full items-center justify-center"
  >
    <UiLoader />
  </div>

  <slot v-else />
</template>
