<script lang="ts" setup>

const allSignedUp = ref(false);
const allMyChallenges = ref(false);
const allAcquaintances = ref(false);

const showModal = ref(false);

</script>

<template>

  <Modal v-show="showModal">
    <a class="cursor-pointer" @click="showModal = false">X</a>
    Udfordring preview
  </Modal>

  <div class="w-full bg-gradient-to-r from-rose-400 to-rose-600 rounded mb-4">
    <div class="p-5 pt-12 rounded-b text-3xl underline">Udfordringer</div>
  </div>

  <div class="w-full mb-4">
    <label class="underline">Tilmeldte udfordringer (10)</label>
    <div :class="[ allSignedUp ? 'h-64 overflow-y-scroll' : 'h-32' ]" class="bg-rose-300 mt-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 rounded-t p-2 gap-2 overflow-hidden transition-all duration-250 ease">
      <div @click="showModal = true" v-for="n in 10" class="h-28 bg-rose-400 hover:bg-rose-500 hover:text-white cursor-pointer col-span-1 rounded p-2">
        <h1 class="truncate">Vandretur på himmelbjerget</h1>
        <small>11-05-2023 10:00 - 3 dage</small>
        <p class="text-sm truncate">En viderunderlig vandretur på en solrig dag på himmenbjerget</p>
        <p class="text-sm mt-1 pt-1 border-t border-gray-700">13 deltagere - 2 bekendte</p>
      </div>
    </div>
    <div @click="allSignedUp = !allSignedUp" class="bg-rose-400 rounded-b p-1 cursor-pointer text-center pr-3"><Icon :class="{ 'rotate-180' : allSignedUp }" name="heroicons:chevron-down-solid"/></div>
  </div>

  <div class="w-full mb-4">
    <div class="flex justify-between">
      <label class="underline">Mine udfordringer (2)</label>
      <NuxtLink to="/challenges/create" class="bg-rose-400 hover:bg-rose-500 hover:text-white p-1 px-3 rounded">Ny</NuxtLink>
    </div>
    <div :class="[ allMyChallenges ? 'h-64 overflow-y-scroll' : 'h-32' ]" class="bg-rose-200 mt-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 rounded-t p-2 gap-2 overflow-hidden transition-all duration-250 ease">
      <div @click="showModal = true" v-for="n in 2" class="h-28 bg-rose-400 hover:bg-rose-500 hover:text-white cursor-pointer col-span-1 rounded p-2">
        <h1 class="truncate">Vandretur på himmelbjerget</h1>
        <small>11-05-2023 10:00 - 3 dage</small>
        <p class="text-sm truncate">En viderunderlig vandretur på en solrig dag på himmenbjerget</p>
        <p class="text-sm mt-1 pt-1 border-t border-gray-700">13 deltagere - 2 bekendte</p>
      </div>
    </div>
    <div @click="allMyChallenges = !allMyChallenges" class="bg-rose-400 rounded-b p-1 cursor-pointer text-center pr-3"><Icon :class="{ 'rotate-180' : allMyChallenges }" name="heroicons:chevron-down-solid"/></div>
  </div>

  <div class="w-full mb-4">
    <label class="underline">Udfordringer bekendte deltager i (5)</label>
    <div :class="[ allAcquaintances ? 'h-64 overflow-y-scroll' : 'h-32' ]" class="bg-rose-200 mt-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 rounded-t p-2 gap-2 overflow-hidden transition-all duration-250 ease">
      <div @click="showModal = true" v-for="n in 5" class="h-28 bg-rose-400 hover:bg-rose-500 hover:text-white cursor-pointer col-span-1 rounded p-2">
        <h1 class="truncate">Vandretur på himmelbjerget</h1>
        <small>11-05-2023 10:00 - 3 dage</small>
        <p class="text-sm truncate">En viderunderlig vandretur på en solrig dag på himmenbjerget</p>
        <p class="text-sm mt-1 pt-1 border-t border-gray-700">13 deltagere - 2 bekendte</p>
      </div>
    </div>
    <div @click="allAcquaintances = !allAcquaintances" class="bg-rose-400 rounded-b p-1 cursor-pointer text-center pr-3"><Icon :class="{ 'rotate-180' : allAcquaintances }" name="heroicons:chevron-down-solid"/></div>
  </div>

</template>