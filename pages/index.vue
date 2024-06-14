<script setup lang="ts">
definePageMeta({
  middleware: "auth",
});
useSeoMeta({
  title: "Dashboard",
});
</script>

<template>
  <EmptyPhoto />
</template>
