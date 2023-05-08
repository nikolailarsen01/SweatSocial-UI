<template>
  <div>
    <DefaultHeader />
    <div class="p-5 grid grid-cols-12">
      <!--   Shortcuts   -->
      <div class="col-span-3">
        icons here
      </div>

      <!--   Content   -->
      <div class="col-span-6 bg-gray-100 p-5 min-h-screen">
        <slot />
      </div>

      <!--   Ads   -->
      <div class="col-span-3">

      </div>
    </div>
  </div>
</template>
