<template>
  <div class="flex flex-col w-80 h-svh bg-gray-500 p-8">
    <div class="flex flex-col flex-1">
      <NuxtLink to="/dashboard" class="mb-4">
        <h1>Dashboard</h1>
      </NuxtLink>
      <NuxtLink to="/dashboard/add-photos">
        <h1>Add Photos</h1>
      </NuxtLink>
    </div>

    <NuxtLink to="/">
      <h1 class="bg-red-500">Logout</h1>
    </NuxtLink>
  </div>
</template>
