<script setup lang="ts">
import type { SellPhotoType } from "~/types/SellPhotoType";
import type { AxiosResponse } from "axios";
import { API } from "~/libs/Api";
import type { ShowAlertType } from "~/types/ShowAlertType";

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
  const a = [];
  a.length;
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
    <SearchNav />
    <div v-if="dataPhoto.length > 0" class="flex flex-1">
      <GridPhoto :data-photo="dataPhoto" />
    </div>
    <div v-else class="flex flex-1">
      <EmptyPhoto />
    </div>
  </main>
</template>
