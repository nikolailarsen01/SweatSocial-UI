<template>
  <div>
    <div>
      <ClientOnly>
        <DefaultHeader />
      </ClientOnly>
    </div>
    <div class="pt-[65px]">
      <slot />
    </div>
  </div>
</template>
