<script lang="ts" setup>

const mealplan = ref([
  {
    open: true,
    meals: [

    ]
  },
  {
    open: false,
    meals: [

    ]
  },
  {
    open: false,
    meals: [

    ]
  },
  {
    open: false,
    meals: [

    ]
  },
]);

</script>

<template>
  <div class="w-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded mb-4">
    <div class="p-5 pt-12 rounded-b text-3xl underline w-full flex justify-between">Madplaner <NuxtLink to="/mealplans">Tilbage</NuxtLink></div>
  </div>

  <div class="w-full">
    <form class="grid grid-cols-2 gap-2">
      <div class="col-span-2">
        <label for="name">Madplan navn*</label>
        <input type="text" name="name" id="name" class="w-full rounded p-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300" />
      </div>
      <div class="col-span-2">
        <label for="description">Beskrivelse</label>
        <textarea name="description" id="description" type="text" class="w-full rounded p-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300" />
      </div>
      <div class="col-span-2">
        <div class="rounded-t shadow-sm ring-1 ring-inset ring-gray-300 h-96 overflow-y-scroll p-2 flex gap-2 flex-col">
          <div v-for="(week, index) in mealplan">
            <div @click="week.open = !week.open" class="bg-gray-300 w-full flex justify-between place-items-center p-3 cursor-pointer" :class="[ week.open ? 'rounded-t' : 'rounded' ]">
              <h1 v-text="'Week '+ ++index"></h1>
              <Icon :class="{ 'rotate-180' : week.open }" name="heroicons:chevron-down-solid"/>
            </div>

            <div :class="[ week.open ? 'h-60 p-2 overflow-y-scroll' : 'h-0' ]" class="transition-all overflow-hidden duration-250 ease bg-gray-200 rounded-b grid gap-2">
              <div v-for="n in 10" class="w-full p-2 h-9 text-xs bg-gray-300 flex gap-5 rounded">
                <h1 class="max-w-30 truncate flex place-items-center">Leverpostej sandwich</h1>
                <div class="flex place-items-center">
                  <p>Portion(g):</p>
                  <input type="number" class="rounded h-5 w-14 p-1 shadow-sm ring-1 ring-inset ring-gray-300" />
                </div>
                <div class="flex place-items-center">
                  <p>Dag:</p>
                  <input type="number" class="rounded h-5 w-14 p-1 shadow-sm ring-1 ring-inset ring-gray-300" />
                </div>
                <div class="flex place-items-center">
                  <p>Tid:</p>
                  <input type="time" class="rounded h-5 w-18 p-1 shadow-sm ring-1 ring-inset ring-gray-300" />
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-300 hover:bg-gray-200 w-full text-center rounded p-3 cursor-pointer">
            <h1>Tilføj uge</h1>
          </div>
        </div>
        <a class="rounded-b py-2 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 block text-center w-full">
          Tilføj
        </a>
      </div>
      <input type="submit" value="Opret Gruppe" class="w-full rounded p-3 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 bg-gray-50 col-span-2">

    </form>
  </div>
</template>