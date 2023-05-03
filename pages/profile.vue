<script setup lang="ts">
const router = useRouter();
useHead(() => {
  return {
    title: "Profil",
  };
});
if (useCookie("API-Token").value == undefined) {
  router.push("/auth");
}
</script>

<template>
  <div>Profile page</div>
</template>
