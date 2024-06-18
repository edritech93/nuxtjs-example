<script lang="ts" setup>
useSeoMeta({
  titleTemplate: "%s | Photo App",
});
</script>

<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <UNotifications />
  <UModals />
</template>
