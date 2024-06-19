<script lang="ts" setup>
defineProps<{
  dataPhoto: any[];
}>();
</script>

<template>
  <div
    class="flex-1 gap-4 m-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 grid-rows-6"
  >
    <div v-for="photo in dataPhoto">
      <div class="max-w-[150px] border-yellow-400 border-2 bg-gray-400 rounded">
        <NuxtImg src="https://picsum.photos/200" width="150" height="150" />
      </div>
    </div>
  </div>
</template>
