<template>
  <div class="flex flex-col min-h-screen p-2 border-r border-gray-100/30">
    <div class="flex flex-col flex-1">
      <NuxtLink to="/" class="mb-4">
        <ItemSideBar icon="icon/upload-white-24.png" name="Dashboard" />
      </NuxtLink>
      <NuxtLink to="/profile">
        <ItemSideBar icon="icon/active-white-24.png" name="Profile" />
      </NuxtLink>
    </div>
  </div>
</template>
