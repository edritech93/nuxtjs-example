<script setup lang="ts">
defineProps<{
  name: string;
  active: boolean;
}>();
</script>

<template>
  <div class="items-center justify-between flex flex-col">
    <slot />
    <h1 class="text-center text-xs" :class="active ? 'text-primary' : ''">
      {{ name }}
    </h1>
  </div>
</template>
