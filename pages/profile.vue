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
const edit = ref(false);

if (authStore.user) {
  user.value = authStore.user;
}
onMounted(() => {
  const authStore = useAuthStore();
  if (!authStore.$state.token) router.push("/auth");
});
function save() {
  http.put<User>("/user", user.value).then((res) => {
    authStore.user = res.data;
    user.value = res.data;
    edit.value = !edit;
  });
}
let bodyFormData = new FormData();
function uploadImage() {}
</script>

<template>
  <!-- About Section -->
  <div class="bg-white p-3 shadow-sm rounded-sm">
    <div>
      <h1 class="text-gray-900 font-bold text-xl leading-8 my-1 flex flex-row">
        Hej &nbsp;
        <div v-if="!edit">{{ user?.username }}</div>
        <input
          v-else
          class="w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="text"
          id="firstname"
          name="firstname"
          placeholder="John"
          v-model="user!.username"
          required
        />
      </h1>
      <img
        v-if="!edit"
        src="~/public/nikolai_wojack.png"
        alt="profile picture"
        width="128"
        height="128"
      />
      <form v-else>
        <input type="file" id="myFile" name="filename" />
        <button
          type="submit"
          class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
        >
          Upload billede
        </button>
      </form>
    </div>
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
          <div v-if="!edit" class="px-4 py-2">{{ user?.first_name }}</div>
          <input
            v-else
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="text"
            id="firstname"
            name="firstname"
            placeholder="John"
            v-model="user!.first_name"
            required
          />
        </div>
        <div class="grid grid-cols-2">
          <div class="px-4 py-2 font-semibold">Efternavn</div>
          <div v-if="!edit" class="px-4 py-2">{{ user?.last_name }}</div>
          <input
            v-else
            class="w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="text"
            id="firstname"
            name="firstname"
            placeholder="John"
            v-model="user!.last_name"
            required
          />
        </div>
        <div class="grid grid-cols-2">
          <div class="px-4 py-2 font-semibold">Gender</div>
          <div class="px-4 py-2">Dees nuts</div>
        </div>
        <div class="grid grid-cols-2">
          <div class="px-4 py-2 font-semibold">Biografi</div>
          <div v-if="!edit" class="px-4 py-2">{{ user?.biography }}</div>
          <input
            v-else
            class="w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="text"
            id="firstname"
            name="firstname"
            placeholder="Jeg er en cool person"
            v-model="user!.biography"
            required
          />
        </div>
        <div class="grid grid-cols-2">
          <div class="px-4 py-2 font-semibold">Vægt</div>
          <div v-if="!edit" class="px-4 py-2">{{ user?.weight }}</div>
          <input
            v-else
            class="w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="number"
            id="firstname"
            name="firstname"
            placeholder="0"
            v-model="user!.weight"
            required
          />
        </div>
        <div class="grid grid-cols-2">
          <div class="px-4 py-2 font-semibold">Højde</div>
          <div v-if="!edit" class="px-4 py-2">{{ user?.height }}</div>
          <input
            v-else
            class="w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="number"
            step="any"
            id="firstname"
            name="firstname"
            placeholder="0"
            v-model="user!.height"
            required
          />
        </div>
        <div class="grid grid-cols-2">
          <div class="px-4 py-2 font-semibold">Email</div>
          <div class="px-4 py-2">
            <a
              v-if="!edit"
              class="text-blue-800"
              href="mailto:jane@example.com"
              >{{ user?.email }}</a
            >
            <input
              v-else
              class="w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              type="text"
              id="firstname"
              name="firstname"
              placeholder="John"
              v-model="user!.email"
              required
            />
          </div>
        </div>
        <div class="grid grid-cols-2">
          <div class="px-4 py-2 font-semibold">Fødselsdag</div>
          <div v-if="!edit" class="px-4 py-2">{{ user?.birthdate }}</div>
          <input
            v-else
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="date"
            id="birthdate"
            name="birthdate"
            v-model="user!.birthdate"
          />
        </div>
      </div>
    </div>
    <button
      v-if="edit"
      @click="save()"
      class="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4"
    >
      Gem
    </button>
    <button
      v-else
      @click="edit = !edit"
      class="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4"
    >
      Ændre information
    </button>
  </div>
  <!-- End of about section -->
</template>
