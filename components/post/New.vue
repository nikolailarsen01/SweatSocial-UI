<script setup lang="ts">
import http from "~/middleware/http"
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'

//@ts-expect-error
import TagInput from '@mayank1513/vue-tag-input'
import '@mayank1513/vue-tag-input/dist/TagInput.css'

import UploadImages from "vue-upload-drop-images"

const postStore = usePostStore()

const props = defineProps<{ 
  open: boolean
}>()

const emit = defineEmits(['close','post'])

const form = ref(postStore.$state)

watch(form, val => {
  postStore.set(val)
}, {deep: true, immediate: true})

const handleSubmit = () => {
  let formData = new FormData()
  
  if(form.value.visibility == 'group')
    formData.append('group_id', form.value.groupID)
  else if(form.value.visibility == 'friends')
    formData.append('friends_only', '1')

  formData.append('content', form.value.post)
  for(var i = 0; i < form.value.tags.length; i++){
    formData.append('tags[]', form.value.tags[i])
  }
  for(var i = 0; i < form.value.images.length; i++){
    formData.append('images[]', form.value.images[i])
  }

  if(form.value.linkable){
    formData.append('linkable_type', form.value.linkable)
    formData.append('linkable_id', form.value.linkableObj.id)
  }

  http.post(`post`, formData).then(res => {
    console.log(res.data)
    emit('post', res.data.data)

    postStore.$reset()
    emit('close')
  }).catch(err => {
    console.log(err.response)
  })
}
</script>

