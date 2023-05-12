<script setup lang="ts">
import { ref } from 'vue'

import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const open = ref(false)

defineProps<{ 
  post: any,
}>()

const openModal = () => {
  open.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  open.value = false
  document.body.style.overflow = 'unset'
}

const displayDate: (dateStr: string) => string = (dateStr) => {
  let date = new Date(dateStr)

  return `${date.getDate()}. ${['Jan','Feb','Mar','Apr','Maj','Jun','Jul','Aug','Sep','Okt','Nov','Dec'][date.getMonth()]} ${date.getFullYear()}`
}
</script>

<template>
  <div class="bg-white border rounded-sm max-w-2xl mb-2">
    <div class="flex items-center px-4 py-3">
      <img class="h-8 w-8 rounded-full" :src="post.user?.avatar || 'gray.png'"/>
      <div class="ml-3 ">
        <span class="text-sm font-semibold antialiased block leading-tight">{{ post.user?.username || '...' }}</span>
        <span class="text-gray-600 text-xs block">{{ displayDate(post.created_at || post.updated_at) }}</span>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-4" v-if="post.images?.length > 1">
      <div v-for="i in Math.min(post.images.length, 3)"><img :src="`https://eee2-185-19-132-71.ngrok-free.app/${post.images[i - 1]?.image}`" class="object-cover w-[1000px]" /></div>
      <div v-if="post.images.length > 3" class="bg-gray-200 justify-center flex">
        <span class="inline-block align-middle">See more...</span>
      </div>
    </div>
    <img :src="`https://eee2-185-19-132-71.ngrok-free.app/${post.images[0]?.image}`" class="object-cover w-[1000px]" v-else-if="post.images?.length > 0" />
    <p class="m-2">{{ post.post }}</p>
    <hr />
    <div v-if="post.linkable == 'event'  || post.linkable == 'challenge' || post.linkable == 'group' || post.linkable == 'workout'">
      <div class="flex flex-col relative">
        <div class="bg-gradient-to-r from-sky-400 to-sky-700 h-[100px]" v-if="post.linkable == 'event'" />
        <div class="bg-gradient-to-r from-rose-400 to-rose-700 h-[100px]" v-else-if="post.linkable == 'challenge'" />
        <div class="bg-gradient-to-r from-stone-400 to-stone-700 h-[100px]" v-else-if="post.linkable == 'group'" />
        <div class="bg-gradient-to-r from-orange-400 to-orange-700 h-[100px]" v-else-if="post.linkable == 'workout'" />
        <div class="bg-gray-700 h-[100px]" v-else />
        <h1 class="text-[2.5rem] bottom-8 ml-1 text-white absolute">EVENT TITLE</h1>
        <h3 class="text-lg ml-1 bottom-1 text-white absolute">EVENT DATE</h3>
        <button class="bg-black hover:bg-gray-900 float-right absolute w-fit text-white py-2 px-4 bottom-1 right-1">Deltag</button>
      </div>
      <p>event description</p>
      <hr />
    </div>
    <div v-else-if="post.linkable == 'mealplan'">
      
      <p>event description</p>
      <hr />
    </div>
    <div class="flex items-center justify-between mx-4 mt-3 mb-2">
      <div class="flex gap-5">
        <Icon name="ph:thumbs-up" class="text-2xl" />
        <Icon name="uil:comment" class="text-2xl" @click="openModal" />
      </div>
    </div>
    <div class="font-semibold text-sm mx-4 mt-2 mb-4">{{ post.likes }} likes</div>
  </div>
  
  <Modal v-show="open" class="!bg-white !mb-0 max-w-full !h-full !p-0 !rounded-none">
    
    <div class="flex flex-row h-full">
      <div class="flex basis-3/4 bg-gray-900 align-center">
        <carousel :items-to-show="1" class="big-view">
          <slide v-for="slide in 10" :key="slide">
            <img :src="post.img || 'http://localhost:3000/nikolai_wojack.png'" />
          </slide>
          
          <template #addons>
            <navigation />
            <pagination />
          </template>
        </carousel>
      </div>
      <div class="basis-1/4 pt-14">
        <a class="absolute p-1 bg-gray-300 abcursor-pointer rounded-full w-12 h-12 text-center align-middle right-2 top-2 text-2xl" @click="closeModal"><Icon name="humbleicons:times" /></a>
        <div class="mx-2 mb-4 flex flex-col justify-between gap-x-6 py-5">
          <div class="flex gap-x-4">
            <img class="h-12 w-12 flex-none rounded-full bg-gray-50" src="http://localhost:3000/nikolai_wojack.png" alt="">
            <div class="min-w-0 flex-auto">
              <p class="mt-[-1rem] text-sm font-semibold leading-6 text-gray-900">Yi Long Ma</p>
              <p class="truncate text-xs leading-5 text-gray-500">@YiLongMa</p>
              <p class="text-xs leading-5 text-gray-500">Posted <time datetime="2023-01-23T13:23Z">3h ago</time></p>
            </div>
          </div>
          <div class="mt-2">
            hi everyone, im Yi Long Ma
          </div>
        </div>
        <p class="mx-2 my-0">Comments</p>
        <textarea class="w-full border-[1px] border-gray-300 p-2 border-solid outline-none" placeholder="Write a comment"></textarea>
        <div class="h-full relative overflow-y-scroll">
        <ul role="list" class="divide-y divide-gray-100 p-2  h-full">
          <li class="flex flex-col justify-between gap-x-6 py-5" v-for="i in 10" :key="i">
            <div class="flex gap-x-4">
              <img class="h-12 w-12 flex-none rounded-full bg-gray-50" src="http://localhost:3000/nikolai_wojack.png" alt="">
              <div class="min-w-0 flex-auto">
                <p class="mt-[-1rem] text-sm font-semibold leading-6 text-gray-900">Leslie Alexander</p>
                <p class="truncate text-xs leading-5 text-gray-500">@lisethedise</p>
                <p class="text-xs leading-5 text-gray-500">Posted <time datetime="2023-01-23T13:23Z">3h ago</time></p>
              </div>
            </div>
            <div class="mt-2">
              I dont like this, you look like a slut
            </div>
          </li>
        </ul>
      </div>
      </div>
    </div>
  </Modal>
  
</template>

<style>
.big-view .carousel__viewport {
  height: 96%;
}
.big-view .carousel__track {
  height: 100%;
}
.big-view .carousel__icon {
  fill: white;
}
.big-view .carousel__pagination-button::after{
  background-color: rgba(255, 255, 255, 0.5);
}
.big-view .carousel__pagination-button:hover::after, .carousel__pagination-button--active::after {
  background-color: white !important;
}
</style>