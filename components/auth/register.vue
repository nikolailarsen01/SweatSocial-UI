<script setup lang="ts">
const config = useRuntimeConfig();
const emit = defineEmits<{ (event: "login", login: boolean): void }>();
const request = ref(true);
const form = ref({
  username: "",
  firstName: "",
  lastName: "",
  rawBirthDate: "",
  email: "",
  password: "",
  confirmPassword: "",
});

import { Response } from "~/interfaces/response";
import { Register } from "~/interfaces/register";
async function register() {
  let birthdate = form.value.rawBirthDate;
  const response = await $fetch<Response<Register>>(
    config.public.apiURL + "auth/register",
    {
      method: "post",
      body: {
        username: form.value.username,
        first_name: form.value.firstName,
        last_name: form.value.lastName,
        email: form.value.email,
        birthdate: birthdate,
        password: form.value.password,
      },
    }
  );
  console.log(response.success);
  request.value = response.success.valueOf();
}
</script>

<template>
  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-xl">
    <div>{{ request ? "bla" : "FAILED" }}</div>
    <form class="space-y-6">
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
            :model="form.username"
            placeholder="Swole Joe"
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
              :model="form.firstName"
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
              :model="form.lastName"
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
          :model="form.rawBirthDate"
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
          :model="form.email"
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
            :model="form.password"
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
            :model="form.confirmPassword"
          />
        </div>
      </div>

      <div>
        <button
          @click="register()"
          type="button"
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
