<script setup lang="ts">
const router = useRouter();
useHead(() => {
  return {
    title: "Profil",
  };
});

onMounted(() => {
  if (!localStorage.getItem("API-Token")) router.push("/auth");
});
</script>

<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">Joe</div>
  </div>
</template>
