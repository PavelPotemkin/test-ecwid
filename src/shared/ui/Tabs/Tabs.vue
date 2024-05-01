<script setup lang="ts" generic="T">
defineProps<{
    modelValue: T | null
    items: { label: string; value: T }[]
}>()

defineEmits<{
    'update:modelValue': [value: T]
}>()
</script>

<template>
  <div class="p-1 flex gap-1">
    <button
      v-for="tab in items"
      :key="tab.label"
      :class="{
        'border-gray-300': tab.value === modelValue,
        'border-transparent hover:border-gray-200': tab.value !== modelValue,
      }"
      class="px-2 py-1 border-b-2 text-base"
      @click="$emit('update:modelValue', tab.value)"
    >
      {{ tab.label }}
    </button>
  </div>
</template>
