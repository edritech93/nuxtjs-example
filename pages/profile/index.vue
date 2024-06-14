<script lang="ts" setup>
definePageMeta({
  middleware: "auth",
});
useSeoMeta({
  title: "Profile",
});
</script>

<template>
  <div class="flex flex-1 flex-col items-center justify-center">
    <h1 class="mb-4">Profile</h1>
    <UButton to="/sign-in">Logout</UButton>
  </div>
</template>
