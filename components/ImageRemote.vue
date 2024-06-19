<script lang="ts" setup>
import type { AxiosResponse } from "axios";
import { API } from "~/libs/Api";
import type { ShowAlertType } from "~/types/ShowAlertType";

const loading = ref(false);
const data = ref();

const { id } = defineProps<{
  id: number;
}>();

async function _loadData() {
  loading.value = true;
  API.singleRequest(API.getPhoto(id))
    .then((response: AxiosResponse) => {
      const uData = new Uint8Array(response.data);
      const raw = String.fromCharCode.apply(null, uData as any);
      const base64 = btoa(raw);
      data.value = `data:image;base64,${base64}`;
    })
    .catch((_: ShowAlertType) => {})
    .finally(() => (loading.value = false));
}

onMounted(() => {
  _loadData();
});
</script>
<template>
  <NuxtImg :src="data" width="150" height="150" />
</template>
