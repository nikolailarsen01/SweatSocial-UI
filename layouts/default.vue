<template>
  <div>
    <ClientOnly>
      <DefaultHeader />
    </ClientOnly>
    <slot />
    <DefaultFooter />
  </div>
</template>
