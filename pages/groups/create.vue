<template>
  <div class="w-full bg-gradient-to-r from-stone-400 to-stone-600 rounded mb-4">
    <div class="p-5 pt-12 rounded-b text-3xl underline w-full flex justify-between">Grupper <NuxtLink to="/groups">Tilbage</NuxtLink></div>
  </div>

  <div class="w-full">
    <form class="grid grid-cols-2 gap-2">
      <div class="col-span-2">
        <label for="name">Gruppe navn*</label>
        <input type="text" name="name" id="name" class="w-full rounded p-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300" />
      </div>
      <div class="col-span-2">
        <label for="description">Beskrivelse</label>
        <textarea name="description" id="description" type="text" class="w-full rounded p-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300" />
      </div>
      <div class="flex place-items-center gap-2">
        <input type="checkbox" name="startdate" id="startdate" class="rounded p-1 px-2 text-gray-900 shadow-sm" />
        <label for="startdate">Lukket gruppe</label>
      </div>
      <button class="w-full rounded p-3 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 col-span-2">Opret Gruppe</button>

    </form>
  </div>
</template>