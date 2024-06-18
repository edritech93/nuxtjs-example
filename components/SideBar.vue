<template>
  <div class="flex flex-col min-h-screen p-2 border-r border-gray-100/30">
    <div class="flex flex-col flex-1">
      <NuxtLink to="/" class="mb-4">
        <ItemSideBar icon="svg/svg-upload-24.svg" name="Dashboard" />
      </NuxtLink>
      <NuxtLink to="/profile">
        <ItemSideBar icon="svg/svg-upload-24.svg" name="Profile" />
      </NuxtLink>
    </div>
  </div>
</template>
