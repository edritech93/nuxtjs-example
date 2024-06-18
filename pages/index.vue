<script setup lang="ts">
import type { SellPhotoType } from "~/types/SellPhotoType";
import type { AxiosResponse } from "axios";
import { API } from "~/libs/Api";
import type { ShowAlertType } from "~/types/ShowAlertType";
import ItemPhoto from "~/components/ItemPhoto.vue";

definePageMeta({
  middleware: "auth",
});
useSeoMeta({
  title: "Dashboard",
});
const toast = useToast();
const loading = ref<boolean>(false);
const dataPhoto = ref<SellPhotoType[]>([]);

onMounted(() => {
  _loadData();
});

function _loadData() {
  loading.value = true;
  API.singleRequest(API.getAllPhotoList())
    .then((response: AxiosResponse) => {
      dataPhoto.value = response.data;
    })
    .catch((error: ShowAlertType) => toast.add(error as any))
    .finally(() => {
      loading.value = false;
    });
}
</script>

<template>
  <main class="flex flex-1 flex-col p-4">
    <!-- <SearchNav />
    <ItemPhoto />
    <EmptyPhoto /> -->

    <div v-for="photo in dataPhoto">
      <ItemPhoto :item="photo" />
    </div>
  </main>
</template>
