<script setup lang="ts">
import { usePhotoStore } from "~/store/photo";

const file = ref<FileList>();
const onChangeFile = (event: Event) => {
  const _file = (event.target as HTMLInputElement).files as FileList;
  file.value = _file;
  const photoStore = usePhotoStore();
  photoStore.change(_file);
  navigateTo("photo/upload");
};
</script>

<template>
  <label class="bg-primary px-4 py-1 rounded-md text-sm">
    Upload Photo
    <input
      type="file"
      style="display: none"
      required
      multiple
      @change="onChangeFile"
    />
  </label>
</template>
