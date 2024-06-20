<script lang="ts" setup>
const { dataPhoto } = defineProps<{
  dataPhoto: FileList;
}>();
function loadPhoto() {
  const divImage = document.getElementById("div_image");
  for (let i = 0; i < dataPhoto.length; i++) {
    let image = document.createElement("img");
    image.src = URL.createObjectURL(dataPhoto[i]);
    image.className =
      "max-w-[150px] border-yellow-400 border-2 bg-gray-400 rounded";
    image.id = i.toString();
    if (divImage) {
      divImage.append(image);
    }
  }
}
onMounted(() => {
  loadPhoto();
});
</script>

<template>
  <div
    class="flex-1 gap-4 m-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 grid-rows-6"
    id="div_image"
  ></div>

  <img />
</template>
