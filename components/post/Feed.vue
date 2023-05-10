<script setup lang="ts">
defineProps<{ 
  post: any,
}>()
</script>

<template>
  <div class="bg-white border rounded-sm max-w-2xl mb-2">
    <div class="flex items-center px-4 py-3">
      <img class="h-8 w-8 rounded-full" :src="post.user?.avatar || 'gray.png'"/>
      <div class="ml-3 ">
        <span class="text-sm font-semibold antialiased block leading-tight">{{ post.user?.username || '...' }}</span>
        <span class="text-gray-600 text-xs block">{{ post.date || '...' }}</span>
      </div>
    </div>
    <img :src="post.img || 'http://localhost:3000/nikolai_wojack.png'" class="object-cover w-[1000px]" />
    <p class="m-2">description of this picture</p>
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
        <Icon name="uil:comment" class="text-2xl" />
      </div>
    </div>
    <div class="font-semibold text-sm mx-4 mt-2 mb-4">92,371 likes</div>
  </div>
</template>