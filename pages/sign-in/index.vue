<script setup lang="ts">
import { object, string, type InferType } from "yup";
import type { FormSubmitEvent } from "#ui/types";
import { API } from "~/libs/Api";
import type { AxiosResponse } from "axios";
import type { ShowAlertType } from "~/types/ShowAlertType";
import type { SignInResponseType } from "~/types/SignInType";
import { Helper } from "~/libs/Helper";
import { useProfileStore } from "~/store/profile";

definePageMeta({
  layout: false,
});
useSeoMeta({
  title: "Sign In",
});

onMounted(() => {
  Helper.removeToken();
  Helper.removeRefreshToken();
});

const schema = object({
  email: string().email("Invalid Email").required("Email is Required"),
  password: string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is Required"),
});

type Schema = InferType<typeof schema>;

const state = reactive({
  email: undefined,
  password: undefined,
});
const loading = ref(false);
const toast = useToast();
const profile = useProfileStore();

async function onSubmit(event: FormSubmitEvent<Schema>) {
  loading.value = true;
  API.singleRequest(API.signInApp(event.data))
    .then((response: AxiosResponse) => {
      const objRes: SignInResponseType = response.data;
      Helper.setToken(objRes.accessToken);
      Helper.setRefreshToken(objRes.refreshToken);
      loadProfile();
      navigateTo("/");
    })
    .catch((error: ShowAlertType) => toast.add(error as any))
    .finally(() => {
      loading.value = false;
    });
}

function loadProfile() {
  API.singleRequest(API.getMyProfile())
    .then((response: AxiosResponse) => profile.change(response.data))
    .catch((error: ShowAlertType) => toast.add(error as any));
}
</script>

<template>
  <main class="flex">
    <AuthLeftView />
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
