<script lang="ts" setup>
import ImageRemote from "~/components/ImageRemote.vue";
import { useProfileStore } from "~/store/profile";

definePageMeta({
  middleware: "auth",
});
useSeoMeta({
  title: "Profile",
});
const { profile } = useProfileStore();
</script>

<template>
  <div class="flex flex-1 flex-col items-center justify-center">
    <ImageRemote
      :id="profile?.profile.attachmentId ?? -1"
      class="mb-4 rounded"
    />
    <h1 class="text-2xl mb-1">{{ profile?.profile.fullName }}</h1>
    <h1 class="mb-4">{{ profile?.email }}</h1>
    <UButton to="/sign-in">Logout</UButton>
  </div>
</template>
