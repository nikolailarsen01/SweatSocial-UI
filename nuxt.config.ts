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
  modules: ["nuxt-icon", "@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt"],
  imports: {
    dirs: ["./stores"],
  },
  runtimeConfig: {
    public: {
      baseUrl: "http://127.0.0.1:8000/",
    },
  },
});
