
<script setup lang="ts">
import InfiniteLoading from 'v3-infinite-loading'

import http from "~/middleware/http"

const postNew = ref(false)
const posts = ref<any>([])
const identifier = ref(0)
let page = 1

const infiniteHandler = async (state: any) => {
  let res = await http.get(`post${page > 1 ? '?page=' + page : ''}`)
  posts.value = [...posts.value, ...res.data.data]

  if(res.data.data.length == 0)
    state.complete()
  else
    state.loaded()
  
  page++
}

const openModal = () => {
  postNew.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  postNew.value = false
  document.body.style.overflow = 'unset'
}
</script>

<template>
  <PostNew :open="postNew" @close="closeModal" />
  <div class="flex justify-center">
    <div class="bg-gray-100 flex justify-center max-w-4xl w-full flex-col items-center">
      <button @click="openModal"  class="my-2 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0">Create a new post</button>
      <div id="posts" v-for="post in posts" class="w-full">
        <PostFeed :post="post" />
      </div>
      <InfiniteLoading target="#posts" @infinite="infiniteHandler" :identifier="identifier" />
    </div>
  </div>
</template>
