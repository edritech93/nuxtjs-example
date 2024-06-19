<script lang="ts" setup>
import type { SellPhotoType } from "~/types/SellPhotoType";

const props = defineProps<{
  item: SellPhotoType;
}>();
</script>

<template>
  <ImageRemote :id="item.id" />
</template>
