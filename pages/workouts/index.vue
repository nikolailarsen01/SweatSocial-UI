<script lang="ts" setup>

const allSignedUp = ref(false);
const allMyEvents = ref(false);
const allDoneSessions = ref(false);

const showModal = ref(false);
const showSharetokenModal = ref(false);
const showNewSessionModal = ref(false);

</script>

<template>

  <Modal v-show="showModal">
    <a class="cursor-pointer" @click="showModal = false">X</a>
    Workout preview
  </Modal>

  <Modal v-show="showSharetokenModal">
    <a class="cursor-pointer" @click="showSharetokenModal = false">X</a>
    indsæt sharetoken here
  </Modal>

  <Modal v-show="showNewSessionModal">
    <a class="cursor-pointer" @click="showNewSessionModal = false">X</a>
    vælg imellem workouts
  </Modal>

  <div class="w-full bg-gradient-to-r from-orange-400 to-orange-600 rounded mb-4">
    <div class="p-5 pt-12 rounded-b text-3xl underline">Workouts</div>
  </div>

  <div class="w-full mb-4">
    <div class="flex justify-between">
      <label class="underline">Mine workouts (10)</label>
      <div class="flex gap-2">
        <a  @click="showSharetokenModal = true" class="bg-orange-400 hover:bg-orange-500 hover:text-white p-1 px-3 rounded">Tilføj</a>
        <NuxtLink to="/workouts/create" class="bg-orange-400 hover:bg-orange-500 hover:text-white p-1 px-3 rounded">Ny</NuxtLink>
      </div>
    </div>
    <div :class="[ allSignedUp ? 'h-64 overflow-y-scroll' : 'h-[6.25rem]' ]" class="bg-orange-200 mt-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 rounded-t p-2 gap-2 overflow-hidden transition-all duration-250 ease">
      <div @click="showModal = true" v-for="n in 10" class="h-[5.5rem] bg-orange-400 hover:bg-orange-500 hover:text-white cursor-pointer col-span-1 rounded p-2">
        <h1 class="truncate">PUSH A</h1>
        <p class="text-sm truncate">THS IS PUSH WORKOUT A.</p>
        <p class="text-sm mt-1 pt-1 border-t border-gray-700">6 exercises</p>
      </div>
    </div>
    <div @click="allSignedUp = !allSignedUp" class="bg-orange-400 rounded-b p-1 cursor-pointer text-center pr-3"><Icon :class="{ 'rotate-180' : allSignedUp }" name="heroicons:chevron-down-solid"/></div>
  </div>

  <div class="w-full mb-4">
    <div class="flex justify-between">
      <label class="underline">Igangværende workouts (1)</label>
      <a @click="showNewSessionModal = !showNewSessionModal" class="bg-orange-400 cursor-pointer hover:bg-orange-500 hover:text-white p-1 px-3 rounded">Start</a>
    </div>
    <div :class="[ allMyEvents ? 'h-64 overflow-y-scroll' : 'h-[6.25rem]' ]" class="bg-orange-200 mt-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 rounded-t p-2 gap-2 overflow-hidden transition-all duration-250 ease">
      <div @click="showModal = true" v-for="n in 1" class="h-[5.5rem] bg-orange-400 hover:bg-orange-500 hover:text-white cursor-pointer col-span-1 rounded p-2">
        <h1 class="truncate">PUSH A</h1>
        <p class="text-sm truncate">Started 11-05-2023 10:32</p>
        <p class="text-sm mt-1 pt-1 border-t border-gray-700">6 exercises</p>
      </div>
    </div>
    <div @click="allMyEvents = !allMyEvents" class="bg-orange-400 rounded-b p-1 cursor-pointer text-center pr-3"><Icon :class="{ 'rotate-180' : allMyEvents }" name="heroicons:chevron-down-solid"/></div>
  </div>

  <div class="w-full mb-4">
    <label class="underline">Færdig workout sessioner (20)</label>
    <div :class="[ allDoneSessions ? 'h-64 overflow-y-scroll' : 'h-[6.25rem]' ]" class="bg-orange-200 mt-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 rounded-t p-2 gap-2 overflow-hidden transition-all duration-250 ease">
      <div @click="showModal = true" v-for="n in 20" class="h-[5.5rem] bg-orange-400 hover:bg-orange-500 hover:text-white cursor-pointer col-span-1 rounded p-2">
        <h1 class="truncate">PUSH A</h1>
        <p class="text-sm truncate">Ended 11-05-2023 10:32</p>
        <p class="text-sm mt-1 pt-1 border-t border-gray-700">6 exercises</p>
      </div>
    </div>
    <div @click="allDoneSessions = !allDoneSessions" class="bg-orange-400 rounded-b p-1 cursor-pointer text-center pr-3"><Icon :class="{ 'rotate-180' : allDoneSessions }" name="heroicons:chevron-down-solid"/></div>
  </div>

</template>