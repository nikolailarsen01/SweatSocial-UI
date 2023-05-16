<script setup lang="ts">
import { ref } from 'vue'

import http from '~/middleware/http'

import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css'

const open = ref(false)

const props = defineProps<{ 
  post: any,
}>()

const comments = ref<any[]>(props.post.comments)
const identifier = ref(0)
let page = 1

const infiniteHandler = async (state: any) => {
  let res = await http.get(`post/${props.post.id}/comments${page > 1 ? '?page=' + page : ''}`)
  comments.value = [...comments.value, ...res.data.data]

  if(res.data.data.length == 0)
    state.complete()
  else
    state.loaded()
  
  page++
}

const handleSubmit = (e: Event) => {
  let form = new FormData(e.target as HTMLFormElement)

  http.post(`comment`, form).then(res => {
    console.log(res.data)
  })
}

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
        <Splide :options="{ rewind: true }" class="big-view w-full" aria-label="Vue Splide Example">
          <SplideSlide v-for="slide, i in post.images" :key="i">
            <img :src="`https://eee2-185-19-132-71.ngrok-free.app/${slide.image}`" class="object-contain" />
          </SplideSlide>
          <SplideSlide>
            <div class="grid grid-cols-1 content-center w-1/2 m-auto h-full">
              <div class="p-4 bg-sky-500 h-[500px]">
                {{ post }}
              </div>
            </div>
          </SplideSlide>
          <SplideSlide v-if="post.linkable != null">
            <div class="grid grid-cols-1 content-center w-1/2 m-auto h-full">
              <div class="p-4 bg-sky-500 h-[500px]">
                {{ post.linkable }}
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
      <div class="basis-1/4 pt-14">
        <a class="absolute p-1 bg-gray-300 abcursor-pointer rounded-full w-12 h-12 text-center align-middle right-2 top-2 text-2xl" @click="closeModal"><Icon name="humbleicons:times" /></a>
        <div class="mx-2 mb-4 flex flex-col justify-between gap-x-6 py-5">
          <div class="flex gap-x-4">
            <img class="h-12 w-12 flex-none rounded-full bg-gray-50"  :src="post.user?.avatar || 'gray.png'" alt="">
            <div class="min-w-0 flex-auto">
              <p class="mt-0 text-sm font-semibold leading-6 text-gray-900">{{ post.user?.username || '...' }}</p>
              <p class="text-xs leading-5 text-gray-500">{{ displayDate(post.created_at || post.updated_at) }}</p>
            </div>
          </div>
          <div class="mt-2">
            {{ post.post }}
          </div>
        </div>
        <p class="mx-2 my-0">Comments</p>
        <form @submit.prevent="handleSubmit">
          <textarea name="comment" class="w-full border-[1px] border-gray-300 p-2 border-solid outline-none" placeholder="Write a comment"></textarea>
          <button type="submit">AAA</button>
        </form>
        <div class="h-full relative overflow-y-scroll">
        <ul role="list" class="divide-y divide-gray-100 p-2  h-full">
          <p v-if="post.comments.length == 0">No comments :(</p>
          <li id="comments" class="flex flex-col justify-between gap-x-6 py-5" v-for="comment, i in post.comments" :key="i">
            <div class="flex gap-x-4">
              <img class="h-12 w-12 flex-none rounded-full bg-gray-50" src="http://localhost:3000/nikolai_wojack.png" alt="">
              <div class="min-w-0 flex-auto">
                <p class="mt-0 text-sm font-semibold leading-6 text-gray-900">Leslie Alexander</p>
                <p class="text-xs leading-5 text-gray-500">Posted <time datetime="2023-01-23T13:23Z">3h ago</time></p>
              </div>
            </div>
            <div class="mt-2">
              I dont like this, you look like a slut
            </div>
          </li>
          <InfiniteLoading target="#comments" @infinite="infiniteHandler" :identifier="identifier" />
        </ul>
      </div>
      </div>
    </div>
  </Modal>
  
</template>

<style>
.big-view .splide__track--draggable {
  height: 100%;
}
.big-view .splide__slide img {
  display: block;
  margin: auto auto;
  height: 100%;
}
</style>