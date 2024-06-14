<script setup lang="ts">
defineProps<{
  icon: string;
  name: string;
}>();
</script>

<template>
  <div class="items-center justify-between flex flex-col">
    <NuxtImg :src="icon" width="24" height="24" class="mb-1" />
    <h1 class="text-center text-xs">{{ name }}</h1>
  </div>
</template>
