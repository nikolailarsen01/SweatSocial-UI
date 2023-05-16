<script lang="ts" setup>
import http from "~/middleware/http";
import VueRouter from 'vue-router'

const router = useRouter();
const route = useRoute();

const group = ref([]);
await http.get(`group/` + route.params.id).then(function (res){
  group.value = res.data.data;
});

const loading = ref(false)

async function update(){
  loading.value = true;
  await http.put(`group/` + route.params.id, {
    'group_name' : group.value.group_name,
    'group_description' : group.value.group_description,
    'locked' : group.value.locked,
  }).then(function (res){
    if (res.data.success){
      router.push("/groups/"+route.params.id);
    } else {
      loading.value = false;
    }
  });
}


</script>

<template>
  <div class="w-full bg-gradient-to-r from-stone-400 to-stone-600 rounded mb-4">
    <div class="p-5 pt-12 rounded-b text-3xl underline w-full flex justify-between">Grupper <NuxtLink :to="'/groups/' + route.params.id">Tilbage</NuxtLink></div>
  </div>

  <div class="w-full">
    <form @submit.prevent="update()" class="grid grid-cols-2 gap-2">
      <div class="col-span-2">
        <label for="name">Gruppe navn*</label>
        <input v-model="group.group_name" type="text" name="name" id="name" class="w-full rounded p-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300" required/>
      </div>
      <div class="col-span-2">
        <label for="description">Beskrivelse</label>
        <textarea v-model="group.group_description" name="description" id="description" type="text" class="w-full rounded p-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300" />
      </div>
      <div class="flex place-items-center gap-2">
        <input v-model="group.locked" true-value="1" false-value="0" type="checkbox" name="locked" id="locked" class="rounded p-1 px-2 text-gray-900 shadow-sm" />
        <label for="locked">Lukket gruppe</label>
      </div>
      <div v-if="loading" class="w-full flex justify-center rounded p-3 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 col-span-2">
        <img class="h-7" src="/loading.svg">
      </div>
      <button v-else class="w-full rounded p-3 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 col-span-2">Gem</button>

    </form>
  </div>
</template>