<template>
  <Modal v-show="props.open" class="!bg-white">
          <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 relative">
            <button class="absolute right-2 top-0 p-0 bg-gray-200 rounded-full w-12 h-12 text-xl" @click="emit('close')">
              <Icon name="humbleicons:times" class="mt-[-3px]" />
            </button>
            <div class="mt-3 text-center sm:mt-0 sm:text-left">
              <div class="mb-2 flex">
                <img class="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                <p class="mb-0 ml-2">
                  Swole Joe
                  <br />
                  <select @change="e => form.visibility = (e.target as HTMLSelectElement).value" class="py-0 px-1 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500">
                    <option value="all">All</option>
                    <option value="group">Group</option>
                    <option value="friends">Friends</option>
                  </select>
                  <select v-if="form.visibility == 'group'" @change="e => form.groupID = (e.target as HTMLSelectElement).value" class="ml-2 py-0 px-1 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500">
                    <option value="1">Grupe 1</option>
                    <option value="2">Group 2</option>
                    <option value="3">Group 3</option>
                  </select>
                </p>
              </div>
              <hr class="my-2" />
              <label for="description">description</label>
              <textarea v-model="form.post" class="w-full border-[1px] border-gray-300 p-2 border-solid outline-none resize-none rounded-md">
                {{ form.post }}
              </textarea>

              <UploadImages @changed="(i) => form.images = i" class="mb-2" v-if="form.hasImages" />

                
              <div class="grid grid-cols-1 md:grid-cols-2 md:gap-4 gap-2">
                <div class="mt-4 mb-2">
                <label for="tags">Add some tags</label>
                <tag-input v-model="form.tags" id="tags" />
              </div>
                <div class="flex justify-end gap-3 font-mono text-white text-sm font-bold leading-6 mb-2 md:mt-[38px]">
                <button @click="() => form.hasImages = !form.hasImages" :class="form.hasImages ? 'bg-gray-600' : 'bg-gray-400'" class="w-12 h-12 rounded-lg flex items-center justify-center hover:bg-gray-600 shadow-lg text-[2rem]">
                  <Icon name="material-symbols:android-camera-outline" />
                </button>
                <button @click="() => 'event'==form.linkable?form.linkable='':form.linkable='event'" :class="form.linkable == 'event' ? 'bg-sky-600' : 'bg-sky-400'" class="w-12 h-12 rounded-lg flex items-center justify-center hover:bg-sky-600 shadow-lg text-[2rem]">
                  <Icon name="uil:schedule" />
                </button>
                <button @click="() => 'challenge'==form.linkable?form.linkable='':form.linkable='challenge'" :class="form.linkable == 'challenge' ? 'bg-rose-600' : 'bg-rose-400'" class="w-12 h-12 rounded-lg flex items-center justify-center hover:bg-rose-600 shadow-lg text-[2rem]">
                  <Icon name="ph:fire-bold" />
                </button>
                <button @click="() => 'group'==form.linkable?form.linkable='':form.linkable='group'" :class="form.linkable == 'group' ? 'bg-stone-600' : 'bg-stone-400'" class="w-12 h-12 rounded-lg flex items-center justify-center hover:bg-stone-600 shadow-lg text-[2rem]">
                  <Icon name="material-symbols:groups" />
                </button>
                <button @click="() => 'mealplan'==form.linkable?form.linkable='':form.linkable='mealplan'" :class="form.linkable == 'mealplan' ? 'bg-emerald-600' : 'bg-emerald-400'" class="w-12 h-12 rounded-lg flex items-center justify-center hover:bg-emerald-600 shadow-lg text-[2rem]">
                  <Icon name="material-symbols:fastfood-outline" />
                </button>
                <button @click="() => 'workout'==form.linkable?form.linkable='':form.linkable='workout'" :class="form.linkable == 'workout' ? 'bg-orange-600' : 'bg-orange-400'" class="w-12 h-12 rounded-lg flex items-center justify-center hover:bg-orange-600 shadow-lg text-[2rem]">
                  <Icon name="streamline:travel-hotel-dumbell-sports-weights-dumbbell-sport-fitness" />
                </button>
              </div>
              </div>
              

              <div class="mb-2">
                <div v-if="form.linkable == 'event'  || form.linkable == 'challenge' || form.linkable == 'group' || form.linkable == 'workout'">
                  <label for="eventSelect" class="mt-2">Pick an {{ form.linkable }}</label>
                  <select @change="e => form.linkableObj.id = (e.target as HTMLSelectElement).value" id="eventSelect" class="w-full py-0 px-1 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500">
                    <option value="1">select 1</option>
                    <option value="2">select 2</option>
                    <option value="3">select 3</option>
                    <option value="4">select 4</option>
                  </select>
                  <p>No {{ form.linkable }} ;( <a href="#" class="text-blue-500">Create a new one</a></p>
                  <hr />
                  <div class="flex flex-col py-2">
                    <div class="bg-gradient-to-r from-sky-400 to-sky-700 h-[100px]" v-if="form.linkable == 'event'" />
                    <div class="bg-gradient-to-r from-rose-400 to-rose-700 h-[100px]" v-if="form.linkable == 'challenge'" />
                    <div class="bg-gradient-to-r from-stone-400 to-stone-700 h-[100px]" v-if="form.linkable == 'group'" />
                    <div class="bg-gradient-to-r from-orange-400 to-orange-700 h-[100px]" v-if="form.linkable == 'workout'" />
                    <h1 class="text-[2.5rem] mt-[-5.7rem] ml-1 text-white">{{ form.linkable.toUpperCase() }} TITLE</h1>
                    <h3 class="text-lg ml-1 text-white">{{ form.linkable.toUpperCase() }} DATE</h3>
                  </div>
                  <p>{{ form.linkable }} description</p>
                </div>
                <div v-else-if="form.linkable == 'mealplan'">
                  <label for="eventSelect" class="mt-2">Pick an {{ form.linkable }}</label>
                  <select @change="e => form.linkableObj.id = (e.target as HTMLSelectElement).value" id="eventSelect" class="w-full py-0 px-1 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500">
                    <option value="1">select 1</option>
                    <option value="2">select 2</option>
                    <option value="3">select 3</option>
                    <option value="4">select 4</option>
                  </select>
                  <p>No {{ form.linkable }} ;( <a href="#" class="text-blue-500">Create a new one</a></p>
                  <hr />
                  <div class="mt-2 flex gap-4 font-mono text-white text-sm font-bold leading-6 rounded-lg text-center">
                    <div class="flex-1 p-4 bg-gray-500 shadow-lg rounded-lg">01</div>
                    <div class="flex-1 p-4 bg-gray-500 shadow-lg rounded-lg">02</div>
                    <div class="flex-1 p-4 bg-gray-500 shadow-lg rounded-lg">03</div>
                    <div class="flex-1 p-4 bg-gray-500 shadow-lg rounded-lg">04</div>
                    <div class="flex-1 p-4 bg-gray-500 shadow-lg rounded-lg">05</div>
                    <div class="flex-1 p-4 bg-gray-500 shadow-lg rounded-lg">06</div>
                    <div class="flex-1 p-4 bg-gray-500 shadow-lg rounded-lg">07</div>
                  </div>
                </div>
              </div>
              <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0" @click="handleSubmit">Post</button>
            </div>
          </div>
        </Modal>
</template>

<style>
[placeholder]:empty::before {
  content: attr(placeholder);
}

ul[data-v-a216c5f8]::-webkit-scrollbar {
  height: 3px;
}

ul[data-v-a216c5f8]::-webkit-scrollbar-track {
  background: transparent; 
}

ul[data-v-a216c5f8]::-webkit-scrollbar-thumb {
  background: #8888887c;
  border-radius: 1rem;
}

input[data-v-a216c5f8] {
  border: 1px solid #e3e3e3;
}

input[data-v-a216c5f8]:focus-visible {
  outline: none;
  border-radius: 0.375rem;
}

.tag[data-v-a216c5f8]{
  background: rgb(59 130 246 / var(--tw-bg-opacity));
}
</style>