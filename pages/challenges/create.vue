<template>
  <div class="w-full bg-gradient-to-r from-rose-400 to-rose-600 rounded mb-4">
    <div class="p-5 pt-12 rounded-b text-3xl underline w-full flex justify-between">Udfordringer <NuxtLink to="/challenges">Tilbage</NuxtLink></div>
  </div>

  <div class="w-full">
    <form class="grid grid-cols-2 gap-2">
      <div class="col-span-2">
        <label for="title">Udfordring titel*</label>
        <input type="text" name="title" id="title" class="w-full rounded p-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300" />
      </div>
      <div class="col-span-2">
        <label for="description">Beskrivelse</label>
        <textarea name="description" id="description" type="text" class="w-full rounded p-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300" />
      </div>
      <div>
        <label for="startdate">Start dato*</label>
        <input type="date" name="startdate" id="startdate" class="w-full rounded p-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300" />
      </div>
      <div>
        <label for="enddate">Slut dato*</label>
        <input type="date" name="enddate" id="enddate" class="w-full rounded p-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300" />
      </div>
      <button class="w-full rounded p-3 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 col-span-2">Opret Udfordring</button>

    </form>
  </div>
</template>