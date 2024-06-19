// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/ui",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "nuxt-icon",
    "@pinia/nuxt",
  ],
  devtools: { enabled: true },
  app: {
    head: {
      title: "Photo Web",
      meta: [
        {
          name: "description",
          content: "Upload your photos here",
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      baseUrl: "",
    },
  },
  alias: {
    pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs",
  },
});
