<script setup lang="ts">
import { object, string, type InferType } from "yup";
import type { FormSubmitEvent } from "#ui/types";

const { login } = useAuth();

const schema = object({
  email: string().email("Invalid email").required("Required"),
  password: string()
    .min(8, "Must be at least 8 characters")
    .required("Required"),
});

type Schema = InferType<typeof schema>;

const state = reactive({
  email: undefined,
  password: undefined,
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Do something with event.data
  // console.log(event.data);
  // const response = await axios.get(
  //   "https://jsonplaceholder.typicode.com/todos/1"
  // );
  // console.log(response);
  // navigateTo("/dashboard");
  login();
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

        <UButton type="submit"> Submit </UButton>
      </UForm>
    </UCard>
  </div>
</template>
