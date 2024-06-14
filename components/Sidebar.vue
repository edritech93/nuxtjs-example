<template>
  <div class="flex flex-col min-h-screen p-2 border-r border-gray-100/30">
    <div class="flex flex-col flex-1">
      <NuxtLink to="/" class="mb-4">
        <h1>Dashboard</h1>
      </NuxtLink>
      <NuxtLink to="/profile">
        <h1>Profile</h1>
      </NuxtLink>
    </div>

    <NuxtLink to="/sign-in">
      <h1 class="bg-red-500">Logout</h1>
    </NuxtLink>
  </div>
</template>
