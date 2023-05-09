<script setup lang="ts">
const router = useRouter();
import { User } from "~/interfaces/user";
import http from "~/middleware/http";
useHead(() => {
  return {
    title: "Profil",
  };
});
const user = ref<User>();
http.get<User>("user").then((res) => {
  user.value = res.data!;
});
onMounted(() => {
  const authStore = useAuthStore();
  if (!authStore.$state.token) router.push("/auth");
});
</script>

<template>
  <div>Hej {{ user?.first_name }} {{ user?.last_name }}</div>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">Joe</div>
  </div>
</template>
