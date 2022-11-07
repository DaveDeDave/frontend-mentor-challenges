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
  <div class="flex flex-row items-center">
    <div>
      <img src="/images/logo.svg" />
    </div>
    <div class="flex-1"></div>
    <div class="hidden md:block">
      <ul class="flex flex-row gap-6">
        <li v-for="{ label, path } in links">
          <NavLink :path="path" :label="label" />
        </li>
      </ul>
    </div>
    <div class="md:hidden">
      <img
        src="/images/icon-menu.svg"
        class="hover:cursor-pointer"
        @click="mobileMenuOpen = true"
      />
    </div>
    <div
      class="fixed top-0 right-0 z-20 flex h-screen w-[70%] items-center bg-white pl-10 transition duration-300 md:hidden"
      :class="{ 'translate-x-full': !mobileMenuOpen }"
    >
      <div class="absolute right-4 top-4">
        <img
          src="/images/icon-menu-close.svg"
          class="hover:cursor-pointer"
          @click="mobileMenuOpen = false"
        />
      </div>
      <ul class="flex flex-col gap-6">
        <li v-for="{ label, path } in links">
          <NavLink :path="path" :label="label" />
        </li>
      </ul>
    </div>
    <div
      v-if="mobileMenuOpen"
      class="fixed top-0 left-0 z-10 h-screen w-screen bg-black/40"
    ></div>
  </div>
</template>
