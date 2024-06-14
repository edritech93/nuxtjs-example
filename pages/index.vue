<script setup lang="ts">
import { object, string, type InferType } from "yup";
import type { FormSubmitEvent } from "#ui/types";
import type { LoginResponseType } from "~/types/LoginType";

definePageMeta({
  layout: false,
});
useSeoMeta({
  title: "Login",
});

onMounted(() => {
  localStorage.removeItem("accessToken");
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
    localStorage.setItem("accessToken", response.accessToken);
    toast.add({ title: "Success", description: response.message });
    navigateTo("/dashboard");
  } catch (error) {
    toast.add({ title: "Error", description: JSON.stringify(error) });
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <main class="flex">
    <div class="flex flex-1 flex-col bg-blue-600 justify-center px-8">
      <h1 class="text-4xl font-semibold">Find your photo in *Foto*!</h1>
    </div>
    <div class="w-96 min-h-screen p-4 flex flex-col">
      <div class="flex flex-1" />
      <div class="flex flex-1 flex-col">
        <h1 class="text-center text-2xl mb-4">Sign In</h1>
        <p class="text-center mb-8 text-base">
          Login with your registered account
        </p>
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

          <UButton
            type="submit"
            :loading="loading"
            :disabled="loading"
            class="w-full justify-center"
          >
            Sign In
          </UButton>
        </UForm>
      </div>
      <div class="flex flex-1" />
    </div>
  </main>
</template>
