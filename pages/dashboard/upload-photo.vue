<script setup lang="ts">
import { format } from "date-fns";

import { object, string, type InferType } from "yup";
import type { FormSubmitEvent } from "#ui/types";

definePageMeta({
  middleware: "auth",
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

const date = ref(new Date());

function onChangeDate(value: Date) {
  date.value = value;
}
</script>

<template>
  <UCard class="flex flex-1 flex-col p-4 m-4">
    <UForm
      :schema="schema"
      :state="state"
      class="space-y-4 flex flex-col flex-1"
      @submit="onSubmit"
    >
      <div class="flex flex-1 gap-4">
        <div class="flex flex-1 flex-col">
          <UFormGroup label="Price" name="price" class="mb-4">
            <UInput v-model="state.price" type="number" />
          </UFormGroup>

          <UFormGroup label="Location" name="location">
            <UInput v-model="state.location" />
          </UFormGroup>
        </div>
        <div class="flex flex-1 flex-col">
          <UFormGroup label="Date" name="date" class="mb-4">
            <!-- <UInput v-model="state.price" /> -->
            <SelectDatePicker />
          </UFormGroup>
          <UFormGroup label="Image" name="image" class="mb-4">
            <UInput type="file" size="sm" icon="i-heroicons-folder" />
          </UFormGroup>
        </div>
      </div>

      <UFormGroup label="Description" name="description">
        <UTextarea v-model="state.description" />
      </UFormGroup>

      <div class="self-end">
        <UButton
          type="submit"
          :loading="loading"
          :disabled="loading"
          class="mr-4"
          variant="outline"
        >
          Add Photo
        </UButton>

        <UButton type="submit" :loading="loading" :disabled="loading">
          Save Change
        </UButton>
      </div>
    </UForm>
  </UCard>
</template>
