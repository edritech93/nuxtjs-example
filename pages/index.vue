<script setup lang="ts">
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
  email: undefined,
  password: undefined,
});
const loading = ref(false);

async function onSubmit(event: FormSubmitEvent<Schema>) {
  loading.value = true;
  const config = useRuntimeConfig();
  const response = await $fetch(`${config.public.baseUrl}/posts`, {
    method: "POST",
    body: event.data,
  });
  console.log(response);
  loading.value = false;
  navigateTo("/dashboard");
}
</script>

<template>
  <div class="flex flex-1 flex-col min-h-svh items-center justify-center">
    <UCard class="w-96 self-center">
      <UForm
        :schema="schema"
        :state="state"
        class="space-y-4"
        @submit="onSubmit"
      >
        <UFormGroup label="Email" name="email">
          <UInput v-model="state.email" />
        </UFormGroup>

        <UFormGroup label="Password" name="password">
          <UInput v-model="state.password" type="password" />
        </UFormGroup>

        <UButton type="submit" :loading="loading" :disabled="loading">
          Login
        </UButton>
      </UForm>
    </UCard>
  </div>
</template>
