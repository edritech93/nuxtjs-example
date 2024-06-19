<script setup lang="ts">
import { SideBarEnum, useAppStore } from "~/store/app";

const appStore = useAppStore();
const { sideBar } = storeToRefs(appStore);
</script>

<template>
  <div class="flex flex-col min-h-screen p-2 border-r border-gray-100/30">
    <div class="flex flex-col flex-1">
      <NuxtLink
        to="/"
        @click.native="appStore.change(SideBarEnum.Upload)"
        class="mb-4"
      >
        <ItemSideBar name="Upload" :active="sideBar === SideBarEnum.Upload">
          <SvgUpload
            :color="sideBar === SideBarEnum.Upload ? '#442CD1' : 'white'"
          />
        </ItemSideBar>
      </NuxtLink>
      <NuxtLink
        to="/profile"
        @click.native="appStore.change(SideBarEnum.Profile)"
      >
        <ItemSideBar name="Profile" :active="sideBar === SideBarEnum.Profile">
          <SvgProfile
            :color="sideBar === SideBarEnum.Profile ? '#442CD1' : 'white'"
          />
        </ItemSideBar>
      </NuxtLink>
    </div>
  </div>
</template>
