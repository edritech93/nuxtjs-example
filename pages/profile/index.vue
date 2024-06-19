<script lang="ts" setup>
import ImageRemote from "~/components/ImageRemote.vue";
import { useAppStore } from "~/store/app";
import { useProfileStore } from "~/store/profile";

definePageMeta({
  middleware: "auth",
});
useSeoMeta({
  title: "Profile",
});
const profileStore = useProfileStore();
const { profile } = profileStore;
const appStore = useAppStore();
function onResetStore() {
  appStore.$reset();
  profileStore.$reset();
}
</script>

<template>
  <div class="flex flex-1 flex-col items-center justify-center">
    <ImageRemote
      :id="profile?.profile.attachmentId ?? -1"
      class="mb-4 rounded"
    />
    <h1 class="text-2xl mb-1">{{ profile?.profile.fullName }}</h1>
    <h1 class="mb-4">{{ profile?.email }}</h1>
    <UButton to="/sign-in" @click.native="onResetStore">Logout</UButton>
  </div>
</template>
