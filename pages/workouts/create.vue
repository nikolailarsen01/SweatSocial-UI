<script lang="ts" setup>

const showModal = ref(false);

</script>

<template>

  <Modal v-show="showModal">
    <a class="cursor-pointer" @click="showModal = false">X</a>
    søg efter øvelser
  </Modal>

  <div class="w-full bg-gradient-to-r from-orange-400 to-orange-600 rounded mb-4">
    <div class="p-5 pt-12 rounded-b text-3xl underline w-full flex justify-between">Workouts <NuxtLink to="/workouts">Tilbage</NuxtLink></div>
  </div>

  <div class="w-full">
    <form class="grid grid-cols-2 gap-2">
      <div class="col-span-2">
        <label for="name">Workout navn*</label>
        <input type="text" name="name" id="name" class="w-full rounded p-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300" />
      </div>
      <div class="col-span-2">
        <label for="description">Beskrivelse</label>
        <textarea name="description" id="description" type="text" class="w-full rounded p-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300" />
      </div>
      <div class="col-span-2">
        <div class="rounded-t shadow-sm ring-1 ring-inset ring-gray-300 h-96 overflow-y-scroll p-2 flex gap-2 flex-col">
          <div v-for="n in 10" class="w-full p-2 pr-4 h-9 text-sm flex place-items-center justify-between bg-orange-300 flex gap-5 rounded">
            <h1>Mavebøjninger</h1>
            <Icon class="text-lg cursor-pointer" name="heroicons:x-mark" />
          </div>
        </div>
        <a @click="showModal = true" class="rounded-b py-2 shadow-sm cursor-pointer bg-orange-400 hover:bg-orange-500 block text-center w-full">
          Tilføj øvelse
        </a>
      </div>
      <input type="submit" value="Opret workout" class="w-full cursor-pointer rounded p-3 px-2 text-gray-900 shadow-sm bg-orange-400 hover:bg-orange-500 col-span-2">

    </form>
  </div>
</template>