<template>
  <div class="w-full bg-gradient-to-r from-sky-400 to-sky-700 rounded mb-4">
    <div class="p-5 pt-12 rounded-b text-3xl underline w-full flex justify-between">Begivenheder <NuxtLink to="/events">Tilbage</NuxtLink></div>
  </div>

  <div class="w-full">
    <form class="grid grid-cols-2 gap-2">
      <div>
        <label for="titel">Begivenhed titel*</label>
        <input type="text" name="titel" id="titel" class="w-full rounded p-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300" />
      </div>
      <div>
        <label for="date">Dato*</label>
        <input type="datetime-local" name="date" id="date" class="w-full rounded p-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300" />
      </div>
      <div>
        <label for="location">Lokation*</label>
        <input type="text" name="location" id="location" class="w-full rounded p-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300" />
      </div>
      <div>
        <label for="participants">Max deltagere</label>
        <input type="number" name="participants" id="participants" class="w-full rounded p-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300" />
      </div>
      <div class="col-span-2">
        <label for="description">Beskrivelse</label>
        <textarea name="description" id="description" type="text" class="w-full rounded p-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300" />
      </div>
      <div>
        <label for="type">Type*</label>
        <select name="type" id="type" class="w-full rounded p-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300" >
          <option>Indenfor</option>
          <option>Udendørs</option>
        </select>
      </div>
      <button class="w-full rounded p-3 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 col-span-2">Opret begivenhed</button>

    </form>
  </div>
</template>