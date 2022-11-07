<script setup>
  import { reactive } from "vue";
  import Header from "./components/Header.vue";
  import Home from "./pages/home/Home.vue";

  const links = reactive([
    {
      label: "Home",
      path: "#"
    },
    {
      label: "New",
      path: "#"
    },
    {
      label: "Popular",
      path: "#"
    },
    {
      label: "Trending",
      path: "#"
    },
    {
      label: "Categories",
      path: "#"
    }
  ]);
</script>

<template>
  <div class="h-screen bg-off-white py-4 px-4 md:py-16">
    <div class="mx-auto max-w-5xl">
      <Header :links="links" />
      <Home />
    </div>
  </div>
</template>
