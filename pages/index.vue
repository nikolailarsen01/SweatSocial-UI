
<script setup lang="ts">
import { ref } from 'vue'

let postNew = ref(false)
</script>

<template>
  <PostNew :open="postNew" @close="postNew = false" />
  <div class="flex justify-center">
    <div class="bg-gray-100 px-4 pt-2 flex justify-center max-w-4xl w-full flex-col items-center">
      <button @click="postNew = true">aaa</button>
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
