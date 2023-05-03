<script setup lang="ts">
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'

//@ts-expect-error
import TagInput from '@mayank1513/vue-tag-input'
import '@mayank1513/vue-tag-input/dist/TagInput.css'

import UploadImages from "vue-upload-drop-images"

const props = defineProps<{ 
  open: boolean
}>()

const emit = defineEmits<{ 
  (event: 'close'): void
}>()

const form = ref({
  visibility: '',
  post: '',
  tags: [],
  images: [],
  linkable: ''
})

const handleSubmit = () => {

}
</script>

<template>
  <Dialog class="relative z-10" @close="emit('close')" :open="props.open">
    <div class="fixed inset-0 z-10 overflow-y-auto">
      <div class="flex min-h-full items-start justify-center p-4 text-center sm:p-0">
        <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg" style="max-width:800px">
          <div class="bg-gray-50 px-4 py-3 sm:px-6">
            <DialogTitle as="h3" class="text-base font-semibold leading-6 text-gray-900">Create a new post</DialogTitle>
          </div>
          <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div class="mt-3 text-center sm:mt-0 sm:text-left">
              {{ form }}
              <div class="mb-2 flex">
                <img class="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                <p class="mb-0 ml-2">
                  Swole Joe
                  <br />
                  <select @change="e => form.visibility = (e.target as HTMLSelectElement).value" class="py-0 px-1 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500">
                    <option value="all">All</option>
                    <option value="group">Group</option>
                    <option value="friends">Friends</option>
                    <option value="private">No one</option>
                  </select>
                </p>
              </div>
              <hr class="my-2" />
              <UploadImages @changed="(i) => form.images = i" />
              <div @input="e => form.post = (e.target as HTMLElement).innerText" contenteditable class="w-full border-0 outline-none resize-none mt-2" placeholder="I just ripped a fat one right next to my gym chrush. Yiksies"></div>
              <div class="mt-4 mb-2">
                <label for="tags">Add some tags</label>
                <tag-input v-model="form.tags" id="tags" />
              </div>
              <div class="flex flex-row-reverse space-x-reverse space-x-4 font-mono text-white text-sm font-bold leading-6 my-2">
                <button @click="() => 'event'==form.linkable?form.linkable='':form.linkable='event'" :class="form.linkable == 'event' ? 'bg-blue-600' : 'bg-blue-400'" class="w-12 h-12 rounded-lg flex items-center justify-center hover:bg-blue-700 shadow-lg text-[2rem]">
                  <Icon name="uil:schedule" />
                </button>
                <button @click="() => 'challenge'==form.linkable?form.linkable='':form.linkable='challenge'" :class="form.linkable == 'challenge' ? 'bg-blue-600' : 'bg-blue-400'" class="w-12 h-12 rounded-lg flex items-center justify-center hover:bg-blue-700 shadow-lg text-[2rem]">
                  <Icon name="ph:fire-bold" />
                </button>
                <button @click="() => 'group'==form.linkable?form.linkable='':form.linkable='group'" :class="form.linkable == 'group' ? 'bg-blue-600' : 'bg-blue-400'" class="w-12 h-12 rounded-lg flex items-center justify-center hover:bg-blue-700 shadow-lg text-[2rem]">
                  <Icon name="material-symbols:groups" />
                </button>
                <button @click="() => 'mealplan'==form.linkable?form.linkable='':form.linkable='mealplan'" :class="form.linkable == 'mealplan' ? 'bg-blue-600' : 'bg-blue-400'" class="w-12 h-12 rounded-lg flex items-center justify-center hover:bg-blue-700 shadow-lg text-[2rem]">
                  <Icon name="material-symbols:fastfood-outline" />
                </button>
                <button @click="() => 'workout'==form.linkable?form.linkable='':form.linkable='workout'" :class="form.linkable == 'workout' ? 'bg-blue-600' : 'bg-blue-400'" class="w-12 h-12 rounded-lg flex items-center justify-center hover:bg-blue-700 shadow-lg text-[2rem]">
                  <Icon name="streamline:travel-hotel-dumbell-sports-weights-dumbbell-sport-fitness" />
                </button>
              </div>

              <div class="mb-2">
                <div v-if="form.linkable == 'event'">
                  Add a event...
                </div>
                <div v-if="form.linkable == 'challenge'">
                  Add a challenge...
                </div>
                <div v-if="form.linkable == 'group'">
                  Add a group...
                </div>
                <div v-if="form.linkable == 'mealplan'">
                  Add a mealplan...
                </div>
                <div v-if="form.linkable == 'workout'">
                  Add a workout...
                </div>
              </div>

              <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0" @click="() => {emit('close'); handleSubmit()}">Post</button>
            </div>
          </div>
        </DialogPanel>
      </div>
    </div>
  </Dialog>
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