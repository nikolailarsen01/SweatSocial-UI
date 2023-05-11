<script setup lang="ts">
const router = useRouter();
import { User } from "~/types/user";
import http from "~/middleware/http";
useHead(() => {
  return {
    title: "Profil",
  };
});
const authStore = useAuthStore();
const user = ref<User>();
if (authStore.user) {
  user.value = authStore.user;
}
onMounted(() => {
  const authStore = useAuthStore();
  if (!authStore.$state.token) router.push("/auth");
});
</script>

<template>
  <div>Hej {{ user?.first_name }} {{ user?.last_name }}</div>
  <!-- About Section -->
  <div class="bg-white p-3 shadow-sm rounded-sm">
    <div
      class="flex items-center space-x-2 font-semibold text-gray-900 leading-8"
    >
      <span clas="text-green-500">
        <svg
          class="h-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      </span>
      <span class="tracking-wide">Information</span>
    </div>
    <div class="text-gray-700">
      <div class="grid md:grid-cols-2 text-sm">
        <div class="grid grid-cols-2">
          <div class="px-4 py-2 font-semibold">Fornavn</div>
          <div class="px-4 py-2">{{ user?.first_name }}</div>
        </div>
        <div class="grid grid-cols-2">
          <div class="px-4 py-2 font-semibold">Efternavn</div>
          <div class="px-4 py-2">{{ user?.last_name }}</div>
        </div>
        <div class="grid grid-cols-2">
          <div class="px-4 py-2 font-semibold">Gender</div>
          <div class="px-4 py-2">Dees nuts</div>
        </div>
        <div class="grid grid-cols-2">
          <div class="px-4 py-2 font-semibold">Contact No.</div>
          <div class="px-4 py-2">+11 998001001</div>
        </div>
        <div class="grid grid-cols-2">
          <div class="px-4 py-2 font-semibold">Current Address</div>
          <div class="px-4 py-2">Beech Creek, PA, Pennsylvania</div>
        </div>
        <div class="grid grid-cols-2">
          <div class="px-4 py-2 font-semibold">Permanant Address</div>
          <div class="px-4 py-2">Arlington Heights, IL, Illinois</div>
        </div>
        <div class="grid grid-cols-2">
          <div class="px-4 py-2 font-semibold">Email</div>
          <div class="px-4 py-2">
            <a class="text-blue-800" href="mailto:jane@example.com">{{
              user?.email
            }}</a>
          </div>
        </div>
        <div class="grid grid-cols-2">
          <div class="px-4 py-2 font-semibold">Fødselsdag</div>
          <div class="px-4 py-2">{{ user?.birthdate }}</div>
        </div>
      </div>
    </div>
    <button
      class="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4"
    >
      Ændre information
    </button>
  </div>
  <!-- End of about section -->
</template>
