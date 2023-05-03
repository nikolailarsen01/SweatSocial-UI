<script setup lang="ts">
const config = useRuntimeConfig();
const router = useRouter();
const emit = defineEmits<{ (event: "login", login: boolean): void }>();
const form = ref({
  username: "",
  firstName: "",
  lastName: "",
  rawBirthDate: "",
  email: "",
  password: "",
  confirmPassword: "",
});

const errorList = ref<string[]>([]);

import { Response } from "~/interfaces/response";
import { Register } from "~/interfaces/register";
async function register() {
  errorList.value = [];
  if (form.value.password != form.value.confirmPassword) {
    errorList.value.push("Kodeorderne er ikke ens");
    return;
  }
  let birthdate = form.value.rawBirthDate;
  await $fetch<Response<Register>>(config.public.apiURL + "auth/register", {
    method: "post",
    body: {
      username: form.value.username,
      first_name: form.value.firstName,
      last_name: form.value.lastName,
      email: form.value.email,
      birthdate: birthdate,
      password: form.value.password,
    },
  })
    .then((res) => {
      const apiToken = useCookie("API-Token", {
        sameSite: true,
      });
      apiToken.value = res.token;
      router.push("/profile");
    })
    .catch((error) => {
      let output: Response<Register> = error.data;
      Object.entries(output.errors!).forEach(([key, errors]) => {
        errors.forEach((x) => {
          errorList.value.push(x);
          console.log(x);
        });
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
        <p v-for="error in errorList" class="mb-1 text-xs text-red-500">
          {{ error }}
        </p>

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
        @click="emit('login', true)"
      >
        Login her!
      </button>
    </p>
  </div>
</template>
