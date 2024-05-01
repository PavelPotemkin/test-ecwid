<script setup lang="ts">
import { AppFetchWrapper } from '@/features/app';
import { cartApplication } from '../core/application';
import { useAsyncState } from '@/shared/hooks';

const { pending } = useAsyncState(cartApplication.useGetCart(), {
  immediate: true,
})
</script>

<template>
  <AppFetchWrapper :pending="pending">
    <slot />
  </AppFetchWrapper>
</template>
