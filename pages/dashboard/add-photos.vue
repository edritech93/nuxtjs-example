<script setup lang="ts">
import { format } from "date-fns";

import { object, string, type InferType } from "yup";
import type { FormSubmitEvent } from "#ui/types";

definePageMeta({
  layout: false,
});

const schema = object({
  email: string().email("Invalid email").required("Required"),
  password: string()
    .min(6, "Must be at least 6 characters")
    .required("Required"),
});

type Schema = InferType<typeof schema>;

const state = reactive({
  price: undefined,
  location: undefined,
  date: undefined,
  description: undefined,
  tag: [],
});
const loading = ref(false);

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // loading.value = true;
  // const config = useRuntimeConfig();
  // const response = await $fetch(`${config.public.baseUrl}/posts`, {
  //   method: "POST",
  //   body: event.data,
  // });
  // console.log(response);
  // loading.value = false;
  // navigateTo("/dashboard");
}

definePageMeta({
  middleware: "auth",
});

const date = ref(new Date());

function onChangeDate(value: Date) {
  date.value = value;
}
</script>

<template>
  <div class="flex flex-1 p-4">
    <UCard class="flex flex-1 p-4">
      <UForm
        :schema="schema"
        :state="state"
        class="space-y-4"
        @submit="onSubmit"
      >
        <UFormGroup label="Price" name="price">
          <UInput v-model="state.price" />
        </UFormGroup>

        <UFormGroup label="Location" name="location">
          <UInput v-model="state.location" type="location" />
        </UFormGroup>

        <template #panel="{ close }">
          <DatePicker
            :model-value="null"
            is-required
            @close="close"
            @update:model-value="onChangeDate"
          />
        </template>

        <UButton type="submit" :loading="loading" :disabled="loading">
          Save Change
        </UButton>
      </UForm>
      <!-- <UPopover :popper="{ placement: 'bottom-start' }">
        <UButton
          icon="i-heroicons-calendar-days-20-solid"
          :label="format(date, 'd MMM, yyy')"
        />

        <template #panel="{ close }">
          <DatePicker
            :model-value="null"
            is-required
            @close="close"
            @update:model-value="onChangeDate"
          />
        </template>
      </UPopover> -->
    </UCard>
  </div>
</template>
