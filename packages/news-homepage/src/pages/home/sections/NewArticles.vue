<script setup>
  import { reactive } from "vue";

  const articles = reactive([
    {
      title: "Hydrogen VS Electric Cars",
      description: "Will hydrogen-fueled cars ever catch uup to EVs?"
    },
    {
      title: "The Downsides of AI Artistry",
      description:
        "What are the possible adverse effects of on-demand AI image generation?"
    },
    {
      title: "Is VC Funding drying Up?",
      description:
        "Private funding by VC firms down 50% YOY. We take a look at what that means."
    }
  ]);
</script>

<template>
  <div class="flex flex-col bg-very-dark-blue py-6 px-4">
    <div class="mb-8 md:mb-0">
      <h2 class="text-4xl font-bold text-soft-orange">New</h2>
    </div>
    <div class="flex flex-1 flex-col justify-center gap-4 py-8">
      <template v-for="({ title, description }, i) in articles">
        <div class="news hover:cursor-pointer">
          <h3
            class="news-title mb-2 text-xl font-bold text-off-white transition"
          >
            {{ title }}
          </h3>
          <h5 class="text-sm text-dark-grayish-blue">{{ description }}</h5>
        </div>
        <hr v-if="i + 1 < articles.length" />
      </template>
    </div>
  </div>
</template>

<style>
  .news:hover .news-title {
    color: hsl(35, 77%, 62%);
  }
</style>
