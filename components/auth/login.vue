<script setup lang="ts">
const emit = defineEmits<{ (event: "login", login: boolean): void }>();
</script>

<template>
  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6" action="#" method="POST">
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
        />
      </div>

      <div>
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
        @click="emit('login', false)"
      >
        Registrer her!
      </button>
    </p>
  </div>
</template>
