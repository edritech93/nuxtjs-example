<template>
  <div class="flex flex-col min-h-screen p-2 border-r border-gray-100/30">
    <div class="flex flex-col flex-1">
      <NuxtLink to="/" class="mb-4">
        <ItemSideBar name="Upload">
          <SvgUpload color="white" />
        </ItemSideBar>
      </NuxtLink>
      <NuxtLink to="/profile">
        <ItemSideBar name="Profile">
          <SvgProfile color="white" />
        </ItemSideBar>
      </NuxtLink>
    </div>
  </div>
</template>
