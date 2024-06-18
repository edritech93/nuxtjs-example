<script lang="ts" setup>
import type { SellPhotoType } from "~/types/SellPhotoType";

defineProps<{
  item: SellPhotoType;
}>();
</script>

<template>
  <div>
    <NuxtImg
      src="https://picsum.photos/200"
      width="115"
      height="115"
      class="mb-1"
    />
    <h1>{{ item.title }}</h1>
  </div>
</template>
