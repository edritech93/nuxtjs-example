<script setup lang="ts">
import SvgBack from "./SvgBack.vue";

defineProps<{
  name: string;
}>();
</script>

<template>
  <nav class="flex p-4 gap-4 border-b border-gray-100/30">
    <button @click="$router.back()">
      <SvgBack class="mb-1" />
    </button>
    <h1>{{ name }}</h1>
  </nav>
</template>
