<script setup lang="ts" generic="T">
defineProps<{
  text: string
}>()
</script>

<template>
  <button class="px-4 py-2 ring-1 ring-gray-400 bg-gray-100 disabled:cursor-not-allowed">
    {{ text }}
  </button>
</template>
