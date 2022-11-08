<script setup>
  import { reactive } from "vue";

  const articles = reactive([
    {
      title: "Reviving Retro Pcs",
      description: "What happens when old PCs are given modern upgrades",
      src: "/images/image-retro-pcs.jpg"
    },
    {
      title: "Top 10 Laptops of 2022",
      description: "Our best picks for various needs and budgets",
      src: "/images/image-top-laptops.jpg"
    },
    {
      title: "The Growth of Gaming",
      description: "How the pandemic has sparked fresh opportunities",
      src: "/images/image-gaming-growth.jpg"
    }
  ]);
</script>

<template>
  <div class="flex flex-col gap-4 pt-4 pb-20 lg:flex-row lg:pb-0">
    <div
      v-for="({ title, description, src }, i) in articles"
      class="article flex-1 hover:cursor-pointer"
    >
      <div class="flex flex-row gap-4">
        <img :src="src" class="h-36" height="25" alt="Article image" />
        <div class="flex flex-col gap-2">
          <h2 class="text-3xl font-bold text-grayish-blue">
            {{ `0${i + 1}` }}
          </h2>
          <h3
            class="article-title font-extrabold text-very-dark-blue transition"
          >
            {{ title }}
          </h3>
          <p class="text-paragraph text-dark-grayish-blue">{{ description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .article:hover .article-title {
    color: hsl(5, 85%, 63%);
  }
</style>
