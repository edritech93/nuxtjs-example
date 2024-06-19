<script setup lang="ts">
import { object, string, type InferType } from "yup";
import type { FormSubmitEvent } from "#ui/types";

definePageMeta({
  middleware: "auth",
  layout: "side-nav",
});
useSeoMeta({
  title: "Upload Photo",
});

const schema = object({
  price: string().required("Required"),
  location: string().required("Required"),
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
const toast = useToast();

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
  <main class="flex">
    <AuthLeftView />
    <div class="w-96 min-h-screen p-4 flex flex-col">
      <UForm
        :schema="schema"
        :state="state"
        class="space-y-4 flex flex-col flex-1"
        @submit="onSubmit"
      >
        <UFormGroup label="Price" name="price">
          <UInput v-model="state.price" type="number" />
        </UFormGroup>
        <UFormGroup label="Location" name="location">
          <UInput v-model="state.location" />
        </UFormGroup>
        <UFormGroup label="Date" name="date">
          <!-- <UInput v-model="state.price" /> -->
          <SelectDatePicker />
        </UFormGroup>
        <UFormGroup label="Description" name="description">
          <UTextarea v-model="state.description" />
        </UFormGroup>
        <UFormGroup label="Image" name="image">
          <UInput type="file" size="sm" icon="i-heroicons-folder" />
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
            Submit
          </UButton>
        </div>
      </UForm>
    </div>
  </main>
</template>
