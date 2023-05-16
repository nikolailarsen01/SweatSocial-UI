<script lang="ts" setup>

import http from "~/middleware/http";

const allMyGroups = ref(false);
const allAcquaintances = ref(false);



const myGroups = ref([]);
await http.get(`group`).then(function (res){
  myGroups.value = res.data.data
});

const showModal = ref(false);
const groupPreview = ref({
  //dummy data
  id: 0,
  group_owner: {
    username: ""
  },
  group_description: "",
  locked: false,
  members: 0,
});
async function showGroupPreview(group : any){
  showModal.value = true;
  groupPreview.value = group;
}

</script>

<template>

  <Modal v-show="showModal">
    <div class="flex justify-end">
      <Icon class="cursor-pointer text-4xl" @click="showModal = false" name="heroicons:x-mark"/>
    </div>
    <div class="mb-4">
      <h1 class="truncate text-lg font-bold"><Icon v-if="groupPreview.locked" name="heroicons:lock-closed"/> {{ groupPreview.group_name }}</h1>
      <div class="text-sm mt-1 pt-1 border-t border-gray-700">
        <div class="flex place-items-center gap-2 bg-stone-400 w-fit p-2 pr-4 rounded-full">
          <img src="/nikolai_wojack.png" class="rounded-full h-10 w-10">
          <p>{{ groupPreview.group_owner.username }}<br>
            <span class="text-xs">Ejer</span>
          </p>
        </div>
      </div>
      <h2 v-if="groupPreview.group_description" class="text-md mt-1">Beskrivelse</h2>
      <p class="text-md">{{ groupPreview.group_description }}</p>
      <p class="text-sm mt-1 pt-1 border-t border-gray-700">{{ groupPreview.members + ' medlem(er)' }}</p>
    </div>
    <NuxtLink class="bg-stone-400 hover:bg-stone-500 p-2 rounded" :to="'/groups/'+groupPreview.id">Gå til gruppe</NuxtLink>
  </Modal>

  <div class="w-full bg-gradient-to-r from-stone-400 to-stone-600 rounded mb-4">
    <div class="p-5 pt-12 rounded-b text-3xl underline">Grupper</div>
  </div>

  <div class="w-full mb-2">
    <div class="flex justify-between">
      <label class="underline">Mine grupper (2)</label>
      <NuxtLink to="/groups/create" class="bg-stone-400 hover:bg-stone-500 hover:text-white p-1 px-3 rounded">Ny</NuxtLink>
    </div>
    <div :class="[ allMyGroups ? 'h-64 overflow-y-scroll' : 'h-[5.25rem]' ]" class="bg-stone-200 mt-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 rounded-t p-2 gap-2 overflow-hidden transition-all duration-250 ease">
      <div @click="showGroupPreview(group)" v-for="group in myGroups" class="h-18 bg-stone-400 hover:bg-stone-500 hover:text-white cursor-pointer col-span-1 rounded p-2">
        <h1 class="truncate"><Icon v-if="group.locked" name="heroicons:lock-closed"/> {{ group.group_name }}</h1>
        <p class="text-sm mt-1 pt-1 border-t border-gray-700">{{ group.members + ' medlem(er)' }}</p>
      </div>
    </div>
    <div @click="allMyGroups = !allMyGroups" class="bg-stone-400 rounded-b p-1 cursor-pointer text-center pr-3"><Icon :class="{ 'rotate-180' : allMyGroups }" name="heroicons:chevron-down-solid"/></div>
  </div>

  <div class="w-full mb-2">
    <label class="underline">Grupper bekendte deltager i (5)</label>
    <div :class="[ allAcquaintances ? 'h-64 overflow-y-scroll' : 'h-[5.25rem]' ]" class="bg-stone-200 mt-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 rounded-t p-2 gap-2 overflow-hidden transition-all duration-250 ease">
      <div @click="showModal = true" v-for="n in 5" class="h-max-18 h-18 bg-stone-400 hover:bg-stone-500 hover:text-white cursor-pointer col-span-1 rounded p-2">
        <h1 class="truncate">Vandretur på himmelbjerget</h1>
        <p class="text-sm mt-1 pt-1 border-t border-gray-700 truncate">264 medlemmer - 2 bekendte</p>
      </div>
    </div>
    <div @click="allAcquaintances = !allAcquaintances" class="bg-stone-400 rounded-b p-1 cursor-pointer text-center pr-3"><Icon :class="{ 'rotate-180' : allAcquaintances }" name="heroicons:chevron-down-solid"/></div>
  </div>

  <div class="w-full mb-2">
    <label class="underline">Opslag fra dine grupper</label>
    <div class="min-h-[10rem] bg-stone-200 mt-1 grid grid-cols-1 rounded-t p-2 gap-2 overflow-hidden">
      <div @click="showModal = true" v-for="n in 5" class="h-max-18 h-18 bg-stone-400 hover:bg-stone-500 hover:text-white cursor-pointer col-span-1 rounded p-2">
        <h1 class="truncate">DETTE ER ET OPSLAG</h1>
        <p class="text-sm mt-1 pt-1 border-t border-gray-700">LIKES KOMMENTARER OSV</p>
      </div>
    </div>
  </div>

</template>