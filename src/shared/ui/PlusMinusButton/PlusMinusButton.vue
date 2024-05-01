<script setup lang="ts" generic="T">
defineProps<{
  value: number
  disabled?: boolean
}>()

const emit = defineEmits<{
  'plus': []
  'minus': []
}>()

const plus = () => {
  emit('plus')
}

const minus = () => {
  emit('minus')
}
</script>

<template>
  <div class="ring-1 ring-gray-400 bg-gray-100 flex items-center">
    <button
      class="px-4 py-2 border-r border-gray-400 w-10 flex-none"
      :disabled="disabled"
      @click="minus"
    >
      -
    </button>

    <div class="px-4 w-full text-center">
      {{ value }}
    </div>

    <button
      class="px-4 py-2 border-l border-gray-400 w-10 flex-none"
      :disabled="disabled"
      @click="plus"
    >
      +
    </button>
  </div>
</template>
