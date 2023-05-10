<template>
  <div>
    <DefaultHeader />
    <div class="p-5 grid grid-cols-12 relative">
      <!--   Shortcuts   -->
      <div class="text-2xl flex lg:block text-white h-fit lg:sticky lg:col-span-3 col-span-12 justify-evenly gap-2 top-[50px] lg:mt-20 lg:pr-5">
        <h1 class="text-gray-800 mb-3 border-b border-gray-500 pb-2 hidden lg:block">Genveje</h1>
        <NuxtLink to="/events" class="flex place-items-center bg-sky-400 hover:bg-sky-500 gap-2 py-1 px-4 rounded-xl mb-2 w-full lg:justify-start justify-center">
          <Icon class="lg:text-5xl md:text-4xl text-3xl" name="uil:schedule" />
          <p class="hidden lg:block">Begivenheder</p>
        </NuxtLink>
        <NuxtLink to="/challenges" class="flex place-items-center bg-rose-400 hover:bg-rose-500 gap-2 py-1 px-4 rounded-xl mb-2 w-full lg:justify-start justify-center">
          <Icon class="lg:text-5xl md:text-4xl text-3xl" name="ph:fire-bold" />
          <p class="hidden lg:block">Udfordringer</p>
        </NuxtLink>
        <NuxtLink to="/groups" class="flex place-items-center bg-stone-400 hover:bg-stone-500 gap-2 py-1 px-4 rounded-xl mb-2 w-full lg:justify-start justify-center">
          <Icon class="lg:text-5xl md:text-4xl text-3xl" name="material-symbols:groups" />
          <p class="hidden lg:block">Grupper</p>
        </NuxtLink>
        <NuxtLink to="/mealplans" class="flex place-items-center bg-emerald-400 hover:bg-emerald-500 gap-2 py-1 px-4 rounded-xl mb-2 w-full lg:justify-start justify-center">
          <Icon class=" lg:text-5xl md:text-4xl text-3xl" name="material-symbols:fastfood-outline" />
          <p class="hidden lg:block">Madplaner</p>
        </NuxtLink>
        <NuxtLink to="/workouts" class="flex place-items-center bg-orange-400 hover:bg-orange-500 gap-2 py-1 px-4 rounded-xl mb-2 w-full lg:justify-start justify-center">
          <Icon class="lg:text-5xl md:text-4xl text-3xl" name="streamline:travel-hotel-dumbell-sports-weights-dumbbell-sport-fitness" />
          <p class="hidden lg:block">Workouts</p>
        </NuxtLink>

      </div>

      <!--   Content   -->
      <div class="lg:col-span-6 lg:col-start-4 col-span-12 bg-gray-100 p-5 min-h-screen">
        <div class="border-b border-gray-700 pb-4 mb-4">
          <form class="grid grid-cols-12 gap-2">
            <input type="text" placeholder="Søg efter opslag, grupper, personer osv..." class="col-span-10 w-full bg-gray-300 rounded-l p-2">
            <button type="submit" class="col-span-2 w-full bg-gray-300 rounded-r p-2 flex justify-center place-items-center gap-2">
              <p class="hidden lg:block">Søg</p>
              <Icon name="heroicons:magnifying-glass-20-solid"/>
            </button>
          </form>
        </div>
        <slot />
      </div>

      <!--   Ads   -->
      <div class="lg:col-span-3">
        <div class="p-5 w-80 mt-36 hidden lg:block">
          <img src="/whitewares-billige-køleskabe.png" class="rounded-t">
          <button class="bg-stone-500 w-full p-2 rounded-b text-white">KØB NU!!</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Index from "../pages/discover/index";
export default {
  components: {Index}
}
</script>