<script setup lang="ts">
const config = useRuntimeConfig();
const router = useRouter();
const emit = defineEmits<{ (event: "page", page: number): void }>();
const form = ref({
  username: "",
  firstName: "",
  lastName: "",
  rawBirthDate: "",
  email: "",
  password: "",
  confirmPassword: "",
});
import { Register } from "~/types/register";
import http from "~/middleware/http";
import { useToast } from "vue-toast-notification";
import { useAuthStore } from "~/stores/auth";
const authStore = useAuthStore();
const toast = useToast();
async function register() {
  if (form.value.password != form.value.confirmPassword) {
    toast.error("Kodeorderne er ikke ens");
    return;
  }
  let birthdate = form.value.rawBirthDate;
  http
    .post<Register>("/auth/register", {
      username: form.value.username,
      first_name: form.value.firstName,
      last_name: form.value.lastName,
      email: form.value.email,
      birthdate: birthdate,
      password: form.value.password,
    })
    .then((res) => {
      authStore.signIn({
        user: res.data.user,
        token: res.data.token,
        permissions: [],
      });
    });
}
</script>

<template>
  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-xl">
    <div></div>
    <form class="space-y-6" @submit.prevent="register()">
      <div>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
            >Brugernavn</label
          >
          <input
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="text"
            id="username"
            name="username"
            placeholder="Swole Joe"
            v-model="form.username"
            required
          />
        </div>
      </div>
      <div class="columns-2 mb-1">
        <div>
          <div>
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="firstname"
              >Fornavn</label
            >
            <input
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              type="text"
              id="firstname"
              name="firstname"
              placeholder="John"
              v-model="form.firstName"
              required
            />
          </div>
        </div>
        <div>
          <div>
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="lastname"
              >Efternavn</label
            >
            <input
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Doe"
              v-model="form.lastName"
              required
            />
          </div>
        </div>
      </div>
      <div>
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="birthdate"
          >Fødselsdag</label
        >
        <input
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="date"
          id="birthdate"
          name="birthdate"
          v-model="form.rawBirthDate"
          required
        />
      </div>
      <div>
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email"
          >Email</label
        >
        <input
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="email"
          id="email"
          name="email"
          placeholder="john@example.com"
          v-model="form.email"
          required
        />
      </div>
      <div class="columns-2 mb-1">
        <div>
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
            >Password</label
          >
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
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="confirm-password"
            >Confirm Password</label
          >
          <input
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="password"
            id="confirm-password"
            name="confirm-password"
            placeholder="********"
            v-model="form.confirmPassword"
            required
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Registrer
        </button>
      </div>
    </form>

    <p class="mt-10 text-center text-sm text-gray-500">
      Har du en konto?
      <button
        class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
        @click="emit('page', 1)"
      >
        Login her!
      </button>
    </p>
  </div>
</template>
