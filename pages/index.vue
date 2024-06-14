<script setup lang="ts">
definePageMeta({
  middleware: "auth",
});
useSeoMeta({
  title: "Dashboard",
});
</script>

<template>
  <main class="flex flex-1 flex-col p-4">
    <SearchNav />
    <EmptyPhoto />
  </main>
</template>
