<script setup lang="ts">
import { format } from "date-fns";

definePageMeta({
  middleware: "auth",
});

const date = ref(new Date());

function onChangeDate() {}
</script>

<template>
  <UPopover :popper="{ placement: 'bottom-start' }">
    <UButton
      icon="i-heroicons-calendar-days-20-solid"
      :label="format(date, 'd MMM, yyy')"
    />

    <template #panel="{ close }">
      <DatePicker :model-value="null" is-required @close="close" />
    </template>
  </UPopover>
</template>
