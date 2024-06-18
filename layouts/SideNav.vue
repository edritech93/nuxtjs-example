<template>
  <div class="flex flex-1 flex-row">
    <SideBar />
    <div class="flex flex-1 flex-col">
      <BackNav name="Upload" />
      <slot />
    </div>
  </div>
</template>
