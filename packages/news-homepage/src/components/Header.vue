<script setup>
  import { ref } from "vue";
  import NavLink from "./NavLink.vue";

  defineProps({
    links: {
      type: Object,
      default: [],
      validator(links) {
        if (Object.prototype.toString.call(links) !== "[object Array]")
          return false;
        let valid = true;
        for (let i = 0; i < links.length && valid == true; i++) {
          if (
            Object.prototype.toString.call(links[i]) !== "[object Object]" ||
            typeof links[i].label !== "string" ||
            typeof links[i].path !== "string"
          ) {
            valid = false;
          }
        }
        return valid;
      }
    }
  });
  const mobileMenuOpen = ref(false);
</script>

<template>
  <header class="flex flex-row items-center">
    <div class="hover:cursor-pointer">
      <img src="/images/logo.svg" alt="logo" />
    </div>
    <div class="flex-1"></div>
    <div class="hidden lg:block">
      <ul class="flex flex-row gap-6">
        <li v-for="{ label, path } in links">
          <NavLink :path="path" :label="label" />
        </li>
      </ul>
    </div>
    <div class="lg:hidden">
      <img
        src="/images/icon-menu.svg"
        class="hover:cursor-pointer"
        alt="Open menu icon"
        @click="mobileMenuOpen = true"
      />
    </div>
    <div
      class="fixed top-0 right-0 z-20 flex h-screen w-[70%] items-center bg-white pl-10 transition duration-300 lg:hidden"
      :class="{ 'translate-x-full': !mobileMenuOpen }"
    >
      <div class="absolute right-4 top-6">
        <img
          src="/images/icon-menu-close.svg"
          class="hover:cursor-pointer"
          alt="Close menu icon"
          @click="mobileMenuOpen = false"
        />
      </div>
      <ul class="flex -translate-y-1/2 flex-col gap-6">
        <li v-for="{ label, path } in links">
          <NavLink :path="path" :label="label" class="text-xl" />
        </li>
      </ul>
    </div>
    <div
      v-if="mobileMenuOpen"
      class="fixed top-0 left-0 z-10 h-screen w-screen bg-black/40 lg:hidden"
    ></div>
  </header>
</template>
