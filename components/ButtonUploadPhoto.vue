<script setup lang="ts">
const onChangeFile = (event: Event) => {
  console.log(event);
};
</script>

<template>
  <label class="bg-primary px-4 py-1 rounded-md text-sm">
    Upload Photo
    <input type="file" style="display: none" required @change="onChangeFile" />
  </label>
</template>
