<script setup lang="ts">
import SvgUpload from "./SvgUpload.vue";
import SvgProfile from "./SvgProfile.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen p-2 border-r border-gray-100/30">
    <div class="flex flex-col flex-1">
      <NuxtLink to="/" class="mb-4">
        <ItemSideBar icon="~/icons/upload-white-24.png" name="Dashboard">
          <SvgUpload />
        </ItemSideBar>
      </NuxtLink>
      <NuxtLink to="/profile">
        <ItemSideBar name="Profile">
          <SvgProfile />
        </ItemSideBar>
      </NuxtLink>
    </div>
  </div>
</template>
