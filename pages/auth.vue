<script setup lang="ts">
import Login from "~/components/auth/login.vue";
import Register from "~/components/auth/register.vue";
const login = ref<boolean>(true);
const router = useRouter();

useHead(() => {
  return {
    title: login.value ? "Login" : "Registrer",
  };
});
onMounted(() => {
  if (localStorage.getItem("API-Token")) router.push("/profile");
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
        {{ login ? "Login på din konto" : "Registrer din konto" }}
      </h2>
    </div>

    <div v-if="login">
      <Login @login="login = $event" />
    </div>
    <div v-else>
      <Register @login="login = $event" />
    </div>
  </div>
</template>
