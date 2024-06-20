<script lang="ts" setup>
const { dataPhoto } = defineProps<{
  dataPhoto: FileList;
}>();
function imagePreviewFunc() {
  const imagePreview_2 = document.getElementById("imagePreview_2");
  for (let i = 0; i < dataPhoto.length; i++) {
    let imager = document.createElement("img");
    imager.src = URL.createObjectURL(dataPhoto[i]);
    if (imagePreview_2) {
      imagePreview_2.append(imager);
    }
  }
}
onMounted(() => {
  imagePreviewFunc();
});
</script>

<template>
  <div
    class="flex-1 gap-4 m-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 grid-rows-6"
  >
    <div v-for="photo in dataPhoto">
      <div class="max-w-[150px] border-yellow-400 border-2 bg-gray-400 rounded">
        <div id="imagePreview_2"></div>
      </div>
    </div>
  </div>
</template>
