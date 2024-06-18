<script setup lang="ts">
defineProps<{
  name: string;
}>();
</script>

<template>
  <nav class="flex p-4 gap-4 border-b border-gray-100/30">
    <button @click="$router.back()">
      <NuxtImg
        src="icon/back-white-24.png"
        width="24"
        height="24"
        class="mb-1"
      />
    </button>
    <h1>{{ name }}</h1>
  </nav>
</template>
