<script setup lang="ts">
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
const router = useRouter();
const navigation = [
  { name: "Hjem", href: "/", current: false },
  { name: "Venner", href: "/friends", current: false },
  { name: "Centre", href: "/centers", current: false },
];
const authStore = useAuthStore();
const baseUrl = ref(useRuntimeConfig().public.baseUrl);

function logout() {
  authStore.signOut();
  router.push("/");
}
</script>

<template>
  <Disclosure
    as="nav"
    class="bg-gradient-to-r from-cyan-400 to-blue-500 w-full h-24"
    v-slot="{ open }"
  >
    <div class="h-full grid grid-cols-12 p-3">
      <!-- Logo -->
      <div class="md:col-span-3 col-span-2">
        <div class="flex h-full place-items-center gap-5">
          <img
            class="h-14 w-auto"
            src="/SweatSocial_logo.png"
            alt="Your Company"
          />
          <h1 class="text-[2rem] lg:block hidden">SweatSocial</h1>
        </div>
      </div>

      <!-- Navigation -->
      <div class="md:col-span-6 col-span-1">
        <div class="grid-cols-3 grid h-full hidden md:grid">
          <div
            v-for="item in navigation"
            class="text-center flex place-items-center justify-center"
          >
            <NuxtLink
              :to="item.href"
              class="text-gray-800 hover:bg-blue-500 hover:text-white text-center rounded-md px-3 py-2 text-2xl font-medium"
              >{{ item.name }}</NuxtLink
            >
          </div>
        </div>
      </div>

      <!-- Right Section -->
      <div class="md:col-span-3 col-span-9 flex md:justify-center justify-end">
        <!-- Mobile menu button-->
        <DisclosureButton
          class="inline-flex items-center justify-center rounded-md p-2 md:hidden"
        >
          <span class="sr-only">Open main menu</span>
          <Icon
            v-if="!open"
            class="w-16 h-16 bg-blue-700 hover:bg-blue-600 rounded-full p-3 cursor-pointer"
            name="heroicons:bars-3-solid"
          />
          <Icon
            v-else
            class="w-16 h-16 bg-blue-700 hover:bg-blue-600 rounded-full p-3 cursor-pointer"
            name="heroicons:x-mark"
          />
        </DisclosureButton>

        <div class="flex h-full place-items-center gap-3 justify-end">
          <NuxtLink v-if="!authStore.user" to="/auth">
            <Icon
              class="w-16 h-16 bg-blue-700 hover:bg-blue-600 rounded-full p-3 cursor-pointer"
              name="heroicons:arrow-left-on-rectangle"
            />
          </NuxtLink>
          <NuxtLink v-if="authStore.user" to="/profile"
            ><img
              class="h-16 w-16 rounded-full"
              :src="baseUrl + authStore.user.profile_image_path"
              alt=""
          /></NuxtLink>
          <a v-if="authStore.user" @click="logout()"
            ><Icon
              class="w-16 h-16 bg-blue-700 hover:bg-blue-600 rounded-full p-3 cursor-pointer"
              name="heroicons:arrow-right-on-rectangle"
          /></a>
        </div>
      </div>
    </div>

    <DisclosurePanel
      class="bg-gradient-to-r from-cyan-400 to-blue-500 border-t md:hidden z-[999] relative"
    >
      <div class="space-y-1 px-2 pb-3 pt-2">
        <div
          v-for="item in navigation"
          class="text-center flex place-items-center hover:bg-blue-500 text-gray-800 hover:text-white rounded"
        >
          <NuxtLink
            :to="item.href"
            class="rounded-md px-3 py-2 text-lg font-medium truncate"
            >{{ item.name }}</NuxtLink
          >
        </div>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
