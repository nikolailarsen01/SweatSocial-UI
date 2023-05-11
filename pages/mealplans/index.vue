<script lang="ts" setup>

const allMealplans = ref(false);

const showModal = ref(false);
const showSharetokenModal = ref(false);


</script>

<template>

  <Modal v-show="showModal">
    <a class="cursor-pointer" @click="showModal = false">X</a>
    madplan preview
  </Modal>

  <Modal v-show="showSharetokenModal">
    <a class="cursor-pointer" @click="showSharetokenModal = false">X</a>
    indsæt sharetoken here
  </Modal>

  <div class="w-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded mb-4">
    <div class="p-5 pt-12 rounded-b text-3xl underline">Madplaner</div>
  </div>

  <div class="w-full mb-4">
    <div class="flex justify-between">
      <label class="underline">Mine madplaner (10)</label>
      <div class="flex gap-2">
        <a  @click="showSharetokenModal = true" class="bg-emerald-400 hover:bg-emerald-500 hover:text-white p-1 px-3 rounded">Tilføj</a>
        <NuxtLink to="/mealplans/create" class="bg-emerald-400 hover:bg-emerald-500 hover:text-white p-1 px-3 rounded">Ny</NuxtLink>
      </div>
    </div>
    <div :class="[ allMealplans ? 'h-64 overflow-y-scroll' : 'h-32' ]" class="bg-emerald-200 mt-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 rounded-t p-2 gap-2 overflow-hidden transition-all duration-250 ease">
      <div @click="showModal = true" v-for="n in 10" class="h-28 bg-emerald-400 hover:bg-emerald-500 hover:text-white cursor-pointer col-span-1 rounded p-2">
        <h1 class="truncate">Bulk diæt</h1>
        <small>Varighed 3 uger</small>
        <p class="text-sm truncate">MEGA BULK DIÆT BIG MUSCLES YEAH!</p>
        <p class="text-sm mt-1 pt-1 border-t border-gray-700">73 retter</p>
      </div>
    </div>
    <div @click="allMealplans = !allMealplans" class="bg-emerald-400 rounded-b p-1 cursor-pointer text-center pr-3"><Icon :class="{ 'rotate-180' : allMealplans }" name="heroicons:chevron-down-solid"/></div>
  </div>


</template>