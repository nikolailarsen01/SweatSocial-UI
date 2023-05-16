<script lang="ts" setup>

import http from "~/middleware/http";
import VueRouter from 'vue-router'

const route = useRoute();
const group = ref([]);
const inviteModal = ref(false);

await http.get(`group/` + route.params.id).then(function (res){
  group.value = res.data.data;
});




</script>

<template>

  <Modal class="max-w-xl" v-show="inviteModal">
    <div class="flex justify-end">
      <Icon class="cursor-pointer text-4xl" @click="inviteModal = false" name="heroicons:x-mark"/>
    </div>
    <input type="text" placeholder="Brugernavn..." name="username" id="username" class="mt-2 rounded p-1 px-2 text-gray-900 shadow-sm w-full" />
    <button class="rounded p-1 px-2 text-gray-900 shadow-sm bg-stone-100 w-full mt-1">Send invitation</button>
  </Modal>

  <div class="flex justify-between mb-2">
    <button @click="inviteModal = true;" class="bg-stone-300 hover:bg-stone-400 cursor-pointer p-1 px-2 rounded">Inviter</button>
    <button class="bg-stone-300 hover:bg-stone-400 cursor-pointer p-1 px-2 rounded">Forlad gruppe</button>
  </div>

  <div class="bg-stone-300 p-2 rounded">
    <h1 class="text-2xl flex place-items-center gap-1"><Icon v-if="group.locked" name="heroicons:lock-closed"/>{{ group.group_name }}</h1>
    <div class="flex place-items-center gap-2 bg-stone-300 hover:bg-stone-400 cursor-pointer w-fit rounded-full">
      <img src="/nikolai_wojack.png" class="rounded-full h-10 w-10">
      <p>{{ group.group_owner.username }}<br>
        <span class="text-xs">Ejer</span>
      </p>
    </div>
    <p class="border-t border-gray-700 mt-2 pt-2">{{ group.group_description }}</p>
  </div>

  <div class="flex gap-2">
    <div class="flex place-items-center gap-2 bg-stone-300 hover:bg-stone-400 cursor-pointer w-fit p-2 px-4 mt-2 rounded">
      <p>{{ 'Vis ' + group.members + ' medlemmer' }}</p>
    </div>
  </div>
</template>