<script setup lang="ts">
import Login from "~/components/auth/login.vue";
import Register from "~/components/auth/register.vue";
import Reset from "~/components/auth/reset.vue";
const page = ref<number>(1);
const router = useRouter();

useHead(() => {
  return {
    title:
      page.value == 1
        ? "Login"
        : page.value == 2
        ? "Registrer"
        : "Glemt kodeord",
  };
});
onMounted(() => {
  const authStore = useAuthStore();
  if (authStore.$state.token) router.push("/profile");
});
</script>

<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        class="mx-auto h-10 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      />
      <h2
        class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
      >
        {{
          page == 1
            ? "Login på din konto"
            : page == 2
            ? "Registrer din konto"
            : "Glemt kodeord"
        }}
      </h2>
    </div>

    <div v-if="page == 1">
      <Login @page="page = $event" />
    </div>
    <div v-else-if="page == 2">
      <Register @page="page = $event" />
    </div>
    <div v-else>
      <Reset @page="page = $event" />
    </div>
  </div>
</template>
