// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  css: ["~/assets/css/main.css"],
  typescript: {
    strict: true,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["nuxt-icon", "@sidebase/nuxt-session"],
  runtimeConfig: {
    public: {
      apiURL: "https://d806-185-19-132-71.ngrok-free.app/api/",
    },
  },
});
