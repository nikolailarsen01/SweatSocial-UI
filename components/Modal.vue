<template>
  <div class="modal-overlay bg-black bg-opacity-70">
    <div class="rounded-xl mb-60 container bg-gray-300 p-5 h-min">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>