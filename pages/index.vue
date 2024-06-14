<script setup lang="ts">
import { object, string, type InferType } from "yup";
import type { FormSubmitEvent } from "#ui/types";
import type { LoginResponseType } from "~/types/LoginType";

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
const toast = useToast();

async function onSubmit(event: FormSubmitEvent<Schema>) {
  try {
    loading.value = true;
    const config = useRuntimeConfig();
    const response: LoginResponseType = await $fetch(
      `${config.public.baseUrl}api/user-auth/sign-in`,
      {
        method: "POST",
        body: event.data,
      }
    );
    console.log(response);
    toast.add({ title: "Success", description: response.message });
    navigateTo("/dashboard");
  } catch (error) {
    console.log(error);
    toast.add({ title: "Error", description: JSON.stringify(error) });
  } finally {
    loading.value = false;
  }
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
