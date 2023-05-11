
<script setup lang="ts">
import { ref } from 'vue'

let postNew = ref(false)
</script>

<template>
  <PostNew :open="postNew" @close="postNew = false" />
  <div class="flex justify-center">
    <div class="bg-gray-100 px-4 pt-2 flex justify-center max-w-4xl w-full flex-col items-center">
      <button @click="postNew = true"  class="my-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0">Create a new post</button>
      <PostFeed :post="{}" />
      
      <PostFeed :post="{}" />
      
      <PostFeed :post="{}" />
      
      <PostFeed :post="{}" />
      
      <PostFeed :post="{}" />
      
      <PostFeed :post="{}" />
      
      <PostFeed :post="{}" />
      
      <PostFeed :post="{}" />
      
      <PostFeed :post="{}" />
      
      <PostFeed :post="{}" />
    </div>
  </div>
</template>
