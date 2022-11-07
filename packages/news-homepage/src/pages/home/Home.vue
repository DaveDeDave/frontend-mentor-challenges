<script setup>
  import Information from "./sections/Information.vue";
  import NewArticles from "./sections/NewArticles.vue";
  import Articles from "./sections/Articles.vue";
</script>

<template>
  <div class="flex flex-col gap-6 py-12 md:flex-row">
    <Information />
    <NewArticles />
  </div>
  <Articles />
</template>
