<script setup lang="ts">
const emit = defineEmits<{ (event: "page", page: number): void }>();
const router = useRouter();
const form = ref({
  username: "",
  password: "",
});
const errorList = ref<string[]>([]);
import { Response } from "~/interfaces/response";
import { User } from "~/interfaces/user";
import http from "~/middleware/http";
import { useAuthStore } from "~/stores/auth";
async function login() {
  const authStore = useAuthStore();
  await http
    .post<Response<void>>("/auth/login", {
      username: form.value.username,
      password: form.value.password,
    })
    .then((res) => {
      http
        .get<User>("user", {
          headers: {
            Authorization: "Bearer " + res.data.token!,
          },
        })
        .then((user) => {
          authStore.signIn({
            user: user.data,
            token: res.data.token!,
            permissions: [],
          });
          router.push("/profile");
        });
      return res;
    })
    .catch((error) => {
      errorList.value = [];
      let output: Response<void> = error.data;
      if (output.errors) {
        Object.entries(output.errors!).forEach(([key, errors]) => {
          errors.forEach((x) => {
            errorList.value.push(x);
            console.log(x);
          });
        });
      } else {
        errorList.value.push(output.message);
      }
    });
}
</script>

<template>
  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6" @submit.prevent="login()">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name"
          >Brugernavn</label
        >
        <input
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="text"
          id="name"
          name="name"
          placeholder="Swole Joe"
          v-model="form.username"
          required
        />
      </div>
      <div class="mb-4">
        <div class="flex justify-between">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
            >Password</label
          >
          <div class="text-sm">
            <a
              href="#"
              class="font-semibold text-indigo-600 hover:text-indigo-500"
              @click="emit('page', 3)"
              >Glemt dit kodeord?</a
            >
          </div>
        </div>

        <input
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="password"
          id="password"
          name="password"
          placeholder="********"
          v-model="form.password"
          required
        />
      </div>

      <div>
        <p v-for="error in errorList" class="mb-1 text-xs text-red-500">
          {{ error }}
        </p>
        <button
          type="submit"
          class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Login
        </button>
      </div>
    </form>

    <p class="mt-10 text-center text-sm text-gray-500">
      Ikke medlem?
      <button
        class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
        @click="emit('page', 2)"
      >
        Registrer her!
      </button>
    </p>
  </div>
</template>
