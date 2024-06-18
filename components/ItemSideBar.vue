<script setup lang="ts">
defineProps<{
  name: string;
}>();
</script>

<template>
  <div class="items-center justify-between flex flex-col">
    <slot />
    <h1 class="text-center text-xs">{{ name }}</h1>
  </div>
</template>
