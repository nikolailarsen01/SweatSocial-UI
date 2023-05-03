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
  modules: [
    'nuxt-sanctum-auth',
    'nuxt-icon'
  ],
  nuxtSanctumAuth: {
    token: false, // set true to use jwt-token auth instead of cookie. default is false
    baseUrl: "http://localhost:8000",
    endpoints: {
      csrf: "/sanctum/csrf-cookie",
      login: "/login",
      logout: "/logout",
      user: "/user",
    },
    csrf: {
      headerKey: "X-XSRF-TOKEN",
      cookieKey: "XSRF-TOKEN",
      tokenCookieKey: "nuxt-sanctum-auth-token",
    },
    redirects: {
      home: "/account",
      login: "/auth/login",
      logout: "/",
    },
  },
});
